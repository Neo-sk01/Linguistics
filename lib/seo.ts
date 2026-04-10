import type { Metadata } from "next";

export const siteConfig = {
  name: "Imperium Linguistics",
  domain: "https://imperiumlinguistics.com",
  language: "en-ZA",
  locale: "en_ZA",
  description:
    "Imperium Linguistics provides professional transcription and interpreting services across South Africa for legal, business, educational, and conference needs.",
  ogImage: "/logo.jpeg",
  email: "nkuna@imperiumlinguistics.com",
  serviceArea: "South Africa",
} as const;

export const publicRoutes = [
  "/",
  "/transcription",
  "/interpreting",
  "/faq",
  "/contact",
  "/policies",
  "/we-transfer",
] as const;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.domain).toString();
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const image = absoluteUrl(siteConfig.ogImage);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      title: `${title} | ${siteConfig.name}`,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [image],
    },
  };
}
