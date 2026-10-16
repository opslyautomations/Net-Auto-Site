/**
 * Search-keyword map for service and service-area pages.
 *
 * Built from a Google Autocomplete sweep of Oahu detailing searches
 * (October 2026). Each page targets one primary phrase plus close variants,
 * worked into a dedicated copy section rather than stuffed into existing text.
 * `guides` link each page to the blog posts that answer the related questions.
 */

import type { ServiceFAQ } from "@/lib/services";

export interface PageKeywords {
  primary: string;
  secondary: string[];
  heading: string;
  /** Paragraphs; supports [label](/path) links. */
  body: string[];
  faqs?: ServiceFAQ[];
  /** Blog post slugs to feature as related guides. */
  guides: string[];
}

export interface LocationKeywords extends PageKeywords {
  /** Neighborhoods and communities served within / around the area. */
  neighborhoods: string[];
}

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export const serviceKeywords: Record<string, PageKeywords> = {
  "interior-detail": {
    primary: "interior car cleaning oahu",
    secondary: ["interior car cleaning honolulu", "car interior detailing oahu", "steam cleaning car interior"],
    heading: "Interior Car Cleaning in Honolulu and Across Oahu",
    body: [
      "Interior car cleaning is the most searched-for detailing service on Oahu, and for good reason. Between beach sand ground into the carpet, sunscreen on the door panels, and the musty smell that humidity leaves behind, island cabins get dirty in ways a quick vacuum at the gas station can't fix.",
      "Our mobile interior detail combines a thorough vacuum with steam cleaning of upholstery, panels, vents, and cup holders, so the cabin is sanitized as well as tidy. We bring it to your driveway, office lot, or condo stall anywhere from [Honolulu](/service-areas/honolulu) to [Kapolei](/service-areas/kapolei). If you're dealing with stained carpet or fabric seats, pair it with [carpet shampoo](/services/carpet-shampoo) or [seat shampoo](/services/seat-shampoo) for a deep extraction clean.",
    ],
    faqs: [
      {
        question: "How often should I get my car's interior cleaned in Hawaii?",
        answer: "For most Oahu drivers, a professional interior cleaning every 3–4 months keeps sand, humidity, and odors under control. Beach-goers, families with kids or pets, and rideshare drivers usually benefit from every 6–8 weeks.",
      },
      {
        question: "Is steam cleaning safe for my car's interior?",
        answer: "Yes, when it's done correctly. Steam lifts grime and kills odor-causing bacteria with very little moisture, which matters in Hawaii's humidity. We adjust technique for sensitive surfaces like screens, piano-black trim, and leather.",
      },
    ],
    guides: ["interior-car-cleaning-oahu", "mold-in-car-hawaii", "car-musty-smell-hawaii", "pet-hair-removal-car"],
  },
  "exterior-detail": {
    primary: "exterior car detailing oahu",
    secondary: ["mobile car wash oahu", "mobile car wash honolulu", "hand car wash honolulu"],
    heading: "More Than a Mobile Car Wash",
    body: [
      "Plenty of people search for a mobile car wash on Oahu and end up with a quick rinse that leaves swirl marks and water spots behind. An exterior detail is the step up: a careful two-bucket hand wash, wheel cleaning, decontamination, a hand dry with microfiber, and dressing for tires and trim.",
      "That extra care matters here. Salt air, trade-wind dust, and red dirt are abrasive, and washing them off the wrong way scratches clear coat. Whether you're in a [Honolulu](/service-areas/honolulu) high-rise or a [Kailua](/service-areas/kailua) driveway, we bring a hand-wash-quality exterior detail to you, and you can add [spray wax](/services/exterior-spray-wax) for UV and salt protection.",
    ],
    faqs: [
      {
        question: "Is an exterior detail the same as a mobile car wash?",
        answer: "No. A mobile car wash is usually a fast wash and dry. An exterior detail adds safe hand-wash technique, wheel and tire cleaning, decontamination, and trim and tire dressing — it cleans more thoroughly and protects your paint while doing it.",
      },
      {
        question: "Can you remove water spots during an exterior detail?",
        answer: "Fresh mineral spots from sprinklers or rain usually come off during a proper wash and decontamination. Spots that have etched into the clear coat need machine polishing, which is a paint-correction service we don't currently offer — we'll tell you honestly what to expect.",
      },
    ],
    guides: ["mobile-car-wash-vs-mobile-detailing-oahu", "water-spots-on-car-paint-hawaii", "do-cars-rust-in-hawaii", "remove-red-dirt-from-car-hawaii"],
  },
  "carpet-shampoo": {
    primary: "car carpet cleaning oahu",
    secondary: ["car carpet shampoo", "get sand out of car carpet", "car carpet stain removal"],
    heading: "Car Carpet Cleaning for Sand, Red Dirt, and Spills",
    body: [
      "Oahu carpets take a beating. Fine beach sand works its way deep into the fibers, red dirt from central Oahu and North Shore trails leaves rust-colored stains, and spills in a humid cabin can turn sour fast. A vacuum only reaches the surface.",
      "Our car carpet shampoo uses hot-water extraction to flush out embedded sand, dirt, and odor, then pulls the dirty water back out so carpets dry faster. It's the fix for stains you've given up on, and it's especially useful in sandy beach towns like [Ewa Beach](/service-areas/ewa-beach) and red-dirt country like [Wahiawa](/service-areas/wahiawa).",
    ],
    faqs: [
      {
        question: "Can carpet shampooing get beach sand out of my car?",
        answer: "Yes. Agitation and hot-water extraction loosen sand that has worked down into the carpet backing, which a regular vacuum can't reach. Heavy sand loads may need extra passes, which we'll flag in your quote.",
      },
      {
        question: "How long do car carpets take to dry after shampooing?",
        answer: "Extraction removes most of the moisture, so carpets are usually dry within a few hours. In humid weather we recommend leaving windows cracked or running the AC to finish drying and prevent musty smells.",
      },
    ],
    guides: ["how-to-get-sand-out-of-car", "remove-red-dirt-from-car-hawaii", "mold-in-car-hawaii", "carpet-shampoo-vs-vacuum"],
  },
  "seat-shampoo": {
    primary: "car seat cleaning oahu",
    secondary: ["car seat shampoo", "car upholstery cleaning honolulu", "fabric car seat stain removal"],
    heading: "Car Seat Cleaning on Oahu — Done Where You Park",
    body: [
      "Car seat cleaning is one of the most searched detailing services on Oahu, and fabric seats are the reason. Cloth soaks up sweat, sunscreen, coffee, food spills, and the damp from wet board shorts — and in Hawaii's humidity those stains and smells settle in quickly.",
      "Our seat shampoo uses fabric-safe cleaners and hot-water extraction to lift stains from deep in the foam, not just the surface. We'll do it in your driveway, at work, or in your condo's parking structure in [Honolulu](/service-areas/honolulu), [Pearl City](/service-areas/pearl-city), and everywhere in between. For leather seats, see our [leather cleaning and conditioning](/services/leather-conditioning) service.",
    ],
    faqs: [
      {
        question: "What stains come out of fabric car seats?",
        answer: "Most everyday stains — coffee, soda, food, sweat, sunscreen, and mud — lift well with extraction. Old set-in stains, dye transfer, and ink are harder; we'll improve them as much as possible and tell you honestly beforehand what's realistic.",
      },
      {
        question: "Can you clean car seats at my condo in Honolulu?",
        answer: "Yes. Seat shampooing is done entirely inside the vehicle, which makes it a good fit for condo parking stalls and garages. Just let us know about any building rules when you book.",
      },
    ],
    guides: ["car-seat-cleaning-oahu", "pet-hair-removal-car", "condo-car-detailing-honolulu"],
  },
  "leather-conditioning": {
    primary: "leather car seat cleaning oahu",
    secondary: ["leather conditioning hawaii", "cracked leather car seats", "leather seat care sun damage"],
    heading: "Leather Car Seat Cleaning Built for Island Sun",
    body: [
      "Leather seats on Oahu face two enemies at once: intense UV that dries and cracks the hide, and humidity that lets body oils and sunscreen sit on the surface. Regular leather cleaning and conditioning keeps seats soft, protected, and looking new.",
      "We clean with a pH-balanced leather cleaner, then apply a UV-protective conditioner suited to Hawaii's heat. It's a smart add-on for anyone who parks outdoors in sunny spots like [Kapolei](/service-areas/kapolei) and [Ewa Beach](/service-areas/ewa-beach), or who drives a luxury vehicle they plan to keep.",
    ],
    faqs: [
      {
        question: "How often should car leather be conditioned in Hawaii?",
        answer: "Every three to four months is a good rhythm for most drivers. If your car sits in direct sun every day, conditioning more often helps prevent drying and cracking.",
      },
    ],
    guides: ["protect-car-from-hawaii-sun", "car-seat-cleaning-oahu", "leather-vs-cloth-tropical-climate-care"],
  },
  "clay-bar-treatment": {
    primary: "clay bar treatment oahu",
    secondary: ["paint decontamination", "rough car paint", "clay bar before wax"],
    heading: "Why Island Paint Needs Decontamination",
    body: [
      "Run your hand over your paint after a wash. If it feels gritty instead of glass-smooth, that's bonded contamination — salt residue, industrial fallout, tree sap, and overspray that washing alone can't remove. On Oahu it builds up fast.",
      "A clay bar treatment lifts that contamination off the clear coat so wax bonds properly and lasts longer. It's the right prep before [spray wax](/services/exterior-spray-wax), and it pairs naturally with an [exterior detail](/services/exterior-detail).",
    ],
    faqs: [
      {
        question: "Does a clay bar remove scratches or swirl marks?",
        answer: "No. Clay removes contamination sitting on top of the paint. Scratches and swirls are defects in the clear coat itself and need machine polishing (paint correction), which we don't currently offer.",
      },
    ],
    guides: ["clay-bar-treatment-explained", "ceramic-coating-vs-wax-hawaii", "water-spots-on-car-paint-hawaii"],
  },
  "exterior-spray-wax": {
    primary: "car wax oahu",
    secondary: ["best car wax for hawaii", "paint protection hawaii", "ceramic coating vs wax"],
    heading: "Car Wax That Stands Up to Salt and Sun",
    body: [
      "If you're comparing paint protection on Oahu, you've probably seen everything from quick spray waxes to multi-year ceramic coatings. For most daily drivers, a regularly maintained wax is the practical choice: it adds gloss, makes salt and dust easier to wash off, and gives your clear coat a sacrificial layer against UV.",
      "Our exterior spray wax is applied after washing (and ideally a [clay bar treatment](/services/clay-bar-treatment)) for the best bond. It's quick, affordable to maintain, and easy to refresh every couple of months — which matters when your car lives in the salt air of [Kailua](/service-areas/kailua) or [Hawaii Kai](/service-areas/hawaii-kai).",
    ],
    faqs: [
      {
        question: "Do you offer ceramic coating?",
        answer: "Not currently. We focus on wash, decontamination, and spray-wax protection that's easy to maintain. If you're weighing the options, our ceramic coating vs. wax guide explains the trade-offs honestly.",
      },
    ],
    guides: ["ceramic-coating-vs-wax-hawaii", "protect-car-from-hawaii-sun", "do-cars-rust-in-hawaii", "spray-wax-vs-paste-wax-vs-sealant"],
  },
  "rim-detailing": {
    primary: "rim cleaning oahu",
    secondary: ["wheel cleaning honolulu", "brake dust removal", "tire shine"],
    heading: "Wheel and Rim Cleaning for H-1 Brake Dust and Red Dirt",
    body: [
      "Stop-and-go traffic on the H-1 coats wheels in brake dust, and brake dust is corrosive — left alone, it pits and stains the finish. Add red dirt in the wheel wells and salt air, and Oahu wheels need more than a quick spray.",
      "Our rim detailing deep-cleans faces, barrels, and lug nuts with iron-dissolving cleaners and proper brushes, then dresses the tires. It's a good fit for commuters in [Pearl City](/service-areas/pearl-city) and [Aiea](/service-areas/aiea), and anyone driving the red-dirt roads around [Wahiawa](/service-areas/wahiawa).",
    ],
    faqs: [
      {
        question: "Can you clean red dirt out of wheel wells?",
        answer: "Yes. We clean the wheel wells along with the wheels and tires, which is where red dirt and mud build up most on central Oahu and North Shore vehicles.",
      },
    ],
    guides: ["rim-wheel-detailing-brake-dust", "remove-red-dirt-from-car-hawaii"],
  },
  "headlight-restoration": {
    primary: "headlight restoration oahu",
    secondary: ["headlight restoration honolulu", "cloudy headlights", "yellow headlights"],
    heading: "Why Headlights Cloud So Fast in Hawaii",
    body: [
      "Modern headlight lenses are polycarbonate with a factory UV coating. Hawaii's year-round sun breaks that coating down faster than on the mainland, and once it's gone the plastic oxidizes into the yellow, cloudy haze you see on so many cars around the island.",
      "Our headlight restoration sands away the damaged layer, polishes the lens clear, and seals it with fresh UV protection — done in your driveway in [Honolulu](/service-areas/honolulu), [Mililani](/service-areas/mililani), or anywhere on Oahu. Clear lenses look better and put more light on the road at night.",
    ],
    faqs: [
      {
        question: "Why do headlights turn yellow so fast in Hawaii?",
        answer: "Strong, year-round UV breaks down the protective coating on polycarbonate lenses. Once it fails, the plastic oxidizes and turns cloudy. Resealing the lens with UV protection after restoration slows it from coming back.",
      },
    ],
    guides: ["when-headlight-restoration-worth-it", "protect-car-from-hawaii-sun"],
  },
  "plastic-color-restoration": {
    primary: "faded trim restoration oahu",
    secondary: ["faded black plastic trim", "trim restoration honolulu", "sun damage car trim"],
    heading: "Faded Trim Is Sun Damage — and It's Fixable",
    body: [
      "That chalky gray look on bumpers, mirror housings, and fender flares is UV damage to unpainted plastic. It happens fast under Hawaii sun, and it makes an otherwise clean car look tired.",
      "Our plastic color restoration deep-cleans the trim and restores its rich black finish with a UV-resistant treatment, without replacing parts. The before-and-after is especially striking on trucks, Jeeps, and SUVs with lots of unpainted trim.",
    ],
    faqs: [
      {
        question: "Will restored trim fade again?",
        answer: "Eventually, because the sun keeps working on it. A UV-resistant finish slows that down considerably, and periodic touch-ups during regular details keep trim looking dark.",
      },
    ],
    guides: ["plastic-trim-restoration", "protect-car-from-hawaii-sun"],
  },
};

