import { Metadata } from "next";
import { FileUploadSection } from "@/components/layout/sections/file-upload";

export const metadata: Metadata = {
  title: "Upload Test | IMPERIUM LINGUISTICS",
  description: "Test page for file upload functionality",
};

export default function UploadTestPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <FileUploadSection />
    </main>
  );
} 