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
  /** Whether to show the clickable sponsored offer banner (default: false so only real ads show) */
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
  minHeight = "min-h-[100px]",
  label = "ADVERTISEMENT",
  directLink = siteConfig.monetagDirectLink || "https://omg10.com/4/11717884",
  showSponsoredOffer = false,
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
      // Ignore push errors
    }
  }, []);

  return (
    <aside
      className={`w-full max-w-6xl mx-auto my-6 px-3 sm:px-4 ${className}`}
      aria-label="Advertisement container"
    >
      <div
        className={`w-full bg-white border border-slate-200/90 hover:border-slate-300 rounded-2xl p-3 sm:p-4 text-center flex flex-col items-center justify-center transition-all ${minHeight} overflow-hidden shadow-2xs`}
      >
        {/* Ad Label Header matching website UI */}
        <div className="w-full flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              {label}
            </span>
          </div>
          <span className="text-[10px] text-slate-400 font-medium">Study with Gaurav Partner Network</span>
        </div>

        {/* Optional Sponsored Offer (Redesigned to 100% match website light UI if enabled) */}
        {showSponsoredOffer && (
          <a
            href={directLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group relative w-full bg-gradient-to-r from-blue-50/80 via-indigo-50/30 to-white hover:from-blue-100/70 hover:to-indigo-50/50 text-slate-900 rounded-xl p-3 sm:p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 border border-blue-100/90 hover:border-blue-300 shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer overflow-hidden text-left mb-2"
          >
            <div className="flex items-center gap-3 min-w-0 z-10 w-full sm:w-auto">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 shadow-xs transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    Featured Educational Resources &amp; Student Offers
                  </span>
                  <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-blue-100 text-blue-700 border border-blue-200 uppercase tracking-wider">
                    <ShieldCheck className="w-2.5 h-2.5 text-blue-600" />
                    Verified
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 truncate max-w-xl mt-0.5 font-medium">
                  Access recommended learning portals, exam preparation guides, and exclusive partner tools.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shrink-0 shadow-xs group-hover:translate-x-0.5 transition-all z-10 self-stretch sm:self-auto justify-center">
              <span>Access Now</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        )}

        {/* Real Google AdSense Unit (Primary ad component) */}
        <div className="w-full flex items-center justify-center min-h-[90px] overflow-hidden">
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{ display: "block", width: "100%", textAlign: "center" }}
            data-ad-client="ca-pub-3576643094354429"
            {...(slot ? { "data-ad-slot": slot } : { "data-ad-format": format })}
            data-full-width-responsive={responsive ? "true" : "false"}
          />
        </div>
      </div>
    </aside>
  );
}
