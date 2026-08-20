"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Search, Star, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Categories", href: "/categories", icon: LayoutGrid },
    { name: "Search", href: "/resources?focus=true", icon: Search },
    { name: "Popular", href: "/popular", icon: Star },
    { name: "Donate", href: "/donate", icon: Heart },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/90 pl-safe pr-safe pb-[env(safe-area-inset-bottom,0px)] shadow-[0_-4px_12px_rgba(0,0,0,0.06)] select-none">
      <div className="flex items-center justify-between h-14 px-1 max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href.split("?")[0]);
          const Icon = item.icon;
          const isDonate = item.name === "Donate";

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center flex-1 h-full py-1 transition-all relative active:scale-95",
                isActive
                  ? isDonate
                    ? "text-rose-600 font-bold"
                    : "text-blue-600 font-bold"
                  : "text-slate-500 hover:text-slate-900 font-medium"
              )}
            >
              {isActive && (
                <span
                  className={cn(
                    "absolute top-0 w-8 h-0.5 rounded-full",
                    isDonate ? "bg-rose-600" : "bg-blue-600"
                  )}
                />
              )}
              <Icon
                className={cn(
                  "w-5 h-5 transition-transform",
                  isActive && "scale-110",
                  isDonate && !isActive && "text-rose-500",
                  isDonate && isActive && "text-rose-600 fill-rose-600/20"
                )}
                strokeWidth={isActive ? 2.5 : 2}
              />
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
