"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define the main navigation links
const links = [
  {
      title: 'Features',
      href: '/#',
  },
  {
      title: 'Solution',
      href: '/#',
  },
  {
      title: 'Customers',
      href: '/#',
  },
  {
      title: 'Help',
      href: '/#faq',
  },
  {
      title: 'About',
      href: '/#',
  },
];

// Policy sections data for reuse
const policySections = [
  { id: "introduction", title: "Introduction", number: "1" },
  { id: "scope", title: "Scope of Services", number: "2" },
  { id: "confidentiality", title: "Confidentiality & Data Protection", number: "3" },
  { id: "quality", title: "Quality Assurance", number: "4" },
  { id: "terms", title: "Terms of Service", number: "5" },
  { id: "privacy", title: "Privacy Policy", number: "6" },
  { id: "contact", title: "Contact Information", number: "7" },
  { id: "updates", title: "Policy Updates", number: "8" },
];

const PolicySection = ({ 
  id, 
  title, 
  number, 
  children 
}: { 
  id: string; 
  title: string; 
  number: string; 
  children: React.ReactNode 
}) => (
  <section 
    id={id} 
    className="mb-12 pb-12 border-b border-gray-100 dark:border-gray-800 scroll-mt-24"
  >
    <h2 className="text-2xl font-bold tracking-tight mb-6 group flex items-center">
      <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">
        {number}
      </span>
      <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
        {title}
      </span>
      <a 
        href={`#${id}`} 
        className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500"
        aria-label={`Link to ${title} section`}
      >
        #
      </a>
    </h2>
    <div className="prose dark:prose-invert max-w-none">
      {children}
    </div>
  </section>
);

