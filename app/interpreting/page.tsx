import { Metadata } from "next";
import { InterpretingServicesSection } from "@/components/layout/sections/interpreting-services";

export const metadata: Metadata = {
  title: "Interpreting Services | IMPERIUM LINGUISTICS",
  description: "Professional interpreting services in multiple languages for business, legal, medical and educational settings",
};

export default function InterpretingPage() {
  return (
    <main className="min-h-screen">
      <InterpretingServicesSection />
    </main>
  );
} 