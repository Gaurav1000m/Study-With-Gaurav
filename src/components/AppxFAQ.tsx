"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: "services",
    question: "What resources does Study-With-Gaurav offer?",
    answer: "Study-With-Gaurav provides a centralized, verified directory of educational portals, video lectures, test series, and PDF notes across Physics Wallah (PW), Rojgar With Ankit (RWA), IIT School, Next Toppers, and 25+ premier academic networks."
  },
  {
    id: "technical",
    question: "Do I need technical expertise to access the portals?",
    answer: "No technical expertise is required. The platform is designed with a clean, one-click interface allowing students to instantly access direct study portals, notes repositories, and video archives without complex navigation or setup."
  },
  {
    id: "timing",
    question: "How frequently are batch links and notes updated?",
    answer: "Our directory is synchronized in real-time. Whenever new batch archives, lecture playlists, or revised exam syllabus materials are verified, they are added immediately to ensure students always have current access."
  },
  {
    id: "requests",
    question: "Can I request changes, new institutes, or updates after using the site?",
    answer: "Yes! Students can suggest new institutes, report outdated links, or request specific exam categories directly via our Telegram channel (@studywithgaurav) or the built-in suggestion button."
  },
  {
    id: "support",
    question: "What kind of support is available after a portal is launched?",
    answer: "All listed domains undergo periodic security and availability checks. We continuously monitor server accessibility, test link integrity, and ensure resources remain completely free with zero malware or deceptive paywalls."
  }
];

export function AppxFAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="w-full py-16 sm:py-24 bg-slate-50/60 border-t border-slate-200/80 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* AppX 2-Column FAQ Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Icon + Big 'FAQs' Heading + Squiggle Doodle */}
          <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-28">
            {/* Blue Speech Bubble with '?' */}
            <div className="relative inline-flex items-center justify-center">
              <svg 
                width="64" 
                height="64" 
                viewBox="0 0 56 56" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-sm"
              >
                {/* Speech Bubble Shape */}
                <path 
                  d="M28 6C16.954 6 8 14.954 8 26C8 30.72 9.64 35.04 12.38 38.48L9.2 48.8C8.98 49.52 9.68 50.22 10.4 50L20.72 46.82C22.98 47.58 25.42 48 28 48C39.046 48 48 39.046 48 26C48 14.954 39.046 6 28 6Z" 
                  fill="#2563EB"
                />
                {/* Question Mark */}
                <text 
                  x="28" 
                  y="34" 
                  textAnchor="middle" 
                  fill="white" 
                  fontSize="24" 
                  fontWeight="900" 
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  ?
                </text>
              </svg>
            </div>

            {/* Bold FAQs Title */}
            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-none">
              FAQs
            </h2>

            {/* Hand-drawn Loop Squiggle Doodle from screenshot */}
            <div className="pt-1">
              <svg 
                width="84" 
                height="34" 
                viewBox="0 0 84 34" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-slate-700"
              >
                <path 
                  d="M3 24C16 28 32 32 40 24C48 16 45 4 33 6C23 8 25 26 48 27C60 27 72 23 80 18" 
                  stroke="currentColor" 
                  strokeWidth="2.2" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Right Column: Accordion Cards Stack */}
          <div className="lg:col-span-8 space-y-3.5 sm:space-y-4">
            {FAQS_DATA.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl bg-white border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-blue-500/80 shadow-md shadow-blue-500/5 ring-1 ring-blue-500/20"
                      : "border-slate-200/90 hover:border-slate-300 shadow-2xs"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full text-left py-4 px-5 sm:py-5 sm:px-6 flex items-center justify-between gap-4 select-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug tracking-tight">
                      {item.question}
                    </span>

                    <span 
                      className={`shrink-0 text-slate-600 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </span>
                  </button>

                  {/* Smooth Grid-Rows Height Expand/Collapse */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-slate-600 text-xs sm:text-sm sm:leading-relaxed border-t border-slate-100 mt-1">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
