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

      {/* Meet Elijah — Owner Bio */}
      <section className="py-16 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Photo placeholder */}
            <div className="rounded-2xl overflow-hidden aspect-square flex items-center justify-center order-2 lg:order-1 lg:sticky lg:top-24" style={{ backgroundColor: "#F4F6F9", border: "2px dashed #B1D1E7" }}>
              <div className="text-center p-8">
                <div className="text-6xl mb-4" aria-hidden="true">👨‍💼</div>
                <p className="font-medium" style={{ color: "#6B7A90" }}>Elijah Churchwell</p>
                <p className="text-sm" style={{ color: "#6B7A90" }}>Photo coming soon</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <SectionHeader label="Meet the Owner" title="Hi, I&apos;m Elijah Churchwell" centered={false} />
              <p className="text-base leading-relaxed mb-4" style={{ color: "#0A1F3D" }}>
                What started as a high school job turned into a craft, and eventually, a calling. I&apos;ve spent years perfecting the art of automotive detailing, and in the past year, I took everything I&apos;ve learned and built it into something of my own: a mobile detailing service dedicated to bringing showroom-quality results right to your driveway, anywhere on Oahu.
              </p>

              <h2 className="text-xl font-bold mb-3 mt-8" style={{ color: "#0A1F3D", fontFamily: "var(--font-poppins), sans-serif" }}>
                A Personal Approach to Every Vehicle
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#0A1F3D" }}>
                I&apos;m a one-person operation, and that&apos;s by design. When you book with Net Automotive Detailing, you&apos;re not handing your vehicle off to a rotating crew — you&apos;re working directly with me from start to finish. Every wheel well, every door jamb, every stitch of interior gets the same level of attention, because details aren&apos;t just part of the name, they&apos;re the entire philosophy.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#0A1F3D" }}>
                Over 750 vehicles later, that commitment hasn&apos;t changed. Neither has my promise: I don&apos;t accept payment until you&apos;re genuinely happy with the result. Five-star reviews on Google aren&apos;t an accident — they&apos;re the byproduct of doing the job right, every single time.
              </p>

              <h2 className="text-xl font-bold mb-3" style={{ color: "#0A1F3D", fontFamily: "var(--font-poppins), sans-serif" }}>
                What I Offer
              </h2>
              <p className="text-base leading-relaxed mb-3" style={{ color: "#0A1F3D" }}>
                Net Automotive Detailing is fully mobile, serving all of Oahu. Whether you&apos;re in Honolulu, Kailua, Kapolei, or anywhere in between, I bring the shop to you. Services include:
              </p>
              <ul className="flex flex-col gap-2 mb-8">
                {[
                  "Full interior and exterior detailing",
                  "Deep cleaning — for vehicles that need more than a standard wash",
                  "Headlight restoration — bringing clarity and safety back to dull, oxidized lenses",
                  "Recurring monthly maintenance — with discounted pricing for loyal clients",
                  "Military discounts — a small thank-you to those who serve",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 p-3 rounded-xl" style={{ backgroundColor: "#F4F6F9", border: "1px solid #B1D1E7" }}>
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5" style={{ backgroundColor: "rgba(240,140,42,0.15)", color: "#F08C2A" }} aria-hidden="true">✓</span>
                    <span className="text-sm" style={{ color: "#0A1F3D" }}>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-bold mb-3" style={{ color: "#0A1F3D", fontFamily: "var(--font-poppins), sans-serif" }}>
                Built on Trust, Driven by Detail
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#0A1F3D" }}>
                Whether your daily driver needs a refresh or your weekend ride deserves a true deep clean, the standard stays the same. Friendly service, honest work, and results you can see in the reflection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust pillars */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeader label="Why Clients Choose Eli" title="What Sets Net Automotive Detailing Apart" />
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: "🤝",
                title: "One Person, Start to Finish",
                desc: "You work directly with Elijah — not a rotating crew. Every vehicle receives the same hands-on attention from booking to final inspection.",
              },
              {
                icon: "✅",
                title: "No Payment Until You&apos;re Happy",
                desc: "Elijah doesn&apos;t accept payment until you&apos;re genuinely satisfied with the result. That&apos;s the promise behind every appointment.",
              },
              {
                icon: "🚐",
                title: "Fully Mobile — We Come to You",
                desc: "No drop-off, no waiting room, no second trip. Eli brings professional-grade equipment directly to your driveway, condo, or worksite.",
              },
              {
                icon: "🎖️",
                title: "Military Discounts Available",
                desc: "Net Automotive Detailing proudly offers discounted pricing for active duty and veteran military members across Oahu.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl" style={{ backgroundColor: "#ffffff", border: "1px solid #B1D1E7" }}>
                <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#0A1F3D" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p className="text-sm leading-relaxed" style={{ color: "#6B7A90" }} dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            title="Ready to See the Difference?"
            subtitle="Request a quote below to get your booking scheduled — Elijah would love to take care of your vehicle."
          />
          <GHLForm />
        </div>
      </section>

      <CTABand />
    </>
  );
}
