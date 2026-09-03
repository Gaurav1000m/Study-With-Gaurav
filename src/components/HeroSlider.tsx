"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface HeroSlide {
  id: string;
  title: string;
  link?: string;
  image: string;
  bgColor?: string;
}

export const MAIN_HERO_SLIDES: HeroSlide[] = [
  {
    id: "swg-brand-gold",
    title: "Study With Gaurav",
    link: "/resources",
    image: "/images/ChatGPT Image Sep 2, 2026, 11_50_17 PM.png",
  },
  {
    id: "swg-brand-banner",
    title: "Study With Gaurav Free Resources",
    link: "/resources",
    image: "/images/ChatGPT Image Sep 2, 2026, 11_42_25 PM.png",
    bgColor: "#ffffff",
  },
  {
    id: "swg-brand-white",
    title: "Study With Gaurav Community",
    link: "/resources",
    image: "/images/swg-brand-white.png",
    bgColor: "#ffffff",
  },
  {
    id: "defence-batches",
    title: "PW Defence Batches",
    link: "/categories/physics-wallah",
    image: "/images/heroslide.webp",
    bgColor: "#4e1414",
  },
  {
    id: "next-toppers-class9",
    title: "Next Toppers Class 9th Aarambh 2.0",
    link: "/categories/next-toppers",
    image: "/images/heroslider2.jpg",
  },
  {
    id: "rwa-govt",
    title: "Rojgar With Ankit Govt Batches",
    link: "/categories/rojgar-with-ankit-rwa",
    image: "/images/heroslider3.jpg",
  },
  {
    id: "next-toppers-jee",
    title: "Next Toppers JEE Drona 2.0",
    link: "/categories/next-toppers",
    image: "/images/heroslider4.png",
  },
  {
    id: "iit-school-p2",
    title: "IIT School P2 Batch JEE",
    link: "/categories/iit-school",
    image: "/images/heroslider5.png",
  },
  {
    id: "unacademy",
    title: "Unacademy Learning Platform",
    link: "/categories/unacademy",
    image: "/images/heroslider6.png",
    bgColor: "#ffffff",
  },
  {
    id: "selection-way",
    title: "SelectionWay Platform Launch",
    link: "/resources",
    image: "/images/heroslider7.jpg",
    bgColor: "#1e2023",
  },
  {
    id: "batch-commando",
    title: "Batch 2.0 Classes 9th-12th",
    link: "/resources",
    image: "/images/heroslider8.jpg",
    bgColor: "#200000",
  },
];

interface HeroSliderProps {
  slides?: HeroSlide[];
  autoPlayInterval?: number;
  className?: string;
}

export function HeroSlider({
  slides = MAIN_HERO_SLIDES,
  autoPlayInterval = 3500,
  className = "",
}: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const dragStartX = useRef(0);
  const dragEndX = useRef(0);
  const isDragging = useRef(false);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Autoplay
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPaused, slides.length, autoPlayInterval, nextSlide]);

  const triggerManualInteraction = () => {
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    triggerManualInteraction();
    dragStartX.current = e.targetTouches[0].clientX;
    dragEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    dragEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = dragStartX.current - dragEndX.current;
    if (Math.abs(diff) > 35) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  // Pointer / Mouse handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    triggerManualInteraction();
    dragStartX.current = e.clientX;
    dragEndX.current = e.clientX;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    dragEndX.current = e.clientX;
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = dragStartX.current - dragEndX.current;
    if (Math.abs(diff) > 35) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  return (
    <div
      className={cn("w-full relative select-none", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      aria-label="Image Banner Carousel"
    >
      {/* Pure Image Banner Container */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-sm border border-slate-100 aspect-[16/6] xs:aspect-[16/5.5] sm:aspect-[16/5] bg-slate-900 cursor-default">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              aria-hidden={!isActive}
              className={cn(
                "absolute inset-0 w-full h-full block transition-opacity duration-500 ease-in-out select-none pointer-events-none",
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              )}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                unoptimized
                sizes="(max-width: 768px) 100vw, 1000px"
                className="object-cover object-center w-full h-full pointer-events-none"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeroSlider;
