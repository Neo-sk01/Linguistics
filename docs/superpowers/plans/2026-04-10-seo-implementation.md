# SEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve Imperium Linguistics' South Africa-focused SEO foundation and strengthen the home, transcription, and interpreting pages for local lead generation.

**Architecture:** Centralize shared SEO values in small helper modules, wire them into the Next.js App Router metadata APIs, then update the core landing pages so each page has one clear search intent, better heading hierarchy, stronger internal links, and structured data that matches the public content.

**Tech Stack:** Next.js 14 App Router, TypeScript, React, Tailwind CSS, Next Metadata API, JSON-LD

---

## File Map

- Create: `lib/seo.ts`
  Responsibility: shared site config, canonical URL builder, public route list, page metadata helper
- Create: `components/seo/json-ld.tsx`
  Responsibility: reusable JSON-LD script renderer for server components
- Create: `lib/structured-data.ts`
  Responsibility: organization, service, and FAQ schema builders
- Create: `lib/faq.ts`
  Responsibility: canonical FAQ content shared between the client UI and the server-rendered FAQ schema
- Create: `app/robots.ts`
  Responsibility: production robots rules and sitemap declaration
- Create: `app/sitemap.ts`
  Responsibility: sitemap entries for the public indexable pages only
- Create: `app/env-test/layout.tsx`
  Responsibility: mark the utility route as `noindex`
- Create: `app/sentry-example-page/layout.tsx`
  Responsibility: mark the diagnostic route as `noindex`
- Modify: `app/layout.tsx`
  Responsibility: `en-ZA` locale, metadata defaults, shared organization schema
- Modify: `app/page.tsx`
  Responsibility: home page metadata
- Modify: `app/transcription/page.tsx`
  Responsibility: transcription metadata and service schema injection
- Modify: `app/interpreting/page.tsx`
  Responsibility: interpreting metadata and service schema injection
- Modify: `app/faq/page.tsx`
  Responsibility: FAQ metadata and FAQ schema injection
- Modify: `app/contact/page.tsx`
  Responsibility: contact metadata and standalone heading mode
- Modify: `app/policies/layout.tsx`
  Responsibility: policy page metadata via the shared helper
- Modify: `app/we-transfer/page.tsx`
  Responsibility: upload guide metadata via the shared helper
- Modify: `components/layout/sections/hero.tsx`
  Responsibility: primary South Africa-focused H1 and service CTAs
- Modify: `components/layout/sections/about.tsx`
  Responsibility: localized trust copy and heading hierarchy
- Modify: `components/layout/sections/benefits.tsx`
  Responsibility: intent-driven benefit copy instead of generic statements
- Modify: `components/layout/sections/contact.tsx`
  Responsibility: configurable heading level so the home page keeps a single H1
- Modify: `components/layout/sections/transcription-services.tsx`
  Responsibility: transcription landing page copy, H1, and lead CTAs
- Modify: `components/layout/sections/interpreting-services.tsx`
  Responsibility: interpreting landing page copy and lead path cleanup
- Modify: `components/layout/sections/faq.tsx`
  Responsibility: render shared FAQ data and keep question state stable while filtering

## Task 1: Build The Shared SEO Foundation

**Files:**
- Create: `lib/seo.ts`
- Create: `app/robots.ts`
- Create: `app/sitemap.ts`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Add the shared site config and metadata helper**

Create `lib/seo.ts` with:

