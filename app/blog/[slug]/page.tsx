import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { ReactNode } from "react";
import CTABand from "@/components/CTABand";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogPosts, getBlogPostBySlug, getRecentPosts } from "@/lib/blogPosts";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";

function renderInline(text: string, kp = ""): ReactNode {
  const parts: ReactNode[] = [];
  let remaining = text;
  let idx = 0;

  while (remaining.length > 0) {
    const boldM = remaining.match(/\*\*(.+?)\*\*/);
    const linkM = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
    const bi = boldM ? remaining.indexOf(boldM[0]) : Infinity;
    const li = linkM ? remaining.indexOf(linkM[0]) : Infinity;

    if (bi === Infinity && li === Infinity) {
      parts.push(remaining);
      break;
    }

    if (bi <= li) {
      if (bi > 0) parts.push(remaining.slice(0, bi));
      parts.push(<strong key={`${kp}b${idx++}`}>{renderInline(boldM![1], `${kp}b${idx}`)}</strong>);
      remaining = remaining.slice(bi + boldM![0].length);
    } else {
      if (li > 0) parts.push(remaining.slice(0, li));
      const href = linkM![2];
      const label = linkM![1];
      if (href.startsWith("/") || href.startsWith("#")) {
        parts.push(<Link key={`${kp}l${idx++}`} href={href} style={{ color: "#F08C2A", textDecoration: "underline" }}>{label}</Link>);
      } else {
        parts.push(<a key={`${kp}l${idx++}`} href={href} target="_blank" rel="noopener noreferrer" style={{ color: "#F08C2A", textDecoration: "underline" }}>{label}</a>);
      }
      remaining = remaining.slice(li + linkM![0].length);
    }
  }

  if (parts.length === 0) return null;
  if (parts.length === 1) return parts[0];
  return <>{parts}</>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    slug: `blog/${post.slug}`,
    image: `${SITE_URL}${post.ogImage}`,
    type: "article",
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRecentPosts(3, slug);
  const breadcrumbs = [
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
  ];

  const formattedDate = new Date(post.datePublished).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema({
            title: post.title,
            description: post.metaDescription,
            slug: post.slug,
            imageUrl: `${SITE_URL}${post.ogImage}`,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero */}
      <section className="pt-24 pb-12 px-4" style={{ backgroundColor: "#0A1F3D" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "Article", href: `/blog/${post.slug}` }]} />
          <span
            className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: "rgba(240,140,42,0.2)", color: "#F08C2A" }}
          >
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
            {post.title}
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            By {SITE_NAME} · {formattedDate}
          </p>
        </div>
      </section>

      {/* Featured image placeholder */}
      <div
        className="w-full max-h-96 flex items-center justify-center"
        style={{ backgroundColor: "#F4F6F9", borderBottom: "1px solid #B1D1E7", minHeight: "200px" }}
        role="img"
        aria-label={`Featured image for: ${post.title}`}
      >
        <div className="text-center py-12">
          <div className="text-5xl mb-2" aria-hidden="true">📝</div>
          <p className="text-sm" style={{ color: "#6B7A90" }}>Featured image coming soon</p>
        </div>
      </div>

      {/* Article Content */}
      <section className="py-16 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto">
          <article>
            <div
              className="prose prose-lg max-w-none"
              style={{ color: "#0A1F3D" }}
            >
              {post.content.trim().split("\n").map((line, i) => {
                const trimmed = line.trim();
                if (!trimmed) return null;
                if (trimmed.startsWith("| ")) return null;

                if (trimmed.startsWith("## ")) {
                  return (
                    <h2 key={i} className="text-2xl font-bold mt-8 mb-4" style={{ color: "#0A1F3D" }}>
                      {renderInline(trimmed.slice(3), `h2-${i}`)}
                    </h2>
                  );
                }
                if (trimmed.startsWith("### ")) {
                  return (
                    <h3 key={i} className="text-xl font-bold mt-6 mb-3" style={{ color: "#0A1F3D" }}>
                      {renderInline(trimmed.slice(4), `h3-${i}`)}
                    </h3>
                  );
                }
                if (trimmed.startsWith("- ")) {
                  return (
                    <li key={i} className="ml-4 mb-2 text-base leading-relaxed list-disc" style={{ color: "#0A1F3D" }}>
                      {renderInline(trimmed.slice(2), `li-${i}`)}
                    </li>
                  );
                }
                if (trimmed.match(/^\d+\.\s/)) {
                  return (
                    <li key={i} className="ml-4 mb-2 text-base leading-relaxed list-decimal" style={{ color: "#0A1F3D" }}>
                      {renderInline(trimmed.replace(/^\d+\.\s/, ""), `ol-${i}`)}
                    </li>
                  );
                }

                return (
                  <p key={i} className="text-base leading-relaxed mb-4" style={{ color: "#0A1F3D" }}>
                    {renderInline(trimmed, `p-${i}`)}
                  </p>
                );
              })}
            </div>
          </article>

          {/* In-article CTA */}
          <div className="mt-12 p-6 rounded-2xl text-center" style={{ backgroundColor: "#F4F6F9", border: "1px solid #B1D1E7" }}>
            <p className="font-bold text-lg mb-2" style={{ color: "#0A1F3D" }}>
              Ready for professional mobile detailing on Oahu?
            </p>
            <p className="text-sm mb-4" style={{ color: "#6B7A90" }}>
              Net Automotive Detailing comes to you — anywhere on the island.
            </p>
            <Link
              href="/contact#quote-form"
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-bold text-base transition-all hover:scale-105"
              style={{ backgroundColor: "#F08C2A", color: "#ffffff" }}
            >
              Get a Free Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4" style={{ backgroundColor: "#F4F6F9" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#0A1F3D" }}>Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <article
                  key={rp.slug}
                  className="rounded-2xl p-5 flex flex-col gap-3"
                  style={{ backgroundColor: "#ffffff", border: "1px solid #B1D1E7" }}
                >
                  <span
                    className="text-xs font-semibold px-2 py-1 rounded-full self-start"
                    style={{ backgroundColor: "rgba(240,140,42,0.12)", color: "#F08C2A" }}
                  >
                    {rp.category}
                  </span>
                  <h3 className="font-bold text-base leading-snug" style={{ color: "#0A1F3D" }}>
                    <Link href={`/blog/${rp.slug}`} className="hover:underline">
                      {rp.title}
                    </Link>
                  </h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "#6B7A90" }}>{rp.excerpt}</p>
                  <Link href={`/blog/${rp.slug}`} className="text-sm font-semibold" style={{ color: "#F08C2A" }}>
                    Read →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand />
    </>
  );
}
