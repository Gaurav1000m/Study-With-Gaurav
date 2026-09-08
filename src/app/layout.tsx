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
    default: "Study with Gaurav: Free JEE, NEET, SSC Notes & Batches",
    template: "%s | Study with Gaurav"
  },
  description: "Free JEE, NEET, SSC & Board exam resources — verified batch links, PDF notes, and 100+ portals like Physics Wallah, Unacademy, in one hub.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd",
  },
  verification: {
    // TODO: Replace with your actual Google Search Console verification code from search.google.com/search-console
    google: "GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE_TODO",
  },
  keywords: [
    "study with gaurav",
    "studywithgaurav.cc.cd",
    "all institute free batches",
    "all institute paid batches free",
    "all hack batches",
    "all study material",
    "mod website",
    "free mod apk",
    "free mod websites",
    "free paid batches",
    "mod apk study website",
    "free batch links 2026",
    "student resource hub",
    "educational directory India",
    "free batch links",
    "study with gaurav mod website",
    "study with gaurav hack batches",
    "study with gaurav free paid batches",
    "Physics Wallah",
    "Physics Wallah free mod apk",
    "Physics Wallah free paid batches",
    "Physics Wallah mod website",
    "PW OTT",
    "PW OTT free mod apk",
    "PW Pi Pro",
    "PW Pi Pro free paid batches",
    "Next Toppers",
    "Next Toppers free mod apk",
    "Next Toppers hack batches",
    "Next Toppers old batches",
    "MissionJEET",
    "Mission JEET Next",
    "Vibrant Academy",
    "Vibrant Academy free paid batches",
    "Vibrant Study Squad",
    "Munil Sir",
    "Munil Sir free paid batches",
    "Munil Sir Delta",
    "Rojgar With Ankit",
    "Rojgar With Ankit free mod apk",
    "RWA",
    "RWA free paid batches",
    "RWA Bhati Sir",
    "RWA Bhati Sir hack batches",
    "Science And Fun",
    "Science and Fun Ashu Sir",
    "Science and Fun free mod apk",
    "Just Padhle",
    "Padhle Akshay",
    "Padhle Akshay free mod apk",
    "Padhle Akshay free paid batches",
    "Padhle Akshay Batches",
    "Selection Way",
    "Selection Way mod website",
    "Master Sahab",
    "UnAcademy",
    "Unacademy free paid batches",
    "Test Book",
    "Topper's Wisdom",
    "Study IQ",
    "Khan Global Studies",
    "Khan Global Studies free paid batches",
    "KGS Khan Sir",
    "KGS Khan Sir free mod apk",
    "Gs Version",
    "GS Vision Dream Study",
    "GS Vision hack batches",
    "Futurekul",
    "Futurekul free mod website",
    "Futurekul Dream Study",
    "CDS JOURNEY",
    "Career Will",
    "Career Will free paid batches",
    "Sachin Academy",
    "Sachin Academy free mod apk",
    "Vidhyakul",
    "MD Classes",
    "Utkarsh Classes",
    "Utkarsh Classes free paid batches",
    "Target Board",
    "Target Board free study material",
    "Pinnacle Books",
    "Bookverse",
    "Apna College",
    "Test Ranker",
    "Education Baba",
    "free study notes PDF",
    "free competitive exam mod apk",
    "free batch mod website",
    "JEE NEET SSC free hack batches",
    "pw mod app download",
    "pw website hack link",
    "physics wallah free batch website",
    "pw lakshya batch free link",
    "pw arjuna batch free link",
    "pw yakeen batch free link",
    "free paid batch website",
    "all institute batches free pdf",
    "free batch telegram alternative",
    "rwa paid batch free link",
    "next toppers batch free link",
    "vibrant academy batch link",
    "kgs khan sir free batch link",
    "best website for free batches",
    "free jee main batch links 2026",
    "free neet batch links 2026",
    "free ssc cgl batch links 2026",
    "free pdf notes directory",
    "best student resource directory India",
    "competitive exam prep 2026",
    "study with gaurav official",
    "study with gaurav telegram link",
    "studywithgaurav",
    "study with gaurav free notes",
    "viral study material 2026",
    "pw khazana free link",
    "pw latest mod apk 2026",
    "yakeen batch latest free",
    "lakshya batch free link 2026",
    "arjuna batch free access",
    "jee mains 2026 latest syllabus notes free",
    "neet 2026 free study material pdf",
    "all institute hack links working",
    "free premium batches",
    "best student portal for free batches",
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
    title: "Study with Gaurav: Free JEE, NEET, SSC Notes & Batches",
    description: "Free JEE, NEET, SSC & Board exam resources — verified batch links, PDF notes, and 100+ portals like Physics Wallah, Unacademy, in one hub.",
    url: "https://studywithgaurav.cc.cd",
    type: "website",
    locale: "en_IN",
    siteName: "Study with Gaurav",
    images: [
      {
        url: "https://studywithgaurav.cc.cd/lionbg.png",
        width: 1200,
        height: 630,
        alt: "Study with Gaurav - Free JEE, NEET, SSC Student Resource Hub",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study with Gaurav: Free JEE, NEET, SSC Notes & Batches",
    description: "Free JEE, NEET, SSC & Board exam resources — verified batch links, PDF notes, and 100+ portals in one hub.",
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
    "Mod Websites Student Hub"
  ],
  "url": "https://studywithgaurav.cc.cd",
  "description": "The ultimate student directory indexing all institute free batches, PW mod portals, RWA paid batches, Next Toppers, and 100+ verified educational portals.",
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
  "description": "Centralized free student resource directory providing verified batch links, competitive exam notes, and educational portals.",
  "knowsAbout": [
    "All Institute Free Batches",
    "Physics Wallah PW Free Batches & Mod Portals",
    "PW OTT & Pi Pro",
    "Next Toppers Batches",
    "Rojgar With Ankit RWA Batches",
    "Khan Global Studies KGS Notes",
    "Vibrant Academy",
    "Padhle Akshay Batches",
    "Free Paid Batches & Study Material PDF",
    "Mod Websites for Competitive Exams"
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
        "text": "Study with Gaurav (https://studywithgaurav.cc.cd) is India's premier open-access student resource directory. It provides free, instant access to 100+ verified coaching portals, batch links, lecture players, and PDF study materials for JEE, NEET, SSC, UPSC, and State Boards."
      }
    },
    {
      "@type": "Question",
      "name": "Is Study with Gaurav free for all students?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Study with Gaurav is 100% free and non-profit. Students across India can access verified batch links, notes, formula sheets, and study materials without paywalls, subscriptions, or hidden fees."
      }
    },
    {
      "@type": "Question",
      "name": "What batches and study materials are available on Study with Gaurav?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Study with Gaurav indexes materials from top institutes including Physics Wallah (Lakshya, Arjuna, Yakeen), Rojgar With Ankit, Next Toppers, IIT School, MissionJEET, Vibrant Academy, Unacademy, Khan Global Studies, and CDS Journey."
      }
    },
    {
      "@type": "Question",
      "name": "What is the official website and Telegram channel of Study with Gaurav?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The official website is https://studywithgaurav.cc.cd (with mirror at https://studywithgaurav-ten.vercel.app/) and official Telegram is https://t.me/studywithgaurav."
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
