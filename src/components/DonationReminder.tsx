"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, X, Clock, ArrowRight, ShieldCheck, Check, Copy, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY_NEXT = "swg_donation_reminder_next";
const STORAGE_KEY_DISMISSED = "swg_donation_reminder_dismissed_count";
const SNOOZE_DAYS_MS = 3 * 24 * 60 * 60 * 1000; // 3 days
const CLOSE_SNOOZE_MS = 24 * 60 * 60 * 1000; // 24 hours
const UPI_ID = "gauraveducation@fam";

export function DonationReminder() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number>(20);

  useEffect(() => {
    // Never show reminder on the actual donate page
    if (pathname === "/donate") {
      return;
    }

    // Check localStorage for snooze timer
    try {
      const nextTime = localStorage.getItem(STORAGE_KEY_NEXT);
      if (nextTime && Date.now() < parseInt(nextTime, 10)) {
        return; // Snooze active
      }
    } catch {
      // localStorage may be disabled or restricted
    }

    // Show after a gentle 10-second delay so user has time to explore
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [pathname]);

  const handleRemindLater = () => {
    setIsVisible(false);
    try {
      const nextSnooze = Date.now() + SNOOZE_DAYS_MS;
      localStorage.setItem(STORAGE_KEY_NEXT, nextSnooze.toString());
      const dismissedCount = parseInt(localStorage.getItem(STORAGE_KEY_DISMISSED) || "0", 10);
      localStorage.setItem(STORAGE_KEY_DISMISSED, (dismissedCount + 1).toString());
    } catch {}
  };

  const handleClose = () => {
    setIsVisible(false);
    try {
      const nextSnooze = Date.now() + CLOSE_SNOOZE_MS;
      localStorage.setItem(STORAGE_KEY_NEXT, nextSnooze.toString());
    } catch {}
  };

  const handleDonateClick = () => {
    setIsVisible(false);
    try {
      // Snooze for 14 days after user clicks Donate
      const nextSnooze = Date.now() + 14 * 24 * 60 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY_NEXT, nextSnooze.toString());
    } catch {}
  };

  const handleCopyUpi = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(UPI_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getUpiUrl = () => {
    return `upi://pay?pa=${UPI_ID}&pn=Study%20with%20Gaurav&cu=INR&am=${selectedAmount}`;
  };

  if (!isVisible || pathname === "/donate") {
    return null;
  }

  return (
    <aside
      aria-label="Student Support Reminder"
      className={cn(
        "fixed z-40 transition-all duration-300 ease-out animate-slide-up",
        // Mobile positioning: docked safely above bottom navigation bar
        "bottom-16 left-3 right-3 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm w-auto"
      )}
    >
      <div className="bg-white/98 backdrop-blur-xl rounded-3xl p-4 sm:p-5 border border-rose-200/90 shadow-2xl shadow-rose-950/15 space-y-3 relative overflow-hidden">
        {/* Mobile App Drag Handle Indicator */}
        <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto -mt-1 mb-2 sm:hidden" />

        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500" />

        {/* Header Row */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0 shadow-2xs">
              <Heart className="w-4.5 h-4.5 fill-rose-600 animate-pulse" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                Support Free Education
              </h4>
              <span className="text-[10px] font-semibold text-rose-600 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-rose-500" />
                <span>100% Student-Run • No Paywalls</span>
              </span>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="w-7 h-7 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Close reminder"
            title="Dismiss reminder"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message */}
        <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-medium">
          StudyWithGaurav provides free verified notes, batches, and roadmaps for thousands of students. Help us keep server hosting fast & online with a quick contribution!
        </p>

        {/* Micro-Donation Amount Pills */}
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            Choose Support Amount:
          </span>
          <div className="grid grid-cols-4 gap-1.5">
            {[20, 50, 100, 250].map((amt) => (
              <button
                key={amt}
                onClick={() => setSelectedAmount(amt)}
                className={cn(
                  "py-1.5 px-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer",
                  selectedAmount === amt
                    ? "bg-rose-600 text-white border-rose-600 shadow-2xs scale-102"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                )}
              >
                ₹{amt}
              </button>
            ))}
          </div>
        </div>

        {/* Quick UPI ID Bar */}
        <div className="flex items-center justify-between bg-slate-50 border border-slate-200/80 rounded-xl px-2.5 py-1.5 text-[11px]">
          <span className="font-mono font-bold text-slate-700 truncate mr-2">
            UPI: {UPI_ID}
          </span>
          <button
            onClick={handleCopyUpi}
            className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 text-[11px] shrink-0 cursor-pointer"
            title="Copy UPI ID"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-600" />
                <span className="text-emerald-700">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-slate-500" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* App Action Buttons: Direct 1-Tap UPI Launch & Remind Later */}
        <div className="flex items-center gap-2 pt-0.5">
          {/* Direct Mobile UPI launcher */}
          <a
            href={getUpiUrl()}
            onClick={handleDonateClick}
            className="flex-1 py-2.5 px-3 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-extrabold text-xs shadow-md shadow-rose-600/20 flex items-center justify-center gap-1.5 transition-all active:scale-98"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Pay ₹{selectedAmount} (UPI)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={handleRemindLater}
            className="py-2.5 px-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer shrink-0"
            title="Remind me in 3 days"
          >
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>Later</span>
          </button>
        </div>

        {/* More Details Link */}
        <div className="text-center pt-0.5">
          <Link
            href="/donate"
            onClick={handleDonateClick}
            className="text-[10px] font-bold text-slate-400 hover:text-rose-600 transition-colors inline-flex items-center gap-1"
          >
            <span>Scan QR code or read transparency details</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
