import {
  SITE_NAME, SITE_URL, PHONE_RAW, EMAIL, GBP_URL,
  GEO_LAT, GEO_LNG, HOURS_SCHEMA, ALL_LOCATION_SLUGS
} from "./constants";

const ALL_CITIES = [
  "Honolulu","Kailua","Kapolei","Kaneohe","Pearl City","Aiea","Ewa Beach",
  "Mililani","Hawaii Kai","Haleiwa","Wahiawa","Waialua","Waimalu","Manoa",
  "Waimanalo Beach","Kaimuki","Royal Kunia","Ewa Villages","Schofield Barracks"
];

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    telephone: PHONE_RAW,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      addressRegion: "HI",
      addressCountry: "US",
      addressLocality: "Oahu",
    },
    areaServed: { "@type": "State", name: "Oahu, Hawaii" },
    sameAs: [GBP_URL],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?s={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: PHONE_RAW,
    email: EMAIL,
    priceRange: "$$",
    openingHours: HOURS_SCHEMA,
    geo: { "@type": "GeoCoordinates", latitude: GEO_LAT, longitude: GEO_LNG },
    address: {
      "@type": "PostalAddress",
      addressRegion: "HI",
      addressCountry: "US",
      addressLocality: "Oahu",
    },
    areaServed: ALL_CITIES.map((city) => ({ "@type": "City", name: city })),
    sameAs: [GBP_URL],
  };
}

export function serviceSchema(serviceName: string, serviceDescription: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    serviceType: serviceName,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: ALL_CITIES.map((city) => ({ "@type": "City", name: city })),
  };
}

export function locationBusinessSchema(cityName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: `${SITE_NAME} — ${cityName}`,
    url: `${SITE_URL}/service-areas/${cityName.toLowerCase().replace(/\s+/g, "-")}`,
    telephone: PHONE_RAW,
    email: EMAIL,
    areaServed: { "@type": "City", name: cityName },
    sameAs: [GBP_URL],
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export function blogPostingSchema({
  title, description, slug, imageUrl, datePublished, dateModified,
}: {
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: imageUrl,
    datePublished,
    dateModified,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${slug}` },
  };
}

export function aggregateRatingSchema(ratingValue: number, reviewCount: number) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };
}
