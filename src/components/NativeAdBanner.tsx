"use client";

import { useEffect, useState } from "react";
import { AD_CONFIG } from "@/config/ads";

export interface NativeAdBannerProps {
  className?: string;
  label?: string;
}

/**
 * NativeAdBanner - High-engagement native banner container
 * Conforms with Google AdSense Policies:
 * - Marked with "SPONSORED RECOMMENDATION"
 * - Contained to avoid unexpected layout shifts
 */
export function NativeAdBanner({
  className = "",
  label = "SPONSORED RECOMMENDATION",
}: NativeAdBannerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!AD_CONFIG.switches.enableNative || !mounted) {
    return null;
  }

  return (
    <div
      className={`w-full max-w-5xl mx-auto my-6 px-3 flex flex-col items-center justify-center ${className}`}
      aria-label={label}
    >
      <div className="w-full flex items-center justify-between mb-1.5 px-1">
        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
          {label}
        </span>
        <span className="text-[10px] text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
          Ad
        </span>
      </div>
      <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-2 shadow-xs min-h-[160px] flex items-center justify-center overflow-hidden">
        <iframe
          title="Sponsored Educational Recommendation"
          src="/ad-native.html"
          className="w-full border-0 overflow-hidden min-h-[160px]"
          style={{ width: "100%", minHeight: "160px", border: "none" }}
          scrolling="no"
        />
      </div>
    </div>
  );
}

export default NativeAdBanner;
