"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export function ModernLearningSection() {
  return (
    <section className="w-full py-20 sm:py-32 bg-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div className="flex flex-col gap-8 text-center lg:text-left order-2 lg:order-1">
            
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Break Free From <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
                Traditional Searching.
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
              Stop wasting hours looking for the right study material. We&apos;ve curated the most advanced, high-quality educational resources so you can focus purely on mastering your skills.
            </p>
            
            <div className="pt-2 flex justify-center lg:justify-start">
              <Link 
                href="/categories"
                className="group flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-slate-800 hover:shadow-xl active:scale-95"
              >
                <span>Explore Modern Resources</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          {/* Image Side */}
          <div className="relative w-full flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-lg mx-auto">
              <Image 
                src="/images/tradition_transparent.webp" 
                alt="Traditional vs Modern Learning workflow diagram" 
                width={550}
                height={450}
                className="w-full h-auto object-contain filter drop-shadow-2xl transition-transform hover:scale-105 duration-500"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
