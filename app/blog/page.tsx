import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import SectionHeader from "@/components/SectionHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogPosts } from "@/lib/blogPosts";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Blog — Mobile Detailing Tips for Oahu Drivers",
  description: "Mobile detailing tips, guides, and local insights for Oahu, Hawaii drivers — from the experts at Net Automotive Detailing. Interior, exterior, and restoration advice.",
  slug: "blog",
  image: `${SITE_URL}/og/blog.png`,
});

const breadcrumbs = [
  { name: "Home", url: `${SITE_URL}/` },
  { name: "Blog", url: `${SITE_URL}/blog` },
];

const categoryColors: Record<string, { bg: string; color: string }> = {
  Service: { bg: "rgba(240,140,42,0.12)", color: "#F08C2A" },
  Location: { bg: "rgba(177,209,231,0.25)", color: "#0A1F3D" },
  Combo: { bg: "rgba(10,31,61,0.08)", color: "#0A1F3D" },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero */}
      <section className="pt-24 pb-16 px-4" style={{ backgroundColor: "#0A1F3D" }}>
        <div className="max-w-4xl mx-auto text-center">
          <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }]} />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
            Blog — Mobile Detailing Tips & Guides for Oahu Drivers
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.8)" }}>
            Expert advice on car detailing, Hawaii-specific vehicle care, and local insights for every Oahu community.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label={`${blogPosts.length} Articles`}
            title="All Posts"
            subtitle="Service guides, location tips, and seasonal advice for Oahu vehicle owners."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => {
              const catStyle = categoryColors[post.category];
              return (
                <article
                  key={post.slug}
                  className="rounded-2xl overflow-hidden flex flex-col"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #B1D1E7",
                    boxShadow: "0 2px 12px rgba(10,31,61,0.06)",
                  }}
                >
                  {/* Placeholder image */}
                  <div
                    className="aspect-video flex items-center justify-center"
                    style={{ backgroundColor: "#F4F6F9", borderBottom: "1px solid #B1D1E7" }}
                    role="img"
                    aria-label={`Blog post: ${post.title}`}
                  >
                    <span className="text-4xl" aria-hidden="true">📝</span>
                  </div>
                  <div className="p-5 flex flex-col flex-1 gap-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-semibold px-2 py-1 rounded-full"
                        style={{ backgroundColor: catStyle.bg, color: catStyle.color }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs" style={{ color: "#6B7A90" }}>
                        {new Date(post.datePublished).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                      </span>
                    </div>
                    <h2 className="font-bold text-base leading-snug" style={{ color: "#0A1F3D" }}>
                      <Link href={`/blog/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: "#6B7A90" }}>
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold transition-colors"
                      style={{ color: "#F08C2A" }}
                      aria-label={`Read: ${post.title}`}
                    >
                      Read Article →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
