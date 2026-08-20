import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
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
    default: "Study with Gaurav — Free Educational Resources, Batches & Student Hub",
    template: "%s | Study with Gaurav"
  },
  description: "The ultimate student directory for JEE, NEET, SSC, Police, Board exam preparation, free batch links, PDF notes, and 100+ verified educational portals like Physics Wallah, RWA, Next Toppers, and KGS.",
  alternates: {
    canonical: "https://studywithgaurav.cc.cd",
  },
  keywords: [
    "study with gaurav",
    "studywithgaurav.cc.cd",
    "student resource hub",
    "educational directory India",
    "free batch links",
    "Physics Wallah",
    "PW OTT",
    "PW Pi Pro",
    "Next Toppers",
    "Next Toppers old batches",
    "MissionJEET",
    "Mission JEET Next",
    "Vibrant Academy",
    "Vibrant Study Squad",
    "Munil Sir",
    "Munil Sir Delta",
    "Rojgar With Ankit",
    "RWA",
    "RWA Bhati Sir",
    "Science And Fun",
    "Science and Fun Ashu Sir",
    "Just Padhle",
    "Padhle Akshay",
    "Padhle Akshay Batches",
    "Selection Way",
    "Master Sahab",
    "UnAcademy",
    "Test Book",
    "Topper's Wisdom",
    "Study IQ",
    "Khan Global Studies",
    "KGS Khan Sir",
    "Gs Version",
    "GS Vision Dream Study",
    "Futurekul",
    "Futurekul Dream Study",
    "CDS JOURNEY",
    "Career Will",
    "Sachin Academy",
    "Vidhyakul",
    "MD Classes",
    "Utkarsh Classes",
    "Target Board",
    "Pinnacle Books",
    "Bookverse",
    "Apna College",
    "Test Ranker",
    "Education Baba",
    "free study notes PDF",
    "competitive exam prep 2026"
  ],
  authors: [{ name: "Study with Gaurav", url: "https://studywithgaurav.cc.cd" }],
  publisher: "Study with Gaurav",
  category: "Education",
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
    title: "Study with Gaurav — Free Educational Resources, Batches & Student Hub",
    description: "Your one-stop directory for Physics Wallah, RWA, Next Toppers, KGS, Padhle Akshay, Unacademy, and 100+ verified educational portals.",
    url: "https://studywithgaurav.cc.cd",
    type: "website",
    locale: "en_IN",
    siteName: "Study with Gaurav",
    images: [
      {
        url: "https://studywithgaurav.cc.cd/lionbg.png",
        width: 1200,
        height: 630,
        alt: "Study with Gaurav - Student Resource Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study with Gaurav — Top Student Resources & Batches",
    description: "Discover top educational websites, free courses, coding portals, and study tools from one clean hub.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Study with Gaurav",
  "alternateName": ["studywithgaurav.cc.cd", "Study With Gaurav Resource Hub"],
  "url": "https://studywithgaurav.cc.cd",
  "description": "The ultimate student directory for JEE, NEET, SSC, Police, Board exam preparation, free batch links, PDF notes, and educational portals.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
