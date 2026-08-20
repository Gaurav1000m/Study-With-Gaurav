"use client";

import { ShieldCheck } from "lucide-react";

export function ExternalDisclaimer() {
  return (
    <section className="w-full bg-white py-12 border-b border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
          <div className="flex items-center gap-2 text-slate-700">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <h3 className="text-sm font-bold uppercase tracking-wider">
              About External Websites
            </h3>
          </div>
          
          <div className="text-xs sm:text-sm text-slate-500 leading-relaxed space-y-2">
            <p>
              This platform is a directory of external resources. When you click a resource, you are redirected to its respective website. Those websites are independently operated and are not owned or controlled by this platform unless explicitly stated.
            </p>
            <p>
              All trademarks, logos and brand names belong to their respective owners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
