CREATE TABLE "file_uploads" (
	"id" text PRIMARY KEY NOT NULL,
	"filename" text NOT NULL,
	"original_name" text NOT NULL,
	"file_type" text NOT NULL,
	"mime_type" text NOT NULL,
	"file_size" integer NOT NULL,
	"cloudinary_url" text NOT NULL,
	"cloudinary_public_id" text NOT NULL,
	"notes" text,
	"uploaded_at" timestamp DEFAULT now(),
	"duration" integer,
	"pages" integer,
	"status" text DEFAULT 'pending',
	"user_email" text,
	"user_ip" text
);
