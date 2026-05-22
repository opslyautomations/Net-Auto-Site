import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import GHLForm from "@/components/GHLForm";
import FAQAccordion from "@/components/FAQAccordion";
import CTABand from "@/components/CTABand";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { services, getServiceBySlug, getRelatedServices } from "@/lib/services";
import { locations } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, PHONE, PHONE_RAW } from "@/lib/constants";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    slug: `services/${service.slug}`,
    image: `${SITE_URL}${service.ogImage}`,
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

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(slug);
  const breadcrumbs = [
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Services", url: `${SITE_URL}/services` },
    { name: service.name, url: `${SITE_URL}/services/${service.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service.name, service.intro)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(service.faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero */}
      <section className="pt-24 pb-16 px-4" style={{ backgroundColor: "#0A1F3D" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: service.name, href: `/services/${service.slug}` }]} />
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl" aria-hidden="true">{serviceIcons[service.slug] || "✨"}</span>
            <h1 className="text-3xl md:text-4xl font-black text-white" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
              {service.h1}
            </h1>
          </div>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>{service.tagline}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#service-form"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 min-h-[48px]"
              style={{ backgroundColor: "#F08C2A", color: "#ffffff" }}
            >
              Request a Quote
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

      {/* Intro */}
      <section className="py-16 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed" style={{ color: "#0A1F3D" }}>{service.intro}</p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeader title={`What's Included in ${service.name}`} centered={false} />
          <ul className="grid sm:grid-cols-2 gap-3">
            {service.whatsIncluded.map((item) => (
              <li key={item} className="flex items-start gap-3 p-4 rounded-xl" style={{ backgroundColor: "#ffffff", border: "1px solid #B1D1E7" }}>
                <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5" style={{ backgroundColor: "rgba(240,140,42,0.15)", color: "#F08C2A" }} aria-hidden="true">✓</span>
                <span className="text-sm" style={{ color: "#0A1F3D" }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Key Benefits" centered={false} />
          <div className="grid sm:grid-cols-3 gap-6">
            {service.benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 rounded-2xl" style={{ backgroundColor: "#F4F6F9", border: "1px solid #B1D1E7" }}>
                <div className="text-3xl mb-3" aria-hidden="true">{benefit.icon}</div>
                <h3 className="font-bold mb-2" style={{ color: "#0A1F3D" }}>{benefit.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7A90" }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="How It Works" subtitle="Simple, convenient, professional." centered={false} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Book Online", desc: "Request your free quote in minutes using our simple form." },
              { step: "2", title: "We Come to You", desc: "We arrive at your home, office, or preferred location on Oahu." },
              { step: "3", title: "Professional Detail", desc: "Our trained technicians complete your service with professional equipment." },
              { step: "4", title: "Drive Away Spotless", desc: "Inspect the results and drive away with a showroom-quality vehicle." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-black text-white mx-auto mb-3" style={{ backgroundColor: "#F08C2A" }} aria-label={`Step ${item.step}`}>
                  {item.step}
                </div>
                <h3 className="font-bold mb-2" style={{ color: "#0A1F3D" }}>{item.title}</h3>
                <p className="text-sm" style={{ color: "#6B7A90" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader title={`Frequently Asked Questions — ${service.name}`} />
          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="py-16 px-4" style={{ backgroundColor: "#F4F6F9" }}>
          <div className="max-w-4xl mx-auto">
            <SectionHeader title="Related Services" />
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((s) => (
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
      )}

      {/* Available In — all 19 locations */}
      <section className="py-16 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title={`${service.name} Available Across Oahu`}
            subtitle="We bring this service to every city and community on the island."
          />
          <div className="flex flex-wrap gap-3 justify-center">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/service-areas/${loc.slug}`}
                className="px-4 py-2 rounded-full text-sm font-semibold border transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "#0A1F3D", color: "#ffffff", borderColor: "#B1D1E7" }}
                aria-label={`${service.name} in ${loc.name}`}
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="service-form" className="py-16 px-4 scroll-mt-16" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            title="Ready to Book Your Service?"
            subtitle="Request a free quote — we'll respond fast and come to you anywhere on Oahu."
          />
          <GHLForm />
        </div>
      </section>

      <CTABand />
    </>
  );
}
