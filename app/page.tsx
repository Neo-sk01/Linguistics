import { AboutSection } from "@/components/layout/sections/about";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { HeroSection } from "@/components/layout/sections/hero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Language Services in South Africa",
  description:
    "Imperium Linguistics provides professional transcription and interpreting services across South Africa for legal, business, educational, and conference projects.",
  path: "/",
  keywords: [
    "language services South Africa",
    "transcription services South Africa",
    "interpreting services South Africa",
  ],
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <ContactSection />
    </>
  );
}
