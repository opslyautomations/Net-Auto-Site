import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "@/styles/motion.css";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import MobileCTABar from "@/components/MobileCTABar";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const poppins = Poppins({
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

const inter = Inter({
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `Mobile Auto Detailing Oahu | ${SITE_NAME}`,
  },
  description: `Premium mobile auto detailing serving all of Oahu, Hawaii. Interior, exterior & restoration services delivered to your door. Call (808) 777-8964 for a free quote.`,
  robots: { index: true, follow: true },
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    // og:image comes from app/opengraph-image.tsx and each route's own card.
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        {/* Marks the document as JS-capable before first paint. Scroll-reveal
            styles key off .js, so content is never hidden when the script that
            would reveal it isn't running. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <link rel="preconnect" href="https://api.opslyautomations.com" />
        <link rel="dns-prefetch" href="https://widgets.leadconnectorhq.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased" style={{ fontFamily: "var(--font-inter), Arial, Helvetica, sans-serif" }}>
        <ScrollProgress />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCTABar />

        {/* GHL Form Script */}
        <Script
          src="https://api.opslyautomations.com/js/form_embed.js"
          strategy="lazyOnload"
        />

        {/* GHL Chat Widget — lazyOnload defers until page is idle */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69a639dba27e8c57320e7fb7"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
