import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_URL, OG_DEFAULT_IMAGE, TAGLINE } from "@/lib/constants";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const poppins = Poppins({
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
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
    images: [{ url: OG_DEFAULT_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} — ${TAGLINE}` }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
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
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />

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
