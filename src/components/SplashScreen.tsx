"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Start the fade out sequence after 2 seconds
    const timer = setTimeout(() => {
      setIsMounted(true);
      setTimeout(() => setIsVisible(false), 500); // 500ms duration for fade out
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ease-in-out",
        isMounted ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div className="relative flex flex-col items-center">
        {/* Glow effect behind logo */}
        <div className="absolute top-0 w-32 h-32 bg-blue-600/10 blur-[40px] rounded-full animate-pulse"></div>
        
        {/* Logo Container */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl sm:rounded-3xl bg-white overflow-hidden border border-slate-200 shadow-xl flex items-center justify-center">
          <Image
            src="/images/lionbg.webp"
            alt="Study with Gaurav Logo"
            width={128}
            height={128}
            priority
            className="w-full h-full object-cover animate-[scale-up_10s_ease-out_forwards]"
          />
        </div>

        {/* Brand Name */}
        <div className="mt-8 text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Study with <span className="text-blue-600">Gaurav</span>
        </div>
        
        {/* Tagline */}
        <p className="mt-2 text-sm text-slate-500 font-medium">
          Student Resource Hub
        </p>
        
        {/* Loading Indicator */}
        <div className="mt-10 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scale-up {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
      `}} />
    </div>
  );
}
