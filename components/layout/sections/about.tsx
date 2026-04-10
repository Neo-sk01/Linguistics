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
    <section id="about" className="relative overflow-hidden py-24 sm:py-32 bg-blue-600">
      <div className="container relative z-[1]">
        <div className="mb-16 text-center md:mb-20">
          <span className="inline-flex items-center justify-center px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.4em] bg-blue-500/50 rounded-full text-white">
            Our Story
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Language support built for South Africa&apos;s high-stakes conversations
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14 lg:items-center">
          <div className="order-2 md:order-1">
            <div className="relative mx-auto aspect-square max-w-[420px]">
              <Globe
                className="!relative h-full w-full"
                config={{
                  width: 500,
                  height: 500,
                  onRender: () => { },
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

          <div className="order-1 md:order-2">
            <div className="space-y-5 text-white">
              <p className="text-lg leading-relaxed sm:text-xl">
                Founded in 2017, imperium linguistics supports legal teams, public institutions, businesses, and conference organisers across South Africa with trusted language services.
              </p>
              <p className="text-sm leading-relaxed text-blue-100 sm:text-base">
                From courtroom recordings to multilingual conferences, our transcription specialists and interpreters help clients move quickly without sacrificing accuracy, context, or confidentiality.
              </p>
              <div className="inline-flex flex-wrap items-baseline gap-3 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-3">
                <span className="text-3xl font-bold text-white">South Africa-wide</span>
                <span className="text-sm font-medium text-blue-100">
                  coverage for transcription and interpreting projects
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 sm:mt-24">
          <h3 className="text-center text-xl font-bold text-white sm:text-2xl md:text-3xl">
            Our Core Values
          </h3>
          <p className="mx-auto mt-3 max-w-3xl text-center text-blue-100">
            Purpose-driven principles that shape every interpreting, translation, and transcription engagement.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.title}
                  className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                  <h4 className="mb-3 text-lg font-semibold text-white">
                    {value.title}
                  </h4>
                  <p className="text-sm text-blue-100 leading-relaxed">
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
