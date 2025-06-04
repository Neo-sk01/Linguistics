// import { drizzle } from 'drizzle-orm/neon-http';
// import { neon } from '@neondatabase/serverless';
// import * as schema from './schema';

// if (!process.env.DATABASE_URL) {
//   throw new Error('DATABASE_URL is not set');
// }

// const sql = neon(process.env.DATABASE_URL);
// export const db = drizzle(sql, { schema });

// TODO: Re-enable database connection in future version
// Temporarily disabled to allow deployment without database setup
export const db = null;

export type Database = any; // typeof db; 