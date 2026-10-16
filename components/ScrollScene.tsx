"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

/**
 * How scroll position maps to the 0 → 1 `--p` progress value.
 *
 * - through: 0 as the element's top enters the bottom of the viewport,
 *            1 as its bottom leaves the top. Good for parallax.
 * - enter:   0 as the top enters the viewport, 1 once the top reaches the top.
 * - exit:    0 while the element sits at the top of the page, 1 once it has
 *            fully scrolled out. Good for heroes.
 * - sticky:  for a tall wrapper with a `position: sticky` child — 0 when the
 *            wrapper's top reaches the viewport top, 1 when its bottom reaches
 *            the viewport bottom.
 */
export type SceneMode = "through" | "enter" | "exit" | "sticky";

interface Scene {
  el: HTMLElement;
  mode: SceneMode;
  last: number;
}

/* ---------- One shared, rAF-throttled scroll loop for every scene ---------- */

const scenes = new Map<HTMLElement, Scene>();
const live = new Set<Scene>();
let frame = 0;
let observer: IntersectionObserver | null = null;

function progress(scene: Scene, vh: number): number {
  const r = scene.el.getBoundingClientRect();
  let p: number;
  switch (scene.mode) {
    case "enter":
      p = (vh - r.top) / vh;
      break;
    case "exit":
      p = r.height > 0 ? -r.top / r.height : 0;
      break;
    case "sticky": {
      const span = r.height - vh;
      p = span > 0 ? -r.top / span : 0;
      break;
    }
    default:
      p = (vh - r.top) / (vh + r.height);
  }
  return Math.min(1, Math.max(0, p));
}

function write(scene: Scene, vh: number) {
  const p = progress(scene, vh);
  if (Math.abs(p - scene.last) < 0.0005) return;
  scene.last = p;
  scene.el.style.setProperty("--p", p.toFixed(4));
}

function tick() {
  frame = 0;
  const vh = window.innerHeight;
  for (const scene of live) write(scene, vh);
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(tick);
}

function getObserver() {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const scene = scenes.get(entry.target as HTMLElement);
        if (!scene) continue;
        if (entry.isIntersecting) live.add(scene);
        else live.delete(scene);
        // Settle on an exact end state as the scene leaves the screen.
        write(scene, window.innerHeight);
      }
    },
    { rootMargin: "15% 0px" },
  );
  return observer;
}

function register(scene: Scene) {
  if (scenes.size === 0) {
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
  }
  scenes.set(scene.el, scene);
  getObserver().observe(scene.el);
  write(scene, window.innerHeight);
}

function unregister(el: HTMLElement) {
  const scene = scenes.get(el);
  if (!scene) return;
  scenes.delete(el);
  live.delete(scene);
  observer?.unobserve(el);
  if (scenes.size === 0) {
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
    cancelAnimationFrame(frame);
    frame = 0;
  }
}

/* ---------- Component ---------- */

interface ScrollSceneProps {
  children?: ReactNode;
  as?: ElementType;
  mode?: SceneMode;
  /**
   * Progress value used before JavaScript runs and under
   * prefers-reduced-motion. Use 1 for scenes whose finished state is the
   * readable one (e.g. a zoom reveal whose copy fades in).
   */
  rest?: 0 | 1;
  className?: string;
  style?: CSSProperties;
  id?: string;
  "aria-label"?: string;
}

/**
 * Publishes the element's scroll progress as the CSS custom property `--p`
 * (0 → 1). Everything visual is done in CSS with calc(var(--p)), so effects are
 * transform/opacity only and never trigger a React render while scrolling.
 */
export default function ScrollScene({
  children,
  as: Tag = "div",
  mode = "through",
  rest = 0,
  className = "",
  ...props
}: ScrollSceneProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    register({ el, mode, last: -1 });
    return () => unregister(el);
  }, [mode]);

  return (
    <Tag ref={ref} className={`scene ${className}`} data-rest={rest} {...props}>
      {children}
    </Tag>
  );
}
