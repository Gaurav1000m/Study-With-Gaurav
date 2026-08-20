"use client";

import { CheckCircle2, ShieldCheck, Zap, Globe2, BookOpen, Layers, Award } from "lucide-react";
import { WEBSITES } from "@/data/websites";
import { CATEGORIES } from "@/data/categories";

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 sm:p-10 space-y-10">
        {/* Core Mission Banner */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          <div className="space-y-5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
              <Globe2 className="w-4 h-4 text-blue-600" />
              <span>Free Educational Directory</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight leading-snug">
              One Unified Hub for Every Student&apos;s Academic Journey
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              <strong className="text-navy-900">Study with Gaurav</strong> is a curated non-profit directory engineered to eliminate fragmented internet searches. Instead of spending hours hunting for authentic coding documentation, government scholarship links, competitive exam preparation portals, or student AI utilities, learners can discover and launch verified tools from a single structured dashboard.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-200 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Ads or Sponsored Links</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-200 transition-colors">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Direct External Official Links</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-200 transition-colors">
                <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Instant Keystroke Filter & Search</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-200 transition-colors">
                <Layers className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Mobile-Optimized & Accessible</span>
              </div>
            </div>
          </div>

          {/* Directory Stats Counter Box */}
          <div className="w-full lg:w-80 shrink-0 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                Directory At a Glance
              </span>
              <Award className="w-4 h-4 text-blue-600" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-blue-600">
                  {WEBSITES.length}+
                </div>
                <div className="text-[11px] font-semibold text-slate-500">
                  Verified Resources
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-navy-900">
                  {CATEGORIES.length}
                </div>
                <div className="text-[11px] font-semibold text-slate-500">
                  Domain Categories
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-emerald-600">
                  100%
                </div>
                <div className="text-[11px] font-semibold text-slate-500">
                  Free & Open Access
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-slate-900">
                  0
                </div>
                <div className="text-[11px] font-semibold text-slate-500">
                  Paid Advertisements
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 text-[11px] font-medium text-slate-500 leading-relaxed">
              Updated continuously with authentic educational websites and study utilities.
            </div>
          </div>
        </div>

        {/* Directory Guiding Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6 border-t border-slate-100">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4 border border-blue-100">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-navy-900">No Content Proxying</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We link directly to official domain servers (e.g. NPTEL, SWAYAM, GitHub, MDN). We never host external content or modify origin URLs.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4 border border-blue-100">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-navy-900">Tab Isolation & Safety</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every external website opens securely with strictly enforced tab isolation rules (<code className="bg-slate-100 px-1 py-0.5 rounded text-[11px] font-mono text-slate-700 border border-slate-200">rel=&quot;noopener noreferrer&quot;</code>).
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4 border border-blue-100">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-navy-900">Community Driven Curation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Students and educators can suggest emerging tools or report broken links anytime through our integrated suggestion workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

