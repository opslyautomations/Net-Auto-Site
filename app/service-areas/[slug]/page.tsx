import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import GHLForm from "@/components/GHLForm";
import FAQAccordion from "@/components/FAQAccordion";
import CTABand from "@/components/CTABand";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { locations, getLocationBySlug, getNearbyLocations } from "@/lib/locations";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, PHONE, PHONE_RAW } from "@/lib/constants";
import { locationBusinessSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return buildMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    slug: `service-areas/${location.slug}`,
    image: `${SITE_URL}${location.ogImage}`,
  });
}

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

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const nearby = getNearbyLocations(slug);
  const breadcrumbs = [
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Service Areas", url: `${SITE_URL}/service-areas` },
    { name: location.name, url: `${SITE_URL}/service-areas/${location.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationBusinessSchema(location.name)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(location.faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero */}
      <section className="pt-24 pb-16 px-4" style={{ backgroundColor: "#0A1F3D" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Service Areas", href: "/service-areas" }, { name: location.name, href: `/service-areas/${location.slug}` }]} />
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
            {location.h1}
          </h1>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>{location.tagline}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#location-form"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 min-h-[48px]"
              style={{ backgroundColor: "#F08C2A", color: "#ffffff" }}
            >
              Get a Free Quote
            </a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold text-base border-2 transition-all hover:scale-105 min-h-[48px]"
              style={{ borderColor: "rgba(255,255,255,0.4)", color: "#ffffff" }}
            >
              📞 {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Top Quote Form */}
      <section id="location-form" className="py-12 px-4 scroll-mt-16" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#0A1F3D" }}>
            Request Mobile Detailing in {location.name}
          </h2>
          <GHLForm />
        </div>
      </section>

      {/* Local Intro */}
      <section className="py-16 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeader title={`Mobile Auto Detailing in ${location.name}, Oahu`} centered={false} />
          <div className="prose prose-lg max-w-none" style={{ color: "#0A1F3D" }}>
            {location.intro.split("\n\n").filter(Boolean).map((para, i) => (
              <p key={i} className="mb-4 leading-relaxed" style={{ color: "#0A1F3D" }}>
                {para.trim()}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title={`Services Offered in ${location.name}`}
            subtitle="All of our mobile detailing services are available in your community."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <ServiceCard
                key={s.slug}
                slug={s.slug}
                name={s.name}
                description={s.tagline}
                icon={serviceIcons[s.slug] || "✨"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title={`Why ${location.name} Drivers Choose Net Automotive Detailing`}
            centered={false}
          />
          <ul className="flex flex-col gap-4">
            {location.whyChoose.map((item) => (
              <li key={item} className="flex items-start gap-4 p-4 rounded-xl" style={{ backgroundColor: "#F4F6F9", border: "1px solid #B1D1E7" }}>
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-0.5" style={{ backgroundColor: "rgba(240,140,42,0.15)", color: "#F08C2A" }} aria-hidden="true">✓</span>
                <span style={{ color: "#0A1F3D" }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearby.length > 0 && (
        <section className="py-16 px-4" style={{ backgroundColor: "#F4F6F9" }}>
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Nearby Service Areas"
              subtitle={`We also serve these communities near ${location.name}.`}
            />
            <div className="flex flex-wrap gap-3 justify-center">
              {nearby.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/service-areas/${loc.slug}`}
                  className="px-5 py-3 rounded-full text-sm font-semibold border transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: "#0A1F3D", color: "#ffffff", borderColor: "#B1D1E7" }}
                  aria-label={`Mobile detailing in ${loc.name}`}
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-16 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader title={`FAQs — Mobile Detailing in ${location.name}`} />
          <FAQAccordion faqs={location.faqs} />
        </div>
      </section>

      {/* Bottom Form */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            title={`Book Your ${location.name} Detail Today`}
            subtitle="We'll confirm your appointment and come to your location — fast and professional."
          />
          <GHLForm />
        </div>
      </section>

      <CTABand />
    </>
  );
}
