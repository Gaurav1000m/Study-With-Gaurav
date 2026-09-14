"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, X, Clock, ArrowRight, Check, Copy, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY_NEXT = "swg_donation_reminder_next";
const STORAGE_KEY_DISMISSED = "swg_donation_reminder_dismissed_count";
const SNOOZE_DAYS_MS = 3 * 24 * 60 * 60 * 1000;
const CLOSE_SNOOZE_MS = 24 * 60 * 60 * 1000;
const UPI_ID = "gauraveducation@fam";

export function DonationReminder() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number>(20);
  const [showQr, setShowQr] = useState(false);

  useEffect(() => {
    if (pathname === "/donate") return;

    try {
      const nextTime = localStorage.getItem(STORAGE_KEY_NEXT);
      if (nextTime && Date.now() < parseInt(nextTime, 10)) return;
    } catch {
      // localStorage may be disabled
    }

    const timer = setTimeout(() => setIsVisible(true), 10000);
    return () => clearTimeout(timer);
  }, [pathname]);

  const handleRemindLater = () => {
    setIsVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY_NEXT, (Date.now() + SNOOZE_DAYS_MS).toString());
      const count = parseInt(localStorage.getItem(STORAGE_KEY_DISMISSED) || "0", 10);
      localStorage.setItem(STORAGE_KEY_DISMISSED, (count + 1).toString());
    } catch {}
  };

  const handleClose = () => {
    setIsVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY_NEXT, (Date.now() + CLOSE_SNOOZE_MS).toString());
    } catch {}
  };

  const handleDonateClick = () => {
    setIsVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY_NEXT, (Date.now() + 14 * 24 * 60 * 60 * 1000).toString());
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

  const getUpiUrl = () =>
    `upi://pay?pa=${UPI_ID}&pn=Study%20with%20Gaurav&cu=INR&am=${selectedAmount}`;

  if (!isVisible || pathname === "/donate") return null;

  return (
    <aside
      aria-label="Community Support Reminder"
      className={cn(
        "fixed z-40 animate-slide-up",
        "bottom-[calc(4.5rem+env(safe-area-inset-bottom,0px))] left-3 right-3",
        "sm:left-auto sm:right-5 sm:bottom-5 sm:max-w-[340px] w-auto"
      )}
    >
      <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
              <Heart className="w-3.5 h-3.5 fill-slate-700 text-slate-700" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-tight">Support Free Education</p>
              <p className="text-[10px] text-slate-400 font-medium">Student-built · Always free</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-6 h-6 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 space-y-3">

          {/* Amount selector */}
          <div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Select amount:
            </p>
            <div className="grid grid-cols-4 gap-1.5">
              {[20, 50, 100, 250].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setSelectedAmount(amt)}
                  className={cn(
                    "py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer",
                    selectedAmount === amt
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-white hover:border-slate-300"
                  )}
                >
                  ₹{amt}
                </button>
              ))}
            </div>
          </div>

          {/* QR toggle */}
          <button
            type="button"
            onClick={() => setShowQr((v) => !v)}
            className="w-full text-left text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1.5"
          >
            <span>{showQr ? "▲ Hide QR Code" : "▼ Show QR to scan"}</span>
          </button>

          {/* Inline QR */}
          {showQr && (
            <div className="flex flex-col items-center bg-slate-50 border border-slate-200 rounded-xl p-3">
              <div className="relative p-2 bg-white rounded-xl border border-slate-200 shadow-xs overflow-visible">
                <span aria-hidden="true" className="absolute -top-1.5 -left-1.5 w-5 h-5 border-t-[3px] border-l-[3px] border-blue-600 rounded-tl-lg pointer-events-none z-10" />
                <span aria-hidden="true" className="absolute -top-1.5 -right-1.5 w-5 h-5 border-t-[3px] border-r-[3px] border-blue-600 rounded-tr-lg pointer-events-none z-10" />
                <span aria-hidden="true" className="absolute -bottom-1.5 -left-1.5 w-5 h-5 border-b-[3px] border-l-[3px] border-blue-600 rounded-bl-lg pointer-events-none z-10" />
                <span aria-hidden="true" className="absolute -bottom-1.5 -right-1.5 w-5 h-5 border-b-[3px] border-r-[3px] border-blue-600 rounded-br-lg pointer-events-none z-10" />
                <Image
                  src="/Qrcode.jpg"
                  alt="Scan QR Code to donate via GPay, PhonePe, Paytm, BHIM"
                  width={732}
                  height={722}
                  sizes="160px"
                  unoptimized
                  className="w-40 h-auto rounded-lg object-contain"
                />
              </div>
              <p className="text-[10px] text-slate-400 mt-2 font-medium">
                GPay / PhonePe / Paytm / BHIM
              </p>
            </div>
          )}

          {/* UPI ID */}
          <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
            <span className="text-xs font-mono font-semibold text-slate-800 truncate mr-2">
              {UPI_ID}
            </span>
            <button
              type="button"
              onClick={handleCopyUpi}
              className="flex items-center gap-1 text-xs font-semibold cursor-pointer shrink-0 transition-colors text-blue-600 hover:text-blue-700"
              title="Copy UPI ID"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* CTA row */}
          <div className="flex items-center gap-2">
            <a
              href={getUpiUrl()}
              onClick={handleDonateClick}
              className="flex-1 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <Smartphone className="w-3.5 h-3.5 shrink-0" />
              Pay ₹{selectedAmount} via UPI
            </a>
            <button
              type="button"
              onClick={handleRemindLater}
              className="py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold text-xs flex items-center gap-1 transition-colors cursor-pointer shrink-0"
              title="Remind me in 3 days"
            >
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Later
            </button>
          </div>

          {/* Footer */}
          <div className="border-t border-slate-100 pt-2 text-center">
            <Link
              href="/donate"
              onClick={handleDonateClick}
              className="text-[11px] font-medium text-slate-400 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
            >
              View donation page
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
