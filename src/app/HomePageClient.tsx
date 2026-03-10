"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Home,
  TrendingUp,
  Building2,
  HeartHandshake,
  ArrowRightLeft,
  BarChart3,
  Phone,
  Mail,
  ChevronDown,
  Quote,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Globe,
} from "lucide-react";

/* ----------------------------------------------------------------
   Animation helpers
   ---------------------------------------------------------------- */
function useAnimateOnScroll(threshold = 0.15) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  return { ref, inView };
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ----------------------------------------------------------------
   Data
   ---------------------------------------------------------------- */
const STATS = [
  { value: "16+", label: "Years in Portland Real Estate" },
  { value: "11+", label: "Metro Communities Served" },
  { value: "3", label: "Languages — English, Oromo, Amharic" },
  { value: "1", label: "of Few Portland Brokerages Specializing in Care Homes" },
];

const PAIN_POINTS = [
  {
    icon: Clock,
    title: "Wasting weekends on homes that don\u2019t fit",
    body: "You spend Saturday touring 6 houses. Three are wrong before you walk in the door. Your agent never previewed them.",
  },
  {
    icon: AlertTriangle,
    title: "Feeling like transaction #47, not a person",
    body: "Big brokerages pass you to junior associates. You leave voicemails that get returned two days later.",
  },
  {
    icon: Globe,
    title: "Navigating the biggest purchase of your life in your second language",
    body: "Contract clauses, inspection reports, closing disclosures \u2014 when the stakes are this high, you deserve to understand every word.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Tell Us What Matters",
    body: "A 15-minute call \u2014 in English, Oromo, or Amharic \u2014 where you share your goals, timeline, and concerns. No pitch. Just listening.",
  },
  {
    num: "02",
    title: "Get a Strategy Built Around You",
    body: "Not a template. A personalized plan backed by 16+ years of Portland market data, built for your specific situation.",
  },
  {
    num: "03",
    title: "Move Forward with Expert Support",
    body: "Your dedicated broker handles previews, negotiations, paperwork, and every detail through closing. You focus on your life.",
  },
];

const SERVICES = [
  {
    icon: Home,
    title: "Find Your Portland Home",
    desc: "Buyer representation with previewed listings, strategic offers, and negotiation expertise across 11 metro communities.",
    href: "/buy",
  },
  {
    icon: TrendingUp,
    title: "Sell for Maximum Value",
    desc: "Market-backed pricing, professional staging guidance, and aggressive marketing to attract qualified buyers fast.",
    href: "/sell",
  },
  {
    icon: Building2,
    title: "Build Your Investment Portfolio",
    desc: "Multi-family, single-family rentals, and portfolio strategy for first-time and experienced investors.",
    href: "/invest",
  },
  {
    icon: HeartHandshake,
    title: "Navigate Care Home Investment",
    desc: "One of few Portland brokerages with deep expertise in adult care home acquisition and licensing.",
    href: "/care-home-investment",
  },
  {
    icon: ArrowRightLeft,
    title: "Execute a 1031 Exchange",
    desc: "Tax-deferred exchanges handled with precision. Identification, timelines, and replacement property sourcing.",
    href: "/invest",
  },
  {
    icon: BarChart3,
    title: "Know Your Home\u2019s Real Value",
    desc: "Get an honest, data-driven assessment of your property\u2019s current market value. No strings attached.",
    href: "/contact",
  },
];

const TEAM = [
  {
    name: "Huluka Abebe",
    role: "Principal Broker",
    phone: "(503) 793-7520",
    photo: "/images/team/huluka-abebe.jpg",
  },
  {
    name: "Hunde Abebe",
    role: "Broker & Co-Founder",
    phone: "(503) 449-4362",
    photo: "/images/team/hunde-abebe.jpg",
  },
  {
    name: "Jenni Anderson",
    role: "Broker & 1031 Exchange Specialist",
    phone: "(503) 508-8779",
    photo: "/images/team/jenni-anderson.png",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Huluka helped us find our first home in Clackamas. He explained everything in Amharic so my parents understood the entire process. We never felt rushed or confused.",
    name: "Tilahun S.",
    detail: "First-Time Homebuyer, Clackamas",
  },
  {
    quote:
      "I was nervous about investing in a care home. Hunde walked me through every step \u2014 licensing, inspections, financing. His experience saved me from two bad deals before we found the right one.",
    name: "Guteta",
    detail: "Care Home Investor, Portland",
  },
  {
    quote:
      "We sold our home in Happy Valley in 12 days, above asking. Jenni\u2019s pricing strategy and marketing plan were spot-on. She kept us informed daily.",
    name: "Timothy & Tsehay Smith",
    detail: "Home Sellers, Happy Valley",
  },
];

