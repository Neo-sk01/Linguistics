"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container relative w-full min-h-[75vh] flex items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[50vh] bg-primary/20 rounded-full blur-[120px] -z-10"></div>
      
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32 w-full">
        <div className="text-center space-y-10 max-w-3xl mx-auto">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>Premium</Badge>
            </span>
            <span> Language Services </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Experience
              <span className="text-transparent px-2 bg-gradient-to-r from-primary to-primary bg-clip-text">
                IMPERIUM LINGUISTICS
              </span>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`We're more than just translators, we're a team of language experts dedicated to excellence. Get access to premium translation, interpretation, and linguistic services.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4 pt-6">
            <Button className="w-5/6 md:w-1/3 lg:w-1/4 font-bold group/arrow py-6">
              Get Started
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/3 lg:w-1/4 font-bold py-6"
            >
              <Link href="#contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
