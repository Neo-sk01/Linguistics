import { db } from "@/lib/db";
import { fileUploads, transcriptions } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: "File ID and status are required" },
        { status: 400 }
      );
    }

    // Validate status is one of the allowed values
    const allowedStatuses = ["pending", "in-progress", "completed", "failed"];
    if (!allowedStatuses.includes(status)) {
      return NextResponse.json(
        { error: "Invalid status value" },
        { status: 400 }
      );
    }

    // Update the file status in the database
    const updatedFile = await db
      .update(fileUploads)
      .set({ status })
      .where(eq(fileUploads.id, id))
      .returning();

    // If the file has a transcription and status is completed, update transcription status too
    if (status === "completed") {
      const transcriptionRecords = await db
        .select()
        .from(transcriptions)
        .where(eq(transcriptions.fileId, id));

      if (transcriptionRecords.length > 0) {
        const transcription = transcriptionRecords[0];
        await db
          .update(transcriptions)
          .set({ 
            status: "completed",
            completedAt: new Date()
          })
          .where(eq(transcriptions.id, transcription.id));
      }
    }

    return NextResponse.json({ 
      success: true, 
      file: updatedFile.length > 0 ? updatedFile[0] : null 
    });
  } catch (error) {
    console.error("Error updating file status:", error);
    return NextResponse.json(
      { error: "Failed to update file status" },
      { status: 500 }
    );
  }
} 