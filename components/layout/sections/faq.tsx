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
            <div className="layer-shell sticky top-28 space-y-6 p-6" data-variant="secondary">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
                  <Search className="h-4 w-4 text-[hsl(var(--accent-layer-2))]" />
                </div>
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-xl border border-[hsl(var(--secondary-layer-2))] bg-[hsl(var(--surface-card))] py-3 pl-12 pr-4 text-sm text-[hsl(var(--foreground))] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] transition-[border,box-shadow] focus:border-[hsl(var(--accent-layer-2))] focus:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_0_0_3px_rgba(30,58,138,0.12)] focus:outline-none"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute inset-y-0 right-4 flex items-center text-xs font-semibold text-[hsl(var(--accent-layer-2))] transition-colors hover:text-[hsl(var(--accent-layer-3))]"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.38em] text-[hsl(var(--accent-layer-2))]">
                  Categories
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveCategory(null)}
                    className={cn(
                      "w-full rounded-2xl px-3 py-2.5 text-left text-sm transition-all",
                      activeCategory === null
                        ? "layer-chip font-semibold"
                        : "text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--secondary-layer-4))] hover:text-[hsl(var(--accent-layer-2))]"
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
                          ? "layer-chip font-semibold"
                          : "text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--secondary-layer-4))] hover:text-[hsl(var(--accent-layer-2))]"
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
                      className="layer-shell overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(index)}
                        className="flex w-full items-center justify-between gap-6 rounded-[inherit] px-6 py-5 text-left transition-all hover:bg-[hsla(207,95%,93%,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent-layer-3))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--surface-card))]"
                      >
                        <div className="pr-4">
                          <span className="layer-chip inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold capitalize">
                            {faq.category}
                          </span>
                          <h3 className="mt-3 text-lg font-semibold text-[hsl(var(--foreground))]">
                            {faq.question}
                          </h3>
                        </div>
                        <div
                          className={cn(
                            "layer-chip grid h-10 w-10 place-items-center rounded-full transition-transform duration-300 ease-out",
                            isExpanded && "rotate-180"
                          )}
                        >
                          <ChevronDown className="h-5 w-5 text-[hsl(var(--accent-layer-2))]" />
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
                        className="overflow-hidden border-t border-[hsl(var(--secondary-layer-4))] bg-[hsl(var(--surface-card))]"
                      >
                        <div className="px-6 pb-6 pt-4 text-[hsl(var(--foreground))]">
                          <div className="prose max-w-none text-[hsl(var(--foreground))] prose-a:text-[hsl(var(--accent-layer-2))] dark:prose-invert">
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
