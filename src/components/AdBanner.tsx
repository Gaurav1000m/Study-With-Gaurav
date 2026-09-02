"use client";

import { useEffect, useRef } from "react";

interface AdBannerProps {
  /** Google AdSense Ad Slot ID (optional, defaults to responsive) */
  slot?: string;
  /** Format of the ad unit */
  format?: "auto" | "horizontal" | "rectangle" | "vertical" | "fluid";
  /** Whether the ad is full-width responsive */
  responsive?: boolean;
  /** Custom layout styles */
  className?: string;
  /** Minimum container height to reserve space and prevent layout shift */
  minHeight?: string;
  /** Optional label, e.g. 'ADVERTISEMENT' (per Google AdSense policies) */
  label?: string;
}

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

export function AdBanner({
  slot = "1234567890", // default slot placeholder
  format = "auto",
  responsive = true,
  className = "",
  minHeight = "min-h-[100px]",
  label = "SPONSORED",
}: AdBannerProps) {
  const adRef = useRef<HTMLModElement | null>(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    // Only push once per mounted ad unit to prevent duplicate push errors in React 19
    if (pushedRef.current) return;

    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushedRef.current = true;
      }
    } catch {
      // Ignore push errors (e.g. if adsbygoogle is blocked or already processed)
    }
  }, []);

  return (
    <div
      className={`w-full max-w-6xl mx-auto my-6 px-4 ${className}`}
      aria-label="Advertisement container"
    >
      <div
        className={`w-full bg-slate-50/70 border border-slate-200/70 rounded-2xl p-2 sm:p-3 text-center flex flex-col items-center justify-center transition-all ${minHeight} overflow-hidden shadow-xs`}
      >
        {/* Ad Label per AdSense Guidelines */}
        <div className="w-full flex items-center justify-between px-2 pb-1.5 border-b border-slate-200/50 mb-1">
          <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
            {label}
          </span>
          <span className="text-[9px] text-slate-400">Study with Gaurav Free Tier</span>
        </div>

        {/* AdSense ins element */}
        <div className="w-full flex items-center justify-center min-h-[90px] overflow-hidden">
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{ display: "block", width: "100%" }}
            data-ad-client="ca-pub-3576643094354429"
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive={responsive ? "true" : "false"}
          />
        </div>
      </div>
    </div>
  );
}
