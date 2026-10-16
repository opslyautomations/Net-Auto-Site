"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "@/components/Lightbox";
import ScrollScene from "@/components/ScrollScene";
import type { GalleryImage } from "@/lib/gallery";

interface GalleryStripProps {
  images: GalleryImage[];
}

/**
 * Two rows of real job photos that slide in opposite directions as the page
 * scrolls. Every tile opens the full-screen viewer.
 */
export default function GalleryStrip({ images }: GalleryStripProps) {
  const [openAt, setOpenAt] = useState<number | null>(null);
  const half = Math.ceil(images.length / 2);
  const rows = [
    { key: "a", start: 0, items: images.slice(0, half) },
    { key: "b", start: half, items: images.slice(half) },
  ];

  return (
    <>
      <ScrollScene className="strip flex flex-col gap-3 md:gap-4">
        {rows.map((row) => (
          <div key={row.key} className={`strip__row strip__row--${row.key} flex gap-3 md:gap-4 w-max`}>
            {row.items.map((img, j) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setOpenAt(row.start + j)}
                className="group relative shrink-0 w-[170px] sm:w-[210px] lg:w-[250px] aspect-[3/4] rounded-2xl overflow-hidden cursor-zoom-in"
                aria-label={`View larger: ${img.title}, ${img.locationLabel}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 170px, (max-width: 1024px) 210px, 250px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(180deg, transparent 40%, rgba(10,31,61,0.9) 100%)" }}
                />
                <span className="absolute inset-x-0 bottom-0 p-3 text-left translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 transition-all duration-300">
                  <span className="block text-white text-sm font-semibold truncate">{img.vehicle}</span>
                  <span className="block text-white/75 text-xs">{img.locationLabel}, Oahu</span>
                </span>
              </button>
            ))}
          </div>
        ))}
      </ScrollScene>

      {openAt !== null && (
        <Lightbox images={images} index={openAt} onClose={() => setOpenAt(null)} onNavigate={setOpenAt} />
      )}
    </>
  );
}
