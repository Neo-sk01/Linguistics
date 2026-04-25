import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Clock3,
  FileText,
  Scale,
  ShieldCheck,
  UploadCloud,
} from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo";
import { getServiceSchema } from "@/lib/structured-data";

export const metadata = buildPageMetadata({
  title: "Legal Transcription Services in South Africa",
  description:
    "Legal transcription services in South Africa for attorneys, law firms, courts, hearings, arbitrations, depositions, and recorded legal proceedings.",
  path: "/legal-transcription",
  keywords: [
    "legal transcription South Africa",
    "legal transcription services South Africa",
    "court transcription South Africa",
    "law firm transcription South Africa",
  ],
});

const legalTranscriptionSchema = getServiceSchema({
  name: "Legal Transcription Services in South Africa",
  description:
    "Court-ready legal transcription services for attorneys, law firms, courts, hearings, arbitrations, depositions, and recorded legal proceedings in South Africa.",
  path: "/legal-transcription",
  serviceType: "Legal transcription services",
});

const useCases = [
  "Court hearings",
  "Arbitrations",
  "Depositions",
  "Witness statements",
  "Attorney consultations",
  "Disciplinary hearings",
];

const processSteps = [
  {
    title: "Send the recording",
    description:
      "Upload audio or video securely with the matter name, deadline, speaker details, and any formatting instructions.",
    icon: UploadCloud,
  },
  {
    title: "Human-reviewed transcript",
    description:
      "A trained transcription team prepares and reviews the transcript for legal terminology, speaker labels, and clarity.",
    icon: FileText,
  },
  {
    title: "Final delivery",
    description:
      "Receive an editable transcript prepared for legal review, filing, consultation, or record keeping.",
    icon: CheckCircle2,
  },
];

const assurances = [
  {
    title: "Legal focus",
    description:
      "Built for attorneys, law firms, court reporters, arbitrators, and legal teams handling recorded proceedings.",
    icon: Scale,
  },
  {
    title: "Confidential handling",
    description:
      "Sensitive recordings are handled with care, limited access, and practical delivery processes.",
    icon: ShieldCheck,
  },
  {
    title: "Deadline aware",
    description:
      "Turnaround is planned around hearing dates, filing deadlines, consultations, and urgent matter timelines.",
    icon: Clock3,
  },
];

export default function LegalTranscriptionPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <JsonLd data={legalTranscriptionSchema} />

      <section className="relative overflow-hidden border-b border-blue-100 bg-white">
        <div className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Legal transcription South Africa
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-gray-950 md:text-5xl">
              Legal transcription services in South Africa
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Imperium Linguistics prepares accurate, human-reviewed transcripts for attorneys,
              law firms, courts, arbitrations, depositions, disciplinary hearings, and recorded
              legal consultations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
              >
                Request a legal transcription quote
              </Link>
              <Link
                href="/we-transfer"
                className="inline-flex items-center justify-center rounded-md border border-blue-600 px-6 py-3 font-medium text-blue-600 transition-colors hover:bg-blue-50"
              >
                Upload legal recordings
              </Link>
            </div>
            <p className="mt-5 text-sm font-medium text-gray-600">
              Need help now? Call <a className="text-blue-600 hover:text-blue-700" href="tel:+27677472124">+27 67 747 2124</a>.
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-blue-100 shadow-lg">
            <Image
              src="/magistrate.jpg"
              alt="Legal transcription support for South African court and law firm recordings"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-950 md:text-3xl">
            Transcripts for legal proceedings and case work
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-md border border-blue-100 bg-white p-4 text-gray-700"
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-blue-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-3">
          {assurances.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="rounded-lg border border-blue-100 p-6 shadow-sm">
                <Icon className="h-9 w-9 text-blue-600" />
                <h3 className="mt-5 text-xl font-bold text-gray-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-blue-100 bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold">A practical process for legal teams</h2>
            <p className="mt-4 text-blue-50">
              Send the recording once, share the matter details, and receive a transcript prepared
              for review, internal use, or the next step in your legal workflow.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article key={step.title} className="rounded-lg border border-white/25 bg-white/10 p-6">
                  <Icon className="h-8 w-8 text-white" />
                  <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-blue-50">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-950">
            Ready to transcribe a legal recording?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Share the file, deadline, and transcript requirements and Imperium Linguistics will
            confirm the next step for your matter.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
            >
              Contact the transcription team
            </Link>
            <Link
              href="/transcription"
              className="inline-flex items-center justify-center rounded-md border border-blue-600 px-6 py-3 font-medium text-blue-600 transition-colors hover:bg-blue-50"
            >
              View all transcription services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
