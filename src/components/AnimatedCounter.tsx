"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function AnimatedCounter({
  end,
  duration = 2200,
  suffix = "",
  prefix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const hasAnimated = useRef(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const rAFRef = useRef<number | null>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          let startTimestamp: number | null = null;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);

            // Smooth ease-out expo / cubic
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentCount = Math.round(easeProgress * end);

            if (currentCount !== countRef.current) {
              countRef.current = currentCount;
              setCount(currentCount);
            }

            if (progress < 1) {
              rAFRef.current = window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };

          rAFRef.current = window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (rAFRef.current !== null) {
        window.cancelAnimationFrame(rAFRef.current);
      }
    };
  }, [end, duration]);

  const formattedCount = new Intl.NumberFormat("en-US").format(count);

  return (
    <span
      ref={elementRef}
      className={cn("inline-block tabular-nums font-feature-settings-tnum", className)}
    >
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
}
