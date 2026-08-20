"use client";

import { Website } from "@/types/website";
import { ResourceCard } from "./ResourceCard";
import { Flame, Clock } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PopularSectionProps {
  popularWebsites: Website[];
  recentWebsites: Website[];
  onTagClick?: (tag: string) => void;
}

export function PopularSection({
  popularWebsites,
  recentWebsites,
  onTagClick,
}: PopularSectionProps) {
  const [activeTab, setActiveTab] = useState<"popular" | "recent">("popular");

  const displayList =
    activeTab === "popular"
      ? popularWebsites.slice(0, 6)
      : recentWebsites.slice(0, 6);

  return (
    <section className="w-full py-12 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header with Switcher Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
              {activeTab === "popular" ? (
                <Flame className="w-4 h-4 text-amber-500" />
              ) : (
                <Clock className="w-4 h-4 text-blue-600" />
              )}
              <span>Student Highlights</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              {activeTab === "popular" ? "Popular Among Students" : "Recently Added Resources"}
            </h2>
          </div>

          {/* Switcher Toggle Pills */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/80 shrink-0">
            <button
              onClick={() => setActiveTab("popular")}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg transition-all",
                activeTab === "popular"
                  ? "bg-white text-navy-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              <span>Most Popular</span>
            </button>
            <button
              onClick={() => setActiveTab("recent")}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg transition-all",
                activeTab === "recent"
                  ? "bg-white text-navy-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>Recently Added</span>
            </button>
          </div>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {displayList.map((website) => (
            <ResourceCard key={`highlight-${activeTab}-${website.id}`} website={website} onTagClick={onTagClick} />
          ))}
        </div>
      </div>
    </section>
  );
}
