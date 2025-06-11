import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { db } from '@/lib/db';
import { fileUploads, transcriptions, NewTranscription } from '@/lib/db/schema';
import { eq, desc } from 'drizzle-orm';
// import { fileUploads } from '@/lib/db/schema';
// import { eq, desc } from 'drizzle-orm';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Helper function to get file type
function getFileType(mimeType: string): 'audio' | 'document' {
  if (mimeType.startsWith('audio/')) return 'audio';
  return 'document';
}

// Helper function to get client IP
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  return 'unknown';
}

export async function POST(request: NextRequest) {
  try {
    // Get form data from the request
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const notes = formData.get('notes') as string | null;
    const userEmail = formData.get('userEmail') as string | null;
    
    // Validate file
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Check file size (100MB limit)
    const maxSize = 100 * 1024 * 1024; // 100MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File size exceeds 100MB limit' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Determine upload folder based on file type
    const fileType = getFileType(file.type);
    const folder = fileType === 'audio' ? 'linguistics/audio' : 'linguistics/documents';
    
    // Upload to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          resource_type: fileType === 'audio' ? 'video' : 'raw',
          folder: folder,
          use_filename: true,
          unique_filename: true,
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    }) as any;

    if (!uploadResult) {
      throw new Error('Failed to upload to Cloudinary');
    }

    // TODO: Re-enable database storage in future version
    // Save metadata to database
    const fileRecord: any = {
      filename: uploadResult.public_id.split('/').pop() || file.name,
      originalName: file.name,
      fileType,
      mimeType: file.type,
      fileSize: file.size,
      cloudinaryUrl: uploadResult.secure_url,
      cloudinaryPublicId: uploadResult.public_id,
      notes: notes || null,
      userEmail: userEmail || null,
      userIp: getClientIP(request),
      status: 'uploaded',
    };

    // Add duration for audio files if available
    if (fileType === 'audio' && uploadResult.duration) {
      fileRecord.duration = Math.round(uploadResult.duration);
    }

    // Add page count for documents if available
    if (fileType === 'document' && uploadResult.pages) {
      fileRecord.pages = uploadResult.pages;
    }

    const [insertedFile] = await db.insert(fileUploads).values(fileRecord).returning();

    // Create a corresponding transcription job
    const transcriptionRecord: NewTranscription = {
      fileId: insertedFile.id,
      status: 'pending',
      priority: 'medium',
    };

    await db.insert(transcriptions).values(transcriptionRecord);

    return NextResponse.json({
      success: true,
      message: 'File uploaded successfully to Cloudinary',
      file: {
        id: insertedFile.id,
        filename: uploadResult.public_id.split('/').pop() || file.name,
        originalName: file.name,
        fileType: fileType,
        fileSize: file.size,
        cloudinaryUrl: uploadResult.secure_url,
        uploadedAt: new Date().toISOString(),
        duration: uploadResult.duration ? Math.round(uploadResult.duration) : undefined,
        pages: uploadResult.pages || undefined,
      },
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to upload file',
        details: process.env.NODE_ENV === 'development' ? error : undefined 
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');
    const fileType = searchParams.get('fileType') as 'audio' | 'document' | null;

    let files;
    
    if (fileType) {
      files = await db
        .select()
        .from(fileUploads)
        .where(eq(fileUploads.fileType, fileType))
        .limit(limit)
        .offset(offset)
        .orderBy(desc(fileUploads.uploadedAt));
    } else {
      files = await db
        .select()
        .from(fileUploads)
        .limit(limit)
        .offset(offset)
        .orderBy(desc(fileUploads.uploadedAt));
    }

    return NextResponse.json({
      success: true,
      files,
      pagination: {
        limit,
        offset,
        total: files.length,
      },
    });

  } catch (error) {
    console.error('Get files error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve files' },
      { status: 500 }
    );
  }
} 