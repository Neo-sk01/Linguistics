# File Upload System Setup Guide

This guide will help you set up the file upload system with Drizzle, Neon Database, and Cloudinary.

## Prerequisites

1. **Neon Database Account**: Sign up at [neon.tech](https://neon.tech)
2. **Cloudinary Account**: Sign up at [cloudinary.com](https://cloudinary.com)

## Step 1: Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Database
DATABASE_URL="your_neon_database_connection_string"

# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
```

### Getting Your Database URL (Neon)

1. Go to [neon.tech](https://neon.tech) and create an account
2. Create a new project
3. Go to your project dashboard
4. Click on "Connection Details"
5. Copy the connection string (should look like: `postgresql://username:password@host/database?sslmode=require`)
6. Add this as your `DATABASE_URL`

### Getting Your Cloudinary Credentials

1. Go to [cloudinary.com](https://cloudinary.com) and create an account
2. Go to your dashboard
3. Find the "Account Details" section
4. Copy:
   - Cloud Name → `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
   - API Key → `CLOUDINARY_API_KEY`
   - API Secret → `CLOUDINARY_API_SECRET`

## Step 2: Database Setup

Run the following commands to set up your database:

```bash
# Generate the database migration
npm run db:generate

# Push the schema to your database
npm run db:push
```

## Step 3: Test the System

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/upload-test`

3. Try uploading an audio file or document

4. Check if the file appears in:
   - Your Cloudinary dashboard (Media Library)
   - The files list at `http://localhost:3000/files`

## Available Scripts

- `npm run db:generate` - Generate database migrations
- `npm run db:push` - Push schema changes to database
- `npm run db:studio` - Open Drizzle Studio (database GUI)

## API Endpoints

### Upload Files
- **POST** `/api/upload`
- Accepts: `multipart/form-data`
- Fields:
  - `file` (required): The file to upload
  - `notes` (optional): Additional notes
  - `userEmail` (optional): User's email

### Get Files
- **GET** `/api/upload`
- Query Parameters:
  - `fileType`: Filter by 'audio' or 'document'
  - `limit`: Number of files to return (default: 10)
  - `offset`: Pagination offset (default: 0)

## File Storage

- **Files are stored in Cloudinary** with the following structure:
  - Audio files: `linguistics/audio/`
  - Documents: `linguistics/documents/`

- **File metadata is stored in the database** including:
  - Original filename
  - File type and size
  - Cloudinary URL and public ID
  - Upload timestamp
  - Optional notes and user info
  - Processing status

## Features

✅ **Upload audio files and documents**
✅ **Store files in Cloudinary for reliable hosting**
✅ **Save metadata in Neon PostgreSQL database**
✅ **View uploaded files with filtering**
✅ **Download files directly from Cloudinary**
✅ **File size validation (100MB limit)**
✅ **File type detection and validation**
✅ **Responsive UI with error handling**

## Troubleshooting

### Database Connection Issues
- Make sure your `DATABASE_URL` is correct
- Check that your Neon database is running
- Try running `npm run db:push` again

### Cloudinary Upload Issues
- Verify your Cloudinary credentials
- Check that your API key has upload permissions
- Ensure file size is under 100MB

### API Errors
- Check browser console for detailed error messages
- Verify environment variables are set correctly
- Make sure database tables exist (run `npm run db:push`)

## Next Steps

You can extend this system by:
- Adding user authentication
- Implementing file processing workflows
- Adding file preview capabilities
- Setting up email notifications
- Adding batch upload functionality 