```ts
import type { Metadata } from "next";

export const siteConfig = {
  name: "imperium linguistics",
  domain: "https://imperiumlinguistics.com",
  language: "en-ZA",
  locale: "en_ZA",
  description:
    "Imperium Linguistics provides professional transcription and interpreting services across South Africa for legal, business, educational, and conference needs.",
  ogImage: "/logo.jpeg",
  email: "nkuna@imperiumlinguistics.com",
  phone: "+27 12 345 6789",
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
      title: `${title} | Imperium Linguistics`,
      description,
      siteName: "imperium linguistics",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "imperium linguistics",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Imperium Linguistics`,
      description,
      images: [image],
    },
  };
}
```

- [ ] **Step 2: Add the robots metadata route**

Create `app/robots.ts` with:

```ts
import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/env-test", "/sentry-example-page"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: "https://imperiumlinguistics.com",
  };
}
```

- [ ] **Step 3: Add the sitemap metadata route**

Create `app/sitemap.ts` with:

```ts
import type { MetadataRoute } from "next";
import { absoluteUrl, publicRoutes } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return publicRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency:
      route === "/"
        ? "weekly"
        : route === "/transcription" || route === "/interpreting"
          ? "weekly"
          : "monthly",
    priority:
      route === "/"
        ? 1
        : route === "/transcription" || route === "/interpreting"
          ? 0.9
          : 0.7,
  }));
}
```

- [ ] **Step 4: Update the root layout metadata and locale**

Replace the metadata and `<html>` setup in `app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import ConditionalFooter from "./conditional-footer";
import ChatWidget from "@/components/ChatWidget";
import { absoluteUrl, siteConfig } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Imperium Linguistics | Language Services in South Africa",
    template: "%s | Imperium Linguistics",
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.domain,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.domain,
    title: "Imperium Linguistics | Language Services in South Africa",
    description: siteConfig.description,
    siteName: "imperium linguistics",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: "imperium linguistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imperium Linguistics | Language Services in South Africa",
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <ConditionalFooter />
        <ChatWidget />
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Run the build to catch type and metadata route errors**

Run:

```bash
npm run build
```

Expected: `Compiled successfully` and no type errors from `app/robots.ts`, `app/sitemap.ts`, or `app/layout.tsx`.

- [ ] **Step 6: Commit the foundation**

Run:

```bash
git add app/layout.tsx app/robots.ts app/sitemap.ts lib/seo.ts
git commit -m "feat: add shared SEO metadata foundation"
```

## Task 2: Add Structured Data And Noindex Controls

