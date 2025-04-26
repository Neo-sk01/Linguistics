import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import Image from "next/image";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "",
    description:
      "Our legal system is inundated with matters as they are postponed on a daily, due to scarcity of interpreters which has resulted in major inadequacies.",
  },
  {
    icon: "LineChart",
    title: "",
    description:
      "Due to the immense pressure on the legal system there is a backlog which causes extreme delay in the application of obtaining court transcripts.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Aim
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We help our clients accomplish their business
            goals by providing them with legal
            transcriptions and legal Interpreting services
            they can rely on.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title || index}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardContent className="text-muted-foreground pt-6">
                {description}
              </CardContent>
            </Card>
          ))}
          
          <div className="relative rounded-lg overflow-hidden h-full aspect-square">
            <Image
              src="/handcuffs.jpg"
              alt="Legal handcuffs"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden h-full aspect-square">
            <Image
              src="/magistrate.jpg"
              alt="Magistrate Court"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
