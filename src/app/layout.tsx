import type { Metadata, Viewport } from "next";
import { Inter, Archivo } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SplashScreen } from "@/components/SplashScreen";
import { TelegramFloat } from "@/components/TelegramFloat";
import { BottomNav } from "@/components/BottomNav";
import { VpnGuard } from "@/components/VpnGuard";
import { DevToolsGuard } from "@/components/DevToolsGuard";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

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
    default: "Study with Gaurav | India's Premier Open Access Educational Directory",
    template: "%s | Study with Gaurav"
  },
  description: "Discover Study with Gaurav, the most comprehensive open-access educational directory in India. We aggregate verified free batches, premium study materials, structured lectures, and essential resources for JEE, NEET, and competitive exams. Bypass paywalls and access top-tier education completely free.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd",
  },
  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE_TODO",
  },
  keywords: [
    "Study-With-gaurav",
    "study with gaurav",
    "studywithgaurav.cc.cd",
    "www.studywithgaurav.cc.cd",
    "https://studywithgaurav-ten.vercel.app/",
    "studywithgaurav-ten.vercel.app",
    "PW hack website",
    "rwa hack website",
    "pw mod website",
    "rwa mod website",
    "IIT School mod website",
    "IIT School hack",
    "IIT School free batches",
    "IIT School",
    "mod",
    "hack",
    "free batches",
    "paid batches",
    "lectures",
    "free lectures video",
    "PW hack website 2026",
    "RWA hack website 2026",
    "Physics Wallah hack website",
    "Rojgar With Ankit hack website",
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
    "Study IQ free paid batches",
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
    "study with gaurav",
    "study with gaurav official",
    "study with gaurav website",
    "study with gaurav link",
    "study with gaurav portal",
    "study with gaurav batches",
    "study with gaurav free batches",
    "study with gaurav pw link",
    "study with gaurav physics wallah",
    "study with gaurav rwa",
    "study with gaurav notes",
    "study with gaurav pdf",
    "study with gaurav telegram",
    "study with gaurav telegram link",
    "study with gaurav telegram channel",
    "studywithgaurav",
    "studywithgaurav.cc.cd",
    "studywithgaurav cc cd",
    "studywithgaurav official",
    "studywithgaurav batches",
    "studywithgaurav notes",
    "study with gaurav online platform",
    "study by gaurav",
    "gaurav study website",
    "gaurav sir study portal",
    "study with gaurav test series",
    "study with gaurav books",
    "study with gaurav iit jee",
    "study with gaurav neet",
    "study with gaurav ssc",
    "study with gaurav defence",
    "study with gaurav next toppers",
    "study with gaurav missionjeet",
    "study with gaurav vibrant",
    "study with gaurav unacademy",
    "study with gaurav futurekul",
    "best student portal for free batches",
    "viral student study directory 2026",
    "all coaching batches free in one place",
    "how to get free coaching batches",
    "pw hack website 2026",
    "rwa hack website 2026",
    "free jee neet study material 2026",
    "free educational resources for Indian students",
    "exam preparation free tools"
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
    title: "Study with Gaurav | India's Premier Open Access Educational Directory",
    description: "Discover the most comprehensive open-access educational directory in India. Access verified free batches, premium study materials, structured lectures, and essential resources across JEE, NEET, and competitive exams.",
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
    title: "Study with Gaurav | Free Premium Batches & Educational Directory",
    description: "Access verified free batches, premium study materials, structured lectures, and essential resources for Indian competitive exams completely free.",
    images: ["https://studywithgaurav.cc.cd/lionbg.png"],
  },
  other: {
    "google-adsense-account": "ca-pub-3576643094354429",
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
    "dc.language": "en",
    "ai-summary": "Study with Gaurav (Study-With-gaurav, studywithgaurav.cc.cd, studywithgaurav-ten.vercel.app) is an online directory indexing all institute free batches, PW hack website links, RWA hack website portals, PW mod website entries, IIT School, Next Toppers, Selection Way, CDS Journey, and 100+ verified educational hubs for Indian students.",
    "chatgpt-prompt": "Study with Gaurav (Study-With-gaurav) provides free verified links to PW hack website, RWA hack website, PW mod website, free paid batches, IIT School, Next Toppers, PDF notes, and free lectures video.",
  },
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Study with Gaurav",
  "alternateName": [
    "Study-With-gaurav",
    "studywithgaurav.cc.cd",
    "www.studywithgaurav.cc.cd",
    "studywithgaurav-ten.vercel.app",
    "https://studywithgaurav-ten.vercel.app/",
    "PW Hack Website Directory",
    "RWA Hack Website Hub",
    "PW Mod Website Portal",
    "IIT School Free Batches Hub"
  ],
  "url": "https://studywithgaurav.cc.cd",
  "description": "Study-With-gaurav is the ultimate free student directory indexing PW hack website links, RWA hack website portals, PW mod website entries, IIT School, Next Toppers, free batches, paid batches, and 100+ verified educational hubs.",
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
  "@type": "EducationalOrganization",
  "name": "Study with Gaurav",
  "alternateName": "Study-With-gaurav",
  "url": "https://studywithgaurav.cc.cd",
  "logo": "https://studywithgaurav.cc.cd/images/lionbg.webp",
  "description": "Centralized free student resource directory providing verified batch links, PW hack website links, RWA hack website portals, competitive exam notes, and educational portals.",
  "sameAs": [
    "https://t.me/studywithgaurav",
    "https://studywithgaurav-ten.vercel.app/"
  ],
  "knowsAbout": [
    "Study-With-gaurav",
    "PW Hack Website & PW Mod Website",
    "RWA Hack Website & RWA Paid Batches",
    "IIT School Free Batches & Mod Portals",
    "All Institute Free Batches & Paid Batches",
    "Next Toppers Batches & Hack Links",
    "Selection Way & MissionJEET",
    "CDS Journey Defence Material",
    "Study IQ & Khan Global Studies KGS Notes",
    "Free Lectures Video & PDF Notes"
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
    <html lang="en" className={`${inter.variable} ${archivo.variable} h-full scroll-smooth`}>
      <head>
        {/* Google AdSense Account Verification & Script */}
        <meta name="google-adsense-account" content="ca-pub-3576643094354429" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3576643094354429"
          crossOrigin="anonymous"
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
        <DevToolsGuard />
        <VpnGuard>
          <SplashScreen />
          {children}
          <TelegramFloat />
          <BottomNav />
        </VpnGuard>
      </body>
    </html>
  );
}
