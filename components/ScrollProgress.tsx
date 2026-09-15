"use client";

import { useEffect, useRef } from "react";

/**
 * Reading-progress bar pinned to the top of the viewport.
 *
 * Uses a CSS scroll-timeline where supported (nothing runs on the scroll path)
 * and falls back to an rAF-throttled listener everywhere else. The bar is a
 * pure DOM concern, so it is driven by ref rather than React state.
 */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = ref.current;
    if (!bar) return;

    if (typeof CSS !== "undefined" && CSS.supports?.("animation-timeline: scroll()")) {
      bar.classList.add("scroll-progress--css");
      return;
    }

    let ticking = false;
    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      bar.style.setProperty("--progress", String(Math.min(1, Math.max(0, ratio))));
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <div ref={ref} className="scroll-progress" aria-hidden="true" />;
}
