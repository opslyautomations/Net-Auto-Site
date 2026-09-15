import { OG_CONTENT_TYPE, OG_SIZE, ogAlt, renderOgCard } from "@/lib/ogImage";

export const alt = ogAlt("Meet Elijah — Your Oahu Detailer");
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgCard({
    eyebrow: "About Us",
    title: "Meet Elijah — Your Oahu Detailer",
    subtitle: "Locally owned mobile detailing, built for Hawaii's conditions.",
  });
}
