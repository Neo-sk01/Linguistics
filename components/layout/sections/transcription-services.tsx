"use client";
import { cn } from "@/lib/utils";
import { AudioWaveform, FileText, MessageSquareText, BookText, Mic, ArrowRight, GraduationCap, 
  Phone, Mail, Clock, MapPin, ChevronRight, CalendarDays, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

interface ServiceCategory {
  title: string;
  items: string[];
  className?: string;
  icon: React.ElementType;
}

export const TranscriptionServicesSection = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  
  const handleMouseEnter = (buttonId: string) => {
    setHoveredButton(buttonId);
  };
  
  const handleMouseLeave = () => {
    setHoveredButton(null);
  };
  
  const transcriptionCategories: ServiceCategory[] = [
    {
      title: "LEGAL TRANSCRIPTION",
      items: [
        "Hearings",
        "Pleadings",
        "Arbitrations",
        "Testimonies",
        "Depositions"
      ],
      className: "bg-gradient-to-br from-blue-600/20 to-blue-600/5 dark:from-blue-600/10 dark:to-blue-600/5 border-blue-600/30 dark:border-blue-600/20",
      icon: FileText
    },
    {
      title: "BUSINESS TRANSCRIPTIONS",
      items: [
        "Conference Call",
        "Group Discussions",
        "Business Marketing",
        "Interviews",
        "Market Research",
        "Support Services"
      ],
      className: "bg-gradient-to-br from-gray-50/40 to-white dark:from-gray-900/20 dark:to-gray-900/10 border-gray-200/50 dark:border-gray-700/30",
      icon: MessageSquareText
    },
    {
      title: "EDUCATIONAL TRANSCRIPTS",
      items: [
        "Seminar",
        "Oral History",
        "Academic",
        "Interviews",
        "Research"
      ],
      className: "bg-gradient-to-br from-blue-600/20 to-blue-600/5 dark:from-blue-600/10 dark:to-blue-600/5 border-blue-600/30 dark:border-blue-600/20",
      icon: GraduationCap
    },
    {
      title: "GENERAL TRANSCRIPTIONS",
      items: [
        "Audio Transcriptions",
        "Digital Transcriptions",
        "Casette Transcriptions",
        "CD/DVD/MP3 Transcriptions"
      ],
      className: "bg-gradient-to-br from-gray-50/40 to-white dark:from-gray-900/20 dark:to-gray-900/10 border-gray-200/50 dark:border-gray-700/30",
      icon: AudioWaveform
    }
  ];

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Shared certificate preview component
  const CertificateHoverPreview = () => {
    if (!hoveredButton) return null;
    
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        <div className="relative bg-white dark:bg-gray-900 p-4 rounded-lg shadow-2xl max-w-[400px]">
          <h3 className="text-lg font-bold text-blue-600 mb-2 text-center">{hoveredButton}</h3>
          <div>
            <Image 
              src="/images/Transcribers-certificate/transcribers-certificate.jpeg"
              alt="Transcribers Certificate" 
              width={360} 
              height={480}
              className="mx-auto rounded"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Video Section with a similar layout to the contact section */}
      <section className="py-10 md:py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600/70 to-transparent"></div>
        
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              TRANSCRIPTION <span className="text-blue-600">SERVICES</span>
            </h2>
            <div className="w-16 h-0.5 bg-blue-600/50 mx-auto mt-3"></div>
          </motion.div>
          
          <div className="flex justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="w-full max-w-6xl"
            >
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-lg overflow-hidden">
                <div className="flex flex-col">
                  {/* Video at the top */}
                  <div className="w-full max-w-3xl mx-auto aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 mb-6">
                    <video 
                      className="w-full h-full object-cover"
                      controls
                    >
                      <source src="/Untitled design.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  
                  <div className="text-center mb-8">
                    <span className="inline-block px-3 py-1 bg-blue-600/10 text-blue-600 text-sm font-medium rounded">
                      Watch Our Transcription Process
                    </span>
                  </div>
                  
                  {/* Process Description below video */}
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-600 relative inline-block">
                      Our Transcription Process
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600/30"></span>
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm max-w-3xl">
                      Audio is transcribed using advanced AI software for accuracy instead of manual transcription, 
                      which has associated risks of typographical errors, and a secondary human for review.
                    </p>
                  </div>

                  {/* Process Steps in a row with arrows */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    {/* Step 1 */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md border border-blue-600/20 relative"
                    >
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-medium py-1 px-2 rounded-full">
                        STEP 1
                      </div>
                      <div className="h-12 w-12 bg-blue-600/10 dark:bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <AudioWaveform className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="font-medium text-blue-600 mb-1 text-sm text-center">FIRST STEP OF THE PROCESS</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                        Place an AUDIO file into the AI software for transcription, with the assistance of a Human.
                      </p>
                      
                      {/* Arrow pointing to next step - visible only on desktop */}
                      <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                        <ArrowRight className="h-5 w-5 text-blue-600" />
                      </div>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md border border-blue-600/20 relative"
                    >
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-medium py-1 px-2 rounded-full">
                        STEP 2
                      </div>
                      <div className="h-12 w-12 bg-blue-600/10 dark:bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="font-medium text-blue-600 mb-1 text-sm text-center">SECOND STEP OF THE PROCESS</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                        The editor, after comparing the transcript with the recording, transfer them to the proof reading department.
                      </p>
                      
                      {/* Arrow pointing to next step - visible only on desktop */}
                      <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                        <ArrowRight className="h-5 w-5 text-blue-600" />
                      </div>
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md border border-blue-600/20 relative"
                    >
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-medium py-1 px-2 rounded-full">
                        STEP 3
                      </div>
                      <div className="h-12 w-12 bg-blue-600/10 dark:bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <MessageSquareText className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="font-medium text-blue-600 mb-1 text-sm text-center">FINAL STEP OF THE PROCESS</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                        Transcripts will then be proof read, then a soft copy gets to be sent to the client.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Verbatim Transcription Types Section */}
      <section className="bg-background relative overflow-hidden">
        <div className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">
              <span className="text-black dark:text-white relative">
                Verbatim Transcription Types
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600/30 dark:bg-blue-600/30"></span>
              </span>
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-4 text-gray-700 dark:text-gray-300 mt-6">
              <p className="text-base">
                Our default transcription type – Clean Verbatim, with no time stamps, is the most popular.
              </p>
              <p className="text-base">
                There are two Verbatim transcript types you can choose from when ordering transcripts, together with two time stamp options.
              </p>
              <p className="text-base">
                These options can be selected once you Get Started and your Transcription Quotation is created.
              </p>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
            {/* Clean Verbatim */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-900 p-8 relative z-10 flex flex-col items-center h-full">
                <h3 className="text-xl font-bold text-blue-600 mb-2">CLEAN VERBATIM</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">(Standard/Default)</p>
                
                <div className="flex-grow">
                  <p className="text-center text-sm mb-6">
                    The transcription excludes: all utterances that are not words eg. um, uh huh, mmhm..
                  </p>
                </div>
                
                <div className="w-full pt-4 mt-auto">
                  <button 
                    className="w-full py-2 text-blue-500 font-medium hover:text-blue-700 transition-colors text-sm"
                    onMouseEnter={() => handleMouseEnter("Clean Verbatim Sample")}
                    onMouseLeave={handleMouseLeave}
                  >
                    VIEW SAMPLE
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Full Verbatim */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-900 p-8 relative z-10 flex flex-col items-center h-full">
                <h3 className="text-xl font-bold text-blue-600 mb-2">FULL VERBATIM</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4"></p>
                
                <div className="flex-grow">
                  <p className="text-center text-sm mb-3">
                    The transcription includes: All verbal utterances such as um, uh huh, mmhm.
                  </p>
                  <p className="text-center text-sm">
                    Does not include non-verbal communication such as laughter, crying, emotions or pauses.
                  </p>
                </div>
                
                <div className="w-full pt-4 mt-auto">
                  <button 
                    className="w-full py-2 text-blue-500 font-medium hover:text-blue-700 transition-colors text-sm"
                    onMouseEnter={() => handleMouseEnter("Full Verbatim Sample")}
                    onMouseLeave={handleMouseLeave}
                  >
                    VIEW SAMPLE
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Time Stamps - Every 2 Minutes */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-900 p-8 relative z-10 flex flex-col items-center h-full">
                <h3 className="text-xl font-bold text-blue-600 mb-2">TIME STAMPS</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4"></p>
                
                <div className="flex-grow">
                  <p className="text-center text-sm mb-3">
                    Every 2 minutes or more.
                  </p>
                </div>
                
                <div className="w-full pt-4 mt-auto">
                  <button 
                    className="w-full py-2 text-blue-500 font-medium hover:text-blue-700 transition-colors text-sm"
                    onMouseEnter={() => handleMouseEnter("Time Stamps Sample (Every 2 Minutes)")}
                    onMouseLeave={handleMouseLeave}
                  >
                    VIEW SAMPLE
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Time Stamps - On Speaker Change */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-900 p-8 relative z-10 flex flex-col items-center h-full">
                <h3 className="text-xl font-bold text-blue-600 mb-2">TIME STAMPS</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4"></p>
                
                <div className="flex-grow">
                  <p className="text-center text-sm mb-3">
                    On Speaker change.
                  </p>
                </div>
                
                <div className="w-full pt-4 mt-auto">
                  <button 
                    className="w-full py-2 text-blue-500 font-medium hover:text-blue-700 transition-colors text-sm"
                    onMouseEnter={() => handleMouseEnter("Time Stamps Sample (On Speaker Change)")}
                    onMouseLeave={handleMouseLeave}
                  >
                    VIEW SAMPLE
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
          
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md hover:shadow-lg transition-all">
              Get Started
            </button>
          </motion.div>
        </div>
      </section>

      {/* Transcription Services Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden w-full">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate" 
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-0"
        >
          {transcriptionCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={cn(
                "p-8 relative overflow-hidden transition-all h-full", 
                category.className || "",
                index % 2 === 0 ? "bg-blue-600/5 dark:bg-blue-900/10" : "bg-gray-50 dark:bg-gray-800/50"
              )}
            >
              <div className={cn(
                "w-12 h-12 flex items-center justify-center mb-4",
                index % 2 === 0 ? "bg-blue-600/20" : "bg-gray-100 dark:bg-gray-800"
              )}>
                <category.icon className={cn(
                  "h-6 w-6", 
                  index % 2 === 0 ? "text-blue-600" : "text-gray-700 dark:text-gray-300"
                )} />
              </div>
              
              <h3 className="text-lg font-bold mb-4 text-blue-600">{category.title}</h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center group">
                    <span className="w-2 h-2 bg-blue-600 mr-2"></span>
                    <span className="group-hover:text-blue-600 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600/70 to-transparent"></div>
        
        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Guarantee</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  At Imperium Linguistics, we guarantee accuracy, confidentiality, and timely delivery on all projects.
                </p>
                <ul className="space-y-2">
                  {["100% Accuracy Guarantee", "Confidentiality Assured", "Native Speakers Only", "Rush Service Available"].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center group"
                    >
                      <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Languages Supported</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We support all official languages for your transcription needs.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {["Afrikaans", "English", "isiNdebele", "isiXhosa", "isiZulu", "Northern Sotho (Sepedi)", "Sesotho", "Setswana", "siSwati", "Tshivenda"].map((lang, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05, duration: 0.2 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-blue-600/10 text-sm text-center text-blue-600"
                    >
                      {lang}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16 mt-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our team of professional transcriptionists are ready to help with your next project.
            </p>
            <div className="mt-10">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md hover:shadow-lg transition-all"
              >
                Request a Quote
              </motion.button>
            </div>
          </motion.div>
          
          <div className="mt-16 text-center text-gray-600 dark:text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Imperium Linguistics. All rights reserved.</p>
          </div>
        </div>
      </section>

      {/* Single shared preview component */}
      {hoveredButton && <CertificateHoverPreview />}
    </>
  );
}; 