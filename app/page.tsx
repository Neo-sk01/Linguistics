import { AboutSection } from "@/components/layout/sections/about";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { HeroSection } from "@/components/layout/sections/hero";
import { SponsorsSection } from "@/components/layout/sections/sponsors";

export const metadata = {
  title: "imperium linguistics",
  description: "Professional language services",
  openGraph: {
    type: "website",
    url: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "imperium linguistics",
    description: "Professional language services",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "imperium linguistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "imperium linguistics",
    description: "Professional language services",
    images: [
      "/logo.jpeg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <AboutSection />
      <BenefitsSection />
      <ContactSection />
    </>
  );
}
