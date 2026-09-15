"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PHONE, PHONE_RAW } from "@/lib/constants";

/**
 * Sticky call/quote bar for small screens. Slides up once the user has scrolled
 * past the hero, and retracts near the footer so it never covers the site links.
 */
export default function MobileCTABar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const nearBottom = y + window.innerHeight > docHeight - 260;
      setVisible(y > 520 && !nearBottom);
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

  return (
    <div
      className={`cta-bar lg:hidden fixed bottom-0 left-0 right-0 z-40 px-3 pt-3 ${
        visible ? "is-visible" : ""
      }`}
      style={{
        paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))",
        backgroundColor: "rgba(10,31,61,0.97)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(177,209,231,0.22)",
      }}
      aria-hidden={!visible}
    >
      <div className="flex gap-2.5 max-w-lg mx-auto">
        <a
          href={`tel:${PHONE_RAW}`}
          className="btn-press flex-1 inline-flex items-center justify-center gap-2 rounded-xl font-bold text-sm min-h-[48px]"
          style={{ backgroundColor: "#F08C2A", color: "#ffffff" }}
          tabIndex={visible ? 0 : -1}
        >
          <span aria-hidden="true">📞</span> Call {PHONE}
        </a>
        <Link
          href="/contact#quote-form"
          className="btn-press flex-1 inline-flex items-center justify-center rounded-xl font-bold text-sm border-2 min-h-[48px]"
          style={{ borderColor: "rgba(255,255,255,0.45)", color: "#ffffff" }}
          tabIndex={visible ? 0 : -1}
        >
          Free Quote
        </Link>
      </div>
    </div>
  );
}
