"use client";

import { useEffect, useRef, useState } from "react";
import { AD_CONFIG } from "@/config/ads";

export type AdFormat =
  | "auto"
  | "horizontal"
  | "rectangle"
  | "vertical"
  | "fluid"
  | "300x250"
  | "728x90"
  | "320x50"
  | "468x60"
  | "160x600"
  | "160x300";

export interface AdBannerProps {
  slot?: string;
  format?: AdFormat;
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
 * AdBanner - Google AdSense Only Banner Component
 * Compliant with Google AdSense Publisher Policies:
 * - Only renders official Google AdSense units when AdSense is approved and a slot is provided.
 * - Completely free of all third-party intrusive ad networks (Adsterra, popunders, etc.).
 * - Returns null if AdSense is pending approval or disabled, ensuring zero CLS or empty blocks.
 */
export function AdBanner({
  slot,
  format = "auto",
  responsive = true,
  className = "",
  minHeight = "min-h-[60px]",
  label = "ADVERTISEMENT",
}: AdBannerProps) {
  const [mounted, setMounted] = useState(false);
  const pushedRef = useRef(false);

  useEffect(() => {
    setMounted(true);

    // If AdSense is approved and a slot is provided, execute adsbygoogle push
    if (AD_CONFIG.switches.adsenseApproved && slot && typeof window !== "undefined") {
      if (!pushedRef.current && window.adsbygoogle) {
        try {
          window.adsbygoogle.push({});
          pushedRef.current = true;
        } catch {
          // Ignore hydration push errors
        }
      }
    }
  }, [slot]);

  // Only display if Google AdSense is approved and enabled
  if (!AD_CONFIG.switches.enableAdSense || !AD_CONFIG.switches.adsenseApproved || !slot) {
    return null;
  }

  if (!mounted) {
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
        data-ad-client={AD_CONFIG.googleAdSenseClient}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}

export default AdBanner;

