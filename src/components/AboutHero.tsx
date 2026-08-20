"use client";

import { BookOpen } from "lucide-react";

export function AboutHero() {
  return (
    <section className="w-full bg-white py-10 sm:py-20 border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-[11px] sm:text-xs font-bold border border-blue-100">
              <BookOpen className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>ABOUT THE PLATFORM</span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Everything Students Need, <br className="hidden sm:inline" />
              <span className="text-blue-700">In One Place.</span>
            </h1>
            
            <p className="text-xs sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl">
              An organized collection of useful educational websites, tools and resources designed to help students discover what they need faster.
            </p>
          </div>

          {/* Subtle Visual */}
          <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4 max-w-md w-full mx-auto relative lg:pl-6 pt-2 lg:pt-0">
            <div className="absolute -inset-2 sm:-inset-4 bg-slate-50 rounded-3xl -rotate-1 sm:-rotate-2 scale-105 pointer-events-none" />
            
            <div className="relative space-y-3 sm:space-y-4">
              <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between transition-transform">
                <span className="font-bold text-xs sm:text-sm text-slate-800">Coding Resources</span>
                <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">Browse Docs</span>
              </div>

              <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between transition-transform">
                <span className="font-bold text-xs sm:text-sm text-slate-800">Exam Prep Resources</span>
                <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">Practice Tests</span>
              </div>

              <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between transition-transform">
                <span className="font-bold text-xs sm:text-sm text-slate-800">AI Tools Resources</span>
                <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">Study Assistants</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
