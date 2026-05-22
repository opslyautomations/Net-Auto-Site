export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  intro: string;
  whatsIncluded: string[];
  benefits: { icon: string; title: string; description: string }[];
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
  ogImage: string;
}

export const services: Service[] = [
  {
    slug: "interior-detail",
    name: "Interior Detail",
    metaTitle: "Interior Car Detailing Oahu | Mobile Service",
    metaDescription: "Professional mobile interior car detailing on Oahu. Vacuum, steam clean, dashboard, console, windows & deodorize — we come to you. Request a free quote today.",
    h1: "Mobile Interior Car Detailing on Oahu",
    tagline: "A spotless cabin, delivered to your driveway.",
    intro: "Your car's interior takes a beating — sand from Kailua, fast-food spills, pet hair, and the daily grind of island commuting. Net Automotive Detailing's mobile interior detail service brings professional-grade cleaning to your home, office, or worksite. No drop-off, no waiting — just showroom results wherever you park.",
    whatsIncluded: [
      "Full vacuum of carpets, seats, trunk, and floor mats",
      "Steam cleaning of upholstery, door panels, and headliner",
      "Dashboard, console, and trim wipe-down with detailing products",
      "Interior window cleaning (streak-free)",
      "Cup holder and vent cleaning",
      "Leather or vinyl conditioning (if applicable)",
      "Odor elimination treatment",
      "Door jamb wipe-down",
    ],
    benefits: [
      { icon: "🚗", title: "We Come to You", description: "No drop-off required — we detail at your driveway, office, or condo." },
      { icon: "🌺", title: "Hawaii-Specific Products", description: "We use products designed to handle salt air, sand, and tropical humidity." },
      { icon: "✨", title: "Showroom Finish", description: "Every interior detail meets professional standards — spotless, fresh, and protected." },
    ],
    faqs: [
      {
        question: "How long does a mobile interior detail take?",
        answer: "Most interior details take 2–4 hours depending on the vehicle size and condition. A heavily soiled SUV or truck may take longer. We'll give you an accurate time estimate when you request your quote.",
      },
      {
        question: "Do I need to be home during the detail?",
        answer: "Not necessarily. As long as we have access to your vehicle and a place to work, you're free to go about your day. Many of our Oahu clients drop off their keys and return to a spotless car.",
      },
      {
        question: "Can you remove pet hair and strong odors?",
        answer: "Yes. We use professional-grade extraction tools for pet hair and odor-eliminating treatments for smoke, mildew, and food smells common in Hawaii's humid climate. Severely embedded odors may require a follow-up treatment.",
      },
    ],
    relatedSlugs: ["carpet-shampoo", "seat-shampoo", "leather-conditioning"],
    ogImage: "/og/interior-detail.png",
  },
  {
    slug: "exterior-detail",
    name: "Exterior Detail",
    metaTitle: "Exterior Car Detailing Oahu | Mobile Hand Wash",
    metaDescription: "Mobile exterior car detailing on Oahu — hand wash, decontamination, tire shine & more. We come to your driveway. Book your free quote with Net Automotive Detailing.",
    h1: "Mobile Exterior Car Detailing on Oahu",
    tagline: "Salt, sand, and road grime — gone.",
    intro: "Oahu's salt air, trade-wind dust, and intense UV rays attack your car's paint every single day. Net Automotive Detailing's mobile exterior detail service uses a thorough, multi-step hand wash process to remove surface contamination and restore that just-waxed look — without you leaving home.",
    whatsIncluded: [
      "Two-bucket hand wash method — safe for all paint types",
      "Wheel and tire cleaning",
      "Paint decontamination rinse",
      "Clay bar prep (if opted for clay bar service)",
      "Hand dry with microfiber towels",
      "Tire shine application",
      "Exterior window cleaning",
      "Trim dressing application",
      "Door jamb and sill cleaning",
    ],
    benefits: [
      { icon: "💧", title: "Eco-Friendly Process", description: "We use minimal water and eco-conscious products — great for Hawaii's environment." },
      { icon: "🌊", title: "Salt & Mineral Removal", description: "Coastal living leaves mineral deposits that erode clear coat — we remove them properly." },
      { icon: "☀️", title: "UV Protection", description: "Proper exterior detailing slows paint fade caused by Hawaii's intense tropical sun." },
    ],
    faqs: [
      {
        question: "How often should I get an exterior detail in Hawaii?",
        answer: "We recommend every 4–8 weeks for most Oahu drivers, and every 2–4 weeks if you live or park near the ocean. Salt air deposits build up fast and can accelerate paint damage if left untreated.",
      },
      {
        question: "Do you bring your own water?",
        answer: "We work best with access to a standard outdoor water hookup at your location. If that's not available, please let us know when you request your quote and we'll work out a solution.",
      },
      {
        question: "Is a hand wash better than a drive-through car wash?",
        answer: "Yes. Automated car washes use abrasive brushes that cause micro-scratches over time. Our two-bucket hand wash method is gentle on your paint, thorough on contamination, and leaves a much better finish.",
      },
    ],
    relatedSlugs: ["clay-bar-treatment", "exterior-spray-wax", "rim-detailing"],
    ogImage: "/og/exterior-detail.png",
  },
  {
    slug: "carpet-shampoo",
    name: "Carpet Shampoo",
    metaTitle: "Car Carpet Shampoo Oahu | Hot-Water Extraction",
    metaDescription: "Mobile car carpet shampoo on Oahu using hot-water extraction. Remove stains, odors & deep grime from your floor mats and carpets. Get a free quote today.",
    h1: "Carpet Shampoo Service for Cars — Oahu Mobile",
    tagline: "Deep clean from floor to mat — extracted, not just sprayed.",
    intro: "Sand from the beach, mud from hiking trails, fast-food spills, and the general wear of island living — it all ends up in your carpet. Net Automotive Detailing's mobile carpet shampoo service uses professional hot-water extraction to pull out embedded dirt, stains, and odors that vacuuming alone can't touch.",
    whatsIncluded: [
      "Pre-vacuum to remove loose debris and sand",
      "Spot treatment of visible stains before extraction",
      "Hot-water extraction cleaning of all carpet areas",
      "Floor mat removal and separate shampoo treatment",
      "Enzyme-based odor neutralizer application",
      "Post-extraction grooming of carpet fibers",
      "Drying time guidance to prevent mildew in Hawaii's humidity",
    ],
    benefits: [
      { icon: "🔥", title: "Hot-Water Extraction", description: "Professional extraction goes deep — removing what vacuums and surface sprays miss." },
      { icon: "🌿", title: "Odor Elimination", description: "Enzyme treatments neutralize the source of odors rather than just masking them." },
      { icon: "🏖️", title: "Hawaii Sand Removal", description: "We know Oahu sand. Our process removes fine beach sand embedded deep in carpet fibers." },
    ],
    faqs: [
      {
        question: "How long does carpet shampoo take to dry in Hawaii?",
        answer: "In Hawaii's humidity, carpets typically take 4–8 hours to fully dry. We recommend leaving windows cracked and parking in a shaded, ventilated area. We'll walk you through best practices to prevent any moisture buildup.",
      },
      {
        question: "Can you remove set-in stains?",
        answer: "We can remove most stains including mud, food, beverages, and pet accidents. Older, deeply set stains may require multiple treatments. We'll assess the stains when we arrive and be transparent about expected results.",
      },
      {
        question: "Do I need to remove my floor mats first?",
        answer: "No — we handle that as part of the service. We remove, shampoo, and replace your floor mats. They'll be cleaned separately on a flat surface for best results.",
      },
    ],
    relatedSlugs: ["interior-detail", "seat-shampoo", "leather-conditioning"],
    ogImage: "/og/carpet-shampoo.png",
  },
  {
    slug: "seat-shampoo",
    name: "Seat Shampoo",
    metaTitle: "Car Seat Shampoo Oahu | Cloth Seat Cleaning",
    metaDescription: "Mobile cloth seat shampoo and stain removal on Oahu. Deep extraction cleaning for fabric seats — we come to your location. Request your free quote today.",
    h1: "Cloth Seat Shampoo & Stain Removal — Oahu",
    tagline: "Fresh, clean seats without the trip to the shop.",
    intro: "Cloth seats absorb everything — sweat, sunscreen, beach moisture, food, and pet odors. Standard vacuuming doesn't cut it. Net Automotive Detailing's mobile seat shampoo service uses deep hot-water extraction and targeted stain treatment to restore your fabric seats to a clean, fresh state — right at your location.",
    whatsIncluded: [
      "Pre-vacuum of all seat surfaces",
      "Targeted pre-treatment of visible stains",
      "Hot-water extraction of all fabric seat surfaces",
      "Treatment of seat crevices and seam areas",
      "Odor neutralizer application",
      "Post-extraction grooming and drying guidance",
    ],
    benefits: [
      { icon: "💺", title: "Deep Extraction", description: "Professional extraction pulls moisture and dirt out of the fabric — not just the surface." },
      { icon: "🧴", title: "Stain-Specific Treatment", description: "We identify stain types and apply the right treatment for each — not a one-size-fits-all spray." },
      { icon: "🌺", title: "Island-Proof Results", description: "Especially effective for sunscreen, salt residue, and humidity-driven odors common on Oahu." },
    ],
    faqs: [
      {
        question: "How do I know if I need seat shampoo vs. just a vacuum?",
        answer: "If your seats have visible stains, a persistent odor, or feel slightly damp or sticky in humid weather, seat shampoo is the right call. Vacuuming removes surface debris; extraction removes what's embedded in the fabric.",
      },
      {
        question: "Can you shampoo leather seats too?",
        answer: "Leather requires a different treatment — our Leather Conditioning service is designed specifically for leather seats. We'll always check what type of upholstery your vehicle has before beginning.",
      },
      {
        question: "How long until the seats are dry and usable?",
        answer: "Seats are typically ready for comfortable use within 4–6 hours. Hawaii's humidity can extend drying time — leaving windows slightly open in a shaded spot speeds things up considerably.",
      },
    ],
    relatedSlugs: ["interior-detail", "carpet-shampoo", "leather-conditioning"],
    ogImage: "/og/seat-shampoo.png",
  },
  {
    slug: "leather-conditioning",
    name: "Leather Conditioning",
    metaTitle: "Leather Conditioning Oahu | Mobile Leather Care",
    metaDescription: "Mobile leather cleaning and conditioning on Oahu. pH-balanced cleaning, UV protection and conditioning for tropical heat. Request a free quote from Net Automotive Detailing.",
    h1: "Leather Cleaning & Conditioning — Mobile, Oahu",
    tagline: "Protect your leather from Hawaii's heat and humidity.",
    intro: "Leather interiors look luxurious — until Hawaii's intense UV rays, salt air, and humidity cause them to crack, fade, and stiffen. Net Automotive Detailing's mobile leather conditioning service cleans, conditions, and protects your leather seats, dash, and panels using pH-balanced professional products designed for tropical climates.",
    whatsIncluded: [
      "pH-balanced leather cleaning of all leather surfaces",
      "Removal of dirt, oils, and salt residue",
      "Deep conditioning treatment to restore suppleness",
      "UV protectant application to prevent sun fade and cracking",
      "Stitching and crevice cleaning",
      "Final buff for a natural, non-greasy finish",
    ],
    benefits: [
      { icon: "☀️", title: "UV Protection", description: "Hawaii sun is intense — our UV protectant prevents the cracking and fading unique to tropical climates." },
      { icon: "🧪", title: "pH-Balanced Formula", description: "Wrong cleaners strip leather's natural oils. Our products restore without causing long-term damage." },
      { icon: "💎", title: "Preserve Your Investment", description: "Proper conditioning extends leather life by years — making it one of the highest-ROI detailing services." },
    ],
    faqs: [
      {
        question: "How often should I condition leather in Hawaii?",
        answer: "In Hawaii's UV-heavy, humid environment, we recommend conditioning leather every 2–3 months. If your leather is already showing light cracking or fading, we may recommend an initial restoration treatment followed by regular maintenance.",
      },
      {
        question: "Will conditioning make my seats slippery?",
        answer: "No. We use professional conditioners that absorb into the leather rather than sitting on the surface. The finish is soft and natural — not greasy or slippery.",
      },
      {
        question: "Can you fix cracked or severely dried leather?",
        answer: "Conditioning can dramatically improve moderately dried leather. Deeply cracked leather may require specialized restoration beyond standard conditioning. We'll assess during your appointment and recommend the right approach.",
      },
    ],
    relatedSlugs: ["interior-detail", "seat-shampoo", "carpet-shampoo"],
    ogImage: "/og/leather-conditioning.png",
  },
  {
    slug: "clay-bar-treatment",
    name: "Clay Bar Treatment",
    metaTitle: "Clay Bar Treatment Oahu | Paint Decontamination",
    metaDescription: "Mobile clay bar decontamination on Oahu. Removes embedded contaminants for a glass-smooth surface and prepares paint for wax or sealant. Get a free quote today.",
    h1: "Clay Bar Decontamination — Mobile Detailing Oahu",
    tagline: "Glass-smooth paint starts with proper decontamination.",
    intro: "Even a clean-looking car surface is covered in microscopic contaminants — industrial fallout, brake dust, salt deposits, and embedded road grime. Net Automotive Detailing's mobile clay bar treatment physically removes these embedded particles, leaving your paint silky smooth and properly prepared for wax or sealant application.",
    whatsIncluded: [
      "Full exterior wash and rinse",
      "Clay bar decontamination of all painted surfaces",
      "Clay lubricant application to prevent marring",
      "Post-clay surface inspection",
      "IPA (isopropyl alcohol) wipe-down to remove residues",
      "Surface prep for wax or sealant (add-on)",
    ],
    benefits: [
      { icon: "🔬", title: "True Surface Cleanliness", description: "Clay bar removes what washing can't — embedded contaminants invisible to the naked eye." },
      { icon: "✨", title: "Better Wax Adhesion", description: "Wax bonds better and lasts longer on a properly decontaminated surface." },
      { icon: "🌊", title: "Salt & Fallout Removal", description: "Especially effective for Oahu coastal vehicles coated in salt mineral and industrial deposits." },
    ],
    faqs: [
      {
        question: "Do I need a clay bar treatment if my car looks clean?",
        answer: "Run a clean finger across your paint after washing — if it feels rough or gritty, you have embedded contamination. Clay bar treatment is recommended every 6–12 months for most Oahu vehicles, or before any wax or sealant application.",
      },
      {
        question: "Will clay bar scratch my paint?",
        answer: "When done correctly with the proper clay lubricant, the process is completely safe. Our technicians are trained to use clay bar technique that cleans without marring the surface.",
      },
      {
        question: "Should I get clay bar before waxing?",
        answer: "Yes — always. Waxing over contamination just locks the contaminants in and produces a hazy, uneven finish. Clay bar is the essential prep step for any protective coating.",
      },
    ],
    relatedSlugs: ["exterior-detail", "exterior-spray-wax", "rim-detailing"],
    ogImage: "/og/clay-bar-treatment.png",
  },
  {
    slug: "exterior-spray-wax",
    name: "Exterior Spray Wax",
    metaTitle: "Exterior Spray Wax Oahu | Paint Protection Mobile",
    metaDescription: "Mobile exterior spray wax and paint protection on Oahu. Quick-application gloss boost and protection layer — we come to you. Request a free quote today.",
    h1: "Mobile Spray Wax & Paint Protection — Oahu",
    tagline: "Quick, effective paint protection for island drivers.",
    intro: "Between the intense Hawaiian sun, salt air, and daily driving, your paint needs consistent protection. Net Automotive Detailing's mobile spray wax service applies a professional-grade protective layer that boosts gloss, repels water, and shields your clear coat from UV damage — fast, effective, and done at your location.",
    whatsIncluded: [
      "Exterior wash and dry",
      "Surface prep wipe-down",
      "Even application of premium spray wax across all painted panels",
      "Buff to a high-gloss finish",
      "Trim masking where needed",
      "Final inspection and touch-up",
    ],
    benefits: [
      { icon: "🛡️", title: "UV Barrier", description: "Spray wax creates a sacrificial layer that absorbs UV rays, protecting your clear coat underneath." },
      { icon: "💦", title: "Water Beading", description: "Professional wax causes water to bead and roll off, reducing water spots from Oahu's frequent rains." },
      { icon: "⚡", title: "Fast Application", description: "Spray wax delivers strong protection in a fraction of the time of paste wax — ideal for busy schedules." },
    ],
    faqs: [
      {
        question: "How long does spray wax protection last in Hawaii?",
        answer: "In Hawaii's harsh UV environment, spray wax typically lasts 4–8 weeks. For longer-lasting protection, ask about our clay bar treatment plus sealant combo — it holds up to 6 months.",
      },
      {
        question: "Is spray wax as good as paste wax?",
        answer: "Modern spray waxes from professional product lines are highly effective and convenient. For maximum durability, a paste wax or paint sealant outperforms spray wax. We can discuss which option fits your needs and budget.",
      },
      {
        question: "Can spray wax be applied right after washing?",
        answer: "Yes, as part of our service we wash and dry the vehicle first before applying wax. The surface must be clean and dry — applying wax over dirt creates a swirl-trapping effect.",
      },
    ],
    relatedSlugs: ["exterior-detail", "clay-bar-treatment", "rim-detailing"],
    ogImage: "/og/exterior-spray-wax.png",
  },
  {
    slug: "rim-detailing",
    name: "Rim Detailing",
    metaTitle: "Rim & Wheel Detailing Oahu | Brake Dust Removal",
    metaDescription: "Mobile rim and wheel detailing on Oahu. Deep cleaning of barrel, face, and lug nuts — brake dust removal and wheel restoration. Get a free quote today.",
    h1: "Wheel & Rim Detailing on Oahu",
    tagline: "Clean wheels make the whole car look better.",
    intro: "Brake dust is acidic and bonds to wheel finishes fast — left untreated, it pits and permanently stains your rims. Net Automotive Detailing's mobile wheel detailing service deep-cleans the barrel, face, lug nuts, and inner spokes of every wheel using professional degreasers and iron-dissolving agents designed for serious brake dust removal.",
    whatsIncluded: [
      "pH-balanced wheel cleaner application",
      "Iron-dissolving fallout remover treatment",
      "Barrel and inner spoke cleaning with detailing brushes",
      "Lug nut cleaning",
      "Tire sidewall scrubbing and dressing",
      "Wheel face polish and final wipe-down",
      "Wheel sealant application (optional add-on)",
    ],
    benefits: [
      { icon: "🔧", title: "Deep Barrel Cleaning", description: "We reach inside the barrel where brake dust accumulates most — not just the visible face." },
      { icon: "⚗️", title: "Iron Remover Chemistry", description: "Specialized chemistry dissolves bonded iron particles that scrubbing alone can't remove." },
      { icon: "✨", title: "Full Restoration Look", description: "Clean wheels transform the look of any vehicle — it's often the first thing people notice." },
    ],
    faqs: [
      {
        question: "How often should wheels be detailed in Hawaii?",
        answer: "Every 4–6 weeks for most drivers. Brake dust accumulates rapidly with daily driving, and Hawaii's salt air causes it to bond to wheel finishes faster than in drier climates. Regular cleaning prevents permanent staining.",
      },
      {
        question: "Can you remove brake dust that's been baked on for months?",
        answer: "In most cases, yes — our iron-dissolving treatment is highly effective on baked-on brake dust. Severely etched wheels may show some permanent damage, but the improvement is typically dramatic.",
      },
      {
        question: "Do you detail all wheel types — chrome, painted, alloy?",
        answer: "Yes. We identify your wheel finish and use the appropriate products for each type. Different finishes require different pH levels and approaches to avoid damage.",
      },
    ],
    relatedSlugs: ["exterior-detail", "exterior-spray-wax", "clay-bar-treatment"],
    ogImage: "/og/rim-detailing.png",
  },
  {
    slug: "headlight-restoration",
    name: "Headlight Restoration",
    metaTitle: "Headlight Restoration Oahu | Mobile Service",
    metaDescription: "Mobile headlight restoration on Oahu — sand, polish, and seal cloudy headlights for clarity and safer night driving. Book your free quote with Net Automotive Detailing.",
    h1: "Headlight Restoration Service — Oahu Mobile",
    tagline: "See clearly again — and pass your safety inspection.",
    intro: "Hawaii's relentless UV exposure oxidizes plastic headlight lenses faster than almost anywhere else in the U.S. Cloudy, yellowed headlights reduce visibility by up to 80% and can cause you to fail your Hawaii safety inspection. Net Automotive Detailing's mobile headlight restoration service sands, polishes, and UV-seals your lenses to like-new clarity — at your location.",
    whatsIncluded: [
      "Headlight assessment and masking of surrounding paint",
      "Wet sanding with progressive grits to remove oxidation",
      "Polishing with machine buffer and compound",
      "Final polish to restore optical clarity",
      "UV sealant application to protect against re-oxidation",
      "Lens inspection and test",
    ],
    benefits: [
      { icon: "👁️", title: "Restored Visibility", description: "Clear headlights dramatically improve night driving visibility — a critical safety upgrade." },
      { icon: "💰", title: "Fraction of Replacement Cost", description: "New OEM headlights cost $200–$800+. Restoration delivers clarity for a fraction of that price." },
      { icon: "🛡️", title: "UV Sealant Protection", description: "Our UV sealant slows re-oxidation — giving you months more clarity than unprotected lenses." },
    ],
    faqs: [
      {
        question: "How long does headlight restoration last?",
        answer: "With proper UV sealant, results typically last 1–2 years in Hawaii's intense sun. Without sealant, headlights can re-oxidize in 6 months. We always include UV sealing as part of our restoration process.",
      },
      {
        question: "Will restoration work on severely yellowed headlights?",
        answer: "Yes — even severely oxidized headlights can be restored significantly. Internal fogging or cracking cannot be fixed by restoration, but external oxidation (the most common issue) responds very well to our process.",
      },
      {
        question: "Is headlight restoration worth it vs. replacing the headlights?",
        answer: "In most cases, restoration is absolutely worth it. New OEM headlights are expensive, and aftermarket units often don't match the original output. Restoration brings back original clarity at a much lower cost.",
      },
    ],
    relatedSlugs: ["exterior-detail", "plastic-color-restoration", "clay-bar-treatment"],
    ogImage: "/og/headlight-restoration.png",
  },
  {
    slug: "plastic-color-restoration",
    name: "Plastic Color Restoration",
    metaTitle: "Plastic Trim Restoration Oahu | Faded Trim Fix",
    metaDescription: "Mobile plastic trim and color restoration on Oahu. Restore faded black plastic trim with UV-resistant finish — we come to you. Get a free quote from Net Automotive Detailing.",
    h1: "Trim & Plastic Color Restoration — Oahu",
    tagline: "Bring your faded trim back to showroom black.",
    intro: "Black plastic trim fades to a chalky gray faster in Hawaii's UV-intense climate than almost anywhere else. Whether it's your bumper trim, side cladding, mirror housings, or wheel arches — faded plastic makes even a clean car look old. Net Automotive Detailing's mobile plastic color restoration service restores deep, rich black to your trim using UV-resistant professional treatments.",
    whatsIncluded: [
      "Surface cleaning and degreasing of all plastic trim",
      "Light abrasive treatment to remove oxidation layer",
      "Heat gun softening (for severely faded trim, where appropriate)",
      "Application of professional plastic restorer/dye",
      "UV-resistant sealer application",
      "Final inspection to ensure even color coverage",
    ],
    benefits: [
      { icon: "⬛", title: "Deep Black Restored", description: "Proper restoration goes beyond a surface dressing — it revives the original pigment in the plastic." },
      { icon: "☀️", title: "UV Resistant Finish", description: "Our finish resists Hawaii's intense UV radiation — lasting significantly longer than generic dressings." },
      { icon: "💎", title: "Transformative Visual Impact", description: "Restored black trim makes the entire vehicle look newer — often the most noticeable cosmetic upgrade." },
    ],
    faqs: [
      {
        question: "Is this different from tire dressing or plastic shine spray?",
        answer: "Yes, significantly. Consumer plastic dressings wash off and leave a greasy look. Professional restoration uses penetrating agents and UV-resistant finishes that actually restore and protect the plastic substrate.",
      },
      {
        question: "How long does plastic restoration last?",
        answer: "With proper UV-resistant treatment, results typically last 6–12 months in Hawaii's sun. We recommend periodic reapplication as part of your regular detailing schedule.",
      },
      {
        question: "Can you restore all types of exterior plastic trim?",
        answer: "We can restore most exterior uncoated plastic trim — bumper cladding, mirror housings, door moldings, wheel arch trim, and more. Painted plastic (body-color trim) is handled differently and we'll advise on the best approach at your appointment.",
      },
    ],
    relatedSlugs: ["exterior-detail", "headlight-restoration", "clay-bar-treatment"],
    ogImage: "/og/plastic-color-restoration.png",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string): Service[] {
  const service = getServiceBySlug(slug);
  if (!service) return [];
  return service.relatedSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is Service => s !== undefined);
}
