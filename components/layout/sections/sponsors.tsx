"use client";

import Image from "next/image";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

interface SponsorProps {
  imageUrl: string;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    imageUrl: "/images/sponsors/dwd.svg",
    name: "Acmebrand",
  },
  {
    imageUrl: "/images/sponsors/eta.svg",
    name: "Acmelogo",
  },
  {
    imageUrl: "/images/sponsors/vdfv.svg",
    name: "Acmesponsor",
  },
  {
    imageUrl: "/images/sponsors/vxfv.svg",
    name: "Acmeipsum",
  },
  {
    imageUrl: "/images/sponsors/warv`s.svg",
    name: "Acme",
  },
  {
    imageUrl: "/images/sponsors/zxfv.svg",
    name: "Accmee",
  },
  {
    imageUrl: "/images/sponsors/1.png",
    name: "Sponsor 1",
  },
  {
    imageUrl: "/images/sponsors/2.png",
    name: "Sponsor 2",
  },
  {
    imageUrl: "/images/sponsors/3.png",
    name: "Sponsor 3",
  },
  {
    imageUrl: "/images/sponsors/4.png",
    name: "Sponsor 4",
  }
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="relative mx-auto w-full max-w-6xl py-20 sm:py-24">
      <div className="text-center">
        <span className="layer-chip inline-flex items-center justify-center px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.4em]">
          Partners
        </span>
        <h2 className="mt-6 text-3xl font-bold text-[hsl(var(--foreground))] md:text-4xl">
          Our Platinum Partners
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[hsl(var(--muted-foreground))]">
          Trusted collaborators who elevate every multilingual experience.
        </p>
      </div>

      <div className="mt-12">
        <div className="layer-shell overflow-hidden px-4 py-8 sm:px-8" data-variant="secondary">
          <Marquee
            className="gap-16 [--duration:22s]"
            fade
            innerClassName="gap-16"
            pauseOnHover
          >
            {sponsors.map(({ imageUrl, name }) => (
              <div key={name} className="flex items-center justify-center">
                <div className="relative flex h-28 w-28 items-center justify-center rounded-2xl border border-[hsl(var(--secondary-layer-3))] bg-[hsl(var(--surface-card))] shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_16px_26px_-14px_rgba(30,58,138,0.24)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_20px_30px_-14px_rgba(30,58,138,0.28)]">
                  <Image
                    src={imageUrl}
                    alt={`${name} logo`}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 768px) 112px, 128px"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
