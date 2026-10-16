import Image from "next/image";
import ScrollScene from "@/components/ScrollScene";
import Magnetic from "@/components/Magnetic";
import { PHONE, PHONE_RAW } from "@/lib/constants";
import type { MediaImage } from "@/lib/media";

interface ZoomRevealProps {
  image: MediaImage;
  eyebrow: string;
  title: string;
  body: string;
  ctaHref?: string;
  ctaLabel?: string;
}

/**
 * Cinematic set piece: a framed photo pinned to the viewport grows to full
 * bleed while the photo itself zooms out, then the headline and CTA rise in.
 *
 * rest={1} means that without JavaScript, and under reduced motion, the
 * section simply renders in its finished, fully legible state.
 */
export default function ZoomReveal({
  image,
  eyebrow,
  title,
  body,
  ctaHref = "#quote-form",
  ctaLabel = "Get My Free Quote",
}: ZoomRevealProps) {
  return (
    <ScrollScene as="section" mode="sticky" rest={1} className="zoom-scene relative" aria-label={title}>
      <div className="sticky top-0 h-[100svh] overflow-hidden flex items-center justify-center" style={{ backgroundColor: "#0A1F3D" }}>
        <div className="zoom-frame absolute inset-0 overflow-hidden">
          <Image src={image.src} alt={image.alt} fill sizes="100vw" className="zoom-photo object-cover" />
          {/* Shade deepens only as the copy arrives, so the photo reads first */}
          <div
            className="zoom-shade absolute inset-0"
            style={{ background: "radial-gradient(ellipse at center, rgba(10,31,61,0.6) 0%, rgba(10,31,61,0.88) 75%)" }}
          />
        </div>

        <div className="zoom-copy relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] mb-4" style={{ color: "#F08C2A" }}>
            {eyebrow}
          </p>
          <h2 className="text-4xl md:text-6xl font-black leading-[1.05] mb-6" style={{ color: "#ffffff" }}>
            {title}
          </h2>
          <p className="text-lg md:text-xl mb-9 leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
            {body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Magnetic>
              <a
                href={ctaHref}
                className="btn-shine btn-press inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base min-h-[48px]"
                style={{ backgroundColor: "#F08C2A", color: "#ffffff" }}
              >
                {ctaLabel} <span className="arrow-nudge" aria-hidden="true">→</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={`tel:${PHONE_RAW}`}
                className="btn-press inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 rounded-xl font-bold text-base border-2 min-h-[48px] hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.5)", color: "#ffffff" }}
              >
                📞 {PHONE}
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </ScrollScene>
  );
}
