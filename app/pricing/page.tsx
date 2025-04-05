import { Metadata } from "next";
import { PricingSection } from "@/components/layout/sections/pricing";

export const metadata: Metadata = {
  title: "Pricing | IMPERIUM LINGUISTICS",
  description: "Professional language services pricing",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <PricingSection />
    </main>
  );
} 