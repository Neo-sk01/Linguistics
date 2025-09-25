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
  const [showCertificate, setShowCertificate] = useState<boolean>(false);
  const [certificateType, setCertificateType] = useState<string>("");
  
  const handleShowCertificate = (certificateType: string) => {
    setCertificateType(certificateType);
    setShowCertificate(true);
  };
  
  const handleCloseCertificate = () => {
    setShowCertificate(false);
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

  // Certificate modal component
  const CertificateModal = () => {
    if (!showCertificate) return null;
    
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        onClick={handleCloseCertificate}
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl max-w-[440px] border border-blue-400/30"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" 
            onClick={handleCloseCertificate}
            aria-label="Close certificate modal"
          >
            <X className="h-5 w-5" />
          </button>
          <h3 className="text-xl font-bold text-blue-600 mb-3 text-center">Transcription Certificate</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 text-center">{certificateType}</p>
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">Official</div>
            <Image 
              src="/images/Transcribers-certificate/transcribers-certificate.jpeg"
              alt="Transcribers Certificate" 
              width={400} 
              height={520}
              className="mx-auto rounded-md border border-gray-200 dark:border-gray-700 shadow-md"
            />
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <>
      {/* Video Section with a similar layout to the contact section */}
      <section className="py-10 md:py-16 bg-[#1b2532] text-white dark:bg-[#1b2532] relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600/70 to-transparent"></div>
        
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              TRANSCRIPTION <span className="text-blue-300">SERVICES</span>
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
              <div className="bg-[#1b2532] border border-gray-700 rounded-lg p-6 shadow-lg overflow-hidden">
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
                  

                  
                  {/* Process Description below video */}
                  <div className="mb-8 text-center max-w-3xl mx-auto">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-300 relative inline-block">
                      Our Transcription Process
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-300/50"></span>
                    </h3>
                    
                    <p className="text-gray-200 mb-6 text-sm">
                      Audio is transcribed using advanced AI software for accuracy instead of manual transcription, 
                      which has associated risks of typographical errors, and a secondary human for review.
                    </p>
                  </div>

                  {/* Process Steps in a row with arrows */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
                    {/* Step 1 */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="bg-[#263247] p-4 rounded-md border border-blue-400/20 relative"
                    >
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-400 text-white text-xs font-medium py-1 px-2 rounded-full">
                        STEP 1
                      </div>
                      <div className="h-12 w-12 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <AudioWaveform className="h-6 w-6 text-blue-300" />
                      </div>
                      <h4 className="font-medium text-blue-300 mb-1 text-sm text-center">FIRST STEP OF THE PROCESS</h4>
                      <p className="text-sm text-gray-200 text-center">
                        Place an AUDIO file into the AI software for transcription, with the assistance of a Human.
                      </p>
                      
                      {/* Arrow pointing to next step - visible only on desktop */}
                      <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                        <ArrowRight className="h-5 w-5 text-blue-300" />
                      </div>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="bg-[#263247] p-4 rounded-md border border-blue-400/20 relative"
                    >
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-400 text-white text-xs font-medium py-1 px-2 rounded-full">
                        STEP 2
                      </div>
                      <div className="h-12 w-12 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FileText className="h-6 w-6 text-blue-300" />
                      </div>
                      <h4 className="font-medium text-blue-300 mb-1 text-sm text-center">SECOND STEP OF THE PROCESS</h4>
                      <p className="text-sm text-gray-200 text-center">
                        The editor, after comparing the transcript with the recording, transfer them to the proof reading department.
                      </p>
                      
                      {/* Arrow pointing to next step - visible only on desktop */}
                      <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                        <ArrowRight className="h-5 w-5 text-blue-300" />
                      </div>
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="bg-[#263247] p-4 rounded-md border border-blue-400/20 relative"
                    >
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-400 text-white text-xs font-medium py-1 px-2 rounded-full">
                        STEP 3
                      </div>
                      <div className="h-12 w-12 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <MessageSquareText className="h-6 w-6 text-blue-300" />
                      </div>
                      <h4 className="font-medium text-blue-300 mb-1 text-sm text-center">FINAL STEP OF THE PROCESS</h4>
                      <p className="text-sm text-gray-200 text-center">
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
      <section className="bg-[#1b2532] text-white py-16 sm:py-20 dark:bg-[#1b2532] relative overflow-hidden dark:text-white">
        <div className="w-full bg-[#1b2532] dark:bg-[#1b2532]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-center mb-16 mt-8 px-6 py-8 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600 dark:text-white">
              <span className="inline-block relative">
                Verbatim Transcription Types
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500 dark:bg-blue-400/50"></span>
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
              <div className="bg-[#1b2532] text-white p-8 relative z-10 flex flex-col items-center h-full">
                <h3 className="text-xl font-bold text-white mb-2">CLEAN VERBATIM</h3>
                <p className="text-xs text-gray-300 mb-4">(Standard/Default)</p>
                
                <div className="flex-grow">
                  <p className="text-center text-sm text-gray-300 mb-6">
                    The transcription excludes: all utterances that are not words eg. um, uh huh, mmhm..
                  </p>
                </div>
                
                <div className="w-full pt-4 mt-auto">
                  <button 
                    className="w-full py-2 text-blue-300 font-medium hover:text-blue-100 transition-colors text-sm"
                    onClick={() => handleShowCertificate("Clean Verbatim Sample")}
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
              <div className="bg-[#1b2532] text-white p-8 relative z-10 flex flex-col items-center h-full">
                <h3 className="text-xl font-bold text-white mb-2">FULL VERBATIM</h3>
                <p className="text-xs text-gray-300 mb-4"></p>
                
                <div className="flex-grow">
                  <p className="text-center text-sm text-gray-300 mb-3">
                    The transcription includes: All verbal utterances such as um, uh huh, mmhm.
                  </p>
                  <p className="text-center text-sm text-gray-300">
                    Does not include non-verbal communication such as laughter, crying, emotions or pauses.
                  </p>
                </div>
                
                <div className="w-full pt-4 mt-auto">
                  <button 
                    className="w-full py-2 text-blue-300 font-medium hover:text-blue-100 transition-colors text-sm"
                    onClick={() => handleShowCertificate("Full Verbatim Sample")}
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
              <div className="bg-[#1b2532] text-white p-8 relative z-10 flex flex-col items-center h-full">
                <h3 className="text-xl font-bold text-white mb-2">TIME STAMPS</h3>
                <p className="text-xs text-gray-300 mb-4"></p>
                
                <div className="flex-grow">
                  <p className="text-center text-sm text-gray-300 mb-3">
                    Every 2 minutes or more.
                  </p>
                </div>
                
                <div className="w-full pt-4 mt-auto">
                  <button 
                    className="w-full py-2 text-blue-300 font-medium hover:text-blue-100 transition-colors text-sm"
                    onClick={() => handleShowCertificate("Time Stamps Sample (Every 2 Minutes)")}
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
              <div className="bg-[#1b2532] text-white p-8 relative z-10 flex flex-col items-center h-full">
                <h3 className="text-xl font-bold text-white mb-2">TIME STAMPS</h3>
                <p className="text-xs text-gray-300 mb-4"></p>
                
                <div className="flex-grow">
                  <p className="text-center text-sm text-gray-300 mb-3">
                    On Speaker change.
                  </p>
                </div>
                
                <div className="w-full pt-4 mt-auto">
                  <button 
                    className="w-full py-2 text-blue-300 font-medium hover:text-blue-100 transition-colors text-sm"
                    onClick={() => handleShowCertificate("Time Stamps Sample (On Speaker Change)")}
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
            <a
              href="https://wetransfer.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md hover:shadow-lg transition-all"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>

      {/* Transcription Services Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden w-full bg-white dark:bg-[#1b2532] text-gray-800 dark:text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 dark:text-white sm:text-4xl">Our Transcription Services</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto my-4"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">We offer a comprehensive range of professional transcription services tailored to your specific needs.</p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate" 
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto"
          >
          {transcriptionCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={cn(
                "p-8 relative overflow-hidden transition-all h-full", 
                "border border-blue-300 dark:border-blue-900/30 rounded-lg hover:border-blue-500 dark:hover:border-blue-400/50",
                "bg-white dark:bg-[#111827] hover:bg-blue-50 dark:hover:bg-blue-900/20 shadow-sm hover:shadow"
              )}
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-500/30 dark:to-blue-900/20 rounded-full shadow-inner shadow-blue-400/10">
                <category.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b border-blue-200 dark:border-blue-400/20 pb-2">{category.title}</h3>
              <ul className="space-y-4">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start group">
                    <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 mr-3 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-4 border-t border-blue-200 dark:border-blue-900/30">
                <span className="text-sm text-blue-600 dark:text-blue-400/80 font-medium">Learn More →</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
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
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16 mt-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our team of professional transcriptionists are ready to help with your next project.
            </p>
            <div className="mt-10">
              <motion.a 
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md hover:shadow-lg transition-all no-underline rounded-md"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
          
          <div className="mt-16 text-center text-gray-600 dark:text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Imperium Linguistics. All rights reserved.</p>
          </div>
        </div>
      </section>

      {/* Single shared preview component */}
      <CertificateModal />
    </>
  );
}; 