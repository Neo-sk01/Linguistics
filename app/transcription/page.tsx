import { JsonLd } from "@/components/seo/json-ld";
import { TranscriptionServicesSection } from "@/components/layout/sections/transcription-services";
import { buildPageMetadata } from "@/lib/seo";
import { getServiceSchema } from "@/lib/structured-data";

export const metadata = buildPageMetadata({
  title: "Transcription Services in South Africa",
  description:
    "Professional transcription services in South Africa for legal, business, educational, and general audio projects with clear turnaround options.",
  path: "/transcription",
  keywords: [
    "transcription services South Africa",
    "legal transcription South Africa",
    "audio transcription South Africa",
  ],
});

const transcriptionSchema = getServiceSchema({
  name: "Transcription Services in South Africa",
  description:
    "Professional transcription services in South Africa for legal, business, educational, and general audio projects.",
  path: "/transcription",
  serviceType: "Transcription services",
});

export default function TranscriptionPage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={transcriptionSchema} />
      <TranscriptionServicesSection />
    </main>
  );
}
