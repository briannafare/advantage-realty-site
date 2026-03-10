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
    title: "Discovery Call",
    desc: "We learn your goals, budget, timeline, and must-haves so every recommendation is tailored to you.",
  },
  {
    num: "02",
    title: "Personalized Home Search",
    desc: "Curated listings sent to you daily — filtered by your criteria, not generic auto-alerts.",
  },
  {
    num: "03",
    title: "We Preview First",
    desc: "Our team previews properties before your visit so you only tour homes worth your time.",
  },
  {
    num: "04",
    title: "Tour & Offer Strategy",
    desc: "Guided showings with real-time market context, followed by a data-backed offer strategy.",
  },
  {
    num: "05",
    title: "Negotiation & Close",
    desc: "Aggressive negotiation on price, repairs, and terms — protecting your interests through closing day.",
  },
];

const benefits = [
  "Multilingual support — English, Amharic, and Oromo so nothing gets lost in translation",
  "Access to off-market and coming-soon listings before they hit the MLS",
  "Dedicated buyer consultation at no cost to you — the seller pays our commission",
  "Neighborhood-level market data so you never overpay",
  "Full transaction coordination from offer through keys in hand",
];

const areas = [
  { name: "Portland", price: "$510K – $549K", note: "Metro-wide inventory across all quadrants" },
  { name: "Happy Valley", price: "$694K", note: "Top-rated schools, newer construction" },
  { name: "Clackamas", price: "$585K", note: "Suburban feel, easy freeway access" },
  { name: "Oregon City", price: "$597K", note: "Historic charm, river-adjacent living" },
  { name: "Beaverton", price: "$520K – $570K", note: "Tech corridor, light rail connected" },
  { name: "Lake Oswego", price: "$750K+", note: "Lakefront luxury and top schools" },
  { name: "Gresham", price: "$430K – $480K", note: "Affordable entry point, east-side access" },
  { name: "West Linn", price: "$650K – $720K", note: "Hilltop views, outdoor recreation" },
];

const faqs = [
  {
    q: "How long does it take to buy a home in Portland?",
    a: "Most buyers close within 30 to 60 days once an offer is accepted. The total search timeline depends on your criteria and market conditions — first-time buyers typically spend 2 to 4 months from first search to closing.",
  },
  {
    q: "What credit score do I need to buy a home in Oregon?",
    a: "Conventional loans generally require a 620+ credit score. FHA loans may accept scores as low as 580 with a 3.5% down payment. We connect you with trusted local lenders who can assess your specific situation at no cost.",
  },
  {
    q: "Are there first-time home buyer programs in Portland?",
    a: "Yes. Oregon Housing and Community Services (OHCS) offers down payment assistance and below-market rate loans for qualifying buyers. Multnomah County and the City of Portland also run targeted programs. We help you identify every program you qualify for.",
  },
  {
    q: "How much does it cost to use a buyer's agent?",
    a: "In most transactions, the seller pays the buyer's agent commission — meaning our expert guidance costs you nothing out of pocket. We disclose all compensation details upfront before you sign anything.",
  },
];

/* ─── FAQ Accordion ─── */

