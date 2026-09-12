"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home, Mail } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log sanitized error telemetry to console for debugging
    console.error("Application runtime error caught by boundary:", {
      message: error.message,
      digest: error.digest,
    });
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-900 px-4 sm:px-6 font-sans">
      <div className="w-full max-w-lg bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 text-center shadow-lg space-y-6">
        
        {/* Error Icon */}
        <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            System Notice
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Something went unexpectedly wrong
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            An unexpected error occurred while loading this educational resource. Your session and saved data remain safe.
          </p>
          {error.digest && (
            <p className="text-[10px] text-slate-400 font-mono pt-1">
              Error Digest: {error.digest}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-600/20 transition-all active:scale-95 cursor-pointer min-h-[44px]"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold transition-all min-h-[44px]"
          >
            <Home className="w-4 h-4" />
            <span>Back to Directory</span>
          </Link>
        </div>

        {/* Support Link */}
        <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-center gap-1.5">
          <Mail className="w-3.5 h-3.5 text-slate-400" />
          <span>Need help? Contact support at </span>
          <a
            href="mailto:contact@studywithgaurav.cc.cd"
            className="text-blue-600 font-semibold hover:underline"
          >
            contact@studywithgaurav.cc.cd
          </a>
        </div>

      </div>
    </div>
  );
}
