"use client";
import { Phone, Mail, Clock, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-[#916c18]/10 text-[#916c18] tracking-wider">GET IN TOUCH</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're here to help with all your linguistic needs. Reach out to us and our team will get back to you promptly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-xl border border-[#916c18]/30 dark:border-[#916c18]/20 hover:border-[#916c18]/70 dark:hover:border-[#916c18]/40 transition-colors"
          >
            <h2 className="text-2xl font-bold text-[#916c18] mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#916c18]/10 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-[#916c18]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <p className="text-gray-700 dark:text-gray-300">+27 12 345 6789</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#916c18]/10 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-[#916c18]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-700 dark:text-gray-300">info@imperiumlinguistics.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#916c18]/10 flex items-center justify-center mr-4">
                  <Clock className="h-5 w-5 text-[#916c18]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                  <p className="text-gray-700 dark:text-gray-300">Monday - Friday: 8am - 5pm</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#916c18]/10 flex items-center justify-center mr-4 mt-1">
                  <MapPin className="h-5 w-5 text-[#916c18]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Address</h3>
                  <p className="text-gray-700 dark:text-gray-300">ERF1472/39 Muirfield Blvd, Silver Lakes Golf Estate, 0081</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#916c18] rounded-full mr-3"></div>
                  <span>Professional Transcription</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#916c18] rounded-full mr-3"></div>
                  <span>Expert Interpreting</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#916c18] rounded-full mr-3"></div>
                  <span>Conference Equipment</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-xl border border-[#916c18]/30 dark:border-[#916c18]/20 hover:border-[#916c18]/70 dark:hover:border-[#916c18]/40 transition-colors"
          >
            <h2 className="text-2xl font-bold text-[#916c18] mb-8">Send us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#916c18]/50"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#916c18]/50"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#916c18]/50"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea 
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#916c18]/50 resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit"
                  className="flex items-center justify-center w-full md:w-auto px-8 py-3 bg-[#916c18] hover:bg-[#916c18]/90 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl p-8 shadow-xl border border-[#916c18]/30 dark:border-[#916c18]/20">
          <h2 className="text-2xl font-bold text-[#916c18] mb-6 text-center">Find Us</h2>
          <div className="aspect-video w-full bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
            {/* Replace with actual map or embed Google Maps here */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Map Placeholder - Silver Lakes Golf Estate</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Imperium Linguistics. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};
