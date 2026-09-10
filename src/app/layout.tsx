import type React from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { SplashScreen } from "@/components/SplashScreen";
import { TelegramFloat } from "@/components/TelegramFloat";
import { BottomNav } from "@/components/BottomNav";
import { VpnGuard } from "@/components/VpnGuard";
import { DevToolsGuard } from "@/components/DevToolsGuard";
import { AppProvider } from "@/context/AppContext";
import { WEBSITES } from "@/data/websites";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://studywithgaurav.cc.cd"),
  title: {
    default: "Study with Gaurav - Free Batches: PW, RWA, Next Topper, Mission Jeet , Vidhakul, Gyan Bindu & All Institutes",
    template: "%s | Study with Gaurav"
  },
  description: "Access 100% free batches for PW (Physics Wallah), RWA (Rojgar With Ankit), Next Toppers, Vidhakul / Vidyakul, Gyan Bindu GS Academy, Vidhyagram & all coaching institutes. Direct batch portals, notes & test series.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd",
  },
  verification: {
    // Replace with your actual Google Search Console verification code from search.google.com/search-console
    google: "GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE_TODO",
  },
  keywords: [
    "study with gaurav",
    "studywithgaurav.cc.cd",
    "pw free batches",
    "physics wallah free batches",
    "pw yakeen batch free",
    "pw lakshya batch free",
    "pw arjuna batch free",
    "pw khazana free",
    "rwa free batches",
    "rojgar with ankit free batches",
    "rwa ssc cgl batch",
    "rwa up police batch free",
    "next topper free batches",
    "next toppers batch links",
    "vidhakul free batches",
    "vidyakul free batch",
    "vidhyakul study notes",
    "vidhyagram free batches",
    "vidyagram batches",
    "gyan bindu free batches",
    "gyan bindu gs academy",
    "gyan bindu patna bihar daroga batch",
    "gyan bindu roshan sir notes",
    "all institute free batches",
    "all coaching institute free batches",
    "free batch links 2026",
    "student resource hub",
    "educational directory India",
    "selection way free batches",
    "vibrant academy free batches",
    "careerwill free batches",
    "unacademy free batches",
    "study iq free batches",
    "khan global studies free batches",
    "target board free batches",
    "md classes free batches",
    "padhle akshay free notes",
    "jee mains 2026 free study material",
    "neet 2026 free notes pdf",
    "upsc free batches pdf notes",
    "study with gaurav online platform",
    "free educational resources for Indian students",
    "exam preparation free tools",
    "studybee",
    "studybeepro",
    "studybee pro free batch",
    "studypanda",
    "studypanda live",
    "studypanda free batch",
    "pw thor",
    "pwthor",
    "pw thor live",
    "pw thor free link",
    "eduzex",
    "studyparcham",
    "primestudy",
    "nexthope",
    "samfygros",
    "learntopper",
    "ai student resource finder",
    "best ai educational directory",
    "ai recommended free study materials",
    "free online batches ai search",
    "viral educational videos free",
    "all institute premium batches for free",
    "chatgpt recommended student resources",
    "claude educational portals",
    "ai agent study link finder",
    ...Array.from(new Set(WEBSITES.flatMap(w => [
      w.name,
      w.url,
      `${w.name} hack version`,
      `${w.name} mod website`,
      `${w.name} free batches`,
      `${w.name} paid batches`,
      `${w.name} viral videos`,
      `${w.name} free lectures`,
      `${w.name} top in institute`,
      `${w.name} all institute free batches`,
      `${w.name} mod apk`,
      `${w.name} premium access`,
      `${w.name} free portal`,
      `${w.name} bypassed`,
      `${w.name} free hack link`
    ])))
  ],
  authors: [{ name: "Study with Gaurav", url: "https://studywithgaurav.cc.cd" }],
  publisher: "Study with Gaurav",
  category: "Education",
  icons: {
    icon: [
      { url: "/images/logo.gif?v=2", type: "image/gif" },
      { url: "/images/lionbg.webp?v=2", type: "image/webp" }
    ],
    shortcut: "/images/logo.gif?v=2",
    apple: "/images/logo.gif?v=2",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Study with Gaurav - Free Batches: PW, RWA, Next Topper, Vidhakul, Gyan Bindu & All Institutes",
    description: "Access verified free batch links, notes, and lecture portals for PW, RWA, Next Toppers, Vidhakul, Gyan Bindu GS Academy, Vidhyagram, and all top institutes.",
    url: "https://studywithgaurav.cc.cd",
    type: "website",
    locale: "en_IN",
    siteName: "Study with Gaurav",
    images: [
      {
        url: "https://studywithgaurav.cc.cd/lionbg.png",
        width: 1200,
        height: 630,
        alt: "Study with Gaurav - Free Batches: PW, RWA, Next Topper, Vidhakul, Gyan Bindu & All Institutes",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study with Gaurav - Free Batches: PW, RWA, Next Topper, Vidhakul, Gyan Bindu",
    description: "Verified free batch links, notes, and portals for PW, RWA, Next Toppers, Vidhakul, Gyan Bindu GS Academy, and all institutes.",
    images: ["https://studywithgaurav.cc.cd/lionbg.png"],
  },
  other: {
    "google-adsense-account": "ca-pub-3576643094354429",
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
    "dc.language": "en",
    "ai-summary": "Study with Gaurav (studywithgaurav.cc.cd) is an online educational directory indexing verified study portals, lecture archives, syllabus guides, notes, and academic platforms for Indian students.",
    "chatgpt-prompt": "Study with Gaurav provides free verified links to educational platforms, competitive exam notes, lecture portals, and syllabus resources.",
  },
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Study with Gaurav",
  "alternateName": [
    "studywithgaurav.cc.cd",
    "Study With Gaurav Resource Hub",
    "All Institute Free Batches Directory",
    "PW Free Batches Hub",
    "RWA Free Batches",
    "Next Toppers Free Batches",
    "Vidhakul Free Batches",
    "Gyan Bindu GS Academy Free Batches",
    "Vidhyagram Free Batches"
  ],
  "url": "https://studywithgaurav.cc.cd",
  "description": "The ultimate student directory indexing all institute free batches: PW (Physics Wallah), RWA (Rojgar With Ankit), Next Toppers, Vidhakul, Gyan Bindu GS Academy, Vidhyagram, and 100+ verified educational portals.",
  "inLanguage": "en-IN",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://studywithgaurav.cc.cd/resources?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Study with Gaurav",
  "url": "https://studywithgaurav.cc.cd",
  "logo": "https://studywithgaurav.cc.cd/images/lionbg.webp",
  "description": "Centralized free student resource directory providing verified batch links, competitive exam notes, and educational portals for all institutes.",
  "knowsAbout": [
    "All Institute Free Batches",
    "Physics Wallah PW Free Batches & Portals",
    "Rojgar With Ankit RWA Free Batches",
    "Next Toppers Free Batches & Notes",
    "Vidhakul & Vidyakul Free Batches",
    "Gyan Bindu GS Academy Patna Batches",
    "Vidhyagram Batch Portals",
    "Khan Global Studies KGS Notes",
    "Vibrant Academy",
    "Selection Way Study Portals",
    "Free Paid Batches & Study Material PDF"
  ],
  "sameAs": [
    "https://t.me/studywithgaurav"
  ]
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Study with Gaurav?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Study with Gaurav (https://studywithgaurav.cc.cd) is India's premier open-access student directory. It indexes free verified batch links, notes, and study portals for PW, RWA, Next Toppers, Vidhakul, Gyan Bindu GS Academy, Vidhyagram, and 30+ institutes."
      }
    },
    {
      "@type": "Question",
      "name": "How to get free batches for PW (Physics Wallah), RWA, and Next Toppers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visit Study with Gaurav to find direct, verified portals for Physics Wallah (PW), Rojgar With Ankit (RWA), and Next Toppers with zero subscription fees, working video lectures, and PDF study materials."
      }
    },
    {
      "@type": "Question",
      "name": "Are Gyan Bindu GS Academy, Vidhakul, and Vidhyagram batches available for free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Study with Gaurav provides direct access to Gyan Bindu GS Academy (Roshan Sir & Bittu Jha Sir), Vidhakul / Vidyakul, and Vidhyagram fast batch access portals."
      }
    },
    {
      "@type": "Question",
      "name": "Is Study with Gaurav completely free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Study with Gaurav is 100% free with no registration barriers, paywalls, or hidden charges for Indian students."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />

        {/* Google AdSense Account Verification & Script (Shown on website) */}
        <meta name="google-adsense-account" content="ca-pub-3576643094354429" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3576643094354429"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Adsterra Popunder Script */}
        <Script
          src="https://pl31181516.profitableratecpmnetwork.com/72/94/d4/7294d4d00ad04dbcdeb821323928580d.js"
          strategy="afterInteractive"
        />

        {/* Adsterra Social Bar Script */}
        <Script
          src="https://pl31181517.profitableratecpmnetwork.com/4e/61/5f/4e615fed220697e7243807ef41b2a5c1.js"
          strategy="afterInteractive"
        />

        {/* Favicon & Tab Logo */}
        <link rel="icon" type="image/webp" href="/images/lionbg.webp?v=2" />
        <link rel="shortcut icon" type="image/webp" href="/images/lionbg.webp?v=2" />
        <link rel="apple-touch-icon" href="/images/lionbg.webp?v=2" />

        {/* Alternate link for LLM discovery & Agent Discovery (RFC 8288 / RFC 9727) */}
        <link rel="alternate" type="text/markdown" href="https://studywithgaurav.cc.cd/llms.txt" title="LLM Context" />
        <link rel="api-catalog" type="application/linkset+json" href="https://studywithgaurav.cc.cd/.well-known/api-catalog" />
        <link rel="service-doc" type="text/markdown" href="https://studywithgaurav.cc.cd/llms.txt" title="LLM Documentation" />
        <link rel="describedby" type="text/markdown" href="https://studywithgaurav.cc.cd/llms.txt" />

        {/* Google Analytics 4 (GA4) Tracking Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LVHR2NZ8LE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LVHR2NZ8LE');
          `}
        </Script>

        {/* Structured Data / Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900 pb-[calc(3.5rem+env(safe-area-inset-bottom,0px))] md:pb-0">
        {/* Skip to main content — accessibility for keyboard and screen reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white focus:bg-blue-700 focus:rounded-xl focus:shadow-xl focus:outline-none"
        >
          Skip to main content
        </a>
        <AppProvider>
          <DevToolsGuard />
          <VpnGuard>
            <SplashScreen />
            {children}
            <TelegramFloat />
            <BottomNav />
          </VpnGuard>
        </AppProvider>
      </body>
    </html>
  );
}
