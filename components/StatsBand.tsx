import CountUp from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";
import { locations } from "@/lib/locations";
import { services } from "@/lib/services";
import { media } from "@/lib/media";
import ParallaxImage from "@/components/ParallaxImage";

/**
 * Social-proof strip. Counts are derived from the data files so they stay true
 * as services and service areas are added.
 */
const stats = [
  {
    value: 60,
    suffix: "+",
    label: "Five-Star Reviews",
    sub: "Verified on Google",
    srLabel: "Over 60 five-star reviews",
  },
  {
    value: locations.length,
    suffix: "",
    label: "Oahu Cities Served",
    sub: "Island-wide coverage",
    srLabel: `${locations.length} Oahu cities served`,
  },
  {
    value: services.length,
    suffix: "",
    label: "Detailing Services",
    sub: "Interior to restoration",
    srLabel: `${services.length} detailing services`,
  },
  {
    value: 100,
    suffix: "%",
    label: "Mobile Service",
    sub: "We come to you",
    srLabel: "100 percent mobile service",
  },
];

export default function StatsBand() {
  return (
    <section
      className="relative py-20 md:py-24 px-4 overflow-hidden"
      style={{ backgroundColor: "#0A1F3D" }}
      aria-label="Net Automotive Detailing by the numbers"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <ParallaxImage src={media.foamedWheel.src} alt="" sizes="100vw" className="w-full h-full" strength={24} />
      </div>
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{ background: "linear-gradient(135deg, rgba(10,31,61,0.93) 0%, rgba(18,50,95,0.82) 100%)" }}
      />
      <div className="relative max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} as="div" variant="zoom" delay={i * 90} className="text-center">
            <div
              className="text-5xl md:text-6xl font-black leading-none mb-2"
              style={{ color: "#F08C2A", fontFamily: "var(--font-poppins), sans-serif" }}
            >
              <CountUp to={stat.value} suffix={stat.suffix} label={stat.srLabel} />
            </div>
            <div className="text-white font-semibold text-sm md:text-base">{stat.label}</div>
            <div className="text-xs mt-1" style={{ color: "#B1D1E7" }}>
              {stat.sub}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
