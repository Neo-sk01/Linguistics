import { v2 as cloudinary } from 'cloudinary';
import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure Cloudinary
// The script will use the CLOUDINARY_URL from your environment
// Make sure to run this in an environment where the CLOUDINARY_URL is set

const videoPath = path.join(__dirname, '../public/Untitled design.mp4');
const publicId = 'transcription-video';

async function uploadVideo() {
  try {
    console.log('Starting upload of video to Cloudinary...');
    
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: 'video',
          public_id: publicId,
          overwrite: true,
          folder: 'imperium-linguistics',
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      
      createReadStream(videoPath).pipe(uploadStream);
    });
    
    console.log('Upload successful!');
    console.log('Video URL:', result.secure_url);
    console.log('Public ID:', result.public_id);
    
    return result;
  } catch (error) {
    console.error('Upload failed:', error);
    throw error;
  }
}

uploadVideo()
  .then(() => console.log('Done!'))
  .catch(err => console.error('Error in script execution:', err));
