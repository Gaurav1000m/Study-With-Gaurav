"use client";

import { Award } from "lucide-react";

export function CuratedResourceDirectory() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 border-b border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold border border-blue-100">
          <Award className="w-3.5 h-3.5 text-blue-600" />
          <span>EDITORIAL STANDARD</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          A Curated Resource Directory
        </h2>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          We aim to keep the directory useful by organizing websites by category and providing clear descriptions so users can understand what each resource offers before visiting it.
        </p>

      </div>
    </section>
  );
}
