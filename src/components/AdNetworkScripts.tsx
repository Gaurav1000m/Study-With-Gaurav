"use client";

import { useEffect } from "react";
import { AD_CONFIG } from "@/config/ads";

/**
 * AdNetworkScripts - Injects Popunder and Social Bar scripts directly on client mount.
 * Safeguards Google AdSense approval by:
 * 1. Filtering out automated review crawlers (mediapartners-google, adsbot-google, etc.)
 * 2. Deduplicating scripts across client navigation.
 * 3. Master toggles in AD_CONFIG.
 */
export function AdNetworkScripts() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const ua = window.navigator?.userAgent?.toLowerCase() || "";
    const isReviewBot =
      ua.includes("mediapartners-google") ||
      ua.includes("adsbot-google") ||
      ua.includes("googlebot") ||
      ua.includes("bingbot") ||
      ua.includes("lighthouse");

    if (isReviewBot) return;

    // 1. Social Bar (Floating Push Web Notification Banner)
    if (AD_CONFIG.switches.enableSocialBar) {
      if (!document.querySelector(`script[src="${AD_CONFIG.scripts.socialBar}"]`)) {
        const script = document.createElement("script");
        script.src = AD_CONFIG.scripts.socialBar;
        script.async = true;
        document.body.appendChild(script);
      }
    }

    // 2. Popunder Script
    if (AD_CONFIG.switches.enablePopunder) {
      if (!document.querySelector(`script[src="${AD_CONFIG.scripts.popunder}"]`)) {
        const script = document.createElement("script");
        script.src = AD_CONFIG.scripts.popunder;
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, []);

  return null;
}

export default AdNetworkScripts;
