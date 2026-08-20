"use client";

import { useState, useEffect } from "react";
import { X, Send, CheckCircle2, Globe } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { CategoryId, SuggestionFormData } from "@/types/website";

interface SuggestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SuggestModal({ isOpen, onClose }: SuggestModalProps) {
  // Lock body scroll on open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 pt-safe pb-safe pl-safe pr-safe bg-slate-950/60 backdrop-blur-xs animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh] animate-slide-up"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 bg-slate-50 border-b border-slate-200 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200/80 shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 id="modal-title" className="text-base sm:text-lg font-bold text-navy-900 leading-tight">
                Suggest a Website
              </h3>
              <p className="text-xs text-slate-500">
                Help us expand this directory for all students.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="min-w-[44px] min-h-[44px] rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 flex items-center justify-center transition-colors"
            title="Close modal"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-0 overflow-hidden flex-1 min-h-[60vh] sm:min-h-[70vh]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfadTCSm4pi3b7eqvFE4kDp3rmzLuGYd2llaO6TW_WmcI8zhQ/viewform?embedded=true"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="w-full h-full min-h-[60vh] sm:min-h-[70vh] border-0"
          >
            Loading form...
          </iframe>
        </div>
      </div>
    </div>
  );
}
