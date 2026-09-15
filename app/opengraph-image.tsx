import { OG_CONTENT_TYPE, OG_SIZE, ogAlt, renderOgCard } from "@/lib/ogImage";

export const alt = ogAlt("Premium Mobile Auto Detailing Across Oahu");
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgCard({
    eyebrow: "Mobile Auto Detailing",
    title: "Premium Mobile Auto Detailing Across Oahu",
    subtitle: "We come to you — Honolulu to Haleiwa, anywhere on the island.",
  });
}
