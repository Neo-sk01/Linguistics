"use client";

import { useState, useCallback, useMemo, ChangeEvent } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { UploadCloud, File as FileIcon, CheckCircle, AlertCircle, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB
const ACCEPTED_FILE_TYPES = {
  "audio/mpeg": [".mp3"],
  "audio/wav": [".wav"],
  "audio/x-m4a": [".m4a"],
  "audio/flac": [".flac"],
  "application/pdf": [".pdf"],
  "application/msword": [".doc"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
};

export function FileUploadSection() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[]) => {
    if (fileRejections.length > 0) {
      const firstError = fileRejections[0].errors[0];
      setError(`Error: ${firstError.message}`);
      setUploadStatus("error");
      setUploadedFile(null);
      return;
    }

    if (acceptedFiles.length > 0) {
      setUploadedFile(acceptedFiles[0]);
      setError(null);
      setUploadStatus("idle");
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    maxFiles: 1,
    maxSize: MAX_FILE_SIZE,
    accept: ACCEPTED_FILE_TYPES,
  });

  const dropzoneClassName = useMemo(() =>
      cn(
        "flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer transition-colors duration-200 ease-in-out",
        isDragActive ? "border-primary" : "border-gray-300 dark:border-gray-600",
        isDragAccept ? "bg-green-100/50 dark:bg-green-900/50 border-green-500" : "",
        isDragReject ? "bg-red-100/50 dark:bg-red-900/50 border-red-500" : ""
      ),
    [isDragActive, isDragAccept, isDragReject]
  );
  
  const handleUpload = async () => {
    if (!uploadedFile) return;

    setUploadStatus("uploading");
    setUploadProgress(0);
    setError(null);

    const formData = new FormData();
    formData.append("file", uploadedFile);

    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener("progress", (event) => {
      if (event.lengthComputable) {
        const progress = Math.round((event.loaded / event.total) * 100);
        setUploadProgress(progress);
      }
    });

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        setUploadStatus("success");
      } else {
        try {
          const response = JSON.parse(xhr.responseText);
          setError(response.error || "An unknown error occurred.");
        } catch (e) {
          setError("Failed to upload file. Please check the server logs.");
        }
        setUploadStatus("error");
      }
    });

    xhr.addEventListener("error", () => {
      setError("An error occurred during the upload. Please try again.");
      setUploadStatus("error");
    });
    
    xhr.open("POST", "/api/upload", true);
    xhr.send(formData);
  };
  
  const removeFile = () => {
    setUploadedFile(null);
    setUploadProgress(0);
    setUploadStatus("idle");
    setError(null);
  }

  return (
    <section className="w-full max-w-2xl mx-auto py-12">
      <div className="bg-card shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-2">Upload Your Files</h2>
        <p className="text-muted-foreground text-center mb-6">Drag and drop your audio or document files here.</p>
        
        {uploadStatus === "idle" && !uploadedFile && (
          <div {...getRootProps({ className: dropzoneClassName })}>
            <input {...getInputProps()} />
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <UploadCloud className="w-10 h-10 mb-4 text-gray-500 dark:text-gray-400" />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                MP3, WAV, M4A, FLAC, PDF, DOC, DOCX (MAX. 100MB)
              </p>
            </div>
          </div>
        )}

        {uploadedFile && uploadStatus !== 'uploading' && uploadStatus !== 'success' && (
          <div className="bg-muted p-4 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileIcon className="w-8 h-8 text-primary" />
              <div>
                <p className="font-medium text-sm truncate max-w-xs">{uploadedFile.name}</p>
                <p className="text-xs text-muted-foreground">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <button onClick={removeFile} className="text-muted-foreground hover:text-destructive">
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {uploadStatus === 'uploading' && (
          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium text-primary">Uploading...</p>
              <p className="text-sm text-muted-foreground">{uploadProgress}%</p>
            </div>
            <Progress value={uploadProgress} className="w-full" />
          </div>
        )}

        {uploadStatus === 'success' && (
          <div className="bg-green-100 dark:bg-green-900/50 border border-green-500 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg relative flex items-center gap-3">
            <CheckCircle className="w-5 h-5" />
            <span className="block sm:inline">File uploaded successfully!</span>
            <button onClick={removeFile} className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {uploadStatus === 'error' && error && (
           <div className="bg-red-100 dark:bg-red-900/50 border border-red-500 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg relative flex items-center gap-3">
            <AlertCircle className="w-5 h-5" />
            <span className="block sm:inline">{error}</span>
            <button onClick={removeFile} className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {uploadedFile && !['uploading', 'success'].includes(uploadStatus) && (
           <Button onClick={handleUpload} disabled={uploadStatus === "uploading"} className="w-full mt-6">
            {uploadStatus === "uploading" ? "Uploading..." : "Upload File"}
          </Button>
        )}
      </div>
    </section>
  );
} 