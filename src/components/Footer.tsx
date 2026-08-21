"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/config";

// Custom inline SVG social icons to prevent lucide-react export mismatches
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

interface FooterProps {
  onOpenSuggestModal: () => void;
}

export function Footer({ onOpenSuggestModal }: FooterProps) {
  return (
    <footer className="w-full bg-slate-50 text-slate-900 hidden md:block">
      {/* 1. CTA Section */}
      <div className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-slate-800 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-slate-800 blur-3xl opacity-50"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            Know a Great Resource?
          </h2>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight flex flex-wrap justify-center items-center gap-x-3 mb-8">
            <span>Help</span>
            <span className="inline-flex items-center justify-center bg-white text-slate-900 px-6 py-1 rounded-full shadow-lg transform -rotate-2">
              Thousands
            </span>
            <span>of Students!</span>
          </div>
          
          <button
            onClick={onOpenSuggestModal}
            className="group flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl"
          >
            <span>Suggest a Website</span>
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* 2. Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="flex-shrink-0 flex items-center justify-center">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-900 overflow-hidden flex items-center justify-center shadow-md relative">
              <Image
                src="/images/lionbg.webp"
                alt="Study with Gaurav logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-2xl text-slate-900 tracking-tight">
                {siteConfig.name}
              </span>
              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">
                Student Resource Directory
              </span>
            </div>
          </Link>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 font-medium text-slate-600">
          <Link href="/categories" className="hover:text-blue-700 transition-colors">Categories</Link>
          <Link href="/popular" className="hover:text-blue-700 transition-colors">Popular Resources</Link>
          <Link href="/resources" className="hover:text-blue-700 transition-colors">All Websites</Link>
          <button onClick={onOpenSuggestModal} className="hover:text-blue-700 transition-colors cursor-pointer">Suggest Resource</button>
          <Link href="/about" className="hover:text-blue-700 transition-colors">About Us</Link>
        </div>
      </div>

      {/* 3. Bottom Copyright & Socials */}
      <div className="bg-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-slate-500 text-center md:text-left leading-relaxed">
            <p>© {new Date().getFullYear()} {siteConfig.name}. Built for Students.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-600 hover:text-blue-700 hover:shadow-md transition-all border border-slate-200">
              <LinkedinIcon />
            </a>
            <a href="https://instagram.com" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-600 hover:text-blue-700 hover:shadow-md transition-all border border-slate-200">
              <InstagramIcon />
            </a>
            <a href="https://youtube.com" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-600 hover:text-blue-700 hover:shadow-md transition-all border border-slate-200">
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
