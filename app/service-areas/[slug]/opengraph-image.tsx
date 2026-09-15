import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/ogImage";
import { getLocationBySlug, locations } from "@/lib/locations";
import { SITE_NAME } from "@/lib/constants";

export const alt = `Mobile detailing service area — ${SITE_NAME}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

// Without this the card is rendered on demand per request; with it every
// card is prerendered at build time alongside its page.
export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  return renderOgCard({
    eyebrow: "Service Area",
    title: `Mobile Auto Detailing in ${location?.name ?? "Oahu"}`,
    subtitle: location?.tagline ?? "We come to you — anywhere on Oahu, Hawaii.",
  });
}
