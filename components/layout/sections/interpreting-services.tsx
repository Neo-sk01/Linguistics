"use client";
import { cn } from "@/lib/utils";
import { Languages, Mic, MessageSquareText, Globe, ArrowRight, GraduationCap, 
  Phone, Mail, Clock, MapPin, ChevronRight, CalendarDays, Building2, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { RequestQuoteDialog } from "@/components/layout/request-quote-dialog";

interface ServiceCategory {
  title: string;
  items: string[];
  className?: string;
  icon: React.ElementType;
}

export const InterpretingServicesSection = () => {
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
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            {/* Decorative line removed */}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Interpreting Services</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Bridge language barriers with our professional interpreting services, delivered by expert linguists in multiple languages.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-xl border border-blue-600/30 dark:border-blue-600/20 hover:border-blue-600/70 dark:hover:border-blue-600/40 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600/70 via-blue-600 to-blue-600/70"></div>
              {/* Decorative circle removed */}
              
              <Languages className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              
              <h3 className="text-2xl font-bold text-blue-600 mb-6 text-center uppercase">
                Simultaneous interpreting
              </h3>
              
              <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                Presentations and discussion can proceed at the same pace as a single language meeting. Each
                attendee hears what is being said in his or her own language with the help of a wireless
                receiver.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Imperium Linguistics provides a complete package. The simultaneous interpreting service
                is a combination of highly talented conference interpreters and wireless electronic equipment
                to transmit the interpreters' words to the appropriate listeners.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-xl border border-blue-600/30 dark:border-blue-600/20 hover:border-blue-600/70 dark:hover:border-blue-600/40 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600/70 via-blue-600 to-blue-600/70"></div>
              {/* Decorative circle removed */}
              
              <Mic className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              
              <h3 className="text-2xl font-bold text-blue-600 mb-6 text-center uppercase">
                Consecutive interpreting
              </h3>
              
              <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                Consecutive interpreting is used often in law offices, business meetings, and various medical situations where language is a
                barrier. A highly trained consecutive interpreter is able to interpret in two language directions, delivering the message
                with the same intonation and emphasis as each speaker, without embellishment.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Imperium Linguistics has provided this service for oral depositions and other needs in more than 11 languages,
                for attorneys, law firms, court reporters and government organizations.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 grid md:grid-cols-2 gap-8 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl border border-blue-600/20"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">+27 12 345 6789</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">nkuna@imperiumlinguistics.com</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Monday - Friday: 8am - 5pm</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">ERF1472/39 Muirfield Blvd, Silver Lakes Golf Estate, 0081</span>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="flex items-center mb-2">
                  <CalendarDays className="w-5 h-5 text-blue-600 mr-2" />
                  <h4 className="font-bold">Book an Appointment</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Schedule a consultation to discuss your interpreting needs.
                </p>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Languages Supported</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We support all official languages for your interpretation needs.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {["Afrikaans", "English", "isiNdebele", "isiXhosa", "isiZulu", "Northern Sotho (Sepedi)", "Sesotho", "Setswana", "siSwati", "Tshivenda", "Xitsonga", "French", "Portuguese", "Spanish", "German", "Mandarin"].map((lang, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-blue-600/10 rounded-full text-sm text-center text-blue-600"
                  >
                    {lang}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <div className="container relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16 mt-20"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Our team of professional interpreters are ready to help with your next project.
              </p>
              <div className="mt-10">
                <RequestQuoteDialog
                  trigger={(
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all"
                    >
                      Request a Quote
                    </motion.button>
                  )}
                />
              </div>
            </motion.div>
          </div>
          
          <div className="mt-16 text-center text-gray-600 dark:text-gray-400 text-sm">
            <p> {new Date().getFullYear()} Imperium Linguistics. All rights reserved.</p>
          </div>
        </div>
      </section>
    </>
  );
}; 
