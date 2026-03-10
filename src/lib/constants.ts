// ============================================================
// Advantage Realty LLC — Single Source of Truth
// ============================================================

export const BRAND = {
  name: "Advantage Realty LLC",
  tagline: "Portland Real Estate — Rooted in Community, Driven by Results",
  phone: "(503) 793-7520",
  email: "info@advantagerealtypdx.com",
  address: "13100 SE Sunnyside Rd Suite B, Clackamas, OR 97015",
  languages: ["English", "Oromo", "Amharic"],
  social: {
    facebook: "https://facebook.com/advantagerealtypdx",
    linkedin: "https://linkedin.com/company/advantage-realty-llc",
  },
} as const;

export const COLORS = {
  primary: "#0A1628",
  secondary: "#2B7CB5",
  accent: "#D4A853",
  accentHover: "#C49A48",
  background: "#FEFCF8",
  surface: "#F5F0E8",
  surfaceAlt: "#0A1628",
  foreground: "#1A1A2E",
  muted: "#6B7280",
  border: "#E8E2D8",
} as const;

export const NAV_LINKS = [
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Invest", href: "/invest" },
  { label: "Care Homes", href: "/care-home-investment" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    title: "Buyer Representation",
    slug: "buy",
    description:
      "From first showing to final walkthrough, we guide you through every step of buying a home in the Portland metro area.",
  },
  {
    title: "Seller Services",
    slug: "sell",
    description:
      "Strategic pricing, professional staging guidance, and aggressive marketing to maximize your home's sale price.",
  },
  {
    title: "Investment Properties",
    slug: "invest",
    description:
      "Identify high-yield rental properties, multi-family opportunities, and value-add investments across Clackamas, Multnomah, and Washington counties.",
  },
  {
    title: "Adult Care Home Consulting",
    slug: "care-homes",
    description:
      "Specialized guidance for purchasing or selling licensed adult care homes in Oregon — a niche market requiring deep local knowledge.",
  },
  {
    title: "Relocation Assistance",
    slug: "relocation",
    description:
      "Moving to Portland from out of state? We connect you with neighborhoods, schools, and communities that match your lifestyle.",
  },
  {
    title: "Market Analysis",
    slug: "market-analysis",
    description:
      "Complimentary CMA reports so you know exactly what your home is worth in today's market — no obligation, no pressure.",
  },
] as const;

export const TEAM = [
  {
    name: "Huluka Abebe",
    role: "Principal Broker / Co-Founder",
    bio: "16+ years of Portland real estate experience. Specializes in buyer representation, market analysis, and care home property acquisitions.",
    image: "/images/team/huluka-abebe.jpg",
  },
  {
    name: "Hunde Abebe",
    role: "Broker / Co-Founder",
    bio: "Sharp negotiation skills and detail-oriented approach. Handles listing strategy, contract negotiation, and goes above and beyond for every client.",
    image: "/images/team/hunde-abebe.jpg",
  },
  {
    name: "Jenni Anderson",
    role: "Broker / 1031 Exchange Specialist",
    bio: "Native Oregonian with 10+ years experience. Specializes in 1031 tax-deferred property exchanges and relocation assistance.",
    image: "/images/team/jenni-anderson.jpg",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: "Huluka and his team are very organized and have a good understanding of what a buyer\u2019s needs are in the home buying process. I\u2019m 100% satisfied with the home I purchased, and the fantastic deal Huluka helped me get.",
    author: "Tilahun S.",
    location: "Portland Metro",
    type: "Buyer" as const,
  },
  {
    quote: "Hunde assisted me in finding the perfect home, and I couldn\u2019t be happier with my experience dealing with him. Look no farther than Hunde if you want a real estate professional that will go above and beyond.",
    author: "Guteta",
    location: "Portland Metro",
    type: "Buyer" as const,
  },
  {
    quote: "You will be well served with Hunde and Huluka with your real estate needs, especially in the adult care business.",
    author: "Timothy & Tsehay Smith",
    location: "Portland Metro",
    type: "Investor" as const,
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
  {
    label: "Active Listings — Clackamas County",
    value: "[CLIENT TO PROVIDE: current stat]",
    source: "[CLIENT TO PROVIDE: source]",
  },
] as const;

export const FAQ_DATA = [
  {
    question:
      "What neighborhoods in Portland do you specialize in?",
    answer:
      "We serve the entire Portland metro area with deep expertise in Clackamas, Milwaukie, Happy Valley, Oregon City, and Southeast Portland. Our multilingual team also supports the East African community across the metro region.",
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
      "What languages does your team speak?",
    answer:
      "Our team is fluent in English, Oromo, and Amharic. We believe every client deserves to navigate one of the biggest financial decisions of their life in the language they're most comfortable with.",
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
] as const;

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Buy a Home", href: "/buy" },
    { label: "Sell Your Home", href: "/sell" },
    { label: "Investment Properties", href: "/invest" },
    { label: "Care Home Consulting", href: "/care-home-investment" },
    { label: "About Our Team", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],
  services: [
    { label: "Buyer Representation", href: "/buy" },
    { label: "Seller Marketing", href: "/sell" },
    { label: "Market Analysis", href: "/contact" },
    { label: "Relocation Help", href: "/contact" },
    { label: "Care Home Sales", href: "/care-home-investment" },
  ],
} as const;

// LocalBusiness JSON-LD Schema
export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Advantage Realty LLC",
  description:
    "Portland-area real estate brokerage specializing in residential sales, investment properties, and adult care home consulting. Multilingual team fluent in English, Oromo, and Amharic.",
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
