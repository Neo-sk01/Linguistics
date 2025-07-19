import { drizzle, NeonHttpDatabase } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';

// Cache for the database instance
let dbInstance: NeonHttpDatabase<typeof schema> | null = null;

// Function to create and initialize the database connection
const initializeDb = () => {
  if (!process.env.DATABASE_URL) {
    // This error will only be thrown at runtime if the URL is missing
    throw new Error('DATABASE_URL environment variable is not set.');
  }
  const sql = neon(process.env.DATABASE_URL);
  return drizzle(sql, { schema });
};

// Create a proxy to lazy-load the database instance
const dbProxy = new Proxy(
  {},
  {
    get: (target, prop) => {
      if (dbInstance === null) {
        dbInstance = initializeDb();
      }
      // Forward the property access to the actual db instance
      return Reflect.get(dbInstance, prop);
    },
  }
) as NeonHttpDatabase<typeof schema>;

export const db = dbProxy;

export type Database = NeonHttpDatabase<typeof schema>; 