import { Metadata } from "next";
import UploadTestComponent from "@/components/layout/sections/upload-test";

export const metadata: Metadata = {
  title: "Upload Test | IMPERIUM LINGUISTICS",
  description: "Test page for file upload functionality",
};

export default function UploadTestPage() {
  return (
    <main className="min-h-screen">
      <UploadTestComponent />
    </main>
  );
} 