const TableOfContents = ({ activeSection }: { activeSection: string }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-5 sticky top-20">
      <h3 className="font-medium text-sm uppercase text-gray-500 dark:text-gray-400 mb-4">
        Table of Contents
      </h3>
      <nav>
        <ul className="space-y-2">
          {policySections.map((section) => (
            <li key={section.id}>
              <Link 
                href={`#${section.id}`}
                className={`flex items-center text-sm group ${
                  activeSection === section.id 
                    ? "text-blue-600 dark:text-blue-400 font-medium" 
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <span className={`w-5 h-5 flex items-center justify-center rounded-full mr-2 text-xs transition-colors ${
                  activeSection === section.id
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 group-hover:bg-blue-100 group-hover:text-blue-600 dark:group-hover:bg-blue-900/30 dark:group-hover:text-blue-400"
                }`}>
                  {section.number}
                </span>
                <span className="group-hover:translate-x-1 transition-transform">
                  {section.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const SubSection = ({ 
  id,
  title, 
  children 
}: { 
  id?: string;
  title: string; 
  children: React.ReactNode 
}) => (
  <div className={`mb-8 ${id ? "" : ""}`} id={id}>
    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
      {title}
    </h3>
    <div className="prose dark:prose-invert max-w-none">
      {children}
    </div>
  </div>
);

export default function PoliciesPage() {
  // Track the active section for both sidebar and footer highlighting
  const [activeSection, setActiveSection] = useState('');

  // Implement scroll spy to update the active section
  useEffect(() => {
    // Debounce function to prevent too many scroll event calculations
    const debounce = (fn: Function, delay: number) => {
      let timer: NodeJS.Timeout;
      return function(...args: any[]) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
      };
    };

    const handleScroll = () => {
      // Find all section elements
      const sections = policySections.map(section => {
        const element = document.getElementById(section.id);
        if (!element) return { id: section.id, top: 0, height: 0 };
        
        const rect = element.getBoundingClientRect();
        return {
          id: section.id,
          top: rect.top,
          height: rect.height
        };
      });

      // Find the section that is currently in view
      const currentSection = sections.find(section => {
        return section.top <= 100 && section.top + section.height > 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      } else if (window.scrollY < 200) {
        // Near the top of the page
        setActiveSection('introduction');
      }
    };

    // Debounced scroll handler to improve performance
    const debouncedHandleScroll = debounce(handleScroll, 100);

    // Check active section on scroll
    window.addEventListener('scroll', debouncedHandleScroll);
    
    // Check initial section
    handleScroll();

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []);

  return (
    <main className="flex-1">
      <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 pt-24 pb-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Imperium Linguistics – Company Policy Document
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            Our commitment to providing accurate, timely, and client-focused linguistic services.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 order-2 lg:order-1">
            <TableOfContents activeSection={activeSection} />
          </div>
          
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8">
              <div className="max-w-3xl">
                <PolicySection id="introduction" title="Introduction" number="1">
                  <p>
                    Imperium Linguistics is committed to providing accurate, timely, and client-focused
                    linguistic services. This policy outlines our professional standards, service
                    expectations, and ethical commitments to guide our operations and assure clients of
                    our quality and integrity.
                  </p>
                </PolicySection>

                <PolicySection id="scope" title="Scope of Services" number="2">
                  <p>This policy applies to the following service areas:</p>
                  <ul className="list-disc pl-6">
                    <li>Legal, business, educational, and general transcription</li>
                    <li>Simultaneous and consecutive interpreting</li>
                    <li>Rental and operation of conference audio equipment</li>
                  </ul>
                </PolicySection>

                <PolicySection id="confidentiality" title="Confidentiality & Data Protection" number="3">
                  <SubSection title="3.1. Confidentiality Agreement">
                    <p>
                      All staff, transcribers, and interpreters are required to sign confidentiality agreements
                      before handling any client material.
                    </p>
                  </SubSection>
                  
                  <SubSection id="data-protection" title="3.2. Secure Data Handling">
                    <p>
                      Client files are stored and processed on secure platforms. Access is restricted to
                      authorized personnel only.
                    </p>
                  </SubSection>
                  
                  <SubSection title="3.3. Data Retention">
                    <p>
                      Transcripts and recordings are stored for a maximum of 90 days unless otherwise
                      agreed upon. Clients may request early deletion.
                    </p>
                  </SubSection>
                </PolicySection>

                <PolicySection id="quality" title="Quality Assurance" number="4">
                  <p>Our quality assurance process includes:</p>
                  <ul className="list-disc pl-6">
                    <li>Rigorous selection and training of linguistic professionals</li>
                    <li>Multi-stage review process for all transcriptions</li>
                    <li>Regular performance evaluations and feedback mechanisms</li>
                    <li>Continuous professional development for all staff</li>
                  </ul>
                </PolicySection>

                <PolicySection id="terms" title="Terms of Service" number="5">
                  <div className="bg-blue-50/50 dark:bg-blue-900/10 p-4 rounded-lg border-l-4 border-blue-500 mb-4">
                    <p className="text-blue-800 dark:text-blue-300 font-medium">Important Notice</p>
                    <p className="text-sm text-blue-700 dark:text-blue-400 mt-1">
                      By using our services, you agree to be bound by these terms and conditions.
                    </p>
                  </div>
                  
                  <p>Our standard terms of service include:</p>
                  <ul className="list-disc pl-6">
                    <li>Clear pricing structure with no hidden fees</li>
                    <li>Defined turnaround times for each service level</li>
                    <li>Revision policy for addressing client feedback</li>
                    <li>Cancellation and refund policies</li>
                  </ul>
                </PolicySection>

                <PolicySection id="privacy" title="Privacy Policy" number="6">
                  <p>Our privacy commitments include:</p>
                  <ul className="list-disc pl-6">
                    <li>Compliance with relevant data protection regulations</li>
                    <li>Limited data collection focused only on service delivery</li>
                    <li>No sharing of client information with third parties without explicit consent</li>
                    <li>Regular security audits and updates to our data handling procedures</li>
                  </ul>
                </PolicySection>

                <PolicySection id="contact" title="Contact Information" number="7">
                  <p>For policy inquiries or concerns, please contact:</p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm mt-4 flex flex-col sm:flex-row gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded text-blue-600 dark:text-blue-400 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                          <p className="font-medium">nkuna@imperiumlinguistics.com</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded text-blue-600 dark:text-blue-400 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                          <p className="font-medium">+27 123 456 789</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded text-blue-600 dark:text-blue-400 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Address</p>
                          <p className="font-medium">123 Business Avenue, Cape Town, South Africa</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </PolicySection>

                <PolicySection id="updates" title="Policy Updates" number="8">
                  <p>
                    This policy is reviewed and updated annually. Clients will be notified of any significant changes
                    that may affect service delivery or data handling.
                  </p>
                  <div className="flex items-center mt-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Last updated:</span> April 10, 2025
                    </p>
                  </div>
                </PolicySection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 