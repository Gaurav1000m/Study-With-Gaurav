"use client";

import { RefreshCw } from "lucide-react";
import { LottieAnimation } from "./LottieAnimation";

interface EmptyStateProps {
  searchQuery: string;
  onReset: () => void;
}

export function EmptyState({ searchQuery, onReset }: EmptyStateProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 px-4 text-center">
      {/* Lottie Animation */}
      <div className="mb-4 flex items-center justify-center">
        <LottieAnimation
          url="https://lottie.host/embed/9b9953e1-b7a9-426b-bc2d-8b47a3967132/dmWu1FgEtL.json"
          width={180}
          height={180}
          className="w-40 h-40 sm:w-48 sm:h-48"
        />
      </div>

      {/* Heading */}
      <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
        No educational resources found
      </h3>

      {/* Subtitle */}
      <p className="text-base text-slate-500 max-w-md mb-6">
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
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 cursor-pointer"
      >
        <RefreshCw className="w-4 h-4" />
        Clear Search & Filters
      </button>
    </div>
  );
}
