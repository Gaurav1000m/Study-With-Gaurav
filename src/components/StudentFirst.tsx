"use client";

import { Eye, ShieldAlert, Layers } from "lucide-react";

export function StudentFirst() {
  const principles = [
    {
      icon: Eye,
      title: "Simple",
      desc: "No complicated navigation or bloated interfaces. Find what you need immediately."
    },
    {
      icon: ShieldAlert,
      title: "Useful",
      desc: "Focus on official resources, directories, documentation, and tools that students can actually use."
    },
    {
      icon: Layers,
      title: "Organized",
      desc: "Resources are grouped into logical, well-defined categories so they are easier to discover."
    }
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built With Students in Mind
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Our platform design revolves around accessibility, speed, and real utility.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col space-y-4 hover:border-blue-200 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Icon className="w-5 h-5" />
                </div>
                
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
