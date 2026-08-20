"use client";

import { ArrowRight, Globe, Layers, CheckCircle } from "lucide-react";

export function StudentValueSection() {
  return (
    <section className="w-full py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        
        {/* Text */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            One Place. Less Searching.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Students often use dozens of websites for learning, coding, exams, career preparation and productivity. This directory makes those resources easier to discover from one place.
          </p>
        </div>

        {/* Simple Flowchart */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4 max-w-3xl mx-auto py-4">
          
          {/* Step 1 */}
          <div className="flex flex-col items-center bg-slate-50 border border-slate-200 p-4 rounded-xl w-48 text-center">
            <Globe className="w-6 h-6 text-slate-400 mb-2" />
            <span className="text-xs font-bold text-slate-700">Many Websites</span>
          </div>

          <ArrowRight className="hidden sm:block w-5 h-5 text-slate-300" />
          <div className="sm:hidden text-slate-300 font-bold">&darr;</div>

          {/* Step 2 */}
          <div className="flex flex-col items-center bg-blue-50/50 border border-blue-100 p-4 rounded-xl w-48 text-center">
            <Layers className="w-6 h-6 text-blue-600 mb-2" />
            <span className="text-xs font-bold text-blue-800">Organized Directory</span>
          </div>

          <ArrowRight className="hidden sm:block w-5 h-5 text-slate-300" />
          <div className="sm:hidden text-slate-300 font-bold">&darr;</div>

          {/* Step 3 */}
          <div className="flex flex-col items-center bg-emerald-50/50 border border-emerald-100 p-4 rounded-xl w-48 text-center">
            <CheckCircle className="w-6 h-6 text-emerald-600 mb-2" />
            <span className="text-xs font-bold text-emerald-800">Find What You Need</span>
          </div>

        </div>

      </div>
    </section>
  );
}
