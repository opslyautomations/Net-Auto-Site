import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL, EMAIL, PHONE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service | Net Automotive Detailing Oahu",
  description: "Terms of Service for Net Automotive Detailing — mobile auto detailing on Oahu, Hawaii. Service terms, booking policy, and conditions.",
  slug: "terms",
});

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20 px-4" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-black mb-2" style={{ color: "#0A1F3D", fontFamily: "var(--font-poppins), sans-serif" }}>
          Terms of Service
        </h1>
        <p className="text-sm mb-8" style={{ color: "#6B7A90" }}>
          Last updated: January 1, 2025 · {SITE_NAME}
        </p>

        <div className="prose prose-lg max-w-none" style={{ color: "#0A1F3D" }}>
          {/* TODO: Review with legal counsel before publishing */}
          <p className="mb-4">These Terms of Service govern your use of {SITE_NAME}&apos;s website at {SITE_URL} and our mobile auto detailing services in Oahu, Hawaii. By using our website or services, you agree to these terms.</p>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#0A1F3D" }}>Service Scope</h2>
          <p className="mb-4">{SITE_NAME} provides professional mobile auto detailing services throughout Oahu, Hawaii. Services are performed at client-specified locations, subject to reasonable access requirements. Pricing is provided on a per-quote basis.</p>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#0A1F3D" }}>Booking and Cancellation</h2>
          <p className="mb-4">Appointments are confirmed upon mutual agreement. If you need to cancel or reschedule, please contact us as early as possible at {PHONE} or {EMAIL}. Specific cancellation terms will be discussed at time of booking.</p>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#0A1F3D" }}>Service Results</h2>
          <p className="mb-4">We strive to deliver the highest quality results for every vehicle. Outcomes may vary based on vehicle condition, age, and the specific services selected. We will communicate realistic expectations before beginning any service.</p>

          <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#0A1F3D" }}>Contact</h2>
          <p className="mb-4">Questions about these terms? Contact us at <a href={`mailto:${EMAIL}`} style={{ color: "#F08C2A" }}>{EMAIL}</a> or call <a href={`tel:+18087778964`} style={{ color: "#F08C2A" }}>{PHONE}</a>.</p>

          <p className="text-sm mt-8 p-4 rounded-xl" style={{ backgroundColor: "#F4F6F9", color: "#6B7A90" }}>
            <strong>Note:</strong> This is a placeholder Terms of Service. It should be reviewed by legal counsel and updated with your complete service terms before publishing.
          </p>
        </div>
      </div>
    </div>
  );
}
