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
  ChevronDown,
  Quote,
  ArrowRight,
  Clock,
  AlertTriangle,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
  { value: "3", label: "Brokers — Direct Access, Always" },
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
    body: "A 15-minute call where you share your goals, timeline, and concerns. No pitch. Just listening. You\u2019ll talk to the broker who handles your deal \u2014 not a sales team.",
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
  { value: "$525K", label: "Portland Metro Median" },
  { value: "28", label: "Avg Days on Market" },
  { value: "$694K", label: "Happy Valley Median" },
  { value: "+4.2%", label: "Year-Over-Year Growth" },
];

const FAQS = [
  {
    question: "Do your brokers speak languages other than English?",
    answer:
      "Yes. Huluka and Hunde speak Oromo and Amharic in addition to English. If you prefer to discuss your transaction in either language, they\u2019re happy to accommodate throughout the entire process.",
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
      <HeroSection />
      <SocialProofBar />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <MarketSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}

/* ================================================================
   HERO — White background, Rillo-style
   ================================================================ */
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Lime tint panel on right — Rillo style */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[42%] bg-[#F0F7DC] lg:block" style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)" }} />

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 pb-16 pt-12 lg:flex-row lg:gap-16 lg:pb-24 lg:pt-20">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 flex-1 text-center lg:text-left"
        >
          {/* Badge pill — CryptSeekers style */}
          <div className="mb-5 inline-flex items-center gap-[7px] rounded-full border border-[#E0DDD6] bg-white px-[14px] py-[5px] font-body text-xs font-medium text-[#505050]">
            <span className="h-[7px] w-[7px] rounded-full bg-[#5BB5D8]" />
            Portland&rsquo;s Most Trusted Real Estate Team
          </div>

          <h1 className="font-display text-[clamp(40px,7vw,76px)] font-extrabold leading-[1.0] tracking-[-0.025em] text-[#141414]">
            The Smarter Way To Buy Portland{" "}
            <em className="font-accent text-[#2A5430] not-italic" style={{ fontStyle: "italic", fontWeight: 300 }}>
              Real Estate
            </em>
            .
          </h1>

          <p className="mx-auto mt-6 max-w-xl font-body text-lg leading-[1.75] text-[#505050] lg:mx-0">
            20 years. Hundreds of clients. One team that actually knows this city.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <Link href="/contact">
              <Button variant="default" size="lg">
                Schedule a Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            {/* Circle-arrow soft CTA — Rillo signature */}
            <Link
              href="/about"
              className="inline-flex items-center gap-[10px] font-display text-[14px] font-bold tracking-[-0.01em] text-[#141414] transition-colors"
            >
              See Our Work
              <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#141414] text-white text-sm transition-transform hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>

          <p className="mt-3 text-center font-body text-sm text-[#909090] lg:text-left">
            No obligation. Just a 15-minute conversation about your goals.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative z-10 flex-1"
        >
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
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
   SOCIAL PROOF BAR — White bg with border, not dark blue
   ================================================================ */
function SocialProofBar() {
  const { ref, inView } = useAnimateOnScroll(0.3);

  return (
    <section ref={ref} className="border-b border-[#E0DDD6] bg-white py-6">
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
            <p className="font-display text-3xl font-extrabold text-[#141414] md:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 font-body text-sm text-[#909090]">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ================================================================
   PROBLEM SECTION — White bg
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
          <h2 className="font-display text-[clamp(24px,3.5vw,38px)] font-bold leading-[1.1] tracking-[-0.018em] text-[#141414]">
            Portland&rsquo;s Market Is{" "}
            <em className="font-accent not-italic text-[#2A5430]" style={{ fontStyle: "italic", fontWeight: 300 }}>
              Shifting
            </em>
            . Most Agents Haven&rsquo;t Caught Up.
          </h2>
          <p className="mt-6 font-body text-lg leading-[1.75] text-[#505050]">
            Inventory doubled since December 2025. Buyers are writing 38% more
            offers. And yet &mdash; most agents are still running the same
            playbook from 2021.
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
              className="rounded-[22px] border border-[#E0DDD6] bg-white p-8 transition-shadow hover:shadow-md"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#FDF0EB]">
                <p.icon className="h-6 w-6 text-[#E8622A]" />
              </div>
              <h3 className="font-display text-[clamp(17px,2.2vw,22px)] font-bold leading-[1.2] tracking-[-0.012em] text-[#141414]">
                {p.title}
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#505050]">
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
   SOLUTION SECTION — Lime tint bg (feature area)
   ================================================================ */
function SolutionSection() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="bg-[#F0F7DC] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-[clamp(24px,3.5vw,38px)] font-bold leading-[1.1] tracking-[-0.018em] text-[#141414]">
            Three Steps to{" "}
            <em className="font-accent not-italic text-[#2A5430]" style={{ fontStyle: "italic", fontWeight: 300 }}>
              Confident
            </em>{" "}
            Real Estate Decisions
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
              className="relative rounded-[22px] bg-white p-8 shadow-sm"
            >
              <span className="absolute -top-5 left-6 font-display text-7xl font-extrabold leading-none text-[#E8622A]/10">
                {s.num}
              </span>
              <div className="relative">
                <span className="mb-2 inline-block rounded-full bg-[#E8622A] px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider text-white">
                  Step {s.num}
                </span>
                <h3 className="mt-3 font-display text-[clamp(17px,2.2vw,22px)] font-bold leading-[1.2] tracking-[-0.012em] text-[#141414]">
                  {s.title}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#505050]">
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
          <Link href="/contact">
            <Button variant="default" size="lg">
              Start With Step One
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   SERVICES — White bg
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
          <h2 className="font-display text-[clamp(24px,3.5vw,38px)] font-bold leading-[1.1] tracking-[-0.018em] text-[#141414]">
            Six Ways to{" "}
            <em className="font-accent not-italic text-[#2A5430]" style={{ fontStyle: "italic", fontWeight: 300 }}>
              Win
            </em>{" "}
            in Portland Real Estate
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
                className="group flex h-full flex-col rounded-[22px] border border-[#E0DDD6] bg-white p-8 transition-all hover:border-[#E8622A]/30 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#F2F0EA] transition-colors group-hover:bg-[#FDF0EB]">
                  <s.icon className="h-6 w-6 text-[#505050] transition-colors group-hover:text-[#E8622A]" />
                </div>
                <h3 className="font-display text-[clamp(17px,2.2vw,22px)] font-bold leading-[1.2] tracking-[-0.012em] text-[#141414]">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 font-body text-[15px] leading-[1.7] text-[#505050]">
                  {s.desc}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 font-body text-sm font-semibold text-[#E8622A]">
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
   TEAM — White bg
   ================================================================ */
function TeamSection() {
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
          <h2 className="font-display text-[clamp(24px,3.5vw,38px)] font-bold leading-[1.1] tracking-[-0.018em] text-[#141414]">
            Three Brokers. Zero{" "}
            <em className="font-accent not-italic text-[#2A5430]" style={{ fontStyle: "italic", fontWeight: 300 }}>
              Runaround
            </em>
            .
          </h2>
          <p className="mt-5 font-body text-lg leading-[1.75] text-[#505050]">
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
              className="group overflow-hidden rounded-[22px] border border-[#E0DDD6] bg-white transition-shadow hover:shadow-lg"
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
                <h3 className="font-display text-xl font-bold text-[#141414]">
                  {t.name}
                </h3>
                <p className="mt-1 font-body text-sm font-semibold text-[#E8622A]">
                  {t.role}
                </p>
                <a
                  href={`tel:${t.phone.replace(/\D/g, "")}`}
                  className="mt-3 inline-flex items-center gap-2 font-body text-sm text-[#505050] transition-colors hover:text-[#E8622A]"
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
   DARK SECTION — "We Believe..." ONE mid-page dark green section
   ================================================================ */
function TestimonialsSection() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="bg-[#1D3B22] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Dark section headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <h2 className="font-display text-[clamp(24px,3.5vw,38px)] font-bold leading-[1.1] tracking-[-0.018em] text-white">
            Don&rsquo;t Take Our Word for{" "}
            <em className="font-accent not-italic text-[#C9E83A]" style={{ fontStyle: "italic", fontWeight: 300 }}>
              It
            </em>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="relative rounded-[22px] border border-white/10 bg-white/5 p-8"
            >
              <Quote className="mb-4 h-8 w-8 text-[#C9E83A]" />
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-display text-sm font-bold text-white">
                  {t.name}
                </p>
                <p className="font-body text-xs text-white/50">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Circle-arrow CTA on dark — Rillo's exact pattern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-[10px] font-display text-[14px] font-bold tracking-[-0.01em] text-white transition-colors"
          >
            Get Your Free Consultation
            <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full border-2 border-white/40 text-white text-sm transition-all hover:border-white">
              &rarr;
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   MARKET DATA — Blue surface section (CryptSeekers style)
   ================================================================ */
function MarketSection() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="bg-[#EBF6FC] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge pill */}
          <div className="mb-4 inline-flex items-center gap-[6px] rounded-full border border-[#C4E4F2] bg-white px-3 py-1 font-body text-[11px] font-medium text-[#5BB5D8]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#5BB5D8]" />
            Portland Market Data
          </div>

          <h2 className="font-display text-[clamp(24px,3.5vw,38px)] font-bold leading-[1.1] tracking-[-0.018em] text-[#141414]">
            The Portland Market, by the{" "}
            <em className="font-accent not-italic text-[#5BB5D8]" style={{ fontStyle: "italic", fontWeight: 300 }}>
              Numbers
            </em>
          </h2>
        </motion.div>

        {/* Stats row — CryptSeekers style */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-10 flex flex-col overflow-hidden rounded-[22px] border border-[#C4E4F2] bg-white sm:flex-row"
        >
          {MARKET_STATS.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="flex-1 border-b border-[#C4E4F2] p-6 text-center sm:border-b-0 sm:border-r last:border-0"
            >
              <p className="font-display text-[26px] font-extrabold leading-none tracking-[-0.02em] text-[#5BB5D8]">
                {s.value}
              </p>
              <p className="mt-2 font-body text-[11px] text-[#909090]">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-12 max-w-2xl text-center"
        >
          <p className="font-body text-[15px] leading-[1.7] text-[#505050]">
            The Portland market is shifting fast. Whether you&rsquo;re buying,
            selling, or investing, the difference between a good outcome and a
            great one comes down to strategy &mdash; not guesswork.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button variant="default" size="lg">
                Get Your Personalized Market Brief
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   FAQ — Off-white bg
   ================================================================ */
function FaqSection() {
  const { ref, inView } = useAnimateOnScroll();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="bg-[#F8F6F1] py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-display text-[clamp(24px,3.5vw,38px)] font-bold leading-[1.1] tracking-[-0.018em] text-[#141414]">
            Portland Real Estate &mdash;{" "}
            <em className="font-accent not-italic text-[#2A5430]" style={{ fontStyle: "italic", fontWeight: 300 }}>
              Answers
            </em>{" "}
            to Your Questions
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
              className="border-b border-[#E0DDD6] last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left font-display text-lg font-bold text-[#141414] transition-colors hover:text-[#E8622A]"
                aria-expanded={openIndex === i}
              >
                <span className="pr-4">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="flex-shrink-0 text-[#E8622A]"
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
                <p className="pb-5 font-body text-[15px] leading-[1.7] text-[#505050]">
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
   FINAL CTA — Dark rounded block (#141414), near footer
   ================================================================ */
function FinalCtaSection() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="bg-[#F8F6F1] px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[22px] bg-[#141414] px-8 py-20 text-center lg:px-16"
      >
        <h2 className="font-display text-[clamp(24px,3.5vw,38px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
          Take Control Of Your
          <br />
          <em className="font-accent not-italic text-[#C9E83A]" style={{ fontStyle: "italic", fontWeight: 300 }}>
            Portland
          </em>{" "}
          Real Estate Future
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-[14px] leading-[1.7] text-white/60">
          A team that&rsquo;s been doing this for 20+ years, at your service.
        </p>

        <div className="mt-8">
          <Link href="/contact">
            <Button variant="outlineWhite">
              Schedule a Free Consultation
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
