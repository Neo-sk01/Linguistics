import { randomUUID } from 'crypto';
import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const transcriptionPriorityEnum = pgEnum('transcription_priority', [
  'low',
  'medium',
  'high',
  'urgent',
]);

export const transcriptionStatusEnum = pgEnum('transcription_status', [
  'pending',
  'in-progress',
  'completed',
  'failed',
]);

export const fileUploads = pgTable('file_uploads', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  filename: text('filename').notNull(),
  originalName: text('original_name').notNull(),
  fileType: text('file_type').notNull(),
  mimeType: text('mime_type').notNull(),
  fileSize: integer('file_size').notNull(),
  cloudinaryUrl: text('cloudinary_url').notNull(),
  cloudinaryPublicId: text('cloudinary_public_id').notNull(),
  notes: text('notes'),
  uploadedAt: timestamp('uploaded_at').defaultNow(),
  duration: integer('duration'),
  pages: integer('pages'),
  status: text('status').default('pending'),
  userId: text('user_id'),
  userEmail: text('user_email'),
  userIp: text('user_ip'),
});

export const transcriptions = pgTable('transcriptions', {
  id: serial('id').primaryKey(),
  fileId: text('file_id')
    .notNull()
    .references(() => fileUploads.id),
  userId: varchar('user_id', { length: 255 }),
  status: transcriptionStatusEnum('status').default('pending'),
  priority: transcriptionPriorityEnum('priority').default('medium'),
  transcriptionText: text('transcription_text'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
  completedAt: timestamp('completed_at'),
});

export type FileUpload = typeof fileUploads.$inferSelect;
export type NewFileUpload = typeof fileUploads.$inferInsert;
export type Transcription = typeof transcriptions.$inferSelect;
export type NewTranscription = typeof transcriptions.$inferInsert;
