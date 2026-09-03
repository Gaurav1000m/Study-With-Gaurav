"use client";

import { useEffect, useRef } from "react";
import { ExternalLink, Sparkles, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/config";

interface AdBannerProps {
  /** Google AdSense Ad Slot ID (optional) */
  slot?: string;
  /** Format of the ad unit */
  format?: "auto" | "horizontal" | "rectangle" | "vertical" | "fluid";
  /** Whether the ad is full-width responsive */
  responsive?: boolean;
  /** Custom layout styles */
  className?: string;
  /** Minimum container height to reserve space and prevent Cumulative Layout Shift (CLS) */
  minHeight?: string;
  /** Label compliant with ad policies ("ADVERTISEMENT" or "SPONSORED LINKS") */
  label?: "ADVERTISEMENT" | "SPONSORED LINKS";
  /** Direct link URL for sponsored offers */
  directLink?: string;
  /** Whether to show the clickable sponsored offer banner */
  showSponsoredOffer?: boolean;
}

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

export function AdBanner({
  slot,
  format = "auto",
  responsive = true,
  className = "",
  minHeight = "min-h-[90px]",
  label,
  directLink = siteConfig.monetagDirectLink || "https://omg10.com/4/11717884",
  showSponsoredOffer = true,
}: AdBannerProps) {
  const adRef = useRef<HTMLModElement | null>(null);
  const pushedRef = useRef(false);

  // Auto-detect label based on what's shown:
  // If sponsored offer is shown → "SPONSORED LINKS", else → "ADVERTISEMENT"
  const resolvedLabel = label ?? (showSponsoredOffer ? "SPONSORED LINKS" : "ADVERTISEMENT");

  useEffect(() => {
    // Only push once per mounted ad unit to prevent duplicate push errors in React 19
    if (pushedRef.current) return;

    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushedRef.current = true;
      }
    } catch {
      // Ignore push errors
    }
  }, []);

  return (
    <aside
      className={`w-full max-w-6xl mx-auto my-6 px-3 sm:px-4 ${className}`}
      aria-label="Sponsored Advertisement container"
    >
      <div
        className={`w-full bg-slate-50/80 border border-slate-200/80 rounded-2xl p-2.5 sm:p-3.5 text-center flex flex-col items-center justify-center transition-all ${minHeight} overflow-hidden shadow-2xs`}
      >
        {/* Ad Label Header */}
        <div className="w-full flex items-center justify-between px-1.5 pb-2 mb-1 border-b border-slate-200/60">
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
              {resolvedLabel}
            </span>
          </div>
          <span className="text-[9px] text-slate-400 font-medium">Study with Gaurav Partner Hub</span>
        </div>

        {/* Clickable Monetag Direct Link Sponsored Banner */}
        {showSponsoredOffer && (
          <a
            href={directLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group relative w-full bg-gradient-to-r from-slate-900 via-slate-850 to-blue-950 hover:from-slate-950 hover:to-indigo-950 text-white rounded-xl p-3 sm:p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 border border-slate-800 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden text-left mb-2"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-blue-500/15 rounded-full blur-xl pointer-events-none group-hover:bg-blue-500/25 transition-all" />

            <div className="flex items-center gap-3 min-w-0 z-10 w-full sm:w-auto">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-105 group-hover:bg-blue-500/30 transition-transform">
                <Sparkles className="w-5 h-5 text-blue-300" />
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-200 transition-colors">
                    Featured Educational Resources &amp; Student Offers
                  </span>
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded text-[9px] font-extrabold bg-blue-500/20 text-blue-300 border border-blue-400/30 uppercase tracking-wider">
                    <ShieldCheck className="w-2.5 h-2.5 text-blue-300" />
                    Verified
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-300 truncate max-w-xl">
                  Access recommended learning portals, exam preparation guides, and exclusive partner tools.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 group-hover:bg-blue-500 text-white text-xs font-bold shrink-0 shadow-xs group-hover:translate-x-0.5 transition-all z-10 self-stretch sm:self-auto justify-center">
              <span>Access Now</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        )}

        {/* AdSense ins element — renders for auto-ads even without a slot prop */}
        <div className="w-full flex items-center justify-center min-h-[50px] overflow-hidden">
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{ display: "block", width: "100%" }}
            data-ad-client="ca-pub-3576643094354429"
            {...(slot ? { "data-ad-slot": slot } : { "data-ad-format": format })}
            data-full-width-responsive={responsive ? "true" : "false"}
          />
        </div>
      </div>
    </aside>
  );
}
