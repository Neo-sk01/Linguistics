"use client";
import { BookOpen, Shield, Lightbulb, Users } from "lucide-react";
import { Globe } from "@/components/Globe";

export const AboutSection = () => {
  const coreValues = [
    {
      title: "Reliable",
      description: "We deliver precise and timely language solutions, ensuring seamless communication in legal and corporate settings.",
      icon: BookOpen
    },
    {
      title: "Trustworthy",
      description: "Confidentiality and integrity define our work, giving clients peace of mind when handling sensitive information.",
      icon: Shield
    },
    {
      title: "Transparent",
      description: "Clear communication and honest service ensure no hidden fees—just high-quality solutions tailored to your needs.",
      icon: Lightbulb
    },
    {
      title: "Client-Centric",
      description: "Your needs come first. We customize our services to provide the best interpreting, translation, and transcription support.",
      icon: Users
    }
  ];

  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[460px] -z-10 bg-[radial-gradient(circle_at_top,_rgba(168,216,255,0.26),_transparent_70%)] dark:bg-[radial-gradient(circle_at_top,_rgba(30,58,138,0.48),_transparent_70%)]" />
      <div className="pointer-events-none absolute right-16 bottom-10 hidden h-72 w-72 -translate-y-8 rounded-full bg-[radial-gradient(circle,_rgba(30,58,138,0.18),_transparent_62%)] blur-3xl dark:bg-[radial-gradient(circle,_rgba(30,58,138,0.28),_transparent_62%)] lg:block" />

      <div className="container relative z-[1]">
        <div className="mb-16 text-center md:mb-20">
          <span className="layer-chip inline-flex items-center justify-center px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.4em]">
            Our Story
          </span>
          <h3 className="mt-6 text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-4xl">
            About Imperium Linguistics
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14 lg:items-center">
          <div className="order-2 md:order-1">
            <div className="layer-shell h-full overflow-hidden rounded-[2rem] p-6" data-variant="secondary">
              <div className="relative mx-auto aspect-square max-w-[420px]">
                <Globe
                  className="!relative h-full w-full"
                  config={{
                    width: 500,
                    height: 500,
                    onRender: () => {},
                    devicePixelRatio: 2,
                    phi: 0,
                    theta: 0.3,
                    dark: 0,
                    diffuse: 0.45,
                    mapSamples: 16000,
                    mapBrightness: 1.15,
                    baseColor: [168 / 255, 216 / 255, 255 / 255],
                    markerColor: [30 / 255, 58 / 255, 138 / 255],
                    glowColor: [1, 1, 1],
                    markers: [
                      { location: [-33.9249, 18.4241], size: 0.1 },
                      { location: [-1.2921, 36.8219], size: 0.1 },
                      { location: [30.0444, 31.2357], size: 0.1 },
                      { location: [6.5244, 3.3792], size: 0.1 },
                      { location: [-26.2041, 28.0473], size: 0.1 },
                      { location: [14.6928, -17.4467], size: 0.1 }
                    ]
                  }}
                />
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="layer-shell h-full p-6 sm:p-8">
              <div className="space-y-5 text-[hsl(var(--foreground))]">
                <p className="text-lg leading-relaxed sm:text-xl">
                  Founded in 2017, Imperium Linguistics is the trusted language partner for law firms and executive teams that depend on clarity under pressure.
                </p>
                <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))] sm:text-base">
                  Our specialists blend simultaneous and consecutive interpreting, non-literal translation, and meticulous transcription to remove barriers between multilingual stakeholders. From courtrooms to conferences, we equip teams with the technology and talent to deliver every word with weight and accuracy.
                </p>
                <div className="inline-flex flex-wrap items-baseline gap-3 rounded-2xl border border-[hsl(var(--secondary-layer-3))] bg-[hsl(var(--surface-card))] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_14px_24px_-12px_rgba(30,58,138,0.24)]">
                  <span className="text-3xl font-bold text-[hsl(var(--accent-layer-2))]">6+ Years</span>
                  <span className="text-sm font-medium text-[hsl(var(--muted-foreground))]">
                    of expertise in language services
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 sm:mt-24">
          <h3 className="text-center text-xl font-bold text-[hsl(var(--foreground))] sm:text-2xl md:text-3xl">
            Our Core Values
          </h3>
          <p className="mx-auto mt-3 max-w-3xl text-center text-[hsl(var(--muted-foreground))]">
            Purpose-driven principles that shape every interpreting, translation, and transcription engagement.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.title}
                  data-variant={index % 2 === 0 ? "secondary" : undefined}
                  className="layer-shell group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-layer-2))]/10 to-[hsl(var(--accent-layer-2))]/20 transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="h-6 w-6 text-[hsl(var(--accent-layer-2))]" strokeWidth={2} />
                  </div>
                  <h4 className="mb-3 text-lg font-semibold text-[hsl(var(--foreground))]">
                    {value.title}
                  </h4>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}; 
