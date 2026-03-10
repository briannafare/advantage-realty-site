"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  TrendingUp,
  Search,
  Users,
  ArrowRightLeft,
  Phone,
  ArrowRight,
} from "lucide-react";

/* ============================================================
   Animation Variants
   ============================================================ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ============================================================
   Data
   ============================================================ */
const investmentServices = [
  {
    icon: Building2,
    title: "Residential Rentals",
    description:
      "Single-family and small multi-family properties across Clackamas, Multnomah, and Washington counties — vetted for cash flow and long-term appreciation.",
  },
  {
    icon: TrendingUp,
    title: "Portfolio Growth",
    description:
      "Strategic acquisition planning to scale from one property to a diversified portfolio. We model cap rates, COC returns, and appreciation corridors for every deal.",
  },
  {
    icon: Search,
    title: "Deal Finding",
    description:
      "Off-market leads, pre-foreclosures, estate sales, and value-add opportunities sourced through our local network before they hit the MLS.",
  },
  {
    icon: Users,
    title: "Tenant Placement",
    description:
      "Coordinated tenant screening and placement partnerships so your investment is cash-flowing from day one — not sitting vacant after close.",
  },
  {
    icon: ArrowRightLeft,
    title: "1031 Exchange",
    description:
      "Tax-deferred exchange guidance from identification to closing. We coordinate timelines with your QI and ensure replacement properties meet IRS requirements.",
  },
];

const marketData = [
  {
    area: "Happy Valley",
    median: "$694K",
    note: "Top-rated schools, family demand keeps vacancy near zero",
  },
  {
    area: "Oregon City",
    median: "$597K",
    note: "Historic downtown revitalization driving appreciation",
  },
  {
    area: "Clackamas",
    median: "$585K",
    note: "Strong rental demand from transit corridor access",
  },
  {
    area: "Portland Metro",
    median: "$510K–$549K",
    note: "Diverse sub-markets with varied entry points for investors",
  },
];

/* ============================================================
   Page Component
   ============================================================ */
