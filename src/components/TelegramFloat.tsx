"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface TelegramFloatProps {
  telegramUrl?: string;
}

export function TelegramFloat({
  telegramUrl = "https://t.me/studywithgaurav0",
}: TelegramFloatProps) {
  return (
    <aside
      aria-label="Join Telegram Community"
      className="fixed right-3 sm:right-6 bottom-[calc(4.5rem+env(safe-area-inset-bottom,0px))] md:bottom-6 z-40 flex items-center group transition-all duration-300 ease-out"
    >
      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-[#0080c6] to-[#009beb] hover:from-[#0074b3] hover:to-[#008ecc] active:scale-95 text-white shadow-lg shadow-sky-600/30 hover:shadow-xl hover:shadow-sky-600/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0088cc] focus-visible:ring-offset-2"
        title="Join Telegram Community"
        aria-label="Join Telegram Community"
      >
        {/* Subtle pulsing ambient ring */}
        <span className="absolute inset-0 rounded-full bg-[#0088cc] animate-ping opacity-20 pointer-events-none" />

        {/* Paper Plane SVG */}
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white relative z-10 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-12 group-hover:-translate-y-0.5"
          aria-hidden="true"
        >
          <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701-.332 4.978c.488 0 .702-.223.974-.485l2.338-2.274 4.862 3.593c.897.495 1.543.24 1.768-.83l3.19-15.03c.327-1.31-.5-1.9-.136-.5z" />
        </svg>

        {/* Hover Tooltip Label for Desktop */}
        <span className="hidden md:block absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md pointer-events-none">
          Join Telegram Community
        </span>
      </a>
    </aside>
  );
}

