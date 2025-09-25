import { Metadata } from "next";
import { WeTransferGuideSection } from "@/components/layout/sections/wetransfer-guide";

export const metadata: Metadata = {
  title: "WeTransfer Upload Guide | IMPERIUM LINGUISTICS",
  description: "Follow our step-by-step instructions to send audio files securely using WeTransfer.",
};

export default function WeTransferPage() {
  return (
    <main className="min-h-screen bg-[#0c1220]">
      <WeTransferGuideSection />
    </main>
  );
}
