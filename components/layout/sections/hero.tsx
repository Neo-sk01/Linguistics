"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { HeroParticles } from "@/components/hero-particles";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroParticles />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[50vh] bg-blue-500/20 rounded-full blur-[120px] -z-10"></div>
      
      <div className="w-full py-20 md:py-32 z-10">
        <div className="text-center space-y-16 w-full mx-auto">
          <div className="w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] relative">
            <h1 className="text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-white bg-clip-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none">
              We are the first to be different
            </h1>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
