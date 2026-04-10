"use client";

import Link from "next/link";

import { HeroParticles } from "@/components/hero-particles";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroParticles />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[50vh] bg-blue-500/25 rounded-full blur-[120px] -z-10"></div>
      
      <div className="w-full py-20 md:py-32 z-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-blue-700 backdrop-blur">
            South Africa-wide language services
          </span>
          <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Transcription and interpreting services in South Africa
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700 sm:text-xl">
            Imperium Linguistics supports legal teams, businesses, institutions, and event organisers with accurate transcription and professional interpreting across South Africa.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Request a quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/transcription">Explore transcription</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/interpreting">Explore interpreting</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute -bottom-10 -right-10 w-[200px] h-[200px] bg-blue-400/15 rounded-full blur-[80px] -z-10"></div>
    </section>
  );
};
