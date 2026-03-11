"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronDown,
  TrendingUp,
  Users,
  BarChart3,
  Clock,
  Search,
  Target,
  Camera,
  Handshake,
  PartyPopper,
} from "lucide-react";
import type { Metadata } from "next";

/* ─── Animation Variants ─── */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ─── Data ─── */

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Free Property Evaluation",
    desc: "We walk your home, analyze neighborhood comps, and deliver an honest price range — no algorithms, no guesswork.",
  },
  {
    num: "02",
    icon: Target,
    title: "Strategic Price Positioning",
    desc: "Data-driven pricing that generates urgency. We find the number that attracts the strongest offers in the shortest window.",
  },
  {
    num: "03",
    icon: Camera,
    title: "Professional Marketing",
    desc: "HD photography, virtual tours, targeted digital ads, MLS syndication, and multilingual outreach to maximize exposure.",
  },
  {
    num: "04",
    icon: Handshake,
    title: "Offer Management & Negotiation",
    desc: "Every offer, counter, and contingency handled with 16+ years of negotiation experience protecting your bottom line.",
  },
  {
    num: "05",
    icon: PartyPopper,
    title: "Close Without the Chaos",
    desc: "Full transaction management through closing day. No surprises, no delays, no loose ends.",
  },
];

const marketInsights = [
  {
    icon: TrendingUp,
    title: "Listings Have Doubled",
    body: "Portland active listings have roughly doubled since December 2025. More competition means your pricing and marketing strategy matter more than ever.",
  },
  {
    icon: Users,
    title: "Buyers Are Still Active",
    body: "Despite higher inventory, qualified buyers are actively searching. The demand is there — but they have more options to compare against.",
  },
  {
    icon: BarChart3,
    title: "Prices Are Stabilizing",
    body: "After years of rapid appreciation, Portland prices are leveling. Strategic pricing based on current comps — not last year's gains — is essential.",
  },
  {
    icon: Clock,
    title: "First-Week Performance Is Critical",
    body: "Homes that don't generate strong interest in the first 7–10 days often require price reductions. Getting it right on day one is everything.",
  },
];

const faqs = [
  {
    q: "How long does it take to sell a home in Portland right now?",
    a: "It depends on pricing and location. Well-priced homes in desirable Portland neighborhoods are going under contract in 2–4 weeks. Overpriced homes are sitting 90+ days. Our job is to make sure yours is in the first category.",
  },
  {
    q: "How do you determine what my home is worth?",
    a: "We run a broker-level comparative market analysis using recent closed sales, active competition, expired listings, and current buyer demand in your specific neighborhood. Then we walk your home in person to factor in condition, upgrades, and unique features no algorithm can see.",
  },
  {
    q: "Should I make repairs or upgrades before listing?",
    a: "Sometimes — but only if they'll actually increase your net proceeds. During your free evaluation, we'll identify which improvements have real ROI and which ones you can skip. Often a deep clean and declutter is enough.",
  },
  {
    q: "What does it cost to sell with Advantage Realty?",
    a: "Our commission structure is transparent and competitive. We explain every cost upfront during your free evaluation so you know your estimated net proceeds before you ever list. No surprises at closing.",
  },
  {
    q: "What makes Advantage Realty different from other Portland brokerages?",
    a: "16+ years in the Portland market, multilingual service, and a pricing strategy obsession. We don't just list your home — we position it to sell fast and for top dollar. Every marketing plan is custom, every price recommendation is data-backed.",
  },
];

/* ─── FAQ Accordion ─── */