**Files:**
- Create: `components/seo/json-ld.tsx`
- Create: `lib/structured-data.ts`
- Create: `app/env-test/layout.tsx`
- Create: `app/sentry-example-page/layout.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Add the reusable JSON-LD component**

Create `components/seo/json-ld.tsx` with:

```tsx
type JsonLdProps = {
  data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

- [ ] **Step 2: Add the organization, service, and FAQ schema builders**

Create `lib/structured-data.ts` with:

```ts
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
    "@type": "Organization",
    "@id": absoluteUrl("#organization"),
    name: "imperium linguistics",
    url: siteConfig.domain,
    email: siteConfig.email,
    telephone: siteConfig.phone,
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
      name: "imperium linguistics",
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
```

- [ ] **Step 3: Inject organization schema into the root layout**

Update `app/layout.tsx` to include:

```tsx
import { JsonLd } from "@/components/seo/json-ld";
import { getOrganizationSchema } from "@/lib/structured-data";

const organizationSchema = getOrganizationSchema();

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
```

- [ ] **Step 4: Add `noindex` layouts for non-public routes**

Create `app/env-test/layout.tsx` and `app/sentry-example-page/layout.tsx` with the same shape:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function UtilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
```

- [ ] **Step 5: Re-run the build to validate schema helpers and route layouts**

Run:

```bash
npm run build
```

Expected: `Compiled successfully` and no import-cycle or server-component errors from the new SEO helpers.

- [ ] **Step 6: Commit the schema and indexing controls**

Run:

```bash
git add app/layout.tsx app/env-test/layout.tsx app/sentry-example-page/layout.tsx components/seo/json-ld.tsx lib/structured-data.ts
git commit -m "feat: add structured data and noindex layouts"
```

## Task 3: Upgrade Public Page Metadata And FAQ Data

**Files:**
- Create: `lib/faq.ts`
- Modify: `app/page.tsx`
- Modify: `app/transcription/page.tsx`
- Modify: `app/interpreting/page.tsx`
- Modify: `app/faq/page.tsx`
- Modify: `app/contact/page.tsx`
- Modify: `app/policies/layout.tsx`
- Modify: `app/we-transfer/page.tsx`

- [ ] **Step 1: Create the shared FAQ data source**

Create `lib/faq.ts` with:

```ts
export type FaqItem = {
  question: string;
  answer: string;
  bullets?: string[];
  category: "general" | "transcription" | "interpreting";
};

export const faqItems: FaqItem[] = [
  {
    question: "What services does imperium linguistics offer?",
    answer:
      "We provide professional transcription and interpreting services for legal, business, educational, and conference needs across South Africa.",
    bullets: ["Transcription services", "Simultaneous interpreting", "Consecutive interpreting"],
    category: "general",
  },
  {
    question: "Do you provide transcription services across South Africa?",
    answer:
      "Yes. We support clients across South Africa with remote and scheduled transcription workflows, including legal, business, and educational recordings.",
    category: "transcription",
  },
  {
    question: "How quickly can you deliver a transcript?",
    answer:
      "Turnaround depends on the recording length, audio quality, and project urgency. We offer same-day, next-day, and scheduled delivery options where the brief allows.",
    category: "transcription",
  },
  {
    question: "How do you protect confidential recordings and documents?",
    answer:
      "We handle sensitive material through controlled workflows and can support confidentiality requirements for legal, corporate, and institutional projects.",
    category: "transcription",
  },
  {
    question: "What is the difference between simultaneous and consecutive interpreting?",
    answer:
      "Simultaneous interpreting happens in real time for conferences and events, while consecutive interpreting pauses between speakers and is often used in meetings, legal matters, and consultations.",
    category: "interpreting",
  },
  {
    question: "Which languages do you support?",
    answer:
      "We support all official South African languages as well as additional international languages for selected interpreting and multilingual project needs.",
    category: "interpreting",
  },
  {
    question: "Do you provide interpreting equipment for conferences and events?",
    answer:
      "Yes. We can support simultaneous interpreting setups that include the interpreters and the equipment needed for multilingual audiences.",
    category: "interpreting",
  },
  {
    question: "How do I request a quote or send files?",
    answer:
      "You can contact the team through the site, request a quote from the service pages, or use the WeTransfer guide to send large audio files securely.",
    category: "general",
  },
];
```

- [ ] **Step 2: Update the home, service, contact, policy, and upload metadata**

Replace the metadata exports in the page files with these implementations.

`app/page.tsx`

```tsx
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
```

`app/transcription/page.tsx`

```tsx
import { JsonLd } from "@/components/seo/json-ld";
import { TranscriptionServicesSection } from "@/components/layout/sections/transcription-services";
import { buildPageMetadata } from "@/lib/seo";
import { getServiceSchema } from "@/lib/structured-data";

export const metadata = buildPageMetadata({
  title: "Transcription Services in South Africa",
  description:
    "Professional transcription services in South Africa for legal, business, educational, and general audio projects with clear turnaround options.",
  path: "/transcription",
  keywords: [
    "transcription services South Africa",
    "legal transcription South Africa",
    "audio transcription South Africa",
  ],
});

const transcriptionSchema = getServiceSchema({
  name: "Transcription Services in South Africa",
  description:
    "Professional transcription services in South Africa for legal, business, educational, and general audio projects.",
  path: "/transcription",
  serviceType: "Transcription services",
});

export default function TranscriptionPage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={transcriptionSchema} />
      <TranscriptionServicesSection />
    </main>
  );
}
```

`app/interpreting/page.tsx`

```tsx
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
```

`app/contact/page.tsx`

```tsx
import { ContactSection } from "@/components/layout/sections/contact";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact Imperium Linguistics",
  description:
    "Contact Imperium Linguistics for transcription and interpreting services in South Africa and request a response within one business day.",
  path: "/contact",
  keywords: ["contact transcription services South Africa", "contact interpreting services South Africa"],
});

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactSection />
    </main>
  );
}
```

`app/policies/layout.tsx`

```tsx
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Company Policies",
  description:
    "Learn about Imperium Linguistics' professional standards, confidentiality approach, and service expectations for clients in South Africa.",
  path: "/policies",
});

