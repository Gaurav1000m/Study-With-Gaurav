"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FlipTextProps {
  words: string[];
  className?: string;
  interval?: number;
}

export function FlipText({ words, className, interval = 2500 }: FlipTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={cn("inline-flex relative overflow-hidden align-bottom", className)}>
      <span className="invisible" aria-hidden="true">
        {/* Render the longest word invisibly to maintain width */}
        {words.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>
      {words.map((word, i) => {
        let translateClass = "";
        let opacityClass = "opacity-0";
        
        if (i === index) {
          translateClass = "translate-y-0";
          opacityClass = "opacity-100";
        } else if (i === (index - 1 + words.length) % words.length) {
          // The one that just left (goes up)
          translateClass = "-translate-y-full";
        } else {
          // The ones waiting (start below)
          translateClass = "translate-y-full";
        }

        return (
          <span
            key={word}
            className={cn(
              "absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out whitespace-nowrap",
              translateClass,
              opacityClass
            )}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
}
