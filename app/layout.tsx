import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ChatWidget from "@/components/ChatWidget";
import { JsonLd } from "@/components/seo/json-ld";
import { Navbar } from "@/components/layout/navbar";
import { cn } from "@/lib/utils";
import { absoluteUrl, siteConfig } from "@/lib/seo";
import { getOrganizationSchema } from "@/lib/structured-data";

import ConditionalFooter from "./conditional-footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const organizationSchema = getOrganizationSchema();

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name} | Language Services in South Africa`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.domain,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.domain,
    title: `${siteConfig.name} | Language Services in South Africa`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Language Services in South Africa`,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language} suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background flex flex-col", inter.className)}>
        <JsonLd data={organizationSchema} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <ConditionalFooter />
        <ChatWidget />
      </body>
    </html>
  );
}
