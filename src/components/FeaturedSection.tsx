"use client";

import { Website } from "@/types/website";
import { ResourceCard } from "./ResourceCard";
import { Award, ArrowRight } from "lucide-react";

interface FeaturedSectionProps {
  websites: Website[];
  onTagClick?: (tag: string) => void;
  onViewAllClick?: () => void;
}

export function FeaturedSection({
  websites,
  onTagClick,
  onViewAllClick,
}: FeaturedSectionProps) {
  const featuredList = websites.filter((w) => w.featured).slice(0, 6);

  if (featuredList.length === 0) return null;

  return (
    <section id="featured" className="w-full py-12 bg-slate-100/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-slate-200/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
              <Award className="w-4 h-4 text-blue-600" />
              <span>Handpicked Platforms</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              Featured Resources
            </h2>
          </div>
          <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
            <p className="text-sm text-slate-500 hidden sm:block">
              Top platforms trusted by students worldwide.
            </p>
            {onViewAllClick && (
              <button
                onClick={onViewAllClick}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 transition-colors"
              >
                <span>View All Resources</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Featured Cards Grid */}
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {featuredList.map((website) => (
            <ResourceCard key={`featured-${website.id}`} website={website} onTagClick={onTagClick} />
          ))}
        </div>
      </div>
    </section>
  );
}
