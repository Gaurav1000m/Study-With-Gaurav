"use client";

import Link from "next/link";
import { PlusCircle, Globe, Mail } from "lucide-react";
import { siteConfig } from "@/data/config";

interface SuggestResourceCTAProps {
  onOpenSuggestModal: () => void;
}

export function SuggestResourceCTA({ onOpenSuggestModal }: SuggestResourceCTAProps) {
  const handleSuggestClick = () => {
    onOpenSuggestModal();
  };

  return (
    <section className="w-full bg-white py-6 sm:py-10 md:hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card 1: Suggest a Website */}
        <div className="bg-white border border-slate-200 p-5 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-5 hover:border-blue-200 transition-all shadow-2xs">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-lg sm:text-2xl font-extrabold text-slate-900">
              Know a Useful Website?
            </h3>
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-xl">
              If you know an educational website that could help other students, we&apos;d love to hear about it.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              onClick={handleSuggestClick}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-colors shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 w-full sm:w-auto min-h-[44px]"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Suggest a Website</span>
            </button>
            
            <Link
              href="/resources"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 w-full sm:w-auto min-h-[44px]"
            >
              <Globe className="w-4 h-4" />
              <span>Browse Resources</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
