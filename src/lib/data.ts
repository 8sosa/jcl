export type Collection = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  tier: string;
  tagline: string;
  description: string;
  material: string;
  details: string[];
  colorways: string[];
  bgClass: string;
  accentColor: string;
  fromPrice: number;
  featured: boolean;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  collection: string;
  collectionSlug: string;
  category: string;
  material: string;
  description: string;
  sizes: string[];
  prices: Record<string, number>;
  colorways: string[];
  bgClass: string;
  badge?: string;
  features: string[];
};

export const COLLECTIONS: Collection[] = [
  {
    id: "lagos",
    slug: "lagos",
    name: "The Lagos Collection",
    subtitle: "Entry Luxury",
    tier: "Collection One",
    tagline: "Cool to the touch. Built for Nigeria's heat.",
    description:
      "400-thread-count long-staple Egyptian cotton percale. The quintessential John Collins product — refined, breathable, and built to outlast trends. Our best-seller from week one.",
    material: "400TC Long-Staple Egyptian Cotton Percale",
    details: [
      "400 thread count per square inch",
      "Long-staple Egyptian cotton",
      "Percale weave — cool, crisp hand-feel",
      "OEKO-TEX Standard 100 certified",
      "Finished in certified Portuguese mills",
      "5-year craftsmanship guarantee",
    ],
    colorways: ["White Pearl", "Ivory Mist", "Sage Morning", "Lagos Rust"],
    bgClass: "bg-lagos",
    accentColor: "#E8DDD0",
    fromPrice: 85000,
    featured: true,
  },
  {
    id: "abuja",
    slug: "abuja",
    name: "The Abuja Collection",
    subtitle: "Premium",
    tier: "Collection Two",
    tagline: "Quiet authority. Perfect drape.",
    description:
      "Sateen-woven Egyptian cotton with a subtle sheen and silken hand-feel. Our most presidential offering — favoured by hotel partners and the Maitama set. Available in blush, forest green, and deep pewter.",
    material: "Egyptian Cotton Sateen, 500TC",
    details: [
      "500 thread count sateen weave",
      "Long-staple Egyptian cotton",
      "Sateen weave — subtle sheen, silken feel",
      "OEKO-TEX Standard 100 certified",
      "Finished in certified Italian mills",
      "5-year craftsmanship guarantee",
    ],
    colorways: ["Blush", "Forest Green", "Deep Pewter", "Midnight Slate"],
    bgClass: "bg-abuja",
    accentColor: "#BEC3CB",
    fromPrice: 120000,
    featured: true,
  },
  {
    id: "ile",
    slug: "ile",
    name: "The Ile Collection",
    subtitle: "Artisan",
    tier: "Collection Three",
    tagline: "Relaxed. Breathable. Beautifully textured.",
    description:
      "Ile — Yoruba for home. Premium stonewashed Belgian flax linen, cultivated in the Flemish fields of Belgium. Our most sustainable range. Colours inspired by Nigerian earth tones: terracotta, harmattan chalk, ochre, and natural.",
    material: "Stonewashed Belgian Flax Linen",
    details: [
      "100% Belgian flax linen",
      "Flemish field cultivation",
      "Stonewashed for lived-in softness",
      "OEKO-TEX Standard 100 certified",
      "Plastic-free packaging",
      "5-year craftsmanship guarantee",
    ],
    colorways: ["Terracotta", "Harmattan Chalk", "Ochre", "Natural Flax"],
    bgClass: "bg-ile",
    accentColor: "#C4A882",
    fromPrice: 150000,
    featured: true,
  },
  {
    id: "aso",
    slug: "aso",
    name: "The Aso Collection",
    subtitle: "Pinnacle",
    tier: "Collection Four",
    tagline: "A statement of absolute luxury.",
    description:
      "Aso — cloth, the most important thing. Our pinnacle offering: 60% Grade 6A Mulberry silk, 40% Supima cotton. Temperature-regulating, hypoallergenic, extraordinarily fine. Named after the fabric that marks life's most significant moments in Nigerian culture.",
    material: "60% Grade 6A Mulberry Silk, 40% Supima Cotton",
    details: [
      "60% Grade 6A Mulberry silk",
      "40% Supima long-staple cotton",
      "Temperature-regulating properties",
      "Hypoallergenic composition",
      "OEKO-TEX Standard 100 certified",
      "5-year craftsmanship guarantee",
    ],
    colorways: ["Champagne", "Ivory Gold", "Blush Rose", "Midnight Plum"],
    bgClass: "bg-aso",
    accentColor: "#C9A96E",
    fromPrice: 280000,
    featured: true,
  },
];

