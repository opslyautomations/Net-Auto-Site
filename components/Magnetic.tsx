"use client";

import { useRef, type ReactNode, type PointerEvent as ReactPointerEvent } from "react";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  /** Maximum pull in pixels. */
  strength?: number;
}

/**
 * Nudges its child toward the cursor. Wraps a button/link so the CTA feels like
 * it reaches back. Pointer-only and reduced-motion aware.
 */
export default function Magnetic({ children, className = "", strength = 6 }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const raf = useRef(0);

  const handleMove = (e: ReactPointerEvent<HTMLSpanElement>) => {
    if (e.pointerType === "touch") return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty("--pull-x", `${Math.max(-1, Math.min(1, dx)) * strength}px`);
      el.style.setProperty("--pull-y", `${Math.max(-1, Math.min(1, dy)) * strength}px`);
      el.classList.add("is-pulling");
    });
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(raf.current);
    el.classList.remove("is-pulling");
    el.style.removeProperty("--pull-x");
    el.style.removeProperty("--pull-y");
  };

  return (
    <span
      ref={ref}
      className={`magnetic inline-flex ${className}`}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      {children}
    </span>
  );
}
