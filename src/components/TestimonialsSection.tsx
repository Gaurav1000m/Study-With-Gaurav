"use client";

import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const REVIEWS = [
  {
    id: 1,
    name: "Shabnam",
    text: "Great directory! It helped me find the best resources and batches for my preparation. Highly recommended for all students.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shabnam",
  },
  {
    id: 2,
    name: "Nitika",
    text: "Amazing platform with amazing links. Best study directory, it's definitely useful and fun.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nitika",
  },
  {
    id: 3,
    name: "Rahul",
    text: "Thanks for your constant effort!! Because of you my board exam preparation went pretty well. 🔥💯",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
  },
  {
    id: 4,
    name: "Aman",
    text: "Everything in one place! I don't have to search anywhere else now.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aman",
  },
];



export function TestimonialsSection() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            <span className="relative inline-block">
              Real stories.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-500" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent" strokeLinecap="round" />
              </svg>
            </span>{" "}
            Real results.
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 font-medium">
            See how students are winning with our directory
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left: Map */}
          <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none lg:w-full flex items-center justify-center">
            {/* We use a simplified SVG representation of an India Map outline or generic dots */}
            <div className="relative w-full h-full max-h-[500px]">
              {/* Map Image (India Outline) */}
              <img 
                src="https://scienceandfun.live/scienceandfun/testimonial-map.svg" 
                alt="Map of India" 
                className="w-full h-full object-contain" 
              />
              
              {/* Floating Avatars Removed as requested */}
            </div>
          </div>

          {/* Right: Review Slider */}
          <div className="relative w-full h-[500px] overflow-hidden rounded-3xl">
            <div className="absolute inset-0 flex flex-col pt-8 pb-8 w-full px-4 sm:px-8">
              <div className="flex flex-col gap-6 animate-marquee-vertical w-full h-max">
                
                {/* First Set of Reviews */}
                {REVIEWS.map((review) => (
                  <div 
                    key={`1-${review.id}`} 
                    className="relative w-full bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col gap-5 hover:shadow-md hover:bg-white transition-all shrink-0 group"
                  >
                    <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-100 group-hover:text-blue-200 transition-colors" />
                    <div className="flex items-center gap-4 relative z-10">
                      <img 
                        src={review.avatar} 
                        alt={review.name} 
                        className="w-14 h-14 rounded-full bg-slate-50 border-2 border-slate-100 shadow-sm"
                      />
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg">{review.name}</h4>
                        <div className="flex items-center gap-1 mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={cn(
                                "w-4 h-4",
                                i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-slate-100 text-slate-200"
                              )} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 text-base leading-relaxed font-medium relative z-10">
                      "{review.text}"
                    </p>
                  </div>
                ))}
                
                {/* Duplicate reviews to show scrolling content smoothly */}
                {REVIEWS.map((review) => (
                  <div 
                    key={`2-${review.id}`} 
                    className="relative w-full bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col gap-5 hover:shadow-md hover:bg-white transition-all shrink-0 group"
                  >
                    <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-100 group-hover:text-blue-200 transition-colors" />
                    <div className="flex items-center gap-4 relative z-10">
                      <img 
                        src={review.avatar} 
                        alt={review.name} 
                        className="w-14 h-14 rounded-full bg-slate-50 border-2 border-slate-100 shadow-sm"
                      />
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg">{review.name}</h4>
                        <div className="flex items-center gap-1 mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={cn(
                                "w-4 h-4",
                                i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-slate-100 text-slate-200"
                              )} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 text-base leading-relaxed font-medium relative z-10">
                      "{review.text}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Fade effect at top and bottom of slider */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