export default function PoliciesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
```

`app/we-transfer/page.tsx`

```tsx
import { WeTransferGuideSection } from "@/components/layout/sections/wetransfer-guide";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Send Audio Files With WeTransfer",
  description:
    "Follow Imperium Linguistics' WeTransfer guide to send large audio files securely for transcription projects in South Africa.",
  path: "/we-transfer",
  keywords: ["send audio files for transcription", "WeTransfer transcription upload South Africa"],
});

export default function WeTransferPage() {
  return (
    <main className="min-h-screen bg-white">
      <WeTransferGuideSection />
    </main>
  );
}
```

- [ ] **Step 3: Update the FAQ page metadata and inject FAQ schema**

Replace `app/faq/page.tsx` with:

```tsx
import { FaqSection } from "@/components/layout/sections/faq";
import { JsonLd } from "@/components/seo/json-ld";
import { faqItems } from "@/lib/faq";
import { buildPageMetadata } from "@/lib/seo";
import { getFaqSchema } from "@/lib/structured-data";

export const metadata = buildPageMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about Imperium Linguistics' transcription and interpreting services in South Africa.",
  path: "/faq",
  keywords: [
    "transcription FAQ South Africa",
    "interpreting FAQ South Africa",
    "language services FAQ South Africa",
  ],
});

const faqSchema = getFaqSchema(
  faqItems.map((item) => ({
    question: item.question,
    answer: [item.answer, ...(item.bullets ?? [])].join(" "),
  })),
);

export default function FaqPage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={faqSchema} />
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/30 dark:to-gray-950 py-20 md:py-28">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-200/30 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-300/20 dark:bg-blue-700/10 rounded-full blur-3xl"></div>

        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-10 right-10 w-2 h-2 bg-blue-600 rounded-full"></div>
          <div className="absolute top-20 left-1/4 w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-blue-600 rounded-full"></div>
          <div className="absolute top-1/2 left-10 w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="absolute bottom-10 right-1/3 w-3 h-3 bg-blue-600 rounded-full"></div>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left md:max-w-2xl">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-blue-600/10 text-blue-600 rounded-full">
                Knowledge Base
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Answers about transcription and interpreting services across South Africa, from turnaround times to supported languages and secure file delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      <FaqSection hideTitle={true} />
    </main>
  );
}
```

- [ ] **Step 4: Run the build to validate the metadata imports and shared FAQ schema**

Run:

```bash
npm run build
```

Expected: `Compiled successfully` and the FAQ page compiles as a server component that can import `faqItems`.

- [ ] **Step 5: Commit the page metadata layer**

Run:

```bash
git add app/page.tsx app/transcription/page.tsx app/interpreting/page.tsx app/faq/page.tsx app/contact/page.tsx app/policies/layout.tsx app/we-transfer/page.tsx lib/faq.ts
git commit -m "feat: align public pages with South Africa SEO targets"
```

## Task 4: Rework The Home Page Hierarchy And Copy

**Files:**
- Modify: `components/layout/sections/hero.tsx`
- Modify: `components/layout/sections/about.tsx`
- Modify: `components/layout/sections/benefits.tsx`
- Modify: `components/layout/sections/contact.tsx`
- Modify: `app/contact/page.tsx`

- [ ] **Step 1: Replace the hero with a South Africa-focused H1 and direct service CTAs**

Replace `components/layout/sections/hero.tsx` with:

```tsx
"use client";

