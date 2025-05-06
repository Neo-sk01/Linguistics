import { v2 as cloudinary } from 'cloudinary';
import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { promises as fs } from 'fs';
import dotenv from 'dotenv';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env.local
dotenv.config({ path: path.join(__dirname, '../.env.local') });

// Configure Cloudinary with explicit credentials
// Extract from CLOUDINARY_URL=cloudinary://134328658898444:1kcQozynCV8om6Ll4UMSn6Q8OGg@dtn16m5iz
cloudinary.config({
  cloud_name: 'dtn16m5iz',
  api_key: '134328658898444',
  api_secret: '1kcQozynCV8om6Ll4UMSn6Q8OGg'
});

// Files to upload
const filesToUpload = [
  {
    path: path.join(__dirname, '../public/Untitled design.mp4'),
    publicId: 'transcription-video',
    folder: 'imperium-linguistics',
    resourceType: 'video'
  },
  {
    path: path.join(__dirname, '../public/video(transcription_page).mp4'),
    publicId: 'transcription-page-video',
    folder: 'imperium-linguistics',
    resourceType: 'video'
  },
  {
    path: path.join(__dirname, '../public/equipment/equipment1.png'),
    publicId: 'equipment1',
    folder: 'imperium-linguistics/equipment',
    resourceType: 'image'
  }
];

// Function to upload a single file
async function uploadFile({ path, publicId, folder, resourceType }) {
  try {
    console.log(`Starting upload of ${path} to Cloudinary...`);
    
    // Check if file exists
    try {
      await fs.access(path);
    } catch (error) {
      console.error(`File not found: ${path}`);
      return null;
    }
    
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: resourceType,
          public_id: publicId,
          overwrite: true,
          folder: folder,
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      
      createReadStream(path).pipe(uploadStream);
    });
    
    console.log('Upload successful!');
    console.log('URL:', result.secure_url);
    console.log('Public ID:', result.public_id);
    
    return {
      originalPath: path,
      cloudinaryUrl: result.secure_url,
      publicId: result.public_id
    };
  } catch (error) {
    console.error(`Upload failed for ${path}:`, error);
    return null;
  }
}

// Bulk upload all files
async function bulkUpload() {
  console.log('Starting bulk upload to Cloudinary...');
  
  const results = [];
  
  for (const file of filesToUpload) {
    const result = await uploadFile(file);
    if (result) {
      results.push(result);
    }
  }
  
  console.log('\n=== UPLOAD SUMMARY ===');
  console.log(`Total files attempted: ${filesToUpload.length}`);
  console.log(`Successfully uploaded: ${results.length}`);
  
  if (results.length > 0) {
    console.log('\nSuccessfully uploaded files:');
    results.forEach((result, index) => {
      console.log(`\n${index + 1}. ${path.basename(result.originalPath)}`);
      console.log(`   Cloudinary URL: ${result.cloudinaryUrl}`);
      console.log(`   Public ID: ${result.publicId}`);
    });
  }
  
  return results;
}

bulkUpload()
  .then(() => console.log('\nBulk upload complete!'))
  .catch(err => console.error('Error in script execution:', err));
