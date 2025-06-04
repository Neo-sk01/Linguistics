import { sql } from 'drizzle-orm';
import { text, integer, pgTable, timestamp } from 'drizzle-orm/pg-core';

export const fileUploads = pgTable('file_uploads', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  filename: text('filename').notNull(),
  originalName: text('original_name').notNull(),
  fileType: text('file_type').notNull(), // 'audio' or 'document'
  mimeType: text('mime_type').notNull(),
  fileSize: integer('file_size').notNull(),
  cloudinaryUrl: text('cloudinary_url').notNull(),
  cloudinaryPublicId: text('cloudinary_public_id').notNull(),
  notes: text('notes'),
  uploadedAt: timestamp('uploaded_at').defaultNow(),
  
  // Optional fields for audio files
  duration: integer('duration'), // in seconds
  
  // Optional fields for documents
  pages: integer('pages'),
  
  // Processing status
  status: text('status').default('pending'), // pending, processed, completed, failed
  
  // User info (if you add authentication later)
  userEmail: text('user_email'),
  userIp: text('user_ip'),
});

export type FileUpload = typeof fileUploads.$inferSelect;
export type NewFileUpload = typeof fileUploads.$inferInsert; 