const MARKET_STATS = [
  { value: "$510K\u2013$549K", label: "Portland Metro Median Home Price" },
  { value: "4.3 mo", label: "Months of Inventory" },
  { value: "$694K", label: "Happy Valley Median" },
  { value: "$585K", label: "Clackamas Median" },
  { value: "2\u00d7", label: "Listing Growth Since Dec 2025" },
];

const FAQS = [
  {
    question: "Do I need to speak Oromo or Amharic to work with you?",
    answer:
      "Not at all. We serve clients in English, Oromo, and Amharic. Our multilingual capability simply means more Portland families get expert representation in the language they\u2019re most comfortable with.",
  },
  {
    question: "What areas of Portland do you cover?",
    answer:
      "We serve 11+ communities across the Portland metro: Clackamas, Happy Valley, Milwaukie, Oregon City, West Linn, Lake Oswego, Tigard, Beaverton, Gresham, Portland proper, and surrounding areas.",
  },
  {
    question: "How is Advantage Realty different from a big brokerage?",
    answer:
      "You work directly with your broker \u2014 Huluka, Hunde, or Jenni. No hand-offs to junior associates, no call centers, no being treated like a number. We return calls the same day and preview properties before you tour them.",
  },
  {
    question: "What\u2019s the Portland market like right now for buyers?",
    answer:
      "Inventory has roughly doubled since December 2025, and buyers are writing 38% more offers. That means more choices but also more competition. A smart strategy \u2014 not just patience \u2014 is what wins in this market.",
  },
  {
    question: "Can you help me invest in an adult care home?",
    answer:
      "Yes. We\u2019re one of few Portland brokerages with deep expertise in care home acquisition. From licensing requirements to property evaluation to financing, we guide investors through the entire process.",
  },
  {
    question: "How much does a consultation cost?",
    answer:
      "Nothing. Your first consultation is completely free \u2014 a 15-minute conversation about your real estate goals with zero pressure or obligation.",
  },
];

/* ================================================================
   HOMEPAGE CLIENT COMPONENT
   ================================================================ */
export default function HomePageClient() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── SOCIAL PROOF BAR ───────────────────────────────────── */}
      <SocialProofBar />

      {/* ── PROBLEM ────────────────────────────────────────────── */}
      <ProblemSection />

      {/* ── SOLUTION ───────────────────────────────────────────── */}
      <SolutionSection />

      {/* ── SERVICES ───────────────────────────────────────────── */}
      <ServicesSection />

      {/* ── TEAM ───────────────────────────────────────────────── */}
      <TeamSection />

      {/* ── TESTIMONIALS ───────────────────────────────────────── */}
      <TestimonialsSection />

      {/* ── MARKET SNAPSHOT ────────────────────────────────────── */}
      <MarketSection />

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <FaqSection />

      {/* ── FINAL CTA ──────────────────────────────────────────── */}
      <FinalCtaSection />
    </>
  );
}

