"use client";

import { useRef, type ReactNode, type PointerEvent as ReactPointerEvent } from "react";

interface TiltProps {
  children: ReactNode;
  className?: string;
  /** Maximum rotation in degrees. */
  max?: number;
}

/**
 * Cursor-reactive 3D tilt.
 *
 * Also publishes --mx / --my (pointer position as a percentage). Because custom
 * properties inherit, any descendant carrying the .spotlight class picks up the
 * cursor glow for free — no extra Client Components needed.
 *
 * Ignored for touch pointers and under prefers-reduced-motion.
 */
export default function Tilt({ children, className = "", max = 6 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  const handleMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty("--tilt-y", `${(px - 0.5) * 2 * max}deg`);
      el.style.setProperty("--tilt-x", `${(0.5 - py) * 2 * max}deg`);
      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
      el.classList.add("is-tilting");
    });
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(raf.current);
    el.classList.remove("is-tilting");
    el.style.removeProperty("--tilt-x");
    el.style.removeProperty("--tilt-y");
  };

  return (
    <div ref={ref} className={`tilt ${className}`} onPointerMove={handleMove} onPointerLeave={reset}>
      {children}
    </div>
  );
}