export const PRODUCTS: Product[] = [
  // Lagos Collection
  {
    id: "lagos-duvet-king",
    slug: "lagos-duvet-cover-king",
    name: "Lagos Duvet Cover",
    collection: "The Lagos Collection",
    collectionSlug: "lagos",
    category: "Duvet Cover",
    material: "400TC Long-Staple Egyptian Cotton Percale",
    description:
      "Our signature Lagos duvet cover — 400-thread-count Egyptian cotton percale that is cool to the touch and built for Nigeria's climate. Refined, breathable, and built to outlast trends.",
    sizes: ["Single", "Double", "King", "Super King"],
    prices: { Single: 62000, Double: 75000, King: 85000, "Super King": 95000 },
    colorways: ["White Pearl", "Ivory Mist", "Sage Morning", "Lagos Rust"],
    bgClass: "bg-lagos",
    badge: "Best Seller",
    features: [
      "400TC Egyptian cotton percale",
      "Crisp, cool hand-feel",
      "Hidden button closure",
      "Generous corner ties",
      "Machine washable 40°C",
    ],
  },
  {
    id: "lagos-sheet-king",
    slug: "lagos-fitted-sheet-king",
    name: "Lagos Fitted Sheet",
    collection: "The Lagos Collection",
    collectionSlug: "lagos",
    category: "Fitted Sheet",
    material: "400TC Long-Staple Egyptian Cotton Percale",
    description:
      "A fitted sheet that stays in place. Deep-pocket design with 40cm walls fits even the most generously sprung Nigerian mattresses. The ideal companion to the Lagos Duvet Cover.",
    sizes: ["Single", "Double", "King", "Super King"],
    prices: { Single: 38000, Double: 45000, King: 52000, "Super King": 58000 },
    colorways: ["White Pearl", "Ivory Mist", "Sage Morning", "Lagos Rust"],
    bgClass: "bg-lagos",
    features: [
      "400TC Egyptian cotton percale",
      "40cm deep pocket walls",
      "Four-way stretch corner elastic",
      "Machine washable 40°C",
    ],
  },
  {
    id: "lagos-pillowcase-pair",
    slug: "lagos-pillowcase-pair",
    name: "Lagos Pillowcase Pair",
    collection: "The Lagos Collection",
    collectionSlug: "lagos",
    category: "Pillowcases",
    material: "400TC Long-Staple Egyptian Cotton Percale",
    description:
      "Two pillowcases in our signature Lagos percale. Oxford or housewife style. The detail that elevates the whole bed.",
    sizes: ["Standard", "King"],
    prices: { Standard: 28000, King: 32000 },
    colorways: ["White Pearl", "Ivory Mist", "Sage Morning", "Lagos Rust"],
    bgClass: "bg-lagos",
    features: [
      "400TC Egyptian cotton percale",
      "Oxford or housewife style",
      "Neat envelope closure",
      "Machine washable 40°C",
    ],
  },
  {
    id: "lagos-bed-set-king",
    slug: "lagos-complete-bed-set",
    name: "Lagos Complete Bed Set",
    collection: "The Lagos Collection",
    collectionSlug: "lagos",
    category: "Bed Set",
    material: "400TC Long-Staple Egyptian Cotton Percale",
    description:
      "Everything you need for the perfect Lagos bed. One duvet cover, one fitted sheet, two pillowcases — gift-wrapped in our signature Lagos box. Best value.",
    sizes: ["Double", "King", "Super King"],
    prices: { Double: 140000, King: 160000, "Super King": 178000 },
    colorways: ["White Pearl", "Ivory Mist", "Sage Morning", "Lagos Rust"],
    bgClass: "bg-lagos",
    badge: "Best Value",
    features: [
      "Duvet cover + fitted sheet + 2 pillowcases",
      "Gift-boxed in our signature packaging",
      "Monogramming available",
      "Complimentary gift note",
    ],
  },
  // Abuja Collection
  {
    id: "abuja-duvet-king",
    slug: "abuja-duvet-cover-king",
    name: "Abuja Duvet Cover",
    collection: "The Abuja Collection",
    collectionSlug: "abuja",
    category: "Duvet Cover",
    material: "Egyptian Cotton Sateen, 500TC",
    description:
      "Sateen-woven Egyptian cotton with a subtle sheen and silken hand-feel. Our most presidential offering — quiet authority, perfect drape, favoured by hotel partners and the Maitama set.",
    sizes: ["Single", "Double", "King", "Super King"],
    prices: { Single: 95000, Double: 118000, King: 140000, "Super King": 158000 },
    colorways: ["Blush", "Forest Green", "Deep Pewter", "Midnight Slate"],
    bgClass: "bg-abuja",
    features: [
      "500TC Egyptian cotton sateen",
      "Silken sheen, weighty drape",
      "Hidden button closure",
      "Machine washable 40°C",
    ],
  },
  {
    id: "abuja-bed-set-king",
    slug: "abuja-complete-bed-set",
    name: "Abuja Complete Bed Set",
    collection: "The Abuja Collection",
    collectionSlug: "abuja",
    category: "Bed Set",
    material: "Egyptian Cotton Sateen, 500TC",
    description:
      "The complete Abuja bed — duvet cover, fitted sheet, two pillowcases in our premium sateen weave. Gift-wrapped in the signature John Collins box.",
    sizes: ["Double", "King", "Super King"],
    prices: { Double: 218000, King: 245000, "Super King": 272000 },
    colorways: ["Blush", "Forest Green", "Deep Pewter", "Midnight Slate"],
    bgClass: "bg-abuja",
    badge: "Best Value",
    features: [
      "Duvet cover + fitted sheet + 2 pillowcases",
      "500TC Egyptian cotton sateen",
      "Gift-boxed presentation",
      "Monogramming available",
    ],
  },
  // Ile Collection
  {
    id: "ile-duvet-king",
    slug: "ile-duvet-cover",
    name: "Ile Duvet Cover",
    collection: "The Ile Collection",
    collectionSlug: "ile",
    category: "Duvet Cover",
    material: "Stonewashed Belgian Flax Linen",
    description:
      "Belgian flax linen, stonewashed for that effortlessly lived-in texture. Breathable, sustainable, and beautifully imperfect. Colours inspired by Nigerian earth tones.",
    sizes: ["Single", "Double", "King", "Super King"],
    prices: { Single: 112000, Double: 135000, King: 158000, "Super King": 178000 },
    colorways: ["Terracotta", "Harmattan Chalk", "Ochre", "Natural Flax"],
    bgClass: "bg-ile",
    features: [
      "100% Belgian flax linen",
      "Stonewashed finish",
      "Breathable, temperature-regulating",
      "Machine washable 40°C",
      "Softens with every wash",
    ],
  },
  {
    id: "ile-bed-set-king",
    slug: "ile-complete-bed-set",
    name: "Ile Complete Bed Set",
    collection: "The Ile Collection",
    collectionSlug: "ile",
    category: "Bed Set",
    material: "Stonewashed Belgian Flax Linen",
    description:
      "The complete Ile bed. Belgian linen duvet cover, fitted sheet, two pillowcases. The most sustainable choice in our range. Available in four earth-inspired Nigerian tones.",
    sizes: ["Double", "King", "Super King"],
    prices: { Double: 268000, King: 295000, "Super King": 328000 },
    colorways: ["Terracotta", "Harmattan Chalk", "Ochre", "Natural Flax"],
    bgClass: "bg-ile",
    features: [
      "Duvet cover + fitted sheet + 2 pillowcases",
      "Stonewashed Belgian flax linen",
      "Plastic-free packaging",
      "Gift-boxed presentation",
    ],
  },
  // Aso Collection
  {
    id: "aso-duvet-king",
    slug: "aso-duvet-cover",
    name: "Aso Duvet Cover",
    collection: "The Aso Collection",
    collectionSlug: "aso",
    category: "Duvet Cover",
    material: "60% Grade 6A Mulberry Silk, 40% Supima Cotton",
    description:
      "Our pinnacle piece. 60% Grade 6A Mulberry silk, 40% Supima cotton. Temperature-regulating, hypoallergenic, extraordinarily fine. Named after the fabric that marks life's most significant moments in Nigerian culture.",
    sizes: ["Single", "Double", "King", "Super King"],
    prices: { Single: 210000, Double: 248000, King: 280000, "Super King": 320000 },
    colorways: ["Champagne", "Ivory Gold", "Blush Rose", "Midnight Plum"],
    bgClass: "bg-aso",
    badge: "Pinnacle",
    features: [
      "60% Grade 6A Mulberry silk",
      "40% Supima long-staple cotton",
      "Temperature-regulating",
      "Hypoallergenic",
      "Specialist dry-clean recommended",
    ],
  },
  {
    id: "aso-bed-set-king",
    slug: "aso-complete-bed-set",
    name: "Aso Complete Bed Set",
    collection: "The Aso Collection",
    collectionSlug: "aso",
    category: "Bed Set",
    material: "60% Grade 6A Mulberry Silk, 40% Supima Cotton",
    description:
      "The finest bed in Africa. The complete Aso — silk-cotton duvet cover, fitted sheet, two pillowcases. Gift-wrapped in our premium signature box. The ultimate John Collins statement.",
    sizes: ["Double", "King", "Super King"],
    prices: { Double: 438000, King: 490000, "Super King": 545000 },
    colorways: ["Champagne", "Ivory Gold", "Blush Rose", "Midnight Plum"],
    bgClass: "bg-aso",
    badge: "Ultimate",
    features: [
      "Duvet cover + fitted sheet + 2 pillowcases",
      "60% Grade 6A Mulberry silk",
      "Signature luxury box packaging",
      "Complimentary monogramming",
      "White glove delivery",
    ],
  },
  // Gift Sets
  {
    id: "gift-set-lagos",
    slug: "gift-set-lagos",
    name: "Lagos Gift Set",
    collection: "The Lagos Collection",
    collectionSlug: "lagos",
    category: "Gift Set",
    material: "400TC Egyptian Cotton Percale",
    description:
      "The perfect introduction to John Collins. One duvet cover and pillowcase pair in our signature Lagos percale, presented in our ribbon-tied signature box with a handwritten card.",
    sizes: ["Standard", "King"],
    prices: { Standard: 82000, King: 95000 },
    colorways: ["White Pearl", "Ivory Mist", "Lagos Rust"],
    bgClass: "bg-lagos",
    badge: "Gift",
    features: [
      "Duvet cover + 2 pillowcases",
      "Signature ribbon-tied gift box",
      "Handwritten gift note included",
      "Monogramming available",
      "Corporate accounts available",
    ],
  },
  {
    id: "gift-set-aso",
    slug: "gift-set-aso",
    name: "Aso Curated Gift Set",
    collection: "The Aso Collection",
    collectionSlug: "aso",
    category: "Gift Set",
    material: "60% Grade 6A Mulberry Silk, 40% Supima Cotton",
    description:
      "The ultimate John Collins gift. A curated Aso gift set — pillowcase pair and silk-cotton eye mask — presented in our most beautiful gift packaging. For the wedding that deserves the finest.",
    sizes: ["Standard", "King"],
    prices: { Standard: 295000, King: 320000 },
    colorways: ["Champagne", "Ivory Gold", "Blush Rose"],
    bgClass: "bg-aso",
    badge: "Ultimate Gift",
    features: [
      "2 Aso pillowcases + silk eye mask",
      "Premium signature gift box",
      "Handwritten note on JCL card",
      "Complimentary monogramming",
      "Available for corporate orders",
    ],
  },
];

export const formatPrice = (price: number, currency: string = "NGN"): string => {
  if (currency === "NGN") {
    return `₦${price.toLocaleString()}`;
  } else if (currency === "GBP") {
    const gbp = Math.round(price / 2000);
    return `£${gbp.toLocaleString()}`;
  } else {
    const usd = Math.round(price / 1600);
    return `$${usd.toLocaleString()}`;
  }
};

export const CURRENCIES = ["NGN", "GBP", "USD"] as const;
export type Currency = (typeof CURRENCIES)[number];

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  NGN: "₦",
  GBP: "£",
  USD: "$",
};
