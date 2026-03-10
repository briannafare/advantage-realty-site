"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── Data ─── */

const steps = [
  {
    num: "01",
    title: "Free Evaluation",
    desc: "We analyze your home, neighborhood comps, and current market conditions to give you an honest price range.",
  },
  {
    num: "02",
    title: "Strategic Pricing",
    desc: "Data-driven pricing that attracts qualified buyers fast — no overpricing that stales, no underpricing that leaves money behind.",
  },
  {
    num: "03",
    title: "Professional Marketing",
    desc: "HD photography, virtual tours, targeted digital ads, MLS syndication, and multilingual outreach to maximize exposure.",
  },
  {
    num: "04",
    title: "Expert Negotiation",
    desc: "We handle every offer, counter, and contingency — protecting your bottom line at each step.",
  },
  {
    num: "05",
    title: "Close with Confidence",
    desc: "Full transaction management through closing day. No surprises, no delays, no loose ends.",
  },
];

const marketInsights = [
  {
    title: "Median Home Price Rising",
    body: "Portland metro median sale price is trending upward year-over-year, signaling strong equity positions for current homeowners.",
  },
  {
    title: "Low Inventory = Seller Leverage",
    body: "With only 4.3 months of available inventory, Portland remains a market where well-priced homes attract multiple offers.",
  },
  {
    title: "Days on Market Shrinking",
    body: "Competitively priced homes in desirable Portland neighborhoods are going under contract faster than the metro average.",
  },
  {
    title: "Buyer Demand Remains Strong",
    body: "Relocation interest in Portland continues to grow, with remote workers and out-of-state buyers expanding the qualified buyer pool.",
  },
];

const faqs = [
  {
    q: "How long does it take to sell a home in Portland?",
    a: "The average days on market varies by neighborhood and price point, but competitively priced homes in the Portland metro typically receive offers within 2 to 4 weeks. From listing to closing, expect 45 to 75 days total.",
  },
  {
    q: "How do you determine my home's value?",
    a: "We run a comparative market analysis (CMA) using recent closed sales, active listings, and expired listings in your immediate area. We also factor in your home's unique features, condition, and current buyer demand patterns.",
  },
  {
    q: "Do I need to make repairs before listing?",
    a: "Not always. We walk through your home and recommend only high-ROI improvements — the ones that actually increase your net proceeds. Sometimes a deep clean and declutter is all you need.",
  },
  {
    q: "What does it cost to sell with Advantage Realty?",
    a: "Our commission structure is transparent and competitive. We explain all costs upfront during your free evaluation so there are no surprises at closing. You will know your estimated net proceeds before you list.",
  },
];

/* ─── FAQ Accordion ─── */

