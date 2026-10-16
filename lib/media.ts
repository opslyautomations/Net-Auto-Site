/**
 * Supporting photography used around the site.
 *
 * Files under /images/stock are licensed stock photos from Unsplash
 * (https://unsplash.com/license — free for commercial use, no attribution
 * required). They are used for atmosphere and service illustration only; every
 * photo presented as Net Automotive's own work lives in lib/gallery.ts.
 */

import { galleryImages } from "@/lib/gallery";

export interface MediaImage {
  src: string;
  alt: string;
}

const stock = (file: string, alt: string): MediaImage => ({
  src: `/images/stock/${file}.jpg`,
  alt,
});

export const media = {
  // Exterior & wash — unsplash.com/photos/eP8h7YVhFHk, pRppMPh4Zho, V4b2j7f1dfc, phP5Qa0CauQ
  handWashCoupe: stock("hand-wash-black-coupe", "Detailer hand washing a black coupe with a foam-covered mitt"),
  foamWheel: stock("foam-wash-sports-car-wheel", "Snow foam being sprayed over a black sports car and its alloy wheel"),
  snowFoam: stock("bmw-snow-foam-pre-wash", "Luxury SUV covered in thick snow foam during a pre-wash"),
  spongeWash: stock("sponge-hand-wash", "Close-up of a car door being hand washed with a soapy sponge"),

  // Wheels — unsplash.com/photos/8k_T1EwTySs, m5g2IFRouCs
  tireBrush: stock("tire-brush-wheel-cleaning", "Gloved hand scrubbing a tire sidewall with a detailing brush"),
  foamedWheel: stock("foamed-alloy-wheel", "Foam-covered alloy wheel on a black car"),

  // Paint & lights — unsplash.com/photos/cw1914zDHUs, rS9PBJBY5pc, heFTscwGDCA
  polisher: stock("paint-polishing-machine", "Machine polisher correcting glossy black paint"),
  paintCorrection: stock("paint-correction-detail", "Detailer polishing the front panel of a black car"),
  headlight: stock("headlight-close-up", "Crystal-clear LED headlight on a red car"),

  // Interior — unsplash.com/photos/U4IaoKF5aj4, _vmBjTG5L1g, and Unsplash interior set
  leatherInterior: stock("luxury-leather-interior", "Quilted black leather seats and cockpit of a luxury car"),
  steeringWipe: stock("steering-wheel-microfiber-wipe", "Steering wheel being wiped down with an orange microfiber towel"),
  dashboardBrush: stock("dashboard-brush-detailing", "Detailer cleaning a dashboard with a soft detailing brush"),
  whiteLeather: stock("white-leather-seats", "Clean white leather front seats in a modern car"),
  rearSeats: stock("rear-seat-upholstery", "Spotless black rear seat upholstery"),
  cabin: stock("cabin-interior-seats", "Freshly cleaned car cabin viewed from the rear seats"),

  // Oahu — unsplash.com/photos/FeHU3cplLgY, y2wFOVjAn7g, _SAIzIbP_zQ
  kualoa: stock("kualoa-oahu-coastline", "Kualoa mountains and turquoise water along Oahu's windward coast"),
  northShoreSunset: stock("oahu-north-shore-sunset", "Sunset over a lava-rock beach on Oahu's North Shore"),
  hanauma: stock("hanauma-bay-oahu", "Hanauma Bay beneath dramatic clouds on Oahu"),
} satisfies Record<string, MediaImage>;

/** Hero/card photo for each service page. Falls back to the hand-wash shot. */
export const serviceImages: Record<string, MediaImage> = {
  "interior-detail": media.dashboardBrush,
  "exterior-detail": media.handWashCoupe,
  "carpet-shampoo": media.cabin,
  "seat-shampoo": media.rearSeats,
  "leather-conditioning": media.whiteLeather,
  "clay-bar-treatment": media.paintCorrection,
  "exterior-spray-wax": media.polisher,
  "rim-detailing": media.tireBrush,
  "headlight-restoration": media.headlight,
  "plastic-color-restoration": media.foamedWheel,
};

export const getServiceImage = (slug: string): MediaImage =>
  serviceImages[slug] ?? media.handWashCoupe;

const islandBackdrops = [media.kualoa, media.hanauma, media.northShoreSunset];

/**
 * Hero photo for a service-area page: a real job photographed in that town
 * when we have one, otherwise an Oahu landscape (stable per slug).
 */
export const getLocationImage = (slug: string): MediaImage => {
  const job = galleryImages.find((img) => img.location === slug);
  if (job) return { src: job.src, alt: job.alt };
  const hash = [...slug].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  return islandBackdrops[hash % islandBackdrops.length];
};

/** Topic → photo rules for blog posts, checked in order against slug + keyword. */
const postImageRules: [RegExp, MediaImage][] = [
  [/pcs|shipping|military|schofield/, media.kualoa],
  [/sunset|best-time|north-shore/, media.northShoreSunset],
  [/mold|musty|smell|mildew/, media.cabin],
  [/pet-hair|seat|upholster/, media.rearSeats],
  [/leather/, media.whiteLeather],
  [/interior|basic-car-detail/, media.dashboardBrush],
  [/carpet|sand/, media.cabin],
  [/trim|plastic/, media.foamedWheel],
  [/red-dirt|(^|-)rim|wheel|brake/, media.tireBrush],
  [/headlight|sun|uv/, media.headlight],
  [/ceramic|wax|sealant|clay|water-spot|paint/, media.polisher],
  [/rust|salt/, media.foamWheel],
  [/condo/, media.handWashCoupe],
  [/car-wash|exterior/, media.snowFoam],
  [/selling|cost/, media.handWashCoupe],
  [/worth-it|how-long|before-car-detail|best-mobile/, media.spongeWash],
];

/**
 * Featured photo for a blog post: a real job photo for posts about a specific
 * service area, otherwise a stock photo matched to the post's topic.
 */
export const getPostImage = (slug: string, keyword = ""): MediaImage => {
  const text = `${slug} ${keyword.toLowerCase().replace(/\s+/g, "-")}`;
  for (const [pattern, image] of postImageRules) if (pattern.test(text)) return image;
  const town = galleryImages.find((img) => text.includes(img.location));
  if (town) return { src: town.src, alt: town.alt };
  return media.handWashCoupe;
};
