import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { getBlogPostBySlug } from "@/lib/blogPosts";
import type { PageKeywords } from "@/lib/keywords";

/** Renders [label](/path) links inside a plain-text paragraph. */
function withLinks(text: string): ReactNode[] {
  return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return part;
    return (
      <Link key={i} href={m[2]} className="font-semibold underline underline-offset-2 hover:no-underline" style={{ color: "#F08C2A" }}>
        {m[1]}
      </Link>
    );
  });
}

interface KeywordSectionProps {
  content: PageKeywords;
  /** Neighborhood list for service-area pages. */
  neighborhoods?: string[];
  areaName?: string;
  /**
   * "gray" is a standalone band; "white" continues the white section above it
   * (no top padding), keeping the host page's alternating colors intact.
   */
  tone?: "white" | "gray";
}

/**
 * Search-focused copy block for service and service-area pages: a keyword-led
 * heading and paragraphs, optional neighborhoods served, and links to the
 * blog guides that answer related questions.
 */
export default function KeywordSection({ content, neighborhoods, areaName, tone = "gray" }: KeywordSectionProps) {
  const guides = content.guides
    .map((slug) => getBlogPostBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined)
    .slice(0, 3);

  return (
    <section className={`px-4 ${tone === "gray" ? "py-16" : "pt-0 pb-16"}`} style={{ backgroundColor: tone === "gray" ? "#F4F6F9" : "#ffffff" }}>
      <div className="max-w-4xl mx-auto">
        <Reveal as="div" variant="up">
          <h2 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: "#0A1F3D" }}>
            {content.heading}
          </h2>
          {content.body.map((para, i) => (
            <p key={i} className="text-lg leading-relaxed mb-5" style={{ color: "#0A1F3D" }}>
              {withLinks(para)}
            </p>
          ))}
        </Reveal>

        {neighborhoods && neighborhoods.length > 0 && (
          <Reveal as="div" variant="up" className="mt-8">
            <h3 className="font-bold mb-3" style={{ color: "#0A1F3D" }}>
              {areaName ? `Neighborhoods we serve in and around ${areaName}` : "Neighborhoods we serve"}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {neighborhoods.map((n) => (
                <li
                  key={n}
                  className="px-3.5 py-1.5 rounded-full text-sm font-medium"
                  style={{ backgroundColor: tone === "gray" ? "#ffffff" : "#F4F6F9", border: "1px solid #B1D1E7", color: "#0A1F3D" }}
                >
                  📍 {n}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        {guides.length > 0 && (
          <Reveal as="div" variant="up" className="mt-10">
            <h3 className="font-bold mb-4" style={{ color: "#0A1F3D" }}>Helpful guides</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {guides.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group card-lift block p-5 rounded-2xl h-full"
                  style={{ backgroundColor: tone === "gray" ? "#ffffff" : "#F4F6F9", border: "1px solid #B1D1E7" }}
                >
                  <span className="block font-semibold leading-snug mb-2" style={{ color: "#0A1F3D" }}>
                    {post.title}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: "#F08C2A" }}>
                    Read guide <span className="arrow-nudge" aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
