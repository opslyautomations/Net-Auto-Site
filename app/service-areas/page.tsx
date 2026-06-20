import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import SectionHeader from "@/components/SectionHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import GHLForm from "@/components/GHLForm";
import { Reveal } from "@/components/Reveal";
import { locations } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Service Areas — All of Oahu, Hawaii | Net Auto",
  description: "Net Automotive Detailing serves all of Oahu, Hawaii — from Honolulu to Haleiwa, Pearl City to Hawaii Kai. Mobile detailing at your door. Request a free quote.",
  slug: "service-areas",
  image: `${SITE_URL}/og/service-areas.png`,
});

export default function ServiceAreasPage() {
  const breadcrumbs = [
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Service Areas", url: `${SITE_URL}/service-areas` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero */}
      <section className="pt-24 pb-16 px-4" style={{ backgroundColor: "#0A1F3D" }}>
        <div className="max-w-4xl mx-auto text-center">
          <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Service Areas", href: "/service-areas" }]} />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
            Service Areas — All of Oahu, Hawaii
          </h1>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
            Net Automotive Detailing brings professional mobile detailing to every corner of Oahu — from urban Honolulu to the North Shore, from Kapolei on the west side to Kailua on the windward coast. No matter where you are on the island, we come to you.
          </p>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="Oahu Coverage"
            title="Every City. Every Neighborhood."
            subtitle="Click your city to learn how we serve your specific area and community."
          />
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/service-areas/${loc.slug}`}
                className="px-5 py-3 rounded-full text-sm font-semibold border transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ backgroundColor: "#0A1F3D", color: "#ffffff", borderColor: "#B1D1E7" }}
              >
                {loc.name}
              </Link>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((loc, i) => (
              <Reveal key={loc.slug} as="div" variant="up" delay={Math.min(i, 4) * 80}>
                <Link
                  href={`/service-areas/${loc.slug}`}
                  className="block p-5 rounded-2xl border card-lift transition-all"
                  style={{ backgroundColor: "#ffffff", borderColor: "#B1D1E7" }}
                >
                  <h2 className="font-bold text-lg mb-1" style={{ color: "#0A1F3D" }}>{loc.name}</h2>
                  <p className="text-sm" style={{ color: "#6B7A90" }}>Oahu, Hawaii</p>
                  <p className="text-xs mt-2 font-medium" style={{ color: "#F08C2A" }}>View details →</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Island Coverage Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Full-Island Mobile Coverage"
            subtitle="Our mobile detailing operation is built for Oahu's geography — no community is too far, too rural, or too urban."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { region: "Honolulu Core", cities: "Honolulu, Kaimuki, Manoa", icon: "🏙️" },
              { region: "Windward Side", cities: "Kailua, Kaneohe, Waimanalo Beach", icon: "🌊" },
              { region: "West Side", cities: "Kapolei, Ewa Beach, Royal Kunia", icon: "☀️" },
              { region: "North Shore", cities: "Haleiwa, Waialua, Wahiawa", icon: "🏄" },
            ].map((r, i) => (
              <Reveal key={r.region} as="div" variant="up" delay={i * 80}>
                <div className="text-center p-5 rounded-2xl h-full" style={{ backgroundColor: "#F4F6F9" }}>
                  <div className="text-3xl mb-2" aria-hidden="true">{r.icon}</div>
                  <h3 className="font-bold mb-1" style={{ color: "#0A1F3D" }}>{r.region}</h3>
                  <p className="text-sm" style={{ color: "#6B7A90" }}>{r.cities}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            title="Request Mobile Detailing on Oahu"
            subtitle="Tell us your location and we'll confirm service at your address."
          />
          <GHLForm />
        </div>
      </section>

      <CTABand />
    </>
  );
}
