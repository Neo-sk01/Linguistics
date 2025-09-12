# 🚀 Quick Start - Upload Feature Setup

## ✅ Completed
- `.env.local` file created with placeholders

## 📋 Next Steps

### 1️⃣ Get Neon Database (5 minutes)
1. Open [https://neon.tech](https://neon.tech) in your browser
2. Click **"Start Free"** to create an account
3. After login, click **"Create a project"**
   - Project name: `linguistics` (or any name you prefer)
   - Region: Choose closest to you
   - Click **"Create project"**
4. On the project dashboard, look for **"Connection string"**
5. Click the **copy** button next to the connection string
6. In your `.env.local` file, paste it after `DATABASE_URL=`
   ```
   DATABASE_URL="postgresql://username:password@ep-cool-darkness-123456.us-east-2.aws.neon.tech/neondb?sslmode=require"
   ```

### 2️⃣ Get Cloudinary Credentials (5 minutes)
1. Open [https://cloudinary.com](https://cloudinary.com) in your browser
2. Click **"Sign up for free"**
3. After signup, you'll be on your **Dashboard**
4. Find the **"Account Details"** section (usually on the right side)
5. Copy these three values to your `.env.local`:
   ```
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloud_name"
   CLOUDINARY_API_KEY="123456789012345"
   CLOUDINARY_API_SECRET="abc-defghijk_lmnop"
   ```

### 3️⃣ Create Database Tables (1 minute)
In your terminal, run:
```bash
npm run db:push
```

### 4️⃣ Test Everything (2 minutes)
```bash
# Test configuration
node scripts/test-upload-config.js

# Start the app
npm run dev

# Open in browser
# http://localhost:3000/upload-test
```

## 📝 Example `.env.local` (with fake values)
```env
# Database Configuration
DATABASE_URL="postgresql://john_doe:secret123@ep-cool-darkness-123456.us-east-2.aws.neon.tech/neondb?sslmode=require"

# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="my-linguistics-app"
CLOUDINARY_API_KEY="123456789012345"
CLOUDINARY_API_SECRET="abc-defghijk_lmnop_qrs"
```

## ❓ Need Help?

### If Neon signup asks for payment:
- The free tier is sufficient (0.5 GB storage)
- No credit card required for free tier

### If Cloudinary asks for use case:
- Select "Personal Project" or "Development"
- Free tier includes 25 GB storage & 25 GB bandwidth/month

### Common Issues:
- **"DATABASE_URL not set"**: Make sure to save `.env.local` after adding credentials
- **"Failed to connect"**: Check for typos in credentials, ensure no extra quotes
- **"db:push fails"**: Verify DATABASE_URL is complete and correct

## 🎯 Success Indicators
✅ `test-upload-config.js` shows all green checkmarks
✅ Upload page loads without errors
✅ Files upload successfully
✅ Files appear in `/files` page
✅ Files visible in Cloudinary Media Library

---
**Time to complete: ~15 minutes**
