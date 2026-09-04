"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, X, Sparkles } from "lucide-react";

export function GetAppBanner() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. If already inside the native Android APK wrapper, never show this banner
    if (typeof window !== "undefined" && (window as any).AndroidSecurityBridge) {
      return;
    }

    // 2. Check if user dismissed it in this session
    const isDismissed = sessionStorage.getItem("swg_app_banner_dismissed");
    if (!isDismissed) {
      // Show after a brief delay for a polished entrance
      const timer = setTimeout(() => setIsVisible(true), 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
    sessionStorage.setItem("swg_app_banner_dismissed", "true");
  };

  if (pathname === "/download" || !isVisible) return null;

  return (
    <aside 
      aria-label="Download Android App"
      className="fixed bottom-[calc(4.2rem+env(safe-area-inset-bottom,0px))] md:bottom-5 left-3 right-3 sm:left-auto sm:right-5 sm:max-w-md z-40 animate-slide-up"
    >
      <div className="bg-slate-900/95 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-3 sm:p-3.5 shadow-2xl shadow-indigo-950/60 flex items-center justify-between gap-3 text-white">
        {/* App Icon & Details */}
        <Link href="/download" className="flex items-center gap-3 min-w-0 group flex-1">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-indigo-500/40 shadow-sm">
            <Image
              src="/black-and-white-portrait-of-a-lion.webp"
              alt="Study With Gaurav Lion App Icon"
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>

          <div className="min-w-0 flex-1 text-left">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-xs sm:text-sm text-white truncate leading-tight group-hover:text-cyan-300 transition-colors">
                Study With Gaurav App
              </span>
              <span className="px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-black tracking-wider uppercase border border-emerald-500/30 shrink-0">
                v1.0
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-400 truncate mt-0.5">
              Fast, Zero-Lag • 100+ Free Batches
            </p>
          </div>
        </Link>

        {/* Action Button & Dismiss */}
        <div className="flex items-center gap-1.5 shrink-0">
          <Link
            href="/download"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 font-bold text-xs text-white shadow-sm shadow-blue-500/20 active:scale-95 transition-all"
          >
            <Download className="w-3.5 h-3.5 shrink-0" />
            <span>Get App</span>
          </Link>

          <button
            onClick={handleDismiss}
            aria-label="Dismiss app banner"
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
