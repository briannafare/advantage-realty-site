"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  TrendingUp,
  Search,
  ArrowRightLeft,
  HeartPulse,
  Timer,
  ArrowRight,
  Phone,
  ChevronDown,
  MapPin,
  Quote,
} from "lucide-react";

/* ============================================================
   Metadata (exported from layout or head)
   ============================================================ */
// title: "Portland Investment Properties | Advantage Realty"
// description: "Build real estate wealth in Portland. Rental properties, portfolio growth, 1031 exchanges & care home investment. Expert guidance from brokers with 16+ years in the market."

/* ============================================================
   Animation Variants
   ============================================================ */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ============================================================
   Data
   ============================================================ */
const investmentServices = [
  {
    icon: Building2,
    title: "Residential Rental Acquisition",
    description:
      "Single-family and small multi-family properties across Clackamas, Multnomah, and Washington counties — vetted for cash flow, tenant demand, and long-term appreciation before we bring them to you.",
  },
  {
    icon: TrendingUp,
    title: "Portfolio Growth Strategy",
    description:
      "Strategic acquisition planning to scale from one property to a diversified portfolio. We model cap rates, cash-on-cash returns, and appreciation corridors for every deal.",
  },
  {
    icon: ArrowRightLeft,
    title: "1031 Tax-Deferred Exchanges",
    description:
      "Full coordination with your Qualified Intermediary, replacement property identification within the 45-day window, and IRS-compliant closings — so you keep more of what you earned.",
  },
  {
    icon: HeartPulse,
    title: "Care Home Property Investment",
    description:
      "Oregon's aging population is creating sustained demand for adult care homes. We identify licensed or licensable residential properties suited for AFH conversion with strong NOI potential.",
  },
  {
    icon: Search,
    title: "Deal Sourcing & Market Timing",
    description:
      "Off-market leads, pre-foreclosures, estate sales, and value-add opportunities sourced through our local network before they hit the MLS. Timing the market matters — we track the cycles.",
  },
];

const exchange1031Points = [
  "45-day identification window — miss it and the exchange fails",
  "180-day closing deadline with zero extensions",
  "Replacement property must be equal or greater in value",
  "Qualified Intermediary must hold funds — you cannot touch proceeds",
  "Boot (cash or debt relief) is taxable — structure matters",
];

const marketData = [
  {
    area: "Happy Valley",
    median: "$694K",
    note: "Top-rated schools drive family rental demand — vacancy near zero",
  },
  {
    area: "Oregon City",
    median: "$597K",
    note: "Historic downtown revitalization creating appreciation upside",
  },
  {
    area: "Clackamas",
    median: "$585K",
    note: "Transit corridor access keeps rental demand consistently strong",
  },
  {
    area: "Milwaukie",
    median: "$495K",
    note: "Orange Line light rail turning this into a renter magnet",
  },
  {
    area: "Portland Metro",
    median: "$510K–$549K",
    note: "Diverse sub-markets with varied entry points for new investors",
  },
];

const faqItems = [
  {
    q: "What's the minimum investment to buy a rental property in Portland?",
    a: "Most conventional investment property loans require 20-25% down. In the Portland metro, that means roughly $100K-$140K for a single-family rental. FHA house-hacking strategies (buying a duplex-fourplex and living in one unit) can reduce that to 3.5% down. We'll walk through the numbers for your specific situation.",
  },
  {
    q: "How do I know if a Portland property will actually cash flow?",
    a: "We run a full deal analysis on every property before presenting it — including projected rent (based on comparable leases, not Zestimates), vacancy rate, property management costs, insurance, taxes, maintenance reserves, and debt service. If the numbers don't work, we don't bring it to you.",
  },
  {
    q: "Is Portland still a good market for real estate investment in 2026?",
    a: "Portland's combination of population growth, limited housing supply, strong rental demand, and relatively lower price points compared to Seattle or the Bay Area creates real opportunity — especially in the suburban ring markets like Clackamas, Happy Valley, and Milwaukie where appreciation is outpacing the city center.",
  },
  {
    q: "What is a 1031 exchange and can I use one in Oregon?",
    a: "A 1031 exchange allows you to defer capital gains taxes when you sell an investment property and reinvest the proceeds into a like-kind replacement property. Yes, it works in Oregon — but the IRS rules are strict (45-day ID window, 180-day close). Jenni Anderson specializes in coordinating these transactions to protect your tax deferral.",
  },
  {
    q: "Do you help with care home property investments?",
    a: "Yes. Oregon's aging population creates sustained demand for Adult Foster Homes (AFH). We identify residential properties suited for AFH licensing — the right zoning, layout, and neighborhood — and help investors understand the NOI potential compared to traditional rentals.",
  },
];

/* ============================================================
   FAQ Accordion Item
   ============================================================ */