function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[#E8E2D8]">
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
                className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E8E2D8] text-[#D4A853] transition-transform duration-300"
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

export default function BuyPage() {
  return (
    <main>
      {/* ━━ 1. HERO ━━ */}
      <section className="bg-[#FEFCF8] py-20 md:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <motion.div
              className="lg:col-span-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p
                variants={fadeUp}
                className="mb-4 font-body text-sm font-medium uppercase tracking-widest text-[#D4A853]"
              >
                Portland Home Buyers
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="font-heading text-5xl font-bold tracking-tight text-[#0A1628] md:text-7xl"
              >
                Buy a Home in Portland — Expert Guidance in Your Language
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl font-body text-lg leading-relaxed text-[#0A1628]/70 md:text-xl"
              >
                Whether you are a first-time buyer or upgrading to your next chapter, Advantage
                Realty pairs local market expertise with multilingual support to make your purchase
                smooth and strategic.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#cta"
                  className="inline-flex items-center rounded-lg bg-[#D4A853] px-7 py-3.5 font-heading text-sm font-bold tracking-tight text-[#0A1628] transition hover:opacity-90"
                >
                  Start Your Home Search
                </a>
                <span className="font-body text-sm text-[#0A1628]/50">
                  No commitment &middot; Free consultation
                </span>
              </motion.div>
            </motion.div>

            {/* Paper cut-out house stack illustration */}
            <motion.div
              className="lg:col-span-2 hidden lg:flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {[
                { color: "#2EC4B6", label: "Happy Valley", rotate: "-2deg", delay: 0.1 },
                { color: "#D4A853", label: "Clackamas", rotate: "1.5deg", delay: 0.2 },
                { color: "#0A1628", label: "Portland", rotate: "-1deg", delay: 0.3 },
              ].map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20, rotate: card.rotate }}
                  whileInView={{ opacity: 1, y: 0, rotate: card.rotate }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + card.delay, duration: 0.5 }}
                  className="w-full max-w-[280px] p-6 rounded-xl relative"
                  style={{
                    backgroundColor: card.color,
                    boxShadow: "6px 6px 0 rgba(10, 22, 40, 0.15)",
                    transform: `rotate(${card.rotate})`,
                  }}
                >
                  <svg viewBox="0 0 80 50" className="w-16 h-10 mb-3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 5L75 25V45H5V25L40 5Z" fill="white" fillOpacity="0.2" />
                    <path d="M40 5L75 25V45H5V25L40 5Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                    <rect x="30" y="30" width="12" height="15" rx="1" fill="white" fillOpacity="0.3" />
                    <rect x="50" y="28" width="10" height="8" rx="1" fill="white" fillOpacity="0.2" />
                    <rect x="15" y="28" width="10" height="8" rx="1" fill="white" fillOpacity="0.2" />
                  </svg>
                  <p className={`font-heading font-bold text-lg tracking-tight ${i === 2 ? "text-[#F5F0E8]" : "text-white"}`}>
                    {card.label}
                  </p>
                  <p className={`font-body text-xs mt-1 ${i === 2 ? "text-[#F5F0E8]/60" : "text-white/60"}`}>
                    {i === 0 ? "$694K median" : i === 1 ? "$585K median" : "$510K–$549K median"}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━ 2. PROCESS STEPS ━━ */}
      <section className="bg-[#0A1628] py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl font-bold tracking-tight text-[#F5F0E8] md:text-5xl"
            >
              Your Home Buying Journey — Simplified
            </motion.h2>

            <div className="mt-16 space-y-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  variants={fadeUp}
                  className="relative flex gap-8 pb-12 last:pb-0"
                >
                  {/* Timeline line */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-[27px] top-14 h-full w-px bg-[#D4A853]/20" />
                  )}
                  {/* Number */}
                  <span
                    className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-heading text-2xl font-bold ${i % 2 === 0 ? "bg-[#D4A853] text-[#0A1628]" : "bg-[#2EC4B6] text-white"}`}
                    style={{ boxShadow: "3px 3px 0 rgba(255,255,255,0.15)" }}
                  >
                    {step.num}
                  </span>
                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="font-heading text-xl font-bold tracking-tight text-[#F5F0E8]">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-lg font-body leading-relaxed text-[#F5F0E8]/60">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━ 3. BENEFITS ━━ */}
      <section className="bg-[#FEFCF8] py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid items-center gap-12 md:grid-cols-2 md:gap-16"
          >
            {/* Left — Benefits */}
            <div>
              <motion.h2
                variants={fadeUp}
                className="font-heading text-3xl font-bold tracking-tight text-[#0A1628] md:text-5xl"
              >
                Why Buyers Choose Advantage Realty
              </motion.h2>
              <ul className="mt-10 space-y-5">
                {benefits.map((b, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex gap-3">
                    <svg
                      className="mt-1 h-5 w-5 shrink-0 text-[#D4A853]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-body leading-relaxed text-[#0A1628]/80">{b}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right — Image Placeholder */}
            <motion.div
              variants={fadeUp}
              className="relative aspect-[4/5] overflow-hidden rounded-xl border border-[#E8E2D8]"
            >
              <Image
                src="/images/home-exterior-craftsman.webp"
                alt="Portland home buyer consultation with Advantage Realty"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ━━ 4. AREAS ━━ */}
      <section className="bg-[#FEFCF8] py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl font-bold tracking-tight text-[#0A1628] md:text-5xl"
            >
              Portland Communities We Know Best
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl font-body text-lg text-[#0A1628]/60"
            >
              Median home prices reflect current Portland metro market data.
            </motion.p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {areas.map((area) => (
                <motion.div
                  key={area.name}
                  variants={fadeUp}
                  className="group rounded-xl border border-[#E8E2D8] bg-white p-6 transition hover:border-[#D4A853]/40 hover:shadow-sm"
                >
                  <h3 className="font-heading text-lg font-bold tracking-tight text-[#0A1628]">
                    {area.name}
                  </h3>
                  <p className="mt-1 font-heading text-sm font-bold text-[#D4A853]">
                    {area.price}
                  </p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-[#0A1628]/60">
                    {area.note}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual — Area Photos */}
      <section className="bg-[#FEFCF8] pb-4">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-xl overflow-hidden aspect-[16/9]"
            >
              <Image
                src="/images/happy-valley-residential.webp"
                alt="Happy Valley residential neighborhood — Portland metro area"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-xl overflow-hidden aspect-[16/9]"
            >
              <Image
                src="/images/lake-oswego-waterfront.webp"
                alt="Lake Oswego waterfront — premium Portland suburb"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━ 5. TESTIMONIAL ━━ */}
      <section className="bg-[#FEFCF8] py-20 md:py-32">
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
              className="mb-6 block font-heading text-5xl text-[#D4A853]"
            >
              &ldquo;
            </motion.span>
            <motion.blockquote
              variants={fadeUp}
              className="font-accent text-2xl leading-snug text-[#0A1628] md:text-3xl"
            >
              They made buying our first home feel effortless. Every step was explained clearly, and
              we always felt like a priority — not just another transaction.
            </motion.blockquote>
            <motion.p variants={fadeUp} className="mt-8 font-heading text-sm font-bold text-[#D4A853]">
              Tilahun S.
            </motion.p>
            <motion.p variants={fadeUp} className="font-body text-sm text-[#0A1628]/50">
              First-Time Home Buyer, Portland
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ━━ 6. FAQ ━━ */}
      <section className="bg-[#FEFCF8] py-20 md:py-32">
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
              Common Buyer Questions
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
              className="font-heading text-3xl font-bold tracking-tight text-[#F5F0E8] md:text-5xl"
            >
              Your Portland Home Search Starts Here
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 font-body text-lg leading-relaxed text-[#F5F0E8]/60"
            >
              Tell us what you are looking for and we will send you personalized listings — no
              obligation, no pressure.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center rounded-lg bg-[#D4A853] px-8 py-4 font-heading text-sm font-bold tracking-tight text-[#0A1628] transition hover:opacity-90"
              >
                Start Your Home Search
              </a>
              <a
                href="tel:+15035551234"
                className="font-body text-sm text-[#F5F0E8]/50 transition hover:text-[#D4A853]"
              >
                Or call: [CLIENT TO PROVIDE: phone number]
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
