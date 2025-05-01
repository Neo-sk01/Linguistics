'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [notes, setNotes] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<{
    success?: boolean;
    message?: string;
    error?: string;
  }>({});

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      setUploadStatus({
        success: false,
        error: 'Please select a file to upload'
      });
      return;
    }

    setIsUploading(true);
    setUploadStatus({});

    try {
      const formData = new FormData();
      formData.append('file', file);
      if (notes.trim()) {
        formData.append('notes', notes);
      }

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to upload file');
      }

      setUploadStatus({
        success: true,
        message: data.message || 'File uploaded successfully'
      });
      
      // Reset form
      setFile(null);
      setNotes('');
      
      // Reset file input
      const fileInput = document.getElementById('file-input') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus({
        success: false,
        error: error instanceof Error ? error.message : 'An error occurred during upload'
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Upload to Google Drive</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="file-input" className="block text-sm font-medium text-gray-700 mb-1">
            Select File
          </label>
          <input
            id="file-input"
            type="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 
                      file:mr-4 file:py-2 file:px-4 
                      file:rounded-md file:border-0 
                      file:text-sm file:font-semibold 
                      file:bg-blue-50 file:text-blue-700 
                      hover:file:bg-blue-100"
          />
          {file && (
            <p className="mt-1 text-sm text-gray-500">
              Selected: {file.name} ({(file.size / 1024).toFixed(2)} KB)
            </p>
          )}
        </div>
        
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
            Notes (Optional)
          </label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Add any notes about this file..."
          />
        </div>
        
        <button
          type="submit"
          disabled={isUploading || !file}
          className={`w-full py-2 px-4 rounded-md text-white font-medium 
                    ${isUploading || !file 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {isUploading ? 'Uploading...' : 'Upload to Google Drive'}
        </button>
      </form>
      
      {uploadStatus.success && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
          {uploadStatus.message}
        </div>
      )}
      
      {uploadStatus.error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          Error: {uploadStatus.error}
        </div>
      )}
    </div>
  );
} 