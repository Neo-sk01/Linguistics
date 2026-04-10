import { JsonLd } from "@/components/seo/json-ld";
import { InterpretingServicesSection } from "@/components/layout/sections/interpreting-services";
import { buildPageMetadata } from "@/lib/seo";
import { getServiceSchema } from "@/lib/structured-data";

export const metadata = buildPageMetadata({
  title: "Interpreting Services in South Africa",
  description:
    "Professional interpreting services in South Africa for conferences, meetings, legal matters, and multilingual events.",
  path: "/interpreting",
  keywords: [
    "interpreting services South Africa",
    "simultaneous interpreting South Africa",
    "consecutive interpreting South Africa",
  ],
});

const interpretingSchema = getServiceSchema({
  name: "Interpreting Services in South Africa",
  description:
    "Professional simultaneous and consecutive interpreting services in South Africa.",
  path: "/interpreting",
  serviceType: "Interpreting services",
});

export default function InterpretingPage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={interpretingSchema} />
      <InterpretingServicesSection />
    </main>
  );
}
