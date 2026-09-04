"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { BookOpen, Search, PlusCircle, Menu, X, ShieldCheck, ChevronRight, Heart, Maximize, Minimize, Smartphone, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { useApp } from "@/context/AppContext";

interface HeaderProps {
  onOpenSuggestModal?: () => void;
  onFocusSearch?: () => void;
}

export function Header({ onOpenSuggestModal, onFocusSearch }: HeaderProps = {}) {
  const { bookmarks } = useApp();
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const lastScrollY = useRef(0);
  const isHomePage = pathname === "/";

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

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

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
          isScrolled ? "shadow-xs py-1" : "py-1.5 sm:py-3",
          isHidden ? "-translate-y-full" : "translate-y-0"
        )}
      >
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

            {/* Get App Button (Desktop & Mobile) */}
            <Link
              href="/download"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 active:scale-95 rounded-lg transition-all shadow-xs min-h-[36px] sm:min-h-[40px] border border-blue-400/20"
              title="Download Study With Gaurav Android APK"
            >
              <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="hidden xs:inline">Get App</span>
              <span className="xs:hidden">App</span>
            </Link>

            {/* Donate Button (Mobile & Desktop) */}
            <Link
              href="/donate"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 active:bg-rose-800 rounded-lg transition-colors shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 min-h-[36px] sm:min-h-[40px]"
            >
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white shrink-0" />
              <span>Donate</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu & Overlay Backdrop */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-start">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            className="relative z-10 w-full bg-white border-b border-slate-200 shadow-2xl animate-slide-up flex flex-col max-h-[85vh] overflow-y-auto pt-safe pb-safe"
          >
            {/* Drawer Top Header */}
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center overflow-hidden border border-slate-800 shrink-0 relative">
                  <Image
                    src="/images/lionbg.webp"
                    alt="Study with Gaurav logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-bold text-navy-900 text-sm">Navigation</span>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
                className="min-w-[44px] min-h-[44px] rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Mobile Search Input Trigger */}
            <div className="p-4 border-b border-slate-100">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleSearchClick();
                }}
                className="w-full min-h-[48px] flex items-center justify-between px-3.5 py-2.5 text-sm text-slate-600 bg-slate-100 hover:bg-slate-200/70 rounded-xl border border-slate-200 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-slate-400" />
                  <span>Search resources...</span>
                </span>
                <kbd className="px-2 py-0.5 text-[10px] bg-white border border-slate-200 rounded font-semibold text-slate-500">
                  /
                </kbd>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-4 space-y-1.5">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "min-h-[48px] px-4 py-3 text-base font-semibold rounded-xl flex items-center justify-between transition-colors",
                      isActive
                        ? "bg-navy-900 text-white shadow-xs"
                        : "text-slate-700 hover:bg-slate-100 hover:text-navy-900 active:bg-slate-100"
                    )}
                  >
                    <span>{link.name}</span>
                    <ChevronRight
                      className={cn(
                        "w-4 h-4",
                        isActive ? "text-white" : "text-slate-400"
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Get Android App Banner in Mobile Drawer */}
            <div className="p-4 pt-2 border-t border-slate-100 bg-gradient-to-br from-indigo-50/70 to-blue-50/50">
              <Link
                href="/download"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-between p-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white rounded-xl shadow-md active:scale-98 transition-transform font-bold text-sm"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white shrink-0">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="leading-none text-white text-xs font-extrabold">Download Android App</p>
                    <p className="text-[10px] text-blue-100 font-medium mt-1">v1.0.0 (4.6 MB) • 100+ Free Batches</p>
                  </div>
                </div>
                <Download className="w-4 h-4 text-white shrink-0" />
              </Link>
            </div>

            {/* Donate Action in Mobile Menu */}
            <div className="p-4 pt-2 space-y-3 border-t border-slate-100 bg-slate-50/50">
              <Link
                href="/donate"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-rose-600 hover:bg-rose-700 active:bg-rose-800 rounded-xl transition-colors shadow-xs"
              >
                <Heart className="w-4 h-4" />
                <span>Support Us</span>
              </Link>

              <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Help keep the directory free</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

