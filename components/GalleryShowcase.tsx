"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Lightbox from "@/components/Lightbox";
import { Reveal } from "@/components/Reveal";
import type { GalleryImage } from "@/lib/gallery";

interface GalleryShowcaseProps {
  images: GalleryImage[];
}

/**
 * Filterable gallery with a full-screen viewer.
 *
 * Filter options are derived from the data so a new service category shows up
 * here automatically. The lightbox receives the *filtered* list, so paging with
 * the arrow keys stays inside whatever the visitor is currently looking at.
 */
export default function GalleryShowcase({ images }: GalleryShowcaseProps) {
  const [active, setActive] = useState<string>("all");
  const [openAt, setOpenAt] = useState<number | null>(null);

  const filters = useMemo(() => {
    const seen = new Map<string, string>();
    images.forEach((img) => seen.set(img.service, img.serviceLabel));
    return [
      { key: "all", label: "All Work", count: images.length },
      ...Array.from(seen, ([key, label]) => ({
        key,
        label,
        count: images.filter((img) => img.service === key).length,
      })),
    ];
  }, [images]);

  const visible = useMemo(
    () => (active === "all" ? images : images.filter((img) => img.service === active)),
    [images, active],
  );

  return (
    <>
      {/* Filter chips */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-8" role="group" aria-label="Filter photos by service">
        {filters.map((f) => {
          const isOn = active === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => {
                setActive(f.key);
                setOpenAt(null);
              }}
              aria-pressed={isOn}
              className="btn-press px-4 py-2 rounded-full text-sm font-semibold border transition-all hover:-translate-y-0.5"
              style={
                isOn
                  ? { backgroundColor: "#0A1F3D", color: "#ffffff", borderColor: "#0A1F3D" }
                  : { backgroundColor: "#ffffff", color: "#0A1F3D", borderColor: "#B1D1E7" }
              }
            >
              {f.label}
              <span className="ml-1.5 opacity-60">{f.count}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((img, i) => (
          <Reveal
            /* Keying on filter + src replays the entrance when the filter changes. */
            key={`${active}-${img.src}`}
            as="div"
            variant="scale"
            delay={Math.min(i, 6) * 60}
            className="h-full"
          >
            <button
              type="button"
              onClick={() => setOpenAt(i)}
              className="group text-left w-full h-full rounded-2xl overflow-hidden card-lift cursor-zoom-in"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #B1D1E7",
                boxShadow: "0 2px 12px rgba(10,31,61,0.06)",
              }}
              aria-label={`View larger: ${img.title}`}
            >
              <span className="relative block aspect-[4/3] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                  loading={i < 3 ? "eager" : "lazy"}
                />
                <span
                  className="absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full"
                  style={{ backgroundColor: "#F08C2A", color: "#ffffff" }}
                >
                  {img.serviceLabel}
                </span>
                <span className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300" />
                <span
                  className="absolute bottom-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-white scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100 transition-all duration-300"
                  style={{ backgroundColor: "rgba(240,140,42,0.95)" }}
                  aria-hidden="true"
                >
                  ⤢
                </span>
              </span>

              <span className="px-4 py-3 flex items-center justify-between gap-2">
                <span className="block">
                  <span className="block text-sm font-semibold" style={{ color: "#0A1F3D" }}>
                    {img.vehicle}
                  </span>
                  <span className="block text-xs" style={{ color: "#6B7A90" }}>
                    {img.locationLabel}, Oahu
                  </span>
                </span>
                <span
                  className="text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap"
                  style={{ backgroundColor: "rgba(10,31,61,0.07)", color: "#0A1F3D" }}
                >
                  📍 {img.locationLabel}
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {openAt !== null && visible[openAt] && (
        <Lightbox
          images={visible}
          index={openAt}
          onClose={() => setOpenAt(null)}
          onNavigate={setOpenAt}
        />
      )}
    </>
  );
}
