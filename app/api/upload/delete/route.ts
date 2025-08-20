import { db } from "@/lib/db";
import { fileUploads } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function DELETE(request: NextRequest) {
  try {
    // 1. Authentication check
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. Get file ID from URL
    const { searchParams } = new URL(request.url);
    const fileId = searchParams.get('id');
    if (!fileId) {
      return NextResponse.json({ error: "File ID is required" }, { status: 400 });
    }

    // 3. Get the file from the database
    const [file] = await db
      .select()
      .from(fileUploads)
      .where(eq(fileUploads.id, fileId))
      .limit(1);

    if (!file) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    // 4. Authorization check
    if (file.userId && file.userId !== userId) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // 5. Proceed with deletion
    await db.transaction(async (tx) => {
      // Delete from Cloudinary
      if (file.cloudinaryPublicId) {
        await cloudinary.uploader.destroy(file.cloudinaryPublicId);
      }
      // Delete the file record from the database
      await tx.delete(fileUploads).where(eq(fileUploads.id, fileId));
    });

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