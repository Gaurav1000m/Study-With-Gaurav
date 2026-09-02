"use client";

import { useEffect, useRef } from "react";
import { Search, X, Tag } from "lucide-react";

import { CATEGORIES } from "@/data/categories";
import { WEBSITES } from "@/data/websites";
import StarBorder from "./StarBorder";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onTagClick: (tag: string) => void;
  totalResultsCount?: number;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  autoFocus?: boolean;
}

export function SearchBar({
  searchQuery,
  onSearchChange,
  onTagClick,
  totalResultsCount,
  inputRef: externalRef,
  autoFocus,
}: SearchBarProps) {
  const internalRef = useRef<HTMLInputElement>(null);
  const ref = externalRef || internalRef;

  useEffect(() => {
    if (autoFocus) {
      setTimeout(() => {
        ref.current?.focus();
      }, 50);
    }
  }, [autoFocus, ref]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Focus search bar on '/' press if not typing in an input
      if (
        e.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        ref.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [ref]);

  // Derive popular tags dynamically from categories and websites
  const categoryTags = CATEGORIES.map((c) => c.shortName || c.name);
  const websiteTags = Array.from(new Set(WEBSITES.flatMap((w) => w.tags || [])));
  const popularTags = Array.from(new Set([...categoryTags, ...websiteTags]));

  return (
    <div className="w-full max-w-3xl mx-auto space-y-2">
      {/* Search Input Container with React Bits StarBorder Animation */}
      <StarBorder
        as="div"
        className="w-full rounded-2xl transition-all duration-300 shadow-2xs hover:shadow-md focus-within:shadow-md"
        innerClassName="!p-0 rounded-2xl w-full focus-within:ring-2 focus-within:ring-blue-600/30 transition-all"
        color="#2563eb"
        speed="4s"
        thickness={2}
        backgroundColor="#ffffff"
        borderColor="#cbd5e1"
      >
        <div className="relative flex items-center w-full bg-white rounded-2xl">
          <div className="absolute left-3.5 sm:left-4 pointer-events-none text-slate-400 shrink-0 z-10">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
          </div>
          <input
            ref={ref}
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search educational websites, tools, exams..."
            className="w-full pl-10 sm:pl-11 pr-10 sm:pr-11 py-2.5 sm:py-3.5 min-h-[44px] sm:min-h-[50px] text-xs sm:text-sm text-slate-900 bg-transparent border-none rounded-2xl focus:outline-none placeholder:text-slate-400 truncate"
            aria-label="Search educational websites directory"
          />
          {searchQuery ? (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-2 min-w-[44px] min-h-[44px] rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 z-10"
              title="Clear search"
              aria-label="Clear search query"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <div className="absolute right-4 hidden sm:flex items-center gap-1 text-[11px] text-slate-400 bg-slate-100 px-2 py-1 rounded border border-slate-200 z-10">
              <span>Press</span>
              <kbd className="font-mono font-semibold text-slate-600">/</kbd>
            </div>
          )}
        </div>
      </StarBorder>

      {/* Quick Search Tag Pills (Horizontally scrollable on mobile without page overflow) */}
      {popularTags.length > 0 && (
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none carousel-snap text-xs text-slate-500 pt-0.5">
          <span className="flex items-center gap-1 font-semibold text-slate-600 shrink-0 mr-0.5 text-[11px] uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5 text-blue-600" />
            <span>Popular:</span>
          </span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => onTagClick(tag)}
              className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors shrink-0 whitespace-nowrap min-h-[38px] flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 font-medium"
            >
              #{tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
