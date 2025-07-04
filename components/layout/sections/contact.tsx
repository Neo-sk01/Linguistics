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
          <h2 className="text-2xl md:text-3xl font-bold">
            GET IN <span className="text-blue-400">TOUCH</span>
          </h2>
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
          <div className="overflow-hidden rounded-lg max-w-4xl mx-auto">
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
        
        {/* Contact Information Cards - 3 Column Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full bg-[#e5e7ea] p-8 rounded-lg border border-gray-300/30"
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            
            {/* Contact Info Card */}
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4 text-blue-400">CONTACT US</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-blue-400 mr-3">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-blue-600/80">Phone</p>
                    <p className="text-sm text-gray-700">067 747 2124</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-400 mr-3">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-blue-600/80">Email</p>
                    <p className="text-sm break-all text-gray-700">nkuna@imperiumlinguistics.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-400 mr-3">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-blue-600/80">Hours</p>
                    <p className="text-sm text-gray-700">Monday-Friday: 9AM-6PM</p>
                    <p className="text-sm text-gray-700">Saturday: 10AM-2PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media & Quick Links */}
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4 text-blue-400">CONNECT WITH US</h2>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4 mb-6">
                <a href="https://www.facebook.com/imperiumlinguistics" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 p-2 text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a href="https://www.instagram.com/imperiumlingustics/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 p-2 text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-1.38-.898.165-.42.359-1.065.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
              
              {/* Quick Links */}
              <h3 className="text-sm font-semibold mb-2 text-blue-600">QUICK LINKS</h3>
              <nav className="grid grid-cols-2 gap-x-2 gap-y-1">
                <a href="/faq" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
                <a href="/policies#privacy" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">Privacy</a>
              </nav>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