/* ------------------------------------------------------------------ */
/* Service areas                                                       */
/* ------------------------------------------------------------------ */

const areaKw = (town: string) => ({
  primary: `mobile car detailing ${town.toLowerCase()}`,
  secondary: [
    `auto detailing ${town.toLowerCase()}`,
    `car detailing ${town.toLowerCase()}`,
    `interior car cleaning ${town.toLowerCase()}`,
  ],
});

export const locationKeywords: Record<string, LocationKeywords> = {
  honolulu: {
    ...areaKw("Honolulu"),
    heading: "Car Detailing in Honolulu, From Kakaako to Kahala",
    body: [
      "Many Honolulu drivers don't have a driveway — they park in a condo tower, an office garage, or on the street. That's exactly who mobile auto detailing is built for. We come to your stall in Kakaako, Ala Moana, Waikiki, or Downtown and work right there.",
      "For Honolulu condo and office parking, the best fits are [interior car cleaning](/services/interior-detail), [car seat cleaning](/services/seat-shampoo), and [exterior detailing](/services/exterior-detail) to strip off the salt and grime of city driving. Ask about your building's rules when you book and we'll plan around them.",
    ],
    neighborhoods: ["Kakaako", "Ala Moana", "Waikiki", "Downtown", "Makiki", "McCully-Moiliili", "Kapahulu", "Nuuanu", "Kalihi", "Salt Lake", "Kahala"],
    guides: ["condo-car-detailing-honolulu", "interior-car-cleaning-oahu", "mobile-auto-detailing-honolulu-what-to-expect"],
  },
  kailua: {
    ...areaKw("Kailua"),
    heading: "Auto Detailing in Kailua for Beach-Town Cars",
    body: [
      "Kailua cars live a beach life: sand in the carpets, wet towels on the seats, and salt spray drifting in from Kailua and Lanikai beaches. Our mobile car detailing in Kailua is set up for exactly that — deep sand removal, salt-safe exterior washing, and protection that holds up near the water.",
      "Pair an [interior detail](/services/interior-detail) with [carpet shampoo](/services/carpet-shampoo) after a summer of beach days, or keep your paint protected with regular [spray wax](/services/exterior-spray-wax).",
    ],
    neighborhoods: ["Lanikai", "Enchanted Lake", "Coconut Grove", "Aikahi", "Kalaheo", "Maunawili", "Keolu Hills"],
    guides: ["kailua-salt-air-detailing", "how-to-get-sand-out-of-car", "do-cars-rust-in-hawaii"],
  },
  kapolei: {
    ...areaKw("Kapolei"),
    heading: "Car Detailing in Kapolei and Makakilo",
    body: [
      "The west side gets Oahu's strongest, most direct sun, so Kapolei car detailing is as much about protection as cleaning. Dashboards fade, leather dries out, and black trim turns gray faster here than almost anywhere on the island.",
      "Our mobile service covers Kapolei, Makakilo, Ko Olina, and the newer communities around them. For family vehicles, a strong combination is [interior car cleaning](/services/interior-detail) with [leather conditioning](/services/leather-conditioning) or [trim restoration](/services/plastic-color-restoration) to undo the sun damage.",
    ],
    neighborhoods: ["Makakilo", "Ko Olina", "Kapolei Knolls", "Kalaeloa", "Mehana", "Ho'opili"],
    guides: ["mobile-detailing-kapolei-guide", "protect-car-from-hawaii-sun", "interior-car-cleaning-oahu"],
  },
  kaneohe: {
    ...areaKw("Kaneohe"),
    heading: "Auto Detailing in Kaneohe's Windward Weather",
    body: [
      "Kaneohe's frequent rain keeps the windward side green — and keeps car interiors damp. Musty odors, mildew on seat fabric, and water spots on paint and glass are the problems we see most when detailing in Kaneohe.",
      "Our [interior car cleaning](/services/interior-detail) and [seat shampoo](/services/seat-shampoo) tackle odor and moisture at the source, while an [exterior detail](/services/exterior-detail) clears water spots and red dirt. We serve Kaneohe neighborhoods from Ahuimanu to the MCBH area.",
    ],
    neighborhoods: ["Ahuimanu", "Heeia", "Haiku", "Temple Valley", "Puohala", "Kaneohe Bay / MCBH area"],
    guides: ["kaneohe-windward-detailing-tips", "mold-in-car-hawaii", "car-musty-smell-hawaii"],
  },
  "pearl-city": {
    ...areaKw("Pearl City"),
    heading: "Car Detailing in Pearl City for H-1 Commuters",
    body: [
      "Pearl City drivers spend a lot of time on the H-1, and it shows: brake dust caked on the wheels, film on the windshield, and a cabin that doubles as a lunch room. Our mobile auto detailing in Pearl City fits around your commute — at home or in your work parking lot.",
      "For commuters, a smart combination is [interior car cleaning](/services/interior-detail) with [rim detailing](/services/rim-detailing), and add [headlight restoration](/services/headlight-restoration) for clearer night driving.",
    ],
    neighborhoods: ["Pacific Palisades", "Momilani", "Manana", "Waiau", "Pearl City Peninsula"],
    guides: ["mobile-detailing-pearl-city-commuters", "is-mobile-detailing-worth-it-oahu", "mobile-detailing-waipahu"],
  },
  aiea: {
    ...areaKw("Aiea"),
    heading: "Auto Detailing in Aiea, Halawa, and Pearlridge",
    body: [
      "From the slopes of Aiea Heights down to Pearlridge, Aiea drivers deal with steep driveways, mixed sun and rain, and plenty of freeway miles. Our mobile car detailing in Aiea comes to your home or workplace, including near Pearl Harbor.",
      "Good fits here: [exterior detailing](/services/exterior-detail) with [spray wax](/services/exterior-spray-wax), and [interior car cleaning](/services/interior-detail) for family vehicles and commuter cars.",
    ],
    neighborhoods: ["Aiea Heights", "Halawa", "Pearlridge", "Newtown", "Royal Summit"],
    guides: ["interior-car-cleaning-oahu", "pcs-hawaii-car-shipping-cleaning"],
  },
  "ewa-beach": {
    ...areaKw("Ewa Beach"),
    heading: "Car Detailing in Ewa Beach — Salt, Sand, and Sun",
    body: [
      "Ewa Beach sits right on the water, so car detailing in Ewa Beach is all about fighting salt, sand, and strong leeward sun. Salt film dulls paint, sand grinds into carpet, and UV fades trim.",
      "We serve Ewa Beach, Ocean Pointe, Hoakalei, and Ewa by Gentry with [carpet shampoo](/services/carpet-shampoo) for sand, [exterior detailing](/services/exterior-detail) for salt, and [trim restoration](/services/plastic-color-restoration) for sun-faded plastic.",
    ],
    neighborhoods: ["Ocean Pointe", "Hoakalei", "Ewa by Gentry", "Iroquois Point", "Puuloa"],
    guides: ["mobile-detailing-ewa-beach", "how-to-get-sand-out-of-car", "do-cars-rust-in-hawaii"],
  },
  mililani: {
    ...areaKw("Mililani"),
    heading: "Car Detailing in Mililani Town and Mililani Mauka",
    body: [
      "Mililani is family-car country — minivans and SUVs that carry kids, sports gear, and the occasional red dirt from central Oahu fields. Our mobile auto detailing in Mililani comes right to your driveway, so you can detail both cars without losing a Saturday.",
      "For family vehicles, pair [interior car cleaning](/services/interior-detail) with [seat shampoo](/services/seat-shampoo), plus [rim detailing](/services/rim-detailing) to clear red dirt and brake dust.",
    ],
    neighborhoods: ["Mililani Town", "Mililani Mauka", "Launani Valley"],
    guides: ["mobile-detailing-mililani-family", "car-seat-cleaning-oahu", "remove-red-dirt-from-car-hawaii"],
  },
  "hawaii-kai": {
    ...areaKw("Hawaii Kai"),
    heading: "Auto Detailing in Hawaii Kai and East Honolulu",
    body: [
      "Hawaii Kai combines marina salt air with plenty of luxury and performance vehicles, which is why careful hand-wash detailing matters here. Our mobile car detailing in Hawaii Kai protects paint from salt and sun without the swirl marks a quick wash can leave.",
      "For premium vehicles, consider an [exterior detail](/services/exterior-detail) with [clay bar treatment](/services/clay-bar-treatment) and [spray wax](/services/exterior-spray-wax), plus [leather conditioning](/services/leather-conditioning) for premium interiors.",
    ],
    neighborhoods: ["Portlock", "Kalama Valley", "Mariners Ridge", "Kamilo Iki", "Koko Head"],
    guides: ["hawaii-kai-mobile-detailing", "ceramic-coating-vs-wax-hawaii", "best-mobile-detailing-oahu"],
  },
  haleiwa: {
    ...areaKw("Haleiwa"),
    heading: "Car Detailing on the North Shore",
    body: [
      "Haleiwa and the North Shore mean surf trucks, beach sand, red dirt roads, and constant ocean spray. Car detailing here has to handle all of it — and most North Shore drivers don't want to drive into town for it.",
      "We bring [interior car cleaning](/services/interior-detail), [carpet shampoo](/services/carpet-shampoo), and [exterior detailing](/services/exterior-detail) to Haleiwa, Sunset Beach, and Pupukea, so your rig gets clean where it's parked.",
    ],
    neighborhoods: ["Haleiwa Town", "Sunset Beach", "Pupukea", "Kawailoa", "Waimea"],
    guides: ["north-shore-oahu-mobile-detailing-guide", "how-to-get-sand-out-of-car", "remove-red-dirt-from-car-hawaii"],
  },
  wahiawa: {
    ...areaKw("Wahiawa"),
    heading: "Auto Detailing in Wahiawa — Red Dirt Specialists",
    body: [
      "Central Oahu's iron-rich red dirt stains everything it touches: carpet, floor mats, wheel wells, and light-colored paint. Car detailing in Wahiawa means using the right cleaners and extraction to actually lift that stain instead of spreading it around.",
      "Our [carpet shampoo](/services/carpet-shampoo), [rim detailing](/services/rim-detailing), and [exterior detailing](/services/exterior-detail) are built for red dirt. We serve Wahiawa, Whitmore Village, and the surrounding central Oahu communities.",
    ],
    neighborhoods: ["Wahiawa Heights", "Whitmore Village", "Wilikina area", "Wheeler area"],
    guides: ["remove-red-dirt-from-car-hawaii", "mobile-detailing-schofield-barracks"],
  },
  waialua: {
    ...areaKw("Waialua"),
    heading: "Car Detailing in Waialua and Mokuleia",
    body: [
      "Waialua's rural roads and ocean breezes leave vehicles dusty, salty, and sandy. Our mobile car detailing in Waialua saves you the long drive to a shop — we come to your home in Waialua or out toward Mokuleia.",
      "For rural driving, pair [interior car cleaning](/services/interior-detail) with [carpet shampoo](/services/carpet-shampoo) to clear dust and sand, plus an [exterior detail](/services/exterior-detail) to wash off salt.",
    ],
    neighborhoods: ["Waialua Town", "Mokuleia"],
    guides: ["north-shore-oahu-mobile-detailing-guide", "remove-red-dirt-from-car-hawaii"],
  },
  waimalu: {
    ...areaKw("Waimalu"),
    heading: "Auto Detailing in Waimalu, Next to Pearlridge",
    body: [
      "Waimalu sits between Aiea and Pearl City, with plenty of townhomes and condos where a hose and driveway aren't always available. Mobile car detailing in Waimalu solves that — we work in your assigned stall or garage.",
      "[Interior car cleaning](/services/interior-detail) and [seat shampoo](/services/seat-shampoo) both work entirely inside the car, which suits condo parking, along with [exterior detailing](/services/exterior-detail) for commuter cars.",
    ],
    neighborhoods: ["Waimalu", "Newtown", "Pearlridge area"],
    guides: ["condo-car-detailing-honolulu", "interior-car-cleaning-oahu"],
  },
  manoa: {
    ...areaKw("Manoa"),
    heading: "Car Detailing in Manoa Valley",
    body: [
      "Manoa's frequent valley rain means damp interiors, musty smells, and water spots. Car detailing in Manoa focuses on moisture: getting odor out of carpets and seats and keeping paint and glass clear.",
      "We serve Manoa homes and the University of Hawaii area with [interior car cleaning](/services/interior-detail), [seat shampoo](/services/seat-shampoo), and [exterior detailing](/services/exterior-detail).",
    ],
    neighborhoods: ["Manoa Valley", "Woodlawn", "East Manoa", "University area"],
    guides: ["car-musty-smell-hawaii", "mold-in-car-hawaii", "water-spots-on-car-paint-hawaii"],
  },
  "waimanalo-beach": {
    ...areaKw("Waimanalo"),
    heading: "Car Detailing in Waimanalo",
    body: [
      "Waimanalo's beaches are some of Oahu's most beautiful — and some of the sandiest for your car. Car detailing in Waimanalo means serious sand removal inside and salt removal outside.",
      "We bring [carpet shampoo](/services/carpet-shampoo), [interior car cleaning](/services/interior-detail), and [exterior detailing](/services/exterior-detail) right to Waimanalo homes, so there's no long drive over the Pali to get it done.",
    ],
    neighborhoods: ["Waimanalo Town", "Waimanalo Beach area", "Bellows area"],
    guides: ["how-to-get-sand-out-of-car", "do-cars-rust-in-hawaii"],
  },
  kaimuki: {
    ...areaKw("Kaimuki"),
    heading: "Auto Detailing in Kaimuki and Kapahulu",
    body: [
      "Kaimuki's hillside streets and limited parking make shop drop-offs a hassle. Our mobile car detailing in Kaimuki comes to your driveway or carport, from Kapahulu to Wilhelmina Rise.",
      "Good fits here include [interior car cleaning](/services/interior-detail) and [exterior detailing](/services/exterior-detail), plus [headlight restoration](/services/headlight-restoration) for older vehicles.",
    ],
    neighborhoods: ["Kapahulu", "Palolo", "St. Louis Heights", "Wilhelmina Rise", "Maunalani Heights"],
    guides: ["interior-car-cleaning-oahu", "is-mobile-detailing-worth-it-oahu"],
  },
  "royal-kunia": {
    ...areaKw("Royal Kunia"),
    heading: "Car Detailing in Royal Kunia and Village Park",
    body: [
      "Royal Kunia's hillside neighborhoods catch central Oahu dust and red dirt, while the leeward sun beats down on paint and dashboards. Our mobile car detailing in Royal Kunia handles both, right in your driveway.",
      "For family vehicles, pair [interior car cleaning](/services/interior-detail) with [rim detailing](/services/rim-detailing) and [spray wax](/services/exterior-spray-wax).",
    ],
    neighborhoods: ["Royal Kunia", "Village Park", "Kunia area"],
    guides: ["mobile-detailing-waipahu", "remove-red-dirt-from-car-hawaii"],
  },
  "ewa-villages": {
    ...areaKw("Ewa Villages"),
    heading: "Auto Detailing in Ewa Villages",
    body: [
      "Ewa Villages blends historic plantation-era homes with newer developments, and sits close enough to the coast to get salt in the air. Mobile car detailing in Ewa Villages keeps paint protected and interiors fresh without leaving home.",
      "Good fits include [exterior detailing](/services/exterior-detail), [spray wax](/services/exterior-spray-wax), and [interior car cleaning](/services/interior-detail).",
    ],
    neighborhoods: ["Ewa Villages", "Varona Village", "Ewa Gentry area"],
    guides: ["mobile-detailing-ewa-beach", "do-cars-rust-in-hawaii"],
  },
  "schofield-barracks": {
    ...areaKw("Schofield Barracks"),
    heading: "Car Detailing for Schofield and Wheeler Families",
    body: [
      "Military families at Schofield Barracks need detailing that fits inspection dates, deployments, and PCS moves. Our mobile car detailing near Schofield handles red dirt cleanup, move-out interior cleaning, and pre-shipping exterior washes.",
      "If you're shipping a vehicle, a thorough [exterior detail](/services/exterior-detail) with [rim detailing](/services/rim-detailing) helps clear the dirt that shipping inspections look for. On-base access may need advance coordination.",
    ],
    neighborhoods: ["Schofield Barracks housing", "Wheeler Army Airfield", "Helemano", "Wahiawa"],
    guides: ["pcs-hawaii-car-shipping-cleaning", "mobile-detailing-schofield-barracks", "remove-red-dirt-from-car-hawaii"],
  },
};
