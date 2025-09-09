import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";

import FooterSection from "@/components/layout/sections/footer";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMPERIUM LINGUISTICS",
  description: "Professional language services",
  icons: {
    icon: '/images/sponsors/linguistics(final).png?v=4',
    apple: '/images/sponsors/linguistics(final).png?v=4',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background flex flex-col", inter.className)}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <FooterSection />
        <ChatWidget />
      </body>
    </html>
  );
}
