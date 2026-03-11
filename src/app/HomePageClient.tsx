"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  Mail,
  ChevronDown,
  ArrowRight,
  Star,
  Quote,
  Globe,
  ExternalLink,
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
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ----------------------------------------------------------------
   Data
   ---------------------------------------------------------------- */
const HERO_TRUST = [
  "20+ Years in Portland",
  "Buyer & Seller Specialists",
  "Care Home & Investment Experts",
  "English \u00b7 Oromo \u00b7 Amharic",
];

const STATS = [
  { value: "20+", label: "Years in Portland" },
  { value: "4.9\u2605", label: "Google Rating" },
  { value: "200+", label: "Clients Served" },
  { value: "3", label: "Specialist Brokers" },
];

const FEATURES = [
  {
    emoji: "\ud83c\udfe1",
    title: "Deep Portland Market Knowledge",
    body: "We\u2019ve been tracking Portland\u2019s neighborhoods for 20+ years. Not just the listings \u2014 the micro-trends, the streets, the schools, and the shift before it shows up on Zillow. When you work with Advantage, you\u2019re buying local intelligence, not just a licensed signature.",
  },
  {
    emoji: "\ud83c\udfe5",
    title: "Care Home Property Specialists",
    body: "Portland\u2019s only real estate team with dedicated ADA consulting for residential care home properties. Whether you\u2019re buying, converting, or scaling a care portfolio \u2014 we\u2019ve navigated the zoning, the compliance, and the deal structure. Most agents won\u2019t touch this. We built a practice around it.",
  },
  {
    emoji: "\ud83d\udcca",
    title: "Buy, Sell, and Invest \u2014 One Roof",
    body: "First-time buyer trying to win in a competitive market. Homeowner who needs to sell without leaving money behind. Investor structuring a 1031 Exchange. Whatever your situation, there\u2019s a specialist on this team who\u2019s handled it. You don\u2019t need three agents. You need one team.",
  },
  {
    emoji: "\ud83c\udf0d",
    title: "We Speak Your Language \u2014 Literally",
    body: "Real estate is full of fine print. We work with clients in English, Oromo, and Amharic to make sure nothing gets lost in translation. Clear communication isn\u2019t a nice-to-have when you\u2019re signing a 30-year mortgage \u2014 it\u2019s how you protect the biggest investment of your life.",
  },
];

const TEAM = [
  {
    name: "Huluka Abebe",
    role: "Principal Broker",
    phone: "(503) 793-7520",
    email: "huluka@advantageor.com",
    photo: "/images/team/huluka-abebe.jpg",
    bio: "Huluka has been working Portland\u2019s real estate market for over 20 years. He built Advantage Realty on a simple idea: clients should leave feeling like they won. His specialty in care home properties and investment real estate makes him one of the most sought-after brokers in the city for buyers with complex needs.",
  },
  {
    name: "Hunde Abebe",
    role: "Broker",
    phone: "(503) 449-4362",
    email: "hunde@advantageor.com",
    photo: "/images/team/hunde-abebe.jpg",
    bio: "Hunde\u2019s clients describe him as the agent who \u201cknows exactly what you want once you consult him.\u201d He works closely with buyers and sellers across Portland\u2019s residential market, with a reputation for patience, precision, and getting deals across the finish line when other agents can\u2019t.",
  },
  {
    name: "Jenni Anderson",
    role: "Broker",
    phone: "(503) 508-8779",
    email: "jenni@advantageor.com",
    photo: "/images/team/jenni-anderson.png",
    bio: "Jenni brings a finance background that goes beyond the transaction \u2014 she helps clients understand what they\u2019re walking into before they sign. Her expertise in 1031 Exchange transactions makes her an essential partner for investors looking to build or optimize a Portland portfolio without the tax hit.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Tadesse Haile Hunde knows exactly what you want once you consult him. He found us a property that we never thought we could own at a price that was perfect for us. I was really advantageous working with him.",
    name: "Tadesse Haile Hunde",
    source: "Google Review \u00b7 Buyer",
  },
  {
    quote:
      "Huluka and his team are very organized, experienced, and professional in real estate sales. They will make the whole process run smoothly for you!",
    name: "Tilahun Shewamolto",
    source: "Verified Client Review \u00b7 Buyer/Seller",
  },
  {
    quote:
      "Hunde assisted me in finding the perfect home in the perfect location at a price within my budget. I am now an extremely happy homeowner!",
    name: "Guteta",
    source: "Verified Client Review \u00b7 Buyer",
  },
  {
    quote:
      "You will be well served with Hunde and Huluka with your real estate needs, especially in the adult care business.",
    name: "Timothy & Tsehay Smith",
    source: "Verified Client Review \u00b7 Care Home Investor",
  },
];

