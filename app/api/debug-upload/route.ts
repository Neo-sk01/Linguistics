import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest) {
  try {
    // Log environment vars (safely)
    console.log('Cloudinary config:', {
      cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ? 'Set' : 'Not set',
      api_key: process.env.CLOUDINARY_API_KEY ? 'Set' : 'Not set',
      api_secret: process.env.CLOUDINARY_API_SECRET ? 'Set' : 'Not set',
    });
    
    // Get form data from the request
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    
    // Validate file
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    console.log('File info:', {
      name: file.name,
      type: file.type,
      size: file.size,
    });

    try {
      // Convert file to buffer
      const buffer = Buffer.from(await file.arrayBuffer());
      console.log('Buffer created, size:', buffer.length);
      
      // Upload to Cloudinary (only)
      const uploadResult = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {
            resource_type: 'auto',
            folder: 'test_uploads',
          },
          (error, result) => {
            if (error) {
              console.error('Cloudinary error:', error);
              reject(error);
            } else {
              resolve(result);
            }
          }
        ).end(buffer);
      });

      return NextResponse.json({
        success: true,
        message: 'File uploaded successfully to Cloudinary (debug mode)',
        result: uploadResult,
      });
    } catch (uploadError) {
      console.error('Upload error details:', uploadError);
      return NextResponse.json({ 
        error: 'Upload error', 
        details: uploadError instanceof Error ? uploadError.message : 'Unknown error'
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Debug upload error:', error);
    return NextResponse.json(
      { 
        error: 'Debug upload error',
        errorType: error?.constructor?.name,
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 