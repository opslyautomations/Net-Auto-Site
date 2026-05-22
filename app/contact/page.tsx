import type { Metadata } from "next";
import GHLForm from "@/components/GHLForm";
import CTABand from "@/components/CTABand";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, PHONE, PHONE_RAW, EMAIL, SERVICE_AREA, HOURS, GBP_URL } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Contact Net Automotive Detailing | Oahu Mobile",
  description: "Contact Net Automotive Detailing for mobile auto detailing on Oahu. Call (808) 777-8964, email us, or request a free quote online. We serve all of Oahu, Hawaii.",
  slug: "contact",
  image: `${SITE_URL}/og/contact.png`,
});

const breadcrumbs = [
  { name: "Home", url: `${SITE_URL}/` },
  { name: "Contact", url: `${SITE_URL}/contact` },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero */}
      <section className="pt-24 pb-12 px-4" style={{ backgroundColor: "#0A1F3D" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
            Contact Net Automotive Detailing — Oahu Mobile Detailing
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.8)" }}>
            Get in touch to schedule your mobile detail or request a free quote. We respond fast and come to you anywhere on Oahu.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Left — Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#0A1F3D" }}>Get in Touch</h2>

              <div className="flex flex-col gap-4">
                <div className="p-5 rounded-2xl" style={{ backgroundColor: "#ffffff", border: "1px solid #B1D1E7" }}>
                  <h3 className="font-bold mb-2 text-sm uppercase tracking-wider" style={{ color: "#6B7A90" }}>Phone</h3>
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="text-xl font-bold transition-colors"
                    style={{ color: "#F08C2A" }}
                  >
                    {PHONE}
                  </a>
                  <p className="text-sm mt-1" style={{ color: "#6B7A90" }}>Click to call — we answer fast</p>
                </div>

                <div className="p-5 rounded-2xl" style={{ backgroundColor: "#ffffff", border: "1px solid #B1D1E7" }}>
                  <h3 className="font-bold mb-2 text-sm uppercase tracking-wider" style={{ color: "#6B7A90" }}>Email</h3>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-semibold transition-colors break-all"
                    style={{ color: "#0A1F3D" }}
                  >
                    {EMAIL}
                  </a>
                </div>

                <div className="p-5 rounded-2xl" style={{ backgroundColor: "#ffffff", border: "1px solid #B1D1E7" }}>
                  <h3 className="font-bold mb-2 text-sm uppercase tracking-wider" style={{ color: "#6B7A90" }}>Service Area</h3>
                  <p className="font-semibold" style={{ color: "#0A1F3D" }}>{SERVICE_AREA}</p>
                  <p className="text-sm mt-1" style={{ color: "#6B7A90" }}>Mobile service — no storefront. We come to you.</p>
                </div>

                <div className="p-5 rounded-2xl" style={{ backgroundColor: "#ffffff", border: "1px solid #B1D1E7" }}>
                  <h3 className="font-bold mb-2 text-sm uppercase tracking-wider" style={{ color: "#6B7A90" }}>Hours</h3>
                  <p className="font-semibold" style={{ color: "#0A1F3D" }}>{HOURS}</p>
                  {/* TODO: confirm hours with Eli */}
                </div>

                <div className="p-5 rounded-2xl" style={{ backgroundColor: "#ffffff", border: "1px solid #B1D1E7" }}>
                  <h3 className="font-bold mb-2 text-sm uppercase tracking-wider" style={{ color: "#6B7A90" }}>Google Business</h3>
                  <a
                    href={GBP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-sm transition-colors"
                    style={{ color: "#F08C2A" }}
                  >
                    View Google Profile →
                  </a>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div id="quote-form" className="lg:col-span-3 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#0A1F3D" }}>Request Your Free Quote</h2>
              <GHLForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-10 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0A1F3D" }}>
            Serving All of Oahu, Hawaii
          </h2>
          <p className="text-center mb-6 text-sm" style={{ color: "#6B7A90" }}>
            Mobile service — we come to you anywhere on the island. No storefront, no drop-off.
          </p>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #B1D1E7" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238085.89095097765!2d-158.2807537!3d21.4389114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006df96e21d351%3A0x1c96ba36b78bf8a3!2sO%CA%BBahu%2C%20Hawaii!5e0!3m2!1sen!2sus!4v1704000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Net Automotive Detailing — Service area map of Oahu, Hawaii"
              aria-label="Map showing Oahu, Hawaii — our mobile detailing service area"
            />
          </div>
          <p className="text-center mt-3 text-xs" style={{ color: "#6B7A90" }}>
            We serve every city and community across Oahu, Hawaii — mobile detailing delivered to your door.
          </p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
