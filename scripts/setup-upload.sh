#!/bin/bash

# Upload Feature Setup Script
# Run with: bash scripts/setup-upload.sh

echo "================================================"
echo "      Linguistics Upload Feature Setup          "
echo "================================================"
echo ""

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << 'EOF'
# Database Configuration
# Get your connection string from https://neon.tech after creating a project
DATABASE_URL=""

# Cloudinary Configuration
# Get these from your Cloudinary dashboard at https://cloudinary.com/console
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
EOF
    echo "✅ Created .env.local file"
    echo ""
else
    echo "✅ .env.local file already exists"
    echo ""
fi

# Check for required dependencies
echo "📦 Checking dependencies..."
if ! npm list @neondatabase/serverless >/dev/null 2>&1; then
    echo "Installing missing dependencies..."
    npm install
fi
echo "✅ Dependencies installed"
echo ""

# Instructions for manual steps
echo "================================================"
echo "          MANUAL SETUP REQUIRED                "
echo "================================================"
echo ""
echo "Please complete these steps:"
echo ""
echo "1️⃣  NEON DATABASE SETUP:"
echo "   • Go to https://neon.tech"
echo "   • Create a free account"
echo "   • Create a new project"
echo "   • Copy the connection string"
echo "   • Add it to .env.local as DATABASE_URL"
echo ""
echo "2️⃣  CLOUDINARY SETUP:"
echo "   • Go to https://cloudinary.com"
echo "   • Create a free account"
echo "   • From your dashboard, copy:"
echo "     - Cloud Name → NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME"
echo "     - API Key → CLOUDINARY_API_KEY"
echo "     - API Secret → CLOUDINARY_API_SECRET"
echo "   • Add these to .env.local"
echo ""
echo "3️⃣  After adding credentials, run:"
echo "   • npm run db:push (to create database tables)"
echo "   • npm run dev (to start the app)"
echo ""
echo "4️⃣  Test your setup:"
echo "   • node scripts/test-upload-config.js"
echo ""
echo "📖 For detailed instructions, see: UPLOAD_SETUP_GUIDE.md"
echo ""

# Open .env.local in default editor if possible
if command -v code &> /dev/null; then
    echo "Opening .env.local in VS Code..."
    code .env.local
elif command -v nano &> /dev/null; then
    echo "You can edit .env.local with: nano .env.local"
elif command -v vim &> /dev/null; then
    echo "You can edit .env.local with: vim .env.local"
fi

echo ""
echo "================================================"
echo "Ready to proceed! Add your credentials to .env.local"
echo "================================================"
