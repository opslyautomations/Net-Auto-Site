import Image from "next/image";
import type { ReactNode } from "react";
import ScrollScene from "@/components/ScrollScene";
import type { MediaImage } from "@/lib/media";

interface PageHeroProps {
  image: MediaImage;
  children: ReactNode;
  /** CSS object-position for the backdrop crop. */
  objectPosition?: string;
  /** Bottom padding — matches the tighter heroes on some pages. */
  compact?: boolean;
}

/**
 * Photo-backed hero for inner pages. The backdrop drifts and zooms as the hero
 * scrolls away; the copy lifts and fades slightly ahead of it. The photo is
 * the page's LCP element, so it is preloaded.
 */
export default function PageHero({ image, children, objectPosition, compact = false }: PageHeroProps) {
  return (
    <ScrollScene
      as="section"
      mode="exit"
      className={`page-hero relative overflow-hidden pt-28 px-4 ${compact ? "pb-14" : "pb-16 md:pb-20"}`}
      style={{ backgroundColor: "#0A1F3D" }}
    >
      <div className="hero-media absolute inset-0" aria-hidden="true">
        <div className="ken-burns relative w-full h-full">
          <Image
            src={image.src}
            alt=""
            fill
            sizes="100vw"
            preload
            className="object-cover"
            style={objectPosition ? { objectPosition } : undefined}
          />
        </div>
      </div>
      <div className="page-hero-scrim absolute inset-0" aria-hidden="true" />

      {/* hero-enter lives on an inner wrapper: its fill-mode animation would
          otherwise override the scroll-linked transform on .hero-copy */}
      <div className="hero-copy relative">
        <div className="hero-enter">{children}</div>
      </div>
    </ScrollScene>
  );
}
