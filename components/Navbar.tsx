"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PHONE, PHONE_RAW, SITE_NAME } from "@/lib/constants";

const services = [
  { name: "All Services", href: "/services" },
  { name: "Interior Detail", href: "/services/interior-detail" },
  { name: "Exterior Detail", href: "/services/exterior-detail" },
  { name: "Carpet Shampoo", href: "/services/carpet-shampoo" },
  { name: "Seat Shampoo", href: "/services/seat-shampoo" },
  { name: "Leather Conditioning", href: "/services/leather-conditioning" },
  { name: "Clay Bar Treatment", href: "/services/clay-bar-treatment" },
  { name: "Exterior Spray Wax", href: "/services/exterior-spray-wax" },
  { name: "Rim Detailing", href: "/services/rim-detailing" },
  { name: "Headlight Restoration", href: "/services/headlight-restoration" },
  { name: "Plastic Color Restoration", href: "/services/plastic-color-restoration" },
];

const areas = [
  { name: "Honolulu", href: "/service-areas/honolulu" },
  { name: "Kailua", href: "/service-areas/kailua" },
  { name: "Kapolei", href: "/service-areas/kapolei" },
  { name: "Kaneohe", href: "/service-areas/kaneohe" },
  { name: "Pearl City", href: "/service-areas/pearl-city" },
  { name: "Aiea", href: "/service-areas/aiea" },
  { name: "Ewa Beach", href: "/service-areas/ewa-beach" },
  { name: "Mililani", href: "/service-areas/mililani" },
  { name: "Hawaii Kai", href: "/service-areas/hawaii-kai" },
  { name: "Haleiwa", href: "/service-areas/haleiwa" },
  { name: "Wahiawa", href: "/service-areas/wahiawa" },
  { name: "Waialua", href: "/service-areas/waialua" },
  { name: "Waimalu", href: "/service-areas/waimalu" },
  { name: "Manoa", href: "/service-areas/manoa" },
  { name: "Waimanalo Beach", href: "/service-areas/waimanalo-beach" },
  { name: "Kaimuki", href: "/service-areas/kaimuki" },
  { name: "Royal Kunia", href: "/service-areas/royal-kunia" },
  { name: "Ewa Villages", href: "/service-areas/ewa-villages" },
  { name: "Schofield Barracks", href: "/service-areas/schofield-barracks" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileAreas, setMobileAreas] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled ? "rgba(10,31,61,0.98)" : "transparent";
  const navBorder = scrolled ? "1px solid rgba(177,209,231,0.2)" : "1px solid transparent";

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ backgroundColor: navBg, borderBottom: navBorder, backdropFilter: scrolled ? "blur(12px)" : "none" }}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 text-white font-black text-xl tracking-wide" style={{ fontFamily: "var(--font-poppins), sans-serif" }} aria-label={`${SITE_NAME} — Home`}>
            <span style={{ color: "#F08C2A" }}>NET</span>
            <span className="hidden sm:inline text-white font-bold text-base ml-1 tracking-normal">AUTOMOTIVE DETAILING</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium" aria-label="Main navigation">
            <Link href="/" className="text-white/90 hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="text-white/90 hover:text-white transition-colors">About</Link>

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 text-white/90 hover:text-white transition-colors" aria-expanded={servicesOpen} aria-haspopup="true">
                Services <span aria-hidden="true">▾</span>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 rounded-xl overflow-hidden shadow-2xl py-1 z-50" style={{ backgroundColor: "#0A1F3D", border: "1px solid rgba(177,209,231,0.2)" }}>
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Service Areas Dropdown */}
            <div className="relative" onMouseEnter={() => setAreasOpen(true)} onMouseLeave={() => setAreasOpen(false)}>
              <button className="flex items-center gap-1 text-white/90 hover:text-white transition-colors" aria-expanded={areasOpen} aria-haspopup="true">
                Service Areas <span aria-hidden="true">▾</span>
              </button>
              {areasOpen && (
                <div className="absolute top-full left-0 mt-2 rounded-xl overflow-hidden shadow-2xl py-2 z-50 w-80" style={{ backgroundColor: "#0A1F3D", border: "1px solid rgba(177,209,231,0.2)" }}>
                  <Link href="/service-areas" className="block px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors border-b border-white/10 mb-1">
                    All Service Areas
                  </Link>
                  <div className="grid grid-cols-2">
                    {areas.map((a) => (
                      <Link key={a.href} href={a.href} className="block px-4 py-1.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                        {a.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/reviews" className="text-white/90 hover:text-white transition-colors">Reviews</Link>
            <Link href="/gallery" className="text-white/90 hover:text-white transition-colors">Gallery</Link>
            <Link href="/blog" className="text-white/90 hover:text-white transition-colors">Blog</Link>
            <Link href="/contact" className="text-white/90 hover:text-white transition-colors">Contact</Link>
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${PHONE_RAW}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all hover:scale-105"
              style={{ backgroundColor: "#F08C2A", color: "#ffffff" }}
            >
              📞 {PHONE}
            </a>
            <Link
              href="/contact#quote-form"
              className="px-4 py-2 rounded-full text-sm font-bold border-2 transition-all hover:scale-105"
              style={{ borderColor: "#ffffff", color: "#ffffff" }}
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 min-w-[44px] min-h-[44px] items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <span className="text-white text-2xl" aria-hidden="true">✕</span>
            ) : (
              <>
                <span className="block w-6 h-0.5 bg-white" aria-hidden="true" />
                <span className="block w-6 h-0.5 bg-white" aria-hidden="true" />
                <span className="block w-6 h-0.5 bg-white" aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 overflow-y-auto" style={{ backgroundColor: "#0A1F3D" }}>
          <div className="min-h-screen flex flex-col px-6 pt-20 pb-8">
            <nav className="flex-1 flex flex-col gap-1" aria-label="Mobile navigation">
              <Link href="/" className="py-4 text-white text-lg font-semibold border-b border-white/10" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link href="/about" className="py-4 text-white text-lg font-semibold border-b border-white/10" onClick={() => setMobileOpen(false)}>About</Link>

              {/* Services Accordion */}
              <div className="border-b border-white/10">
                <button
                  className="w-full flex items-center justify-between py-4 text-white text-lg font-semibold"
                  onClick={() => setMobileServices(!mobileServices)}
                  aria-expanded={mobileServices}
                >
                  Services <span aria-hidden="true">{mobileServices ? "−" : "+"}</span>
                </button>
                {mobileServices && (
                  <div className="pb-2 flex flex-col gap-1">
                    {services.map((s) => (
                      <Link key={s.href} href={s.href} className="py-2 pl-4 text-white/80 text-base hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Areas Accordion */}
              <div className="border-b border-white/10">
                <button
                  className="w-full flex items-center justify-between py-4 text-white text-lg font-semibold"
                  onClick={() => setMobileAreas(!mobileAreas)}
                  aria-expanded={mobileAreas}
                >
                  Service Areas <span aria-hidden="true">{mobileAreas ? "−" : "+"}</span>
                </button>
                {mobileAreas && (
                  <div className="pb-2 flex flex-col gap-1">
                    <Link href="/service-areas" className="py-2 pl-4 text-white font-semibold text-base" onClick={() => setMobileOpen(false)}>All Service Areas</Link>
                    {areas.map((a) => (
                      <Link key={a.href} href={a.href} className="py-2 pl-4 text-white/80 text-base hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>
                        {a.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/reviews" className="py-4 text-white text-lg font-semibold border-b border-white/10" onClick={() => setMobileOpen(false)}>Reviews</Link>
              <Link href="/gallery" className="py-4 text-white text-lg font-semibold border-b border-white/10" onClick={() => setMobileOpen(false)}>Gallery</Link>
              <Link href="/blog" className="py-4 text-white text-lg font-semibold border-b border-white/10" onClick={() => setMobileOpen(false)}>Blog</Link>
              <Link href="/contact" className="py-4 text-white text-lg font-semibold border-b border-white/10" onClick={() => setMobileOpen(false)}>Contact</Link>
            </nav>

            {/* Mobile CTAs */}
            <div className="mt-8 flex flex-col gap-4">
              <a
                href={`tel:${PHONE_RAW}`}
                className="w-full flex items-center justify-center py-4 rounded-xl font-bold text-lg min-h-[48px]"
                style={{ backgroundColor: "#F08C2A", color: "#ffffff" }}
              >
                📞 {PHONE}
              </a>
              <Link
                href="/contact#quote-form"
                className="w-full flex items-center justify-center py-4 rounded-xl font-bold text-lg border-2 min-h-[48px]"
                style={{ borderColor: "#F08C2A", color: "#F08C2A" }}
                onClick={() => setMobileOpen(false)}
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
