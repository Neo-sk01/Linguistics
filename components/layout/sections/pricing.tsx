import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  subtitle?: string;
  popular: PopularPlan;
  price: string;
  priceUnit?: string;
  description?: string;
  buttonText: string;
  benefitList: string[];
}

const transcriptionPlans: PlanProps[] = [
  {
    title: "Standard Service",
    subtitle: "Transcription",
    popular: 0,
    price: "R15.50",
    priceUnit: "PER MIN",
    buttonText: "Get Started",
    benefitList: [
      "Turn-around time 14 days",
      "Uploading the audio into the system",
      "Transcribing the audio into a document",
      "Proofreading and editing the document",
      "Final check and convert to PDF document",
    ],
  },
  {
    title: "Express Service",
    subtitle: "Transcription",
    popular: 1,
    price: "R18.50",
    priceUnit: "PER MIN",
    buttonText: "Get Started",
    benefitList: [
      "Turn-around time 7 days",
      "Uploading the audio into the system",
      "Transcribing the audio into a document",
      "Proofreading and editing the document",
      "Final check and convert to PDF document",
    ],
  },
  {
    title: "Translating Service",
    subtitle: "Transcription",
    popular: 0,
    price: "R5.50",
    priceUnit: "PER WORD",
    buttonText: "Get Started",
    benefitList: [
      "Translate each word from the original language",
      "Proofread and edit the document",
      "Convert the document into PDF",
      "Print out a copy",
    ],
  },
];

const interpretingPlans: PlanProps[] = [
  {
    title: "Local Language Interpreter",
    subtitle: "Interpreting/Translating Service",
    popular: 0,
    price: "R3500",
    priceUnit: "PER DAY",
    buttonText: "Contact Us",
    benefitList: [
      "SIMULTANEOUS INTERPRETING",
      "CONSECUTIVE INTERPRETING",
    ],
  },
  {
    title: "Foreign Language Interpreter",
    subtitle: "Interpreting/Translating Service",
    popular: 1,
    price: "R5000",
    priceUnit: "PER DAY",
    buttonText: "Contact Us",
    benefitList: [
      "SIMULTANEOUS INTERPRETING",
      "CONSECUTIVE INTERPRETING",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        PRICING GUIDE
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        IMPERIUM LINGUISTICS
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-8">
        Professional language services tailored to your needs
      </h3>

      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl text-center font-bold mb-8">
          TRANSCRIPTION SERVICE
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
          {transcriptionPlans.map(
            ({ title, subtitle, popular, price, priceUnit, buttonText, benefitList }) => (
              <Card
                key={title}
                className={
                  popular === PopularPlan?.YES
                    ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                    : ""
                }
              >
                <CardHeader>
                  {subtitle && (
                    <CardDescription className="text-primary font-semibold">
                      {subtitle}
                    </CardDescription>
                  )}
                  <CardTitle className="pb-2">{title}</CardTitle>

                  <div className="pt-2">
                    <span className="text-3xl font-bold">{price}</span>
                    {priceUnit && (
                      <span className="text-muted-foreground"> {priceUnit}</span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex">
                  <div className="space-y-4">
                    {benefitList.map((benefit) => (
                      <span key={benefit} className="flex">
                        <Check className="text-primary mr-2" />
                        <h3>{benefit}</h3>
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    variant={
                      popular === PopularPlan?.YES ? "default" : "secondary"
                    }
                    className="w-full"
                  >
                    {buttonText}
                  </Button>
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </div>

      <div className="pt-8">
        <h3 className="text-2xl md:text-3xl text-center font-bold mb-8">
          INTERPRETING/TRANSLATING SERVICE
        </h3>
        <div className="text-xl md:text-2xl text-center font-semibold mb-12 text-primary">
          WE THE FIRST TO BE DIFFERENT!
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-4 max-w-4xl mx-auto">
          {interpretingPlans.map(
            ({ title, subtitle, popular, price, priceUnit, buttonText, benefitList }) => (
              <Card
                key={title}
                className={
                  popular === PopularPlan?.YES
                    ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary md:scale-[1.05]"
                    : ""
                }
              >
                <CardHeader>
                  {subtitle && (
                    <CardDescription className="text-primary font-semibold">
                      {subtitle}
                    </CardDescription>
                  )}
                  <CardTitle className="pb-2">{title}</CardTitle>

                  <div className="pt-2">
                    <span className="text-3xl font-bold">{price}</span>
                    {priceUnit && (
                      <span className="text-muted-foreground"> {priceUnit}</span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex">
                  <div className="space-y-4">
                    {benefitList.map((benefit) => (
                      <span key={benefit} className="flex">
                        <Check className="text-primary mr-2" />
                        <h3>{benefit}</h3>
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    variant={
                      popular === PopularPlan?.YES ? "default" : "secondary"
                    }
                    className="w-full"
                  >
                    {buttonText}
                  </Button>
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
};