import Link from "next/link";
import { HeroParticles } from "@/components/hero-particles";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroParticles />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[50vh] bg-blue-500/25 rounded-full blur-[120px] -z-10"></div>

      <div className="w-full py-20 md:py-32 z-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-blue-700 backdrop-blur">
            South Africa-wide language services
          </span>
          <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Transcription and interpreting services in South Africa
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700 sm:text-xl">
            Imperium Linguistics supports legal teams, businesses, institutions, and event organisers with accurate transcription and professional interpreting across South Africa.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Request a quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/transcription">Explore transcription</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/interpreting">Explore interpreting</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute -bottom-10 -right-10 w-[200px] h-[200px] bg-blue-400/15 rounded-full blur-[80px] -z-10"></div>
    </section>
  );
};
```

- [ ] **Step 2: Update the About section heading and trust copy**

In `components/layout/sections/about.tsx`, replace the heading and paragraph block with:

```tsx
<div className="mb-16 text-center md:mb-20">
  <span className="inline-flex items-center justify-center px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.4em] bg-blue-500/50 rounded-full text-white">
    Our Story
  </span>
  <h2 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
    Language support built for South Africa&apos;s high-stakes conversations
  </h2>
</div>
```

And replace the body copy plus stat callout with:

```tsx
<div className="space-y-5 text-white">
  <p className="text-lg leading-relaxed sm:text-xl">
    Founded in 2017, imperium linguistics supports legal teams, public institutions, businesses, and conference organisers across South Africa with trusted language services.
  </p>
  <p className="text-sm leading-relaxed text-blue-100 sm:text-base">
    From courtroom recordings to multilingual conferences, our transcription specialists and interpreters help clients move quickly without sacrificing accuracy, context, or confidentiality.
  </p>
  <div className="inline-flex flex-wrap items-baseline gap-3 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-3">
    <span className="text-3xl font-bold text-white">South Africa-wide</span>
    <span className="text-sm font-medium text-blue-100">
      coverage for transcription and interpreting projects
    </span>
  </div>
</div>
```

- [ ] **Step 3: Replace the benefits section with clearer commercial-value copy**

Replace `components/layout/sections/benefits.tsx` with:

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const benefitList = [
  {
    title: "Legal-ready accuracy",
    description:
      "We support recordings and live matters where accuracy, context, and confidentiality matter from the first brief to final delivery.",
  },
  {
    title: "Responsive South Africa coverage",
    description:
      "From urgent transcription requests to multilingual interpreting support, we help teams across South Africa move with practical turnaround options.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why South African teams choose imperium linguistics
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We combine professional transcription and interpreting support with clear communication, secure handling, and dependable delivery.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ title, description }) => (
            <Card key={title} className="bg-[#3b82f6] text-white hover:bg-[#1d4ed8] transition-colors">
              <CardHeader className="pb-2">
                <CardTitle className="text-white">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-white/90">
                {description}
              </CardContent>
            </Card>
          ))}

          <div className="relative rounded-lg overflow-hidden h-full aspect-square">
            <Image
              src="/handcuffs.jpg"
              alt="Legal transcription and interpreting support"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative rounded-lg overflow-hidden h-full aspect-square">
            <Image
              src="/magistrate.jpg"
              alt="Courtroom and legal service support in South Africa"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
```

- [ ] **Step 4: Make the contact section render `h2` on the home page and `h1` on the contact page**

In `components/layout/sections/contact.tsx`, change the component signature and heading block to:

```tsx
interface ContactSectionProps {
  standalone?: boolean;
}

export const ContactSection = ({ standalone = false }: ContactSectionProps) => {
  const HeadingTag = standalone ? "h1" : "h2";
};
```

Then replace the heading markup inside the existing `motion.div` with:

```tsx
<span className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
  Let&apos;s collaborate
</span>
<HeadingTag className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
  Contact imperium linguistics
</HeadingTag>
<p className="mt-4 text-base text-blue-100 sm:text-lg">
  Tell us about your interpreting, transcription, or conferencing needs in South Africa. Our language specialists will craft a tailored response and next steps within one business day.
</p>
```

The companion change in `app/contact/page.tsx` is now:

```tsx
export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactSection standalone />
    </main>
  );
}
```

