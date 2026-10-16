import Link from "next/link";
import Image from "next/image";
import ScrollScene from "@/components/ScrollScene";
import { Reveal } from "@/components/Reveal";
import { getServiceImage } from "@/lib/media";

export interface ShowcaseService {
  slug: string;
  name: string;
  description: string;
}

interface ServiceShowcaseProps {
  services: ShowcaseService[];
  /** How many leading services get the large feature tiles. */
  featured?: number;
}

/**
 * Photo-led bento grid of services. Each tile's photo drifts with scroll and
 * zooms on hover; the whole tile is the link.
 */
export default function ServiceShowcase({ services, featured = 2 }: ServiceShowcaseProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[190px] sm:auto-rows-[220px] lg:auto-rows-[230px] gap-3 md:gap-4">
      {services.map((s, i) => {
        const big = i < featured;
        const img = getServiceImage(s.slug);
        return (
          <Reveal
            key={s.slug}
            as="div"
            variant="zoom"
            delay={Math.min(i, 5) * 70}
            className={big ? "col-span-2 row-span-2" : ""}
          >
            <Link
              href={`/services/${s.slug}`}
              className="service-tile group relative block h-full rounded-2xl overflow-hidden"
              style={{ backgroundColor: "#0A1F3D" }}
            >
              <ScrollScene className="absolute inset-0">
                <div className="parallax-media absolute inset-x-0 -top-[10%] h-[120%]">
                  <div className="service-tile__zoom relative w-full h-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes={big ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"}
                      className="object-cover"
                    />
                  </div>
                </div>
              </ScrollScene>

              <span
                className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-90"
                style={{ background: "linear-gradient(180deg, rgba(10,31,61,0.05) 20%, rgba(10,31,61,0.92) 100%)" }}
                aria-hidden="true"
              />

              <span className="absolute inset-x-0 bottom-0 p-4 md:p-6 flex flex-col gap-1.5">
                {big && (
                  <span
                    className="self-start text-[11px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full mb-1"
                    style={{ backgroundColor: "#F08C2A", color: "#ffffff" }}
                  >
                    Signature service
                  </span>
                )}
                <span
                  className={`font-bold text-white leading-tight ${big ? "text-2xl md:text-3xl" : "text-base md:text-lg"}`}
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {s.name}
                </span>
                <span
                  className={`text-sm leading-snug ${big ? "block max-w-md" : "hidden md:block"} service-tile__desc`}
                  style={{ color: "rgba(255,255,255,0.82)" }}
                >
                  {s.description}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold mt-1" style={{ color: "#F08C2A" }}>
                  {big ? "Explore service" : "Learn more"} <span className="arrow-nudge" aria-hidden="true">→</span>
                </span>
              </span>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
