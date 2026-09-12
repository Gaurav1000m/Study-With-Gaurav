"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Layers, Bookmark, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useApp } from "@/context/AppContext";

export function BottomNav() {
  const pathname = usePathname();
  const { bookmarks } = useApp();

  interface NavItem {
    name: string;
    href: string;
    icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
    badge?: number;
    isAccent?: boolean;
  }

  const navItems: NavItem[] = [
    { name: "Home", href: "/", icon: Home },
    { name: "Resources", href: "/resources", icon: BookOpen },
    { name: "Categories", href: "/categories", icon: Layers },
    { name: "Saved", href: "/saved", icon: Bookmark, badge: bookmarks.length },
    { name: "Profile", href: "/profile", icon: User },
  ];

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/90 pl-safe pr-safe pb-[env(safe-area-inset-bottom,0px)] shadow-[0_-4px_12px_rgba(0,0,0,0.06)] select-none"
    >
      <div className="flex items-center justify-around h-14 px-1 max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center flex-1 h-full py-1 transition-all relative active:scale-95",
                isActive
                  ? item.isAccent
                    ? "text-rose-600 font-bold"
                    : "text-blue-600 font-bold"
                  : item.isAccent
                    ? "text-rose-500/80 hover:text-rose-600 font-medium"
                    : "text-slate-500 hover:text-slate-900 font-medium"
              )}
            >
              {isActive && (
                <span
                  className={cn(
                    "absolute top-0 w-8 h-0.5 rounded-full animate-fade-in",
                    item.isAccent ? "bg-rose-600" : "bg-blue-600"
                  )}
                />
              )}
              <div className="relative">
                <Icon
                  className={cn(
                    "w-5 h-5 transition-transform duration-200",
                    isActive && "scale-110",
                    item.isAccent && isActive && "fill-rose-600"
                  )}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="absolute -top-1 -right-2 min-w-[14px] h-[14px] px-0.5 rounded-full bg-blue-600 text-white text-[9px] font-extrabold flex items-center justify-center leading-none">
                    {item.badge > 99 ? "99+" : item.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] tracking-tight mt-0.5">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
