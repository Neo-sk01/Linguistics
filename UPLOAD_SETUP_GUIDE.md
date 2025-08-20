# Complete Upload Feature Setup Guide

## Current Status
Your upload features are already implemented but need proper configuration to work. The code includes:
- ✅ Upload API endpoint (`/api/upload`)
- ✅ File upload UI components
- ✅ Database schema for file storage
- ✅ Cloudinary integration for file hosting
- ✅ File listing page
- ❌ Missing: Environment variables configuration
- ❌ Missing: Database tables creation

## Step-by-Step Setup Instructions

### Step 1: Create Environment File
Create a `.env.local` file in your project root with the following content:

```env
# Database Configuration
DATABASE_URL="your_neon_database_connection_string"

# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
```

### Step 2: Set Up Neon Database

1. **Create Neon Account**
   - Go to [https://neon.tech](https://neon.tech)
   - Sign up for a free account

2. **Create a New Project**
   - Click "Create a project"
   - Choose a project name (e.g., "linguistics")
   - Select a region close to you
   - Click "Create project"

3. **Get Your Connection String**
   - In your project dashboard, click on "Connection Details"
   - Copy the connection string (it looks like):
     ```
     postgresql://username:password@ep-cool-darkness-123456.us-east-2.aws.neon.tech/neondb?sslmode=require
     ```
   - Add this to your `.env.local` file as `DATABASE_URL`

### Step 3: Set Up Cloudinary

1. **Create Cloudinary Account**
   - Go to [https://cloudinary.com](https://cloudinary.com)
   - Sign up for a free account

2. **Get Your Credentials**
   - Go to your Cloudinary Dashboard
   - In the "Account Details" section, you'll find:
     - **Cloud Name**: Add as `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
     - **API Key**: Add as `CLOUDINARY_API_KEY`
     - **API Secret**: Add as `CLOUDINARY_API_SECRET`

3. **Configure Upload Presets (Optional)**
   - Go to Settings > Upload
   - Create an upload preset for your linguistics files
   - Set upload folder paths if desired

### Step 4: Create Database Tables

Run these commands in your terminal:

```bash
# Install dependencies (if not already installed)
npm install

# Generate database migrations
npm run db:generate

# Push schema to database
npm run db:push

# Optional: Open Drizzle Studio to view your database
npm run db:studio
```

### Step 5: Test the Setup

1. **Check Environment Variables**
   - Visit `http://localhost:3000/api/test-env`
   - Verify all values show as "Set"

2. **Test File Upload**
   - Start the development server: `npm run dev`
   - Go to `http://localhost:3000/upload-test`
   - Try uploading a file (audio or document)
   - Supported formats:
     - Audio: MP3, WAV, M4A, FLAC
     - Documents: PDF, DOC, DOCX
   - Maximum file size: 100MB

3. **View Uploaded Files**
   - Go to `http://localhost:3000/files`
   - You should see your uploaded files listed
   - Verify download links work

### Step 6: Verify Storage

1. **Check Cloudinary**
   - Go to your Cloudinary Media Library
   - Look for folders: `linguistics/audio/` and `linguistics/documents/`
   - Your files should be visible there

2. **Check Database**
   - Run `npm run db:studio`
   - Open the provided URL in your browser
   - Check the `file_uploads` and `transcriptions` tables
   - You should see records for uploaded files

## Troubleshooting

### Common Issues and Solutions

1. **"DATABASE_URL environment variable is not set" Error**
   - Ensure `.env.local` file exists in project root
   - Verify DATABASE_URL is correctly set
   - Restart the development server

2. **"Failed to upload to Cloudinary" Error**
   - Double-check Cloudinary credentials
   - Ensure API key has upload permissions
   - Check Cloudinary dashboard for any quota limits

3. **Files Not Appearing in List**
   - Check browser console for errors
   - Verify database tables exist (`npm run db:push`)
   - Check API response at `/api/upload` endpoint

4. **"Failed to fetch files" Error**
   - Database connection might be down
   - Check Neon dashboard for database status
   - Verify DATABASE_URL is correct

### Debug Endpoints

- `/api/test-env` - Check if environment variables are set
- `/api/debug-upload` - Test Cloudinary connection
- `/api/upload` (GET) - Fetch list of uploaded files
- `/api/upload/status` - Check upload system status

## Features Overview

### What's Working
- ✅ File upload with drag-and-drop
- ✅ Progress tracking during upload
- ✅ File type validation
- ✅ Size limit enforcement (100MB)
- ✅ Cloudinary storage for files
- ✅ Database storage for metadata
- ✅ File listing and download
- ✅ Support for audio and document files
- ✅ Automatic transcription job creation

### Future Enhancements
- User authentication
- File deletion capability
- Batch upload support
- File preview
- Transcription processing
- Email notifications
- Admin dashboard

## Additional Notes

### Security Considerations
- The system currently accepts uploads without authentication
- Consider adding authentication before production deployment
- File type validation is performed on both client and server
- Files are stored securely in Cloudinary with unique IDs

### Performance Tips
- Large files may take time to upload
- Consider implementing chunked uploads for very large files
- Monitor Cloudinary bandwidth usage on free tier
- Database indexes are automatically created for optimal performance

## Need Help?

If you encounter issues:
1. Check the browser console for detailed error messages
2. Review server logs in the terminal
3. Verify all environment variables are correctly set
4. Ensure database and Cloudinary services are running
5. Test with smaller files first

## Quick Checklist

- [ ] Created `.env.local` file
- [ ] Added DATABASE_URL from Neon
- [ ] Added Cloudinary credentials
- [ ] Ran `npm run db:push`
- [ ] Tested upload at `/upload-test`
- [ ] Verified files appear at `/files`
- [ ] Checked Cloudinary Media Library
- [ ] Confirmed database records exist

Once all items are checked, your upload system should be fully functional!
