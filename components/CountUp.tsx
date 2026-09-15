"use client";

import { useEffect, useRef } from "react";

interface CountUpProps {
  to: number;
  suffix?: string;
  prefix?: string;
  /** Animation length in ms. */
  duration?: number;
  className?: string;
  /** Full text announced to screen readers, e.g. "Over 60 five-star reviews". */
  label: string;
}

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/**
 * Counts up to `to` the first time it scrolls into view.
 *
 * The final value is rendered on the server, so the real number is present
 * without JavaScript and for crawlers; the effect rewinds to zero and animates
 * only once we know the browser can run it. Digits are written straight to the
 * DOM rather than through state, so a 1.6s count costs no React renders.
 *
 * The animating digits are aria-hidden — assistive tech reads the stable
 * `label` instead, so a partial value is never announced.
 */
export default function CountUp({
  to,
  suffix = "",
  prefix = "",
  duration = 1600,
  className = "",
  label,
}: CountUpProps) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = numberRef.current;
    if (!el) return;

    const write = (n: number) => {
      el.textContent = `${prefix}${n}${suffix}`;
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      write(to);
      return;
    }

    let raf = 0;
    write(0);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.unobserve(el);

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          write(Math.round(easeOutExpo(t) * to));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration, prefix, suffix]);

  return (
    <span className={className}>
      <span ref={numberRef} aria-hidden="true" className="count-up">
        {prefix}
        {to}
        {suffix}
      </span>
      <span className="sr-only">{label}</span>
    </span>
  );
}
