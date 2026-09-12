"use client";

import { useEffect, useRef } from "react";

export interface AdBannerProps {
  slot?: string;
  format?: "auto" | "horizontal" | "rectangle" | "vertical" | "fluid";
  responsive?: boolean;
  className?: string;
  minHeight?: string;
  label?: string;
}

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

/**
 * AdBanner - Google AdSense Publisher Container.
 * Follows Google Publisher Policies:
 * - Content > Navigation > Ads
 * - Clear distinction between content and advertising
 * - Layout Shift (CLS) prevention via min-height
 */
export function AdBanner({
  slot,
  format = "auto",
  responsive = true,
  className = "",
  minHeight = "min-h-[90px]",
  label = "Advertisement",
}: AdBannerProps) {
  const pushedRef = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined" && slot) {
      if (!pushedRef.current && window.adsbygoogle) {
        try {
          window.adsbygoogle.push({});
          pushedRef.current = true;
        } catch {
          // Ignore push errors during hydration/re-render
        }
      }
    }
  }, [slot]);

  // If no slot is configured, do not render intrusive blank placeholders
  if (!slot) {
    return null;
  }

  return (
    <div
      className={`w-full flex flex-col items-center justify-center my-4 overflow-hidden ${minHeight} ${className}`}
      aria-label={label}
    >
      <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider mb-1">
        {label}
      </span>
      <ins
        className="adsbygoogle block w-full max-w-5xl text-center"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3576643094354429"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}

export default AdBanner;
