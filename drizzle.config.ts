import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env' });

// TODO: Re-enable drizzle configuration in future version
// Temporarily disabled to allow deployment without database setup
export default defineConfig({
  out: './lib/db/migrations',
  schema: './lib/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
}); 