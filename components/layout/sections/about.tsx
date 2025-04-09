"use client";
import { CheckCircle2, BookOpen, Shield, Lightbulb, Users } from "lucide-react";
import { cn } from "@/lib/utils";

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
      {/* Background decorative elements */}
      <div className="absolute -z-10 top-1/3 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute -z-10 bottom-1/4 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl opacity-70"></div>
      
      <div className="text-center mb-16">
        <h2 className="inline-block text-lg text-primary mb-2 tracking-wider px-3 py-1 bg-primary/10 rounded-full">
          About Us
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
          About Imperium Linguistics
        </h3>
      </div>

      <div className="mb-20 max-w-4xl mx-auto">
        <div className="relative z-10">
          <div className="relative bg-blue-600 p-8 rounded-xl border border-blue-500 shadow-xl text-white">
            <div className="relative">
              <p className="text-xl font-medium text-white mb-6 leading-relaxed">
                Founded in 2017, Imperium Linguistics has been dedicated to being a one-stop language solution
                for attorneys and law firms, ensuring they meet their clients' expectations efficiently and
                seamlessly.
              </p>
              <p className="text-blue-100 leading-relaxed">
                Over the years, we have specialized in simultaneous and consecutive interpreting,
                non-literal translation, and precise transcriptions—eliminating language barriers to success.
                Today, we continue to provide high-quality conference and meeting equipment, delivering
                reliable solutions tailored to your needs. When accuracy and efficiency matter, we deliver every
                time.
              </p>
              <div className="mt-8 flex justify-start">
                <div className="bg-blue-700/50 px-4 py-3 rounded-lg inline-flex items-center">
                  <span className="text-2xl font-bold mr-2 text-white">6+ Years</span> 
                  <span className="text-blue-100">of expertise in language services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Core Values</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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