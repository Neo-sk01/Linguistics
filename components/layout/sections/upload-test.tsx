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
import { Upload, FileText, ExternalLink } from "lucide-react";

export default function UploadTestComponent() {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [docFile, setDocFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically send the data to a server
    console.log({
      audioFile,
      docFile,
      message
    });
    setSubmitted(true);
  };

  const resetForm = () => {
    setAudioFile(null);
    setDocFile(null);
    setMessage("");
    setSubmitted(false);
  };

  const openGoogleDrive = () => {
    window.open("https://drive.google.com", "_blank");
  };

  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Upload Files
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-12">
        Upload your audio files and documents for processing
      </h3>

      <div className="max-w-xl mx-auto">
        {submitted ? (
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-center">Thank You!</CardTitle>
              <CardDescription className="text-center">
                We've received your files. Our team will process them and contact you shortly.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center">
              <Button onClick={resetForm}>Upload More Files</Button>
            </CardFooter>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>File Upload</CardTitle>
              <CardDescription>
                Upload audio files and documents for processing. You can also upload directly to Google Drive.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Audio Upload */}
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="audio">Audio File</Label>
                  <div className="flex items-center justify-center w-full">
                    <label 
                      htmlFor="audio-upload" 
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-card/50 hover:bg-card/80"
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
                            Selected: {audioFile.name}
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
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-card/50 hover:bg-card/80"
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
                            Selected: {docFile.name}
                          </p>
                        )}
                      </div>
                      <Input 
                        id="doc-upload" 
                        type="file" 
                        className="hidden" 
                        accept=".pdf,.doc,.docx,.txt"
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

                {/* Google Drive Button */}
                <div className="grid w-full gap-1.5">
                  <Label>Upload to Google Drive</Label>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="flex items-center gap-2" 
                    onClick={openGoogleDrive}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Upload to Google Drive
                  </Button>
                </div>
                
                {/* Additional Notes */}
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="message">Additional Notes</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please provide any additional information about your files" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    type="submit" 
                    disabled={!audioFile && !docFile && !message.trim()}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
} 