function FAQItem({ item, index }: { item: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="border-b border-[#E5E7EB] last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
      >
        <span className="font-semibold text-lg text-[#111827] group-hover:text-[#2563EB] transition-colors">
          {item.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#6B7280] mt-1 shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="text-[#6B7280] leading-relaxed pb-6 pr-10">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ============================================================
   Page Component
   ============================================================ */
export default function InvestPage() {
  return (
    <main>
      {/* ──────────────────────────────────────────────────────────
          HERO — Split Layout
          ────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#FFFFFF] py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
          >
            {/* Copy */}
            <div>
              <motion.div
                variants={fadeUp}
                custom={0}
                className="inline-flex items-center gap-2 bg-[#2563EB]/10 text-[#2563EB] font-semibold text-sm px-4 py-2 rounded-full mb-8"
              >
                <TrendingUp className="w-4 h-4" />
                Investment Properties
              </motion.div>
              <motion.h1
                variants={fadeUp}
                custom={1}
                className="font-bold tracking-tight text-4xl md:text-6xl lg:text-[3.5rem] text-[#111827] mb-6 leading-[1.1]"
              >
                Portland Investment Properties —{" "}
                <span className="text-[#2563EB]">
                  Smarter Deals, Real Returns
                </span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-lg md:text-xl text-[#6B7280] mb-10 max-w-xl leading-relaxed"
              >
                Most agents sell houses. We build portfolios. From your first
                rental in Clackamas to a 1031 exchange into a multi-unit
                property, you&apos;ll work with brokers who analyze cash flow,
                not just curb appeal.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
                <Link
                  href="/contact?interest=Invest"
                  className="inline-flex items-center gap-2 bg-[#84CC16] text-[#111827] font-semibold px-8 py-4 rounded-lg hover:bg-[#65A30D] transition-colors text-base"
                >
                  Schedule an Investment Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.p
                variants={fadeUp}
                custom={4}
                className="text-sm text-[#6B7280] mt-4"
              >
                Free. No obligation. Bring your numbers — we&apos;ll bring ours.
              </motion.p>
            </div>

            {/* Hero Image */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/investment-multi-unit.webp"
                alt="Portland multi-unit investment property"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/30 via-transparent to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          INVESTMENT SERVICES — 5 Cards
          ────────────────────────────────────────────────────────── */}
      <section className="bg-[#FFFFFF] py-20 md:py-32 border-t border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-[#2563EB] font-semibold tracking-widest uppercase text-sm mb-4"
            >
              What We Do Differently
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-bold tracking-tight text-3xl md:text-5xl text-[#111827] max-w-2xl"
            >
              Investment Services That Go Beyond &ldquo;Finding a Property&rdquo;
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {investmentServices.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                custom={i}
                className="group bg-[#FFFFFF] rounded-xl border-t-4 border-t-[#2563EB] border border-[#E5E7EB] p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-5">
                  <service.icon className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-xl text-[#111827] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed mb-5">
                  {service.description}
                </p>
                <Link
                  href="/contact?interest=Invest"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#84CC16] hover:text-[#65A30D] transition-colors"
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          1031 EXCHANGE — Jenni Anderson Spotlight
          ────────────────────────────────────────────────────────── */}
      <section className="bg-[#F3F4F6] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Copy */}
            <div>
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-[#2563EB] font-semibold tracking-widest uppercase text-sm mb-4"
              >
                Tax-Deferred Exchanges
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="font-bold tracking-tight text-3xl md:text-5xl text-[#111827] mb-6"
              >
                1031 Exchanges — Precision Matters
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-lg text-[#374151] leading-relaxed mb-6"
              >
                A 1031 exchange lets you defer capital gains taxes when you sell
                an investment property and reinvest in a like-kind replacement.
                But the rules are unforgiving — the IRS gives you exactly 45
                days to identify replacement properties and 180 days to close.
                Miss either deadline and the entire deferral evaporates.
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={3}
                className="text-lg text-[#374151] leading-relaxed mb-8"
              >
                Jenni Anderson has guided investors through dozens of 1031
                exchanges across the Portland metro. She coordinates directly
                with your Qualified Intermediary, pre-identifies compliant
                replacement properties before the clock starts, and ensures
                every moving piece lands on time.
              </motion.p>

              {/* Bullet Points */}
              <motion.div variants={fadeUp} custom={4} className="mb-8">
                <p className="font-semibold text-[#111827] mb-4 flex items-center gap-2">
                  <Timer className="w-5 h-5 text-[#2563EB]" />
                  Key 1031 Exchange Rules
                </p>
                <ul className="space-y-3">
                  {exchange1031Points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#374151]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} custom={5}>
                <Link
                  href="/contact?interest=1031"
                  className="inline-flex items-center gap-2 bg-[#84CC16] text-[#111827] font-semibold px-8 py-4 rounded-lg hover:bg-[#65A30D] transition-colors"
                >
                  Ask Jenni About 1031 Exchanges
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Jenni Anderson Photo + Card */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="relative"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/team/jenni-anderson.png"
                  alt="Jenni Anderson — 1031 Exchange Specialist at Advantage Realty"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "top center" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating Name Card */}
              <div className="absolute -bottom-6 left-6 right-6 bg-[#FFFFFF] rounded-xl shadow-lg p-5 border border-[#E5E7EB]">
                <p className="font-bold text-[#111827] text-lg">
                  Jenni Anderson
                </p>
                <p className="text-[#6B7280] text-sm">
                  1031 Exchange & Investment Specialist
                </p>
                <p className="text-[#2563EB] text-sm font-medium mt-1">
                  16+ years Portland market experience
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          MARKET CONTEXT — Dark Section
          ────────────────────────────────────────────────────────── */}
      <section className="bg-[#111827] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-[#93C5FD] font-semibold tracking-widest uppercase text-sm mb-4"
            >
              Local Market Intelligence
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-bold tracking-tight text-3xl md:text-5xl text-[#FFFFFF] max-w-3xl mx-auto"
            >
              Portland Investment Snapshot — Why 2026 Creates Opportunity
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
          >
            {marketData.map((item, i) => (
              <motion.div
                key={item.area}
                variants={fadeUp}
                custom={i}
                className="bg-[#1F2937] border border-[#374151] rounded-xl p-6 text-center hover:border-[#2563EB]/50 transition-colors"
              >
                <MapPin className="w-5 h-5 text-[#93C5FD] mx-auto mb-3" />
                <p className="font-bold text-3xl text-[#84CC16] mb-1">
                  {item.median}
                </p>
                <p className="font-semibold text-[#FFFFFF] text-base mb-2">
                  {item.area}
                </p>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {item.note}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mt-12 max-w-3xl mx-auto"
          >
            <motion.p
              variants={fadeUp}
              className="text-[#9CA3AF] leading-relaxed text-center"
            >
              Portland&apos;s suburban ring markets are outperforming the city
              center in both appreciation and rental yield. Limited housing
              supply, continued in-migration from higher-cost West Coast cities,
              and infrastructure investments (MAX Orange Line, Sunrise Corridor)
              are creating a window for investors who move before pricing catches
              up to demand.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-center text-xs text-[#6B7280] mt-6"
            >
              Median prices sourced from RMLS / Redfin, Q4 2025. Market
              conditions change — contact us for current data.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          TESTIMONIAL
          ────────────────────────────────────────────────────────── */}
      <section className="bg-[#F9FAFB] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center"
          >
            <motion.div
              variants={fadeUp}
              className="w-14 h-14 mx-auto mb-8 rounded-full bg-[#2563EB]/10 flex items-center justify-center"
            >
              <Quote className="w-6 h-6 text-[#2563EB]" />
            </motion.div>
            <motion.blockquote
              variants={fadeUp}
              className="text-2xl md:text-3xl text-[#111827] leading-snug mb-8 font-medium italic"
            >
              &ldquo;[CLIENT TO PROVIDE: Google Business Profile investor
              testimonial quote]&rdquo;
            </motion.blockquote>
            <motion.div variants={fadeUp}>
              <p className="font-semibold text-[#111827]">
                [CLIENT TO PROVIDE: Reviewer name]
              </p>
              <p className="text-sm text-[#6B7280]">
                [CLIENT TO PROVIDE: Transaction type & area]
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          FAQ — Accordion
          ────────────────────────────────────────────────────────── */}
      <section className="bg-[#FFFFFF] py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="text-[#2563EB] font-semibold tracking-widest uppercase text-sm mb-4"
            >
              Common Questions
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-bold tracking-tight text-3xl md:text-4xl text-[#111827]"
            >
              Portland Investment FAQ
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {faqItems.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          FINAL CTA — Blue Gradient
          ────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 md:px-8 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="font-bold tracking-tight text-3xl md:text-5xl text-[#FFFFFF] mb-6"
            >
              Smart Investors Start With Smart Conversations
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-[#FFFFFF]/80 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Schedule a no-obligation investment strategy call. We&apos;ll walk
              through your goals, timeline, and the Portland-area markets best
              positioned for returns in 2026.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact?interest=Invest"
                className="inline-flex items-center gap-2 bg-[#84CC16] text-[#111827] font-semibold px-8 py-4 rounded-lg hover:bg-[#65A30D] transition-colors text-base"
              >
                Schedule Investment Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+15037937520"
                className="inline-flex items-center gap-2 text-[#FFFFFF] font-semibold hover:text-[#D9F99D] transition-colors"
              >
                <Phone className="w-4 h-4" />
                (503) 793-7520
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
