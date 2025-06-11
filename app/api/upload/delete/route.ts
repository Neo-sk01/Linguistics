import { db } from "@/lib/db";
import { fileUploads, transcriptions } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function DELETE(request: NextRequest) {
  try {
    // Get file ID from URL parameters
    const { searchParams } = new URL(request.url);
    const fileId = searchParams.get('id');

    if (!fileId) {
      return NextResponse.json(
        { error: "File ID is required" },
        { status: 400 }
      );
    }

    // Get the file to delete
    const fileToDelete = await db
      .select()
      .from(fileUploads)
      .where(eq(fileUploads.id, fileId));

    if (fileToDelete.length === 0) {
      return NextResponse.json(
        { error: "File not found" },
        { status: 404 }
      );
    }

    const file = fileToDelete[0];

    // Transaction to delete associated transcription and file record
    await db.transaction(async (tx) => {
      // Delete associated transcription if exists
      await tx
        .delete(transcriptions)
        .where(eq(transcriptions.fileId, fileId));

      // Delete file record
      await tx
        .delete(fileUploads)
        .where(eq(fileUploads.id, fileId));
    });

    // Delete from Cloudinary
    if (file.cloudinaryPublicId) {
      try {
        const resourceType = file.fileType === 'audio' ? 'video' : 'raw';
        await cloudinary.uploader.destroy(file.cloudinaryPublicId, {
          resource_type: resourceType
        });
      } catch (cloudinaryError) {
        console.error("Error deleting from Cloudinary:", cloudinaryError);
        // We'll continue even if Cloudinary deletion fails
      }
    }

    return NextResponse.json({ 
      success: true,
      message: "File deleted successfully",
      id: fileId
    });
  } catch (error) {
    console.error("Error deleting file:", error);
    return NextResponse.json(
      { error: "Failed to delete file" },
      { status: 500 }
    );
  }
} 