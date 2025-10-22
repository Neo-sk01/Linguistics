"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import {
  CheckCircle,
  ClipboardList,
  FileText,
  FolderOpen,
  Globe,
  Headphones,
  Mail,
  ShieldCheck,
  Tag,
  UploadCloud,
} from "lucide-react";

interface StepItem {
  title: string;
  description: string;
  icon: LucideIcon;
  helper?: string;
}

const steps: StepItem[] = [
  {
    title: "Prepare your audio",
    description:
      "Gather the recordings you want to share. If you have multiple files, place them in a single folder and create a ZIP archive so nothing gets left behind.",
    icon: FolderOpen,
    helper: "Tip: WAV, MP3, and M4A files all work. Keep the original quality when possible.",
  },
  {
    title: "Open WeTransfer",
    description:
      "Head to WeTransfer.com and choose Send a file. You can use the free browser option for transfers up to 2 GB—no account required.",
    icon: Globe,
  },
  {
    title: "Upload your files",
    description:
      "Click the + button to add your audio files or the ZIP folder. Wait for the progress bar to finish so WeTransfer can process everything.",
    icon: UploadCloud,
  },
  {
    title: "Add our delivery email",
    description:
      "Enter nkuna@imperiumlinguistics.com as the recipient address and include your own email so you receive the confirmation message.",
    icon: Mail,
    helper: "Prefer a share link? Choose Get transfer link instead and email it to us.",
  },
  {
    title: "Include project details",
    description:
      "Use the message box to list languages, deadlines, and any context we should know. Clear notes help us prepare accurately.",
    icon: FileText,
  },
  {
    title: "Transfer and confirm",
    description:
      "Hit Transfer, complete the verification code WeTransfer sends to your inbox, and keep the confirmation email for your records.",
    icon: CheckCircle,
  },
];

const preparationTips: StepItem[] = [
  {
    title: "Name files clearly",
    description:
      "Use a format like Project_Language_Date.wav so our team can organise your audio quickly.",
    icon: Tag,
  },
  {
    title: "Add speaker notes",
    description:
      "Attach a text file with speaker names, timestamps, or terminology. Upload it alongside your audio.",
    icon: ClipboardList,
  },
  {
    title: "Protect sensitive content",
    description:
      "Need extra security? Click the three dots in WeTransfer and set a password before you send.",
    icon: ShieldCheck,
  },
];

const supportHighlights: StepItem[] = [
  {
    title: "Large projects",
    description:
      "If your transfer exceeds 2 GB, create multiple sends or ask us to set up a dedicated upload folder.",
    icon: Headphones,
  },
  {
    title: "Direct support",
    description:
      "Email info@imperiumlinguistics.co.za or call +27 67 747 2124 for immediate assistance.",
    icon: Mail,
  },
  {
    title: "Status updates",
    description:
      "Forward your WeTransfer receipt to confirm delivery—our project managers will reply within one business day.",
    icon: ShieldCheck,
  },
];

export const WeTransferGuideSection = () => {
  return (
    <div className="bg-white text-gray-900">
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(226,232,240,0.35),_transparent_55%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="mb-3 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
              WeTransfer Guide
            </span>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Upload your audio securely in minutes
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              Follow these steps to send large recordings to Imperium Linguistics using WeTransfer. No account required and your files stay protected from upload to delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a
                  href="https://wetransfer.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start upload on WeTransfer
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-primary hover:text-blue-700">
                <Link href="/contact">
                  Talk to our team
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Step-by-step WeTransfer walkthrough
            </h2>
            <p className="mt-3 text-sm text-gray-600 sm:text-base">
              Keep the page open until the progress bar shows 100% and you receive a confirmation notice.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="h-full border border-blue-700 bg-blue-600 text-white shadow-md">
                    <CardHeader className="flex flex-col space-y-4 pb-0">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-medium text-blue-100">Step {index + 1}</span>
                      </div>
                      <CardTitle className="text-lg text-white">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-blue-100">
                      <p>{step.description}</p>
                      {step.helper && (
                        <p className="rounded-lg border border-white/20 bg-white/10 p-3 text-xs text-white">
                          {step.helper}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Set your files up for success
            </h2>
            <p className="mt-3 text-sm text-gray-600 sm:text-base">
              A few minutes of preparation speeds up turnarounds and keeps your project on schedule.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {preparationTips.map((tip) => {
              const Icon = tip.icon;
              return (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full border border-blue-700 bg-blue-600 text-white shadow-md">
                    <CardHeader className="flex flex-row items-start gap-3 pb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg text-white">
                        {tip.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 text-sm text-blue-100">
                      {tip.description}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Need help mid-upload?
            </h2>
            <p className="mt-3 text-sm text-blue-100 sm:text-base">
              Our project managers are on standby. Share your transfer link or call us for live assistance.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {supportHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full border border-blue-100 bg-white text-gray-700 shadow-sm">
                    <CardHeader className="flex flex-row items-start gap-3 pb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg text-gray-900">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-gray-600">
                      {item.description}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 flex flex-col items-center gap-4 text-center"
          >
            <p className="text-sm text-blue-100 sm:text-base">
              When your files are on the way, forward the WeTransfer receipt to <a href="mailto:nkuna@imperiumlinguistics.com" className="text-white underline-offset-2 hover:text-blue-100 hover:underline">nkuna@imperiumlinguistics.com</a> so we can confirm immediately.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