const MARKET_STATS = [
  { value: "$525K", label: "Median Sale Price" },
  { value: "28", label: "Avg Days on Market" },
  { value: "$310", label: "Price per Sq Ft" },
  { value: "+4.2%", label: "YoY Change" },
];

const LEAD_MAGNETS = [
  {
    audience: "For Buyers",
    title: "Portland Neighborhood Insider Guide",
    desc: "Which neighborhoods are actually up-and-coming. Which ones are overpriced. What the data says vs. what the listings say. 20 years of Portland street knowledge \u2014 in a free PDF.",
    cta: "Get the Free Guide \u2192",
  },
  {
    audience: "For Sellers",
    title: "Free Home Valuation \u2014 What\u2019s Your Home Worth?",
    desc: "Not a Zestimate. A real comparative market analysis from a Portland broker who knows your neighborhood. Submit your address and we\u2019ll have your CMA in 48 hours.",
    cta: "Request Free Valuation \u2192",
  },
  {
    audience: "For Investors",
    title: "Oregon Care Home Investor Checklist",
    desc: "ADA requirements. Zoning considerations. Licensing pathways. Deal structure questions most investors don\u2019t know to ask. The only free checklist built specifically for Portland care home investing.",
    cta: "Get the Free Checklist \u2192",
  },
];

const FAQS = [
  {
    question: "What\u2019s the best neighborhood to buy a home in Portland in 2026?",
    answer:
      "The best Portland neighborhood depends on your budget, commute, and priorities \u2014 but right now, St. Johns, Lents, and Woodstock are showing strong value before they hit mainstream attention. Sellwood and Alberta are more established but still competitive. If you want a neighborhood breakdown based on your specific criteria, download our free Portland Neighborhood Insider Guide or schedule a call and we\u2019ll walk you through it.",
  },
  {
    question: "How long does it take to buy a home in Portland?",
    answer:
      "From offer accepted to keys in hand, Portland closings typically take 30\u201345 days once you\u2019re under contract. Finding the right home can take anywhere from a few weeks to a few months depending on your criteria and how competitive your price range is. The most important thing is to get pre-approved before you start looking \u2014 in Portland\u2019s market, buyers who aren\u2019t pre-approved often lose out to buyers who are ready to move immediately.",
  },
  {
    question: "What makes Advantage Realty different from other Portland real estate agents?",
    answer:
      "Three things. First, 20+ years in this specific market \u2014 we know Portland\u2019s micro-neighborhoods, not just zip codes. Second, genuine specialization: Advantage Realty is the only Portland brokerage with dedicated ADA consulting for care home property transactions. Third, we\u2019re a small team by choice. When you work with us, you deal with the same people from consultation to closing \u2014 not a rotating cast of assistants.",
  },
  {
    question: "Can Advantage Realty help with care home or adult foster care property investments in Portland?",
    answer:
      "Yes \u2014 this is one of our core specialties. Advantage Realty works with buyers and investors purchasing, converting, or scaling residential care home properties in Portland and the surrounding metro area. We provide ADA compliance consulting as part of the process, which is something most generalist agents simply cannot offer. If you\u2019re looking at adult foster care real estate in Oregon, the Oregon Care Home Investor Checklist on this page is a good starting point.",
  },
  {
    question: "Does Advantage Realty work with buyers and sellers who speak Oromo or Amharic?",
    answer:
      "Yes. Our team includes brokers who work fluently in English, Oromo, and Amharic. Real estate transactions involve significant legal and financial detail \u2014 we believe every client deserves to understand exactly what they\u2019re signing, in the language they\u2019re most comfortable with. If you\u2019d like to speak with a broker in Oromo or Amharic, reach out directly and we\u2019ll connect you with the right person on our team.",
  },
];

/* ================================================================
   HOMEPAGE CLIENT COMPONENT
   ================================================================ */
export default function HomePageClient() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <WhyAdvantage />
      <TeamSection />
      <WeBelieveSection />
      <TestimonialsSection />
      <MarketDataSection />
      <LeadMagnetsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}

