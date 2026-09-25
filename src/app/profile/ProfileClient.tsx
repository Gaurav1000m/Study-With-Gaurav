"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SuggestModal } from "@/components/SuggestModal";
import { AdBanner } from "@/components/AdBanner";
import { WEBSITES } from "@/data/websites";
import { useApp } from "@/context/AppContext";
import { getFaviconUrl } from "@/lib/utils";
import {
  GraduationCap,
  Bookmark,
  Clock,
  Edit3,
  Check,
  CheckCircle2,
  Trash2,
  ExternalLink,
  BookOpen,
  ArrowRight,
  Info,
  Mail,
  Shield,
  FileText,
  User,
  RotateCcw,
  Sparkles,
  Heart,
  Server,
  Globe,
  Cpu,
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
  { id: "jee", label: "JEE Main & Advanced", category: "Engineering" },
  { id: "neet", label: "NEET UG Medical", category: "Medical" },
  { id: "ssc", label: "SSC CGL & CHSL", category: "Govt Exams" },
  { id: "defence", label: "NDA & CDS Defence", category: "Defence" },
  { id: "boards", label: "Class 10 & 12 Boards", category: "Board Exams" },
  { id: "state", label: "State PSC & Police", category: "State Exams" },
  { id: "programming", label: "Computer Science & DSA", category: "Coding" },
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

  const [activeTab, setActiveTab] = useState<"overview" | "saved" | "history" | "settings">("overview");
  const [isEditing, setIsEditing] = useState(false);
  const [nameInput, setNameInput] = useState(userProfile.name);
  const [goalInput, setGoalInput] = useState(userProfile.examGoal);
  const [isSaving, setIsSaving] = useState(false);
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
    setIsSaving(true);

    setTimeout(() => {
      updateProfile({
        name: nameInput.trim() || "Student",
        examGoal: goalInput.trim() || "Competitive Exams",
      });
      setIsSaving(false);
      setIsEditing(false);
      showToast("Profile information updated");
    }, 150);
  };

  const handleResetDefaults = () => {
    if (confirm("Reset profile name and target examination to default values?")) {
      updateProfile({ name: "Student", examGoal: "JEE Main & Advanced" });
      setNameInput("Student");
      setGoalInput("JEE Main & Advanced");
      showToast("Preferences reset to defaults");
    }
  };

  const handleClearHistory = () => {
    if (confirm("Are you sure you want to clear your local browsing history?")) {
      clearRecentlyViewed();
      showToast("Browsing history cleared");
    }
  };

  const handleClearBookmarks = () => {
    if (confirm("Are you sure you want to remove all saved bookmarks?")) {
      clearBookmarks();
      showToast("Saved bookmarks removed");
    }
  };

  // Map IDs to actual website records
  const recentWebsites = WEBSITES.filter((w) => recentlyViewed.includes(w.id));
  const savedWebsites = WEBSITES.filter((w) => bookmarks.includes(w.id));

  const initials = getNameInitials(isEditing ? nameInput : userProfile.name);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased">
      <Header onOpenSuggestModal={() => setIsSuggestModalOpen(true)} />
      <div className="h-14 sm:h-16" />

      <main id="main-content" className="flex-1 py-6 sm:py-10 pb-24 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

          {/* Toast Notification */}
          {toastMessage && (
            <div
              role="status"
              className="fixed top-20 right-4 z-50 py-2.5 px-4 bg-slate-900 text-white rounded-xl flex items-center gap-2.5 text-xs sm:text-sm font-medium shadow-lg animate-fade-in border border-slate-800"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* 1. PROFILE HEADER CARD */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              {/* Avatar + Primary User Details */}
              <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                <div className="relative shrink-0 select-none">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-slate-900 text-white font-bold text-xl sm:text-2xl flex items-center justify-center border border-slate-800 shadow-2xs">
                    {initials}
                  </div>
                  <span
                    className="absolute -bottom-1 -right-1 bg-emerald-600 text-white p-1 rounded-full border-2 border-white shadow-2xs"
                    title="Active Student Profile"
                  >
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                </div>

                <div className="space-y-1 min-w-0">
                  <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight truncate">
                    {userProfile.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="inline-flex items-center gap-1.5 text-slate-700 font-semibold bg-slate-100 px-2.5 py-1 rounded-md">
                      <GraduationCap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="truncate">{userProfile.examGoal}</span>
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-600">Free Student Access</span>
                  </div>
                </div>
              </div>

              {/* Header Action Button */}
              <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                <button
                  type="button"
                  onClick={() => setIsEditing(!isEditing)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 text-xs sm:text-sm font-medium text-slate-700 transition-colors cursor-pointer"
                  aria-expanded={isEditing}
                >
                  <Edit3 className="w-3.5 h-3.5 text-slate-500" />
                  <span>{isEditing ? "Cancel" : "Edit Profile"}</span>
                </button>
              </div>
            </div>

            {/* Inline Profile Editing Drawer */}
            {isEditing && (
              <form onSubmit={handleSaveProfile} className="mt-6 pt-6 border-t border-slate-100 space-y-4 animate-fade-in">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="student-name" className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name
                    </label>
                    <input
                      id="student-name"
                      type="text"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      placeholder="e.g. Gaurav Sharma"
                      className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-slate-900"
                      autoFocus
                    />
                  </div>

                  <div>
                    <label htmlFor="target-exam" className="block text-xs font-semibold text-slate-700 mb-1">
                      Target Exam or Study Goal
                    </label>
                    <input
                      id="target-exam"
                      type="text"
                      value={goalInput}
                      onChange={(e) => setGoalInput(e.target.value)}
                      placeholder="e.g. JEE Main, NEET, SSC CGL"
                      className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-slate-900"
                    />
                  </div>
                </div>

                {/* Fast Exam Selection Chips */}
                <div>
                  <span className="block text-xs font-medium text-slate-500 mb-1.5">
                    Or select a common examination:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {COMMON_EXAM_GOALS.map((goal) => (
                      <button
                        key={goal.id}
                        type="button"
                        onClick={() => setGoalInput(goal.label)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
                          goalInput === goal.label
                            ? "bg-slate-900 text-white border-slate-900"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                        }`}
                      >
                        {goal.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-2xs cursor-pointer disabled:opacity-50"
                  >
                    <Check className="w-4 h-4" />
                    <span>{isSaving ? "Saving..." : "Save Changes"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* 2. TABBED NAVIGATION */}
          <div className="border-b border-slate-200">
            <nav className="flex space-x-6 overflow-x-auto no-scrollbar" aria-label="Profile navigation tabs">
              <button
                type="button"
                onClick={() => setActiveTab("overview")}
                className={`py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === "overview"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
                }`}
              >
                Overview
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("saved")}
                className={`py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "saved"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
                }`}
              >
                <span>Saved Bookmarks</span>
                <span className="px-1.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
                  {bookmarks.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("history")}
                className={`py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "history"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
                }`}
              >
                <span>Browsing History</span>
                <span className="px-1.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
                  {recentlyViewed.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("settings")}
                className={`py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === "settings"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
                }`}
              >
                Settings & Preferences
              </button>
            </nav>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Account / Student Summary Grid */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
                <h2 className="text-base font-bold text-slate-900">
                  Student Information & Preferences
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-xs font-medium text-slate-400 block mb-0.5">Profile Name</span>
                    <span className="font-semibold text-slate-900">{userProfile.name}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-xs font-medium text-slate-400 block mb-0.5">Target Examination</span>
                    <span className="font-semibold text-slate-900">{userProfile.examGoal}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-xs font-medium text-slate-400 block mb-0.5">Saved Portals</span>
                    <span className="font-semibold text-slate-900">{bookmarks.length} study portals bookmarked</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-xs font-medium text-slate-400 block mb-0.5">Recent Activity</span>
                    <span className="font-semibold text-slate-900">{recentlyViewed.length} portals accessed</span>
                  </div>
                </div>
              </div>

              {/* Quick Navigation Gateways */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <Link
                  href="/resources"
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-2xs transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                        Browse Resources
                      </h3>
                      <p className="text-xs text-slate-500 truncate">225+ verified study portals</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0" />
                </Link>

                <Link
                  href="/roadmaps"
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-2xs transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors truncate">
                        Exam Roadmaps
                      </h3>
                      <p className="text-xs text-slate-500 truncate">Syllabus & strategy guides</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 transition-colors shrink-0" />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsSuggestModalOpen(true)}
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-2xs transition-colors flex items-center justify-between text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-slate-900 group-hover:text-amber-700 transition-colors truncate">
                        Suggest Portal
                      </h3>
                      <p className="text-xs text-slate-500 truncate">Submit links or feedback</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-700 transition-colors shrink-0" />
                </button>
              </div>

              {/* Recent Activity Section */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-500" />
                    <h2 className="text-base font-bold text-slate-900">
                      Recent Activity
                    </h2>
                  </div>

                  {recentWebsites.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setActiveTab("history")}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                    >
                      View all ({recentWebsites.length})
                    </button>
                  )}
                </div>

                {recentWebsites.length > 0 ? (
                  <div className="divide-y divide-slate-100">
                    {recentWebsites.slice(0, 4).map((website) => (
                      <div
                        key={website.id}
                        className="py-3 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 p-1 flex items-center justify-center shrink-0">
                            <Image
                              src={website.logo || getFaviconUrl(website.url)}
                              alt={website.name}
                              width={24}
                              height={24}
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
                              className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors truncate block"
                            >
                              {website.name}
                            </Link>
                            <span className="text-xs text-slate-500 truncate block">
                              {website.subcategory || website.category}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <Link
                            href={`/resources/${website.id}`}
                            className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
                          >
                            Details
                          </Link>
                          <a
                            href={website.url}
                            target="_self"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-2xs"
                          >
                            <span>Open</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6 text-slate-500 text-xs sm:text-sm">
                    No recently accessed study portals. Portals you explore will appear here for fast resuming.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: SAVED BOOKMARKS */}
          {activeTab === "saved" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    Saved Bookmarks ({savedWebsites.length})
                  </h2>
                  <p className="text-xs text-slate-500">
                    Your saved resources stored locally on this browser.
                  </p>
                </div>

                {savedWebsites.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearBookmarks}
                    className="text-xs font-medium text-slate-500 hover:text-rose-600 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear all</span>
                  </button>
                )}
              </div>

              {savedWebsites.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {savedWebsites.map((website) => (
                    <div
                      key={website.id}
                      className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-3"
                    >
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 p-1 flex items-center justify-center shrink-0">
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
                              showToast("Removed from saved bookmarks");
                            }}
                            className="p-1.5 rounded-lg text-blue-600 hover:bg-slate-100 transition-colors cursor-pointer"
                            title="Remove bookmark"
                            aria-label={`Remove ${website.name} from bookmarks`}
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
                          <p className="text-xs text-slate-500 line-clamp-2 mt-0.5">
                            {website.description}
                          </p>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                        <Link
                          href={`/resources/${website.id}`}
                          className="flex-1 py-1.5 text-center text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
                        >
                          Details
                        </Link>
                        <a
                          href={website.url}
                          target="_self"
                          rel="noopener noreferrer"
                          className="flex-1 py-1.5 text-center text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center justify-center gap-1 shadow-2xs"
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
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center mx-auto mb-2">
                    <Bookmark className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">No saved resources</h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Click the bookmark icon on any educational resource across the directory to save it here for quick study access.
                  </p>
                  <div className="pt-3">
                    <Link
                      href="/resources"
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium transition-colors shadow-2xs"
                    >
                      <span>Explore Directory</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: HISTORY */}
          {activeTab === "history" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    Browsing History ({recentWebsites.length})
                  </h2>
                  <p className="text-xs text-slate-500">
                    Recent study websites and portals you have accessed.
                  </p>
                </div>

                {recentWebsites.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearHistory}
                    className="text-xs font-medium text-slate-500 hover:text-rose-600 flex items-center gap-1 cursor-pointer transition-colors"
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
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 p-1 flex items-center justify-center shrink-0">
                          <Image
                            src={website.logo || getFaviconUrl(website.url)}
                            alt={website.name}
                            width={28}
                            height={28}
                            unoptimized
                            style={{ width: "auto", height: "auto" }}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <div className="min-w-0">
                          <Link
                            href={`/resources/${website.id}`}
                            className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors truncate block"
                          >
                            {website.name}
                          </Link>
                          <span className="text-xs text-slate-500 truncate block">
                            {website.subcategory || website.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <Link
                          href={`/resources/${website.id}`}
                          className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
                        >
                          Details
                        </Link>
                        <a
                          href={website.url}
                          target="_self"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-2xs"
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
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">No browsing history</h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Portals you open while studying will be logged here so you never lose track of what you were reviewing.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: SETTINGS & PREFERENCES */}
          {activeTab === "settings" && (
            <div className="space-y-6">
              {/* Target Examination Switcher */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm sm:text-base font-bold text-slate-900">
                    Target Examination Goal
                  </h2>
                  <span className="text-xs text-slate-400">Click to switch</span>
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
                          showToast(`Target exam updated to ${goal.label}`);
                        }}
                        className={`p-3 rounded-xl text-left transition-colors border cursor-pointer ${
                          isSelected
                            ? "bg-slate-900 text-white border-slate-900 shadow-2xs"
                            : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200/80"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-xs font-bold truncate">{goal.label}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />}
                        </div>
                        <span className={`text-[11px] block mt-0.5 ${isSelected ? "text-slate-300" : "text-slate-400"}`}>
                          {goal.category}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Student Display Name */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-3">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-slate-500" />
                  <h2 className="text-sm sm:text-base font-bold text-slate-900">
                    Student Display Name
                  </h2>
                </div>
                <form onSubmit={handleSaveProfile} className="flex flex-col sm:flex-row gap-2.5 max-w-md">
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="Enter your name"
                    className="flex-1 px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium text-slate-900"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors shrink-0 shadow-2xs cursor-pointer"
                  >
                    Update Name
                  </button>
                </form>
              </div>

              {/* Support Platform / Domain, Server & API Hosting */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200">
                    <Heart className="w-4 h-4 fill-slate-700 text-slate-700" />
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                      Support Free Student Resources
                    </h2>
                    <p className="text-xs text-slate-500">
                      Domain, Server & API Maintenance
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <Globe className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                    <span className="font-bold text-slate-800 block text-xs">Website Domain</span>
                    <span className="text-[11px] text-slate-500 block">Annual domain renewal</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <Server className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                    <span className="font-bold text-slate-800 block text-xs">Cloud Server</span>
                    <span className="text-[11px] text-slate-500 block">Fast bandwidth & notes</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <Cpu className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                    <span className="font-bold text-slate-800 block text-xs">Directory APIs</span>
                    <span className="text-[11px] text-slate-500 block">Search & mirror indexing</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Study with Gaurav is completely open and free with zero subscriptions or paywalls. Micro-donations directly support our domain renewal, server bandwidth, and indexing APIs to keep study materials online for all students.
                </p>

                <div className="pt-1">
                  <Link
                    href="/donate"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-lg transition-colors shadow-2xs"
                  >
                    <span>Support via UPI or QR Code</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Platform Transparency & Legal */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-3">
                <h2 className="text-sm sm:text-base font-bold text-slate-900">
                  Platform Information & Policies
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-medium text-slate-700">
                  <Link
                    href="/about"
                    className="p-3 rounded-lg bg-slate-50 hover:bg-slate-100 flex items-center gap-2 transition-colors border border-slate-100"
                  >
                    <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>About Us</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="p-3 rounded-lg bg-slate-50 hover:bg-slate-100 flex items-center gap-2 transition-colors border border-slate-100"
                  >
                    <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Contact</span>
                  </Link>
                  <Link
                    href="/privacy"
                    className="p-3 rounded-lg bg-slate-50 hover:bg-slate-100 flex items-center gap-2 transition-colors border border-slate-100"
                  >
                    <Shield className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Privacy Policy</span>
                  </Link>
                  <Link
                    href="/terms"
                    className="p-3 rounded-lg bg-slate-50 hover:bg-slate-100 flex items-center gap-2 transition-colors border border-slate-100"
                  >
                    <FileText className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Terms of Service</span>
                  </Link>
                </div>
              </div>

              {/* Local Storage & Data Management */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-3">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Local Device Data Management
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Your preferences and history are stored locally in your browser. You can reset or clear them at any time.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleClearHistory}
                    className="px-3.5 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors cursor-pointer"
                  >
                    Clear Browsing History
                  </button>
                  <button
                    type="button"
                    onClick={handleResetDefaults}
                    className="px-3.5 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                    <span>Reset Preferences to Default</span>
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
