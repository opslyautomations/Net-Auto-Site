import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import GHLForm from "@/components/GHLForm";
import { galleryImages } from "@/lib/gallery";
import { locations } from "@/lib/locations";
import { media } from "@/lib/media";
import ScrollScene from "@/components/ScrollScene";
import ParallaxImage from "@/components/ParallaxImage";
import Marquee from "@/components/Marquee";
import ServiceShowcase from "@/components/ServiceShowcase";
import ZoomReveal from "@/components/ZoomReveal";
import ProcessSteps from "@/components/ProcessSteps";
import GalleryStrip from "@/components/GalleryStrip";
import StatsBand from "@/components/StatsBand";
import HeroBackdrop from "@/components/HeroBackdrop";
import Tilt from "@/components/Tilt";
import Magnetic from "@/components/Magnetic";
import CTABand from "@/components/CTABand";
import ReviewCard from "@/components/ReviewCard";
import SectionHeader from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { PHONE, PHONE_RAW } from "@/lib/constants";
import { localBusinessSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Mobile Auto Detailing Oahu | Net Automotive",
  description: "Premium mobile auto detailing across all of Oahu, Hawaii. Interior, exterior & restoration services we bring to your door. Call (808) 777-8964 for a free quote.",
  slug: "",
});

/** Rotating hero photography. The first entry is the LCP image. */
const heroSlides = [
  media.handWashCoupe,
  {
    src: "/images/foam-wash-mobile-detailing-ewa-beach.jpeg",
    alt: "Mobile foam wash in a driveway in Ewa Beach, Oahu",
  },
  media.foamWheel,
  {
    src: "/images/toyota-supra-exterior-detail-honolulu.jpeg",
    alt: "Detailed white Toyota GR Supra in Honolulu, Oahu",
  },
];

/** Drives the staggered hero entrance defined in styles/motion.css. */
const step = (n: number) => ({ "--enter-step": n }) as CSSProperties;

