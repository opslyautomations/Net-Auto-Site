import { OG_CONTENT_TYPE, OG_SIZE, ogAlt, renderOgCard } from "@/lib/ogImage";

export const alt = ogAlt("Real Detailing Results Across Oahu");
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgCard({
    eyebrow: "Our Work",
    title: "Real Detailing Results Across Oahu",
    subtitle: "Trucks, sedans, SUVs and luxury vehicles we've detailed.",
  });
}
