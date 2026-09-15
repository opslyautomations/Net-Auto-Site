import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import GHLForm from "@/components/GHLForm";
import { homepageGalleryImages } from "@/lib/gallery";
import TrustBar from "@/components/TrustBar";
import StatsBand from "@/components/StatsBand";
import HeroBackdrop from "@/components/HeroBackdrop";
import GalleryGrid from "@/components/GalleryGrid";
import Tilt from "@/components/Tilt";
import Magnetic from "@/components/Magnetic";
import CTABand from "@/components/CTABand";
import ReviewCard from "@/components/ReviewCard";
import ServiceCard from "@/components/ServiceCard";
import SectionHeader from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { SITE_NAME, SITE_URL, PHONE, PHONE_RAW } from "@/lib/constants";
import { localBusinessSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Mobile Auto Detailing Oahu | Net Automotive",
  description: "Premium mobile auto detailing across all of Oahu, Hawaii. Interior, exterior & restoration services we bring to your door. Call (808) 777-8964 for a free quote.",
  slug: "",
});

/** Rotating hero photography. The first entry is the LCP image. */
const heroSlides = [
  {
    src: "/images/foam-wash-mobile-detailing-ewa-beach.jpeg",
    alt: "Mobile foam wash in a driveway in Ewa Beach, Oahu",
  },
  {
    src: "/images/mercedes-exterior-detail-hawaii-kai.jpeg",
    alt: "Freshly detailed black Mercedes-Benz in Hawaii Kai, Oahu",
  },
  {
    src: "/images/toyota-supra-exterior-detail-honolulu.jpeg",
    alt: "Detailed white Toyota GR Supra in Honolulu, Oahu",
  },
];

/** Drives the staggered hero entrance defined in styles/motion.css. */
const step = (n: number) => ({ "--enter-step": n }) as CSSProperties;

const serviceCards = [
  { slug: "interior-detail", name: "Interior Detail", icon: "🚗", description: "Steam, vacuum, and deep-clean every surface inside your vehicle." },
  { slug: "exterior-detail", name: "Exterior Detail", icon: "✨", description: "Hand wash, decontamination, dry, dressing, and tire shine." },
  { slug: "carpet-shampoo", name: "Carpet Shampoo", icon: "🧽", description: "Hot-water extraction removes embedded sand, stains, and odors." },
  { slug: "seat-shampoo", name: "Seat Shampoo", icon: "💺", description: "Deep extraction cleaning for fabric seats and stain removal." },
  { slug: "leather-conditioning", name: "Leather Conditioning", icon: "🛋️", description: "UV-protective conditioning for Hawaii's heat and humidity." },
  { slug: "clay-bar-treatment", name: "Clay Bar Treatment", icon: "🔬", description: "Glass-smooth paint through professional decontamination." },
  { slug: "exterior-spray-wax", name: "Exterior Spray Wax", icon: "🛡️", description: "Quick-application paint protection and gloss boost." },
  { slug: "rim-detailing", name: "Rim Detailing", icon: "⚙️", description: "Deep barrel cleaning and brake dust removal for every wheel." },
  { slug: "headlight-restoration", name: "Headlight Restoration", icon: "💡", description: "Sand, polish, and UV-seal cloudy headlights to like-new clarity." },
  { slug: "plastic-color-restoration", name: "Plastic Color Restoration", icon: "⬛", description: "Restore faded black plastic trim with UV-resistant finish." },
];

const locations = [
  { slug: "honolulu", name: "Honolulu" },
  { slug: "kailua", name: "Kailua" },
  { slug: "kapolei", name: "Kapolei" },
  { slug: "kaneohe", name: "Kaneohe" },
  { slug: "pearl-city", name: "Pearl City" },
  { slug: "aiea", name: "Aiea" },
  { slug: "ewa-beach", name: "Ewa Beach" },
  { slug: "mililani", name: "Mililani" },
  { slug: "hawaii-kai", name: "Hawaii Kai" },
  { slug: "haleiwa", name: "Haleiwa" },
  { slug: "wahiawa", name: "Wahiawa" },
  { slug: "waialua", name: "Waialua" },
  { slug: "waimalu", name: "Waimalu" },
  { slug: "manoa", name: "Manoa" },
  { slug: "waimanalo-beach", name: "Waimanalo Beach" },
  { slug: "kaimuki", name: "Kaimuki" },
  { slug: "royal-kunia", name: "Royal Kunia" },
  { slug: "ewa-villages", name: "Ewa Villages" },
  { slug: "schofield-barracks", name: "Schofield Barracks" },
];

