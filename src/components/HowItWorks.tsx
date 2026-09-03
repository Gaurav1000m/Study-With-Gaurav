"use client";

import { ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "SEARCH",
      desc: "Search for a topic, tool, platform or resource."
    },
    {
      num: "02",
      title: "DISCOVER",
      desc: "Browse curated websites organized into useful categories."
    },
    {
      num: "03",
      title: "VISIT",
      desc: "Click a resource and open the original website."
    }
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            A simple three-step discovery process
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
          {steps.map((st, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4 relative px-6">
              
              {/* Step number badge */}
              <div className="text-5xl font-black text-blue-200 tracking-tight select-none">
                {st.num}
              </div>

              {/* Title & Desc */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-slate-900 tracking-widest uppercase">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                  {st.desc}
                </p>
              </div>

              {/* Connecting arrows on desktop */}
              {idx < 2 && (
                <div className="hidden md:block absolute top-6 -right-4 translate-x-1/2 text-slate-300">
                  <ArrowRight className="w-5 h-5 stroke-[2]" />
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
