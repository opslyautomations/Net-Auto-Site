import Link from "next/link";
import { PHONE, PHONE_RAW } from "@/lib/constants";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 pt-16"
      style={{ backgroundColor: "#0A1F3D" }}
    >
      <div className="text-center max-w-2xl mx-auto py-20">
        <div
          className="text-8xl md:text-9xl font-black mb-4"
          style={{ color: "#F08C2A", fontFamily: "var(--font-poppins), sans-serif" }}
          aria-label="404 — Page not found"
        >
          404
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Looks like this page took a detour
        </h1>
        <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
          The page you&apos;re looking for doesn&apos;t exist — but we&apos;re still here to detail your car anywhere on Oahu.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 min-h-[48px]"
            style={{ backgroundColor: "#F08C2A", color: "#ffffff" }}
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base border-2 transition-all hover:scale-105 min-h-[48px]"
            style={{ borderColor: "rgba(255,255,255,0.4)", color: "#ffffff" }}
          >
            Browse Services
          </Link>
          <a
            href={`tel:${PHONE_RAW}`}
            className="inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 min-h-[48px]"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#ffffff" }}
          >
            📞 {PHONE}
          </a>
        </div>

        {/* Quick service links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { name: "Interior Detail", href: "/services/interior-detail" },
            { name: "Exterior Detail", href: "/services/exterior-detail" },
            { name: "Headlight Restoration", href: "/services/headlight-restoration" },
            { name: "Rim Detailing", href: "/services/rim-detailing" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-3 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(177,209,231,0.2)" }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
