"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Upload } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  subtitle?: string;
  popular: PopularPlan;
  buttonText: string;
  benefitList: string[];
}

const transcriptionPlans: PlanProps[] = [
  {
    title: "Standard Service",
    subtitle: "Transcription",
    popular: 0,
    buttonText: "Request Quote",
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
    buttonText: "Request Quote",
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
    buttonText: "Request Quote",
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
    buttonText: "Request Quote",
    benefitList: [
      "SIMULTANEOUS INTERPRETING",
      "CONSECUTIVE INTERPRETING",
    ],
  },
  {
    title: "Foreign Language Interpreter",
    subtitle: "Interpreting/Translating Service",
    popular: 1,
    buttonText: "Request Quote",
    benefitList: [
      "SIMULTANEOUS INTERPRETING",
      "CONSECUTIVE INTERPRETING",
    ],
  },
];

export const PricingSection = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleServiceSelect = (title: string) => {
    setSelectedService(title);
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically send the data to a server
    console.log({
      service: selectedService,
      name,
      email,
      message,
      audioFile
    });
    setSubmitted(true);
  };

  const resetForm = () => {
    setSelectedService(null);
    setName("");
    setEmail("");
    setMessage("");
    setAudioFile(null);
    setSubmitted(false);
  };

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

      {selectedService ? (
        <div className="max-w-xl mx-auto">
          {submitted ? (
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-center">Thank You!</CardTitle>
                <CardDescription className="text-center">
                  We've received your request for {selectedService}. Our team will review your audio file and contact you shortly with a personalized quote.
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-center">
                <Button onClick={resetForm}>Submit Another Request</Button>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Request a Quote for {selectedService}</CardTitle>
                <CardDescription>
                  Upload your audio file, and we'll provide a custom quote based on your specific needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid w-full gap-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      required
                    />
                  </div>
                  
                  <div className="grid w-full gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required
                    />
                  </div>
                  
                  <div className="grid w-full gap-1.5">
                    <Label htmlFor="audio">Audio File</Label>
                    <div className="flex items-center justify-center w-full">
                      <label 
                        htmlFor="audio-upload" 
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-card/50 hover:bg-card/80"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-3 text-primary" />
                          <p className="mb-2 text-sm text-muted-foreground">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground">
                            MP3, WAV, M4A (MAX. 100MB)
                          </p>
                          {audioFile && (
                            <p className="mt-2 text-sm font-medium text-primary">
                              Selected: {audioFile.name}
                            </p>
                          )}
                        </div>
                        <Input 
                          id="audio-upload" 
                          type="file" 
                          className="hidden" 
                          accept="audio/*"
                          onChange={(e) => {
                            const files = e.target.files;
                            if (files && files.length > 0) {
                              setAudioFile(files[0]);
                            }
                          }}
                          required
                        />
                      </label>
                    </div>
                  </div>
                  
                  <div className="grid w-full gap-1.5">
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide any additional requirements or information" 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Back to Services
                    </Button>
                    <Button type="submit">
                      Request Quote
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      ) : (
        <>
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl text-center font-bold mb-8">
              TRANSCRIPTION SERVICE
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
              {transcriptionPlans.map(
                ({ title, subtitle, popular, buttonText, benefitList }) => (
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
                        onClick={() => handleServiceSelect(title)}
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
                ({ title, subtitle, popular, buttonText, benefitList }) => (
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
                        onClick={() => handleServiceSelect(title)}
                      >
                        {buttonText}
                      </Button>
                    </CardFooter>
                  </Card>
                )
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
};
