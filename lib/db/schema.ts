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

// Database schema for Linguistics website
// File upload functionality has been removed 