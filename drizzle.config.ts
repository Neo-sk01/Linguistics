import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

// Load environment variables from .env.local
config({ path: '.env.local' });

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