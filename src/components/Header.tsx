"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Search, Heart, User, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { useApp } from "@/context/AppContext";
import { downloadStudyWithGauravApk } from "@/lib/downloadApk";

interface HeaderProps {
  onOpenSuggestModal?: () => void;
  onFocusSearch?: () => void;
}

export function Header({ onFocusSearch }: HeaderProps = {}) {
  const { bookmarks } = useApp();
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const prev = lastScrollY.current;

      // Hide when scrolling down past 120px threshold
      if (currentY > prev && currentY > 120) {
        setIsHidden(true);
      }
      // Show immediately when scrolling up by at least 3px
      else if (prev - currentY > 3) {
        setIsHidden(false);
      }

      setIsScrolled(currentY > 10);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  interface NavLink {
    name: string;
    href: string;
    badge?: number;
  }

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    { name: "Categories", href: "/categories" },
    { name: "Articles", href: "/articles" },
    { name: "Roadmaps", href: "/roadmaps" },
    { name: "Saved", href: "/saved", badge: bookmarks.length },
    { name: "About", href: "/about" },
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
        <div className="w-full mx-auto px-2.5 sm:px-6 lg:px-8 xl:px-12 h-12 sm:h-14 flex items-center justify-between gap-1.5 sm:gap-3">
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg py-1 min-w-0 shrink"
          >
            <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 overflow-hidden flex items-center justify-center text-white shadow-2xs group-hover:scale-105 transition-transform duration-200 shrink-0 border border-slate-800 relative">
              <Image
                src="/images/lionbg.webp"
                alt="Study with Gaurav logo"
                width={36}
                height={36}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col min-w-0 max-w-[125px] xs:max-w-[170px] sm:max-w-none">
              <span className="font-extrabold text-slate-900 text-xs xs:text-sm sm:text-base tracking-tight group-hover:text-blue-600 transition-colors truncate">
                Study with Gaurav
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-slate-400 hidden xs:inline-block truncate uppercase tracking-wider">
                Student Resource Hub
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Includes Profile with User icon) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => {
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
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Mobile Action: Donate Button (Mobile header bar only) */}
            <Link
              href="/donate"
              className="inline-flex md:hidden items-center gap-1 px-2.5 py-1 rounded-full text-xs font-extrabold text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 active:scale-95 transition-all shadow-xs border border-rose-400 min-h-[30px]"
              title="Support & Donate"
              aria-label="Donate to Study with Gaurav"
            >
              <Heart className="w-3.5 h-3.5 fill-white text-white animate-pulse" />
              <span>Donate</span>
            </Link>

            {/* Mobile Action: Quick Search Icon */}
            <button
              onClick={handleSearchClick}
              aria-label="Search resources"
              title="Search resources"
              className="md:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-slate-200/80 active:bg-slate-200 transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 shrink-0 cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* Download APK Button (Desktop Only) */}
            <button
              onClick={downloadStudyWithGauravApk}
              className="hidden md:inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 xs:px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-[11px] xs:text-xs sm:text-sm font-extrabold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg transition-colors shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 min-h-[30px] sm:min-h-[40px] shrink-0 cursor-pointer active:scale-95"
              title="Download Android APK (v1.0.4 - 4.6 MB)"
              aria-label="Download Android APK"
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="whitespace-nowrap font-bold">Download APK</span>
            </button>

            {/* Donate Button (Desktop) */}
            <Link
              href="/donate"
              className="hidden md:inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 active:bg-rose-800 rounded-lg transition-colors shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 min-h-[36px] sm:min-h-[40px]"
            >
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white shrink-0" />
              <span>Donate</span>
            </Link>

            {/* Profile User Icon beside Donate Button (Web View Only) */}
            <Link
              href="/profile"
              className={cn(
                "hidden md:inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg transition-colors border shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 active:scale-95 group shrink-0",
                pathname === "/profile"
                  ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                  : "bg-slate-100 hover:bg-slate-200/90 text-slate-700 hover:text-slate-900 border-slate-200"
              )}
              title="Student Profile & Settings"
              aria-label="Student Profile"
            >
              <User className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform group-hover:scale-110" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
