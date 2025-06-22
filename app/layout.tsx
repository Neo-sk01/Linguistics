import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import FooterSection from "@/components/layout/sections/footer";
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
      <body className={cn("min-h-screen bg-background flex flex-col", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <FooterSection />
          <div className="fixed bottom-4 right-4 z-50">
            <BotpressChat />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
