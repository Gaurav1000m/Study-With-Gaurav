"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SuggestModal } from "@/components/SuggestModal";
import { AdBanner } from "@/components/AdBanner";
import { WEBSITES } from "@/data/websites";
import { CATEGORIES } from "@/data/categories";
import { useApp } from "@/context/AppContext";
import { getFaviconUrl } from "@/lib/utils";
import {
  User,
  GraduationCap,
  Bookmark,
  Clock,
  Edit3,
  Check,
  CheckCircle2,
  Trash2,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Send,
  ShieldCheck,
  BookOpen,
  ArrowRight,
  Info,
  Mail,
  Shield,
  FileText,
  Star,
  Compass,
  Layers,
  Settings,
  Flame,
  Search,
} from "lucide-react";

export function getNameInitials(name: string): string {
  const trimmed = (name || "").trim();
  if (!trimmed) return "S";
  const parts = trimmed.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return parts[0].slice(0, 1).toUpperCase();
}

const COMMON_EXAM_GOALS = [
  { id: "jee", label: "JEE Main & Advanced", category: "physics-wallah", tag: "Engineering" },
  { id: "neet", label: "NEET UG Medical", category: "physics-wallah", tag: "Medical" },
  { id: "ssc", label: "SSC CGL & CHSL", category: "rojgar-with-ankit", tag: "Govt Recruitment" },
  { id: "defence", label: "NDA & CDS Defence", category: "rojgar-with-ankit", tag: "Defence" },
  { id: "boards", label: "Class 10 & 12 Boards", category: "next-toppers", tag: "Board Exams" },
  { id: "state", label: "State PSC & Police", category: "khan-global-studies", tag: "State Exams" },
  { id: "programming", label: "Computer Science & DSA", category: "apna-college", tag: "Coding" },
];

