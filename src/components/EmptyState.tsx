"use client";

import { SearchX, RefreshCw } from "lucide-react";

interface EmptyStateProps {
  searchQuery: string;
  onReset: () => void;
}

export function EmptyState({ searchQuery, onReset }: EmptyStateProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center py-24 px-4 text-center">
      {/* Icon */}
      <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-6">
        <SearchX className="w-10 h-10 text-slate-400" />
      </div>

      {/* Heading */}
      <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
        No educational resources found
      </h3>

      {/* Subtitle */}
      <p className="text-base text-slate-500 max-w-md mb-8">
        {searchQuery ? (
          <>
            We couldn&apos;t find any resources matching &quot;<span className="font-semibold text-slate-700">{searchQuery}</span>&quot;.
          </>
        ) : (
          "No resources match the selected category filter."
        )}
      </p>

      {/* CTA */}
      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
      >
        <RefreshCw className="w-4 h-4" />
        Clear Search & Filters
      </button>
    </div>
  );
}
