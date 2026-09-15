import { OG_CONTENT_TYPE, OG_SIZE, ogAlt, renderOgCard } from "@/lib/ogImage";

export const alt = ogAlt("Mobile Detailing Services on Oahu");
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgCard({
    eyebrow: "Our Services",
    title: "Mobile Detailing Services on Oahu",
    subtitle: "Interior, exterior, and restoration — delivered to your door.",
  });
}
