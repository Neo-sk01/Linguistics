import cloudinary from './cloudinary';

/**
 * Uploads a file to Cloudinary
 * @param {File} file - The file to upload
 * @param {string} folder - The folder to upload to (optional)
 * @returns {Promise<Object>} - The upload result
 */
export async function uploadToCloudinary(file, folder = 'linguistics') {
  if (!file) return null;
  
  // Create a FormData instance
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
  if (folder) {
    formData.append('folder', folder);
  }
  
  try {
    // Upload to Cloudinary using the fetch API
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/auto/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );
    
    return await response.json();
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    return null;
  }
}

/**
 * Gets a list of resources from a Cloudinary folder
 * @param {string} folder - The folder to get resources from
 * @param {string} resourceType - The type of resource (image, video, raw, etc.)
 * @returns {Promise<Array>} - The resources
 */
export async function getCloudinaryResources(folder = 'linguistics', resourceType = 'image') {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: folder,
      resource_type: resourceType,
      max_results: 100,
    });
    
    return result.resources;
  } catch (error) {
    console.error('Error getting Cloudinary resources:', error);
    return [];
  }
}
