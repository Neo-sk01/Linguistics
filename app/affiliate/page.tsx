"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  DollarSign,
  Users,
  TrendingUp,
  CheckCircle,
  FileText,
  Award,
  Link2,
  Gift,
  Clock,
  Shield,
  Briefcase,
  GraduationCap,
  Mic,
  FileSearch,
  ArrowRight,
} from "lucide-react";

export default function AffiliatePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    audience: "",
    experience: "",
    why: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log("Affiliate application:", formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Commissions",
      description:
        "Earn R300 per qualified lead + 10% of the first invoice within 90 days",
    },
    {
      icon: Users,
      title: "Quality Leads Only",
      description:
        "We only count qualified prospects—business email, 15+ min audio, real intent",
    },
    {
      icon: TrendingUp,
      title: "Recurring Revenue",
      description:
        "Clients often return for more transcription work—build lasting value",
    },
    {
      icon: Shield,
      title: "Trusted Partner",
      description:
        "6+ years of experience with legal, business, and academic transcription",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Apply to Join",
      description:
        "Fill out our simple application form and tell us about your audience",
      icon: FileText,
    },
    {
      step: "2",
      title: "Get Your Links",
      description:
        "Receive unique referral links and promo codes to share with your network",
      icon: Link2,
    },
    {
      step: "3",
      title: "Start Earning",
      description:
        "Earn commissions on qualified leads and closed deals—paid monthly via EFT",
      icon: Gift,
    },
  ];

  const targetAudience = [
    {
      icon: Briefcase,
      title: "Legal Professionals",
      description: "Attorneys, legal secretaries, and law firms",
    },
    {
      icon: FileSearch,
      title: "Market Research Firms",
      description: "Companies conducting interviews and focus groups",
    },
    {
      icon: GraduationCap,
      title: "Universities & Researchers",
      description: "Academic institutions needing transcription services",
    },
    {
      icon: Mic,
      title: "Media Professionals",
      description: "Journalists, podcasters, and content creators",
    },
  ];

  const faqs = [
    {
      question: "How does tracking work?",
      answer:
        "We use referral links and codes tracked via cookies for 90 days. When someone uses your link to request a quote, their submission includes your affiliate ID automatically.",
    },
    {
      question: "What counts as a qualified lead?",
      answer:
        "A qualified lead is a prospect who submits a transcription brief or books a call AND meets our criteria: audio ≥ 15 minutes, supported language, business email, and genuine intent to purchase.",
    },
    {
      question: "When do I get paid?",
      answer:
        "Payouts are processed monthly via EFT with a minimum threshold of R500. You'll receive payment within 30 days after month-end for all confirmed commissions.",
    },
    {
      question: "What services are eligible?",
      answer:
        "Only transcription services qualify for affiliate commissions. Interpreting and conference equipment services are excluded from the program.",
    },
    {
      question: "What's the attribution window?",
      answer:
        "We track referrals for 90 days from the first click or form submission. If your referral converts within that window, you earn the commission.",
    },
    {
      question: "Are there any restrictions?",
      answer:
        "Yes—no spam, no self-referrals, no misleading claims. You must use our approved marketing materials and comply with POPIA regulations.",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-background dark:to-blue-950/20 py-20 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.1),_transparent_50%)]" />
        
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300">
              <Award className="h-4 w-4" />
              Affiliate Program
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Get Paid to Refer{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Transcription Clients
              </span>
            </h1>
            
            <p className="mb-8 text-xl text-muted-foreground sm:text-2xl">
              Same day. Next day. You name it. Earn for every qualified
              transcription client you send.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="text-lg"
                onClick={() =>
                  document
                    .getElementById("application")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Apply to Join
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg"
                onClick={() =>
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border bg-card p-6">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  R300
                </div>
                <div className="text-sm text-muted-foreground">
                  Per Qualified Lead
                </div>
              </div>
              <div className="rounded-2xl border bg-card p-6">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  10%
                </div>
                <div className="text-sm text-muted-foreground">
                  First Invoice Commission
                </div>
              </div>
              <div className="rounded-2xl border bg-card p-6">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  90 Days
                </div>
                <div className="text-sm text-muted-foreground">
                  Attribution Window
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Imperium Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Why Partner with Imperium Linguistics
            </h2>
            <p className="text-lg text-muted-foreground">
              Refer clients to a trusted transcription partner with proven
              quality and reliability
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                      <benefit.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Quality Highlights */}
          <motion.div {...fadeInUp} className="mt-16">
            <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
              <CardContent className="p-8">
                <div className="grid gap-8 lg:grid-cols-3">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-blue-600 p-3 text-white">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">AI + Human Accuracy</h3>
                      <p className="text-sm text-muted-foreground">
                        AI transcription with human review and professional
                        proofreading for guaranteed accuracy
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-blue-600 p-3 text-white">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">Fast Turnaround</h3>
                      <p className="text-sm text-muted-foreground">
                        Same day, next day, or custom deadlines—we deliver on
                        your schedule
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-blue-600 p-3 text-white">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">Certified Quality</h3>
                      <p className="text-sm text-muted-foreground">
                        Every transcription includes our Transcriber's
                        Certificate with formal accuracy assurance
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Start earning in three simple steps
            </p>
          </motion.div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  {...fadeInUp}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  {index < process.length - 1 && (
                    <div className="absolute top-12 left-1/2 hidden h-0.5 w-full bg-blue-200 dark:bg-blue-800 md:block" />
                  )}
                  <Card className="relative h-full border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                    <CardContent className="pt-6 text-center">
                      <div className="relative z-10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                        {item.step}
                      </div>
                      <item.icon className="mx-auto mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
                      <h3 className="mb-2 text-xl font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Who Should Join
            </h2>
            <p className="text-lg text-muted-foreground">
              Perfect for professionals who work with clients needing
              transcription services
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-2">
            {targetAudience.map((audience, index) => (
              <motion.div
                key={audience.title}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="rounded-lg bg-blue-100 dark:bg-blue-900/30 p-3">
                      <audience.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-lg">
                        {audience.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {audience.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Clear Commission Structure
              </h2>
              <p className="text-xl text-blue-100">
                Transparent payouts with no hidden fees
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <Card className="border-2 border-blue-400 bg-white/10 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <DollarSign className="mx-auto mb-4 h-12 w-12 text-blue-200" />
                  <div className="text-5xl font-bold mb-2">R300</div>
                  <div className="text-lg mb-4">Per Qualified Lead</div>
                  <p className="text-sm text-blue-100">
                    Earn when a prospect submits a transcription brief or books
                    a call AND meets our quality criteria
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-400 bg-white/10 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <TrendingUp className="mx-auto mb-4 h-12 w-12 text-blue-200" />
                  <div className="text-5xl font-bold mb-2">10%</div>
                  <div className="text-lg mb-4">First Invoice Bonus</div>
                  <p className="text-sm text-blue-100">
                    Additional 10% commission on the first paid transcription
                    invoice within 90 days
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 border border-blue-400">
              <div className="grid gap-4 md:grid-cols-3 text-center">
                <div>
                  <div className="text-2xl font-bold mb-1">90 Days</div>
                  <div className="text-sm text-blue-100">
                    Attribution Window
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">R500</div>
                  <div className="text-sm text-blue-100">
                    Minimum Payout
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">Monthly</div>
                  <div className="text-sm text-blue-100">
                    Payment Schedule
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-blue-800/50 p-6">
              <h3 className="mb-3 font-semibold flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Important Note
              </h3>
              <p className="text-sm text-blue-100">
                Only transcription services are eligible for affiliate
                commissions. Interpreting and conference equipment services are
                excluded. Clawbacks apply on refunds within 30 days.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our affiliate program
            </p>
          </motion.div>

          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-lg font-semibold flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      {faq.question}
                    </h3>
                    <p className="text-sm text-muted-foreground pl-7">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Apply to Join Our Program
              </h2>
              <p className="text-lg text-muted-foreground">
                Tell us about yourself and start earning commissions
              </p>
            </div>

            {!submitted ? (
              <Card className="border-2">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <Label htmlFor="website">Website/Social Media</Label>
                        <Input
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="https://example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="audience">
                        Describe Your Audience *
                      </Label>
                      <Textarea
                        id="audience"
                        name="audience"
                        required
                        value={formData.audience}
                        onChange={handleChange}
                        placeholder="Who do you have access to? (e.g., legal professionals, researchers, content creators)"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="experience">
                        Affiliate Marketing Experience
                      </Label>
                      <Textarea
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        placeholder="Have you promoted services before? What were your results?"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="why">
                        Why do you want to join our program? *
                      </Label>
                      <Textarea
                        id="why"
                        name="why"
                        required
                        value={formData.why}
                        onChange={handleChange}
                        placeholder="Tell us why you're interested in promoting our transcription services"
                        rows={3}
                      />
                    </div>

                    <div className="rounded-lg bg-blue-50 dark:bg-blue-950/20 p-4 text-sm text-muted-foreground">
                      By submitting this application, you agree to our affiliate
                      terms and conditions, including POPIA compliance and our
                      brand usage guidelines.
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Submit Application
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
                <CardContent className="p-12 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                    <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">
                    Application Submitted!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for applying to our affiliate program. We'll
                    review your application and get back to you within 2-3
                    business days.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Application
                  </Button>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-12 text-center text-white"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Ready to Start Earning?
            </h2>
            <p className="mb-8 text-xl text-blue-100">
              Join our affiliate program today and start earning commissions on
              every qualified transcription referral
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg"
              onClick={() =>
                document
                  .getElementById("application")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

