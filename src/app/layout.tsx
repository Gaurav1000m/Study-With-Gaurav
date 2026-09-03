import type { Metadata, Viewport } from "next";
import { Inter, Archivo } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SplashScreen } from "@/components/SplashScreen";
import { TelegramFloat } from "@/components/TelegramFloat";
import { BottomNav } from "@/components/BottomNav";
import { VpnGuard } from "@/components/VpnGuard";
import { DevToolsGuard } from "@/components/DevToolsGuard";
import { AppProvider } from "@/context/AppContext";

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
  description: "Discover Study with Gaurav, India's premier open-access educational directory. We curate verified learning portals, foundation study materials, structured lectures, and essential resources for JEE, NEET, and competitive exams completely free.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd",
  },
  // Google Search Console: verify via DNS TXT record or GSC HTML file method
  // verification: { google: "YOUR_ACTUAL_VERIFICATION_CODE_HERE" },
  keywords: [
    "Study-With-gaurav",
    "study with gaurav",
    "studywithgaurav.cc.cd",
    "www.studywithgaurav.cc.cd",
    "studywithgaurav-ten.vercel.app",
    "educational directory India",
    "student resource hub",
    "free educational resources",
    "free study notes PDF",
    "competitive exam prep 2026",
    "JEE Mains 2026 study material",
    "NEET 2026 study material pdf",
    "SSC CGL preparation notes",
    "Physics Wallah study portals",
    "Rojgar With Ankit study resources",
    "IIT School learning resources",
    "Next Toppers board preparation",
    "MissionJEET entrance guides",
    "CDS Journey defence exam resources",
    "Khan Global Studies KGS notes",
    "Study IQ current affairs",
    "Vibrant Academy study notes",
    "Padhle Akshay class 10 notes",
    "Science and Fun lecture guides",
    "all coaching institute directories",
    "free formula sheets pdf",
    "exam preparation free tools",
    "Indian students education portal"
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
    description: "Discover the most comprehensive open-access educational directory in India. Access verified learning portals, premium study materials, structured lectures, and essential resources across JEE, NEET, and competitive exams.",
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
    title: "Study with Gaurav | Open Access Educational Directory",
    description: "Access verified study portals, foundation materials, structured lectures, and essential resources for Indian competitive exams completely free.",
    images: ["https://studywithgaurav.cc.cd/lionbg.png"],
  },
  other: {
    "monetag": "9d7a52d24153df35268a6a1f546a5f82",
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
    "Study-With-gaurav",
    "studywithgaurav.cc.cd",
    "www.studywithgaurav.cc.cd",
    "studywithgaurav-ten.vercel.app",
    "Study with Gaurav Educational Directory",
    "Indian Student Resource Hub"
  ],
  "url": "https://studywithgaurav.cc.cd",
  "description": "Study with Gaurav is an open-access educational directory indexing verified study portals, lecture archives, revision notes, and academic resources for Indian competitive exams.",
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
  "description": "Centralized free student resource directory providing verified educational links, competitive exam notes, and academic study portals.",
  "sameAs": [
    "https://t.me/studywithgaurav",
    "https://studywithgaurav-ten.vercel.app/"
  ],
  "knowsAbout": [
    "Study-With-gaurav",
    "Physics Wallah Student Resources",
    "Rojgar With Ankit Educational Materials",
    "IIT School Preparation Portals",
    "Competitive Exam Study Material",
    "Next Toppers Board Guides",
    "Selection Way & MissionJEET",
    "CDS Journey Defence Material",
    "Study IQ & Khan Global Studies KGS Notes",
    "Free Educational Lectures & PDF Notes"
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
        {/* Monetag Ads Verification Tag */}
        <meta name="monetag" content="9d7a52d24153df35268a6a1f546a5f82" />

        {/* Google AdSense Account Verification & Script */}
        <meta name="google-adsense-account" content="ca-pub-3576643094354429" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3576643094354429"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Monetag Multitag Script — loaded after interactive to avoid blocking render */}
        <Script
          src="https://quge5.com/88/tag.min.js"
          data-zone="276097"
          strategy="afterInteractive"
          data-cfasync="false"
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
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900 pb-[calc(3.5rem+env(safe-area-inset-bottom,0px))] md:pb-0">
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
