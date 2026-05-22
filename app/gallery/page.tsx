import type { Metadata } from "next";
import CTABand from "@/components/CTABand";
import SectionHeader from "@/components/SectionHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import GHLForm from "@/components/GHLForm";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Gallery — Before & After Detailing Oahu | Net Auto",
  description: "Before and after photos of Net Automotive Detailing jobs across Oahu, Hawaii. Real results from interior, exterior, and restoration services. View our gallery.",
  slug: "gallery",
  image: `${SITE_URL}/og/gallery.png`,
});

const breadcrumbs = [
  { name: "Home", url: `${SITE_URL}/` },
  { name: "Gallery", url: `${SITE_URL}/gallery` },
];

const galleryItems = [
  { alt: "Before and after interior detail — Honolulu sedan", label: "Interior Detail — Honolulu" },
  { alt: "Before and after exterior detail — Pearl City SUV", label: "Exterior Detail — Pearl City" },
  { alt: "Headlight restoration before and after — Oahu", label: "Headlight Restoration — Oahu" },
  { alt: "Carpet shampoo before and after — Kailua vehicle", label: "Carpet Shampoo — Kailua" },
  { alt: "Leather conditioning before and after — Hawaii Kai luxury car", label: "Leather Conditioning — Hawaii Kai" },
  { alt: "Rim detailing before and after — Kapolei truck", label: "Rim Detailing — Kapolei" },
  { alt: "Clay bar treatment before and after — Honolulu sedan", label: "Clay Bar Treatment — Honolulu" },
  { alt: "Seat shampoo before and after — Kaneohe family SUV", label: "Seat Shampoo — Kaneohe" },
  { alt: "Plastic trim restoration before and after — North Shore Jeep", label: "Trim Restoration — Haleiwa" },
  { alt: "Full exterior detail — Mililani family SUV after service", label: "Full Detail — Mililani" },
  { alt: "Interior detail results — Manoa vehicle", label: "Interior Detail — Manoa" },
  { alt: "Exterior wax and polish — Waimanalo Beach truck", label: "Spray Wax — Waimanalo" },
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
            Gallery — Before & After Mobile Detailing on Oahu
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.8)" }}>
            Real results from Net Automotive Detailing jobs across Oahu. Interior, exterior, and restoration — see the difference.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="Our Work"
            title="Before & After Results"
            subtitle="Every photo represents a real Net Automotive Detailing job on Oahu."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryItems.map((item, i) => (
              <figure
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{ backgroundColor: "#ffffff", border: "1px solid #B1D1E7", boxShadow: "0 2px 12px rgba(10,31,61,0.06)" }}
              >
                <div
                  className="aspect-video flex items-center justify-center"
                  style={{ backgroundColor: "#F4F6F9", borderBottom: "1px solid #B1D1E7" }}
                  role="img"
                  aria-label={item.alt}
                >
                  <div className="text-center p-6">
                    <div className="text-4xl mb-2" aria-hidden="true">📷</div>
                    <p className="text-xs font-medium" style={{ color: "#6B7A90" }}>Photo coming soon</p>
                  </div>
                </div>
                <figcaption className="px-4 py-3 text-sm font-medium" style={{ color: "#0A1F3D" }}>
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="text-center mt-8 text-sm" style={{ color: "#6B7A90" }}>
            Professional before &amp; after photos being added regularly. Check back soon for more results.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            title="Want Results Like These?"
            subtitle="Request your free quote — we'll come to you anywhere on Oahu."
          />
          <GHLForm />
        </div>
      </section>

      <CTABand />
    </>
  );
}
