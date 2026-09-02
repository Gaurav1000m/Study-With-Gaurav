"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { CATEGORIES } from "@/data/categories";
import { Sparkles, ShieldCheck, CheckCircle2, Zap, BookOpen } from "lucide-react";
import { LottieVerified } from "./LottieVerified";

// Text scramble characters
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function useScrambleText(target: string, trigger: boolean) {
  const [display, setDisplay] = useState(target);
  const frame = useRef(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;
    let iteration = 0;
    const length = target.length;

    const animate = () => {
      setDisplay(() =>
        target
          .split("")
          .map((char, idx) => {
            if (char === " ") return " ";
            if (idx < iteration) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      iteration += 0.6;
      if (iteration < length) {
        raf.current = requestAnimationFrame(animate);
      } else {
        setDisplay(target);
      }
    };
    frame.current = 0;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      setDisplay(target.replace(/\S/g, () => CHARS[Math.floor(Math.random() * CHARS.length)]));
      raf.current = requestAnimationFrame(animate);
    });
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [target, trigger]);

  return display;
}

export function AppxHeroText() {
  const [catIndex, setCatIndex] = useState(0);
  const [logoVisible, setLogoVisible] = useState(true);
  const [scrambleTrigger, setScrambleTrigger] = useState(true);

  const cycleCategory = useCallback((nextIdx: number) => {
    setLogoVisible(false);
    setScrambleTrigger(false);
    setTimeout(() => {
      setCatIndex(nextIdx);
      setLogoVisible(true);
      setScrambleTrigger(true);
    }, 280);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      cycleCategory((catIndex + 1) % CATEGORIES.length);
    }, 3400);
    return () => clearInterval(timer);
  }, [catIndex, cycleCategory]);

  const currentCategory = CATEGORIES[catIndex] || CATEGORIES[0];
  const scrambledName = useScrambleText(currentCategory.name, scrambleTrigger);

  return (
    <div className="max-w-5xl mx-auto text-center relative z-10 select-none pt-2 sm:pt-4">

      {/* Editorial Live Badge */}
      <div className="mb-4 sm:mb-6 flex items-center justify-center gap-2 sm:gap-3">
        <span className="h-px w-6 sm:w-12 bg-gradient-to-r from-transparent to-slate-300" />
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-2xs text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.16em] text-slate-600 transition-all hover:border-slate-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Study-With-Gaurav — Open Access Index</span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="hidden sm:inline text-blue-600 font-semibold lowercase tracking-normal font-sans">
            100% verified
          </span>
        </div>
        <span className="h-px w-6 sm:w-12 bg-gradient-to-l from-transparent to-slate-300" />
      </div>

      {/* Main Headline */}
      <h1 className="font-heading tracking-tight leading-[1.06] text-slate-950">
        
        {/* Inspirational Quote Eyebrow */}
        <div className="flex items-center justify-center mb-2.5 sm:mb-3.5">
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-blue-50/80 border border-blue-200/70 text-blue-800 text-xs sm:text-sm font-semibold tracking-tight shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>“Knowledge belongs to those who seek it — not those who can afford it.”</span>
          </span>
        </div>

        {/* Primary Impact Line */}
        <span className="block font-black text-[clamp(2.3rem,7.2vw,4.5rem)] pb-2 sm:pb-3">
          Gain{" "}
          <span className="relative inline-block text-blue-600 pb-1.5 sm:pb-2">
            <i className="font-serif italic font-medium tracking-normal relative z-10 px-1 sm:px-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Unrestricted
            </i>
            
            {/* Upgraded Multi-Layer Animated Underline */}
            <svg
              className="absolute -bottom-1.5 sm:-bottom-2.5 left-0 w-full h-3 sm:h-4 overflow-visible pointer-events-none"
              viewBox="0 0 140 12"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="hero-underline-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="50%" stopColor="#4f46e5" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              {/* Soft ambient glow layer */}
              <path
                d="M 4 8.5 Q 70 3 136 7"
                stroke="#38bdf8"
                strokeWidth="4.5"
                strokeLinecap="round"
                opacity="0.3"
                className="blur-[2px]"
              />
              {/* Dynamic primary animated gradient stroke */}
              <path
                d="M 2 7 Q 70 1.5 138 6"
                stroke="url(#hero-underline-grad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="animate-premium-line"
              />
            </svg>
          </span>{" "}
          Access To
        </span>

        {/* Dynamic Category Showcase Ticker */}
        <span className="block mt-4 sm:mt-7 lg:mt-8 relative overflow-visible">
          <span
            className={`inline-flex items-center gap-3 sm:gap-4 transition-all duration-300 ${
              logoVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-[0.97]"
            }`}
            style={{ willChange: "transform, opacity" }}
          >
            {/* Floating Logo with soft drop shadow */}
            {currentCategory.logo && (
              <div className="relative shrink-0">
                <img
                  src={currentCategory.logo}
                  alt={currentCategory.name}
                  className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain rounded-2xl drop-shadow-md bg-white p-1 border border-slate-200/80 transition-transform duration-300 hover:scale-105"
                  loading="eager"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>
            )}

            {/* Scramble text — luminous animated gradient with Outfit display font */}
            <span
              className="font-display font-black tracking-tight text-[clamp(1.75rem,5.2vw,3.5rem)] bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent whitespace-nowrap animate-gradient-flow filter drop-shadow-xs"
              aria-label={currentCategory.name}
            >
              {scrambledName}
            </span>

            {/* Lottie Animated Verified Badge beside logo and name */}
            <div
              className="inline-flex items-center shrink-0 drop-shadow-xs transition-transform duration-300 hover:scale-110 cursor-default"
              title="100% Verified Batches"
              aria-label="Verified"
            >
              <LottieVerified size={34} className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
            </div>
          </span>

          {/* Luminous ambient gradient glow beneath the text */}
          <span
            className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-7 blur-2xl rounded-full bg-gradient-to-r from-blue-500/30 via-indigo-500/25 to-cyan-400/30 pointer-events-none transition-opacity duration-500 animate-pulse-glow ${
              logoVisible ? "opacity-100" : "opacity-0"
            }`}
          />
        </span>
      </h1>

      {/* Trust & Guarantee Pills (Instant Student Friction Reducer) */}
      <div className="mt-7 sm:mt-9 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-[13px] text-slate-600 font-medium">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
          <Zap className="w-3.5 h-3.5 text-amber-500" />
          <span>100% Free Batches</span>
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Zero Paywalls & No Ads</span>
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
          <BookOpen className="w-3.5 h-3.5 text-blue-600" />
          <span>PW • RWA • IIT School & 25+ Hubs</span>
        </span>
      </div>

    </div>
  );
}
export default AppxHeroText;
