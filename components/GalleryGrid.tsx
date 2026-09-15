"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "@/components/Lightbox";
import { Reveal } from "@/components/Reveal";
import type { GalleryImage } from "@/lib/gallery";

interface GalleryGridProps {
  images: GalleryImage[];
  className?: string;
  /** Tailwind sizes attribute for the thumbnails. */
  sizes?: string;
}

/**
 * Clickable photo grid backed by a full-screen viewer. Each tile is a real
 * button, so the gallery is reachable by keyboard as well as pointer.
 */
export default function GalleryGrid({
  images,
  className = "grid grid-cols-2 md:grid-cols-3 gap-4",
  sizes = "(max-width: 768px) 50vw, 33vw",
}: GalleryGridProps) {
  const [openAt, setOpenAt] = useState<number | null>(null);

  return (
    <>
      <div className={className}>
        {images.map((img, i) => (
          <Reveal
            key={img.src}
            as="div"
            variant="scale"
            delay={Math.min(i, 5) * 70}
            className="h-full"
          >
            <button
              type="button"
              onClick={() => setOpenAt(i)}
              className="group relative aspect-[4/3] w-full rounded-xl overflow-hidden block card-lift cursor-zoom-in"
              style={{ border: "1px solid #B1D1E7" }}
              aria-label={`View larger: ${img.title}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={sizes}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.07]"
              />

              {/* Caption veil */}
              <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300" />

              <span className="absolute bottom-0 left-0 right-0 p-2.5 text-left translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 transition-all duration-300">
                <span className="block text-white text-xs font-semibold truncate">{img.title}</span>
                <span className="block text-white/80 text-xs">{img.locationLabel}, Oahu</span>
              </span>

              {/* Zoom affordance */}
              <span
                className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100 transition-all duration-300"
                style={{ backgroundColor: "rgba(240,140,42,0.92)" }}
                aria-hidden="true"
              >
                ⤢
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {openAt !== null && (
        <Lightbox
          images={images}
          index={openAt}
          onClose={() => setOpenAt(null)}
          onNavigate={setOpenAt}
        />
      )}
    </>
  );
}
