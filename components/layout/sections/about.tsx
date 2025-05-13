"use client";
import { CheckCircle2, BookOpen, Shield, Lightbulb, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Globe } from "@/components/Globe";

export const AboutSection = () => {
  const coreValues = [
    {
      title: "Reliable",
      description: "We deliver precise and timely language solutions, ensuring seamless communication in legal and corporate settings.",
      icon: BookOpen,
      color: "from-blue-400 to-blue-300",
      shadowColor: "shadow-blue-400/20"
    },
    {
      title: "Trustworthy",
      description: "Confidentiality and integrity define our work, giving clients peace of mind when handling sensitive information.",
      icon: Shield,
      color: "from-primary to-primary/80",
      shadowColor: "shadow-primary/20"
    },
    {
      title: "Transparent",
      description: "Clear communication and honest service ensure no hidden fees—just high-quality solutions tailored to your needs.",
      icon: Lightbulb,
      color: "from-sky-500 to-blue-400",
      shadowColor: "shadow-sky-500/20"
    },
    {
      title: "Client-Centric",
      description: "Your needs come first. We customize our services to provide the best interpreting, translation, and transcription support.",
      icon: Users,
      color: "from-indigo-600 to-blue-500",
      shadowColor: "shadow-indigo-500/20"
    }
  ];

  return (
    <section id="about" className="container py-24 sm:py-32 relative">
      <div className="text-center mb-16">
        <h2 className="inline-block text-lg text-primary mb-2 tracking-wider px-3 py-1 bg-primary/10 rounded-full">
          About Us
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
          About Imperium Linguistics
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative h-[300px] sm:h-[350px] md:h-auto flex items-center justify-center order-2 md:order-1">
          <div className="w-full h-full relative">
            <Globe 
              className="!relative"
              config={{
                width: 500,
                height: 500,
                onRender: () => {},
                devicePixelRatio: 2,
                phi: 0,
                theta: 0.3,
                dark: 0,
                diffuse: 0.4,
                mapSamples: 16000,
                mapBrightness: 1.2,
                baseColor: [1, 1, 1],
                markerColor: [0, 102/255, 204/255],
                glowColor: [1, 1, 1],
                markers: [
                  { location: [-33.9249, 18.4241], size: 0.1 },  // Cape Town, South Africa
                  { location: [-1.2921, 36.8219], size: 0.1 },   // Nairobi, Kenya
                  { location: [30.0444, 31.2357], size: 0.1 },   // Cairo, Egypt
                  { location: [6.5244, 3.3792], size: 0.1 },     // Lagos, Nigeria
                  { location: [-26.2041, 28.0473], size: 0.1 },  // Johannesburg, South Africa 
                  { location: [14.6928, -17.4467], size: 0.1 }   // Dakar, Senegal
                ]
              }}
            />
          </div>
        </div>
        
        <div className="relative z-10 order-1 md:order-2 opacity-50 flex flex-col justify-center">
          <div className="relative bg-transparent p-5 sm:p-6 md:p-8 rounded-xl border border-gray-300 shadow-xl text-gray-800 dark:text-white h-full">
            <div className="relative">
              <p className="text-lg sm:text-xl font-medium text-gray-800 dark:text-white mb-4 sm:mb-6 leading-relaxed">
                Founded in 2017, Imperium Linguistics has been dedicated to being a one-stop language solution
                for attorneys and law firms, ensuring they meet their clients' expectations efficiently and
                seamlessly.
              </p>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Over the years, we have specialized in simultaneous and consecutive interpreting,
                non-literal translation, and precise transcriptions—eliminating language barriers to success.
                Today, we continue to provide high-quality conference and meeting equipment, delivering
                reliable solutions tailored to your needs. When accuracy and efficiency matter, we deliver every
                time.
              </p>
              <div className="mt-6 sm:mt-8 flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 px-3 sm:px-4 py-2 sm:py-3 rounded-lg inline-flex items-center flex-wrap">
                  <span className="text-2xl font-bold mr-2 text-gray-800 dark:text-white">6+ Years</span> 
                  <span className="text-gray-700 dark:text-gray-300">of expertise in language services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24 px-4 sm:px-6">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12">Our Core Values</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {coreValues.map((value, index) => (
            <div 
              key={value.title}
              className={cn(
                "group relative bg-card hover:bg-muted/30 border border-border/50 rounded-xl p-6 transition-all duration-300",
                "hover:shadow-xl hover:-translate-y-1", 
                value.shadowColor
              )}
            >
              <div className={cn(
                "absolute -top-5 left-5 w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br",
                value.color,
                "transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
              )}>
                <value.icon className="h-5 w-5 text-white" />
              </div>
              <div className="mt-4 pt-2">
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 