export default function InvestPage() {
  return (
    <main>
      {/* ──────────────────────────────────────────────────────────
          SECTION 1 — Hero
          ────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A1628] py-20 md:py-32 overflow-hidden">
        <div className="grain-overlay" />
        <div className="habesha-pattern absolute inset-0 opacity-40" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-[#D4A853] font-heading font-semibold tracking-widest uppercase text-sm mb-6"
            >
              Investment Properties
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-heading font-bold tracking-tight text-5xl md:text-7xl text-[#F5F0E8] mb-6"
            >
              Portland Investment Properties —{" "}
              <span className="text-gradient-gold">
                Build Wealth Through Real Estate
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="font-body text-lg md:text-xl text-[#F5F0E8]/70 mb-10 max-w-2xl"
            >
              Whether you&apos;re acquiring your first rental or scaling a
              portfolio across the Portland metro, Advantage Realty finds
              cash-flowing deals others miss — and structures every transaction
              to protect your upside.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <Link
                href="/contact?interest=Invest"
                className="inline-flex items-center gap-2 bg-[#D4A853] text-[#0A1628] font-heading font-semibold px-8 py-4 rounded-lg hover:bg-[#C49A48] transition-colors"
              >
                Explore Investment Opportunities
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+15037937520"
                className="inline-flex items-center gap-2 border border-[#F5F0E8]/20 text-[#F5F0E8] font-heading font-semibold px-8 py-4 rounded-lg hover:border-[#D4A853]/50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (503) 793-7520
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 2 — Investment Services
          ────────────────────────────────────────────────────────── */}
      <section className="bg-[#FEFCF8] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-[#D4A853] font-heading font-semibold tracking-widest uppercase text-sm mb-4"
            >
              What We Do for Investors
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading font-bold tracking-tight text-3xl md:text-5xl text-[#0A1628]"
            >
              Full-Service Investment Brokerage
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {investmentServices.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                custom={i}
                className="group bg-[#F5F0E8] rounded-xl border border-[#E8E2D8] p-8 hover:border-[#D4A853]/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0A1628] flex items-center justify-center mb-5">
                  <service.icon className="w-5 h-5 text-[#D4A853]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#0A1628] mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-[#6B7280] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 3 — 1031 Exchange
          ────────────────────────────────────────────────────────── */}
      <section className="bg-[#FEFCF8] py-20 md:py-32 border-t border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Copy */}
            <div>
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-[#D4A853] font-heading font-semibold tracking-widest uppercase text-sm mb-4"
              >
                Tax-Deferred Exchanges
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="font-heading font-bold tracking-tight text-3xl md:text-5xl text-[#0A1628] mb-6"
              >
                1031 Exchanges — Keep Your Capital Working
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="font-body text-lg text-[#6B7280] leading-relaxed mb-6"
              >
                A 1031 exchange lets you defer capital gains taxes when you sell
                an investment property and reinvest in a like-kind replacement —
                but the 45-day identification window and 180-day closing deadline
                leave zero room for error.
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={3}
                className="font-body text-lg text-[#6B7280] leading-relaxed mb-8"
              >
                Jenni Anderson coordinates directly with your Qualified
                Intermediary, identifies compliant replacement properties before
                the clock starts, and ensures every transaction meets IRS
                requirements — so you keep more of what you&apos;ve earned.
              </motion.p>
              <motion.div variants={fadeUp} custom={4}>
                <Link
                  href="/contact?interest=1031"
                  className="inline-flex items-center gap-2 bg-[#D4A853] text-[#0A1628] font-heading font-semibold px-8 py-4 rounded-lg hover:bg-[#C49A48] transition-colors"
                >
                  Ask Jenni About 1031 Exchanges
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Photo */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#F5F0E8] border border-[#E8E2D8]"
            >
              <Image
                src="/images/team/jenni-anderson.jpg"
                alt="Jenni Anderson — 1031 Exchange Specialist at Advantage Realty"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0A1628]/80 to-transparent p-6">
                <p className="font-heading font-bold text-[#F5F0E8] text-lg">
                  Jenni Anderson
                </p>
                <p className="font-body text-[#F5F0E8]/70 text-sm">
                  1031 Exchange &amp; Investment Specialist
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 4 — Market Data
          ────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A1628] py-20 md:py-32 overflow-hidden">
        <div className="grain-overlay" />
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-[#D4A853] font-heading font-semibold tracking-widest uppercase text-sm mb-4"
            >
              Local Market Intelligence
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading font-bold tracking-tight text-3xl md:text-5xl text-[#F5F0E8]"
            >
              Clackamas County Investment Snapshot — 2026
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {marketData.map((item, i) => (
              <motion.div
                key={item.area}
                variants={fadeUp}
                custom={i}
                className="bg-[#F5F0E8]/5 border border-[#F5F0E8]/10 rounded-xl p-8 text-center hover:border-[#D4A853]/30 transition-colors"
              >
                <p className="font-heading font-bold text-4xl md:text-5xl text-[#D4A853] mb-2">
                  {item.median}
                </p>
                <p className="font-heading font-semibold text-[#F5F0E8] text-lg mb-3">
                  {item.area}
                </p>
                <p className="font-body text-sm text-[#F5F0E8]/50 leading-relaxed">
                  {item.note}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center font-body text-xs text-[#F5F0E8]/30 mt-10"
          >
            Median prices sourced from RMLS / Redfin, Q4 2025. Market
            conditions change — contact us for current data.
          </motion.p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 5 — Testimonial
          ────────────────────────────────────────────────────────── */}
      <section className="bg-[#FEFCF8] py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-5 md:px-8 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUp}
              className="w-12 h-12 mx-auto mb-8 rounded-full bg-[#D4A853]/10 flex items-center justify-center"
            >
              <span className="font-accent text-[#D4A853] text-2xl">&ldquo;</span>
            </motion.div>
            <motion.blockquote
              variants={fadeUp}
              className="font-accent text-2xl md:text-4xl text-[#0A1628] leading-snug mb-8"
            >
              [CLIENT TO PROVIDE: Google Business Profile investor testimonial
              quote]
            </motion.blockquote>
            <motion.div variants={fadeUp}>
              <p className="font-heading font-semibold text-[#0A1628]">
                [CLIENT TO PROVIDE: Reviewer name]
              </p>
              <p className="font-body text-sm text-[#6B7280]">
                [CLIENT TO PROVIDE: Transaction type &amp; area]
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 6 — CTA
          ────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A1628] py-20 md:py-32 overflow-hidden">
        <div className="grain-overlay" />
        <div className="habesha-pattern absolute inset-0 opacity-30" />
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="font-heading font-bold tracking-tight text-3xl md:text-5xl text-[#F5F0E8] mb-6"
            >
              Your Next Investment Property Is Waiting
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-body text-lg text-[#F5F0E8]/70 mb-10 max-w-2xl mx-auto"
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
                className="inline-flex items-center gap-2 bg-[#D4A853] text-[#0A1628] font-heading font-semibold px-8 py-4 rounded-lg hover:bg-[#C49A48] transition-colors"
              >
                Schedule Investment Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+15037937520"
                className="inline-flex items-center gap-2 text-[#F5F0E8] font-heading font-semibold hover:text-[#D4A853] transition-colors"
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
