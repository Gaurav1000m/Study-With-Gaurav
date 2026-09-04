"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { BookOpen, Search, PlusCircle, Menu, X, ShieldCheck, ChevronRight, Heart, Maximize, Minimize, Smartphone, Download, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useApp } from "@/context/AppContext";

interface HeaderProps {
  onOpenSuggestModal?: () => void;
  onFocusSearch?: () => void;
}

export function Header({ onOpenSuggestModal, onFocusSearch }: HeaderProps = {}) {
  const { bookmarks, userProfile } = useApp();
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAppBannerVisible, setIsAppBannerVisible] = useState(false);
  const lastScrollY = useRef(0);
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Do not show inside Android app wrapper or on download page
      if ((window as any).AndroidSecurityBridge) return;
      const dismissed = sessionStorage.getItem("swg_top_app_banner_dismissed");
      if (!dismissed && pathname !== "/download") {
        setIsAppBannerVisible(true);
      } else {
        setIsAppBannerVisible(false);
      }
    }
  }, [pathname]);

  const handleDismissBanner = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAppBannerVisible(false);
    sessionStorage.setItem("swg_top_app_banner_dismissed", "true");
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement || (document as any).webkitFullscreenElement));
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement && !(document as any).webkitFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
        } else if ((document.documentElement as any).webkitRequestFullscreen) {
          await (document.documentElement as any).webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        }
      }
    } catch (err) {
      console.warn("Fullscreen toggle error:", err);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const prev = lastScrollY.current;

      // Hide when scrolling down past 80px threshold
      if (currentY > prev && currentY > 80) {
        setIsHidden(true);
      }
      // Show when scrolling up by at least 5px
      else if (prev - currentY > 5) {
        setIsHidden(false);
      }

      setIsScrolled(currentY > 10);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    { name: "Categories", href: "/categories" },
    { name: "Saved", href: "/saved", badge: bookmarks.length },
    { name: "Popular", href: "/popular" },
    { name: "About", href: "/about" },
    { name: "Profile", href: "/profile" },
  ];

  const handleSearchClick = () => {
    if (onFocusSearch) {
      onFocusSearch();
    } else {
      const inputEl = document.querySelector<HTMLInputElement>("input[type='text']");
      if (inputEl) {
        inputEl.focus();
        inputEl.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        router.push("/resources?focus=true");
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 w-full bg-white/95 backdrop-blur-md transition-transform duration-300 ease-in-out border-b border-slate-100 pt-[env(safe-area-inset-top,0px)] pl-safe pr-safe",
          isScrolled ? "shadow-xs py-0.5" : "py-1 sm:py-2",
          isHidden ? "-translate-y-full" : "translate-y-0"
        )}
      >
        {/* Top App Banner upon Header */}
        {isAppBannerVisible && pathname !== "/download" && (
          <div className="w-full bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 text-white px-3 sm:px-6 py-1.5 sm:py-2 flex items-center justify-between gap-2 sm:gap-3 border-b border-white/15 text-xs shadow-xs relative z-50">
            <Link
              href="/download"
              className="flex items-center gap-2 min-w-0 flex-1 hover:opacity-95 transition-opacity"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md overflow-hidden bg-white/20 shrink-0 border border-white/30 relative">
                <Image
                  src="/black-and-white-portrait-of-a-lion.webp"
                  alt="Study With Gaurav App"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-1.5 min-w-0 truncate">
                <span className="font-extrabold text-white text-[11px] sm:text-xs tracking-tight truncate">
                  Study With Gaurav App
                </span>
                <span className="hidden sm:inline text-[11px] text-blue-100 truncate">
                  • 100+ Free Batches, Zero Ads (4.6 MB)
                </span>
                <span className="sm:hidden text-[10px] text-blue-100 truncate">
                  • Free (4.6 MB)
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-1.5 shrink-0">
              <Link
                href="/download"
                className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg bg-white text-blue-800 hover:bg-blue-50 font-bold text-[11px] sm:text-xs shadow-xs active:scale-95 transition-transform"
              >
                <Smartphone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>Get App</span>
              </Link>

              {/* Cross Button */}
              <button
                onClick={handleDismissBanner}
                aria-label="Dismiss app banner"
                className="min-w-[26px] min-h-[26px] p-1 rounded-md text-white/80 hover:text-white hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        )}

        <div className="w-full mx-auto px-3 sm:px-6 lg:px-8 xl:px-12 h-12 sm:h-14 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg py-1 pr-1.5"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 overflow-hidden flex items-center justify-center text-white shadow-2xs group-hover:scale-105 transition-transform duration-200 shrink-0 border border-slate-800 relative">
              <Image
                src="/images/lionbg.webp"
                alt="Study with Gaurav logo"
                width={36}
                height={36}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-extrabold text-slate-900 text-sm sm:text-base tracking-tight group-hover:text-blue-600 transition-colors truncate">
                Study with Gaurav
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-slate-400 hidden xs:inline-block truncate uppercase tracking-wider">
                Student Resource Hub
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Profile is mobile-only) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.filter((link) => link.name !== "Profile").map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5",
                    isActive
                      ? "bg-slate-900 text-white font-semibold shadow-2xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                  )}
                >
                  <span>{link.name}</span>
                  {link.badge !== undefined && link.badge > 0 && (
                    <span
                      className={cn(
                        "px-1.5 py-0.2 rounded-full text-[10px] font-bold",
                        isActive ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-700"
                      )}
                    >
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Mobile Action Button: Full Screen Toggle on Home page, Quick Search on other pages */}
            {isHomePage ? (
              <button
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? "Exit full screen" : "Enter full screen mode"}
                title={isFullscreen ? "Exit Full Screen" : "Full Screen Mode"}
                className={cn(
                  "md:hidden min-w-[36px] min-h-[36px] rounded-lg flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600",
                  isFullscreen
                    ? "bg-blue-50 text-blue-600 border border-blue-200"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200"
                )}
              >
                {isFullscreen ? (
                  <Minimize className="w-4 h-4" />
                ) : (
                  <Maximize className="w-4 h-4" />
                )}
              </button>
            ) : (
              <button
                onClick={handleSearchClick}
                aria-label="Search resources"
                className="md:hidden min-w-[36px] min-h-[36px] rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200 flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <Search className="w-4 h-4" />
              </button>
            )}

            {/* Desktop Quick Search Input Trigger */}
            <button
              onClick={handleSearchClick}
              className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-500 bg-slate-100 hover:bg-slate-200/80 hover:text-slate-900 rounded-lg border border-slate-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              title="Search resources (Press /)"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search resources...</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-semibold bg-white border border-slate-200 rounded text-slate-500">
                /
              </kbd>
            </button>

            {/* Donate Button (Mobile & Desktop) */}
            <Link
              href="/donate"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 active:bg-rose-800 rounded-lg transition-colors shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 min-h-[36px] sm:min-h-[40px]"
            >
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white shrink-0" />
              <span>Donate</span>
            </Link>

            {/* Profile Icon Button in Upper Header with User Avatar */}
            <Link
              href="/profile"
              className={cn(
                "inline-flex items-center gap-1.5 p-1 sm:px-2.5 sm:py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 min-h-[36px] sm:min-h-[40px] border shadow-2xs group",
                pathname === "/profile"
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "bg-slate-100 hover:bg-slate-200/90 text-slate-700 hover:text-slate-900 border-slate-200"
              )}
              title="Student Profile & Settings"
              aria-label="Student Profile"
            >
              <div className="w-7 h-7 sm:w-7 sm:h-7 rounded-full overflow-hidden shrink-0 border border-slate-300 shadow-xs relative bg-white">
                <Image
                  src="/images/profile-avatar.jpg"
                  alt="Student Profile"
                  width={28}
                  height={28}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  priority
                />
              </div>
              <span className="hidden sm:inline font-bold">
                {userProfile?.name && userProfile.name !== "Student"
                  ? userProfile.name.split(" ")[0]
                  : "Profile"}
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Dynamic spacer to push page content when top banner is visible */}
      {isAppBannerVisible && pathname !== "/download" && (
        <div className="h-8 sm:h-9" aria-hidden="true" />
      )}
    </>
  );
}
