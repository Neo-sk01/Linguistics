import { Metadata } from "next";
import FilesListComponent from "@/components/layout/sections/files-list";

export const metadata: Metadata = {
  title: "Uploaded Files | IMPERIUM LINGUISTICS",
  description: "View and manage uploaded files",
};

export default function FilesPage() {
  return (
    <main className="min-h-screen">
      <FilesListComponent />
    </main>
  );
} 