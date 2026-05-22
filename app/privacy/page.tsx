import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL, EMAIL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Net Automotive Detailing Oahu",
  description: "Privacy Policy for Net Automotive Detailing — mobile auto detailing on Oahu, Hawaii. How we collect, use, and protect your information.",
  slug: "privacy",
});

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20 px-4" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-black mb-2" style={{ color: "#0A1F3D", fontFamily: "var(--font-poppins), sans-serif" }}>
          Privacy Policy
        </h1>
        <p className="text-sm mb-8" style={{ color: "#6B7A90" }}>
          Last updated: January 1, 2025 · {SITE_NAME}
        </p>

        <div className="prose prose-lg max-w-none" style={{ color: "#0A1F3D" }}>
          {/* TODO: Review with legal counsel before publishing */}
          <p className="mb-4">This Privacy Policy describes how {SITE_NAME} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and shares information about you when you use our website at {SITE_URL} and when you engage our mobile auto detailing services.</p>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#0A1F3D" }}>Information We Collect</h2>
          <p className="mb-4">We collect information you provide directly to us, including your name, contact information, vehicle details, and service location when you submit a quote request or contact us. We may also collect information automatically through cookies and similar tracking technologies when you visit our website.</p>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#0A1F3D" }}>How We Use Your Information</h2>
          <p className="mb-4">We use information we collect to provide our mobile detailing services, respond to your requests, communicate with you about your appointments, and improve our website and services. We do not sell your personal information to third parties.</p>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#0A1F3D" }}>Contact Us</h2>
          <p className="mb-4">If you have questions about this Privacy Policy, please contact us at <a href={`mailto:${EMAIL}`} style={{ color: "#F08C2A" }}>{EMAIL}</a>.</p>

          <p className="text-sm mt-8 p-4 rounded-xl" style={{ backgroundColor: "#F4F6F9", color: "#6B7A90" }}>
            <strong>Note:</strong> This is a placeholder privacy policy. It should be reviewed by legal counsel and updated to accurately reflect your specific data practices before publishing.
          </p>
        </div>
      </div>
    </div>
  );
}
