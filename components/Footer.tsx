import Link from "next/link";
import { SITE_NAME, TAGLINE, PHONE, PHONE_RAW, EMAIL, SERVICE_AREA, HOURS } from "@/lib/constants";

const serviceLinks = [
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
  { name: "All Services", href: "/services" },
];

const areaLinks = [
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
  { name: "All Areas", href: "/service-areas" },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Reviews", href: "/reviews" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0A1F3D" }} role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4" aria-label={`${SITE_NAME} — Home`}>
              <div className="text-2xl font-black tracking-wide" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
                <span style={{ color: "#F08C2A" }}>NET</span>
                <span className="text-white"> AUTOMOTIVE</span>
                <div className="text-white font-bold text-sm tracking-widest uppercase">DETAILING</div>
              </div>
            </Link>
            <p className="text-sm font-medium mb-4" style={{ color: "#B1D1E7" }}>{TAGLINE}</p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Professional mobile auto detailing delivered to your door — anywhere on Oahu, Hawaii.
            </p>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Service Areas */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Service Areas</h3>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
              {areaLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link text-sm">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4 — Company & Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="flex flex-col gap-2 mb-6">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-3">Contact</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href={`tel:${PHONE_RAW}`} className="footer-link">📞 {PHONE}</a>
              <a href={`mailto:${EMAIL}`} className="footer-link">✉ {EMAIL}</a>
              <p style={{ color: "rgba(255,255,255,0.6)" }}>📍 {SERVICE_AREA}</p>
              <p style={{ color: "rgba(255,255,255,0.6)" }}>🕐 {HOURS}</p>
            </div>

            <Link
              href="/contact#quote-form"
              className="mt-5 inline-flex items-center justify-center w-full py-3 rounded-xl font-bold text-sm transition-all hover:scale-105"
              style={{ backgroundColor: "#F08C2A", color: "#ffffff" }}
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={{ backgroundColor: "rgba(0,0,0,0.3)", borderTop: "1px solid rgba(177,209,231,0.15)" }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            <Link href="/privacy" className="footer-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
