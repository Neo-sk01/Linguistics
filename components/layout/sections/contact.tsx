"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Building2, CheckCircle2, Loader2, Send } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name." }),
  email: z
    .string()
    .trim()
    .email({ message: "Enter a valid email address." }),
  phone: z
    .string()
    .trim()
    .refine(
      (value) => value.length === 0 || value.replace(/\D/g, "").length >= 7,
      { message: "Enter a valid phone number." },
    ),
  company: z
    .string()
    .trim()
    .max(120, { message: "Company name is too long." })
    .optional(),
  message: z
    .string()
    .trim()
    .min(10, { message: "Share a bit more about how we can help." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const supportHighlights = [
  {
    title: "Rapid proposals",
    description: "Detailed quotes for most projects within 24 hours.",
  },
  {
    title: "Dedicated linguists",
    description:
      "Specialist teams matched to your sector, from legal to conference services.",
  },
  {
    title: "Secure handling",
    description: "Confidentiality agreements and encrypted file transfers on request.",
  },
];

export const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const pending = status === "loading";

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("loading");

    try {
      // Replace with API integration when backend endpoint is available.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Contact form submission failed", error);
      setStatus("error");
    }
  };

  const formStatusMessage = useMemo(() => {
    if (status === "success") {
      return {
        tone: "success" as const,
        text: "Thanks for reaching out. A member of the Imperium Linguistics team will get back to you shortly.",
      };
    }

    if (status === "error") {
      return {
        tone: "error" as const,
        text: "Something went wrong. Please retry or email nkuna@imperiumlinguistics.com.",
      };
    }

    return null;
  }, [status]);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#3b82f6] text-white"
    >
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-24 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-10 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_60%)]" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
              Let&apos;s collaborate
            </span>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Contact Imperium Linguistics
            </h1>
            <p className="mt-4 text-base text-blue-100 sm:text-lg">
              Tell us about your interpreting, transcription, or conferencing
              needs. Our language specialists will craft a tailored response and
              next steps within one business day.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              <Card className="border-white/15 bg-white/10 text-white backdrop-blur">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-white">
                    What to expect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-blue-100">
                  {supportHighlights.map(({ title, description }) => (
                    <div key={title} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                        <CheckCircle2 className="h-4 w-4 text-blue-100" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{title}</p>
                        <p className="text-xs text-blue-100/80 md:text-sm">
                          {description}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-start gap-3 rounded-lg border border-white/15 bg-white/5 p-4 text-xs text-blue-100/80 md:text-sm">
                    <Building2 className="mt-0.5 h-4 w-4 text-blue-100" />
                    <p>
                      Need NDA coverage before sharing files? Let us know in the
                      form and we&apos;ll send our standard agreement or review
                      yours.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Card className="border-blue-100 bg-white text-slate-900 shadow-xl">
              <CardHeader className="space-y-3">
                <CardTitle className="text-2xl font-semibold text-slate-900">
                  Tell us about your project
                </CardTitle>
                <p className="text-sm text-slate-600">
                  Share as much detail as you can—languages, deadlines, audience,
                  and file types help us respond with the right plan.
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-blue-600">
                  Response within one business day
                </p>
              </CardHeader>
              <CardContent className="space-y-6 pt-0">
                {formStatusMessage && (
                  <div
                    className={
                      formStatusMessage.tone === "success"
                        ? "rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
                        : "rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                    }
                  >
                    {formStatusMessage.text}
                  </div>
                )}
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                      <div className="grid gap-5 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full name*</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="Your name"
                                  value={field.value}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email*</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  {...field}
                                  placeholder="you@email.com"
                                  value={field.value}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="+27 67 747 2124"
                                  value={field.value ?? ""}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company / Organisation</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="Optional"
                                  value={field.value ?? ""}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>How can we help?*</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                rows={5}
                                placeholder="Tell us about your languages, deadlines, equipment needs, or any other context."
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        disabled={pending}
                        className="w-full bg-blue-600 hover:bg-blue-700"
                      >
                        {pending ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                  <p className="text-xs text-slate-500">
                    Prefer a direct email? Reach us at{" "}
                    <a
                      href="mailto:nkuna@imperiumlinguistics.com"
                      className="font-medium text-blue-600 hover:text-blue-700"
                    >
                      nkuna@imperiumlinguistics.com
                    </a>{" "}
                    and attach any supporting documents.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
