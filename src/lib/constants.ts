// ============================================================
// Advantage Realty LLC — Single Source of Truth (Design System v2)
// ============================================================

export const BRAND = {
  name: "Advantage Realty LLC",
  tagline: "Portland Real Estate — Broker-Run, Not Corporate-Run",
  phone: "(503) 793-7520",
  email: "huluka@advantageor.com",
  address: "13100 SE Sunnyside Rd Suite B, Clackamas, OR 97015",
  languages: ["English", "Oromo", "Amharic"],
  social: {
    facebook: "https://facebook.com/advantagerealtypdx",
    linkedin: "https://linkedin.com/company/advantage-realty-llc",
  },
} as const;

export const COLORS = {
  green800: "#1D3B22",
  green700: "#2A5430",
  lime: "#C9E83A",
  limeTint: "#F0F7DC",
  orange: "#E8622A",
  orangeHover: "#D4551F",
  orangeTint: "#FDF0EB",
  blue: "#5BB5D8",
  blueSurface: "#EBF6FC",
  blueBorder: "#C4E4F2",
  bg: "#F8F6F1",
  surface: "#FFFFFF",
  surfaceAlt: "#F2F0EA",
  border: "#E0DDD6",
  t1: "#141414",
  t2: "#505050",
  t3: "#909090",
} as const;

export const NAV_LINKS = [
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Invest", href: "/invest" },
  { label: "About", href: "/about" },
] as const;

export const SERVICES = [
  {
    title: "Buyer Representation",
    slug: "buy",
    description:
      "Pre-vetted homes, expert negotiation, and a broker who answers your call — not an assistant.",
  },
  {
    title: "Seller Services",
    slug: "sell",
    description:
      "Strategic pricing backed by real data, professional marketing, and aggressive negotiation to maximize your sale price.",
  },
  {
    title: "Investment Properties",
    slug: "invest",
    description:
      "Multi-family, rentals, and value-add deals across Portland metro. We find the numbers that work.",
  },
  {
    title: "Care Home Investment",
    slug: "care-homes",
    description:
      "Oregon's care home market is booming. We handle compliance, zoning, and licensing so you can focus on returns.",
  },
  {
    title: "1031 Exchanges",
    slug: "1031",
    description:
      "Defer capital gains and build your portfolio faster. Jenni Anderson specializes in tax-deferred property exchanges.",
  },
  {
    title: "Free Property Evaluation",
    slug: "evaluation",
    description:
      "Know what your home is actually worth — not a Zestimate. A real CMA from brokers who know your neighborhood.",
  },
] as const;

export const TEAM = [
  {
    name: "Huluka Abebe",
    role: "Principal Broker / Co-Founder",
    bio: "16+ years of Portland real estate experience. Huluka is the broker who picks up the phone, walks the property with you, and negotiates like your investment is his own — because that's how he treats every deal.",
    phone: "(503) 793-7520",
    email: "huluka@advantageor.com",
    image: "/images/team/huluka-abebe.jpg",
  },
  {
    name: "Hunde Abebe",
    role: "Broker / Co-Founder",
    bio: "Detail-driven and sharp at the negotiation table. Hunde manages listing strategy and contract negotiations — clients say he goes above and beyond because settling for 'good enough' isn't how he operates.",
    phone: "(503) 449-4362",
    email: "hunde@advantageor.com",
    image: "/images/team/hunde-abebe.jpg",
  },
  {
    name: "Jenni Anderson",
    role: "Broker / 1031 Exchange Specialist",
    bio: "Native Oregonian with 10+ years in the business. Jenni specializes in 1031 tax-deferred exchanges and relocation — she knows every corner of the Portland metro because she grew up here.",
    phone: "(503) 508-8779",
    email: "jenni@advantageor.com",
    image: "/images/team/jenni-anderson.png",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Huluka and his team are very organized and have a good understanding of what a buyer\u2019s needs are in the home buying process. I\u2019m 100% satisfied with the home I purchased, and the fantastic deal Huluka helped me get.",
    author: "Tilahun S.",
    location: "Portland Metro",
    type: "Buyer" as const,
  },
  {
    quote:
      "Hunde assisted me in finding the perfect home, and I couldn\u2019t be happier with my experience dealing with him. Look no farther than Hunde if you want a real estate professional that will go above and beyond.",
    author: "Guteta",
    location: "Portland Metro",
    type: "Buyer" as const,
  },
  {
    quote:
      "You will be well served with Hunde and Huluka with your real estate needs, especially in the adult care business.",
    author: "Timothy & Tsehay Smith",
    location: "Portland Metro",
    type: "Investor" as const,
  },
  {
    quote:
      "Huluka was hands on from the beginning to the end. He is very dedicated and honest about his work.",
    author: "Bezu",
    location: "Portland Metro",
    type: "Buyer" as const,
  },
] as const;

