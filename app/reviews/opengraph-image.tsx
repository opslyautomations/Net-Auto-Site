import { OG_CONTENT_TYPE, OG_SIZE, ogAlt, renderOgCard } from "@/lib/ogImage";

export const alt = ogAlt("60+ Five-Star Reviews on Google");
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgCard({
    eyebrow: "Reviews",
    title: "60+ Five-Star Reviews on Google",
    subtitle: "What Oahu drivers say about Net Automotive Detailing.",
  });
}