function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[#E5E7EB]">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between py-5 text-left font-heading text-lg font-bold tracking-tight text-[#0A1628] md:text-xl"
              aria-expanded={isOpen}
            >
              {item.q}
              <span
                className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] text-[#F5B800] transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="pb-5 font-body text-[#0A1628]/70 leading-relaxed">
                {item.a}
              </p>
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
      {/* ━━ 1. HERO ━━ */}
      <section className="bg-[#FFFFFF] py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid items-center gap-12 md:grid-cols-2 md:gap-16"
          >
            {/* Left — Text */}
            <div>
              <motion.p
                variants={fadeUp}
                className="mb-4 font-body text-sm font-medium uppercase tracking-widest text-[#F5B800]"
              >
                Portland Home Sellers
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="font-heading text-5xl font-bold tracking-tight text-[#0A1628] md:text-7xl"
              >
                Sell Your Portland Home — Strategic Pricing, Maximum Value
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl font-body text-lg leading-relaxed text-[#0A1628]/70 md:text-xl"
              >
                Your home is likely your largest asset. Advantage Realty combines hyper-local market
                knowledge with proven marketing strategies to get you the strongest possible return.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#cta"
                  className="inline-flex items-center rounded-lg bg-[#F5B800] px-7 py-3.5 font-heading text-sm font-bold tracking-tight text-[#0A1628] transition hover:bg-[#E0A800]"
                >
                  Get Your Free Property Evaluation
                </a>
                <span className="font-body text-sm text-[#0A1628]/50">
                  No obligation &middot; Takes 2 minutes
                </span>
              </motion.div>
            </div>

            {/* Right — Paper Cut-Out Image */}
            <motion.div
              variants={fadeUp}
              className="relative aspect-[4/5] overflow-hidden rounded-xl"
            >
              <Image
                src="/images/paper-cutout-neighborhood.png"
                alt="Paper cut-out illustration of Portland neighborhood"
                fill
                className="bright-cutout object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ━━ 2. VALUE PROP + STAT ━━ */}
      <section className="bg-[#FFFFFF] py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid items-center gap-12 md:grid-cols-2 md:gap-20"
          >
            {/* Left — Copy */}
            <div>
              <motion.h2
                variants={fadeUp}
                className="font-heading text-3xl font-bold tracking-tight text-[#0A1628] md:text-5xl"
              >
                Pricing Your Home Right Is Everything
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-6 font-body text-lg leading-relaxed text-[#0A1628]/70"
              >
                Overprice and your listing sits — losing momentum and buyer trust. Underprice and
                you leave real money on the table. Our comparative market analysis pinpoints the
                price that attracts the strongest offers in the shortest time.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="mt-4 font-body leading-relaxed text-[#0A1628]/70"
              >
                Every pricing recommendation is backed by neighborhood-level sales data, active
                inventory analysis, and real buyer demand signals — not guesswork.
              </motion.p>
            </div>

            {/* Right — Big Stat */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col items-center rounded-xl border border-[#E5E7EB] bg-white p-12 text-center"
            >
              <span className="font-heading text-8xl font-bold tracking-tight text-[#2EC4B6] md:text-9xl">
                4.3
              </span>
              <span className="mt-2 font-heading text-xl font-bold tracking-tight text-[#0A1628]">
                months of inventory
              </span>
              <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-[#0A1628]/50">
                Portland metro housing supply remains below the 6-month balanced market threshold —
                giving sellers meaningful leverage.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ━━ 3. PROCESS ━━ */}
      <section className="bg-[#0A1628] py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl font-bold tracking-tight text-[#F8F6F2] md:text-5xl"
            >
              How We Sell Your Home
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl font-body text-lg text-[#F8F6F2]/60"
            >
              A five-step process designed to maximize your sale price and minimize your stress.
            </motion.p>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step) => (
                <motion.div
                  key={step.num}
                  variants={fadeUp}
                  className="rounded-xl border border-[#F8F6F2]/10 bg-[#F8F6F2]/5 p-6"
                >
                  <span className="font-heading text-6xl font-bold text-[#F5B800]/30">
                    {step.num}
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-bold tracking-tight text-[#F8F6F2]">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-[#F8F6F2]/50">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━ 4. MARKET DATA ━━ */}
      <section className="bg-[#FFFFFF] py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl font-bold tracking-tight text-[#0A1628] md:text-5xl"
            >
              What Portland Sellers Need to Know in 2026
            </motion.h2>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {marketInsights.map((insight, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="rounded-xl border border-[#E5E7EB] bg-white p-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F5B800]/10 font-heading text-sm font-bold text-[#F5B800]">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-bold tracking-tight text-[#0A1628]">
                        {insight.title}
                      </h3>
                      <p className="mt-2 font-body text-sm leading-relaxed text-[#0A1628]/60">
                        {insight.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━ 5. TESTIMONIAL ━━ */}
      <section className="bg-[#FFFFFF] py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.span
              variants={fadeUp}
              className="mb-6 block font-heading text-5xl text-[#F5B800]"
            >
              &ldquo;
            </motion.span>
            <motion.blockquote
              variants={fadeUp}
              className="font-accent text-2xl leading-snug text-[#0A1628] md:text-3xl"
            >
              They handled everything — pricing, staging advice, marketing, negotiations. We sold
              above asking and closed in under 30 days. Could not have asked for a better
              experience.
            </motion.blockquote>
            <motion.p variants={fadeUp} className="mt-8 font-heading text-sm font-bold text-[#F5B800]">
              Guteta
            </motion.p>
            <motion.p variants={fadeUp} className="font-body text-sm text-[#0A1628]/50">
              Home Seller, Portland
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ━━ 6. FAQ ━━ */}
      <section className="bg-[#FFFFFF] py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl font-bold tracking-tight text-[#0A1628] md:text-5xl"
            >
              Common Seller Questions
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-12 max-w-2xl">
              <FaqAccordion items={faqs} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ━━ 7. CTA ━━ */}
      <section id="cta" className="bg-[#0A1628] py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl font-bold tracking-tight text-[#F8F6F2] md:text-5xl"
            >
              Find Out What Your Home Is Worth — No Obligation
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 font-body text-lg leading-relaxed text-[#F8F6F2]/60"
            >
              Get a free, data-backed property evaluation from a team that knows Portland
              neighborhoods inside and out.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center rounded-lg bg-[#F5B800] px-8 py-4 font-heading text-sm font-bold tracking-tight text-[#0A1628] transition hover:bg-[#E0A800]"
              >
                Get Your Free Evaluation
              </a>
              <a
                href="tel:+15037937520"
                className="font-body text-sm text-[#F8F6F2]/50 transition hover:text-[#F5B800]"
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
