"use client";

import { Search, Compass, ExternalLink } from "lucide-react";

export function WhySection() {
  return (
    <section className="w-full bg-slate-50 py-16 sm:py-20 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading + Text */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why We Built This
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                Students often rely on dozens of websites for learning, coding, exam preparation, documentation, scholarships, career opportunities and productivity. Finding the right resource can take unnecessary time.
              </p>
              <p className="font-semibold text-slate-800">
                This platform brings those useful resources together in one organized place so students can discover and access them quickly.
              </p>
            </div>
          </div>

          {/* Right Column: Flow visual */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 bg-white border border-slate-200 shadow-sm rounded-2xl max-w-lg w-full mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 w-full">
              
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                  <Search className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">Search</span>
              </div>

              {/* Arrow */}
              <div className="hidden sm:block text-slate-300 font-extrabold text-xl">&rarr;</div>
              <div className="sm:hidden text-slate-300 font-extrabold text-xl">&darr;</div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">Discover</span>
              </div>

              {/* Arrow */}
              <div className="hidden sm:block text-slate-300 font-extrabold text-xl">&rarr;</div>
              <div className="sm:hidden text-slate-300 font-extrabold text-xl">&darr;</div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">Visit</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
