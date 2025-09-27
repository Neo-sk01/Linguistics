"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Search, PlusCircle, HelpCircle } from "lucide-react";

interface FaqSectionProps {
  hideTitle?: boolean;
}

export const FaqSection = ({ hideTitle = false }: FaqSectionProps) => {
  // State to track which FAQ items are expanded
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Toggle function for expanding/collapsing FAQ items
  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index) 
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "What services does Imperium Linguistics offer?",
      answer: (
        <>
          <p className="mb-2">We specialize in:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Transcription Services (Legal, Business, Educational, General)</li>
            <li>Interpreting Services (Simultaneous & Consecutive)</li>
          </ul>
        </>
      ),
      category: "general"
    },
    {
      question: "What types of transcription do you provide?",
      answer: (
        <>
          <p className="mb-2">We offer:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Legal Transcriptions – hearings, testimonies, depositions</li>
            <li>Business Transcriptions – meetings, interviews, market research</li>
            <li>Educational Transcriptions – seminars, oral histories, academic interviews</li>
            <li>General Transcriptions – audio, cassette, CD/DVD/MP3 formats</li>
          </ul>
        </>
      ),
      category: "transcription"
    },
    {
      question: "How fast can I receive a transcription?",
      answer: (
        <p>
          Turnaround times include same day, next day, or custom scheduling to meet your deadlines.
        </p>
      ),
      category: "transcription"
    },
    {
      question: "How accurate are your transcriptions?",
      answer: (
        <p>
          Our process combines advanced AI software and human verification, followed by thorough proofreading, ensuring high accuracy and reliability.
        </p>
      ),
      category: "transcription"
    },
    {
      question: "What is simultaneous interpreting?",
      answer: (
        <p>
          This service allows multilingual communication in real-time using wireless receivers. It's ideal for conferences and events with global audiences.
        </p>
      ),
      category: "interpreting"
    },
    {
      question: "What is consecutive interpreting?",
      answer: (
        <p>
          This is best for meetings, depositions, or one-on-one conversations. The interpreter waits for the speaker to finish before translating, maintaining tone and emphasis.
        </p>
      ),
      category: "interpreting"
    },
    {
      question: "In how many languages do you provide interpretation?",
      answer: (
        <p>
          We support all official South African languages plus many international languages including English, French, Portuguese, Spanish, German, and Mandarin.
        </p>
      ),
      category: "interpreting"
    },
  ];

  // Get unique categories
  const categories = Array.from(new Set(faqData.map(faq => faq.category)));

  // Filter FAQs based on search term and active category
  const filteredFaqs = faqData.filter(faq => {
    // Only search in the question text since answer can be JSX
    const matchesSearch = searchTerm === "" || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory ? faq.category === activeCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="faq" className="container py-16 sm:py-24 relative">
      {/* Decorative elements */}
      <div className="absolute -top-10 right-10 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30 -z-10"></div>
      
      {!hideTitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-10 h-10 text-blue-500 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
        </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our language services
          </p>
        </motion.div>
      )}

      <div className="max-w-6xl mx-auto mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left sidebar for search and categories */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-5 sticky top-24">
              {/* Search input */}
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-2.5 pl-9 pr-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-gray-600 text-xs"
                  >
                    Clear
                  </button>
                )}
      </div>

              {/* Categories */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Categories</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveCategory(null)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeCategory === null
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    All Categories
                  </button>
                  
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors capitalize ${
                        activeCategory === category
                          ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right side FAQ content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {filteredFaqs.length === 0 ? (
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 mb-4">
                  <PlusCircle className="h-7 w-7 text-blue-500" />
                </div>
                <h3 className="text-xl font-medium mb-2">No matching questions</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  We couldn't find any FAQs matching your criteria.
                </p>
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => setSearchTerm("")}
                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                  >
                    Clear search
                  </button>
                  <button
                    onClick={() => { setSearchTerm(""); setActiveCategory(null); }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View all questions
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => {
                  const isExpanded = expandedItems.includes(index);
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm overflow-hidden"
                    >
                      <button 
                        onClick={() => toggleItem(index)}
                        className="w-full p-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors"
                      >
                        <div className="pr-8">
                          <span className="inline-block px-2.5 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium mb-2 capitalize">
                            {faq.category}
                          </span>
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                            {faq.question}
                          </h3>
                        </div>
                        <div className={`rounded-full p-2 ${isExpanded ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-gray-100 dark:bg-gray-800'}`}>
                          <ChevronDown 
                            className={`h-5 w-5 ${isExpanded ? 'text-blue-600 rotate-180' : 'text-gray-500'} transition-transform duration-300 ease-out`} 
                          />
                        </div>
                      </button>
                      
                      <motion.div 
                        initial={false}
                        animate={{
                          height: isExpanded ? 'auto' : 0,
                          opacity: isExpanded ? 1 : 0
                        }}
                        transition={{
                          height: { duration: 0.3, ease: "easeInOut" },
                          opacity: { duration: 0.2, delay: isExpanded ? 0.1 : 0 }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 text-gray-700 dark:text-gray-300 border-t border-gray-100 dark:border-gray-800">
                          <div className="py-3 prose dark:prose-invert prose-blue max-w-none">
                            {faq.answer}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
