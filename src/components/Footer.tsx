"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/config";

// Colorful social icons
const GEmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 6.5l9 6.5 9-6.5v11.5c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6.5z" fill="#4285F4"/>
    <path d="M3 6.5l9 6.5 9-6.5v11.5c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6.5z" fill="#34A853"/>
    <path d="M21 6.5v11.5c0 1.1-.9 2-2 2h-4v-8l5-3.5z" fill="#FBBC05"/>
    <path d="M3 6.5v11.5c0 1.1.9 2 2 2h4v-8l-5-3.5z" fill="#4285F4"/>
    <path d="M12 13L3 6.5C3.3 6.2 3.6 6 4 6h16c.4 0 .7.2 1 .5L12 13z" fill="#EA4335"/>
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...props}>
    <defs>
      <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2">
        <stop offset="0%" stopColor="#feda75" />
        <stop offset="25%" stopColor="#fa7e1e" />
        <stop offset="50%" stopColor="#d62976" />
        <stop offset="75%" stopColor="#962fbf" />
        <stop offset="100%" stopColor="#4f5bd5" />
      </linearGradient>
    </defs>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" fill="url(#ig-grad)" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="#fff" strokeWidth="2" fill="none" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" stroke="#fff" strokeWidth="2" />
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke="#fff" strokeWidth="2" fill="none" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="#181717" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
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
            <a href="mailto:gaurav1000m@gmail.com" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:shadow-md transition-all border border-slate-200">
              <GEmailIcon />
            </a>
            <a href="https://instagram.com/studywithgaurav0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:shadow-md transition-all border border-slate-200">
              <InstagramIcon />
            </a>
            <a href="https://github.com/Gaurav1000m" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:shadow-md transition-all border border-slate-200">
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
