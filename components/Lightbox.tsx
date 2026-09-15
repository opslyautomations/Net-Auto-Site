"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import type { GalleryImage } from "@/lib/gallery";

interface LightboxProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}

/**
 * Full-screen image viewer: arrow keys / on-screen buttons / swipe to move
 * between shots, Escape or backdrop click to leave.
 */
export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const restoreFocusTo = useRef<Element | null>(null);
  const touchStartX = useRef<number | null>(null);

  const image = images[index];
  const count = images.length;

  const go = useCallback(
    (delta: number) => onNavigate((index + delta + count) % count),
    [index, count, onNavigate],
  );

  // Keyboard controls
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  // Lock background scroll and park focus inside the dialog
  useEffect(() => {
    restoreFocusTo.current = document.activeElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = overflow;
      (restoreFocusTo.current as HTMLElement | null)?.focus?.();
    };
  }, []);

  if (!image) return null;

  return (
    <div
      ref={dialogRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label={`${image.title} — image ${index + 1} of ${count}`}
      className="lightbox-backdrop fixed inset-0 z-[70] flex items-center justify-center p-4 outline-none"
      style={{ backgroundColor: "rgba(6,17,33,0.94)", backdropFilter: "blur(6px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1);
        touchStartX.current = null;
      }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center text-white text-xl transition-colors hover:bg-white/20"
        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        aria-label="Close image viewer"
      >
        ✕
      </button>

      {count > 1 && (
        <>
          <button
            onClick={() => go(-1)}
            className="absolute left-2 md:left-6 w-11 h-11 rounded-full flex items-center justify-center text-white text-xl transition-colors hover:bg-white/20"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-2 md:right-6 w-11 h-11 rounded-full flex items-center justify-center text-white text-xl transition-colors hover:bg-white/20"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            aria-label="Next image"
          >
            ›
          </button>
        </>
      )}

      <figure
        key={image.src}
        className="lightbox-figure flex flex-col items-center gap-4 max-w-5xl w-full"
      >
        {/* Fixed viewport box + object-contain: portrait and landscape shots both
            fit without the frame jumping size as you page through them. */}
        <div className="relative w-full" style={{ height: "min(72vh, 780px)" }}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 92vw, 70vw"
            className="object-contain rounded-xl"
          />
        </div>
        <figcaption className="text-center px-2">
          <p className="text-white font-semibold text-sm md:text-base">{image.title}</p>
          <p className="text-white/70 text-xs md:text-sm mt-1">
            {image.serviceLabel} · {image.locationLabel}, Oahu
          </p>
          <p className="text-white/40 text-xs mt-2">
            {index + 1} / {count}
          </p>
        </figcaption>
      </figure>
    </div>
  );
}
