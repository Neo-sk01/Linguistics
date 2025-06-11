"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FileIcon, Download, Loader2, Music } from "lucide-react";

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

export default function FilesPage() {
  const [files, setFiles] = useState<FileType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFiles() {
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
    }

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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Files</h1>
      
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

      {!loading && !error && files.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-lg text-gray-500">No files have been uploaded yet.</p>
          <Link href="/upload-test" className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
            Upload a file
          </Link>
        </div>
      )}

      {files.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {files.map((file) => (
            <div key={file.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-card">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center">
                  {file.fileType === 'audio' ? (
                    <Music className="h-6 w-6 text-blue-500 mr-2" />
                  ) : (
                    <FileIcon className="h-6 w-6 text-orange-500 mr-2" />
                  )}
                  <div>
                    <h3 className="font-medium truncate w-56" title={file.originalName}>
                      {file.originalName}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {formatFileSize(file.fileSize)} • {new Date(file.uploadedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
              
              {file.fileType === 'audio' && (
                <div className="text-sm text-muted-foreground mb-2">
                  Duration: {formatDuration(file.duration)}
                </div>
              )}
              
              <div className="flex items-center justify-between mt-4">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  file.status === 'uploaded' || file.status === 'pending' 
                    ? 'bg-blue-100 text-blue-800' 
                    : file.status === 'completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                }`}>
                  {file.status.charAt(0).toUpperCase() + file.status.slice(1)}
                </span>
                
                <a
                  href={file.cloudinaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 inline-flex items-center"
                >
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 