"use client";
import { cn } from "@/lib/utils";
import { Mic, AudioWaveform, Radio, ArrowRight, Speaker, 
  Phone, Mail, Clock, MapPin, ChevronRight, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface EquipmentCategory {
  title: string;
  items: string[];
  className?: string;
  icon: React.ElementType;
}

export const ConferenceEquipmentSection = () => {
  const equipmentCategories: EquipmentCategory[] = [
    {
      title: "CONFERENCE MICROPHONES",
      items: [
        "Digital-Conference-36",
        "Gooseneck Mics",
        "Wireless Systems",
        "Boundary Microphones",
        "Handheld Options"
      ],
      className: "bg-gradient-to-br from-[#916c18]/20 to-[#916c18]/5 dark:from-[#916c18]/10 dark:to-[#916c18]/5 border-[#916c18]/30 dark:border-[#916c18]/20",
      icon: Mic
    },
    {
      title: "RECORDING DEVICES",
      items: [
        "Philips DPM 8900",
        "360° Sound Detection",
        "MP3 & PCM Format",
        "Multi-Channel Recorders",
        "Portable Solutions"
      ],
      className: "bg-gradient-to-br from-gray-50/40 to-white dark:from-gray-900/20 dark:to-gray-900/10 border-gray-200/50 dark:border-gray-700/30",
      icon: AudioWaveform
    },
    {
      title: "WIRELESS SYSTEMS",
      items: [
        "900 MHz Technology",
        "12-Channel Digital",
        "Extended Range",
        "Interference-Free",
        "Easy Setup"
      ],
      className: "bg-gradient-to-br from-[#916c18]/20 to-[#916c18]/5 dark:from-[#916c18]/10 dark:to-[#916c18]/5 border-[#916c18]/30 dark:border-[#916c18]/20",
      icon: Radio
    },
    {
      title: "ACCESSORIES & ADD-ONS",
      items: [
        "Charging Stations",
        "Extension Cables",
        "Mounting Solutions",
        "Carrying Cases",
        "Power Supplies"
      ],
      className: "bg-gradient-to-br from-gray-50/40 to-white dark:from-gray-900/20 dark:to-gray-900/10 border-gray-200/50 dark:border-gray-700/30",
      icon: Speaker
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

  return (
    <>
      <section className="container py-24 sm:py-32 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -z-10 top-1/3 -left-10 w-72 h-72 bg-[#916c18]/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -z-10 bottom-1/4 right-0 w-80 h-80 bg-[#916c18]/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[500px] bg-gradient-to-r from-[#916c18]/0 via-[#916c18]/5 to-[#916c18]/0 rotate-12 blur-3xl"></div>
        
        {/* Abstract decorative shapes */}
        <div className="absolute top-32 right-10 w-16 h-16 border-2 border-[#916c18]/20 rounded-md rotate-45 hidden lg:block"></div>
        <div className="absolute bottom-32 left-10 w-16 h-16 border-2 border-[#916c18]/20 rounded-full hidden lg:block"></div>
        <div className="absolute top-96 left-20 w-8 h-8 bg-[#916c18]/10 rounded-full hidden lg:block"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-[#916c18]/10 text-[#916c18] tracking-wider">WORLD-CLASS EQUIPMENT</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            CONFERENCE <br />
            <span className="text-[#916c18] relative">
              EQUIPMENT
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#916c18]/30 rounded-full"></span>
            </span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-medium text-muted-foreground max-w-2xl">
            <span className="text-[#916c18] font-semibold">SUPERIOR QUALITY.</span> PROFESSIONAL SOLUTIONS.
          </p>
          <div className="flex items-center justify-center mt-4 space-x-1 text-sm text-muted-foreground">
            <span className="inline-block h-1 w-1 rounded-full bg-[#916c18]"></span>
            <span className="inline-block h-1 w-1 rounded-full bg-[#916c18]"></span>
            <span className="inline-block h-1 w-12 rounded-full bg-[#916c18]/70"></span>
            <span className="inline-block h-1 w-1 rounded-full bg-[#916c18]"></span>
            <span className="inline-block h-1 w-1 rounded-full bg-[#916c18]"></span>
          </div>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate" 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {equipmentCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={cn(
                "rounded-xl p-6 border relative overflow-hidden shadow-md hover:shadow-xl transition-all", 
                category.className || "",
                index % 2 === 0 ? "border-[#916c18]/50 dark:border-[#916c18]/30" : "border-gray-300/70 dark:border-gray-700/30"
              )}
            >
              <div className="absolute top-0 right-0 w-20 h-20 -mr-6 -mt-6 bg-gradient-to-br from-[#916c18]/20 to-transparent rounded-full"></div>
              
              <div className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                index % 2 === 0 ? "bg-[#916c18]/20" : "bg-gray-100 dark:bg-gray-800"
              )}>
                <category.icon className={cn(
                  "h-6 w-6", 
                  index % 2 === 0 ? "text-[#916c18]" : "text-gray-700 dark:text-gray-300"
                )} />
              </div>
              
              <h3 className="text-lg font-bold mb-4 text-[#916c18]">{category.title}</h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center group">
                    <span className="w-2 h-2 bg-[#916c18] rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                    <span className="group-hover:text-[#916c18] transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-16 sm:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#916c18]/5 to-[#916c18]/10 dark:from-gray-900/80 dark:to-gray-900/90"></div>
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white/90 to-transparent dark:from-gray-900 dark:to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white/90 to-transparent dark:from-gray-900 dark:to-transparent"></div>
        
        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-[#916c18]/10 text-[#916c18] tracking-wider">FEATURED PRODUCTS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">OUR PREMIUM SOLUTIONS</h2>
            <div className="w-20 h-1 bg-[#916c18]/50 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-xl border border-[#916c18]/30 dark:border-[#916c18]/20 hover:border-[#916c18]/70 dark:hover:border-[#916c18]/40 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#916c18]/70 via-[#916c18] to-[#916c18]/70"></div>
              <div className="absolute -bottom-14 -left-14 w-28 h-28 bg-[#916c18]/10 rounded-full"></div>
              
              <div className="mb-6 w-full rounded-lg overflow-hidden shadow-md">
                <div className="relative w-full" style={{ minHeight: "240px" }}>
                  <Image 
                    src="/equipment/equipment2.png" 
                    alt="Conference Microphones" 
                    width={640} 
                    height={400} 
                    className="w-full h-auto object-cover transition-transform hover:scale-105 duration-500"
                    priority
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#916c18] mb-6 text-center uppercase">
                Digital-Conference-36-Extend
              </h3>
              
              <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                Our premier 12-Channel Digital Wireless Conference Microphone System comes with 36 Gooseneck 
                Microphones operating on the 900 MHz frequency band, providing exceptional clarity and 
                range for your most important meetings.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The Digital-Conference-36-Extend is designed for professional conference rooms and delivers 
                crystal-clear audio without interference. Its extended range and reliable performance make it 
                the top choice for businesses that demand the best.
              </p>
              
              <div className="flex justify-end mt-8">
                <div className="flex items-center text-sm text-[#916c18] font-medium group cursor-pointer">
                  <span>View Specifications</span>
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-xl border border-[#916c18]/30 dark:border-[#916c18]/20 hover:border-[#916c18]/70 dark:hover:border-[#916c18]/40 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#916c18]/70 via-[#916c18] to-[#916c18]/70"></div>
              <div className="absolute -bottom-14 -right-14 w-28 h-28 bg-[#916c18]/10 rounded-full"></div>
              
              <div className="mb-6 w-full rounded-lg overflow-hidden shadow-md">
                <div className="relative w-full" style={{ minHeight: "240px" }}>
                  <Image 
                    src="/equipment/equipment1.png" 
                    alt="Digital Conference Recorder" 
                    width={640} 
                    height={400} 
                    className="w-full h-auto object-cover transition-transform hover:scale-105 duration-500"
                    priority
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#916c18] mb-6 text-center uppercase">
                Philips DPM 8900
              </h3>
              
              <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                The Philips DPM 8900 Conference Recorder offers superior audio quality with 360-degree sound 
                detection, allowing you to capture every word from any direction. Supporting both MP3 and PCM 
                formats, it provides flexibility for all your recording needs.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                With innovative meeting microphones and intuitive controls, this recorder is perfect for 
                boardrooms, legal proceedings, and educational settings where audio quality and reliability 
                are essential.
              </p>
              
              <div className="flex justify-end mt-8">
                <div className="flex items-center text-sm text-[#916c18] font-medium group cursor-pointer">
                  <span>View Specifications</span>
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#916c18]/70 to-transparent"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#916c18]/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#916c18]/5 rounded-full blur-xl"></div>
        
        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Upgrade Your Equipment?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer world-class audio recording machines that suit your desired needs. Contact us today for a personalized quote.
            </p>
            <div className="mt-10">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-[#916c18] hover:bg-[#916c18]/90 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all"
              >
                Request a Quote
              </motion.button>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#916c18]/10 flex items-center justify-center mb-4">
                <Phone className="h-5 w-5 text-[#916c18]" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Call Us</h4>
              <p className="text-gray-600 dark:text-gray-400 text-center">067 747 2124</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#916c18]/10 flex items-center justify-center mb-4">
                <Mail className="h-5 w-5 text-[#916c18]" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Email</h4>
              <p className="text-gray-600 dark:text-gray-400 text-center">info@imperiumlunguistics.com</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#916c18]/10 flex items-center justify-center mb-4">
                <Clock className="h-5 w-5 text-[#916c18]" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Business Hours</h4>
              <p className="text-gray-600 dark:text-gray-400 text-center">Monday-Friday: 9AM-6PM</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#916c18]/10 flex items-center justify-center mb-4">
                <CalendarDays className="h-5 w-5 text-[#916c18]" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Delivery</h4>
              <p className="text-gray-600 dark:text-gray-400 text-center">Fast shipping available</p>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 p-8 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#916c18]"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#916c18]/10 rounded-full blur-lg"></div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#916c18]">Our Guarantee</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  At Imperium Linguistics, we guarantee quality, reliability, and professional support for all our conference equipment.
                </p>
                <ul className="space-y-2">
                  {["Premium Quality", "2-Year Warranty", "Technical Support", "Installation Services"].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center group"
                    >
                      <ChevronRight className="h-4 w-4 text-[#916c18] mr-2" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#916c18]">Service Options</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We offer flexible service options to meet your conference equipment needs.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {["Purchase", "Rental", "Lease", "Maintenance", "Training", "Upgrades"].map((service, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05, duration: 0.2 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-[#916c18]/10 rounded-full text-sm text-center text-[#916c18]"
                    >
                      {service}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="mt-16 text-center text-gray-600 dark:text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Imperium Linguistics. All rights reserved.</p>
          </div>
        </div>
      </section>
    </>
  );
}; 