export const MARKET_STATS = [
  {
    label: "Median Home Price — Portland Metro",
    value: "$525,000",
    source: "RMLS, Q4 2025",
  },
  {
    label: "Average Days on Market",
    value: "28",
    source: "RMLS, Q4 2025",
  },
  {
    label: "Year-Over-Year Appreciation",
    value: "+4.2%",
    source: "Zillow Home Value Index, 2025",
  },
] as const;

export const FAQ_DATA = [
  {
    question:
      "What neighborhoods in Portland do you specialize in?",
    answer:
      "We serve the entire Portland metro area with deep expertise in Clackamas, Milwaukie, Happy Valley, Oregon City, Lake Oswego, West Linn, Tigard, Beaverton, Hillsboro, Gresham, and Tualatin.",
  },
  {
    question:
      "How is buying or selling a care home different from residential real estate?",
    answer:
      "Adult care homes in Oregon are licensed businesses attached to real property. Transactions involve business valuation, license transfer coordination with the state, and understanding occupancy regulations — expertise most residential agents lack.",
  },
  {
    question:
      "Do you work with first-time home buyers in Portland?",
    answer:
      "Absolutely. We walk first-time buyers through every step — from pre-approval to closing — and connect you with down payment assistance programs available in Oregon, including OHCS and Portland Housing Bureau programs.",
  },
  {
    question:
      "How do you price my home for sale?",
    answer:
      "We prepare a complimentary Comparative Market Analysis (CMA) using recent sales, active listings, and neighborhood trends. We price strategically — not too high to sit, not too low to leave money on the table.",
  },
  {
    question:
      "What are your fees for buyer representation?",
    answer:
      "Buyer representation fees are typically covered by the seller's listing agreement. We'll explain the full fee structure transparently before you commit to anything. No surprises, ever.",
  },
  {
    question:
      "Do you speak languages other than English?",
    answer:
      "Yes. Huluka and Hunde speak Oromo and Amharic in addition to English. If you prefer to discuss your transaction in either language, they're happy to accommodate.",
  },
] as const;

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Buy a Home", href: "/buy" },
    { label: "Sell Your Home", href: "/sell" },
    { label: "Investment Properties", href: "/invest" },
    { label: "Care Home Consulting", href: "/care-home-investment" },
    { label: "Contact Us", href: "/contact" },
  ],
  services: [
    { label: "Buyer Representation", href: "/buy" },
    { label: "Seller Marketing", href: "/sell" },
    { label: "1031 Exchanges", href: "/invest" },
    { label: "Care Home Sales", href: "/care-home-investment" },
    { label: "Free Market Analysis", href: "/contact" },
  ],
} as const;

// LocalBusiness JSON-LD Schema
export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Advantage Realty LLC",
  description:
    "Family-run brokerage with 16+ years experience. Direct broker access on every deal. Also available in Oromo and Amharic.",
  url: "https://advantagerealtypdx.com",
  telephone: "+15037937520",
  address: {
    "@type": "PostalAddress",
    streetAddress: "13100 SE Sunnyside Rd Suite B",
    addressLocality: "Clackamas",
    addressRegion: "OR",
    postalCode: "97015",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.4168,
    longitude: -122.5737,
  },
  areaServed: [
    { "@type": "City", name: "Portland" },
    { "@type": "City", name: "Clackamas" },
    { "@type": "City", name: "Happy Valley" },
    { "@type": "City", name: "Milwaukie" },
    { "@type": "City", name: "Oregon City" },
    { "@type": "City", name: "Lake Oswego" },
    { "@type": "City", name: "West Linn" },
    { "@type": "City", name: "Tigard" },
    { "@type": "City", name: "Beaverton" },
    { "@type": "City", name: "Gresham" },
    { "@type": "City", name: "Tualatin" },
  ],
  knowsLanguage: ["en", "om", "am"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://facebook.com/advantagerealtypdx",
    "https://linkedin.com/company/advantage-realty-llc",
  ],
} as const;
