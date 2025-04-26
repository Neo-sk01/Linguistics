"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <section className="py-10 md:py-16 bg-[#1b2432]/90 text-white">
      <div className="container-fluid px-4 mx-auto w-full max-w-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            GET IN <span className="text-blue-400">TOUCH</span>
          </h2>
          <div className="w-16 h-0.5 bg-blue-500/50 mx-auto mt-3"></div>
        </motion.div>
        
        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="bg-[#212a38]/80 backdrop-blur-sm border border-blue-900/20 rounded-lg p-6 shadow-sm">
              {/* Logo */}
              <div className="mb-6 text-center">
                <div className="bg-white/90 rounded-full p-2 inline-block">
                  <Image 
                    src="/noBG.png" 
                    alt="IMPERIUM LINGUISTICS Logo" 
                    width={90} 
                    height={90} 
                    className="mx-auto"
                  />
                </div>
              </div>
              
              {/* Info grid */}
              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div className="bg-[#1a2232]/70 backdrop-blur-sm p-4 rounded-md">
                  <h2 className="text-lg font-semibold mb-3 text-blue-400">INFO</h2>
                  <nav className="space-y-2">
                    <a href="#locations" className="block text-sm hover:text-blue-400 transition-colors py-1 border-b border-blue-900/20 flex items-center">
                      <span className="w-1 h-1 rounded-full bg-blue-400 mr-2"></span>
                      Locations
                    </a>
                    <a href="#accreditation" className="block text-sm hover:text-blue-400 transition-colors py-1 border-b border-blue-900/20 flex items-center">
                      <span className="w-1 h-1 rounded-full bg-blue-400 mr-2"></span>
                      Accreditation
                    </a>
                    <a href="#privacy" className="block text-sm hover:text-blue-400 transition-colors py-1 border-b border-blue-900/20 flex items-center">
                      <span className="w-1 h-1 rounded-full bg-blue-400 mr-2"></span>
                      Privacy Policy
                    </a>
                    <a href="#terms" className="block text-sm hover:text-blue-400 transition-colors py-1 flex items-center">
                      <span className="w-1 h-1 rounded-full bg-blue-400 mr-2"></span>
                      Terms & Conditions
                    </a>
                  </nav>
                </div>
                
                <div className="bg-[#1a2232]/70 backdrop-blur-sm p-4 rounded-md">
                  <h2 className="text-lg font-semibold mb-3 text-blue-400">ENQUIRIES</h2>
                  <div className="space-y-3">
                    <div className="flex items-start border-b border-blue-900/20 pb-2">
                      <div className="text-blue-400 mr-2">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-blue-300/80">Customer Care</p>
                        <p className="text-sm">0861 819 254</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-blue-400 mr-2">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-blue-300/80">Email Us</p>
                        <p className="text-sm break-all">customercare@imperiumlinguistics.co.za</p>
                      </div>
                    </div>
                  </div>
                </div>
              
                {/* Social Media */}
                <div className="md:col-span-2 bg-[#1a2232]/70 backdrop-blur-sm p-4 rounded-md flex flex-col justify-center">
                  <h2 className="text-lg font-semibold mb-4 text-blue-400 text-center">FOLLOW US</h2>
                  <div className="flex justify-center space-x-6">
                    {[
                      "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z",
                      "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
                      "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z"
                    ].map((path, index) => (
                      <Link 
                        key={index}
                        href={index === 0 ? "https://www.facebook.com/imperiumlinguistics" : 
                              index === 1 ? "https://www.linkedin.com/company/imperium-linguistics-group/" : 
                              index === 2 ? "https://www.instagram.com/imperiumlingustics_official/" : "#"} 
                        className="text-white hover:text-blue-100 transition-colors"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d={path}/>
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
