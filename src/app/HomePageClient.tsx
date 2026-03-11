"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ----------------------------------------------------------------
   Animation helpers
   ---------------------------------------------------------------- */
function useAnimateOnScroll(threshold = 0.15) {
  const ref = useRef(null);
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

/* Custom inline SVG icons matching icons-advantage-realty.svg */
function IconHome() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8 L6 18 L6 34 L14 34 L14 24 L26 24 L26 34 L34 34 L34 18 Z" stroke="#2A5430" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="25" y="8" width="5" height="8" rx="1" stroke="#2A5430" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function IconCareHome() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 34 L8 14 L20 6 L32 14 L32 34" stroke="#2A5430" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="16" y="22" width="8" height="12" rx="1.5" stroke="#2A5430" strokeWidth="2"/>
      <rect x="10" y="16" width="6" height="5" rx="1" stroke="#2A5430" strokeWidth="1.5"/>
      <rect x="24" y="16" width="6" height="5" rx="1" stroke="#2A5430" strokeWidth="1.5"/>
      <circle cx="32" cy="10" r="3.5" fill="#C9E83A"/>
    </svg>
  );
}

function IconInvest() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline points="6,32 14,22 22,26 30,10 36,14" stroke="#5BB5D8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="36" cy="14" r="3" fill="#5BB5D8"/>
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="14" stroke="#2A5430" strokeWidth="2.5"/>
      <ellipse cx="20" cy="20" rx="7" ry="14" stroke="#2A5430" strokeWidth="1.5"/>
      <line x1="6" y1="20" x2="34" y2="20" stroke="#2A5430" strokeWidth="1.5"/>
      <line x1="8" y1="12" x2="32" y2="12" stroke="#2A5430" strokeWidth="1" opacity="0.5"/>
      <line x1="8" y1="28" x2="32" y2="28" stroke="#2A5430" strokeWidth="1" opacity="0.5"/>
    </svg>
  );
}

const FEATURES = [
  {
    icon: IconHome,
    iconBg: "bg-[#EDF7E8]",
    title: "Deep Portland Market Knowledge",
    body: "We\u2019ve been tracking Portland\u2019s neighborhoods for 20+ years. Not just the listings \u2014 the micro-trends, the streets, the schools, and the shift before it shows up on Zillow.",
  },
  {
    icon: IconCareHome,
    iconBg: "bg-[#EDF7E8]",
    title: "Care Home Property Specialists",
    body: "Portland\u2019s only real estate team with dedicated ADA consulting for residential care home properties. Most agents won\u2019t touch this. We built a practice around it.",
  },
  {
    icon: IconInvest,
    iconBg: "bg-[#EBF6FC]",
    title: "Buy, Sell, and Invest \u2014 One Roof",
    body: "First-time buyer. Homeowner selling. Investor structuring a 1031 Exchange. Whatever your situation, there\u2019s a specialist on this team who\u2019s handled it.",
  },
  {
    icon: IconGlobe,
    iconBg: "bg-[#EDF7E8]",
    title: "We Speak Your Language \u2014 Literally",
    body: "We work with clients in English, Oromo, and Amharic. Clear communication isn\u2019t a nice-to-have when you\u2019re signing a 30-year mortgage.",
  },
];

