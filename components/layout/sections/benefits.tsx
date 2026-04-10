import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const benefitList = [
  {
    title: "Legal-ready accuracy",
    description:
      "We support recordings and live matters where accuracy, context, and confidentiality matter from the first brief to final delivery.",
  },
  {
    title: "Responsive South Africa coverage",
    description:
      "From urgent transcription requests to multilingual interpreting support, we help teams across South Africa move with practical turnaround options.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why South African teams choose imperium linguistics
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We combine professional transcription and interpreting support with clear communication, secure handling, and dependable delivery.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ title, description }) => (
            <Card
              key={title}
              className="bg-[#3b82f6] text-white hover:bg-[#1d4ed8] transition-colors"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-white">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-white/90">
                {description}
              </CardContent>
            </Card>
          ))}
          
          <div className="relative rounded-lg overflow-hidden h-full aspect-square">
            <Image
              src="/handcuffs.jpg"
              alt="Legal transcription and interpreting support"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="relative rounded-lg overflow-hidden h-full aspect-square">
            <Image
              src="/magistrate.jpg"
              alt="Courtroom and legal service support in South Africa"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
