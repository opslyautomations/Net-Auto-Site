export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface Location {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  intro: string;
  whyChoose: string[];
  nearbyAreas: string[];
  faqs: LocationFAQ[];
  ogImage: string;
}

export const locations: Location[] = [
  {
    slug: "honolulu",
    name: "Honolulu",
    metaTitle: "Mobile Detailing Honolulu | Net Automotive",
    metaDescription: "Premium mobile auto detailing in Honolulu, Oahu. We come to your condo, office, or driveway. Interior, exterior & restoration services. Request a free quote.",
    h1: "Mobile Auto Detailing in Honolulu, Oahu",
    tagline: "Showroom quality — delivered to your condo parking stall.",
    intro: "Honolulu is the heartbeat of Oahu — a dense, vibrant urban core where most residents park in high-rise condos, underground garages, or on busy streets. If you live in Downtown Honolulu, Kakaako, Ala Moana, or out toward Waikiki, you know the challenge: keeping your car looking great without the time or logistics to drop it off at a shop. Net Automotive Detailing solves that problem entirely. We bring professional-grade detailing equipment directly to wherever your car is parked, whether that's a covered stall in a Kakaako high-rise or a street spot in Nuuanu.\n\nHonolulu drivers deal with a unique combination of challenges — heavy daily traffic means brake dust and road grime accumulate fast, salt air drifts in from the ocean, and the intense tropical sun fades paint and dries out leather interiors faster than almost anywhere on the mainland. We use products specifically selected for these conditions: UV-resistant coatings, salt-neutralizing washes, and high-humidity-compatible drying techniques.\n\nWhether you drive a daily commuter car, a luxury sedan, a weekend SUV, or a rental-fleet vehicle, Net Automotive Detailing brings the full range of our mobile detailing services to Honolulu with the reliability and professionalism the city demands. Book your appointment online and we'll handle the rest — no drop-off, no waiting room, no hassle.",
    whyChoose: [
      "We come directly to your condo parking stall, underground garage, or office lot in Honolulu.",
      "Hawaii-specific products handle the salt air, UV exposure, and high humidity unique to urban Honolulu.",
      "No need to arrange transportation after dropping off — your car stays where you are.",
      "Professional results every time — we treat every vehicle like it's our own.",
    ],
    nearbyAreas: ["kaimuki", "manoa", "aiea", "pearl-city", "kaneohe"],
    faqs: [
      {
        question: "Do you detail in Honolulu condos and high-rises?",
        answer: "Yes — we regularly service clients in Honolulu's condo buildings. We work with covered parking stalls, open-air lots, and street parking. Let us know your parking situation when you book and we'll coordinate the best approach.",
      },
      {
        question: "How long does mobile detailing take in Honolulu?",
        answer: "A full interior detail takes 2–4 hours. An exterior detail takes 1–2 hours. Combined services take 3–5 hours. We work efficiently and will give you an accurate time estimate when you request your quote.",
      },
      {
        question: "Can you detail at my office in downtown Honolulu?",
        answer: "Absolutely. Many of our Honolulu clients book appointments during work hours and return to a fully detailed vehicle. As long as there's reasonable parking access, we can come to your workplace.",
      },
    ],
    ogImage: "/og/location-honolulu.png",
  },
  {
    slug: "kailua",
    name: "Kailua",
    metaTitle: "Mobile Detailing Kailua | Net Automotive Oahu",
    metaDescription: "Mobile auto detailing in Kailua, Oahu. We handle salt air, sandy interiors & windward humidity. Interior, exterior & restoration. Request a free quote today.",
    h1: "Mobile Auto Detailing in Kailua, Oahu",
    tagline: "Beach-town living demands beach-proof detailing.",
    intro: "Kailua is one of Oahu's most beloved communities — a windward beach town famous for its turquoise water, white sand, and laid-back lifestyle. But living this close to the ocean comes with real consequences for your vehicle. Salt air deposits from Kailua Bay and Lanikai Beach attack your paint, trim, and wheel finishes constantly. Sandy interiors from Kailua Beach Park become a fact of life. Windward humidity means moisture finds its way into door seals, carpets, and headliners faster than owners often realize.\n\nNet Automotive Detailing is experienced in exactly these conditions. We're not offering a generic car wash — we're offering detailing specifically tuned for coastal windward living. Our exterior wash process targets mineral deposits and salt residue before they etch your clear coat. Our interior services use extraction methods that pull Kailua's fine sand from deep within carpet fibers and seat fabric. Our leather conditioning treatments include UV protectants designed to combat the intense windward sun.\n\nWhether you're a longtime Kailua resident with a daily driver, a weekend surfer with a truck full of gear and sand, or a newer arrival who wants to protect their investment on the windward side, we'll come to your home, your driveway, or wherever you're parked on the Kailua side. Same-week appointments often available — get your free quote now.",
    whyChoose: [
      "Salt air expertise — we remove salt mineral deposits before they etch your paint and trim.",
      "Sand extraction — our hot-water extraction process removes fine Kailua beach sand from deep in carpets and seats.",
      "Windward humidity protection — we apply treatments that resist mildew and moisture damage.",
      "Convenient mobile service — no need to drive over the Pali for a quality detail.",
    ],
    nearbyAreas: ["kaneohe", "waimanalo-beach", "manoa", "honolulu", "kaimuki"],
    faqs: [
      {
        question: "Can you get sand out of carpet in Kailua vehicles?",
        answer: "Yes — removing beach sand is one of our specialties. Fine beach sand embeds deep into carpet fibers and standard vacuuming barely scratches the surface. Our hot-water extraction pulls sand from deep within the pile, leaving carpets genuinely clean.",
      },
      {
        question: "How often should I detail my car living near Kailua Beach?",
        answer: "For vehicles regularly driven or parked near the ocean in Kailua, we recommend an exterior detail every 3–4 weeks to prevent salt mineral buildup, and a full interior detail every 6–8 weeks if you're regularly bringing beach gear into the car.",
      },
      {
        question: "Do you come to Lanikai and Waimanalo side as well?",
        answer: "Yes — we service all of the windward coast including Lanikai, Kailua town, and the areas toward Waimanalo. Just mention your location when you request your quote.",
      },
    ],
    ogImage: "/og/location-kailua.png",
  },
  {
    slug: "kapolei",
    name: "Kapolei",
    metaTitle: "Mobile Detailing Kapolei | Net Automotive Oahu",
    metaDescription: "Mobile auto detailing in Kapolei, Oahu. Family vehicles, commuter SUVs and new development communities served. Interior & exterior detailing. Request a free quote.",
    h1: "Mobile Auto Detailing in Kapolei, Oahu",
    tagline: "West side's fastest-growing city — served right at your door.",
    intro: "Kapolei has transformed into Oahu's second city, with thousands of new families, working professionals, and businesses calling the west side home. The commute from Kapolei to Honolulu is real — and the daily mileage adds up. Family SUVs haul kids, sports gear, and beach supplies. Work trucks accumulate road grime from the H-1. Minivans see everything from soccer tournaments to Costco runs.\n\nNet Automotive Detailing brings professional mobile detailing directly to Kapolei's neighborhoods, new developments, and business parks. We understand the west side lifestyle — families that don't have time to drive to a shop, two-car households managing multiple vehicles, and commuters who want their car looking great without adding another errand to the list.\n\nKapolei's location near the coast means salt air is a real factor for paint and trim maintenance. The sun on the west side is particularly intense — UV fade on dashboards, leather, and exterior plastic trim happens fast here. Our services are calibrated for these conditions, with UV-protective treatments and salt-neutralizing products as standard parts of our process. Book your Kapolei appointment today and we'll come to your neighborhood.",
    whyChoose: [
      "Family vehicle specialists — we handle SUVs, minivans, and trucks with high interior demands.",
      "West-side sun protection — UV treatments to combat Kapolei's intense direct sun exposure.",
      "New development friendly — we navigate new neighborhoods and work in any driveway configuration.",
      "Convenient scheduling for busy Kapolei households and commuters.",
    ],
    nearbyAreas: ["ewa-beach", "ewa-villages", "royal-kunia", "pearl-city", "aiea"],
    faqs: [
      {
        question: "Do you detail in all Kapolei neighborhoods?",
        answer: "Yes — we service all of Kapolei including Kapolei Commons-area neighborhoods, Ko Olina-adjacent communities, and all residential developments west of Ewa. Just let us know your address when you book.",
      },
      {
        question: "Can you detail at my business or worksite in Kapolei?",
        answer: "Absolutely. We service Kapolei business parks and commercial areas. Many clients book during business hours while they work — we handle the car, you handle the day.",
      },
      {
        question: "How long does mobile detailing take for an SUV or minivan in Kapolei?",
        answer: "Family-sized vehicles typically take 3–5 hours for a full interior and exterior detail. We'll provide an accurate time estimate based on your vehicle and its condition when you request your quote.",
      },
    ],
    ogImage: "/og/location-kapolei.png",
  },
  {
    slug: "kaneohe",
    name: "Kaneohe",
    metaTitle: "Mobile Detailing Kaneohe | Net Automotive Oahu",
    metaDescription: "Mobile auto detailing in Kaneohe, Oahu. Windward rain belt mildew prevention, military family service near MCBH. Interior & exterior detailing. Get a free quote.",
    h1: "Mobile Auto Detailing in Kaneohe, Oahu",
    tagline: "Windward rain and red roads — we know Kaneohe.",
    intro: "Kaneohe sits in Oahu's lush windward rain belt — one of the wettest areas on the island. The frequent rainfall keeps everything green and beautiful, but it does real damage to vehicles over time. Water spots accumulate on paint and glass. Moisture finds its way into carpet, seat fabric, and headliners, creating the mildew and musty odors that Kaneohe residents know well. Red volcanic dirt from unpaved areas and trail access roads stains wheel wells and undercarriages.\n\nNet Automotive Detailing brings windward-specific mobile detailing to Kaneohe. We understand the mildew challenge — our interior extraction services include enzyme-based odor treatments that address moisture-driven odors at the source, not just mask them. Our exterior services include dedicated water-spot removal and paint protection products that resist Kaneohe's frequent rain. For families near Marine Corps Base Hawaii at Kāne'ohe Bay, we offer flexible scheduling and understand the unique needs of military households.\n\nKaneohe is a community we love serving — the windward lifestyle demands consistent vehicle care, and we're here to make that easy. Whether you're in Ahuimanu, Heeia, or closer to the MCBH gate, we'll come to you.",
    whyChoose: [
      "Mildew and moisture expertise — enzyme treatments for windward interior dampness and odor.",
      "Water spot removal — targeted treatments for paint and glass affected by Kaneohe's frequent rainfall.",
      "Military family friendly — flexible scheduling for MCBH families and civilian employees.",
      "Red dirt cleanup — thorough wheel well and exterior cleaning for vehicles on Kaneohe's back roads.",
    ],
    nearbyAreas: ["kailua", "waimanalo-beach", "honolulu", "aiea", "wahiawa"],
    faqs: [
      {
        question: "Do you detail near Marine Corps Base Hawaii in Kaneohe?",
        answer: "Yes. We service Kaneohe Bay and MCBH-area clients regularly. We understand military schedules and offer flexible booking options. On-base access may require advance coordination — contact us to discuss your specific situation.",
      },
      {
        question: "Can you fix mildew odors in my car from Kaneohe's humidity?",
        answer: "Yes — this is one of our most common Kaneohe requests. We use enzyme-based odor eliminators as part of our interior services, which neutralize mildew odors at the source rather than covering them with fragrances.",
      },
      {
        question: "How does Kaneohe's rain affect how often I should detail?",
        answer: "Frequent rain means water spots and paint mineral deposits accumulate quickly. We recommend a full exterior detail every 4–6 weeks and an interior check every 6–8 weeks to stay ahead of moisture-related issues.",
      },
    ],
    ogImage: "/og/location-kaneohe.png",
  },
  {
    slug: "pearl-city",
    name: "Pearl City",
    metaTitle: "Mobile Detailing Pearl City | Net Automotive",
    metaDescription: "Mobile auto detailing in Pearl City, Oahu. High-mileage commuter car specialists — interior, exterior & brake dust removal. Request your free quote today.",
    h1: "Mobile Auto Detailing in Pearl City, Oahu",
    tagline: "High-mileage commuters deserve a car that looks great.",
    intro: "Pearl City is one of Oahu's most central commuter communities — positioned right at the junction of the H-1 and H-2, making it a hub for daily drivers heading into Honolulu, out to Kapolei, or up to Mililani and Wahiawa. That central location means Pearl City vehicles log serious miles. High-mileage commuting shows up in the details — brake dust baked onto rims, road tar on lower panels, worn carpets, and sun-faded dashboards from hours in stop-and-go traffic.\n\nNet Automotive Detailing understands the commuter vehicle. We know what a car that sees 300+ miles a week looks like and exactly what it needs. Our exterior services pay special attention to wheel arches and lower panels where road grime accumulates, and our rim detailing service is popular with Pearl City clients who deal with heavy brake dust from daily freeway driving. Interior services focus on high-traffic areas — carpets, driver's seat fabric, and the grime that builds up around the console and cup holders over months of daily use.\n\nWith our mobile service, Pearl City clients don't add another stop to an already busy commute schedule. We come to your home, your driveway, or even your workplace — and your car is ready when you are.",
    whyChoose: [
      "Commuter car specialists — we know what high-mileage H-1 driving does to interiors and paint.",
      "Heavy brake dust removal — our rim detailing handles the brake dust that builds up fast on daily drivers.",
      "Time-efficient — no drop-off required for Pearl City's busy working households.",
      "Road grime expertise — targeted cleaning for lower panels and wheel wells on commuter vehicles.",
    ],
    nearbyAreas: ["aiea", "waimalu", "mililani", "kapolei", "honolulu"],
    faqs: [
      {
        question: "Can you detail my commuter car at Pearl City Walmart or a shopping center?",
        answer: "In many cases yes — we can work in private parking lots with permission. Contact us to discuss your preferred location and we'll confirm access before your appointment.",
      },
      {
        question: "How often should a high-mileage commuter car in Pearl City be detailed?",
        answer: "For daily commuters logging significant mileage, we recommend a basic exterior detail every 3–4 weeks and a full interior detail every 2–3 months. Consistent maintenance prevents the heavy buildup that requires more intensive (and costly) restoration later.",
      },
      {
        question: "Do you come to residential neighborhoods in Pearl City?",
        answer: "Yes — we service all Pearl City neighborhoods including Manana, Pacific Palisades, and surrounding areas. Just provide your address when you request your quote.",
      },
    ],
    ogImage: "/og/location-pearl-city.png",
  },
  {
    slug: "aiea",
    name: "Aiea",
    metaTitle: "Mobile Detailing Aiea | Net Automotive Oahu",
    metaDescription: "Mobile auto detailing in Aiea, Oahu. Serving Pearl Harbor-adjacent military and civilian community. Interior, exterior & restoration services. Get a free quote.",
    h1: "Mobile Auto Detailing in Aiea, Oahu",
    tagline: "Pearl Harbor-adjacent — professional detailing, no hassle.",
    intro: "Aiea sits at the heart of Oahu's central corridor, nestled between Pearl City and Halawa with direct access to Pearl Harbor. The community is a mix of longtime island families, military personnel and their families affiliated with the nearby Pearl Harbor Naval Complex, and working professionals who commute throughout the island's central corridor.\n\nAiea vehicles face the same salt air challenges as the rest of leeward Oahu — Pearl Harbor's waterfront proximity means salt-laden air is a constant presence. Add the industrial fallout from the port area and the daily freeway grime from the H-1, and Aiea vehicles accumulate a unique mix of contaminants that demand professional attention. Net Automotive Detailing addresses all of it — iron-dissolving treatments for industrial fallout, salt-neutralizing washes, and UV-protective finishes for Aiea's sunny leeward exposure.\n\nWe make the process completely effortless. Whether you're in a residential neighborhood near Aiea Loop Trail, a condo complex along the corridor, or working at the shipyard and want your car done while you're on shift, we'll coordinate the logistics and come to you.",
    whyChoose: [
      "Pearl Harbor-area expertise — familiar with industrial fallout and salt air from waterfront proximity.",
      "Military-friendly service for Pearl Harbor Naval Complex personnel and families.",
      "Flexible scheduling to accommodate shift workers and commuters.",
      "Full-service detailing including iron fallout removal and UV paint protection.",
    ],
    nearbyAreas: ["pearl-city", "waimalu", "honolulu", "kapolei", "ewa-beach"],
    faqs: [
      {
        question: "Do you serve military families near Pearl Harbor in Aiea?",
        answer: "Absolutely. We regularly serve military families in the Aiea area. We're familiar with the schedules and demands of military household life and offer flexible booking options.",
      },
      {
        question: "Can you remove industrial fallout from my car's paint in Aiea?",
        answer: "Yes. Our clay bar and iron-dissolving decontamination treatment is very effective for industrial fallout — common in areas near Pearl Harbor's industrial waterfront. We recommend it as a regular service for Aiea vehicles.",
      },
      {
        question: "How do I book mobile detailing in Aiea?",
        answer: "Simply fill out our quote request form on this page. We'll follow up to confirm your vehicle, preferred location in Aiea, and the services you need. Scheduling is fast and convenient.",
      },
    ],
    ogImage: "/og/location-aiea.png",
  },
  {
    slug: "ewa-beach",
    name: "Ewa Beach",
    metaTitle: "Mobile Detailing Ewa Beach | Net Automotive",
    metaDescription: "Mobile auto detailing in Ewa Beach, Oahu. Coastal salt air, sand & sun protection for fast-growing residential community. Get your free quote today.",
    h1: "Mobile Auto Detailing in Ewa Beach, Oahu",
    tagline: "Ewa Beach's salt air meets its match.",
    intro: "Ewa Beach is one of Oahu's fastest-growing communities — a coastal residential area on the leeward south shore that has seen an explosion of new neighborhoods, young families, and first-time homeowners in recent years. Living this close to the ocean is a privilege that comes with a real cost to your vehicle's finish.\n\nEwa Beach vehicles are exposed to some of Oahu's most concentrated salt air — ocean winds carry salt spray inland, coating paint, trim, glass, and wheel finishes with mineral deposits that, over weeks and months, etch clear coats and dull plastic trim. Sandy car interiors are just as common as sandy shoes in this community. UV exposure on the leeward south shore is also intense — direct sun without the benefit of the windward cloud buffer means plastic trim, leather, and paint fade faster.\n\nNet Automotive Detailing brings complete mobile detailing to Ewa Beach's neighborhoods, making it easy for busy families and working professionals to keep their vehicles protected. We use salt-neutralizing washes, UV-resistant protective coatings, and deep extraction services to address everything coastal living throws at your car. No need to drive anywhere — we come to your driveway.",
    whyChoose: [
      "Coastal salt air specialists — dedicated treatments for Ewa Beach's intense ocean-spray exposure.",
      "New development friendly — we navigate newer neighborhoods and serve all of Ewa Beach's communities.",
      "UV protection focus for Oahu's leeward south shore's intense direct sun.",
      "Family vehicle experience — SUVs, minivans, and trucks with sand-heavy interiors.",
    ],
    nearbyAreas: ["ewa-villages", "kapolei", "royal-kunia", "aiea", "pearl-city"],
    faqs: [
      {
        question: "How often should Ewa Beach residents detail their cars?",
        answer: "Given the coastal salt air, we recommend an exterior detail every 3–4 weeks for vehicles regularly exposed to ocean winds. Interior services every 6–8 weeks keep sand and moisture under control. Consistency prevents damage from becoming restoration.",
      },
      {
        question: "Do you cover all of Ewa Beach's newer neighborhoods?",
        answer: "Yes — we service all Ewa Beach areas including Ewa Villages-adjacent neighborhoods, the newer residential developments, and everything in between. Give us your address when you book and we'll confirm coverage.",
      },
      {
        question: "Can you detail our second car too during the same visit?",
        answer: "Yes — we can detail multiple vehicles in one visit. Just let us know how many vehicles and what services you need when you request your quote and we'll plan the time accordingly.",
      },
    ],
    ogImage: "/og/location-ewa-beach.png",
  },
  {
    slug: "mililani",
    name: "Mililani",
    metaTitle: "Mobile Detailing Mililani | Net Automotive Oahu",
    metaDescription: "Mobile auto detailing in Mililani, Oahu. Family vehicles and two-car households served. Interior, exterior & full detailing. Request a free quote today.",
    h1: "Mobile Auto Detailing in Mililani, Oahu",
    tagline: "Mililani's planned community — served with planned convenience.",
    intro: "Mililani is Oahu's quintessential planned community — well-organized neighborhoods, good schools, active community centers, and the kind of suburban lifestyle where most households run two cars. With residents commuting to Honolulu, Kapolei, Wahiawa, and Pearl City, vehicles here log serious weekly mileage on the H-2 and H-1. Two-car households mean twice the maintenance demand.\n\nNet Automotive Detailing brings professional mobile detailing to Mililani's neighborhoods and makes the two-car household problem easy. We can detail multiple vehicles in a single visit — often turning a weekend morning into a complete fleet refresh. Mililani's elevation in Oahu's central plateau means less intense coastal salt air than leeward communities, but UV exposure is still significant and road grime from freeway commuting accumulates fast.\n\nFor Mililani families, the convenience factor is enormous. Instead of coordinating drop-offs, arranging rides, and timing pickups, you simply request a quote, pick a time, and go about your weekend. We handle both cars while you relax or run errands. Our mobile setup handles any Mililani driveway configuration, and we're experienced in the town's cul-de-sac-heavy street layouts.",
    whyChoose: [
      "Two-car household specialist — we can detail multiple vehicles in one efficient visit.",
      "Mililani driveway-ready — our setup works in any standard Mililani residential driveway.",
      "Commuter care — freeway grime, brake dust, and sun fade are our specialties.",
      "Family vehicle experience — from the daily sedan to the family SUV to the kids' car.",
    ],
    nearbyAreas: ["wahiawa", "pearl-city", "waimalu", "kapolei", "schofield-barracks"],
    faqs: [
      {
        question: "Can you detail two cars in one Mililani appointment?",
        answer: "Yes — this is one of our most popular Mililani options. We can detail two (or more) vehicles in one visit. Book through our quote form and specify how many vehicles you'd like serviced.",
      },
      {
        question: "Do you service Mililani Mauka as well as Mililani Town?",
        answer: "Yes — we cover all of Mililani including Mililani Town, Mililani Mauka, and the adjacent communities. Just provide your address when booking.",
      },
      {
        question: "How early can you arrive for a Mililani appointment?",
        answer: "We offer early morning appointments to fit Mililani commuters' schedules. Hours and availability are by appointment — mention your preferred time when you request your quote and we'll do our best to accommodate.",
      },
    ],
    ogImage: "/og/location-mililani.png",
  },
  {
    slug: "hawaii-kai",
    name: "Hawaii Kai",
    metaTitle: "Mobile Detailing Hawaii Kai | Net Automotive",
    metaDescription: "Mobile auto detailing in Hawaii Kai, Oahu. Premium service for marina vehicles and luxury daily drivers. Interior, exterior & restoration. Request a free quote.",
    h1: "Mobile Auto Detailing in Hawaii Kai, Oahu",
    tagline: "Marina-side luxury deserves premium mobile detailing.",
    intro: "Hawaii Kai is Oahu's premier marina community — a beautiful, affluent enclave where Maunalua Bay meets residential living and some of the finest homes on the island. Residents here drive premium daily drivers, luxury SUVs, and weekend sports cars alongside their boats. The combination of marina salt spray, Kuliouou upland breezes, and Oahu's UV intensity creates a particularly demanding environment for vehicle finishes.\n\nMarina proximity means constant salt air. Not the mild background salt of most Honolulu neighborhoods — but the direct, concentrated spray of an active marine environment. Without regular detailing, this accelerates paint oxidation, bleaches plastic trim, and corrodes metal surfaces much faster than inland areas. Net Automotive Detailing's Hawaii Kai clients typically opt for more frequent service intervals and comprehensive protective treatments — and we're equipped for exactly that.\n\nOur premium mobile service comes to your Hawaii Kai driveway, marina parking area, or home garage with the same professional-grade equipment and products used by the island's best detailing operations. We treat luxury and premium vehicles with the care and attention they deserve — using paint-safe processes, high-end products, and the precision that Hawaii Kai clients expect. Request your quote today and let us protect your investment.",
    whyChoose: [
      "Marina salt air expertise — precise decontamination and UV-protective treatments for coastal exposure.",
      "Premium vehicle experience — paint-safe processes for luxury and high-end vehicles.",
      "Discreet, professional service that matches Hawaii Kai's community standards.",
      "Flexible premium appointments for busy Hawaii Kai professionals and families.",
    ],
    nearbyAreas: ["honolulu", "kaimuki", "kailua", "waimanalo-beach", "kaneohe"],
    faqs: [
      {
        question: "Do you service luxury and exotic vehicles in Hawaii Kai?",
        answer: "Yes. We're experienced with luxury marques and use paint-safe, high-quality products appropriate for premium vehicles. If you have specific requirements for your vehicle, let us know when you book.",
      },
      {
        question: "How does marina proximity affect how often I should detail?",
        answer: "Hawaii Kai's marina environment means we recommend exterior detailing every 2–3 weeks for vehicles regularly exposed to salt spray, and interior services every 6–8 weeks. A clay bar and paint sealant service every 3 months provides excellent ongoing protection.",
      },
      {
        question: "Can you come to the marina area or my driveway in Hawaii Kai?",
        answer: "Yes to both. We can work in marina parking areas (where space permits) and at residential driveways throughout Hawaii Kai. Specify your preferred location when you request your quote.",
      },
    ],
    ogImage: "/og/location-hawaii-kai.png",
  },
  {
    slug: "haleiwa",
    name: "Haleiwa",
    metaTitle: "Mobile Detailing Haleiwa | Net Automotive Oahu",
    metaDescription: "Mobile auto detailing in Haleiwa on Oahu's North Shore. Surf town trucks, Jeeps & Broncos — sand, salt & red dirt removal. Get a free quote today.",
    h1: "Mobile Auto Detailing in Haleiwa, Oahu",
    tagline: "North Shore trucks and surf rigs — we know the lifestyle.",
    intro: "Haleiwa is the cultural capital of Oahu's legendary North Shore — a surf town with deep roots, an outdoor lifestyle that's second to none on the island, and a vehicle culture to match. Out here, trucks, Jeeps, Broncos, and lifted SUVs are the daily drivers of choice. Surf racks, roof boxes, tow hitches, and sandy floor mats are part of the package.\n\nThe North Shore lifestyle is incredible for the soul and absolutely brutal for vehicles. Ehukai Beach, Sunset Beach, and Pipeline leave fine sand in every crevice of an interior. Haleiwa's saltwater air — especially in winter when the big swells roll in — creates a constant salt coating on paint and trim. The unpaved and red-dirt side roads up toward the hills leave staining that regular car washes don't touch. Add in the intense North Shore sun with minimal urban shade, and vehicles here need more consistent care than almost anywhere else on Oahu.\n\nNet Automotive Detailing brings mobile detailing to Haleiwa and the surrounding North Shore communities. We're equipped to handle everything from a thorough sand extraction on a surf rig to a premium exterior decontamination on a weekend truck. No need to drive into town — we come to you.",
    whyChoose: [
      "Surf rig specialists — sand extraction and salt removal for trucks, Jeeps, and beach vehicles.",
      "Red dirt expertise — we remove North Shore's infamous red soil staining from exterior and interior.",
      "North Shore sun protection — UV treatments for vehicles with intense direct sun exposure.",
      "Mobile service means no long drive into town for Haleiwa-side residents.",
    ],
    nearbyAreas: ["waialua", "wahiawa", "kaneohe", "schofield-barracks", "mililani"],
    faqs: [
      {
        question: "Can you detail lifted trucks and Jeeps in Haleiwa?",
        answer: "Yes — we're experienced with trucks, Jeeps, Broncos, and lifted vehicles. Our equipment handles any vehicle height and configuration. Large vehicles may take additional time, which we'll account for in your quote.",
      },
      {
        question: "How do you handle red dirt staining from North Shore roads?",
        answer: "Red volcanic soil is one of the most stubborn staining issues in Oahu detailing. We use specific iron-dissolving and clay bar treatments on exterior surfaces, and hot-water extraction on interior carpets and mats. Results depend on how long the staining has set, but improvement is always significant.",
      },
      {
        question: "Do you come out to the North Shore and Haleiwa regularly?",
        answer: "Yes — we service the North Shore including Haleiwa, Pupukea, and surrounding areas. We recommend booking in advance as North Shore appointments fill up, especially on weekends.",
      },
    ],
    ogImage: "/og/location-haleiwa.png",
  },
  {
    slug: "wahiawa",
    name: "Wahiawa",
    metaTitle: "Mobile Detailing Wahiawa | Net Automotive Oahu",
    metaDescription: "Mobile auto detailing in Wahiawa, Oahu. Central plateau service for military and civilian community. Red dirt & sun fade removal. Request a free quote today.",
    h1: "Mobile Auto Detailing in Wahiawa, Oahu",
    tagline: "Central Oahu's red dirt capital — professionally cleaned.",
    intro: "Wahiawa sits at the heart of Oahu's central plateau, nestled between the Schofield Barracks military complex and the pineapple fields of Dole's historic central district. It's a community that's as real and grounded as it gets on the island — a mix of military families, multigenerational local households, and working families who get things done.\n\nWahiawa vehicles have a specific problem: red dirt. The volcanic red soil of Oahu's central plateau is everywhere — tracked into interiors, caked in wheel wells, and embedded in carpet fibers. It stains everything it touches. Combined with the plateau's dust during dry spells and the moderate UV exposure from Oahu's sun, Wahiawa vehicles benefit enormously from regular professional detailing. Near Schofield Barracks, military vehicles often need detailed cleaning for inspections, PCS moves, and deployment preparation.\n\nNet Automotive Detailing brings mobile service to Wahiawa's neighborhoods and the Schofield-adjacent communities. We're experienced with red dirt removal both inside and out, and our services are well-suited to the practical, no-nonsense needs of central Oahu's families and military community.",
    whyChoose: [
      "Red dirt specialists — effective removal from interiors, carpets, and wheel wells.",
      "Military-friendly service for Schofield Barracks-adjacent families and personnel.",
      "Central Oahu coverage — we serve Wahiawa and surrounding plateau communities.",
      "Practical, professional service tailored to working Wahiawa households.",
    ],
    nearbyAreas: ["schofield-barracks", "mililani", "haleiwa", "waialua", "pearl-city"],
    faqs: [
      {
        question: "Do you service Wahiawa and Schofield Barracks area?",
        answer: "Yes — we regularly service Wahiawa and the communities surrounding Schofield Barracks. For on-base service, contact us to discuss access requirements specific to Schofield.",
      },
      {
        question: "Can you get red Wahiawa soil out of my car's interior?",
        answer: "Red volcanic soil removal is one of our specialties for central Oahu clients. Hot-water extraction on carpets, targeted upholstery treatment, and thorough vacuuming with our professional equipment addresses red dirt effectively.",
      },
      {
        question: "Do you offer military discounts in Wahiawa?",
        answer: "Contact us when requesting your quote and mention your military status. We work with military families regularly and appreciate their service to our community.",
      },
    ],
    ogImage: "/og/location-wahiawa.png",
  },
  {
    slug: "waialua",
    name: "Waialua",
    metaTitle: "Mobile Detailing Waialua | Net Automotive Oahu",
    metaDescription: "Mobile auto detailing in Waialua on Oahu's North Shore. Agricultural dust, rural roads & salt air detailing. Interior & exterior service. Get a free quote today.",
    h1: "Mobile Auto Detailing in Waialua, Oahu",
    tagline: "Rural roads, dust, and ocean air — we handle it all.",
    intro: "Waialua is one of Oahu's most uniquely agricultural communities — a historic North Shore town where sugarcane once dominated the landscape and where farms, ranches, and rural homesteads still define the character. Today Waialua is known for its Waialua Estate coffee and cacao, its tight-knit local community, and its location at the quiet northwest end of the North Shore.\n\nVehicles in Waialua deal with challenges that most Oahu communities don't face at the same level. Agricultural dust from farm roads coats exteriors and infiltrates interiors. The fine dust from unpaved roads gets into air vents, carpets, and dashboard gaps that require careful attention. Waialua's North Shore ocean proximity brings salt air from both the Waialua Bay side and the Mokuleia coast. These combine to create a demanding environment that benefits from consistent professional detailing.\n\nNet Automotive Detailing serves Waialua's rural community with the same mobile convenience we bring to Honolulu — except we know your roads, your conditions, and what your vehicle actually faces day to day. We come to your property with everything we need.",
    whyChoose: [
      "Agricultural dust removal — effective cleaning for vehicles on Waialua's farm and ranch roads.",
      "Rural property mobile service — we come to your homestead, farm, or rural lot.",
      "North Shore salt air expertise for Waialua Bay and Mokuleia-facing properties.",
      "Interior air vent and deep dust cleaning for vehicles in dusty rural environments.",
    ],
    nearbyAreas: ["haleiwa", "wahiawa", "schofield-barracks", "kaneohe", "mililani"],
    faqs: [
      {
        question: "Can you come out to rural properties in Waialua?",
        answer: "Yes — we bring everything we need to your property. We just need vehicle access and ideally a water hookup. If water isn't available on-site, let us know when you book and we'll work out a solution.",
      },
      {
        question: "How do you handle agricultural dust inside a car?",
        answer: "Agricultural dust infiltrates everywhere — vents, headliner, console gaps, under seats. Our process includes thorough compressed air and vacuum cleaning of every surface before wet cleaning, ensuring dust is fully removed rather than just redistributed.",
      },
      {
        question: "Do you service Mokuleia and the Dillingham area too?",
        answer: "Yes — we cover all of the Waialua district including Mokuleia and properties out toward Dillingham Airfield. Mention your specific location when booking.",
      },
    ],
    ogImage: "/og/location-waialua.png",
  },
  {
    slug: "waimalu",
    name: "Waimalu",
    metaTitle: "Mobile Detailing Waimalu | Net Automotive Oahu",
    metaDescription: "Mobile auto detailing in Waimalu, Oahu. Pearl City-adjacent residential community — interior, exterior & full detailing. Request your free quote today.",
    h1: "Mobile Auto Detailing in Waimalu, Oahu",
    tagline: "Waimalu residential — professional mobile detailing, your doorstep.",
    intro: "Waimalu is a quiet, well-established residential community tucked between Pearl City and Aiea along Oahu's leeward corridor. It's the kind of neighborhood where longtime families have deep roots, where everyone knows their neighbors, and where taking care of your property — including your vehicles — is a point of pride.\n\nWaimalu's location on the leeward side of Oahu means consistent sun exposure, moderate salt air from Pearl Harbor's waterfront nearby, and the daily road grime of a community whose residents commute across the island's central highway network. Vehicles here typically deal with steady brake dust accumulation from freeway driving, UV fade from leeward sun, and the interior wear of daily family use.\n\nNet Automotive Detailing comes to Waimalu and handles everything. Our mobile setup works seamlessly in residential driveways, and our services cover everything from a quick exterior refresh to a full interior deep clean. For Waimalu's working families, the convenience of at-home detailing isn't a luxury — it's just smarter.",
    whyChoose: [
      "Residential driveway-ready mobile setup for Waimalu's neighborhood streets.",
      "Pearl Harbor-adjacent salt air treatment included in exterior services.",
      "Commuter car expertise for Waimalu's H-1 and H-2 daily drivers.",
      "Family-friendly scheduling with flexible appointment times.",
    ],
    nearbyAreas: ["pearl-city", "aiea", "honolulu", "kapolei", "mililani"],
    faqs: [
      {
        question: "Do you detail in Waimalu residential neighborhoods?",
        answer: "Yes — we service Waimalu's residential areas, working in driveways and street-side where accessible. It's a straightforward neighborhood to work in and we have regular clients there.",
      },
      {
        question: "How long does a typical mobile detail take in Waimalu?",
        answer: "Interior detailing takes 2–4 hours depending on vehicle size and condition. Exterior takes 1–2 hours. We'll give you an accurate estimate when you request your quote.",
      },
      {
        question: "Is there anything specific I need to prepare before you arrive?",
        answer: "Just make sure we have clear access to your vehicle and, ideally, a water hookup nearby. Remove any personal items you want protected from the interior. We handle the rest.",
      },
    ],
    ogImage: "/og/location-waimalu.png",
  },
  {
    slug: "manoa",
    name: "Manoa",
    metaTitle: "Mobile Detailing Manoa | Net Automotive Oahu",
    metaDescription: "Mobile auto detailing in Manoa Valley, Honolulu. Rain valley mildew prevention & UH community service. Interior, exterior & full detailing. Get a free quote.",
    h1: "Mobile Auto Detailing in Manoa, Oahu",
    tagline: "Manoa Valley rain — the reason your interior needs attention.",
    intro: "Manoa Valley is one of Honolulu's most beloved and distinctive neighborhoods — lush, green, academically vibrant with the University of Hawaii at Manoa at its heart, and famous for its afternoon rain showers that roll in from the Ko'olau ridgeline with almost clockwork regularity. Manoa is beautiful, but that rain is constant, and it creates specific vehicle challenges that differ from the rest of Honolulu.\n\nVehicles parked under Manoa's large monkeypod and banana trees accumulate organic debris — sap, bird droppings, and plant matter — that bonds to paint and requires careful removal. The valley's consistent humidity means cloth interiors, carpet, and headliners are susceptible to mildew in a way that drier parts of Oahu aren't. Students, faculty, professors, and longtime Manoa residents all deal with these conditions.\n\nNet Automotive Detailing comes to Manoa with solutions for exactly these challenges. Our exterior services include proper paint decontamination for organic bonded material, and our interior services include enzyme-based moisture and odor treatment for Manoa's humidity-prone cabins. We serve the University district, the upper valley, and the surrounding neighborhoods. Same-day and next-day appointments often available — get your quote online.",
    whyChoose: [
      "Rain valley expertise — organic debris removal, mildew prevention for Manoa's lush, wet environment.",
      "UH community service — flexible scheduling for students, faculty, and campus staff.",
      "Humidity-resistant interior treatments for Manoa Valley's high-moisture microclimate.",
      "Tree sap and bird dropping removal as part of standard exterior service.",
    ],
    nearbyAreas: ["honolulu", "kaimuki", "kailua", "hawaii-kai", "kaneohe"],
    faqs: [
      {
        question: "Can you remove tree sap from my paint in Manoa?",
        answer: "Yes. Tree sap is common in Manoa from monkeypod and other canopy trees. We use specific clay bar and chemical treatments to remove sap without damaging clear coat. Acting quickly is best — older sap bonds more aggressively.",
      },
      {
        question: "Do you service UH Manoa campus area parking?",
        answer: "We can service vehicles in the Manoa area near campus — contact us about your specific parking location. On-campus parking coordination may require advance planning but we're happy to work through the logistics.",
      },
      {
        question: "My car interior smells musty from Manoa's humidity — can you fix that?",
        answer: "Yes. Musty odors from humidity and moisture are one of our most common Manoa requests. Our interior service includes enzyme-based odor elimination that addresses the mildew source, not just the surface smell.",
      },
    ],
    ogImage: "/og/location-manoa.png",
  },
  {
    slug: "waimanalo-beach",
    name: "Waimanalo Beach",
    metaTitle: "Mobile Detailing Waimanalo Beach | Net Automotive",
    metaDescription: "Mobile auto detailing in Waimanalo Beach, Oahu. Windward beach community — sand-heavy interiors, ocean spray & salt air. Get your free quote today.",
    h1: "Mobile Auto Detailing in Waimanalo Beach, Oahu",
    tagline: "Where Oahu's most beautiful beach meets professional detailing.",
    intro: "Waimanalo Beach is arguably the most beautiful stretch of sand on Oahu — a long, pristine windward beach with views of Makapu'u and the Ko'olau mountains. It's a tight-knit community of local families who have called this corner of the windward coast home for generations. It's also one of the sandiest environments on the island for vehicles.\n\nLiving next to Waimanalo's beaches means sand is simply everywhere. It's in the carpets, between the seat cushions, caked in the door sill tracks, and embedded in the floor mat fibers. Ocean spray from the windward coast salts up your paint, glass, and trim. The windward humidity that keeps the area so green also creates the conditions for mildew in interiors. Add in the unpaved side roads around the community and you have a vehicle environment that demands consistent, professional attention.\n\nNet Automotive Detailing comes to Waimanalo Beach — no drive to the shop required, no logistics to arrange. We bring hot-water extraction for sand removal, salt-neutralizing exterior treatments, and the full range of our services to your driveway or property. We respect and understand this community, and we're proud to serve it.",
    whyChoose: [
      "Sand extraction specialists — hot-water extraction for Waimanalo's fine windward beach sand.",
      "Salt-neutralizing exterior treatments for ocean spray from the windward coast.",
      "Windward humidity protection for interiors susceptible to moisture and mildew.",
      "Community-focused mobile service that comes to your Waimanalo property.",
    ],
    nearbyAreas: ["kailua", "kaneohe", "hawaii-kai", "honolulu", "kaimuki"],
    faqs: [
      {
        question: "How do you get fine beach sand out of my car in Waimanalo?",
        answer: "Fine windward beach sand is extremely pervasive — it works into carpet fibers, seat weave, and even air vents. Our process uses professional-grade vacuuming followed by hot-water extraction to pull sand from deep within fabrics. Results are dramatic compared to standard vacuuming.",
      },
      {
        question: "Do you service all of Waimanalo and the Beach Road?",
        answer: "Yes — we service Waimanalo town, the Beach Road corridor, and surrounding properties. Give us your address when booking and we'll confirm service at your location.",
      },
      {
        question: "Can mobile detailing be done at a beach-side property?",
        answer: "Yes — as long as we have vehicle access and ideally a water source on the property. We're experienced working at properties near the beach and understand the setup requirements.",
      },
    ],
    ogImage: "/og/location-waimanalo-beach.png",
  },
  {
    slug: "kaimuki",
    name: "Kaimuki",
    metaTitle: "Mobile Detailing Kaimuki | Net Automotive Oahu",
    metaDescription: "Mobile auto detailing in Kaimuki, Honolulu. Historic neighborhood with on-street parking — convenient mobile service at your spot. Get a free quote today.",
    h1: "Mobile Auto Detailing in Kaimuki, Oahu",
    tagline: "Kaimuki's historic streets — convenient detailing wherever you park.",
    intro: "Kaimuki is one of Honolulu's most beloved neighborhoods — a vibrant, walkable historic district built on the slopes above Kapahulu with a character that no other part of Oahu quite matches. Waialae Avenue's restaurants, the eclectic mix of bungalows and mid-century homes, and a community identity that's proudly its own make Kaimuki special. But Kaimuki's urban character also means most residents deal with street parking, limited driveway space, and the challenge of keeping a car looking great without the logistics of a shop drop-off.\n\nNet Automotive Detailing's mobile service is made for exactly this situation. We can work in a standard street parking spot or a compact driveway — our setup is designed for urban residential environments. Kaimuki's proximity to Hawaii Kai and the windward passes means mild salt air influence, while the urban environment brings the usual bird droppings, tree sap, and road grime. Our exterior services address all of it.\n\nFor Kaimuki's community of homeowners, renters, and professionals who love their neighborhood but hate the logistics of car care, mobile detailing is the obvious solution. Get your quote and we'll come to your spot.",
    whyChoose: [
      "Street parking and compact driveway friendly — urban mobile detailing at your existing spot.",
      "Honolulu urban grime expertise — bird droppings, sap, and road contamination removal.",
      "Kaimuki-convenient service — no driving across the island for a quality detail.",
      "Flexible scheduling for Kaimuki's working professionals and family households.",
    ],
    nearbyAreas: ["honolulu", "hawaii-kai", "manoa", "waimanalo-beach", "kailua"],
    faqs: [
      {
        question: "Can you detail in a street parking spot in Kaimuki?",
        answer: "In most cases, yes. We're experienced working in on-street parking environments. We'll need basic water access — either from a nearby residence or our water supply. Contact us with your specific parking situation and we'll confirm what's feasible.",
      },
      {
        question: "Is mobile detailing available near Waialae Avenue?",
        answer: "Yes — we can service vehicles in Kaimuki including the Waialae corridor area. For busy street locations, we may need to coordinate timing to ensure we have adequate working space.",
      },
      {
        question: "How long does a mobile detail take if I'm parked on the street in Kaimuki?",
        answer: "About the same as anywhere else — 2–4 hours for interior, 1–2 for exterior. We work efficiently and will keep you updated on timing. Just make sure your parking spot is available for the duration.",
      },
    ],
    ogImage: "/og/location-kaimuki.png",
  },
  {
    slug: "royal-kunia",
    name: "Royal Kunia",
    metaTitle: "Mobile Detailing Royal Kunia | Net Automotive",
    metaDescription: "Mobile auto detailing in Royal Kunia, Oahu. Newer suburb with family SUVs and trucks — interior, exterior & full detailing. Get a free quote today.",
    h1: "Mobile Auto Detailing in Royal Kunia, Oahu",
    tagline: "Royal Kunia's newest driveways — professional detailing at your door.",
    intro: "Royal Kunia is one of Oahu's newer residential suburbs — a hilltop community overlooking Ewa and the leeward plains, developed over the last few decades into a well-kept neighborhood of family homes, two-car garages, and the kind of community pride that shows up in well-maintained properties. Residents here are working families, professionals who commute to Kapolei or Honolulu, and households that depend heavily on their vehicles.\n\nRoyal Kunia's elevated position on the leeward slopes means significant sun exposure — UV damage to paint, plastic trim, and leather interiors is accelerated here. The commute routes through Kunia Road and the freeway corridor bring road grime, brake dust, and the general accumulation of daily driving. Family vehicles — SUVs, trucks, and minivans — see the interior wear of active households.\n\nNet Automotive Detailing brings mobile service to Royal Kunia's residential streets and driveways. We're equipped for the neighborhood's vehicle mix and understand the maintenance needs of active family households. Book your appointment and we'll take care of the cars while you take care of everything else.",
    whyChoose: [
      "Elevated UV exposure protection — Royal Kunia's hilltop position demands strong UV treatments.",
      "Family vehicle specialists for SUVs, trucks, and minivans common in Royal Kunia.",
      "Residential driveway-friendly mobile setup for Royal Kunia's home configurations.",
      "Commuter grime removal for vehicles on the daily Kunia Road and freeway routes.",
    ],
    nearbyAreas: ["ewa-beach", "kapolei", "ewa-villages", "pearl-city", "aiea"],
    faqs: [
      {
        question: "Do you service all of Royal Kunia's neighborhoods?",
        answer: "Yes — we service Royal Kunia's residential areas throughout the community. Provide your address when booking and we'll confirm coverage for your specific location.",
      },
      {
        question: "Can you detail my truck or large SUV in Royal Kunia?",
        answer: "Absolutely. We regularly service trucks, full-size SUVs, and family vehicles throughout Oahu. Larger vehicles take additional time, which we'll account for in your quote.",
      },
      {
        question: "Is there anything special I should know about detailing in Royal Kunia's sun exposure?",
        answer: "Royal Kunia's elevated, west-facing position means strong afternoon sun. We prefer to detail in morning hours or shaded areas to produce the best results. We'll recommend the optimal approach when we schedule your appointment.",
      },
    ],
    ogImage: "/og/location-royal-kunia.png",
  },
  {
    slug: "ewa-villages",
    name: "Ewa Villages",
    metaTitle: "Mobile Detailing Ewa Villages | Net Automotive",
    metaDescription: "Mobile auto detailing in Ewa Villages, Oahu. Historic plantation neighborhood with established homes — interior, exterior & detailing. Get a free quote today.",
    h1: "Mobile Auto Detailing in Ewa Villages, Oahu",
    tagline: "Ewa Villages' established community — professional mobile detailing.",
    intro: "Ewa Villages is one of Oahu's most historically significant communities — a former sugar plantation neighborhood that has evolved into a diverse, established residential area with deep community roots. Unlike the newer developments of Ewa Beach and Kapolei, Ewa Villages has a settled character — mature trees, established homes, and a sense of neighborhood continuity that newer west side communities are still building.\n\nVehicles in Ewa Villages deal with leeward Oahu's characteristic conditions: consistent sun exposure, salt air from the nearby coast, and the daily grime of west side commuting. The older, established nature of some properties means vehicles may have more complex parking configurations — but our mobile setup handles any situation.\n\nNet Automotive Detailing comes to Ewa Villages with the same professionalism and quality we bring to every community on Oahu. We respect the neighborhood's character and work efficiently within any property configuration. Whether you're a longtime Ewa Villages resident or a newer arrival who's come to appreciate its community feel, we're here to make your car look its best.",
    whyChoose: [
      "Established neighborhood experience — we work with varied property and driveway configurations.",
      "West side salt air and UV treatments included as standard in exterior services.",
      "Community-focused service that respects Ewa Villages' neighborhood character.",
      "Flexible scheduling for established households and long-time residents.",
    ],
    nearbyAreas: ["ewa-beach", "kapolei", "royal-kunia", "aiea", "pearl-city"],
    faqs: [
      {
        question: "Do you service the historic Ewa Villages neighborhood?",
        answer: "Yes — we regularly service Ewa Villages and the surrounding west side communities. The neighborhood's established character is something we appreciate, and we work respectfully within any property configuration.",
      },
      {
        question: "Can you work around mature trees and tight driveways in Ewa Villages?",
        answer: "Yes — we're experienced with varied driveway configurations including tight spaces and tree-covered areas. We'll adapt our setup to whatever your property requires.",
      },
      {
        question: "How do I book mobile detailing for my Ewa Villages home?",
        answer: "Simply fill out the quote request form on this page. We'll contact you to confirm services, timing, and your specific address in Ewa Villages. The process is quick and straightforward.",
      },
    ],
    ogImage: "/og/location-ewa-villages.png",
  },
  {
    slug: "schofield-barracks",
    name: "Schofield Barracks",
    metaTitle: "Mobile Detailing Schofield Barracks | Net Auto",
    metaDescription: "Mobile auto detailing at Schofield Barracks, Oahu. PCS prep, deployment detailing & military family service. Interior & exterior. Get a free quote today.",
    h1: "Mobile Auto Detailing at Schofield Barracks, Oahu",
    tagline: "PCS-ready, deployment-ready, inspection-ready detailing.",
    intro: "Schofield Barracks is home to thousands of active-duty soldiers and their families — a complete community in Oahu's central plateau, serving as the headquarters of the 25th Infantry Division. Military life here moves fast. PCS moves happen on short notice. Deployment departures require vehicles to be secured and documented. In/out vehicle inspections demand a clean, well-maintained appearance. And through it all, military families are juggling the demands of service life while trying to take care of their households.\n\nNet Automotive Detailing understands the military lifecycle because we've served the military community on Oahu for years. We know the specific needs: pre-PCS detailing to sell or transport a vehicle, pre-deployment cleaning and storage prep, post-deployment interior refreshes for vehicles that have sat on-post for months, and regular maintenance details for the family car while a service member is in the field. We offer flexible, fast scheduling because we know military schedules don't always have a lot of lead time.\n\nOur mobile service comes directly to Schofield Barracks or adjacent housing areas. We bring everything we need. For on-post access, we recommend confirming your specific situation when you book — coordination varies by unit area and gate access. We're proud to serve those who serve our country.",
    whyChoose: [
      "Military lifecycle expertise — PCS prep, deployment prep, and post-deployment refreshes.",
      "Vehicle inspection ready — we get your vehicle looking clean for in/out inspections.",
      "Flexible scheduling for military schedules that don't always have advance notice.",
      "Central Oahu plateau coverage serving Schofield and adjacent communities.",
    ],
    nearbyAreas: ["wahiawa", "mililani", "haleiwa", "waialua", "pearl-city"],
    faqs: [
      {
        question: "Can you come on-post to Schofield Barracks?",
        answer: "In many cases yes, though on-post access varies. We recommend mentioning your on-post situation when you book so we can coordinate the best approach. Many clients prefer to meet us just off-post at a convenient location.",
      },
      {
        question: "Do you offer PCS vehicle detailing packages at Schofield?",
        answer: "Yes — we offer comprehensive pre-PCS detailing that covers full interior deep clean, exterior detail, and any restoration services needed to present a clean vehicle for shipping or sale. Contact us about what's included when you request your quote.",
      },
      {
        question: "How quickly can you schedule a pre-deployment detail?",
        answer: "We do our best to accommodate urgent military timelines. Contact us directly at (808) 777-8964 for time-sensitive appointments and we'll do everything we can to fit your schedule.",
      },
    ],
    ogImage: "/og/location-schofield-barracks.png",
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getNearbyLocations(slug: string): Location[] {
  const location = getLocationBySlug(slug);
  if (!location) return [];
  return location.nearbyAreas
    .map((s) => getLocationBySlug(s))
    .filter((l): l is Location => l !== undefined);
}
