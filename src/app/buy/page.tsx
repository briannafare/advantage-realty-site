"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  Target,
  Eye,
  Handshake,
  KeyRound,
  MapPin,
  Phone,
  MessageCircle,
  ChevronDown,
  CheckCircle2,
  Globe,
  BarChart3,
  UserCheck,
} from "lucide-react";

/* ─── Animations ─── */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ─── Data ─── */

const whyPoints = [
  {
    icon: Eye,
    title: "Pre-Vetted Showings",
    desc: "We tour properties before you do. You only visit homes that genuinely match your criteria, budget, and lifestyle.",
  },
  {
    icon: BarChart3,
    title: "Negotiation Backed by Local Data",
    desc: "Every offer we write is informed by neighborhood-level comps, days-on-market trends, and seller motivation signals.",
  },
  {
    icon: UserCheck,
    title: "Direct Broker Access",
    desc: "You work directly with the managing broker — no hand-offs to junior agents, no phone tag, no lost details.",
  },
  {
    icon: Globe,
    title: "Trilingual Support",
    desc: "Huluka and Hunde are brothers who built this brokerage together. They treat your deal like a family matter — because that's how they operate.",
  },
];

const steps = [
  {
    num: "01",
    icon: Phone,
    title: "Discovery Call",
    desc: "15 minutes to understand your goals, budget, timeline, and non-negotiables. We listen before we search.",
  },
  {
    num: "02",
    icon: Search,
    title: "Custom Search Strategy",
    desc: "A tailored search built around your criteria — not generic MLS alerts. Includes off-market and coming-soon properties.",
  },
  {
    num: "03",
    icon: Eye,
    title: "Pre-Vetted Showings",
    desc: "We preview properties first so your weekends are spent in homes worth your time, not dead ends.",
  },
  {
    num: "04",
    icon: Target,
    title: "Strategic Offer & Negotiation",
    desc: "Data-backed offers with aggressive negotiation on price, repairs, and terms. We protect your position at every turn.",
  },
  {
    num: "05",
    icon: KeyRound,
    title: "Inspections to Keys",
    desc: "Full transaction coordination through inspections, appraisal, lending, and closing — until you hold the keys.",
  },
];

const neighborhoods = [
  { name: "Happy Valley", price: "$694K", tier: "Premium" },
  { name: "Clackamas", price: "$585K", tier: "Mid-range" },
  { name: "Oregon City", price: "$597K", tier: "Mid-range" },
  { name: "Lake Oswego", price: "Premium", tier: "Premium" },
  { name: "West Linn", price: "Premium", tier: "Premium" },
  { name: "Beaverton", price: "Varies", tier: "Varies" },
  { name: "Tigard", price: "Mid-range", tier: "Mid-range" },
  { name: "Gresham", price: "Entry-level", tier: "Entry-level" },
  { name: "Hillsboro", price: "Varies", tier: "Varies" },
  { name: "Milwaukie", price: "Mid-range", tier: "Mid-range" },
  { name: "Tualatin", price: "Mid-range", tier: "Mid-range" },
];

