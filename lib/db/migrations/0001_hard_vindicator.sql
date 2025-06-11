CREATE TYPE "public"."transcription_priority" AS ENUM('low', 'medium', 'high', 'urgent');--> statement-breakpoint
CREATE TYPE "public"."transcription_status" AS ENUM('pending', 'in-progress', 'completed', 'failed');--> statement-breakpoint
CREATE TABLE "transcriptions" (
	"id" serial PRIMARY KEY NOT NULL,
	"file_id" text NOT NULL,
	"user_id" varchar(255),
	"status" "transcription_status" DEFAULT 'pending',
	"priority" "transcription_priority" DEFAULT 'medium',
	"transcription_text" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"completed_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "transcriptions" ADD CONSTRAINT "transcriptions_file_id_file_uploads_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."file_uploads"("id") ON DELETE no action ON UPDATE no action;