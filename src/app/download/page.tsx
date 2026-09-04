import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, ShieldCheck, Smartphone, WifiOff, AlertTriangle, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Study With Gaurav APK — Free JEE, NEET, SSC Learning App",
  description: "Download official Study With Gaurav Android APK v1.0.0 (4.6 MB). Free batches, verified notes, instant study portals.",
};

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="max-w-md w-full bg-slate-900/90 border border-slate-800/80 rounded-3xl p-6 sm:p-8 text-center shadow-2xl backdrop-blur-xl relative overflow-hidden">
        {/* Subtle glow background */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Header link */}
        <div className="flex justify-between items-center mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            v1.0.0 Verified
          </span>
        </div>

        {/* App Logo */}
        <div className="relative w-24 h-24 mx-auto mb-4 rounded-3xl overflow-hidden border-2 border-indigo-500/30 shadow-xl shadow-indigo-950/60">
          <Image
            src="/black-and-white-portrait-of-a-lion.webp"
            alt="Study With Gaurav App Icon"
            fill
            className="object-cover"
            priority
          />
        </div>

        <h1 className="text-2xl font-bold text-white tracking-tight mb-1">
          Study With Gaurav
        </h1>
        <p className="text-xs text-slate-400 mb-6">
          Official Android App • Size: 4.6 MB • Android 7.0+
        </p>

        {/* Main Download Buttons */}
        <div className="space-y-3 mb-6">
          <a
            href="/downloads/StudyWithGaurav.apk"
            download="StudyWithGaurav.apk"
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 font-bold text-white shadow-lg shadow-indigo-600/30 transition-all duration-200 active:scale-95 text-base"
          >
            <Download className="w-5 h-5" /> Download APK Directly
          </a>

          <a
            href="https://github.com/Gaurav1000m/Study-With-Gaurav/raw/main/release/StudyWithGaurav.apk"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-750 border border-slate-700/60 text-xs font-semibold text-slate-300 transition-colors"
          >
            <Smartphone className="w-3.5 h-3.5" /> GitHub Mirror Download
          </a>
        </div>

        {/* Feature badges */}
        <div className="grid grid-cols-2 gap-2 text-left text-xs mb-6">
          <div className="bg-slate-800/50 p-2.5 rounded-xl border border-slate-800 flex items-center gap-2 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>100% Free & Safe</span>
          </div>
          <div className="bg-slate-800/50 p-2.5 rounded-xl border border-slate-800 flex items-center gap-2 text-slate-300">
            <Smartphone className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Pull-to-Refresh</span>
          </div>
        </div>

        {/* Important notice */}
        <div className="bg-slate-950/60 rounded-2xl p-3.5 border border-slate-800/70 text-left text-[11px] text-slate-400 space-y-1.5">
          <div className="flex items-center gap-1.5 font-semibold text-amber-300">
            <AlertTriangle className="w-3.5 h-3.5" /> Note before opening:
          </div>
          <p>• Keep VPN turned OFF (App restricts VPN access).</p>
          <p>• Keep Private DNS on Automatic/Off so batches load smoothly.</p>
        </div>
      </div>
    </div>
  );
}
