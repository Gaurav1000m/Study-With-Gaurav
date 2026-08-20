"use client";

import { Clock, Layers, Sparkles, Accessibility, Ban } from "lucide-react";

export function MissionSection() {
  const points = [
    {
      icon: Clock,
      title: "Reduce time spent searching",
      desc: "Stop browsing dozens of search pages; find resources indexed specifically for students."
    },
    {
      icon: Layers,
      title: "Organize useful resources",
      desc: "Portals are categorized cleanly by academic domains and functional utilities."
    },
    {
      icon: Sparkles,
      title: "Help students discover new platforms",
      desc: "Find emerging AI study bots, online courses, and developer utilities easily."
    },
    {
      icon: Accessibility,
      title: "Make resources easier to access",
      desc: "Direct link architecture allows launching tools with a single click."
    },
    {
      icon: Ban,
      title: "Keep experience distraction-free",
      desc: "Purely curated information. No advertisements, paywalls, or tracking redirects."
    }
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Mission
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-semibold">
            Our mission is simple: make useful educational resources easier to discover.
          </p>
        </div>

        {/* Cards Row/Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl flex flex-col space-y-3 shadow-sm hover:border-blue-200 hover:bg-white transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-sm font-bold text-slate-800 leading-snug">
                  {pt.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
