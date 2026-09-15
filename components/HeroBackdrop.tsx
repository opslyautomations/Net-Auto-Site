"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export interface HeroSlide {
  src: string;
  alt: string;
}

interface HeroBackdropProps {
  slides: HeroSlide[];
  /** ms each slide stays on screen */
  interval?: number;
}

/**
 * Full-bleed hero photography with a slow Ken Burns drift and a gentle crossfade.
 *
 * Performance notes:
 * - Only the first slide is server-rendered and preloaded; it is the LCP element.
 * - The remaining slides mount after the browser goes idle so they never compete
 *   with the LCP fetch, and they load lazily.
 * - Rotation is skipped entirely under prefers-reduced-motion, and paused while
 *   the tab is hidden.
 */
export default function HeroBackdrop({ slides, interval = 6500 }: HeroBackdropProps) {
  const [index, setIndex] = useState(0);
  const [extrasReady, setExtrasReady] = useState(false);

  // Mount the non-LCP slides only once the browser is idle.
  useEffect(() => {
    if (slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const schedule =
      window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1200));
    const cancel = window.cancelIdleCallback ?? window.clearTimeout;

    const handle = schedule(() => setExtrasReady(true));
    return () => cancel(handle as number);
  }, [slides.length]);

  // Rotate.
  useEffect(() => {
    if (!extrasReady || slides.length < 2) return;

    let timer: number | undefined;

    const start = () => {
      window.clearInterval(timer);
      timer = window.setInterval(() => {
        setIndex((i) => (i + 1) % slides.length);
      }, interval);
    };

    const onVisibility = () => {
      if (document.hidden) window.clearInterval(timer);
      else start();
    };

    start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [extrasReady, slides.length, interval]);

  const visible = extrasReady ? slides : slides.slice(0, 1);

  return (
    // On narrow screens the hero is ~1900px tall (the quote form dominates it),
    // so a full-height backdrop would crush object-cover into an unreadable
    // vertical sliver. Bounding the photo to one viewport keeps the crop
    // legible and lets the rest of the hero sit on flat navy.
    <div
      className="absolute left-0 right-0 top-0 h-[100svh] lg:bottom-0 lg:h-auto overflow-hidden"
      aria-hidden="true"
    >
      {visible.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
        >
          <div className="relative w-full h-full ken-burns">
            <Image
              src={slide.src}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              {...(i === 0 ? { preload: true } : { loading: "lazy" as const })}
            />
          </div>
        </div>
      ))}

      {/* Readability scrim — responsive, see .hero-scrim in styles/motion.css */}
      <div className="hero-scrim" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 45%, rgba(177,209,231,0.10) 0%, transparent 60%)",
        }}
      />

      {/* Blends the bottom edge of the photo into the section's navy on mobile */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 lg:hidden"
        style={{ background: "linear-gradient(180deg, transparent 0%, #0A1F3D 100%)" }}
      />
    </div>
  );
}