function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[#E0DDD6]">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-6 text-left text-lg font-semibold text-[#141414] md:text-xl"
              aria-expanded={isOpen}
            >
              {item.q}
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-[#E8622A] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="pb-6 text-[#505050] leading-relaxed">{item.a}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Page ─── */

export default function SellPage() {
  return (
    <main>
      {/* ━━ HERO — Split Layout ━━ */}
      <section className="bg-[#FFFFFF] py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid items-center gap-12 md:grid-cols-2 md:gap-16"
          >
            {/* Left — Text */}
            <div>
              <motion.div
                variants={fadeUp}
                className="mb-5 inline-flex items-center rounded-full bg-[#F0F7DC] px-4 py-1.5 text-sm font-semibold text-[#505050]"
              >
                Portland Home Sellers
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="text-4xl font-bold leading-[1.1] tracking-tight text-[#141414] sm:text-5xl lg:text-6xl"
              >
                Sell Your Portland Home for What It&apos;s Actually Worth
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-lg text-lg leading-relaxed text-[#505050]"
              >
                Portland listings doubled since December 2025. In a market with more
                competition, the difference between selling in 30 days and sitting for 90
                comes down to one thing: pricing strategy. Get yours right from day one.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-lg bg-[#E8622A] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#D4551F]"
                >
                  Get Your Free Property Evaluation
                </a>
                <span className="text-sm text-[#505050]">
                  Broker-assessed. Data-driven. No obligation.
                </span>
              </motion.div>
            </div>

            {/* Right — Image */}
            <motion.div
              variants={scaleIn}
              className="relative aspect-[4/5] overflow-hidden rounded-[22px]"
            >
              <Image
                src="/images/paper-cutout-neighborhood.png"
                alt="Paper cut-out illustration of Portland neighborhood"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ━━ PRICING SECTION ━━ */}
      <section className="bg-[#FFFFFF] py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid items-center gap-12 md:grid-cols-2 md:gap-20"
          >
            {/* Left — Copy */}
            <div>
              <motion.h2
                variants={fadeUp}
                className="text-3xl font-bold tracking-tight text-[#141414] md:text-5xl"
              >
                In Portland&apos;s 2026 Market, Pricing Is the Entire Game
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-6 text-lg leading-relaxed text-[#505050]"
              >
                Overprice by even 3–5% and your listing stalls — losing momentum, buyer
                interest, and ultimately selling for less than it would have at the right
                price. Underprice and you leave real equity on the table.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="mt-4 leading-relaxed text-[#505050]"
              >
                Our broker-level comparative market analysis pinpoints the price that
                generates urgency and attracts the strongest offers in the shortest
                window. Every recommendation is backed by neighborhood-level sales data,
                active inventory analysis, and real buyer demand signals — not guesswork
                and not an algorithm.
              </motion.p>
            </div>

            {/* Right — Big Stat */}
            <motion.div
              variants={scaleIn}
              className="flex flex-col items-center rounded-[22px] border border-[#E0DDD6] bg-[#F8F6F1] p-12 text-center md:p-16"
            >
              <span className="text-8xl font-bold tracking-tight text-[#E8622A] md:text-9xl">
                ~$525K
              </span>
              <span className="mt-3 text-xl font-bold tracking-tight text-[#141414]">
                Portland Metro Median
              </span>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#505050]">
                The median sale price as of early 2026. Where your home falls relative to
                this number shapes everything — marketing strategy, buyer pool, and
                timeline.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ━━ 5-STEP PROCESS ━━ */}
      <section className="bg-[#F2F0EA] py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold tracking-tight text-[#141414] md:text-5xl"
            >
              From Evaluation to Closing — 5 Steps
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-lg text-[#505050]"
            >
              A clear, repeatable process designed to maximize your sale price and
              minimize your stress.
            </motion.p>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.num}
                    variants={fadeUp}
                    className="group rounded-[22px] bg-[#FFFFFF] p-6 transition hover:shadow-lg"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FDF0EB]">
                      <Icon className="h-5 w-5 text-[#E8622A]" />
                    </div>
                    <span className="mt-5 block text-4xl font-bold text-[#E0DDD6] group-hover:text-[#C9E83A] transition-colors">
                      {step.num}
                    </span>
                    <h3 className="mt-2 text-lg font-bold tracking-tight text-[#141414]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#505050]">
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━ MARKET CONTEXT — Dark Section ━━ */}
      <section className="bg-[#1D3B22] py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold tracking-tight text-white md:text-5xl"
            >
              What Portland Sellers Need to Know Right Now
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-lg text-white/50"
            >
              The market has shifted. Here&apos;s what the data says heading into spring
              2026.
            </motion.p>

            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {marketInsights.map((insight, i) => {
                const Icon = insight.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="rounded-[22px] border border-white/10 bg-white/5 p-8"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C9E83A]/15">
                        <Icon className="h-5 w-5 text-[#C9E83A]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold tracking-tight text-white">
                          {insight.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/50">
                          {insight.body}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━ TESTIMONIAL ━━ */}
      <section className="bg-[#FFFFFF] py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-[22px] border-l-4 border-[#E8622A] bg-[#F8F6F1] p-10 md:p-14"
            >
              <blockquote className="text-2xl font-medium leading-snug text-[#141414] md:text-3xl">
                &ldquo;They handled everything — pricing, staging advice, marketing,
                negotiations. We sold above asking and closed in under 30 days. Could not
                have asked for a better experience.&rdquo;
              </blockquote>
              <div className="mt-8">
                <p className="text-sm font-bold text-[#E8622A]">Bezu</p>
                <p className="text-sm text-[#505050]">Home Seller, Portland</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ━━ FAQ ━━ */}
      <section className="bg-[#F8F6F1] py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold tracking-tight text-[#141414] md:text-5xl"
            >
              Selling in Portland — Your Questions Answered
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-12 max-w-3xl rounded-[22px] bg-[#FFFFFF] p-8 md:p-10">
              <FaqAccordion items={faqs} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ━━ FINAL CTA ━━ */}
      <section id="cta" className="bg-[#FFFFFF] py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-[#141414] rounded-[22px] max-w-5xl mx-auto px-8 py-20 md:py-24 text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold tracking-tight text-white md:text-5xl"
            >
              A 15-Minute Conversation Could Be Worth Thousands
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
            >
              Get a free, broker-assessed property evaluation from a team with 16+ years
              of Portland market expertise. No pressure, no obligation — just a clear
              picture of what your home is worth and the best strategy to sell it.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white bg-transparent px-8 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#141414]"
              >
                Get Your Free Evaluation
              </a>
              <a
                href="tel:+15037937520"
                className="text-sm text-white/50 transition hover:text-white"
              >
                Or call: (503) 793-7520
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
