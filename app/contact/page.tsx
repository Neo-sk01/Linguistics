import { Metadata } from "next";
import { ContactSection } from "@/components/layout/sections/contact";

export const metadata: Metadata = {
  title: "Contact Us | IMPERIUM LINGUISTICS",
  description: "Get in touch with our team for professional linguistic services",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactSection />
    </main>
  );
} 