const reviews = [
  {
    reviewerName: "Kaleo M.",
    location: "Kailua, Oahu",
    rating: 5,
    text: "Net Automotive Detailing did an incredible job on my truck. The interior was completely transformed — they got out sand and stains I thought would never come out. The team was professional, on time, and came right to my driveway. Will definitely be booking again!",
    date: "January 2025",
  },
  {
    reviewerName: "Sarah T.",
    location: "Pearl City, Oahu",
    rating: 5,
    text: "I've lived in Hawaii for years and the salt air does real damage to cars. Eli's team knows exactly what they're doing for island conditions. My paint looks better than it has in years. Highly recommend for anyone on Oahu who wants professional results without the hassle of a shop drop-off.",
    date: "February 2025",
  },
  {
    reviewerName: "Marcus H.",
    location: "Kaneohe, Oahu",
    rating: 5,
    text: "Booked the full interior and exterior detail — honestly one of the best detailing experiences I've had. They arrived on time, communicated every step, and the results were showroom quality. The headlight restoration on my 4Runner was the icing on the cake.",
    date: "March 2025",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center pt-16 overflow-hidden"
        style={{ backgroundColor: "#0A1F3D" }}
        aria-label="Hero"
      >
        <HeroBackdrop slides={heroSlides} />

        {/* Slowly drifting accent light */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="float-slow absolute -top-32 -left-24 w-[34rem] h-[34rem] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(240,140,42,0.18) 0%, transparent 65%)" }}
          />
          <div
            className="float-slower absolute -bottom-40 -right-24 w-[40rem] h-[40rem] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(177,209,231,0.16) 0%, transparent 65%)" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* Left Column */}
            <div className="lg:col-span-3">
              <p
                className="hero-enter inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full"
                style={{
                  ...step(0),
                  backgroundColor: "rgba(240,140,42,0.18)",
                  color: "#F08C2A",
                  border: "1px solid rgba(240,140,42,0.35)",
                }}
              >
                <span
                  className="live-dot w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#F08C2A" }}
                  aria-hidden="true"
                />
                All of Oahu, Hawaii
              </p>

              <h1
                className="hero-enter text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white mb-6"
                style={{ ...step(0), fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Premium Mobile Auto Detailing{" "}
                <span className="text-sheen" style={{ color: "#F08C2A" }}>Across Oahu</span>
              </h1>

              <p
                className="hero-enter text-lg md:text-xl mb-8 leading-relaxed"
                style={{ ...step(1), color: "rgba(255,255,255,0.88)" }}
              >
                We come to you — Honolulu, Pearl City, Kapolei, Hawaii Kai, and every city in between. Showroom-quality detailing without leaving your driveway.
              </p>

              {/* Trust Row */}
              <div
                className="hero-enter flex flex-wrap gap-x-5 gap-y-2 mb-8 text-sm font-medium"
                style={{ ...step(2), color: "#B1D1E7" }}
              >
                <span>⭐ 60+ Five-Star Reviews</span>
                <span>📍 All of Oahu</span>
                <span>🚐 Mobile Service</span>
                <span>💧 Eco-Friendly</span>
              </div>

              {/* CTAs */}
              <div className="hero-enter flex flex-col sm:flex-row gap-4" style={step(3)}>
                <Magnetic className="w-full sm:w-auto">
                  <a
                    href="#quote-form"
                    className="btn-shine btn-press w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-transform hover:scale-105 min-h-[48px]"
                    style={{ backgroundColor: "#F08C2A", color: "#ffffff" }}
                  >
                    Get a Free Quote <span className="arrow-nudge" aria-hidden="true">→</span>
                  </a>
                </Magnetic>
                <Magnetic className="w-full sm:w-auto">
                  <Link
                    href="/services"
                    className="btn-press w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base border-2 transition-all hover:scale-105 hover:bg-white/10 min-h-[48px]"
                    style={{ borderColor: "rgba(255,255,255,0.4)", color: "#ffffff" }}
                  >
                    View Services
                  </Link>
                </Magnetic>
                <Magnetic className="w-full sm:w-auto">
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="btn-press w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 hover:bg-white/20 min-h-[48px]"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#ffffff" }}
                  >
                    📞 {PHONE}
                  </a>
                </Magnetic>
              </div>
            </div>

            {/* Right Column — Form */}
            <div id="quote-form" className="hero-enter lg:col-span-2 scroll-mt-24" style={step(4)}>
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.35)" }}>
                <div className="px-6 py-4" style={{ backgroundColor: "#F08C2A" }}>
                  <h2 className="text-white font-bold text-lg text-center">Request Your Free Quote</h2>
                  <p className="text-white/80 text-sm text-center">Fast response — we come to you</p>
                </div>
                <GHLForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Services Grid */}
      <section id="services" className="py-20 px-4 scroll-mt-16" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-7xl mx-auto">
          <Reveal as="div" variant="up">
            <SectionHeader
              label="What We Offer"
              title="Our Mobile Detailing Services"
              subtitle="Interior, exterior, and restoration services delivered to your door — anywhere on Oahu."
            />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-8">
            {serviceCards.map((s, i) => (
              <Reveal key={s.slug} as="div" variant="up" delay={Math.min(i, 4) * 80} className="flex flex-col">
                <Tilt className="h-full">
                  <ServiceCard {...s} />
                </Tilt>
              </Reveal>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/services"
              className="btn-shine btn-press group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105"
              style={{ backgroundColor: "#0A1F3D", color: "#ffffff" }}
            >
              View All Services <span className="arrow-nudge" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <StatsBand />

      {/* Why Choose Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Real work photo, replacing the old placeholder */}
            <Tilt className="rounded-2xl" max={5}>
              <div
                className="card-media relative rounded-2xl overflow-hidden aspect-[4/3] scroll-scale card-lift"
                style={{ border: "1px solid #B1D1E7" }}
              >
                <Image
                  src="/images/mercedes-exterior-detail-hawaii-kai.jpeg"
                  alt="Freshly detailed black Mercedes-Benz with polished wheels in a Hawaii Kai driveway — Oahu, Hawaii"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-bold text-base">Mercedes-Benz — Exterior & Rim Detail</p>
                  <p className="text-white/80 text-sm">Hawaii Kai, Oahu</p>
                </div>
              </div>
            </Tilt>

            {/* Content */}
            <div>
              <Reveal as="div" variant="up">
                <SectionHeader
                  label="Why Net Automotive"
                  title="Why Oahu Drivers Choose Net Automotive Detailing"
                  centered={false}
                />
              </Reveal>
              <ul className="flex flex-col gap-5">
                {[
                  {
                    title: "Fully mobile — we come to your driveway, office, or worksite.",
                    desc: "No drop-off, no waiting room, no arranging a ride. We bring the professional shop experience to wherever your car is parked.",
                  },
                  {
                    title: "Hawaii-specific care — salt air, sand, sun fade, and tropical grime.",
                    desc: "We use products and techniques calibrated for Oahu's unique coastal, UV-intense environment — not generic mainland detailing.",
                  },
                  {
                    title: "Local, trusted, and reliable — based on Oahu, serving Oahu.",
                    desc: "We're your neighbors. We know the island, know the conditions, and are here consistently — not a franchise operator from somewhere else.",
                  },
                  {
                    title: "Professional results — interior steam, hand wash, showroom finishes.",
                    desc: "Every detail is done with professional-grade equipment and products, and we don't cut corners on any step of the process.",
                  },
                ].map((item, i) => (
                  <Reveal key={item.title} as="li" variant="left" delay={i * 80} className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-0.5" style={{ backgroundColor: "rgba(240,140,42,0.15)", color: "#F08C2A" }} aria-hidden="true">✓</span>
                    <div>
                      <strong className="font-semibold block mb-1" style={{ color: "#0A1F3D" }}>{item.title}</strong>
                      <p className="text-sm leading-relaxed" style={{ color: "#6B7A90" }}>{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-7xl mx-auto">
          <Reveal as="div" variant="up">
            <SectionHeader
              label="Serving All of Oahu"
              title="Proudly Serving All of Oahu, Hawaii"
              subtitle="Mobile detailing wherever you park — from Kapolei to Kaneohe, Haleiwa to Hawaii Kai."
            />
          </Reveal>
          <div className="flex flex-wrap gap-3 justify-center">
            {locations.map((loc, i) => (
              <Reveal key={loc.slug} as="span" variant="scale" delay={Math.min(i, 10) * 45} className="inline-flex">
                <Link
                  href={`/service-areas/${loc.slug}`}
                  className="location-pill-link btn-press inline-flex px-4 py-2 rounded-full text-sm font-semibold border transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    backgroundColor: "#0A1F3D",
                    color: "#ffffff",
                    borderColor: "#B1D1E7",
                  }}
                >
                  {loc.name}
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/service-areas"
              className="btn-press group inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold text-sm border-2 transition-all hover:scale-105"
              style={{ borderColor: "#0A1F3D", color: "#0A1F3D" }}
            >
              View All Service Areas <span className="arrow-nudge" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <Reveal as="div" variant="up">
            <SectionHeader
              label="Our Work"
              title="Before & After"
              subtitle="Real results from Net Automotive Detailing jobs across Oahu."
            />
          </Reveal>
          <GalleryGrid
            images={homepageGalleryImages}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
          />
          <div className="text-center">
            <Link
              href="/gallery"
              className="btn-shine btn-press group inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105"
              style={{ backgroundColor: "#0A1F3D", color: "#ffffff" }}
            >
              View Full Gallery <span className="arrow-nudge" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-7xl mx-auto">
          <Reveal as="div" variant="up">
            <SectionHeader
              label="What Clients Say"
              title="60+ Five-Star Reviews on Google"
              subtitle="Real reviews from happy Oahu drivers — verified on our Google Business Profile."
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {reviews.map((review, i) => (
              <Reveal key={review.reviewerName} as="div" variant="up" delay={i * 80} className="flex flex-col">
                <Tilt className="h-full" max={4}>
                  <ReviewCard {...review} />
                </Tilt>
              </Reveal>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/reviews"
              className="btn-press group inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold text-sm border-2 transition-all hover:scale-105"
              style={{ borderColor: "#0A1F3D", color: "#0A1F3D" }}
            >
              Read All Reviews <span className="arrow-nudge" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABand />
    </>
  );
}