- [ ] **Step 5: Run the build to verify heading hierarchy and prop changes**

Run:

```bash
npm run build
```

Expected: `Compiled successfully` and no prop/type errors after adding `standalone?: boolean`.

- [ ] **Step 6: Commit the home page content pass**

Run:

```bash
git add app/contact/page.tsx components/layout/sections/hero.tsx components/layout/sections/about.tsx components/layout/sections/benefits.tsx components/layout/sections/contact.tsx
git commit -m "feat: refresh home page SEO copy and heading hierarchy"
```

## Task 5: Refresh The Transcription Landing Page

**Files:**
- Modify: `components/layout/sections/transcription-services.tsx`

- [ ] **Step 1: Update the opening title block so the page has a clear H1 and stronger local search intent**

Inside the first section of `components/layout/sections/transcription-services.tsx`, replace the current title `motion.div` with:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="mx-auto mb-10 max-w-4xl text-center"
>
  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
    South Africa-wide transcription support
  </p>
  <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
    Professional transcription services in South Africa
  </h1>
  <p className="mt-6 text-lg text-gray-600">
    Imperium Linguistics delivers professional transcription services for legal, business, educational, and general audio projects with practical turnaround options and human-reviewed output.
  </p>
  <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
    <Link
      href="/contact"
      className="rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
    >
      Request a transcription quote
    </Link>
    <Link
      href="/we-transfer"
      className="rounded-md border border-blue-600 px-6 py-3 font-medium text-blue-600 transition-colors hover:bg-blue-50"
    >
      Send us your files
    </Link>
  </div>
</motion.div>
```

- [ ] **Step 2: Tighten the service taxonomy and process copy**

Replace the `transcriptionCategories` constant with:

```tsx
const transcriptionCategories: ServiceCategory[] = [
  {
    title: "LEGAL TRANSCRIPTION",
    items: ["Hearings", "Pleadings", "Arbitrations", "Testimonies", "Depositions"],
    className:
      "bg-gradient-to-br from-blue-600/20 to-blue-600/5 dark:from-blue-600/10 dark:to-blue-600/5 border-blue-600/30 dark:border-blue-600/20",
    icon: FileText,
  },
  {
    title: "BUSINESS TRANSCRIPTION",
    items: ["Conference calls", "Board meetings", "Interviews", "Market research", "Internal communications"],
    className:
      "bg-gradient-to-br from-gray-50/40 to-white dark:from-gray-900/20 dark:to-gray-900/10 border-gray-200/50 dark:border-blue-100/30",
    icon: MessageSquareText,
  },
  {
    title: "EDUCATIONAL TRANSCRIPTION",
    items: ["Seminars", "Lectures", "Research interviews", "Oral histories", "Academic recordings"],
    className:
      "bg-gradient-to-br from-blue-600/20 to-blue-600/5 dark:from-blue-600/10 dark:to-blue-600/5 border-blue-600/30 dark:border-blue-600/20",
    icon: GraduationCap,
  },
  {
    title: "GENERAL TRANSCRIPTION",
    items: ["Audio files", "Digital recordings", "Legacy media", "CD or DVD audio", "MP3 and WAV files"],
    className:
      "bg-gradient-to-br from-gray-50/40 to-white dark:from-gray-900/20 dark:to-gray-900/10 border-gray-200/50 dark:border-blue-100/30",
    icon: AudioWaveform,
  },
];
```

And replace the process description paragraph block with:

```tsx
<div className="mb-8 text-center max-w-3xl mx-auto">
  <h2 className="text-xl md:text-2xl font-bold mb-4 text-white relative inline-block">
    Our transcription process
    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/60"></span>
  </h2>

  <p className="text-white/80 mb-6 text-sm">
    We combine AI-assisted drafting with human review and proofreading so the final transcript reflects the recording accurately and clearly.
  </p>