/* ================================================================
   HERO
   ================================================================ */
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 pb-16 pt-12 lg:flex-row lg:gap-16 lg:pb-24 lg:pt-20">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <span className="mb-4 inline-block rounded-full bg-[#D9F99D] px-4 py-1.5 font-body text-sm font-semibold text-[#111827]">
            English &middot; Oromo &middot; Amharic
          </span>

          <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.1] tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
            Portland Real Estate,{" "}
            <span className="text-gradient-blue">Your Language</span>,{" "}
            <span className="text-gradient-lime">Your Advantage</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl font-body text-lg leading-relaxed text-[#374151] lg:mx-0">
            Stop scrolling listings alone. Huluka and Hunde Abebe have spent
            16+ years helping Portland families buy, sell, and invest &mdash; in
            English, Oromo, and Amharic. You&rsquo;ll work directly with your
            broker. Every call. Every showing. Every negotiation.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#84CC16] px-7 py-4 font-heading text-base font-semibold text-[#111827] shadow-lg shadow-lime-500/20 transition-all hover:bg-[#65A30D] hover:shadow-xl hover:shadow-lime-500/30"
            >
              Schedule Your Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <p className="mt-3 text-center font-body text-sm text-[#6B7280] lg:text-left">
            No obligation. Just a 15-minute conversation about your goals.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative flex-1"
        >
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#2563EB]/10 to-[#84CC16]/10 blur-2xl" />
            <Image
              src="/images/paper-cutout-hero-home.png"
              alt="Portland neighborhood paper-cutout illustration"
              width={640}
              height={540}
              priority
              className="relative z-10 h-auto w-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   SOCIAL PROOF BAR
   ================================================================ */
function SocialProofBar() {
  const { ref, inView } = useAnimateOnScroll(0.3);

  return (
    <section ref={ref} className="bg-[#2563EB] py-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-4"
      >
        {STATS.map((s, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i}
            className="text-center"
          >
            <p className="font-heading text-3xl font-bold text-white md:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 font-body text-sm text-[#93C5FD]">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ================================================================
   PROBLEM SECTION
   ================================================================ */
function ProblemSection() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-[#111827] sm:text-4xl lg:text-5xl">
            Portland&rsquo;s Market Is Shifting.{" "}
            <span className="text-[#2563EB]">Most Agents Haven&rsquo;t Caught Up.</span>
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-[#374151]">
            Inventory doubled since December 2025. Buyers are writing 38% more
            offers. And yet &mdash; most agents are still running the same
            playbook from 2021. If you&rsquo;ve been handed a generic MLS
            search, ghosted after your first showing, or told to &ldquo;just be
            patient&rdquo; while your dream home sells to someone else &mdash;
            that&rsquo;s not bad luck. That&rsquo;s the wrong agent.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-14 grid gap-8 md:grid-cols-3"
        >
          {PAIN_POINTS.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 2}
              className="rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/10">
                <p.icon className="h-6 w-6 text-[#2563EB]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#111827]">
                {p.title}
              </h3>
              <p className="mt-3 font-body text-base leading-relaxed text-[#374151]">
                {p.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   SOLUTION SECTION (3 Steps)
   ================================================================ */
function SolutionSection() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="bg-[#F3F4F6] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-[#111827] sm:text-4xl lg:text-5xl">
            Three Steps to{" "}
            <span className="text-[#2563EB]">Confident Real Estate Decisions</span>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid gap-10 md:grid-cols-3"
        >
          {STEPS.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="relative rounded-2xl bg-white p-8 shadow-sm"
            >
              <span className="absolute -top-5 left-6 font-heading text-7xl font-bold leading-none text-[#2563EB]/10">
                {s.num}
              </span>
              <div className="relative">
                <span className="mb-2 inline-block rounded-full bg-[#2563EB] px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider text-white">
                  Step {s.num}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold text-[#111827]">
                  {s.title}
                </h3>
                <p className="mt-3 font-body text-base leading-relaxed text-[#374151]">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#84CC16] px-7 py-4 font-heading text-base font-semibold text-[#111827] shadow-lg shadow-lime-500/20 transition-all hover:bg-[#65A30D] hover:shadow-xl"
          >
            Start With Step One
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   SERVICES
   ================================================================ */
function ServicesSection() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-[#111827] sm:text-4xl lg:text-5xl">
            Six Ways to Win in{" "}
            <span className="text-[#2563EB]">Portland Real Estate</span>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}>
              <Link
                href={s.href}
                className="group flex h-full flex-col rounded-2xl border border-[#E5E7EB] bg-white p-8 transition-all hover:border-[#84CC16] hover:shadow-lg hover:shadow-lime-500/10"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3F4F6] transition-colors group-hover:bg-[#D9F99D]">
                  <s.icon className="h-6 w-6 text-[#2563EB] transition-colors group-hover:text-[#111827]" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#111827]">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 font-body text-base leading-relaxed text-[#374151]">
                  {s.desc}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 font-body text-sm font-semibold text-[#2563EB] transition-colors group-hover:text-[#84CC16]">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   TEAM
   ================================================================ */
function TeamSection() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="bg-[#F3F4F6] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-[#111827] sm:text-4xl lg:text-5xl">
            Three Brokers. Three Languages.{" "}
            <span className="text-[#2563EB]">Zero Runaround.</span>
          </h2>
          <p className="mt-5 font-body text-lg text-[#374151]">
            When you call, the person who answers is the person handling your
            deal. That&rsquo;s how a family-run brokerage works.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TEAM.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={t.photo}
                  alt={`${t.name} — ${t.role} at Advantage Realty LLC`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-[#111827]">
                  {t.name}
                </h3>
                <p className="mt-1 font-body text-sm font-semibold text-[#2563EB]">
                  {t.role}
                </p>
                <a
                  href={`tel:${t.phone.replace(/\D/g, "")}`}
                  className="mt-3 inline-flex items-center gap-2 font-body text-sm text-[#374151] transition-colors hover:text-[#84CC16]"
                >
                  <Phone className="h-4 w-4" />
                  {t.phone}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   TESTIMONIALS
   ================================================================ */
function TestimonialsSection() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="bg-[#111827] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Don&rsquo;t Take Our Word for It
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-14 grid gap-8 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="relative rounded-2xl border border-[#1F2937] bg-[#1F2937] p-8"
            >
              <Quote className="mb-4 h-8 w-8 text-[#84CC16]" />
              <p className="font-body text-base leading-relaxed text-[#E5E7EB]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-[#374151] pt-4">
                <p className="font-heading text-sm font-bold text-white">
                  {t.name}
                </p>
                <p className="font-body text-xs text-[#6B7280]">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   MARKET SNAPSHOT
   ================================================================ */
function MarketSection() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-[#111827] sm:text-4xl lg:text-5xl">
            Portland Market &mdash;{" "}
            <span className="text-[#2563EB]">
              What Smart Buyers and Sellers Know Right Now
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5"
        >
          {MARKET_STATS.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 text-center"
            >
              <p className="font-heading text-2xl font-bold text-[#2563EB] lg:text-3xl">
                {s.value}
              </p>
              <p className="mt-2 font-body text-sm text-[#374151]">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-12 max-w-2xl text-center"
        >
          <p className="font-body text-base leading-relaxed text-[#374151]">
            The Portland market is shifting fast. Whether you&rsquo;re buying,
            selling, or investing, the difference between a good outcome and a
            great one comes down to strategy &mdash; not guesswork. Our team
            tracks these numbers weekly so you don&rsquo;t have to.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#84CC16] px-7 py-4 font-heading text-base font-semibold text-[#111827] shadow-lg shadow-lime-500/20 transition-all hover:bg-[#65A30D] hover:shadow-xl"
          >
            Get Your Personalized Market Brief
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   FAQ
   ================================================================ */
function FaqSection() {
  const { ref, inView } = useAnimateOnScroll();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="bg-[#F3F4F6] py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-[#111827] sm:text-4xl lg:text-5xl">
            Portland Real Estate &mdash;{" "}
            <span className="text-[#2563EB]">Answers to Your Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="border-b border-[#E5E7EB] last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left font-heading text-lg font-bold text-[#111827] transition-colors hover:text-[#2563EB]"
                aria-expanded={openIndex === i}
              >
                <span className="pr-4">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="flex-shrink-0 text-[#84CC16]"
                >
                  <ChevronDown className="h-5 w-5" />
                </motion.span>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="pb-5 font-body text-base leading-relaxed text-[#374151]">
                  {faq.answer}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   FINAL CTA
   ================================================================ */
function FinalCtaSection() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] py-20 lg:py-28"
    >
      {/* Decorative dots */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Your Next Move Starts With a Conversation
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-body text-lg leading-relaxed text-[#93C5FD]">
          Whether you&rsquo;re buying your first home, selling a property, or
          exploring investment opportunities &mdash; it starts with 15 minutes.
          No pitch, no pressure. Just an honest conversation about where you are
          and where you want to be.
        </p>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#84CC16] px-8 py-4 font-heading text-lg font-semibold text-[#111827] shadow-lg shadow-black/20 transition-all hover:bg-[#65A30D] hover:shadow-xl"
          >
            Schedule Your Free Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="mt-4 font-body text-sm text-[#93C5FD]">
            No obligation. Available in English, Oromo &amp; Amharic.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
