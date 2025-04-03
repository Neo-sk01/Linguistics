import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Professional Translation",
    description:
      "Expert document translation services with precision and attention to cultural nuances in multiple languages.",
    pro: 1,
  },
  {
    title: "Interpretation Services",
    description:
      "Real-time interpretation for conferences, meetings, and events with certified linguists.",
    pro: 1,
  },
  {
    title: "Content Localization",
    description: "Adapt your content for specific markets and cultures to ensure maximum engagement.",
    pro: 1,
  },
  {
    title: "Educational Language Services",
    description: "Custom language training programs, curriculum development, and educational consulting.",
    pro: 0,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Premium Language Services
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        From translation and interpretation to content localization and language education, 
        we offer expert linguistic solutions to help you communicate effectively on a global scale.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PREMIUM
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
