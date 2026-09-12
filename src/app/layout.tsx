import type React from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import { SplashScreen } from "@/components/SplashScreen";
import { TelegramFloat } from "@/components/TelegramFloat";
import { BottomNav } from "@/components/BottomNav";
import { DonationReminder } from "@/components/DonationReminder";
import { GetAppBanner } from "@/components/GetAppBanner";
import { AppProvider } from "@/context/AppContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
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
    default: "Study with Gaurav — Educational Resources, Learning Guides & Roadmaps",
    template: "%s | Study with Gaurav"
  },
  description: "Discover verified educational platforms, subject learning guides, competitive exam study materials, and academic roadmaps to help Indian students excel.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd",
  },
  keywords: [
    "study with gaurav",
    "educational resources india",
    "free learning platforms",
    "competitive exam study materials",
    "jee main study guide",
    "neet ug preparation resources",
    "ssc exam learning platforms",
    "computer science learning roadmap",
    "open access educational directory",
    "physics wallah resources",
    "rojgar with ankit guides",
    "academic roadmaps for students",
    "verified study tools",
    "engineering study resources",
    "board exam preparation notes"
  ],
  authors: [{ name: "Study with Gaurav Editorial Team", url: "https://studywithgaurav.cc.cd/about" }],
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
    title: "Study with Gaurav — Educational Resources, Learning Guides & Roadmaps",
    description: "Discover verified educational platforms, subject learning guides, competitive exam study materials, and academic roadmaps for students.",
    url: "https://studywithgaurav.cc.cd",
    type: "website",
    locale: "en_IN",
    siteName: "Study with Gaurav",
    images: [
      {
        url: "https://studywithgaurav.cc.cd/lionbg.png",
        width: 1200,
        height: 630,
        alt: "Study with Gaurav — Educational Platform & Resource Hub",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study with Gaurav — Educational Resources & Learning Roadmaps",
    description: "Discover verified educational platforms, learning guides, and academic roadmaps for students.",
    images: ["https://studywithgaurav.cc.cd/lionbg.png"],
  },
  other: {
    "google-adsense-account": "ca-pub-3576643094354429",
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
    "dc.language": "en",
  },
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Study with Gaurav",
  "alternateName": [
    "studywithgaurav.cc.cd",
    "Study With Gaurav Educational Platform",
    "Study with Gaurav Resource Hub"
  ],
  "url": "https://studywithgaurav.cc.cd",
  "description": "An organized educational information and resource platform designed to help students discover verified learning websites, study guides, exam preparation resources, and academic roadmaps.",
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
  "url": "https://studywithgaurav.cc.cd",
  "logo": "https://studywithgaurav.cc.cd/images/lionbg.webp",
  "description": "Independent educational resource directory and study guidance platform providing curated access to verified learning tools, academic roadmaps, and preparation resources.",
  "knowsAbout": [
    "Educational Resource Curation",
    "Engineering Entrance Preparation (JEE)",
    "Medical Entrance Preparation (NEET)",
    "Government Recruitment Exams (SSC, Defence)",
    "Computer Science & Programming Roadmaps",
    "School Board Examinations"
  ],
  "sameAs": [
    "https://t.me/studywithgaurav0"
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
        "text": "Study with Gaurav is an educational resource platform designed to help students discover, understand, compare, and effectively use verified learning websites, study materials, exam preparation tools, and academic guides from one organized hub."
      }
    },
    {
      "@type": "Question",
      "name": "How does Study with Gaurav review and verify educational resources?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our editorial team evaluates each platform based on syllabus relevance, teaching quality, student feedback, platform stability, accessibility, and transparency."
      }
    },
    {
      "@type": "Question",
      "name": "Is Study with Gaurav free for students?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Study with Gaurav is completely open and free for all students, with no mandatory subscription or registration paywalls."
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
    <html lang="en" className={`h-full scroll-smooth ${inter.variable} ${archivo.variable}`} data-scroll-behavior="smooth">
      <head>

        {/* Google AdSense Account Verification & Script (native script to avoid data-nscript console warning) */}
        <meta name="google-adsense-account" content="ca-pub-3576643094354429" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3576643094354429"
          crossOrigin="anonymous"
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
          <SplashScreen />
          {children}
          <GetAppBanner />
          <TelegramFloat />
          <DonationReminder />
          <BottomNav />
        </AppProvider>
      </body>
    </html>
  );
}
