import { OG_CONTENT_TYPE, OG_SIZE, ogAlt, renderOgCard } from "@/lib/ogImage";

export const alt = ogAlt("Request Your Free Detailing Quote");
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgCard({
    eyebrow: "Get in Touch",
    title: "Request Your Free Detailing Quote",
    subtitle: "Fast response — we come to you anywhere on Oahu.",
  });
}
