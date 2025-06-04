"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Music, Download, Calendar, User, HardDrive } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface FileRecord {
  id: string;
  filename: string;
  originalName: string;
  fileType: 'audio' | 'document';
  mimeType: string;
  fileSize: number;
  cloudinaryUrl: string;
  cloudinaryPublicId: string;
  notes?: string;
  uploadedAt: string;
  duration?: number;
  pages?: number;
  status: string;
  userEmail?: string;
  userIp: string;
}

interface FilesResponse {
  success: boolean;
  files: FileRecord[];
  pagination: {
    limit: number;
    offset: number;
    total: number;
  };
  error?: string;
}

export default function FilesListComponent() {
  const [files, setFiles] = useState<FileRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'audio' | 'document'>('all');

  const fetchFiles = async () => {
    try {
      setLoading(true);
      const url = filter === 'all' 
        ? '/api/upload' 
        : `/api/upload?fileType=${filter}`;
      
      const response = await fetch(url);
      const data: FilesResponse = await response.json();
      
      if (data.success) {
        setFiles(data.files);
        setError(null);
      } else {
        setError(data.error || 'Failed to fetch files');
      }
    } catch (err) {
      setError('An error occurred while fetching files');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, [filter]);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getFileIcon = (fileType: string) => {
    return fileType === 'audio' 
      ? <Music className="h-5 w-5 text-blue-500" />
      : <FileText className="h-5 w-5 text-green-500" />;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'uploaded': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <section className="container py-24 sm:py-32">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loading files...</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="container py-24 sm:py-32">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Uploaded Files
        </h2>
        <p className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground">
          Manage and view all uploaded files
        </p>
      </div>

      {error && (
        <Alert className="mb-6" variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Filter Buttons */}
      <div className="flex justify-center gap-2 mb-8">
        <Button
          variant={filter === 'all' ? 'default' : 'outline'}
          onClick={() => setFilter('all')}
        >
          All Files
        </Button>
        <Button
          variant={filter === 'audio' ? 'default' : 'outline'}
          onClick={() => setFilter('audio')}
        >
          Audio Files
        </Button>
        <Button
          variant={filter === 'document' ? 'default' : 'outline'}
          onClick={() => setFilter('document')}
        >
          Documents
        </Button>
      </div>

      {files.length === 0 ? (
        <Card className="max-w-md mx-auto text-center p-8">
          <CardContent>
            <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">No files found</h3>
            <p className="text-muted-foreground mb-4">
              No {filter === 'all' ? '' : filter} files have been uploaded yet.
            </p>
            <Button asChild>
              <a href="/upload-test">Upload Files</a>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {files.map((file) => (
            <Card key={file.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    {getFileIcon(file.fileType)}
                    <CardTitle className="text-base truncate" title={file.originalName}>
                      {file.originalName}
                    </CardTitle>
                  </div>
                  <Badge className={getStatusColor(file.status)}>
                    {file.status}
                  </Badge>
                </div>
                <CardDescription className="text-sm">
                  {file.mimeType}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-3">
                {/* File Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <HardDrive className="h-4 w-4 text-muted-foreground" />
                    <span>{formatFileSize(file.fileSize)}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{formatDate(file.uploadedAt)}</span>
                  </div>
                  
                  {file.userEmail && (
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="truncate">{file.userEmail}</span>
                    </div>
                  )}
                  
                  {file.duration && (
                    <div className="flex items-center gap-2">
                      <Music className="h-4 w-4 text-muted-foreground" />
                      <span>Duration: {formatDuration(file.duration)}</span>
                    </div>
                  )}
                  
                  {file.pages && (
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>Pages: {file.pages}</span>
                    </div>
                  )}
                </div>

                {/* Notes */}
                {file.notes && (
                  <div className="p-2 bg-muted rounded text-sm">
                    <strong>Notes:</strong> {file.notes}
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex items-center gap-1"
                    onClick={() => window.open(file.cloudinaryUrl, '_blank')}
                  >
                    <Download className="h-3 w-3" />
                    Download
                  </Button>
                  
                  {file.fileType === 'audio' && (
                    <Button size="sm" variant="outline">
                      Play
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Refresh Button */}
      <div className="text-center mt-8">
        <Button onClick={fetchFiles} variant="outline">
          Refresh
        </Button>
      </div>
    </section>
  );
} 