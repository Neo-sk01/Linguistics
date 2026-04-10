export type FaqItem = {
  question: string;
  answer: string;
  bullets?: string[];
  category: "general" | "transcription" | "interpreting";
};

export const faqItems: FaqItem[] = [
  {
    question: "What services does imperium linguistics offer?",
    answer:
      "We provide professional transcription and interpreting services for legal, business, educational, and conference needs across South Africa.",
    bullets: [
      "Transcription services",
      "Simultaneous interpreting",
      "Consecutive interpreting",
    ],
    category: "general",
  },
  {
    question: "Do you provide transcription services across South Africa?",
    answer:
      "Yes. We support clients across South Africa with remote and scheduled transcription workflows, including legal, business, and educational recordings.",
    category: "transcription",
  },
  {
    question: "How quickly can you deliver a transcript?",
    answer:
      "Turnaround depends on the recording length, audio quality, and project urgency. We offer same-day, next-day, and scheduled delivery options where the brief allows.",
    category: "transcription",
  },
  {
    question: "How do you protect confidential recordings and documents?",
    answer:
      "We handle sensitive material through controlled workflows and can support confidentiality requirements for legal, corporate, and institutional projects.",
    category: "transcription",
  },
  {
    question: "What is the difference between simultaneous and consecutive interpreting?",
    answer:
      "Simultaneous interpreting happens in real time for conferences and events, while consecutive interpreting pauses between speakers and is often used in meetings, legal matters, and consultations.",
    category: "interpreting",
  },
  {
    question: "Which languages do you support?",
    answer:
      "We support all official South African languages as well as additional international languages for selected interpreting and multilingual project needs.",
    category: "interpreting",
  },
  {
    question: "Do you provide interpreting equipment for conferences and events?",
    answer:
      "Yes. We can support simultaneous interpreting setups that include the interpreters and the equipment needed for multilingual audiences.",
    category: "interpreting",
  },
  {
    question: "How do I request a quote or send files?",
    answer:
      "You can contact the team through the site, request a quote from the service pages, or use the WeTransfer guide to send large audio files securely.",
    category: "general",
  },
];
