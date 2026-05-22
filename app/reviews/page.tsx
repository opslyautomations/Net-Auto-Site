import type { Metadata } from "next";
import Link from "next/link";
import ReviewCard from "@/components/ReviewCard";
import CTABand from "@/components/CTABand";
import SectionHeader from "@/components/SectionHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import GHLForm from "@/components/GHLForm";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, GBP_URL } from "@/lib/constants";
import { aggregateRatingSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Reviews — Net Automotive Detailing Oahu",
  description: "Read real reviews from Oahu drivers who've experienced Net Automotive Detailing. 5-star mobile auto detailing service across all of Hawaii's Oahu island.",
  slug: "reviews",
  image: `${SITE_URL}/og/reviews.png`,
});

const reviews = [
  {
    reviewerName: "Kaleo M.",
    location: "Kailua, Oahu",
    rating: 5 as const,
    text: "Net Automotive Detailing did an incredible job on my truck. The interior was completely transformed — they got out sand and stains I thought would never come out. The team was professional, on time, and came right to my driveway. Will definitely be booking again!",
    date: "January 2025",
  },
  {
    reviewerName: "Sarah T.",
    location: "Pearl City, Oahu",
    rating: 5 as const,
    text: "I've lived in Hawaii for years and the salt air does real damage to cars. Eli's team knows exactly what they're doing for island conditions. My paint looks better than it has in years. Highly recommend for anyone on Oahu who wants professional results without the hassle of a shop drop-off.",
    date: "February 2025",
  },
  {
    reviewerName: "Marcus H.",
    location: "Kaneohe, Oahu",
    rating: 5 as const,
    text: "Booked the full interior and exterior detail — honestly one of the best detailing experiences I've had. They arrived on time, communicated every step, and the results were showroom quality. The headlight restoration on my 4Runner was the icing on the cake.",
    date: "March 2025",
  },
  {
    reviewerName: "Jenna K.",
    location: "Kapolei, Oahu",
    rating: 5 as const,
    text: "Super convenient and professional. With two kids and a busy schedule, I can never find time to take my car in anywhere. Having them come to my driveway was a game-changer. The interior looks amazing — the carpet shampoo removed stains I had given up on.",
    date: "March 2025",
  },
  {
    reviewerName: "Tyrone B.",
    location: "Honolulu, Oahu",
    rating: 5 as const,
    text: "I live in a condo in Kakaako and was worried about logistics. They came right to the parking garage and got the job done perfectly. No hassle at all. The exterior detail was thorough and my car looked brand new. Great service, great communication.",
    date: "April 2025",
  },
  {
    reviewerName: "Nalani F.",
    location: "Hawaii Kai, Oahu",
    rating: 5 as const,
    text: "Best mobile detailing on the island. They took care of my leather seats, which had been looking faded from the marina salt air. The conditioning treatment made a huge difference. Eli's team is professional and clearly knows what they're doing in Hawaii's climate.",
    date: "April 2025",
  },
];

const breadcrumbs = [
  { name: "Home", url: `${SITE_URL}/` },
  { name: "Reviews", url: `${SITE_URL}/reviews` },
];

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema(5.0, reviews.length)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero */}
      <section className="pt-24 pb-16 px-4" style={{ backgroundColor: "#0A1F3D" }}>
        <div className="max-w-4xl mx-auto text-center">
          <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Reviews", href: "/reviews" }]} />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
            Reviews — Net Automotive Detailing Oahu
          </h1>
          <div className="flex items-center justify-center gap-2 mb-4" aria-label="5 out of 5 stars — average rating">
            {[1,2,3,4,5].map((i) => (
              <span key={i} className="text-3xl" style={{ color: "#F08C2A" }} aria-hidden="true">★</span>
            ))}
          </div>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.8)" }}>
            Real reviews from real Oahu drivers — verified on our Google Business Profile.
          </p>
        </div>
      </section>

      {/* Aggregate Rating Banner */}
      <section style={{ backgroundColor: "#F08C2A" }}>
        <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-white font-black text-3xl">5.0 ★</p>
            <p className="text-white/90 font-semibold">Average Google Rating</p>
          </div>
          <div className="text-center">
            <p className="text-white font-bold text-xl">{reviews.length}+ Reviews</p>
            <p className="text-white/90 text-sm">Verified Google Business Profile</p>
          </div>
          <a
            href={GBP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105"
            style={{ backgroundColor: "#0A1F3D", color: "#ffffff" }}
          >
            See on Google →
          </a>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="Client Reviews"
            title="What Oahu Drivers Are Saying"
            subtitle="Honest feedback from clients across the island."
          />
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {reviews.map((review) => (
              <ReviewCard key={review.reviewerName} {...review} />
            ))}
          </div>

          {/* Leave Review CTA */}
          <div className="text-center">
            <p className="text-base mb-4" style={{ color: "#6B7A90" }}>
              Had a great experience? We&apos;d love to hear from you.
            </p>
            <a
              href={GBP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105"
              style={{ backgroundColor: "#F08C2A", color: "#ffffff" }}
            >
              Leave Us a Review on Google →
            </a>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            title="Ready to Experience 5-Star Service?"
            subtitle="Request your free quote and join our happy Oahu clients."
          />
          <GHLForm />
        </div>
      </section>

      <CTABand />
    </>
  );
}
