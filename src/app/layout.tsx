import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SplashScreen } from "@/components/SplashScreen";
import { TelegramFloat } from "@/components/TelegramFloat";
import { BottomNav } from "@/components/BottomNav";
import { VpnGuard } from "@/components/VpnGuard";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    "exam preparation free tools"
  ],
  authors: [{ name: "Study with Gaurav", url: "https://studywithgaurav.cc.cd" }],
  publisher: "Study with Gaurav",
  category: "Education",
  icons: {
    icon: "/images/lionbg.webp",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <head>
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
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900 pb-[calc(3.5rem+env(safe-area-inset-bottom,0px))] md:pb-0">
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
