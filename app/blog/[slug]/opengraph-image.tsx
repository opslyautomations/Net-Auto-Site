import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/ogImage";
import { blogPosts, getBlogPostBySlug } from "@/lib/blogPosts";
import { SITE_NAME } from "@/lib/constants";

export const alt = `Detailing blog — ${SITE_NAME}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

// Without this the card is rendered on demand per request; with it every
// card is prerendered at build time alongside its page.
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  return renderOgCard({
    eyebrow: post ? `${post.category} · Detailing Blog` : "Detailing Blog",
    title: post?.title ?? "Car Care Advice for Oahu Drivers",
    subtitle: post?.excerpt,
  });
}
