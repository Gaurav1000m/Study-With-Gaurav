"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Website } from "@/types/website";
import { ResourceCard } from "./ResourceCard";

interface RecentResourcesProps {
  resources: Website[];
  onTagClick?: (tag: string) => void;
}

export function RecentResources({ resources, onTagClick }: RecentResourcesProps) {
  return (
    <section className="w-full py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-slate-200/80">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Recently Added
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Discover new resources added to the directory.
            </p>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {resources.slice(0, 6).map((website) => (
            <ResourceCard key={`recent-${website.id}`} website={website} onTagClick={onTagClick} />
          ))}
        </div>

        {/* Explore All Button */}
        <div className="text-center pt-4">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-navy-900 hover:bg-blue-700 rounded-xl transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <span>View All Resources</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
