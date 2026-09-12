"use client";

import Link from "next/link";
import { ShieldCheck, Award, HeartHandshake, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";

export function TestimonialsSection() {
  const commitments = [
    {
      icon: ShieldCheck,
      color: "text-blue-600 bg-blue-50 border-blue-100",
      title: "Zero Piracy & Safe Browsing",
      description:
        "We never distribute cracked software, bypassed paywalls, or pirated content. All links point to legitimate official platforms, open-source repositories, and legitimate public study archives.",
    },
    {
      icon: Award,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
      title: "Objective Pedagogical Reviews",
      description:
        "We evaluate learning resources through independent editorial reviews. Platforms are rated on syllabus relevance, instructional clarity, practice problems, and cost transparency.",
    },
    {
      icon: BookOpen,
      color: "text-purple-600 bg-purple-50 border-purple-100",
      title: "Structured Learning Pathways",
      description:
        "Rather than tossing endless links at students, we organize materials into logical roadmaps and milestone-driven study guides to prevent tutorial paralysis.",
    },
    {
      icon: HeartHandshake,
      color: "text-amber-600 bg-amber-50 border-amber-100",
      title: "Community-Driven & Student-First",
      description:
        "Maintained by students for students. If a platform changes its pricing, breaks its links, or introduces deceptive pop-ups, our editorial desk audits and updates it promptly.",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Guaranteed Editorial Standards</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Educational Commitment to Students
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Finding high-yield study materials online shouldn&apos;t require navigating deceptive ad traps, broken links, or low-quality content farms.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Policy Callout */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Want to learn how we evaluate, audit, and approve resources?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Read our full 5-point evaluation rubric, advertising disclosure, and correction policy.
            </p>
          </div>
          <Link
            href="/editorial-policy"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-700 transition-colors shadow-sm shrink-0"
          >
            <span>Read Editorial Policy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
