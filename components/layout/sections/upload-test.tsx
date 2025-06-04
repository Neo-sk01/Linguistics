"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface UploadResponse {
  success: boolean;
  message: string;
  file?: {
    id: string;
    filename: string;
    originalName: string;
    fileType: string;
    fileSize: number;
    cloudinaryUrl: string;
    uploadedAt: string;
    duration?: number;
    pages?: number;
  };
  error?: string;
}

export default function UploadTestComponent() {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [docFile, setDocFile] = useState<File | null>(null);
  const [notes, setNotes] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadResults, setUploadResults] = useState<UploadResponse[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  const uploadFile = async (file: File, notes?: string): Promise<UploadResponse> => {
    const formData = new FormData();
    formData.append('file', file);
    if (notes) formData.append('notes', notes);
    if (userEmail) formData.append('userEmail', userEmail);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    return await response.json();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!audioFile && !docFile) {
      setErrors(['Please select at least one file to upload']);
      return;
    }

    setIsUploading(true);
    setUploadResults([]);
    setErrors([]);

    const uploads: Promise<UploadResponse>[] = [];

    if (audioFile) {
      uploads.push(uploadFile(audioFile, notes));
    }

    if (docFile) {
      uploads.push(uploadFile(docFile, notes));
    }

    try {
      const results = await Promise.all(uploads);
      setUploadResults(results);
      
      const failedUploads = results.filter(result => !result.success);
      if (failedUploads.length > 0) {
        setErrors(failedUploads.map(result => result.error || 'Unknown error'));
      } else {
        // Reset form on successful upload
        setAudioFile(null);
        setDocFile(null);
        setNotes("");
        // Reset file inputs
        const audioInput = document.getElementById('audio-upload') as HTMLInputElement;
        const docInput = document.getElementById('doc-upload') as HTMLInputElement;
        if (audioInput) audioInput.value = '';
        if (docInput) docInput.value = '';
      }
    } catch (error) {
      console.error('Upload error:', error);
      setErrors(['An unexpected error occurred during upload']);
    } finally {
      setIsUploading(false);
    }
  };

  const resetForm = () => {
    setAudioFile(null);
    setDocFile(null);
    setNotes("");
    setUserEmail("");
    setUploadResults([]);
    setErrors([]);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const hasSuccessfulUploads = uploadResults.some(result => result.success);

  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Upload Files
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-12">
        Upload your audio files and documents for processing
      </h3>

      <div className="max-w-2xl mx-auto">
        {/* Error Messages */}
        {errors.length > 0 && (
          <Alert className="mb-6" variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <ul className="list-disc list-inside">
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        )}

        {/* Success Messages */}
        {hasSuccessfulUploads && (
          <Alert className="mb-6" variant="default">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription>
              <div className="text-green-800">
                <p className="font-semibold mb-2">Files uploaded successfully:</p>
                <ul className="space-y-1">
                  {uploadResults
                    .filter(result => result.success)
                    .map((result, index) => (
                      <li key={index} className="text-sm">
                        <strong>{result.file?.originalName}</strong> 
                        ({formatFileSize(result.file?.fileSize || 0)})
                        {result.file?.duration && (
                          <span> - Duration: {Math.floor(result.file.duration / 60)}:{(result.file.duration % 60).toString().padStart(2, '0')}</span>
                        )}
                        {result.file?.pages && (
                          <span> - Pages: {result.file.pages}</span>
                        )}
                      </li>
                    ))}
                </ul>
              </div>
            </AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <CardTitle>File Upload</CardTitle>
            <CardDescription>
              Upload audio files and documents for processing. Files are stored securely and processed automatically.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="grid w-full gap-1.5">
                <Label htmlFor="email">Email (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>

              {/* Audio Upload */}
              <div className="grid w-full gap-1.5">
                <Label htmlFor="audio">Audio File</Label>
                <div className="flex items-center justify-center w-full">
                  <label 
                    htmlFor="audio-upload" 
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-card/50 hover:bg-card/80 transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-3 text-primary" />
                      <p className="mb-2 text-sm text-muted-foreground">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
                        MP3, WAV, M4A (MAX. 100MB)
                      </p>
                      {audioFile && (
                        <p className="mt-2 text-sm font-medium text-primary">
                          Selected: {audioFile.name} ({formatFileSize(audioFile.size)})
                        </p>
                      )}
                    </div>
                    <Input 
                      id="audio-upload" 
                      type="file" 
                      className="hidden" 
                      accept="audio/*"
                      onChange={(e) => {
                        const files = e.target.files;
                        if (files && files.length > 0) {
                          setAudioFile(files[0]);
                        }
                      }}
                    />
                  </label>
                </div>
              </div>
              
              {/* Document Upload */}
              <div className="grid w-full gap-1.5">
                <Label htmlFor="document">Document</Label>
                <div className="flex items-center justify-center w-full">
                  <label 
                    htmlFor="doc-upload" 
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-card/50 hover:bg-card/80 transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <FileText className="w-8 h-8 mb-3 text-primary" />
                      <p className="mb-2 text-sm text-muted-foreground">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PDF, DOC, DOCX, TXT (MAX. 100MB)
                      </p>
                      {docFile && (
                        <p className="mt-2 text-sm font-medium text-primary">
                          Selected: {docFile.name} ({formatFileSize(docFile.size)})
                        </p>
                      )}
                    </div>
                    <Input 
                      id="doc-upload" 
                      type="file" 
                      className="hidden" 
                      accept=".pdf,.doc,.docx,.txt,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain"
                      onChange={(e) => {
                        const files = e.target.files;
                        if (files && files.length > 0) {
                          setDocFile(files[0]);
                        }
                      }}
                    />
                  </label>
                </div>
              </div>
              
              {/* Additional Notes */}
              <div className="grid w-full gap-1.5">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea 
                  id="notes" 
                  placeholder="Please provide any additional information about your files" 
                  value={notes} 
                  onChange={(e) => setNotes(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="flex justify-end gap-3">
                {hasSuccessfulUploads && (
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={resetForm}
                  >
                    Upload More Files
                  </Button>
                )}
                <Button 
                  type="submit" 
                  disabled={isUploading || (!audioFile && !docFile)}
                  className="min-w-[120px]"
                >
                  {isUploading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    'Upload Files'
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
} 