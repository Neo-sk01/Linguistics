import cloudinary from './cloudinary';

// Server-side function to upload a file to Cloudinary
export async function uploadToCloudinary(
  file: string, 
  options: { folder?: string; public_id?: string; resource_type?: string } = {}
) {
  try {
    const result = await cloudinary.uploader.upload(file, {
      folder: options.folder || 'imperium-linguistics',
      public_id: options.public_id,
      resource_type: options.resource_type || 'auto',
    });
    
    return {
      url: result.secure_url,
      public_id: result.public_id,
      width: result.width,
      height: result.height,
    };
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
}

// Server-side function to delete a file from Cloudinary
export async function deleteFromCloudinary(publicId: string) {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error('Error deleting from Cloudinary:', error);
    throw error;
  }
}

// Helper function to generate Cloudinary URLs with transformations
export function getCloudinaryUrl(publicId: string, options: {
  width?: number;
  height?: number;
  crop?: string;
  quality?: number;
  format?: string;
} = {}) {
  return cloudinary.url(publicId, {
    secure: true,
    width: options.width,
    height: options.height,
    crop: options.crop || 'fill',
    quality: options.quality || 'auto',
    fetch_format: options.format || 'auto',
  });
} 