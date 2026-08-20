"use client";

import { Website } from "@/types/website";
import { ResourceCard } from "./ResourceCard";
import { EmptyState } from "./EmptyState";

interface ResourceGridProps {
  websites: Website[];
  searchQuery: string;
  onResetFilters: () => void;
  onTagClick?: (tag: string) => void;
}

export function ResourceGrid({
  websites,
  searchQuery,
  onResetFilters,
  onTagClick,
}: ResourceGridProps) {
  if (websites.length === 0) {
    return <EmptyState searchQuery={searchQuery} onReset={onResetFilters} />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
      {websites.map((website) => (
        <ResourceCard key={website.id} website={website} onTagClick={onTagClick} />
      ))}
    </div>
  );
}
