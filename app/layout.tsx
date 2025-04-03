import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Particles } from "@/components/particles";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMPERIUM LINGUISTICS",
  description: "Professional language services",
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
          <Particles />
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
