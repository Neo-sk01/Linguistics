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
  }
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6">
        Our Platinum Sponsors
      </h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map(({ imageUrl, name }) => (
            <div
              key={name}
              className="flex items-center"
            >
              <div className="relative w-[128px] h-[128px]">
                <Image
                  src={imageUrl}
                  alt={`${name} logo`}
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
