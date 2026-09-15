import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/ogImage";
import { getServiceBySlug, services } from "@/lib/services";
import { SITE_NAME } from "@/lib/constants";

export const alt = `Mobile detailing service — ${SITE_NAME}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

// Without this the card is rendered on demand per request; with it every
// card is prerendered at build time alongside its page.
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  return renderOgCard({
    eyebrow: "Mobile Detailing Service",
    title: service?.name ?? "Mobile Auto Detailing",
    subtitle: service?.tagline ?? "Professional detailing delivered to your door on Oahu.",
  });
}
