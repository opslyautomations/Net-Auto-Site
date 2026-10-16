import Image from "next/image";
import Link from "next/link";
import { PHONE, PHONE_RAW } from "@/lib/constants";
import { media, type MediaImage } from "@/lib/media";
import { Reveal } from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import ScrollScene from "@/components/ScrollScene";

interface CTABandProps {
  title?: string;
  subtitle?: string;
  image?: MediaImage;
}

/**
 * Closing call to action. The backdrop photo zooms out as the band scrolls
 * into view, so the last thing on every page has a little cinema to it.
 */
export default function CTABand({
  title = "Ready for a Cleaner, Sharper Ride?",
  subtitle = "Get a free quote in minutes — we'll come to you anywhere on Oahu.",
  image = media.northShoreSunset,
}: CTABandProps) {
  return (
    <ScrollScene
      as="section"
      className="cta-scene relative overflow-hidden"
      style={{ backgroundColor: "#0A1F3D" }}
      aria-label="Call to action"
    >
      <div className="cta-media absolute inset-0" aria-hidden="true">
        <Image src={image.src} alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,31,61,0.82) 0%, rgba(10,31,61,0.62) 50%, rgba(10,31,61,0.9) 100%)",
        }}
      />
      <div
        className="float-slow absolute -bottom-40 left-1/2 -translate-x-1/2 w-[46rem] h-[30rem] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle, rgba(240,140,42,0.28) 0%, transparent 65%)" }}
      />

      <Reveal variant="zoom" className="relative">
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-32 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-5" style={{ color: "#ffffff" }}>
            {title}
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.88)" }}>
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Magnetic>
              <Link
                href="/contact#quote-form"
                className="btn-shine btn-press group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 min-h-[48px]"
                style={{ backgroundColor: "#F08C2A", color: "#ffffff" }}
              >
                Get My Free Quote <span className="arrow-nudge" aria-hidden="true">→</span>
              </Link>
            </Magnetic>
            <Magnetic>
              <a
                href={`tel:${PHONE_RAW}`}
                className="btn-press inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base border-2 transition-all hover:scale-105 hover:bg-white/10 min-h-[48px]"
                style={{ borderColor: "rgba(255,255,255,0.55)", color: "#ffffff" }}
              >
                📞 Call {PHONE}
              </a>
            </Magnetic>
          </div>
        </div>
      </Reveal>
    </ScrollScene>
  );
}
