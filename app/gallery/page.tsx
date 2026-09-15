import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import SectionHeader from "@/components/SectionHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import GHLForm from "@/components/GHLForm";
import GalleryShowcase from "@/components/GalleryShowcase";
import Magnetic from "@/components/Magnetic";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, GBP_URL } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";
import { galleryImages } from "@/lib/gallery";

export const metadata: Metadata = buildMetadata({
  title: "Gallery — Before & After Detailing Oahu | Net Auto",
  description: "Real before and after photos of Net Automotive Detailing jobs across Oahu, Hawaii. Toyota, BMW, Mercedes, Tesla, Jeep and more — see our results.",
  slug: "gallery",
});

const breadcrumbs = [
  { name: "Home", url: `${SITE_URL}/` },
  { name: "Gallery", url: `${SITE_URL}/gallery` },
];

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero */}
      <section className="pt-24 pb-16 px-4" style={{ backgroundColor: "#0A1F3D" }}>
        <div className="max-w-4xl mx-auto text-center">
          <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Gallery", href: "/gallery" }]} />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
            Our Work — Mobile Detailing Across Oahu
          </h1>
          <p className="text-lg mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>
            Real results from Net Automotive Detailing jobs across Oahu. Interior, exterior, and restoration services — we come to you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#gallery-grid"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105"
              style={{ backgroundColor: "#F08C2A", color: "#ffffff" }}
            >
              View All Photos
            </a>
            <a
              href={GBP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm border-2 transition-all hover:scale-105"
              style={{ borderColor: "rgba(255,255,255,0.4)", color: "#ffffff" }}
            >
              See Reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ backgroundColor: "#F08C2A" }}>
        <div className="max-w-4xl mx-auto px-4 py-5 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-white font-black text-2xl">{galleryImages.length}</p>
            <p className="text-white/90 text-sm font-semibold">Real Job Photos</p>
          </div>
          <div>
            <p className="text-white font-black text-2xl">60+</p>
            <p className="text-white/90 text-sm font-semibold">Five-Star Reviews</p>
          </div>
          <div>
            <p className="text-white font-black text-2xl">19</p>
            <p className="text-white/90 text-sm font-semibold">Cities Served</p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section id="gallery-grid" className="py-16 px-4" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="Our Work"
            title="Detailing Results Across Oahu"
            subtitle="Every photo is a real Net Automotive Detailing job — trucks, sedans, SUVs, and luxury vehicles."
          />
          <GalleryShowcase images={galleryImages} />
        </div>
      </section>

      {/* CTA band — book now */}
      <section className="py-12 px-4" style={{ backgroundColor: "#0A1F3D" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
            Want Results Like These?
          </h2>
          <p className="mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>
            We bring professional detailing to your driveway, condo, or worksite — anywhere on Oahu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Magnetic>
              <Link
                href="/contact#quote-form"
                className="btn-shine btn-press group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105"
                style={{ backgroundColor: "#F08C2A", color: "#ffffff" }}
              >
                Get Your Free Quote <span className="arrow-nudge" aria-hidden="true">→</span>
              </Link>
            </Magnetic>
            <a
              href={GBP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base border-2 transition-all hover:scale-105"
              style={{ borderColor: "rgba(255,255,255,0.35)", color: "#ffffff" }}
            >
              Read 60+ Google Reviews
            </a>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            title="Book Your Detail Today"
            subtitle="Request your free quote — we'll come to you anywhere on Oahu."
          />
          <GHLForm />
        </div>
      </section>

      <CTABand />
    </>
  );
}
