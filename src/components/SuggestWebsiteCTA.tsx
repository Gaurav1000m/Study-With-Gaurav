"use client";

import { ArrowRight, PlusCircle } from "lucide-react";
import { siteConfig } from "@/data/config";

interface SuggestWebsiteCTAProps {
  onOpenSuggestModal: () => void;
}

export function SuggestWebsiteCTA({ onOpenSuggestModal }: SuggestWebsiteCTAProps) {
  const handleSuggestClick = () => {
    if (siteConfig.suggestWebsiteUrl) {
      window.open(siteConfig.suggestWebsiteUrl, "_blank", "noopener,noreferrer");
    } else {
      onOpenSuggestModal();
    }
  };

  return (
    <section className="w-full py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Know a Useful Website?
        </h2>
        
        <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto">
          Help other students discover useful educational resources.
        </p>

        <div className="pt-2">
          <button
            onClick={handleSuggestClick}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-navy-900 hover:bg-blue-700 rounded-xl transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Suggest a Website</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
