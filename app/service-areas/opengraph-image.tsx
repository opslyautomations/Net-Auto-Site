import { OG_CONTENT_TYPE, OG_SIZE, ogAlt, renderOgCard } from "@/lib/ogImage";

export const alt = ogAlt("Serving All of Oahu, Hawaii");
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgCard({
    eyebrow: "Service Areas",
    title: "Serving All of Oahu, Hawaii",
    subtitle: "Mobile detailing wherever you park, island-wide.",
  });
}
