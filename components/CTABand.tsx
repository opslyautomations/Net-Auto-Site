import Link from "next/link";
import { PHONE, PHONE_RAW } from "@/lib/constants";

interface CTABandProps {
  title?: string;
  subtitle?: string;
}

export default function CTABand({
  title = "Ready for a Cleaner, Sharper Ride?",
  subtitle = "Get a free quote in minutes — we'll come to you anywhere on Oahu.",
}: CTABandProps) {
  return (
    <section style={{ backgroundColor: "#F08C2A" }} aria-label="Call to action">
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact#quote-form"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105"
            style={{ backgroundColor: "#0A1F3D", color: "#ffffff" }}
          >
            Get My Free Quote
          </Link>
          <a
            href={`tel:${PHONE_RAW}`}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base border-2 transition-all hover:scale-105"
            style={{ borderColor: "#0A1F3D", color: "#0A1F3D", backgroundColor: "transparent" }}
          >
            Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
