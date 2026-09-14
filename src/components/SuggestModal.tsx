"use client";

import { useEffect, useState } from "react";
import { X, Globe, ExternalLink, Loader2 } from "lucide-react";

interface SuggestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfadTCSm4pi3b7eqvFE4kDp3rmzLuGYd2llaO6TW_WmcI8zhQ/viewform";

export function SuggestModal({ isOpen, onClose }: SuggestModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Lock body scroll on open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsLoading(true);
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-xs animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-slide-up"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 bg-slate-50/90 border-b border-slate-200 shrink-0 gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200/80 shrink-0 shadow-2xs">
              <Globe className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 id="modal-title" className="text-base sm:text-lg font-black text-slate-900 leading-tight truncate">
                Suggest a Website / Feedback
              </h3>
              <p className="text-xs text-slate-500 truncate">
                Help us expand this verified student directory.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-blue-600 hover:text-blue-700 text-xs font-bold transition-colors border border-slate-200 shadow-2xs"
              title="Open Google Form in a new tab"
            >
              <span>Open in Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="min-w-[40px] min-h-[40px] rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/70 flex items-center justify-center transition-colors cursor-pointer"
              title="Close modal"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body with Fallback & Loading Indicator */}
        <div className="relative p-0 overflow-hidden flex-1 min-h-[60vh] sm:min-h-[70vh] bg-slate-50">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/90 backdrop-blur-xs gap-3">
              <Loader2 className="w-7 h-7 text-blue-600 animate-spin" />
              <p className="text-xs font-bold text-slate-600">Loading Google Form...</p>
            </div>
          )}

          <iframe
            src={`${GOOGLE_FORM_URL}?embedded=true`}
            title="Educational Resource Suggestion & Review Form"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            onLoad={() => setIsLoading(false)}
            className="w-full h-full min-h-[60vh] sm:min-h-[70vh] border-0"
          >
            Loading form...
          </iframe>
        </div>

        {/* Modal Bottom Fallback Toolbar */}
        <div className="px-4 py-3 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-xs text-slate-500 shrink-0">
          <span>Having trouble loading inside this window?</span>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-700 hover:underline"
          >
            <span>Open Google Form directly</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
