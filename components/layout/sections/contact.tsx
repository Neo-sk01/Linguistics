"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <section className="bg-[#1b2432] text-gray-100 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl bg-[#1b2432] rounded-xl p-8 border border-blue-900/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            aria-label="Go to contact page"
          >
            GET IN <span className="text-white">TOUCH</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>
          <div className="w-16 h-0.5 bg-blue-500/50 mx-auto mt-3"></div>
        </motion.div>
        
        {/* Map Section - Full Width */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="overflow-hidden rounded-lg w-full mx-auto">
            <div className="mx-auto" style={{ maxWidth: "100%", width: "100%", height: "400px", overflow: "hidden" }}>
              <iframe 
                src="https://www.google.com/maps/embed/v1/place?q=Hazeldean+Office+Park,+Silverlakes+Rd,+Tyger+Valley,+0084&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <a 
              href="https://maps.google.com/maps?q=Hazeldean+Office+Park,+Silverlakes+Rd,+Tyger+Valley,+0084" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="M9 18l6-6-6-6" />
              </svg>
              Get Directions
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};
