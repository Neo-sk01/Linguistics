import Link from "next/link";
import {
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

const contactItems = [
  {
    label: "Phone",
    value: "067 747 2124",
    icon: Phone,
    helper: null,
  },
  {
    label: "Email",
    value: "nkuna@imperiumlinguistics.com",
    icon: Mail,
    helper: null,
  },
  {
    label: "Hours",
    value: "Monday – Friday: 9AM – 6PM",
    icon: Clock,
    helper: "Saturday: 10AM – 2PM",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/imperiumlinguistics",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/imperiumlingustics/",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mpho-simelane-85844337a/",
    icon: Linkedin,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: Youtube,
  },
];

const footerNav = [
  {
    title: "Services",
    links: [
      { label: "Transcription", href: "/transcription" },
      { label: "Interpreting", href: "/interpreting" },
      { label: "Conference Equipment", href: "/#services" },
      { label: "Upload Files", href: "/we-transfer" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "FAQ", href: "/faq" },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Policies", href: "/policies" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "WeTransfer Guide", href: "/we-transfer" },
      { label: "Audio Upload PRD", href: "/docs/audio" },
      { label: "Privacy", href: "/policies#privacy" },
      { label: "Terms", href: "/policies#terms" },
    ],
  },
];

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <Link href="/" aria-label="Go home" className="inline-block mb-4">
                <Logo />
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Imperium Linguistics empowers legal teams, global brands, and public institutions with precise transcription, interpreting, and conference support.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                {/* Contact Section */}
                <div className="col-span-2 sm:col-span-1">
                  <h3 className="text-sm font-semibold mb-4">Contact</h3>
                  <div className="space-y-3">
                    {contactItems.map(({ label, value, helper, icon: Icon }) => (
                      <div key={label} className="flex items-start gap-2">
                        <Icon className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">{label}</p>
                          <p className="text-xs text-muted-foreground">{value}</p>
                          {helper && <p className="text-xs text-muted-foreground">{helper}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Sections */}
                {footerNav.map(({ title, links }) => (
                  <div key={title}>
                    <h3 className="text-sm font-semibold mb-4">{title}</h3>
                    <nav className="space-y-2.5">
                      {links.map(({ label, href }) => (
                        <Link
                          key={label}
                          href={href}
                          className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
            <p className="text-xs text-muted-foreground">
              &copy; {year} Imperium Linguistics. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <Link href="/policies#privacy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/policies#terms" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
