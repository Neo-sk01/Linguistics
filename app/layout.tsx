import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { SmallFooterSection } from "@/components/layout/sections/footer";
import { BotpressChat } from "@/components/botpress-chat";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMPERIUM LINGUISTICS",
  description: "Professional language services",
  icons: {
    icon: '/noBG.png',
    apple: '/noBG.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
          <SmallFooterSection />
          <BotpressChat />
        </ThemeProvider>
      </body>
    </html>
  );
}
