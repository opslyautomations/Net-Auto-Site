import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, OG_DEFAULT_IMAGE, TAGLINE } from "./constants";

interface BuildMetadataParams {
  title: string;
  description: string;
  slug?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

export function buildMetadata({
  title,
  description,
  slug = "",
  image = OG_DEFAULT_IMAGE,
  type = "website",
  publishedTime,
  modifiedTime,
}: BuildMetadataParams): Metadata {
  const url = slug ? `${SITE_URL}/${slug}` : SITE_URL;
  const ogTitle = title.replace(` | ${SITE_NAME}`, "");

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${ogTitle} — ${SITE_NAME}`,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [{ url: image, alt: `${ogTitle} — ${SITE_NAME}` }],
    },
  };
}

export function truncateTitle(title: string): string {
  if (title.length > 59) {
    console.warn(`Title too long (${title.length} chars): ${title}`);
  }
  return title;
}
