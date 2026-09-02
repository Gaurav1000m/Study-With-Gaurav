"use client";

import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

interface LottieVerifiedProps {
  className?: string;
  size?: number;
  url?: string;
}

export function LottieVerified({
  className = "",
  size = 32,
  url = "/lottie/verified.json",
}: LottieVerifiedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      animRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: url,
      });
    } catch (e) {
      console.warn("Failed to load Lottie animation", e);
    }

    return () => {
      animRef.current?.destroy();
      animRef.current = null;
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-label="Verified"
    />
  );
}

export default LottieVerified;