const serviceCards = [
  { slug: "interior-detail", name: "Interior Detail", description: "Steam, vacuum, and deep-clean every surface inside your vehicle." },
  { slug: "exterior-detail", name: "Exterior Detail", description: "Full body hand wash, decontamination, dry, dressing, and tire shine." },
  { slug: "ceramic-coating", name: "Ceramic Coating", description: "Long-term, hydrophobic paint protection against sun and salt." },
  { slug: "paint-correction", name: "Paint Correction", description: "Machine polishing removes swirls, light scratches, and etching." },
  { slug: "carpet-shampoo", name: "Carpet Shampoo", description: "Hot-water extraction removes embedded sand, stains, and odors." },
  { slug: "seat-shampoo", name: "Seat Shampoo", description: "Deep extraction cleaning for fabric seats and stain removal." },
  { slug: "leather-conditioning", name: "Leather Conditioning", description: "UV-protective conditioning for Hawaii's heat and humidity." },
  { slug: "clay-bar-treatment", name: "Clay Bar Treatment", description: "Glass-smooth paint through professional decontamination." },
  { slug: "exterior-spray-wax", name: "Exterior Spray Wax", description: "Quick-application paint protection and gloss boost." },
  { slug: "rim-detailing", name: "Rim Detailing", description: "Wheel washing, deep barrel cleaning, and brake dust removal." },
  { slug: "engine-detailing", name: "Engine Detailing", description: "Safe engine bay degreasing, cleaning, and dressing." },
  { slug: "headlight-restoration", name: "Headlight Restoration", description: "Sand, polish, and UV-seal cloudy headlights to like-new clarity." },
  { slug: "plastic-color-restoration", name: "Plastic Color Restoration", description: "Restore faded black plastic trim with UV-resistant finish." },
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

const whyUs = [
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
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />

      {/* ───────────── Hero — conversion first: headline, proof, form ───────────── */}
      <ScrollScene
        as="section"
        mode="exit"
        className="hero-scene relative min-h-screen flex items-center pt-16 overflow-hidden"
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

        <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-20 lg:pt-16 w-full">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Copy */}
            <div className="hero-copy lg:col-span-3 lg:pt-6">
              <p
                className="hero-enter inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-5 px-3 py-1.5 rounded-full"
                style={{
                  ...step(0),
                  backgroundColor: "rgba(240,140,42,0.18)",
                  color: "#F08C2A",
                  border: "1px solid rgba(240,140,42,0.35)",
                }}
              >
                <span className="live-dot w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#F08C2A" }} aria-hidden="true" />
                Now booking across Oahu
              </p>

              <h1
                className="hero-enter text-4xl md:text-6xl xl:text-[4.25rem] font-black leading-[1.04] text-white mb-6"
                style={{ ...step(0), fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Premium Mobile Auto Detailing{" "}
                <span className="text-sheen" style={{ color: "#F08C2A" }}>Across Oahu</span>
              </h1>

              <p className="hero-enter text-lg md:text-xl mb-8 leading-relaxed max-w-2xl" style={{ ...step(1), color: "rgba(255,255,255,0.88)" }}>
                We come to you — Honolulu, Pearl City, Kapolei, Hawaii Kai, and every city in between. Showroom-quality detailing without leaving your driveway.
              </p>

              {/* Social proof */}
              <div className="hero-enter flex flex-wrap items-center gap-x-6 gap-y-3 mb-9" style={step(2)}>
                <div className="flex items-center gap-3">
                  <span className="flex text-lg tracking-tight" style={{ color: "#F08C2A" }} aria-hidden="true">★★★★★</span>
                  <span className="text-sm font-semibold text-white">60+ five-star Google reviews</span>
                </div>
                <span className="hidden sm:block w-px h-5 bg-white/25" aria-hidden="true" />
                <span className="text-sm font-medium" style={{ color: "#B1D1E7" }}>🚐 Fully mobile · 💧 Eco-friendly</span>
              </div>

              {/* CTAs */}
              <div className="hero-enter flex flex-col sm:flex-row gap-4" style={step(3)}>
                <Magnetic className="w-full sm:w-auto">
                  <a
                    href="#quote-form"
                    className="btn-shine btn-press w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-transform hover:scale-105 min-h-[48px]"
                    style={{ backgroundColor: "#F08C2A", color: "#ffffff", boxShadow: "0 10px 30px -8px rgba(240,140,42,0.6)" }}
                  >
                    Get a Free Quote <span className="arrow-nudge" aria-hidden="true">→</span>
                  </a>
                </Magnetic>
                <Magnetic className="w-full sm:w-auto">
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="pulse-ring btn-press w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 hover:bg-white/20 min-h-[48px]"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#ffffff" }}
                  >
                    📞 {PHONE}
                  </a>
                </Magnetic>
                <Link
                  href="/services"
                  className="btn-press w-full sm:w-auto inline-flex items-center justify-center px-4 py-4 font-semibold text-base text-white/85 hover:text-white nav-underline min-h-[48px]"
                >
                  View services
                </Link>
              </div>
            </div>

            {/* Form */}
            <div id="quote-form" className="hero-enter lg:col-span-2 scroll-mt-24" style={step(4)}>
              <h2 className="sr-only">Request your free quote</h2>
              <div className="rounded-2xl" style={{ boxShadow: "0 24px 60px -12px rgba(0,0,0,0.5)" }}>
                <GHLForm />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <a
          href="#services"
          className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/60 hover:text-white text-[11px] uppercase tracking-[0.25em]"
          aria-label="Scroll to services"
        >
          <span className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2" aria-hidden="true">
            <span className="scroll-cue-dot w-1 h-2 rounded-full bg-current" />
          </span>
          Explore
        </a>
      </ScrollScene>

      {/* ───────────── Trust + city ribbons ───────────── */}
      <Marquee />

      {/* ───────────── Services — photo bento ───────────── */}
      <section id="services" className="py-24 px-4 scroll-mt-16" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-7xl mx-auto">
          <Reveal as="div" variant="up">
            <SectionHeader
              label="What We Offer"
              title="Our Mobile Detailing Services"
              subtitle="Interior, exterior, and restoration services delivered to your door — anywhere on Oahu."
            />
          </Reveal>
          <ServiceShowcase services={serviceCards} moreHref="/services" />
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="btn-shine btn-press group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105"
              style={{ backgroundColor: "#0A1F3D", color: "#ffffff" }}
            >
              Compare All Services <span className="arrow-nudge" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────── Cinematic zoom moment ───────────── */}
      <ZoomReveal
        image={media.foamWheel}
        eyebrow="Mobile detailing, done right"
        title="Showroom shine. Your driveway."
        body="We bring professional-grade tools and products straight to your home, office, or condo stall — anywhere on Oahu."
      />

      {/* ───────────── By the numbers ───────────── */}
      <StatsBand />

      {/* ───────────── How it works ───────────── */}
      <ProcessSteps />

      {/* ───────────── Why choose us ───────────── */}
      <section className="py-24 px-4 overflow-hidden" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <Reveal as="div" variant="up">
              <SectionHeader
                label="Why Net Automotive"
                title="Why Oahu Drivers Choose Net Automotive Detailing"
                centered={false}
              />
            </Reveal>
            <ul className="flex flex-col gap-6">
              {whyUs.map((item, i) => (
                <Reveal key={item.title} as="li" variant="left" delay={i * 80} className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold mt-0.5" style={{ backgroundColor: "#F08C2A", color: "#ffffff" }} aria-hidden="true">✓</span>
                  <div>
                    <strong className="font-semibold block mb-1" style={{ color: "#0A1F3D" }}>{item.title}</strong>
                    <p className="text-sm leading-relaxed" style={{ color: "#6B7A90" }}>{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Real job photo, layered over a supporting detail shot */}
          <ScrollScene className="collage relative h-[420px] sm:h-[520px] lg:h-[600px]">
            <figure className="collage__back absolute right-0 top-0 w-[70%] h-[86%] rounded-3xl overflow-hidden shadow-2xl m-0">
              <ParallaxImage
                src="/images/mercedes-exterior-detail-hawaii-kai.jpeg"
                alt="Freshly detailed black Mercedes-Benz with polished wheels in a Hawaii Kai driveway — Oahu, Hawaii"
                sizes="(max-width: 1024px) 70vw, 35vw"
                className="w-full h-full"
                zoom
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 pt-16" style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.75))" }}>
                <span className="block text-white font-bold">Mercedes-Benz — Exterior &amp; Rim Detail</span>
                <span className="block text-white/80 text-sm">Hawaii Kai, Oahu</span>
              </figcaption>
            </figure>
            <div
              className="collage__front absolute left-0 bottom-0 w-[46%] h-[50%] rounded-3xl overflow-hidden shadow-2xl"
              style={{ border: "6px solid #F4F6F9" }}
            >
              <ParallaxImage src={media.tireBrush.src} alt={media.tireBrush.alt} sizes="(max-width: 1024px) 46vw, 24vw" className="w-full h-full" strength={22} />
            </div>
            <div className="collage__badge absolute left-[8%] top-8 rounded-2xl px-5 py-4 shadow-xl bg-white">
              <div className="text-lg leading-none mb-1" style={{ color: "#F08C2A" }} aria-hidden="true">★★★★★</div>
              <div className="text-sm font-bold" style={{ color: "#0A1F3D" }}>60+ five-star reviews</div>
              <div className="text-xs" style={{ color: "#6B7A90" }}>Verified on Google</div>
            </div>
          </ScrollScene>
        </div>
      </section>

      {/* ───────────── Our work — moving filmstrip of real jobs ───────────── */}
      <section className="py-24 overflow-hidden" style={{ backgroundColor: "#0A1F3D" }} aria-label="Our work">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <Reveal as="div" variant="up">
            <SectionHeader
              label="Our Work"
              title="Real Cars. Real Driveways. Real Results."
              subtitle="Every photo below is a Net Automotive job somewhere on Oahu. Tap any shot to take a closer look."
              centered={false}
              light
            />
          </Reveal>
          <Reveal as="div" variant="up" delay={120} className="shrink-0 md:mb-10">
            <Link
              href="/gallery"
              className="btn-press group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm border-2 transition-all hover:bg-white hover:text-[#0A1F3D]"
              style={{ borderColor: "rgba(255,255,255,0.5)", color: "#ffffff" }}
            >
              View Full Gallery <span className="arrow-nudge" aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
        <GalleryStrip images={galleryImages} />
      </section>

      {/* ───────────── Service areas over the island itself ───────────── */}
      <section className="relative py-28 px-4 overflow-hidden" style={{ backgroundColor: "#0A1F3D" }} aria-label="Service areas">
        <div className="absolute inset-0" aria-hidden="true">
          <ParallaxImage src={media.kualoa.src} alt="" sizes="100vw" className="w-full h-full" strength={20} zoom />
        </div>
        <div className="absolute inset-0" aria-hidden="true" style={{ background: "linear-gradient(180deg, rgba(10,31,61,0.88) 0%, rgba(10,31,61,0.55) 50%, rgba(10,31,61,0.9) 100%)" }} />

        <div className="relative max-w-5xl mx-auto">
          <Reveal as="div" variant="up">
            <SectionHeader
              label="Serving All of Oahu"
              title="Proudly Serving All of Oahu, Hawaii"
              subtitle="Mobile detailing wherever you park — from Kapolei to Kaneohe, Haleiwa to Hawaii Kai."
              light
            />
          </Reveal>
          <Reveal as="div" variant="zoom">
            <div
              className="rounded-3xl p-6 md:p-8"
              style={{ backgroundColor: "rgba(10,31,61,0.55)", border: "1px solid rgba(177,209,231,0.25)", backdropFilter: "blur(10px)" }}
            >
              <div className="flex flex-wrap gap-2.5 justify-center">
                {locations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/service-areas/${loc.slug}`}
                    className="location-pill-link btn-press inline-flex px-4 py-2 rounded-full text-sm font-semibold border transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#ffffff", borderColor: "rgba(177,209,231,0.4)" }}
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
                <a
                  href="#quote-form"
                  className="btn-shine btn-press group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm"
                  style={{ backgroundColor: "#F08C2A", color: "#ffffff" }}
                >
                  Check My Area &amp; Get a Quote <span className="arrow-nudge" aria-hidden="true">→</span>
                </a>
                <Link
                  href="/service-areas"
                  className="btn-press inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-sm border-2 hover:bg-white/10"
                  style={{ borderColor: "rgba(255,255,255,0.45)", color: "#ffffff" }}
                >
                  All Service Areas
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────── Reviews ───────────── */}
      <section className="py-24 px-4" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-7xl mx-auto">
          <Reveal as="div" variant="up">
            <SectionHeader
              label="What Clients Say"
              title="60+ Five-Star Reviews on Google"
              subtitle="Real reviews from happy Oahu drivers — verified on our Google Business Profile."
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {reviews.map((review, i) => (
              <Reveal key={review.reviewerName} as="div" variant="zoom" delay={i * 100} className="flex flex-col">
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

      {/* ───────────── Final CTA ───────────── */}
      <CTABand />
    </>
  );
}
