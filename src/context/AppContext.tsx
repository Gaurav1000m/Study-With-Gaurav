"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface UserProfile {
  name: string;
  examGoal: string;
}

interface AppContextType {
  bookmarks: string[];
  toggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  clearBookmarks: () => void;
  recentlyViewed: string[];
  addRecentlyViewed: (id: string) => void;
  clearRecentlyViewed: () => void;
  userProfile: UserProfile;
  updateProfile: (profile: Partial<UserProfile>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "Student",
    examGoal: "JEE / NEET / Competitive Exams",
  });

  // Ensure DOM never has .dark class (Pure light mode)
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.removeItem("swg_theme");
        localStorage.removeItem("theme");
      } catch {
        // Ignore
      }
    }
  }, []);

  // Hydrate state from localStorage safely after mount
  useEffect(() => {
    try {
      const savedBookmarks = localStorage.getItem("swg_bookmarks");
      if (savedBookmarks) {
        setBookmarks(JSON.parse(savedBookmarks));
      }

      const savedRecent = localStorage.getItem("swg_recent");
      if (savedRecent) {
        setRecentlyViewed(JSON.parse(savedRecent));
      }

      const savedProfile = localStorage.getItem("swg_profile");
      if (savedProfile) {
        setUserProfile(JSON.parse(savedProfile));
      }
    } catch {
      // Fallback
    }
  }, []);

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [id, ...prev];
      try {
        localStorage.setItem("swg_bookmarks", JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const isBookmarked = (id: string) => bookmarks.includes(id);

  const clearBookmarks = () => {
    setBookmarks([]);
    try {
      localStorage.removeItem("swg_bookmarks");
    } catch {
      // Ignore
    }
  };

  const addRecentlyViewed = (id: string) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((item) => item !== id);
      const updated = [id, ...filtered].slice(0, 20);
      try {
        localStorage.setItem("swg_recent", JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  const clearRecentlyViewed = () => {
    setRecentlyViewed([]);
    try {
      localStorage.removeItem("swg_recent");
    } catch {
      // Ignore
    }
  };

  const updateProfile = (profile: Partial<UserProfile>) => {
    setUserProfile((prev) => {
      const updated = { ...prev, ...profile };
      try {
        localStorage.setItem("swg_profile", JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  return (
    <AppContext.Provider
      value={{
        bookmarks,
        toggleBookmark,
        isBookmarked,
        clearBookmarks,
        recentlyViewed,
        addRecentlyViewed,
        clearRecentlyViewed,
        userProfile,
        updateProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
