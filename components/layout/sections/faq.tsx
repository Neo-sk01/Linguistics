"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Search, PlusCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] -z-10 bg-[radial-gradient(circle_at_top,_rgba(168,216,255,0.28),_transparent_70%)] dark:bg-[radial-gradient(circle_at_top,_rgba(30,58,138,0.42),_transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-12 left-12 hidden h-64 w-64 -translate-x-6 rounded-full bg-[radial-gradient(circle,_rgba(30,58,138,0.18),_transparent_62%)] blur-3xl dark:bg-[radial-gradient(circle,_rgba(30,58,138,0.3),_transparent_60%)] sm:block" />

      <div className="container relative z-[1]">
        {!hideTitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center sm:mb-16"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <HelpCircle className="h-10 w-10 text-[hsl(var(--accent-layer-2))]" />
              <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-4xl">
                <span className="bg-gradient-to-r from-[hsl(var(--accent-layer-2))] to-[hsl(var(--accent-layer-4))] bg-clip-text text-transparent">
                  Frequently Asked Questions
                </span>
              </h2>
            </div>
            <p className="mx-auto max-w-2xl text-lg text-[hsl(var(--muted-foreground))]">
              Everything you need to know about our language services
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="sticky top-28 space-y-6 rounded-2xl border border-white/20 bg-[#3b82f6] p-6 text-white shadow-lg">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
                  <Search className="h-4 w-4 text-white/80" />
                </div>
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-xl border border-white/30 bg-white/10 py-3 pl-12 pr-4 text-sm text-white placeholder:text-white/60 transition-[border,box-shadow] focus:border-white focus:shadow-[0_0_0_3px_rgba(255,255,255,0.2)] focus:outline-none"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute inset-y-0 right-4 flex items-center text-xs font-semibold text-white/80 transition-colors hover:text-white"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.38em] text-white/70">
                  Categories
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveCategory(null)}
                    className={cn(
                      "w-full rounded-2xl px-3 py-2.5 text-left text-sm transition-all",
                      activeCategory === null
                        ? "bg-white text-[#1d4ed8] font-semibold shadow-sm"
                        : "text-white/80 hover:bg-white/15 hover:text-white"
                    )}
                  >
                    All Categories
                  </button>

                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={cn(
                        "w-full rounded-2xl px-3 py-2.5 text-left text-sm capitalize transition-all",
                        activeCategory === category
                          ? "bg-white text-[#1d4ed8] font-semibold shadow-sm"
                          : "text-white/80 hover:bg-white/15 hover:text-white"
                      )}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {filteredFaqs.length === 0 ? (
              <div className="layer-shell flex flex-col items-center gap-4 p-10 text-center" data-variant="secondary">
                <div className="layer-chip grid h-16 w-16 place-items-center rounded-full">
                  <PlusCircle className="h-7 w-7 text-[hsl(var(--accent-layer-2))]" />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">
                  No matching questions
                </h3>
                <p className="max-w-xl text-[hsl(var(--muted-foreground))]">
                  We couldn't find any FAQs matching your criteria.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button variant="outline" onClick={() => setSearchTerm("")}>
                    Clear search
                  </Button>
                  <Button onClick={() => { setSearchTerm(""); setActiveCategory(null); }}>
                    View all questions
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                {filteredFaqs.map((faq, index) => {
                  const isExpanded = expandedItems.includes(index);

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="overflow-hidden rounded-2xl border border-white/20 bg-[#3b82f6] text-white shadow-lg transition-colors"
                    >
                      <button
                        onClick={() => toggleItem(index)}
                        className="flex w-full items-center justify-between gap-6 rounded-[inherit] bg-transparent px-6 py-5 text-left transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3b82f6]"
                      >
                        <div className="pr-4">
                          <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-semibold capitalize text-white">
                            {faq.category}
                          </span>
                          <h3 className="mt-3 text-lg font-semibold text-white">
                            {faq.question}
                          </h3>
                        </div>
                        <div
                          className={cn(
                            "grid h-10 w-10 place-items-center rounded-full bg-white/15 transition-transform duration-300 ease-out",
                            isExpanded && "rotate-180 bg-white/25"
                          )}
                        >
                          <ChevronDown className="h-5 w-5 text-white" />
                        </div>
                      </button>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isExpanded ? "auto" : 0,
                          opacity: isExpanded ? 1 : 0
                        }}
                        transition={{
                          height: { duration: 0.3, ease: "easeInOut" },
                          opacity: { duration: 0.2, delay: isExpanded ? 0.1 : 0 }
                        }}
                        className="overflow-hidden border-t border-white/20 bg-[#3b82f6]"
                      >
                        <div className="px-6 pb-6 pt-4 text-white/90">
                          <div className="prose prose-invert max-w-none text-white/90">
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
