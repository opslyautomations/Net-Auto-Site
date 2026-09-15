import CountUp from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";
import { locations } from "@/lib/locations";
import { services } from "@/lib/services";

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
      className="py-14 px-4"
      style={{
        background: "linear-gradient(135deg, #0A1F3D 0%, #12325f 100%)",
      }}
      aria-label="Net Automotive Detailing by the numbers"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} as="div" variant="up" delay={i * 90} className="text-center">
            <div
              className="text-4xl md:text-5xl font-black leading-none mb-2"
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
