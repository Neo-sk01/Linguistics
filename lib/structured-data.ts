import { absoluteUrl, siteConfig } from "./seo";

type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
  serviceType: string;
};

type FaqSchemaItem = {
  question: string;
  answer: string;
};

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl("#organization"),
    name: siteConfig.name,
    url: siteConfig.domain,
    email: siteConfig.email,
    areaServed: {
      "@type": "Country",
      name: siteConfig.serviceArea,
    },
    knowsAbout: ["Transcription services", "Interpreting services"],
  };
}

export function getServiceSchema({
  name,
  description,
  path,
  serviceType,
}: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: absoluteUrl(path),
    areaServed: {
      "@type": "Country",
      name: siteConfig.serviceArea,
    },
    provider: {
      "@type": "Organization",
      "@id": absoluteUrl("#organization"),
      name: siteConfig.name,
      url: siteConfig.domain,
    },
  };
}

export function getFaqSchema(items: FaqSchemaItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