/* ================================================================
   01 · HERO — White bg + lime-tint right panel
   ================================================================ */
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Lime tint panel on right */}
      <div
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[42%] bg-[#F0F7DC] lg:block"
        style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)" }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 pb-16 pt-12 lg:flex-row lg:gap-16 lg:pb-24 lg:pt-20">
        {/* Text column */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 flex-1 text-center lg:text-left"
        >
          {/* Welcome badge */}
          <motion.div variants={fadeUp} custom={0}>
            <span className="mb-5 inline-flex items-center gap-[7px] rounded-full border border-[#E0DDD6] bg-white px-[14px] py-[5px] font-body text-xs font-medium text-[#505050]">
              <span className="h-[7px] w-[7px] rounded-full bg-[#5BB5D8]" />
              Portland&rsquo;s Most Trusted Real Estate Team
            </span>
          </motion.div>

          {/* H1 — stagger line by line */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="mt-2 font-display text-[clamp(40px,7vw,72px)] font-extrabold leading-[1.0] tracking-[-0.025em] text-[#141414]"
          >
            Portland Real Estate.
            <br />
            Done to Your{" "}
            <em
              className="font-accent not-italic text-[#2A5430]"
              style={{ fontStyle: "italic", fontWeight: 300 }}
            >
              Advantage
            </em>
            .
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mx-auto mt-6 max-w-[580px] font-body text-[17px] leading-[1.75] text-[#505050] lg:mx-0"
          >
            Portland&rsquo;s market doesn&rsquo;t wait. You need a team that
            knows which neighborhoods are moving, what a property is actually
            worth, and how to get you to closing without the chaos. That&rsquo;s
            been our job for over 20 years.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
          >
            <Link href="/contact">
              <Button variant="default" size="lg">
                Schedule a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            {/* Circle-arrow soft CTA */}
            <Link
              href="#lead-magnets"
              className="inline-flex items-center gap-[10px] font-display text-[13px] font-bold tracking-[-0.01em] text-[#141414] transition-colors"
            >
              Get the Portland Neighborhood Guide
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#141414] text-white text-sm transition-transform hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-body text-xs text-[#909090] lg:justify-start"
          >
            {HERO_TRUST.map((item, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="text-[#E0DDD6]">&middot;</span>}
                <span>{item}</span>
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Image — right panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative z-10 flex-1"
        >
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <Image
              src="/images/team/huluka-abebe.jpg"
              alt="Huluka Abebe — Principal Broker at Advantage Realty LLC"
              width={540}
              height={675}
              priority
              className="relative z-10 h-auto w-full rounded-[22px] object-cover object-top"
              style={{ aspectRatio: "4/5" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   02 · STATS BAR — White bg, blue numbers
   ================================================================ */
function StatsBar() {
  const { ref, inView } = useAnimateOnScroll(0.3);

  return (
    <section ref={ref} className="bg-white py-8">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col overflow-hidden rounded-[14px] border border-[#E0DDD6] bg-white sm:flex-row"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="flex-1 border-b border-[#E0DDD6] p-5 text-center sm:border-b-0 sm:border-r last:border-0"
            >
              <p className="font-display text-[28px] font-extrabold leading-none tracking-[-0.02em] text-[#5BB5D8]">
                {s.value}
              </p>
              <p className="mt-2 font-body text-[11px] text-[#909090]">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   03 · WHY ADVANTAGE — Lime-tint bg, 4 feature cards
   ================================================================ */
function WhyAdvantage() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="bg-[#F0F7DC] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <p className="mb-3 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7a9000]">
            Why Advantage Realty &middot; Portland, Oregon
          </p>
          <h2 className="font-display text-[clamp(24px,3.5vw,38px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#141414]">
            The Team That Knows Portland
            <br />
            Like It&rsquo;s{" "}
            <em
              className="font-accent not-italic text-[#2A5430]"
              style={{ fontStyle: "italic", fontWeight: 300 }}
            >
              Home
            </em>
            .
          </h2>
          <p className="mt-5 max-w-[580px] font-body text-[15px] leading-[1.75] text-[#505050]">
            Most agents know how to fill out a contract. Our team knows the
            Sellwood house that didn&rsquo;t list because the owner knew Huluka.
            That&rsquo;s the difference 20 years makes.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-14 grid gap-5 sm:grid-cols-2"
        >
          {FEATURES.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="rounded-[14px] border border-[rgba(170,200,40,0.25)] bg-white p-7"
            >
              <span className="mb-3 block text-[22px]">{f.emoji}</span>
              <h3 className="font-display text-[14px] font-bold tracking-[-0.01em] text-[#141414]">
                {f.title}
              </h3>
              <p className="mt-2 font-body text-[13px] leading-[1.65] text-[#505050]">
                {f.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   04 · TEAM — White bg, 3-column portrait cards
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
          className="mx-auto max-w-3xl"
        >
          <p className="mb-3 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#909090]">
            Your Advantage Realty Team &middot; Portland, Oregon
          </p>
          <h2 className="font-display text-[clamp(24px,3.5vw,38px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#141414]">
            Three Agents. One{" "}
            <em
              className="font-accent not-italic text-[#2A5430]"
              style={{ fontStyle: "italic", fontWeight: 300 }}
            >
              Commitment
            </em>
            .
          </h2>
          <p className="mt-5 max-w-[580px] font-body text-[15px] leading-[1.75] text-[#505050]">
            Not a big-box brokerage. Not a team you get handed off to. Three
            specialists who built their careers in Portland &mdash; and who
            answer when you call.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TEAM.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="group overflow-hidden rounded-[14px] border border-[#E0DDD6] bg-white"
            >
              {/* Photo — 4:5 portrait, grayscale → color hover */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={t.photo}
                  alt={`${t.name} \u2014 ${t.role} at Advantage Realty LLC`}
                  fill
                  className="object-cover object-top grayscale transition-all duration-300 group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-6">
                <h3 className="font-display text-[14px] font-extrabold tracking-[-0.01em] text-[#141414]">
                  {t.name}
                </h3>
                <p className="mt-1 font-body text-[11px] font-semibold uppercase tracking-[0.04em] text-[#E8622A]">
                  {t.role}
                </p>
                <p className="mt-3 font-body text-[12px] leading-[1.65] text-[#505050]">
                  {t.bio}
                </p>
                <div className="mt-4 space-y-1 font-mono text-[11px] text-[#909090]">
                  <p>{t.email}</p>
                  <p>{t.phone}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   05 · WE BELIEVE — Dark green section (#1D3B22)
   ================================================================ */
function WeBelieveSection() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="bg-[#1D3B22] py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="mb-3 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40"
          >
            Why It Matters
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display text-[clamp(24px,3.5vw,38px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white"
          >
            We Believe Real Estate
            <br />
            Should{" "}
            <em
              className="font-accent not-italic text-[#C9E83A]"
              style={{ fontStyle: "italic", fontWeight: 300 }}
            >
              Empower
            </em>{" "}
            You.
          </motion.h2>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-6 max-w-[560px] space-y-5 font-body text-[14px] leading-[1.75] text-white/60"
          >
            <p>
              Not overwhelm you. Not trap you in a process you don&rsquo;t
              understand, with an agent you can&rsquo;t reach, making a decision
              you&rsquo;re not confident about.
            </p>
            <p>
              You&rsquo;re buying or selling one of the biggest assets
              you&rsquo;ll ever own. You deserve straight answers, real
              expertise, and a team that&rsquo;s rooting for your outcome
              &mdash; not their commission check.
            </p>
          </motion.div>

          {/* Ghost circle-arrow CTA */}
          <motion.div variants={fadeUp} custom={3} className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-[10px] font-display text-[13px] font-bold tracking-[-0.01em] text-white transition-colors"
            >
              Let&rsquo;s Talk About Your Goals
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full border-[1.5px] border-white/40 text-white text-sm transition-all hover:border-white">
                &rarr;
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   06 · TESTIMONIALS — White bg, verbatim only
   ================================================================ */
function TestimonialsSection() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <p className="mb-3 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#909090]">
            What Our Clients Say &middot; Verified Reviews
          </p>
          <h2 className="font-display text-[clamp(24px,3.5vw,38px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#141414]">
            Real Clients.
            <br />
            Real{" "}
            <em
              className="font-accent not-italic text-[#2A5430]"
              style={{ fontStyle: "italic", fontWeight: 300 }}
            >
              Results
            </em>
            .
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-14 grid gap-5 sm:grid-cols-2"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="rounded-[14px] border border-[#E0DDD6] bg-[#F2F0EA] p-6"
            >
              <div className="mb-3 text-[13px] tracking-[2px] text-[#E8622A]">
                {"\u2605".repeat(5)}
              </div>
              <p className="font-body text-[13px] italic leading-[1.7] text-[#141414]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4">
                <p className="font-body text-[11px] font-semibold text-[#505050]">
                  {t.name}
                </p>
                <p className="font-body text-[10px] text-[#909090]">
                  {t.source}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10"
        >
          <a
            href="https://share.google/8FMAL8sX47XtEb0Im"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[10px] font-display text-[13px] font-bold tracking-[-0.01em] text-[#141414] transition-colors hover:text-[#E8622A]"
          >
            See All Reviews on Google
            <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#141414] text-white text-sm transition-transform hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   07 · MARKET DATA — Blue surface (#EBF6FC)
   ================================================================ */
function MarketDataSection() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="bg-[#EBF6FC] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <p className="mb-3 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5BB5D8]">
            Portland Real Estate Market &middot; Live Data
          </p>
          <h2 className="font-display text-[clamp(24px,3.5vw,38px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#141414]">
            The Portland Market,
            <br />
            by the{" "}
            <em
              className="font-accent not-italic text-[#5BB5D8]"
              style={{ fontStyle: "italic", fontWeight: 300 }}
            >
              Numbers
            </em>
            .
          </h2>
          <p className="mt-5 max-w-[540px] font-body text-[14px] leading-[1.75] text-[#505050]">
            Portland&rsquo;s real estate market has shifted more in the past
            four years than in the previous decade. Here&rsquo;s where things
            stand &mdash; and why having a team that reads these trends in real
            time changes everything.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-10 flex flex-col overflow-hidden rounded-[14px] border border-[#C4E4F2] bg-white sm:flex-row"
        >
          {MARKET_STATS.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="flex-1 border-b border-[#C4E4F2] p-5 text-center sm:border-b-0 sm:border-r last:border-0"
            >
              <p className="font-display text-[28px] font-extrabold leading-none tracking-[-0.02em] text-[#5BB5D8]">
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
          className="mt-10"
        >
          <Link
            href="#lead-magnets"
            className="inline-flex items-center gap-[10px] font-display text-[13px] font-bold tracking-[-0.01em] text-[#141414] transition-colors hover:text-[#5BB5D8]"
          >
            Download the Free Portland Neighborhood Guide
            <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#141414] text-white text-sm transition-transform hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   08 · LEAD MAGNETS — Dark green section
   ================================================================ */
function LeadMagnetsSection() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section id="lead-magnets" ref={ref} className="bg-[#1D3B22] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <p className="mb-3 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
            Free Resources &middot; Start Here
          </p>
          <h2 className="font-display text-[clamp(24px,3.5vw,38px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            Not Sure Where to Start?
            <br />
            We&rsquo;ve Got You{" "}
            <em
              className="font-accent not-italic text-[#C9E83A]"
              style={{ fontStyle: "italic", fontWeight: 300 }}
            >
              Covered
            </em>
            .
          </h2>
          <p className="mt-5 max-w-[520px] font-body text-[14px] leading-[1.75] text-white/60">
            Three free resources built for the three most common situations we
            see. Pick the one that fits and we&rsquo;ll get it to you in minutes.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {LEAD_MAGNETS.map((m, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="rounded-[14px] border border-white/10 bg-white/[0.07] p-6"
            >
              <p className="mb-2 font-body text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35">
                {m.audience}
              </p>
              <h3 className="font-display text-[14px] font-bold leading-[1.3] text-white">
                {m.title}
              </h3>
              <p className="mt-2 font-body text-[12px] leading-[1.65] text-white/55">
                {m.desc}
              </p>
              <p className="mt-4 flex items-center gap-2 font-display text-[12px] font-bold text-[#C9E83A]">
                {m.cta}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   09 · FAQ — White bg, accordion
   ================================================================ */
function FaqSection() {
  const { ref, inView } = useAnimateOnScroll();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#909090]">
            Common Questions &middot; Portland Real Estate
          </p>
          <h2 className="font-display text-[clamp(24px,3.5vw,38px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#141414]">
            Questions We Hear
            <br />
            Every{" "}
            <em
              className="font-accent not-italic text-[#2A5430]"
              style={{ fontStyle: "italic", fontWeight: 300 }}
            >
              Day
            </em>
            .
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-[#E0DDD6] last:border-b-0">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left font-display text-[14px] font-bold tracking-[-0.01em] text-[#141414] transition-colors hover:text-[#E8622A]"
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
                <p className="pb-5 font-body text-[13px] leading-[1.7] text-[#505050]">
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
   10 · FINAL CTA — Dark rounded block (#141414)
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
        <h2 className="mx-auto max-w-[600px] font-display text-[clamp(26px,4vw,44px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
          Take Control of Your
          <br />
          <em
            className="font-accent not-italic text-[#C9E83A]"
            style={{ fontStyle: "italic", fontWeight: 300 }}
          >
            Portland
          </em>{" "}
          Real Estate Future.
        </h2>
        <p className="mx-auto mt-4 max-w-[460px] font-body text-[14px] leading-[1.7] text-white/60">
          The right move at the right time can mean tens of thousands of
          dollars. We&rsquo;ve helped Portland families and investors get that
          right for over 20 years. Let&rsquo;s talk about yours.
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
