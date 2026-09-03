"use client";

import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

interface LottieAnimationProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  url?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export function LottieAnimation({
  className = "",
  width = 180,
  height = 180,
  url = "/lottie/empty-saved.json",
  loop = true,
  autoplay = true,
}: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);

  // Normalize URL if someone passes a lottie.host/embed/... URL
  const normalizedUrl = url.replace("lottie.host/embed/", "lottie.host/");

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      animRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop,
        autoplay,
        path: normalizedUrl,
      });
    } catch (e) {
      console.warn("Failed to load Lottie animation", e);
    }

    return () => {
      animRef.current?.destroy();
      animRef.current = null;
    };
  }, [normalizedUrl, loop, autoplay]);

  return (
    <div
      ref={containerRef}
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
      aria-hidden="true"
    />
  );
}

export default LottieAnimation;