export function ProfileClient() {
  const {
    bookmarks,
    toggleBookmark,
    recentlyViewed,
    clearRecentlyViewed,
    userProfile,
    updateProfile,
    clearBookmarks,
  } = useApp();

  const [activeTab, setActiveTab] = useState<"dashboard" | "saved" | "history" | "settings">("dashboard");
  const [isEditing, setIsEditing] = useState(false);
  const [nameInput, setNameInput] = useState(userProfile.name);
  const [goalInput, setGoalInput] = useState(userProfile.examGoal);
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    setNameInput(userProfile.name);
    setGoalInput(userProfile.examGoal);
  }, [userProfile]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleSaveProfile = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    updateProfile({
      name: nameInput.trim() || "Student",
      examGoal: goalInput.trim() || "Competitive Exams",
    });
    setIsEditing(false);
    showToast("Profile preferences updated!");
  };

  // Resolve recently viewed and bookmarked websites
  const recentWebsites = WEBSITES.filter((w) => recentlyViewed.includes(w.id));
  const savedWebsites = WEBSITES.filter((w) => bookmarks.includes(w.id));

  // Find category match for quick jump
  const currentGoalCategory = COMMON_EXAM_GOALS.find(
    (g) => g.label.toLowerCase() === userProfile.examGoal.toLowerCase()
  );

  const initials = getNameInitials(isEditing ? nameInput : userProfile.name);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Header onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <div className="h-14 sm:h-16" />

      <main id="main-content" className="flex-1 py-5 sm:py-8 lg:py-10 pb-24 md:pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

          {/* Toast Notification */}
          {toastMessage && (
            <div className="fixed top-18 right-4 z-50 p-3.5 bg-slate-900 text-white rounded-xl flex items-center gap-2.5 text-xs sm:text-sm font-semibold shadow-lg animate-fade-in border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* 1. STUDENT HERO PROFILE BANNER (Like Coursera & Khan Academy) */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-xs relative overflow-hidden">
            {/* Top decorative accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              {/* Avatar + Student Identity */}
              <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                {/* Large Monogram Squircle Avatar */}
                <div className="relative shrink-0 select-none">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-2xl sm:text-3xl flex items-center justify-center shadow-xs">
                    {initials}
                  </div>
                  <span
                    className="absolute -bottom-1 -right-1 bg-emerald-600 text-white p-1 rounded-full border-2 border-white shadow-xs"
                    title="Verified Student Profile"
                  >
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                </div>

                {/* Name, Goal & Status */}
                <div className="space-y-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight truncate">
                      {userProfile.name}
                    </h1>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold border border-blue-200/60">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                      <span>Scholar Tier</span>
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="inline-flex items-center gap-1 text-slate-700 font-bold">
                      <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                      <span>{userProfile.examGoal}</span>
                    </span>
                    <span>•</span>
                    <span className="text-emerald-700 font-semibold">100% Free Lifetime Access</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                <button
                  type="button"
                  onClick={() => setIsEditing(!isEditing)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5 text-slate-500" />
                  <span>{isEditing ? "Close" : "Edit Profile"}</span>
                </button>

                <Link
                  href="/resources"
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-xs"
                >
                  <span>Explore Batches</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Inline Profile Editing Drawer */}
            {isEditing && (
              <form onSubmit={handleSaveProfile} className="mt-5 pt-5 border-t border-slate-100 space-y-4 animate-fade-in">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Student Name
                    </label>
                    <input
                      type="text"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      placeholder="e.g. Gaurav Sharma"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 focus:bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium transition-all"
                      autoFocus
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Target Exam Focus
                    </label>
                    <input
                      type="text"
                      value={goalInput}
                      onChange={(e) => setGoalInput(e.target.value)}
                      placeholder="e.g. JEE Main, NEET UG, SSC"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 focus:bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium transition-all"
                    />
                  </div>
                </div>

                {/* Preset Goals Pills */}
                <div>
                  <span className="block text-[11px] font-semibold text-slate-400 mb-1.5">
                    Quick Choose Target Goal:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {COMMON_EXAM_GOALS.map((g) => (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => setGoalInput(g.label)}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                      >
                        {g.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-xs cursor-pointer"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Save Profile</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* 2. ACTIVITY & LEARNING STATS ROW */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* Bookmarks Counter */}
            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                activeTab === "saved"
                  ? "bg-blue-50/70 border-blue-200 shadow-xs"
                  : "bg-white border-slate-200 hover:border-slate-300 shadow-xs"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-tight">Saved</span>
                <Bookmark className="w-4 h-4 text-blue-600 fill-blue-600" />
              </div>
              <div className="text-2xl font-black text-slate-900">{bookmarks.length}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Study portals saved</div>
            </button>

            {/* Visited Portals */}
            <button
              type="button"
              onClick={() => setActiveTab("history")}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                activeTab === "history"
                  ? "bg-amber-50/70 border-amber-200 shadow-xs"
                  : "bg-white border-slate-200 hover:border-slate-300 shadow-xs"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-tight">History</span>
                <Clock className="w-4 h-4 text-amber-600" />
              </div>
              <div className="text-2xl font-black text-slate-900">{recentlyViewed.length}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Portals accessed</div>
            </button>

            {/* Target Exam Goal */}
            <button
              type="button"
              onClick={() => setActiveTab("settings")}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                activeTab === "settings"
                  ? "bg-indigo-50/70 border-indigo-200 shadow-xs"
                  : "bg-white border-slate-200 hover:border-slate-300 shadow-xs"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-tight">Target</span>
                <GraduationCap className="w-4 h-4 text-indigo-600" />
              </div>
              <div className="text-base font-black text-slate-900 truncate">
                {userProfile.examGoal.split(" ")[0]}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5 truncate">{userProfile.examGoal}</div>
            </button>

            {/* Free Scholar Status */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs text-left">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-tight">Access</span>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-2xl font-black text-emerald-700">Free</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Open educational portal</div>
            </div>
          </div>

          {/* 3. EDTECH TABBED NAVIGATION (Standard on Khan Academy / Coursera / PW) */}
          <div className="flex items-center gap-1 border-b border-slate-200 overflow-x-auto no-scrollbar">
            <button
              type="button"
              onClick={() => setActiveTab("dashboard")}
              className={`flex items-center gap-2 py-3 px-4 border-b-2 text-xs sm:text-sm font-bold whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === "dashboard"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Study Dashboard</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`flex items-center gap-2 py-3 px-4 border-b-2 text-xs sm:text-sm font-bold whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === "saved"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              <Bookmark className="w-4 h-4" />
              <span>Saved Bookmarks</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                activeTab === "saved" ? "bg-blue-100 text-blue-800" : "bg-slate-100 text-slate-600"
              }`}>
                {bookmarks.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("history")}
              className={`flex items-center gap-2 py-3 px-4 border-b-2 text-xs sm:text-sm font-bold whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === "history"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Recent History</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                activeTab === "history" ? "bg-blue-100 text-blue-800" : "bg-slate-100 text-slate-600"
              }`}>
                {recentlyViewed.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("settings")}
              className={`flex items-center gap-2 py-3 px-4 border-b-2 text-xs sm:text-sm font-bold whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === "settings"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Study Settings</span>
            </button>
          </div>

          {/* TAB 1: STUDY DASHBOARD OVERVIEW */}
          {activeTab === "dashboard" && (
            <div className="space-y-6 animate-fade-in">
              {/* Target Exam Focus Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Current Exam Goal
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">
                    {userProfile.examGoal}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Explore curated portals, revision batches, and notes customized for this goal.
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {currentGoalCategory && (
                    <Link
                      href={`/categories/${currentGoalCategory.category}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-xs"
                    >
                      <span>Explore Goal Batches</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                  <button
                    type="button"
                    onClick={() => setActiveTab("settings")}
                    className="px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Change Goal
                  </button>
                </div>
              </div>

              {/* Quick Navigation Gateways (4 Cards Grid) */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-1">
                  Fast Study Navigation
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <Link
                    href="/resources"
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-sm transition-all group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      All Resources
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      100+ verified portals & mirrors
                    </div>
                  </Link>

                  <Link
                    href="/roadmaps"
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-sm transition-all group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      Exam Roadmaps
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Step-by-step syllabus paths
                    </div>
                  </Link>

                  <Link
                    href="/categories"
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 shadow-xs hover:shadow-sm transition-all group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                      Coaching Hubs
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      PW, RWA, KGS, Next Toppers & more
                    </div>
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsSuggestModalOpen(true)}
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-amber-300 shadow-xs hover:shadow-sm transition-all text-left group cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                      Suggest Portal
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Contribute new study links
                    </div>
                  </button>
                </div>
              </div>

              {/* Recent Study History (Smart Resume List) */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      Recently Accessed Portals
                    </h4>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {recentWebsites.length}
                    </span>
                  </div>

                  {recentWebsites.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setActiveTab("history")}
                      className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
                    >
                      <span>View all</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {recentWebsites.length > 0 ? (
                  <div className="space-y-2">
                    {recentWebsites.slice(0, 4).map((website) => (
                      <div
                        key={website.id}
                        className="flex items-center justify-between gap-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 p-1 flex items-center justify-center shrink-0 overflow-hidden">
                            <Image
                              src={website.logo || getFaviconUrl(website.url)}
                              alt={website.name}
                              width={28}
                              height={28}
                              unoptimized
                              style={{ width: "auto", height: "auto" }}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "/images/logo.webp";
                              }}
                            />
                          </div>

                          <div className="min-w-0">
                            <Link
                              href={`/resources/${website.id}`}
                              className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors truncate block"
                            >
                              {website.name}
                            </Link>
                            <p className="text-[11px] text-slate-500 truncate">
                              {website.subcategory || website.category}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <Link
                            href={`/resources/${website.id}`}
                            className="px-2.5 py-1 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-lg transition-colors"
                          >
                            Details
                          </Link>
                          <a
                            href={website.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-xs"
                          >
                            <span>Resume</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      No recently opened portals.
                    </p>
                    <p className="text-xs text-slate-400">
                      When you study through verified mirrors, they will appear here for fast resuming.
                    </p>
                    <div className="pt-2">
                      <Link
                        href="/resources"
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline"
                      >
                        <span>Browse directory</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Official Community Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Send className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">
                      Official Telegram Channel & Study Alerts
                    </h5>
                    <p className="text-xs text-slate-600">
                      Get real-time updates whenever new batches, tests, or working mirrors go live.
                    </p>
                  </div>
                </div>

                <a
                  href="https://t.me/studywithgaurav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-colors shadow-xs shrink-0"
                >
                  <span>Join @studywithgaurav</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* TAB 2: SAVED BOOKMARKS */}
          {activeTab === "saved" && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Saved Study Portals ({savedWebsites.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Your personal revision library stored securely on your browser.
                  </p>
                </div>

                {savedWebsites.length > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm("Are you sure you want to remove all saved bookmarks?")) {
                        clearBookmarks();
                        showToast("All bookmarks cleared");
                      }
                    }}
                    className="text-xs font-semibold text-slate-400 hover:text-rose-600 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear all</span>
                  </button>
                )}
              </div>

              {savedWebsites.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {savedWebsites.map((website) => (
                    <div
                      key={website.id}
                      className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs flex flex-col justify-between space-y-3 transition-colors"
                    >
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 p-1 flex items-center justify-center shrink-0">
                            <Image
                              src={website.logo || getFaviconUrl(website.url)}
                              alt={website.name}
                              width={32}
                              height={32}
                              unoptimized
                              style={{ width: "auto", height: "auto" }}
                              className="w-full h-full object-contain"
                            />
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              toggleBookmark(website.id);
                              showToast(`Removed from saved`);
                            }}
                            className="p-1.5 rounded-lg text-blue-600 hover:bg-slate-100 transition-colors"
                            title="Remove bookmark"
                          >
                            <Bookmark className="w-4 h-4 fill-blue-600" />
                          </button>
                        </div>

                        <div>
                          <Link
                            href={`/resources/${website.id}`}
                            className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors line-clamp-1 block"
                          >
                            {website.name}
                          </Link>
                          <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5">
                            {website.description}
                          </p>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                        <Link
                          href={`/resources/${website.id}`}
                          className="flex-1 py-1.5 text-center text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
                        >
                          Details
                        </Link>
                        <a
                          href={website.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-1.5 text-center text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center justify-center gap-1"
                        >
                          <span>Open</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 rounded-2xl bg-white border border-slate-200 p-6 space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-2">
                    <Bookmark className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">No saved study portals</h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Click the bookmark icon on any portal card across the directory to save it here for fast revision.
                  </p>
                  <div className="pt-3">
                    <Link
                      href="/resources"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-xs"
                    >
                      <span>Browse Resource Directory</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: RECENT STUDY HISTORY */}
          {activeTab === "history" && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Browsing & Study History ({recentWebsites.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Chronological access history stored locally on this device.
                  </p>
                </div>

                {recentWebsites.length > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      clearRecentlyViewed();
                      showToast("Study history cleared");
                    }}
                    className="text-xs font-semibold text-slate-400 hover:text-rose-600 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear history</span>
                  </button>
                )}
              </div>

              {recentWebsites.length > 0 ? (
                <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-xs">
                  {recentWebsites.map((website) => (
                    <div
                      key={website.id}
                      className="p-3.5 sm:p-4 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 p-1 flex items-center justify-center shrink-0">
                          <Image
                            src={website.logo || getFaviconUrl(website.url)}
                            alt={website.name}
                            width={32}
                            height={32}
                            unoptimized
                            style={{ width: "auto", height: "auto" }}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <div className="min-w-0">
                          <Link
                            href={`/resources/${website.id}`}
                            className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors truncate block"
                          >
                            {website.name}
                          </Link>
                          <div className="flex items-center gap-2 text-[11px] text-slate-500 truncate mt-0.5">
                            <span className="font-medium text-slate-600">
                              {website.subcategory || website.category}
                            </span>
                            <span>•</span>
                            <span className="text-emerald-700 font-semibold">Verified Online</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <Link
                          href={`/resources/${website.id}`}
                          className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                        >
                          Details
                        </Link>
                        <a
                          href={website.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-xs"
                        >
                          <span>Open</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 rounded-2xl bg-white border border-slate-200 p-6 space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">No study history recorded</h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    When you access batches and educational mirrors, they are logged here so you never lose track of what you were studying.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: STUDY SETTINGS & COMPLIANCE */}
          {activeTab === "settings" && (
            <div className="space-y-6 animate-fade-in">
              {/* Target Examination Switcher */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Change Target Examination
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-slate-400">
                    Click to switch instantly
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {COMMON_EXAM_GOALS.map((goal) => {
                    const isSelected = userProfile.examGoal.toLowerCase() === goal.label.toLowerCase();
                    return (
                      <button
                        key={goal.id}
                        type="button"
                        onClick={() => {
                          updateProfile({ examGoal: goal.label });
                          showToast(`Target exam set to ${goal.label}`);
                        }}
                        className={`p-3 rounded-xl text-left transition-all border cursor-pointer ${
                          isSelected
                            ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                            : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-100"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-xs font-bold truncate">{goal.label}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />}
                        </div>
                        <div className={`text-[11px] font-medium mt-0.5 ${isSelected ? "text-slate-300" : "text-slate-400"}`}>
                          {goal.tag}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Edit Full Name */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Student Profile Name
                </h3>
                <form onSubmit={handleSaveProfile} className="flex flex-col sm:flex-row gap-2.5 max-w-lg">
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="Enter your name"
                    className="flex-1 px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors shrink-0 shadow-xs cursor-pointer"
                  >
                    Update Name
                  </button>
                </form>
              </div>

              {/* Compliance & Official Links */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Platform Compliance & Support
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-medium text-slate-700">
                  <Link
                    href="/about"
                    className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 flex items-center gap-2 transition-colors border border-slate-100"
                  >
                    <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>About Us</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 flex items-center gap-2 transition-colors border border-slate-100"
                  >
                    <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Contact</span>
                  </Link>
                  <Link
                    href="/privacy"
                    className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 flex items-center gap-2 transition-colors border border-slate-100"
                  >
                    <Shield className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Privacy Policy</span>
                  </Link>
                  <Link
                    href="/terms"
                    className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 flex items-center gap-2 transition-colors border border-slate-100"
                  >
                    <FileText className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Terms of Service</span>
                  </Link>
                </div>
              </div>

              {/* Danger / Privacy Reset Zone */}
              <div className="bg-rose-50/50 rounded-2xl border border-rose-100 p-5 shadow-xs space-y-3">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800">
                    Local Device Data Reset
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Clear local storage for study history or reset preferences to defaults.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm("Clear your study browsing history?")) {
                        clearRecentlyViewed();
                        showToast("History cleared");
                      }
                    }}
                    className="px-3 py-1.5 rounded-lg border border-rose-200 bg-white hover:bg-rose-50 text-rose-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Clear Browsing History
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm("Reset profile name and target to default?")) {
                        updateProfile({ name: "Student", examGoal: "JEE Main & Advanced" });
                        showToast("Profile reset to defaults");
                      }
                    }}
                    className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Reset Profile Defaults
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Advertisement Banner */}
          <AdBanner format="horizontal" minHeight="min-h-[100px]" label="ADVERTISEMENT" />

        </div>
      </main>

      <Footer onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <SuggestModal isOpen={isSuggestModalOpen} onClose={() => setIsSuggestModalOpen(false)} />
    </div>
  );
}