const faqs = [
  {
    q: "How long does it take to buy a home in Portland right now?",
    a: "Most buyers close within 30 to 60 days once an offer is accepted. The full search timeline depends on your criteria and how competitive your target neighborhoods are — first-time buyers typically spend 2 to 4 months from first search to closing.",
  },
  {
    q: "What credit score do I need to buy in the Portland metro?",
    a: "Conventional loans generally require a 620+ credit score. FHA loans may accept scores as low as 580 with 3.5% down. We connect you with trusted local lenders who assess your specific situation at no cost.",
  },
  {
    q: "Are there first-time buyer programs in Oregon?",
    a: "Yes. Oregon Housing and Community Services (OHCS) offers down payment assistance and below-market rate loans. Multnomah County and the City of Portland run additional targeted programs. We help you identify every program you qualify for.",
  },
  {
    q: "Does it cost me anything to work with a buyer's agent?",
    a: "In most Portland transactions, the seller pays the buyer's agent commission — meaning our guidance costs you nothing out of pocket. We disclose all compensation details upfront before you sign anything.",
  },
  {
    q: "Do your brokers speak languages other than English?",
    a: "Yes. Huluka and Hunde speak Oromo and Amharic in addition to English. If you prefer to discuss your transaction in either language, they're happy to accommodate throughout the entire process.",
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
              className="flex w-full items-center justify-between py-6 text-left text-lg font-semibold text-[#141414] md:text-xl"
              aria-expanded={isOpen}
            >
              <span className="pr-4">{item.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C9E83A]/10 text-[#C9E83A]"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.span>
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

export default function BuyPage() {
  return (
    <main className="overflow-hidden">
      {/* ━━ HERO — Split Layout ━━ */}
      <section className="relative bg-[#FFFFFF]">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <div className="grid min-h-[85vh] items-center gap-10 py-20 md:grid-cols-2 md:gap-16 md:py-0">
            {/* Left — Text */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={fadeUp}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E0DDD6] bg-white px-4 py-1.5 text-sm font-medium text-[#505050]"
              >
                <MapPin className="h-4 w-4" />
                Portland Metro Buyer&apos;s Agent
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl font-bold leading-[1.1] tracking-tight text-[#141414] sm:text-5xl lg:text-6xl"
              >
                Buy a Home in Portland{" "}
                <span className="text-[#2A5430]">— Without the Stress</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-lg text-lg leading-relaxed text-[#505050]"
              >
                Your weekends shouldn&apos;t be spent touring homes that were wrong before you
                walked in. With Advantage Realty, every showing is pre-vetted, every offer is
                strategic, and every conversation happens in the language you think in.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-lg bg-[#C9E83A] px-8 py-4 text-base font-bold text-[#1D3B22] transition-colors hover:bg-[#B6D82A]"
                >
                  Schedule a Free Buyer Consultation
                </a>
              </motion.div>

              <motion.p variants={fadeUp} className="mt-3 text-sm text-[#505050]">
                15 minutes. No obligation. Talk directly with your broker.
              </motion.p>
            </motion.div>

            {/* Right — Image */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              className="relative aspect-[4/5] overflow-hidden rounded-[22px] shadow-2xl md:aspect-[3/4]"
            >
              <Image
                src="/images/img-home-exterior.jpg"
                alt="Portland craftsman home exterior at dusk"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 rounded-[22px] ring-1 ring-inset ring-black/5" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━ WHY A LOCAL AGENT — White bg, 4 cards ━━ */}
      <section className="bg-[#FFFFFF] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-[#141414] md:text-5xl">
                Portland Is 11 Markets in One.{" "}
                <span className="text-[#2A5430]">You Need a Guide Who Knows Them All.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#505050]">
                Happy Valley&apos;s $694K median is a different world from Gresham&apos;s
                entry-level market. Lake Oswego buyers compete against cash offers that
                Milwaukie buyers rarely see. The agent who treats every zip code the same will
                cost you money — or the right home.
              </p>
            </motion.div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyPoints.map((point) => (
                <motion.div
                  key={point.title}
                  variants={fadeUp}
                  className="group rounded-[22px] border border-[#E0DDD6] bg-[#F8F6F1] p-8 transition-all hover:border-[#C9E83A]/30 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[22px] bg-[#F0F7DC] text-[#C9E83A]">
                    <point.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-[#141414]">{point.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#505050]">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━ 5-STEP PROCESS — Vertical timeline, light bg ━━ */}
      <section className="bg-[#F2F0EA] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#141414] md:text-5xl">
                Five Steps From Search to Keys in Hand
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-[#505050]">
                A proven process that keeps you informed, protected, and in control at every stage.
              </p>
            </motion.div>

            <div className="relative mx-auto mt-20 max-w-3xl">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 hidden h-full w-px bg-[#C9E83A]/20 md:left-16 md:block" />

              <div className="space-y-12">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    variants={fadeUp}
                    className="relative flex gap-6 md:gap-10"
                  >
                    {/* Oversized step number */}
                    <div className="relative z-10 flex flex-col items-center">
                      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[22px] bg-[#C9E83A] text-2xl font-bold text-[#1D3B22] md:h-32 md:w-32 md:text-6xl">
                        {step.num}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1 md:pt-6">
                      <div className="flex items-center gap-3">
                        <step.icon className="h-5 w-5 text-[#C9E83A]" />
                        <h3 className="text-xl font-bold text-[#141414]">{step.title}</h3>
                      </div>
                      <p className="mt-2 max-w-md text-[#505050] leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━ NEIGHBORHOODS — Scrollable grid ━━ */}
      <section className="bg-[#FFFFFF] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-bold tracking-tight text-[#141414] md:text-5xl">
                Portland Communities We Know Street by Street
              </h2>
              <p className="mt-4 max-w-xl text-lg text-[#505050]">
                Median prices reflect current Portland metro market data. Each neighborhood has
                its own rhythm — we help you find the one that fits yours.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {neighborhoods.map((n) => (
                <motion.div
                  key={n.name}
                  variants={fadeUp}
                  className="group relative rounded-[22px] border-2 border-[#E0DDD6] bg-white p-6 transition-all hover:border-[#C9E83A] hover:shadow-md"
                >
                  <div className="absolute right-4 top-4">
                    <MapPin className="h-4 w-4 text-[#E0DDD6] transition-colors group-hover:text-[#C9E83A]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#141414]">{n.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#2A5430]">{n.price}</p>
                  <div className="mt-3">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                        n.tier === "Premium"
                          ? "bg-[#C9E83A]/10 text-[#B6D82A]"
                          : n.tier === "Entry-level"
                          ? "bg-[#F0F7DC] text-[#B6D82A]"
                          : "bg-[#F2F0EA] text-[#505050]"
                      }`}
                    >
                      {n.tier}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━ TESTIMONIAL — Dark section ━━ */}
      <section className="bg-[#1D3B22] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div variants={fadeIn} className="mb-8 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-6 w-6 text-[#C9E83A]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </motion.div>

            <motion.blockquote
              variants={fadeUp}
              className="text-2xl font-medium leading-relaxed text-white md:text-3xl"
            >
              &ldquo;They made buying our first home feel effortless. Every step was explained
              clearly, and we always felt like a priority — not just another
              transaction.&rdquo;
            </motion.blockquote>

            <motion.div variants={fadeUp} className="mt-10">
              <p className="text-base font-bold text-[#C9E83A]">Tilahun S.</p>
              <p className="mt-1 text-sm text-white/50">First-Time Home Buyer, Portland</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ━━ FAQ — Accordion ━━ */}
      <section className="bg-[#FFFFFF] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#141414] md:text-4xl">
                  Common Questions About Buying in Portland
                </h2>
                <p className="mt-4 text-[#505050] leading-relaxed">
                  Don&apos;t see your question? Call us at{" "}
                  <a href="tel:+15037937520" className="font-medium text-[#2A5430] hover:underline">
                    (503) 793-7520
                  </a>{" "}
                  — your broker picks up, not a junior agent.
                </p>
              </div>
              <FaqAccordion items={faqs} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ━━ FINAL CTA — Dark rounded block, outline button ━━ */}
      <section id="cta" className="relative bg-[#F8F6F1] py-24 md:py-32">
        <div className="relative mx-auto max-w-5xl px-5 md:px-8 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-[22px] bg-[#141414] px-8 py-20 text-center md:px-16"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold tracking-tight text-white md:text-5xl"
            >
              Your Portland Home Search Starts With One Call
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80"
            >
              Tell us what you&apos;re looking for and we&apos;ll build a search strategy
              around it — no obligation, no pressure, no generic auto-alerts.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center gap-5">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-10 py-4 text-base font-bold text-white transition-all hover:bg-white hover:text-[#141414]"
              >
                Schedule a Free Buyer Consultation
              </a>

              <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
                <a
                  href="tel:+15037937520"
                  className="flex items-center gap-2 text-sm font-medium text-white/90 transition hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  (503) 793-7520
                </a>
                <a
                  href="tel:+15034494362"
                  className="flex items-center gap-2 text-sm font-medium text-white/90 transition hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  (503) 449-4362
                </a>
              </div>

              <p className="text-sm text-white/60">
                Direct Broker Access &middot; Always
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
