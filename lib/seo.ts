import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

interface BuildMetadataParams {
  title: string;
  description: string;
  slug?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

export function buildMetadata({
  title,
  description,
  slug = "",
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
      // Images come from the opengraph-image.tsx file convention per route.
      // Setting them here would override those generated cards.
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}

export function truncateTitle(title: string): string {
  if (title.length > 59) {
    console.warn(`Title too long (${title.length} chars): ${title}`);
  }
  return title;
}
