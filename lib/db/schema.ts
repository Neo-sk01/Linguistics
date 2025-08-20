import { sql } from 'drizzle-orm';
import { 
  text, 
  integer, 
  pgTable, 
  timestamp, 
  boolean, 
  serial, 
  varchar, 
  pgEnum,
  primaryKey
} from 'drizzle-orm/pg-core';
// Removed NextAuth adapter imports since we're using Clerk

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
  
  // User info with Clerk
  userId: text('user_id'), // Clerk user ID
  userEmail: text('user_email'), // Keep for backward compatibility
  userIp: text('user_ip'),
});

export const transcriptionStatusEnum = pgEnum('transcription_status', ['pending', 'in-progress', 'completed', 'failed']);
export const transcriptionPriorityEnum = pgEnum('transcription_priority', ['low', 'medium', 'high', 'urgent']);

export const transcriptions = pgTable('transcriptions', {
  id: serial('id').primaryKey(),
  fileId: text('file_id').notNull().references(() => fileUploads.id),
  userId: varchar('user_id', { length: 255 }), 
  status: transcriptionStatusEnum('status').default('pending'),
  priority: transcriptionPriorityEnum('priority').default('medium'),
  transcriptionText: text('transcription_text'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
  completedAt: timestamp('completed_at'),
});

// NextAuth tables removed - Clerk manages users externally

export type FileUpload = typeof fileUploads.$inferSelect;
export type NewFileUpload = typeof fileUploads.$inferInsert;
export type Transcription = typeof transcriptions.$inferSelect;
export type NewTranscription = typeof transcriptions.$inferInsert; 