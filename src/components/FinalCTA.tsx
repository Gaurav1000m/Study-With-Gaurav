"use client";

import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="w-full bg-slate-50 py-16 sm:py-20 border-b border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Start Exploring
        </h2>
        
        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
          Discover useful educational websites and resources from one place.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <span>Explore Resources</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <Compass className="w-4 h-4" />
            <span>Browse Categories</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
