import { Metadata } from "next";
import { TranscriptionServicesSection } from "@/components/layout/sections/transcription-services";

export const metadata: Metadata = {
  title: "Transcription Services | IMPERIUM LINGUISTICS",
  description: "Professional transcription services - Same day, next day, you name it!",
};

export default function TranscriptionPage() {
  return (
    <main className="min-h-screen">
      <TranscriptionServicesSection />
    </main>
  );
} 