const TEAM = [
  {
    name: "Hunde Abebe",
    role: "Principal Broker",
    phone: "(503) 449-4362",
    email: "hunde@advantageor.com",
    photo: "/images/team/hunde-abebe.jpg",
    bio: "Hunde\u2019s clients describe him as the agent who \u201cknows exactly what you want once you consult him.\u201d As Principal Broker, he leads the team with patience, precision, and deep knowledge of Portland\u2019s residential market.",
  },
  {
    name: "Huluka Abebe",
    role: "Broker",
    phone: "(503) 793-7520",
    email: "huluka@advantageor.com",
    photo: "/images/team/huluka-abebe.jpg",
    bio: "Huluka has been working Portland\u2019s real estate market for over 20 years. He built Advantage Realty on a simple idea: clients should leave feeling like they won. His specialty in care home properties and investment real estate makes him one of the most sought-after brokers in the city.",
  },
  {
    name: "Jenni Anderson",
    role: "Broker",
    phone: "(503) 508-8779",
    email: "jenni@advantageor.com",
    photo: "/images/team/jenni-anderson.png",
    bio: "Jenni brings a finance background that goes beyond the transaction. Her expertise in 1031 Exchange transactions makes her an essential partner for investors looking to build a Portland portfolio without the tax hit.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Tadesse Haile Hunde knows exactly what you want once you consult him. He found us a property that we never thought we could own at a price that was perfect for us.",
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

const LEAD_MAGNETS = [
  {
    audience: "For Buyers",
    title: "Portland Neighborhood Insider Guide",
    desc: "Which neighborhoods are actually up-and-coming. Which ones are overpriced. 20 years of Portland street knowledge \u2014 in a free PDF.",
    cta: "Get the Free Guide",
  },
  {
    audience: "For Sellers",
    title: "Free Home Valuation",
    desc: "Not a Zestimate. A real comparative market analysis from a Portland broker who knows your neighborhood.",
    cta: "Request Free Valuation",
  },
  {
    audience: "For Investors",
    title: "Oregon Care Home Investor Checklist",
    desc: "ADA requirements. Zoning considerations. Licensing pathways. The only free checklist built for Portland care home investing.",
    cta: "Get the Free Checklist",
  },
];

const FAQS = [
  {
    question:
      "What\u2019s the best neighborhood to buy a home in Portland in 2026?",
    answer:
      "The best Portland neighborhood depends on your budget, commute, and priorities \u2014 but right now, St. Johns, Lents, and Woodstock are showing strong value before they hit mainstream attention. Sellwood and Alberta are more established but still competitive. Download our free Portland Neighborhood Insider Guide or schedule a call and we\u2019ll walk you through it.",
  },
  {
    question: "How long does it take to buy a home in Portland?",
    answer:
      "From offer accepted to keys in hand, Portland closings typically take 30\u201345 days once you\u2019re under contract. Finding the right home can take a few weeks to a few months. The most important thing is to get pre-approved before you start looking.",
  },
  {
    question:
      "What makes Advantage Realty different from other Portland real estate agents?",
    answer:
      "Three things. First, 20+ years in this specific market. Second, genuine specialization: we\u2019re the only Portland brokerage with dedicated ADA consulting for care home property transactions. Third, we\u2019re a small team by choice \u2014 same people from consultation to closing.",
  },
  {
    question:
      "Can Advantage Realty help with care home or adult foster care property investments?",
    answer:
      "Yes \u2014 this is one of our core specialties. We work with buyers and investors purchasing, converting, or scaling residential care home properties in Portland and the surrounding metro area, including ADA compliance consulting.",
  },
  {
    question:
      "Does Advantage Realty work with buyers and sellers who speak Oromo or Amharic?",
    answer:
      "Yes. Our team includes brokers who work fluently in English, Oromo, and Amharic. We believe every client deserves to understand exactly what they\u2019re signing, in the language they\u2019re most comfortable with.",
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
   01 · HERO — Centered text + scroll-reveal image (Rillo style)
   ================================================================ */
function HeroSection() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Image starts at ~70% width and scales to 100% as user scrolls
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);
  const imageRadius = useTransform(scrollYProgress, [0, 0.5], [28, 0]);
  const imageY = useTransform(scrollYProgress, [0, 0.5], [0, -40]);

  return (
    <section ref={heroRef} className="relative bg-white pb-0">
      {/* Text block — centered, above fold */}
      <div className="mx-auto max-w-4xl px-5 pb-8 pt-6 text-center sm:px-6 sm:pb-12 sm:pt-10 lg:pt-16">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          {/* Welcome badge */}
          <motion.div variants={fadeUp} custom={0}>
            <span className="mb-4 inline-flex items-center gap-[7px] rounded-full border border-[#E0DDD6] bg-white px-[14px] py-[5px] font-body text-[10px] font-medium text-[#505050] sm:mb-6 sm:text-xs">
              <span className="h-[7px] w-[7px] rounded-full bg-[#C9E83A]" />
              Portland&rsquo;s Most Trusted Real Estate Team
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="mt-3 font-display text-[32px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#141414] sm:mt-4 sm:text-[clamp(38px,7vw,72px)] sm:leading-[1.0]"
          >
            Portland Home Buyers and Sellers need an{" "}
            <em
              className="font-accent not-italic text-[#2A5430]"
              style={{ fontStyle: "italic", fontWeight: 300 }}
            >
              Advantage
            </em>
            .<br />
            That&rsquo;s us.
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mx-auto mt-4 max-w-xl font-body text-[15px] leading-[1.7] text-[#505050] sm:mt-6 sm:text-[17px] sm:leading-[1.75]"
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
            className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="default" size="lg" className="w-full sm:w-auto">
                Schedule a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="#lead-magnets" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Get the Neighborhood Guide
              </Button>
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-body text-[10px] text-[#909090] sm:mt-8 sm:text-xs"
          >
            {HERO_TRUST.map((item, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="text-[#E0DDD6]">&middot;</span>}
                <span>{item}</span>
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll-reveal hero image — top 30% visible above fold */}
      <div className="relative mx-auto max-w-7xl overflow-hidden px-3 sm:px-6">
        <motion.div
          style={{
            scale: imageScale,
            borderRadius: imageRadius,
            y: imageY,
          }}
          className="relative mx-auto aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[16/8]"
        >
          <Image
            src="/images/img-hero-portland.jpg"
            alt="Portland residential neighborhood at golden hour"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
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
    <section ref={ref} className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
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
    <section ref={ref} className="bg-[#F0F7DC] py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
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
          <p className="mx-auto mt-5 max-w-xl font-body text-[15px] leading-[1.75] text-[#505050]">
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
              <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-[14px] ${f.iconBg}`}>
                <f.icon />
              </div>
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
function TeamCard({
  t,
  i,
}: {
  t: (typeof TEAM)[number];
  i: number;
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const [canHover, setCanHover] = useState(true);

  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  // Desktop: always grayscale, color on hover
  // Mobile: grayscale → color when scrolled into view
  const showColor = !canHover && isInView;

  return (
    <motion.div
      ref={cardRef}
      variants={fadeUp}
      custom={i}
      className="group overflow-hidden rounded-[14px] border border-[#E0DDD6] bg-white"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={t.photo}
          alt={`${t.name} \u2014 ${t.role} at Advantage Realty LLC`}
          fill
          className={cn(
            "object-cover object-top transition-all duration-700",
            showColor
              ? "grayscale-0"
              : "grayscale group-hover:grayscale-0"
          )}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-display text-[15px] font-extrabold tracking-[-0.01em] text-[#141414]">
          {t.name}
        </h3>
        <p className="mt-1 font-body text-[11px] font-semibold uppercase tracking-[0.04em] text-[#2A5430]">
          {t.role}
        </p>
        <p className="mt-3 font-body text-[13px] leading-[1.65] text-[#505050]">
          {t.bio}
        </p>
        <div className="mt-4 flex flex-col gap-1 font-mono text-[11px] text-[#909090] sm:flex-row sm:gap-4">
          <a href={`mailto:${t.email}`} className="hover:text-[#2A5430] transition-colors">{t.email}</a>
          <a href={`tel:${t.phone.replace(/[^+\d]/g, "")}`} className="hover:text-[#2A5430] transition-colors">{t.phone}</a>
        </div>
      </div>
    </motion.div>
  );
}

function TeamSection() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="bg-white py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
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
          <p className="mx-auto mt-4 max-w-xl font-body text-[15px] leading-[1.75] text-[#505050]">
            Not a big-box brokerage. Not a team you get handed off to. Three
            specialists who built their careers in Portland &mdash; and who
            answer when you call.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TEAM.map((t, i) => (
            <TeamCard key={i} t={t} i={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   05 · WE BELIEVE — Dark green section + handshake image
   ================================================================ */
function WeBelieveSection() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="bg-[#1D3B22] py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          {/* Text */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={stagger}
            className="flex-1"
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
              className="font-display text-[28px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white sm:text-[clamp(28px,4vw,44px)] sm:leading-[1.05]"
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
              className="mt-6 max-w-[520px] space-y-5 font-body text-[14px] leading-[1.75] text-white/60"
            >
              <p>
                Not overwhelm you. Not trap you in a process you don&rsquo;t
                understand, with an agent you can&rsquo;t reach, making a
                decision you&rsquo;re not confident about.
              </p>
              <p>
                You&rsquo;re buying or selling one of the biggest assets
                you&rsquo;ll ever own. You deserve straight answers, real
                expertise, and a team that&rsquo;s rooting for your outcome
                &mdash; not their commission check.
              </p>
            </motion.div>

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

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
              <Image
                src="/images/img-handshake.jpg"
                alt="Real estate closing handshake"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
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
    <section ref={ref} className="bg-white py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
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
              <div className="mb-3 text-[13px] tracking-[2px] text-[#C9E83A]">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://share.google/8FMAL8sX47XtEb0Im"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[10px] font-display text-[13px] font-bold tracking-[-0.01em] text-[#141414] transition-colors hover:text-[#2A5430]"
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
   07 · MARKET DATA — Blue surface + SVG chart
   ================================================================ */
function MarketDataSection() {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="bg-[#EBF6FC] py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
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
          <p className="mx-auto mt-5 max-w-xl font-body text-[14px] leading-[1.75] text-[#505050]">
            Portland&rsquo;s real estate market has shifted more in the past
            four years than in the previous decade. Here&rsquo;s where things
            stand.
          </p>
        </motion.div>

        {/* Animated SVG chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/chart-market-data.svg"
            alt="Portland real estate market data chart showing trends from 2020 to 2025"
            className="w-full rounded-[20px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link href="#lead-magnets">
            <Button variant="default" size="lg">
              Download the Free Neighborhood Guide
              <ArrowRight className="h-4 w-4" />
            </Button>
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
    <section
      id="lead-magnets"
      ref={ref}
      className="bg-[#1D3B22] py-14 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
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
          <p className="mx-auto mt-5 max-w-lg font-body text-[14px] leading-[1.75] text-white/60">
            Three free resources built for the three most common situations we
            see. Pick the one that fits.
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
                {m.cta} &rarr;
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
    <section ref={ref} className="bg-white py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
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
                className="flex w-full items-center justify-between py-5 text-left font-display text-[14px] font-bold tracking-[-0.01em] text-[#141414] transition-colors hover:text-[#2A5430]"
                aria-expanded={openIndex === i}
              >
                <span className="pr-4">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="flex-shrink-0 text-[#C9E83A]"
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
    <section ref={ref} className="bg-[#F8F6F1] px-4 py-12 sm:px-6 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[22px] bg-[#141414] px-6 py-14 text-center sm:px-8 sm:py-20 lg:px-16"
      >
        <h2 className="mx-auto max-w-[600px] font-display text-[clamp(26px,4vw,44px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
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
            <Button variant="outlineWhite" size="lg">
              Schedule a Free Consultation
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
