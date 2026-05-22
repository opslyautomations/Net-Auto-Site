import type { Metadata } from "next";
import GHLForm from "@/components/GHLForm";
import CTABand from "@/components/CTABand";
import SectionHeader from "@/components/SectionHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "About Net Automotive Detailing | Oahu's Mobile",
  description: "Learn about Net Automotive Detailing — Oahu's trusted mobile auto detailing specialists. Professional, mobile, and Hawaii-experienced. Meet the team.",
  slug: "about",
  image: `${SITE_URL}/og/about.png`,
});

const breadcrumbs = [
  { name: "Home", url: `${SITE_URL}/` },
  { name: "About", url: `${SITE_URL}/about` },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero */}
      <section className="pt-24 pb-16 px-4" style={{ backgroundColor: "#0A1F3D" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
            About Net Automotive Detailing — Oahu&apos;s Mobile Detailing Specialists
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.8)" }}>
            Professional mobile auto detailing, brought to your door — anywhere on Oahu, Hawaii.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Placeholder image */}
            <div className="rounded-2xl overflow-hidden aspect-video flex items-center justify-center order-2 lg:order-1" style={{ backgroundColor: "#F4F6F9", border: "2px dashed #B1D1E7" }}>
              <div className="text-center p-8">
                <div className="text-6xl mb-4" aria-hidden="true">🚗</div>
                <p className="font-medium" style={{ color: "#6B7A90" }}>Net Automotive Detailing Team</p>
                <p className="text-sm" style={{ color: "#6B7A90" }}>Photo coming soon</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <SectionHeader label="Our Story" title="Welcome to Net Automotive Detailing" centered={false} />
              <p className="text-base leading-relaxed mb-4" style={{ color: "#0A1F3D" }}>
                Net Automotive Detailing is Oahu&apos;s trusted source for premium mobile auto detailing — a professional, convenient alternative to traditional detail shops that brings showroom-quality results directly to your driveway, office, or worksite.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#0A1F3D" }}>
                We built this business around a simple idea: vehicle owners on Oahu shouldn&apos;t have to sacrifice their time or their standards to get a professional detail. Our door-to-door model eliminates the drop-off, the wait, and the pickup logistics — you request a quote, we show up, and you drive away with a vehicle that looks genuinely better.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#0A1F3D" }}>
                Our skilled technicians are trained and equipped for Hawaii&apos;s specific environment. From the salt air and sand of the windward coast to the red volcanic soil of the central plateau, from the marine-adjacent conditions of Hawaii Kai to the urban grime of downtown Honolulu — we know what Oahu does to vehicles, and we know how to fix it. We offer the full spectrum of detailing services: interior cleaning, exterior wash and wax, headlight restoration, upholstery shampooing, leather conditioning, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeader label="Our Difference" title="What Sets Net Automotive Detailing Apart" />
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: "🚐",
                title: "Mobile Convenience",
                desc: "No drop-off, no waiting room, no second trip. We come to your location with everything needed for a complete professional detail.",
              },
              {
                icon: "🌺",
                title: "Hawaii-Tested Methods",
                desc: "We use products and techniques developed for Oahu&apos;s specific challenges: salt air, tropical UV, volcanic soil, and high-humidity interiors.",
              },
              {
                icon: "💎",
                title: "Treat Every Car Like Our Own",
                desc: "Whether it&apos;s a daily commuter or a weekend luxury vehicle, every car we detail receives the same level of careful, professional attention.",
              },
              {
                icon: "🏅",
                title: "Trained & Equipped Detailers",
                desc: "Our team uses professional-grade equipment and products — not consumer-grade supplies — to deliver results that meet and exceed client expectations.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl" style={{ backgroundColor: "#ffffff", border: "1px solid #B1D1E7" }}>
                <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                <h2 className="font-bold text-lg mb-2" style={{ color: "#0A1F3D" }}>{item.title}</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7A90" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader label="Our Promise" title="Our Commitment to Every Client" centered={false} />
          <p className="text-base leading-relaxed mb-4" style={{ color: "#0A1F3D" }}>
            Every interaction with Net Automotive Detailing is built on three things: quality, transparency, and respect. Quality means we don&apos;t cut corners — we complete every service step properly, using the right products for your vehicle&apos;s specific surfaces and conditions. We don&apos;t rush, and we don&apos;t skip steps to finish faster.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#0A1F3D" }}>
            Transparency means we communicate clearly — before, during, and after your service. We provide honest assessments of what your vehicle needs, realistic expectations about results, and straightforward pricing with no hidden fees. Respect means we treat your vehicle, your property, and your time as the valuable things they are. We show up when we say we will, work cleanly, and leave your space as we found it.
          </p>
        </div>
      </section>

      {/* Meet Eli */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader label="Meet the Owner" title="Meet Eli" centered={false} />
          <div className="p-8 rounded-2xl" style={{ backgroundColor: "#ffffff", border: "1px solid #B1D1E7" }}>
            {/* TODO: owner bio — add when Eli provides details */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ backgroundColor: "#F4F6F9" }} aria-hidden="true">
                👨‍💼
              </div>
              <div>
                <h2 className="font-bold text-lg" style={{ color: "#0A1F3D" }}>Eli</h2>
                <p className="text-sm" style={{ color: "#6B7A90" }}>Owner, Net Automotive Detailing</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#6B7A90" }}>
              Owner bio coming soon. Eli founded Net Automotive Detailing with a mission to bring professional, island-aware mobile detailing to every community on Oahu. Contact us to learn more about the business and team.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page CTA form */}
      <section className="py-16 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            title="Ready to Experience the Net Automotive Difference?"
            subtitle="Request your free quote — we come to you anywhere on Oahu."
          />
          <GHLForm />
        </div>
      </section>

      <CTABand />
    </>
  );
}
