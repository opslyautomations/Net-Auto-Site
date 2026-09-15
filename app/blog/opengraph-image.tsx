import { OG_CONTENT_TYPE, OG_SIZE, ogAlt, renderOgCard } from "@/lib/ogImage";

export const alt = ogAlt("Car Care Advice for Oahu Drivers");
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgCard({
    eyebrow: "Detailing Blog",
    title: "Car Care Advice for Oahu Drivers",
    subtitle: "Salt air, sun fade, sand — how to keep your car sharp in Hawaii.",
  });
}