</div>
```

- [ ] **Step 3: Update the bottom CTA so it reinforces the lead path**

Replace the closing CTA block with:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="max-w-4xl mx-auto text-center mb-16 mt-20"
>
  <h2 className="text-3xl md:text-4xl font-bold mb-4">
    Need transcription support for your next project?
  </h2>
  <p className="text-lg text-gray-600 dark:text-gray-600 max-w-2xl mx-auto">
    Tell us about your recording, deadline, and preferred transcript format and our team will come back with the right next step.
  </p>
  <div className="mt-10">
    <motion.a
      href="/contact"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md hover:shadow-lg transition-all no-underline rounded-md"
    >
      Contact our transcription team
    </motion.a>
  </div>
</motion.div>
```

- [ ] **Step 4: Run the build to verify the page still compiles and keeps a single H1**

Run:

```bash
npm run build
```

Expected: `Compiled successfully` and the transcription page renders with one H1 and no broken imports.

- [ ] **Step 5: Commit the transcription page refresh**

Run:

```bash
git add components/layout/sections/transcription-services.tsx
git commit -m "feat: optimize transcription landing page for South Africa SEO"
```

## Task 6: Refresh The Interpreting Page And FAQ UI

**Files:**
- Modify: `components/layout/sections/interpreting-services.tsx`
- Modify: `components/layout/sections/faq.tsx`

- [ ] **Step 1: Update the interpreting hero copy and remove the dead CTA**

In `components/layout/sections/interpreting-services.tsx`, add `Link` to the imports:

```tsx
import Link from "next/link";
```

Replace the opening hero block with:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="text-center mb-16"
>
  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
    South Africa-wide interpreting support
  </p>
  <h1 className="text-4xl md:text-5xl font-bold mb-6">
    Interpreting services in South Africa
  </h1>
  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
    Imperium Linguistics provides simultaneous and consecutive interpreting for conferences, meetings, legal matters, and multilingual events across South Africa.
  </p>
</motion.div>
```

Replace the inactive "Contact Us" button block with:

```tsx
<Link
  href="/contact"
  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
>
  Contact Us
</Link>
```

And replace the final CTA copy with:

```tsx
<h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to book interpreting support?</h2>
<p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
  Share your languages, location, audience size, and event format and our team will help you plan the right interpreting setup.
</p>
```

- [ ] **Step 2: Refactor the FAQ UI to use shared FAQ data and stable question keys**

At the top of `components/layout/sections/faq.tsx`, add:

```tsx
import { faqItems } from "@/lib/faq";
```

Replace the local `faqData` array and expansion state logic with:

```tsx
const [expandedItems, setExpandedItems] = useState<string[]>([]);

const toggleItem = (question: string) => {
  setExpandedItems((prev) =>
    prev.includes(question)
      ? prev.filter((item) => item !== question)
      : [...prev, question],
  );
};

const categories = Array.from(new Set(faqItems.map((faq) => faq.category)));

