import Link from "next/link";
import { locations } from "@/lib/locations";

const trust = [
  "⭐ 60+ Five-Star Reviews",
  "🚐 100% Mobile Service",
  "📅 Same-Week Availability",
  "✅ Satisfaction Guaranteed",
  "💧 Eco-Friendly Products",
  "🌺 Locally Owned on Oahu",
];

/**
 * Two counter-scrolling ribbons: trust promises and every city we serve. The
 * track holds the content twice and slides by half its width, so the loop is
 * seamless. Hovering pauses it; reduced motion stops it entirely.
 */
export default function Marquee() {
  return (
    <section aria-label="Why Oahu drivers book with us" style={{ backgroundColor: "#0A1F3D" }}>
      <div className="marquee py-4 border-b" style={{ borderColor: "rgba(177,209,231,0.15)" }}>
        <ul className="marquee__track" style={{ "--marquee-duration": "38s" } as React.CSSProperties}>
          {[0, 1].map((copy) =>
            trust.map((item) => (
              <li
                key={`${copy}-${item}`}
                className="px-8 text-sm md:text-base font-semibold text-white whitespace-nowrap"
                aria-hidden={copy === 1 || undefined}
              >
                {item}
              </li>
            )),
          )}
        </ul>
      </div>
      <nav className="marquee py-3" aria-label="Service areas">
        <ul className="marquee__track marquee__track--reverse" style={{ "--marquee-duration": "60s" } as React.CSSProperties}>
          {[0, 1].map((copy) =>
            locations.map((loc) => (
              <li key={`${copy}-${loc.slug}`} aria-hidden={copy === 1 || undefined}>
                <Link
                  href={`/service-areas/${loc.slug}`}
                  tabIndex={copy === 1 ? -1 : undefined}
                  className="inline-flex items-center gap-2 px-5 text-xs md:text-sm font-medium uppercase tracking-widest whitespace-nowrap transition-colors hover:text-white"
                  style={{ color: "#B1D1E7" }}
                >
                  <span style={{ color: "#F08C2A" }} aria-hidden="true">◆</span>
                  {loc.name}
                </Link>
              </li>
            )),
          )}
        </ul>
      </nav>
    </section>
  );
}
