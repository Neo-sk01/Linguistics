import { drizzle, NeonHttpDatabase } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';

declare global {
  // eslint-disable-next-line no-var
  var db: NeonHttpDatabase<typeof schema> | undefined;
}

const sql = neon(process.env.DATABASE_URL!);

const getDb = () => {
  if (process.env.NODE_ENV === 'development') {
    if (!global.db) {
      global.db = drizzle(sql, { schema });
    }
    return global.db;
  }
  return drizzle(sql, { schema });
};

export const db = getDb();

export type Database = typeof db; 