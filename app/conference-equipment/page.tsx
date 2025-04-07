import { Metadata } from "next";
import { ConferenceEquipmentSection } from "@/components/layout/sections/conference-equipment";

export const metadata: Metadata = {
  title: "Conference Equipment | IMPERIUM LINGUISTICS",
  description: "World-class audio recording machines for all your conference needs",
};

export default function ConferenceEquipmentPage() {
  return (
    <main className="min-h-screen">
      <ConferenceEquipmentSection />
    </main>
  );
} 