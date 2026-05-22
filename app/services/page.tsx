import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import CTABand from "@/components/CTABand";
import SectionHeader from "@/components/SectionHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import GHLForm from "@/components/GHLForm";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Mobile Detailing Services Oahu | Net Automotive",
  description: "All mobile auto detailing services on Oahu — interior, exterior, carpet shampoo, leather care, headlight restoration & more. We come to you. Get a free quote.",
  slug: "services",
  image: `${SITE_URL}/og/services.png`,
});

const serviceIcons: Record<string, string> = {
  "interior-detail": "🚗",
  "exterior-detail": "✨",
  "carpet-shampoo": "🧽",
  "seat-shampoo": "💺",
  "leather-conditioning": "🛋️",
  "clay-bar-treatment": "🔬",
  "exterior-spray-wax": "🛡️",
  "rim-detailing": "⚙️",
  "headlight-restoration": "💡",
  "plastic-color-restoration": "⬛",
};

export default function ServicesPage() {
  const breadcrumbs = [
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Services", url: `${SITE_URL}/services` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero */}
      <section className="pt-24 pb-12 px-4" style={{ backgroundColor: "#0A1F3D" }}>
        <div className="max-w-4xl mx-auto text-center">
          <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
            All Mobile Detailing Services
          </h1>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
            Professional mobile auto detailing across all of Oahu, Hawaii — delivered to your door. Interior, exterior, and restoration services available for any vehicle.
          </p>
          <Link
            href="/contact#quote-form"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105"
            style={{ backgroundColor: "#F08C2A", color: "#ffffff" }}
          >
            Get a Free Quote →
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="All Services"
            title="Choose Your Detailing Service"
            subtitle="Every service is mobile — we come to you anywhere on Oahu."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                name={service.name}
                description={service.tagline}
                icon={serviceIcons[service.slug] || "✨"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            label="Free Quote"
            title="Request Your Free Quote"
            subtitle="Tell us about your vehicle and the services you need — we'll get back to you fast."
          />
          <GHLForm />
        </div>
      </section>

      <CTABand />
    </>
  );
}
