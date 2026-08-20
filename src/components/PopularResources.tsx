"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Website } from "@/types/website";
import { ResourceCard } from "./ResourceCard";

interface PopularResourcesProps {
  resources: Website[];
  onTagClick?: (tag: string) => void;
}

export function PopularResources({ resources, onTagClick }: PopularResourcesProps) {
  return (
    <section className="w-full py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-slate-200/80">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Popular Among Students
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Explore some of the resources students frequently look for.
            </p>
          </div>
          <Link
            href="/popular"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 transition-colors"
          >
            <span>View All Popular</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {resources.slice(0, 6).map((website) => (
            <ResourceCard key={`popular-${website.id}`} website={website} onTagClick={onTagClick} />
          ))}
        </div>

      </div>
    </section>
  );
}
