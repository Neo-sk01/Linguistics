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
  const [activeServiceType, setActiveServiceType] = useState<"transcription" | "interpreting">("transcription");

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
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-lg text-primary mb-2 tracking-wider">
          PRICING GUIDE
        </h2>
        <h3 className="text-xl text-muted-foreground">
          Professional language services tailored to your needs
        </h3>
      </div>

      {selectedService ? (
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg overflow-hidden">
          {submitted ? (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
              <p className="text-muted-foreground mb-8">
                We've received your request for {selectedService}. Our team will review your details and contact you shortly with a personalized quote.
              </p>
              <Button onClick={resetForm} size="lg">
                Submit Another Request
              </Button>
            </div>
          ) : (
            <div>
              <div className="bg-gradient-to-r from-primary/80 to-blue-600/80 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Request a Quote</h3>
                <p className="opacity-90">
                  {selectedService} - Upload your files and tell us about your project
                </p>
              </div>
              
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium mb-1.5 block">
                        Full Name
                      </Label>
                      <Input 
                        id="name" 
                        placeholder="Enter your name"
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="h-11"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium mb-1.5 block">
                        Email Address
                      </Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="h-11"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="audio" className="text-sm font-medium mb-1.5 block">
                      Audio File
                    </Label>
                    <div className="border-2 border-dashed rounded-lg p-4 bg-gray-50 dark:bg-gray-800/50">
                      <label 
                        htmlFor="audio-upload" 
                        className="flex flex-col items-center justify-center cursor-pointer py-4"
                      >
                        <div className="flex flex-col items-center justify-center text-center">
                          <Upload className="w-8 h-8 mb-3 text-primary" />
                          <p className="mb-1 text-sm">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground">
                            MP3, WAV, M4A (MAX. 100MB)
                          </p>
                          {audioFile && (
                            <div className="mt-4 p-2 bg-primary/10 rounded-md w-full max-w-xs">
                              <p className="text-sm font-medium text-primary truncate">
                                {audioFile.name}
                              </p>
                            </div>
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
                  
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium mb-1.5 block">
                      Project Details
                    </Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe your project requirements or any special instructions"
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[120px] resize-none"
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Back to Services
                    </Button>
                    <Button type="submit" size="lg" className="sm:px-8">
                      Submit Request
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden">
          <div className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
            <div className="container px-4 sm:px-6 py-4">
              <div className="flex justify-center sm:justify-start space-x-2">
                <Button 
                  variant={activeServiceType === "transcription" ? "default" : "outline"}
                  onClick={() => setActiveServiceType("transcription")}
                  className="font-medium"
                >
                  Transcription Services
                </Button>
                <Button 
                  variant={activeServiceType === "interpreting" ? "default" : "outline"}
                  onClick={() => setActiveServiceType("interpreting")}
                  className="font-medium"
                >
                  Interpreting Services
                </Button>
              </div>
            </div>
          </div>
          
          <div className="p-6 sm:p-8">
            {activeServiceType === "transcription" ? (
              <>
                <div className="mb-6">
                  <p className="text-muted-foreground text-center">
                    Choose from our range of professional transcription services to meet your needs
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {transcriptionPlans.map(
                    ({ title, subtitle, popular, buttonText, benefitList }) => (
                      <div 
                        key={title}
                        className={`
                          bg-white dark:bg-gray-900 
                          border rounded-xl overflow-hidden transition-all
                          hover:shadow-md 
                          ${popular === PopularPlan?.YES 
                            ? "shadow-lg border-primary" 
                            : "border-gray-200 dark:border-gray-800"}
                        `}
                      >
                        {popular === PopularPlan?.YES && (
                          <div className="bg-primary text-white text-center py-1.5 text-xs font-medium">
                            RECOMMENDED
                          </div>
                        )}
                        
                        <div className="p-6">
                          <h4 className="text-lg font-semibold mb-1">{title}</h4>
                          {subtitle && (
                            <p className="text-sm text-primary font-medium mb-4">
                              {subtitle}
                            </p>
                          )}
                          
                          <div className="space-y-3 my-6">
                            {benefitList.map((benefit) => (
                              <div key={benefit} className="flex items-start">
                                <div className="mt-0.5 bg-primary/10 rounded-full p-0.5 mr-3">
                                  <Check className="text-primary h-3.5 w-3.5" />
                                </div>
                                <p className="text-sm text-gray-700 dark:text-gray-300">{benefit}</p>
                              </div>
                            ))}
                          </div>
                          
                          <Button
                            variant={popular === PopularPlan?.YES ? "default" : "outline"}
                            size="lg"
                            className="w-full mt-4"
                            onClick={() => handleServiceSelect(title)}
                          >
                            {buttonText}
                          </Button>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="mb-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      WE THE FIRST TO BE DIFFERENT!
                    </h3>
                    <p className="text-muted-foreground">
                      Expert interpretation services for any scenario and language
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {interpretingPlans.map(
                    ({ title, subtitle, popular, buttonText, benefitList }) => (
                      <div 
                        key={title}
                        className={`
                          bg-white dark:bg-gray-900 
                          border rounded-xl overflow-hidden transition-all
                          hover:shadow-md 
                          ${popular === PopularPlan?.YES 
                            ? "shadow-lg border-primary" 
                            : "border-gray-200 dark:border-gray-800"}
                        `}
                      >
                        {popular === PopularPlan?.YES && (
                          <div className="bg-primary text-white text-center py-1.5 text-xs font-medium">
                            RECOMMENDED
                          </div>
                        )}
                        
                        <div className="p-6">
                          <h4 className="text-lg font-semibold mb-1">{title}</h4>
                          {subtitle && (
                            <p className="text-sm text-primary font-medium mb-4">
                              {subtitle}
                            </p>
                          )}
                          
                          <div className="space-y-3 my-6">
                            {benefitList.map((benefit) => (
                              <div key={benefit} className="flex items-start">
                                <div className="mt-0.5 bg-primary/10 rounded-full p-0.5 mr-3">
                                  <Check className="text-primary h-3.5 w-3.5" />
                                </div>
                                <p className="text-sm text-gray-700 dark:text-gray-300">{benefit}</p>
                              </div>
                            ))}
                          </div>
                          
                          <Button
                            variant={popular === PopularPlan?.YES ? "default" : "outline"}
                            size="lg"
                            className="w-full mt-4"
                            onClick={() => handleServiceSelect(title)}
                          >
                            {buttonText}
                          </Button>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
