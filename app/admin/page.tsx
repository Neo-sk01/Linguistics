"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FileIcon, Download, Loader2, Music, Filter, Search, RefreshCw } from "lucide-react";

type FileType = {
  id: string;
  filename: string;
  originalName: string;
  fileType: 'audio' | 'document';
  fileSize: number;
  cloudinaryUrl: string;
  uploadedAt: string;
  duration?: number;
  status: string;
};

export default function AdminPage() {
  const [files, setFiles] = useState<FileType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const fetchFiles = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/upload');
      if (!response.ok) {
        throw new Error('Failed to fetch files');
      }
      const data = await response.json();
      setFiles(data.files || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while fetching files');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' bytes';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  const formatDuration = (seconds?: number) => {
    if (!seconds) return 'N/A';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const filteredFiles = files.filter(file => {
    // Filter by type
    if (filterType !== 'all' && file.fileType !== filterType) {
      return false;
    }
    
    // Filter by search term
    if (searchTerm && !file.originalName.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  const updateStatus = async (fileId: string, newStatus: string) => {
    try {
      // Call the API endpoint to update the status
      const response = await fetch('/api/upload/status', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: fileId, status: newStatus }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update status');
      }
      
      // Update the local state to reflect the change
      const updatedFiles = files.map(file => {
        if (file.id === fileId) {
          return { ...file, status: newStatus };
        }
        return file;
      });
      setFiles(updatedFiles);
    } catch (err) {
      console.error('Failed to update status:', err);
      // Show error to user
      setError('Failed to update file status. Please try again.');
      // Reset error after 3 seconds
      setTimeout(() => setError(null), 3000);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button 
          onClick={fetchFiles}
          className="flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </button>
      </div>
      
      <div className="bg-card shadow-sm rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Files Management</h2>
        
        {/* Search and filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search files..."
              className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">All Files</option>
              <option value="audio">Audio Only</option>
              <option value="document">Documents Only</option>
            </select>
          </div>
        </div>
        
        {loading && (
          <div className="flex justify-center items-center h-32">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2">Loading files...</span>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && filteredFiles.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-lg text-gray-500">
              {files.length === 0 ? "No files have been uploaded yet." : "No files match your filters."}
            </p>
            {files.length === 0 && (
              <Link href="/upload-test" className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
                Upload a file
              </Link>
            )}
          </div>
        )}

        {filteredFiles.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border-b">File Name</th>
                  <th className="text-left p-3 border-b">Type</th>
                  <th className="text-left p-3 border-b">Size</th>
                  <th className="text-left p-3 border-b">Uploaded</th>
                  <th className="text-left p-3 border-b">Status</th>
                  <th className="text-left p-3 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredFiles.map((file) => (
                  <tr key={file.id} className="hover:bg-gray-50 border-b">
                    <td className="p-3">
                      <div className="flex items-center">
                        {file.fileType === 'audio' ? (
                          <Music className="h-5 w-5 text-blue-500 mr-2" />
                        ) : (
                          <FileIcon className="h-5 w-5 text-orange-500 mr-2" />
                        )}
                        <span className="font-medium truncate max-w-[200px]" title={file.originalName}>
                          {file.originalName}
                        </span>
                      </div>
                    </td>
                    <td className="p-3 capitalize">{file.fileType}</td>
                    <td className="p-3">{formatFileSize(file.fileSize)}</td>
                    <td className="p-3">{new Date(file.uploadedAt).toLocaleDateString()}</td>
                    <td className="p-3">
                      <select
                        className={`px-2 py-1 text-sm rounded border ${
                          file.status === 'pending' ? 'bg-blue-50 border-blue-200' :
                          file.status === 'in-progress' ? 'bg-yellow-50 border-yellow-200' :
                          file.status === 'completed' ? 'bg-green-50 border-green-200' :
                          'bg-gray-50 border-gray-200'
                        }`}
                        value={file.status}
                        onChange={(e) => updateStatus(file.id, e.target.value)}
                      >
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="failed">Failed</option>
                      </select>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <a
                          href={file.cloudinaryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 inline-flex items-center"
                        >
                          <Download className="h-4 w-4" />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
} 