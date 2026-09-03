"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SuggestModal } from "@/components/SuggestModal";
import { ResourceCard } from "@/components/ResourceCard";
import { AdBanner } from "@/components/AdBanner";
import { LottieVerified } from "@/components/LottieVerified";
import { WEBSITES } from "@/data/websites";
import { useApp } from "@/context/AppContext";
import {
  Bookmark,
  Clock,
  GraduationCap,
  Shield,
  FileText,
  Mail,
  Info,
  Edit3,
  Check,
  Trash2,
  Smartphone,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Compass,
  Flame,
  Send,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

export function ProfileClient() {
  const {
    bookmarks,
    recentlyViewed,
    clearRecentlyViewed,
    userProfile,
    updateProfile,
  } = useApp();

  const [isEditing, setIsEditing] = useState(false);
  const [nameInput, setNameInput] = useState(userProfile.name);
  const [goalInput, setGoalInput] = useState(userProfile.examGoal);
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Map recently viewed IDs to website objects
  const recentWebsites = WEBSITES.filter((w) => recentlyViewed.includes(w.id));

  const handleSaveProfile = () => {
    updateProfile({
      name: nameInput.trim() || "Student",
      examGoal: goalInput.trim() || "Competitive Exams",
    });
    setIsEditing(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const commonExamGoals = [
    { label: "JEE Main & Adv", icon: "📐" },
    { label: "NEET UG Medical", icon: "🩺" },
    { label: "SSC CGL / CHSL", icon: "🏛️" },
    { label: "NDA & CDS Defence", icon: "🛡️" },
    { label: "Class 10 / 12 Boards", icon: "📚" },
    { label: "State Govt Exams", icon: "⚖️" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Header onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <div className="h-14 sm:h-16" />

      <main className="flex-1 py-4 sm:py-10 pb-24 md:pb-12">
        {/* ============================================================ */}
        {/* DESKTOP / WEB VIEW: Clean card indicating Mobile Exclusivity  */}
        {/* ============================================================ */}
        <div className="hidden md:flex flex-col items-center justify-center min-h-[60vh] max-w-xl mx-auto px-4 text-center">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-6 w-full">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-slate-900 to-blue-700 text-white flex items-center justify-center mx-auto shadow-md shadow-blue-500/15">
              <Smartphone className="w-8 h-8 text-white" />
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
                Mobile View Exclusive
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                Student Profile Dashboard
              </h1>
              <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                The personalized learning profile and study target tracker are designed exclusively for mobile view. Please open Study with Gaurav on your phone or mobile browser.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/resources"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-sm active:scale-95"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Resources</span>
              </Link>
              <Link
                href="/saved"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
              >
                <Bookmark className="w-4 h-4" />
                <span>Saved Bookmarks ({bookmarks.length})</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* MOBILE VIEW: UI/UX PRO MAX Mobile Profile Experience         */}
        {/* ============================================================ */}
        <div className="block md:hidden max-w-md mx-auto px-4 space-y-4">

          {/* Success Toast */}
          {savedSuccess && (
            <div className="p-3 bg-emerald-600 text-white rounded-2xl flex items-center gap-2 text-xs font-semibold shadow-md animate-fade-in">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-white" />
              <span>Profile updated successfully!</span>
            </div>
          )}

          {/* 1. HERO STUDENT IDENTITY CARD (Pro Max Theme) */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden">
            {/* Top Pattern Header Banner */}
            <div className="h-24 bg-gradient-to-r from-slate-950 via-navy-900 to-blue-900 relative p-3 flex items-start justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-xs text-[10px] font-bold text-blue-200 uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-blue-300" />
                  <span>Free Scholar</span>
                </span>
              </div>
              <button
                onClick={() => {
                  setNameInput(userProfile.name);
                  setGoalInput(userProfile.examGoal);
                  setIsEditing(!isEditing);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-xs text-xs font-semibold text-white transition-all cursor-pointer"
              >
                <Edit3 className="w-3 h-3 text-white" />
                <span>{isEditing ? "Close" : "Edit Profile"}</span>
              </button>
            </div>

            {/* Avatar & User Details */}
            <div className="px-4 pb-4 pt-0 relative">
              {/* Floating Avatar */}
              <div className="relative -mt-10 mb-2.5 inline-block">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-slate-900 via-blue-900 to-indigo-700 text-white flex items-center justify-center font-black text-3xl shadow-lg ring-4 ring-white border border-slate-100">
                  {userProfile.name.charAt(0).toUpperCase() || "S"}
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white shadow flex items-center justify-center">
                  <LottieVerified size={20} />
                </div>
              </div>

              {/* Name and Target */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
                    {userProfile.name}
                  </h1>
                  <span className="text-[10px] font-extrabold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200/60">
                    Active Student
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="text-slate-700 font-semibold">{userProfile.examGoal}</span>
                  <span>•</span>
                  <span>Open Directory</span>
                </div>
              </div>

              {/* Inline Edit Form */}
              {isEditing && (
                <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 animate-fade-in">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Personalize Study Profile
                  </div>
                  <div className="space-y-2.5">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full px-3.5 py-2 text-xs bg-white text-slate-900 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Exam Focus / Target
                      </label>
                      <input
                        type="text"
                        value={goalInput}
                        onChange={(e) => setGoalInput(e.target.value)}
                        placeholder="e.g. JEE Main, NEET UG, SSC"
                        className="w-full px-3.5 py-2 text-xs bg-white text-slate-900 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium"
                      />
                    </div>
                  </div>

                  {/* Preset Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {commonExamGoals.map((g) => (
                      <button
                        key={g.label}
                        type="button"
                        onClick={() => setGoalInput(g.label)}
                        className="px-2.5 py-1 text-[11px] font-semibold bg-white border border-slate-200 hover:border-blue-400 rounded-lg text-slate-700 transition-colors cursor-pointer"
                      >
                        <span>{g.icon}</span> {g.label}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-200/60">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleSaveProfile}
                      className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Save Changes</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 2. STATS & PRODUCTIVITY METRICS STRIP */}
          <div className="grid grid-cols-3 gap-2.5">
            {/* Bookmarks */}
            <Link
              href="/saved"
              className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs text-center group active:scale-98 transition-transform"
            >
              <div className="w-7 h-7 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-1">
                <Bookmark className="w-4 h-4 fill-blue-600" />
              </div>
              <div className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                {bookmarks.length}
              </div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                Saved Items
              </div>
            </Link>

            {/* Visited */}
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs text-center">
              <div className="w-7 h-7 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-1">
                <Clock className="w-4 h-4 text-amber-600" />
              </div>
              <div className="text-lg font-black text-slate-900">
                {recentlyViewed.length}
              </div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                Visits
              </div>
            </div>

            {/* Streak / Status */}
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs text-center">
              <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-1">
                <Flame className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              </div>
              <div className="text-lg font-black text-slate-900">
                100%
              </div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                Free Access
              </div>
            </div>
          </div>

          {/* 3. TARGET EXAM SELECTOR (Quick Switcher) */}
          <div className="bg-white p-4 rounded-3xl border border-slate-200/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span>Primary Exam Goal</span>
              </span>
              <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-lg">
                {userProfile.examGoal}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {commonExamGoals.map((g) => {
                const isSelected = userProfile.examGoal === g.label;
                return (
                  <button
                    key={g.label}
                    onClick={() => updateProfile({ examGoal: g.label })}
                    className={`p-2.5 rounded-xl text-left text-xs font-bold flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? "bg-slate-900 text-white shadow-xs"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-100"
                    }`}
                  >
                    <span className="flex items-center gap-1.5 truncate">
                      <span>{g.icon}</span>
                      <span className="truncate">{g.label}</span>
                    </span>
                    {isSelected && <Check className="w-3.5 h-3.5 shrink-0 text-blue-400" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. MY LEARNING HUB ACTIONS (Pro Max Grouped List) */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs overflow-hidden divide-y divide-slate-100">
            {/* Bookmarks */}
            <Link
              href="/saved"
              className="p-3.5 flex items-center justify-between hover:bg-slate-50 active:bg-slate-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Bookmark className="w-4 h-4 fill-blue-600" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">Personal Saved Directory</div>
                  <div className="text-[11px] text-slate-500">{bookmarks.length} bookmarked study portals</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            {/* Explore Directory */}
            <Link
              href="/resources"
              className="p-3.5 flex items-center justify-between hover:bg-slate-50 active:bg-slate-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">All Educational Resources</div>
                  <div className="text-[11px] text-slate-500">100+ verified batches & materials</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            {/* Suggest Resource */}
            <button
              onClick={() => setIsSuggestModalOpen(true)}
              className="w-full text-left p-3.5 flex items-center justify-between hover:bg-slate-50 active:bg-slate-100 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">Suggest Portal or Batch</div>
                  <div className="text-[11px] text-slate-500">Contribute new links to directory</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>

            {/* Telegram Community */}
            <a
              href="https://t.me/studywithgaurav"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 flex items-center justify-between hover:bg-slate-50 active:bg-slate-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Send className="w-4 h-4 fill-sky-600 text-sky-600" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
                    <span>Telegram Channel</span>
                    <span className="text-[9px] bg-sky-100 text-sky-700 font-bold px-1.5 py-0.2 rounded-full">
                      Official
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500">@studywithgaurav updates & alerts</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* 5. RECENTLY ACCESSED PORTALS */}
          <div className="bg-white p-4 rounded-3xl border border-slate-200/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-500" />
                <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wide">
                  Recent Study History
                </h2>
              </div>
              {recentWebsites.length > 0 && (
                <button
                  onClick={clearRecentlyViewed}
                  className="text-[11px] font-semibold text-slate-400 hover:text-rose-600 flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear</span>
                </button>
              )}
            </div>

            {recentWebsites.length > 0 ? (
              <div className="space-y-2.5">
                {recentWebsites.slice(0, 4).map((website) => (
                  <ResourceCard key={website.id} website={website} />
                ))}
              </div>
            ) : (
              <div className="text-center py-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <p className="text-xs text-slate-500">No recently viewed portals yet.</p>
                <Link
                  href="/resources"
                  className="text-xs font-bold text-blue-600 hover:underline inline-block"
                >
                  Browse directory to build study history →
                </Link>
              </div>
            )}
          </div>

          {/* 6. INFORMATION, COMPLIANCE & LEGAL */}
          <div className="bg-white p-4 rounded-3xl border border-slate-200/90 shadow-2xs space-y-2.5">
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
              Information & Compliance
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-bold">
              <Link
                href="/about"
                className="p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center gap-2 transition-colors border border-slate-100"
              >
                <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>About Us</span>
              </Link>
              <Link
                href="/contact"
                className="p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center gap-2 transition-colors border border-slate-100"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Contact</span>
              </Link>
              <Link
                href="/privacy"
                className="p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center gap-2 transition-colors border border-slate-100"
              >
                <Shield className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Privacy</span>
              </Link>
              <Link
                href="/terms"
                className="p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center gap-2 transition-colors border border-slate-100"
              >
                <FileText className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Terms</span>
              </Link>
            </div>
          </div>

          {/* 7. ADVERTISING UNIT (Clean white background without separator lines) */}
          <AdBanner format="horizontal" minHeight="min-h-[100px]" label="ADVERTISEMENT" />

        </div>
      </main>

      <Footer onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <SuggestModal isOpen={isSuggestModalOpen} onClose={() => setIsSuggestModalOpen(false)} />
    </div>
  );
}
