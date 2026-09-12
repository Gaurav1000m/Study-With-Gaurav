"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Roadmap } from "@/data/roadmaps";
import {
  Compass,
  Clock,
  Layers,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  AlertTriangle,
  Code2,
  Terminal,
  Flag,
  ArrowRight,
  CheckSquare,
  Square,
  HelpCircle,
  Sparkles,
} from "lucide-react";

interface Props {
  roadmap: Roadmap;
}

export function RoadmapDetailClient({ roadmap }: Props) {
  const [completedTopics, setCompletedTopics] = useState<Record<string, boolean>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Load progress from localStorage safely on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`swg_roadmap_progress_${roadmap.slug}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCompletedTopics(parsed);
      }
    } catch {
      // ignore
    }
  }, [roadmap.slug]);

  const toggleTopic = (topicKey: string) => {
    const updated = { ...completedTopics, [topicKey]: !completedTopics[topicKey] };
    setCompletedTopics(updated);
    try {
      localStorage.setItem(`swg_roadmap_progress_${roadmap.slug}`, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const totalTopics = roadmap.stages.reduce((acc, s) => acc + s.coreTopics.length, 0);
  const completedCount = Object.values(completedTopics).filter(Boolean).length;
  const progressPercent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  return (
    <div className="space-y-6 sm:space-y-12 pb-24 md:pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 border border-slate-200/90 shadow-2xs space-y-4 sm:space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/roadmaps"
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline min-h-[36px]"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Learning Roadmaps</span>
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-xs font-medium text-slate-500">{roadmap.shortTitle}</span>
        </div>

        <div className="space-y-2.5 sm:space-y-3">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
              <Layers className="w-3.5 h-3.5" />
              {roadmap.stages.length} Structured Stages
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-slate-100 text-slate-700">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {roadmap.estimatedTime}
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
              Level: {roadmap.difficulty}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {roadmap.title}
          </h1>

          <p className="text-sm sm:text-lg text-slate-600 font-medium leading-relaxed">
            {roadmap.subtitle}
          </p>
        </div>

        <p className="text-xs sm:text-base text-slate-700 leading-relaxed border-t border-slate-100 pt-4 sm:pt-5">
          {roadmap.description}
        </p>

        {/* Progress bar tracker */}
        <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-slate-200 space-y-2.5 sm:space-y-3">
          <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-800">
            <span className="flex items-center gap-1.5 sm:gap-2">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Track Progress</span>
            </span>
            <span>
              {completedCount}/{totalTopics} mastered ({progressPercent}%)
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="text-[11px] sm:text-xs text-slate-500">
            Tip: Tap any topic below to mark complete and save your study progress.
          </p>
        </div>
      </div>

      {/* Prerequisites & Quick Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
        <div className="md:col-span-2 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-200/90 shadow-2xs space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-blue-600 shrink-0" />
            Recommended Prerequisites
          </h2>
          <ul className="space-y-2 sm:space-y-2.5">
            {roadmap.prerequisites.map((prereq, idx) => (
              <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{prereq}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-white space-y-3 sm:space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
              Study Methodology
            </span>
            <h3 className="text-xl font-bold">Curated & Tested Path</h3>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
              Designed according to cognitive load theory: 70% active coding and problem solving, 20% code review, and 10% theoretical reading.
            </p>
          </div>
          {roadmap.recommendedResourceCategory && (
            <Link
              href={`/categories/${roadmap.recommendedResourceCategory}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-blue-700 font-bold text-xs sm:text-sm hover:bg-blue-50 transition-colors"
            >
              <span>Explore Category Resources</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>

      {/* Roadmap Stages */}
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Step-by-Step Curriculum
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Follow each stage in sequential order. Do not skip milestones to build solid theoretical and practical foundations.
          </p>
        </div>

        <div className="space-y-3.5 sm:space-y-6">
          {roadmap.stages.map((stage) => (
            <div
              key={stage.stageNumber}
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4 sm:space-y-6"
            >
              {/* Stage Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3 sm:pb-5">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl sm:rounded-2xl bg-blue-600 text-white font-extrabold flex items-center justify-center text-sm sm:text-base shadow-2xs">
                    {stage.stageNumber}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-slate-900">
                      {stage.title}
                    </h3>
                    <p className="text-[11px] sm:text-sm text-slate-500 font-medium">
                      Estimated Duration: {stage.duration}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-base text-slate-700 leading-relaxed">
                {stage.overview}
              </p>

              {/* Core Topics Checklist */}
              <div className="space-y-2.5 sm:space-y-3">
                <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
                  Core Topics to Master (Tap to mark completed)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {stage.coreTopics.map((topic, tIdx) => {
                    const key = `${roadmap.slug}_s${stage.stageNumber}_t${tIdx}`;
                    const isDone = !!completedTopics[key];
                    return (
                      <button
                        key={tIdx}
                        type="button"
                        onClick={() => toggleTopic(key)}
                        className={`flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl border text-left transition-all text-xs sm:text-sm min-h-[44px] cursor-pointer ${
                          isDone
                            ? "bg-emerald-50/70 border-emerald-200 text-emerald-900"
                            : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 active:bg-slate-200"
                        }`}
                      >
                        {isDone ? (
                          <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        )}
                        <span className={isDone ? "line-through opacity-80" : "font-medium"}>
                          {topic}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Practice Exercises & Recommended Projects */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-slate-200/80 space-y-2 sm:space-y-3">
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Code2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Target Practice Exercises</span>
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {stage.practiceExercises.map((ex, eIdx) => (
                      <li key={eIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-slate-200/80 space-y-2 sm:space-y-3">
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Flag className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Portfolio Milestone Project</span>
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {stage.recommendedProjects.map((proj, pIdx) => (
                      <li key={pIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{proj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Stage Milestone Verification Check */}
              <div className="bg-emerald-50/60 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-emerald-200/80 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5 sm:space-y-1">
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Milestone Readiness Verification
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
                    {stage.milestoneCheck}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Common Pitfalls & Mistakes */}
      {roadmap.commonMistakes && roadmap.commonMistakes.length > 0 && (
        <div className="bg-amber-50/70 rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-amber-200 space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 text-amber-800 font-bold text-base sm:text-lg">
            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0" />
            <span>Common Pitfalls to Avoid in this Track</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            Most students abandon their learning journey or encounter severe plateaus because of these critical mistakes:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
            {roadmap.commonMistakes.map((mistake, mIdx) => (
              <div key={mIdx} className="bg-white/90 rounded-xl p-3 sm:p-4 border border-amber-200/70 text-xs sm:text-sm text-amber-950 font-medium flex items-start gap-2.5">
                <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-amber-200 text-amber-900 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  ✕
                </span>
                <span>{mistake}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Frequently Asked Questions */}
      {roadmap.faqs && roadmap.faqs.length > 0 && (
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4 sm:space-y-6">
          <h2 className="text-lg sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
            <span>Roadmap Frequently Asked Questions</span>
          </h2>
          <div className="space-y-2.5 sm:space-y-3">
            {roadmap.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl sm:rounded-2xl border border-slate-200 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-3.5 sm:p-5 flex items-center justify-between gap-3 bg-slate-50 hover:bg-slate-100 transition-colors font-semibold text-xs sm:text-base text-slate-800 cursor-pointer min-h-[44px]"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="p-3.5 sm:p-5 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Next Step / Back Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-slate-100 rounded-3xl border border-slate-200">
        <Link
          href="/roadmaps"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-slate-900"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          <span>All Roadmaps</span>
        </Link>
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors shadow-sm"
        >
          <span>Browse Vetted Tools & Platforms</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
