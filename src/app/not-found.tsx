"use client";

import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SuggestModal } from "@/components/SuggestModal";
import { useState } from "react";
import { FileQuestion, Home, Search, LayoutGrid, ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/data/categories";

export default function NotFound() {
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);
  const topCategories = CATEGORIES.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Header onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <div className="h-14 sm:h-16" />

      <main className="flex-1 py-12 sm:py-20 flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-8">
          {/* Icon Badge */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center mx-auto shadow-2xs">
            <FileQuestion className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          {/* Heading & Subtitle */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Error 404 — Page Not Found
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
              Looking for a Resource?
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
              The page you are looking for might have been moved, renamed, or is currently unavailable. Use our directory search or explore top categories below.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-navy-900 hover:bg-slate-800 rounded-xl transition-colors shadow-2xs min-h-[44px]"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/resources?focus=true"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors shadow-2xs min-h-[44px]"
            >
              <Search className="w-4 h-4 text-blue-600" />
              <span>Search Directory</span>
            </Link>
          </div>

          {/* Popular Categories Links */}
          <div className="pt-6 border-t border-slate-200 text-left space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 text-center">
              Or Explore Top Categories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {topCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/categories/${cat.id}`}
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-2xs transition-all flex items-center justify-between text-xs font-semibold text-slate-800 group"
                >
                  <span className="truncate">{cat.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <SuggestModal isOpen={isSuggestModalOpen} onClose={() => setIsSuggestModalOpen(false)} />
    </div>
  );
}
