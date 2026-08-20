"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function AnimatedCounter({
  end,
  duration = 6000,
  suffix = "",
  prefix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const hasAnimated = useRef(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let startTimestamp: number | null = null;
          
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeProgress * end);
            
            if (currentCount !== countRef.current) {
              countRef.current = currentCount;
              setCount(currentCount);
            }
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [end, duration]);

  const formattedCount = new Intl.NumberFormat('en-US').format(count);

  return (
    <span ref={elementRef} className={className}>
      {prefix}{formattedCount}{suffix}
    </span>
  );
}
