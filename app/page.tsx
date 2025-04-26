import { AboutSection } from "@/components/layout/sections/about";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { HeroSection } from "@/components/layout/sections/hero";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import Link from "next/link";

export const metadata = {
  title: "IMPERIUM LINGUISTICS",
  description: "Professional language services",
  openGraph: {
    type: "website",
    url: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "IMPERIUM LINGUISTICS",
    description: "Professional language services",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "IMPERIUM LINGUISTICS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "IMPERIUM LINGUISTICS",
    description: "Professional language services",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
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
      <section className="container py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Have Questions?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Find answers to common questions about our services, processes, and more.
        </p>
        <Link 
          href="/faq" 
          className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block font-medium"
        >
          View Our FAQ
        </Link>
      </section>
      <ContactSection />
    </>
  );
}
