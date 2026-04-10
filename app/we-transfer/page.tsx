import { WeTransferGuideSection } from "@/components/layout/sections/wetransfer-guide";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Send Audio Files With WeTransfer",
  description:
    "Follow Imperium Linguistics' WeTransfer guide to send large audio files securely for transcription projects in South Africa.",
  path: "/we-transfer",
  keywords: [
    "send audio files for transcription",
    "WeTransfer transcription upload South Africa",
  ],
});

export default function WeTransferPage() {
  return (
    <main className="min-h-screen bg-white">
      <WeTransferGuideSection />
    </main>
  );
}