const filteredFaqs = faqItems.filter((faq) => {
  const matchesSearch =
    searchTerm === "" ||
    faq.question.toLowerCase().includes(searchTerm.toLowerCase());
  const matchesCategory = activeCategory ? faq.category === activeCategory : true;
  return matchesSearch && matchesCategory;
});
```

Then update the FAQ card renderer to:

```tsx
{filteredFaqs.map((faq, index) => {
  const isExpanded = expandedItems.includes(faq.question);

  return (
    <motion.div
      key={faq.question}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl border border-white/20 bg-[#3b82f6] text-white shadow-lg transition-colors"
    >
      <button
        onClick={() => toggleItem(faq.question)}
        className="flex w-full items-center justify-between gap-6 rounded-[inherit] bg-transparent px-6 py-5 text-left transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3b82f6]"
      >
        <div className="pr-4">
          <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-semibold capitalize text-white">
            {faq.category}
          </span>
          <h3 className="mt-3 text-lg font-semibold text-white">
            {faq.question}
          </h3>
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-white transition-transform duration-200",
            isExpanded && "rotate-180",
          )}
        />
      </button>

      {isExpanded && (
        <div className="border-t border-white/15 px-6 pb-5 pt-4 text-sm text-blue-100">
          <p>{faq.answer}</p>
          {faq.bullets && (
            <ul className="mt-3 list-disc space-y-1 pl-5">
              {faq.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </motion.div>
  );
})}
```

- [ ] **Step 3: Run the build and lint checks**

Run:

```bash
npm run build
npm run lint
```

Expected:

- `Compiled successfully`
- `next lint` exits cleanly

- [ ] **Step 4: Commit the interpreting and FAQ content pass**

Run:

```bash
git add components/layout/sections/interpreting-services.tsx components/layout/sections/faq.tsx
git commit -m "feat: optimize interpreting and FAQ pages for SEO"
```

## Task 7: Verify Metadata Output, Indexing, And Page Semantics

**Files:**
- Verify only

- [ ] **Step 1: Start the local dev server**

Run:

```bash
npm run dev
```

Expected: Next.js starts on `http://localhost:3000`.

- [ ] **Step 2: Verify `robots.txt` and the sitemap output**

Run:

```bash
curl -s http://localhost:3000/robots.txt
curl -s http://localhost:3000/sitemap.xml
```

Expected:

- `robots.txt` contains `Sitemap: https://imperiumlinguistics.com/sitemap.xml`
- `robots.txt` includes `/env-test` and `/sentry-example-page` in the disallow list
- `sitemap.xml` includes `/`, `/transcription`, `/interpreting`, `/faq`, `/contact`, `/policies`, and `/we-transfer`
- `sitemap.xml` does not include `/env-test` or `/sentry-example-page`

- [ ] **Step 3: Verify locale, canonical, schema, and `noindex` tags from rendered HTML**

Run:

```bash
curl -s http://localhost:3000/ | rg 'lang="en-ZA"|application/ld\+json|canonical'
curl -s http://localhost:3000/transcription | rg '<h1|application/ld\+json|canonical'
curl -s http://localhost:3000/interpreting | rg '<h1|application/ld\+json|canonical'
curl -s http://localhost:3000/faq | rg '<h1|application/ld\+json|canonical'
curl -s http://localhost:3000/env-test | rg 'noindex'
curl -s http://localhost:3000/sentry-example-page | rg 'noindex'
```

Expected:

- Home HTML shows `lang="en-ZA"`
- Home HTML contains a canonical tag for `https://imperiumlinguistics.com/`
- The transcription, interpreting, and FAQ pages each render a JSON-LD script
- The transcription and interpreting pages each expose one visible H1
- The utility pages render `noindex`

- [ ] **Step 4: Stop the dev server and commit any final verification-driven fixes**

If verification required a final small fix, run:

```bash
git add .
git commit -m "fix: polish SEO verification findings"
```

If verification found no additional fixes, skip the commit and record that the verification pass was clean.

## Self-Review

### Spec Coverage Check

- `en-ZA` locale and canonical domain: covered in Task 1 and Task 2
- `robots.txt` and sitemap: covered in Task 1
- public page metadata refresh: covered in Task 3
- organization, service, and FAQ schema: covered in Task 2 and Task 3
- home page broad discovery role: covered in Task 4
- transcription page landing-page intent: covered in Task 5
- interpreting page landing-page intent: covered in Task 6
- FAQ long-tail intent and schema alignment: covered in Task 3 and Task 6
- `noindex` handling for utility pages: covered in Task 2
- final validation of crawl, schema, and headings: covered in Task 7

### Placeholder Scan

- No `TODO`, `TBD`, or deferred steps remain
- Every code-changing step includes concrete code to add or replace
- Every verification step includes exact commands and expected results

### Type Consistency Check

- Shared helpers use `siteConfig`, `buildPageMetadata`, `absoluteUrl`, `getOrganizationSchema`, `getServiceSchema`, and `getFaqSchema` consistently
- Shared FAQ data is always imported from `lib/faq.ts`
- The contact section prop is consistently named `standalone`
