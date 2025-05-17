import { Metadata } from "next";
import { FaqSection } from "@/components/layout/sections/faq";
import Image from "next/image";

export const metadata: Metadata = {
  title: "FAQ | IMPERIUM LINGUISTICS",
  description: "Frequently Asked Questions about our language services",
};

export default function FaqPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Decorative Elements */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/30 dark:to-gray-950 py-20 md:py-28">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-200/30 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-300/20 dark:bg-blue-700/10 rounded-full blur-3xl"></div>
        
        {/* Blue dots pattern (decorative) */}
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
                Find answers to common questions about our professional language services. 
                Can't find what you're looking for? <span className="text-blue-600 font-medium">Contact us</span> for personalized assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      
      <FaqSection hideTitle={true} />
    </main>
  );
} 