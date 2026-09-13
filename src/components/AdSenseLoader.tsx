"use client";

import { useEffect } from "react";

export function AdSenseLoader() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.querySelector('script[src*="pagead2.googlesyndication.com"]')) return;

    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3576643094354429";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }, []);

  return null;
}
