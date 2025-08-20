#!/usr/bin/env node

/**
 * Test script to verify upload configuration
 * Run with: node scripts/test-upload-config.js
 */

const { config } = require('dotenv');
const path = require('path');

// Load environment variables
config({ path: path.join(process.cwd(), '.env.local') });
config({ path: path.join(process.cwd(), '.env') });

console.log('🔍 Checking Upload Configuration...\n');

let hasErrors = false;

// Check Database Configuration
console.log('📊 Database Configuration:');
if (process.env.DATABASE_URL) {
  // Mask sensitive parts of the connection string
  const url = process.env.DATABASE_URL;
  const masked = url.replace(/:[^@]+@/, ':****@').replace(/\/[^?]+/, '/****');
  console.log('  ✅ DATABASE_URL is set:', masked);
} else {
  console.log('  ❌ DATABASE_URL is not set');
  hasErrors = true;
}

console.log('');

// Check Cloudinary Configuration
console.log('☁️  Cloudinary Configuration:');
if (process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
  console.log('  ✅ NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME:', process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
} else {
  console.log('  ❌ NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not set');
  hasErrors = true;
}

if (process.env.CLOUDINARY_API_KEY) {
  console.log('  ✅ CLOUDINARY_API_KEY:', process.env.CLOUDINARY_API_KEY.substring(0, 4) + '****');
} else {
  console.log('  ❌ CLOUDINARY_API_KEY is not set');
  hasErrors = true;
}

if (process.env.CLOUDINARY_API_SECRET) {
  console.log('  ✅ CLOUDINARY_API_SECRET:', '****' + process.env.CLOUDINARY_API_SECRET.substring(process.env.CLOUDINARY_API_SECRET.length - 4));
} else {
  console.log('  ❌ CLOUDINARY_API_SECRET is not set');
  hasErrors = true;
}

console.log('');

// Test Cloudinary Connection
if (process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET && process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
  console.log('🔗 Testing Cloudinary Connection...');
  const cloudinary = require('cloudinary').v2;
  
  cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  
  cloudinary.api.ping()
    .then(() => {
      console.log('  ✅ Successfully connected to Cloudinary!');
    })
    .catch((error) => {
      console.log('  ❌ Failed to connect to Cloudinary:', error.message);
      hasErrors = true;
    });
}

console.log('');

// Test Database Connection
if (process.env.DATABASE_URL) {
  console.log('🔗 Testing Database Connection...');
  const { neon } = require('@neondatabase/serverless');
  
  try {
    const sql = neon(process.env.DATABASE_URL);
    sql`SELECT 1 as test`
      .then((result) => {
        console.log('  ✅ Successfully connected to Neon database!');
        console.log('');
        
        // Final Summary
        if (!hasErrors) {
          console.log('✨ All configurations are properly set!');
          console.log('   You can now run: npm run db:push');
          console.log('   Then start the app: npm run dev');
        } else {
          console.log('⚠️  Some configurations are missing.');
          console.log('   Please check the UPLOAD_SETUP_GUIDE.md for instructions.');
        }
      })
      .catch((error) => {
        console.log('  ❌ Failed to connect to database:', error.message);
        console.log('     Make sure your DATABASE_URL is correct and the database is accessible.');
        hasErrors = true;
      });
  } catch (error) {
    console.log('  ❌ Invalid DATABASE_URL format');
    hasErrors = true;
  }
} else {
  // Final Summary
  if (!hasErrors) {
    console.log('✨ Cloudinary configuration is properly set!');
    console.log('   Now add your DATABASE_URL to complete the setup.');
  } else {
    console.log('⚠️  Some configurations are missing.');
    console.log('   Please check the UPLOAD_SETUP_GUIDE.md for instructions.');
  }
}
