#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), '.env.local');

// Read the current file
let content = fs.readFileSync(envPath, 'utf8');

// Fix DATABASE_URL - remove 'psql ' prefix and extra quotes
content = content.replace(
  /DATABASE_URL="psql '([^']+)"/,
  'DATABASE_URL="$1'
);

// Remove channel_binding parameter if present (not needed for our use)
content = content.replace(
  /(&channel_binding=require)/g,
  ''
);

// Fix CLOUDINARY_CLOUD_NAME - remove leading space
content = content.replace(
  /NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=" ([^"]+)"/,
  'NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="$1"'
);

// Write the fixed content back
fs.writeFileSync(envPath, content, 'utf8');

console.log('✅ Fixed .env.local file formatting issues');
console.log('');
console.log('Fixed:');
console.log('  • Removed "psql \'" prefix from DATABASE_URL');
console.log('  • Removed extra space from CLOUDINARY_CLOUD_NAME');
console.log('  • Cleaned up DATABASE_URL parameters');
console.log('');
console.log('Now run: node scripts/test-upload-config.js to verify');
