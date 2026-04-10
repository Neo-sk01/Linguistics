import { ContactSection } from "@/components/layout/sections/contact";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact Imperium Linguistics",
  description:
    "Contact Imperium Linguistics for transcription and interpreting services in South Africa and request a response within one business day.",
  path: "/contact",
  keywords: [
    "contact transcription services South Africa",
    "contact interpreting services South Africa",
  ],
});

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactSection standalone />
    </main>
  );
}
