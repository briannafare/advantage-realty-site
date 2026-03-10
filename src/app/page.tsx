"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  TrendingUp,
  Heart,
  Building2,
  Users,
  Globe,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Phone,
  Shield,
  Handshake,
} from "lucide-react";

/* ───────────────────────────────────────────
   Animation helpers
   ─────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ───────────────────────────────────────────
   Section 1 — Hero (compact, above-the-fold)
   Paper cut-out illustration — NO old site photos
   ─────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative bg-[#FEFCF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-8 md:py-14 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Copy — left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="flex items-center gap-2 mb-4"
            >
              <span className="inline-block w-8 h-[2px] bg-[#D4A853]" />
              <span className="font-body text-sm tracking-widest uppercase text-[#D4A853] font-semibold">
                Portland Real Estate
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-heading font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.08]"
            >
              Your Family Team,
              <br />
              Your Language,
              <br />
              Your <span className="text-[#D4A853]">Advantage</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-5 text-base md:text-lg text-muted font-body leading-relaxed max-w-lg"
            >
              Huluka &amp; Hunde Abebe — two brothers, three languages, 16+
              years of Portland market expertise. We speak Amharic, Oromo, and
              English so nothing gets lost when everything&rsquo;s on the line.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-6 flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#D4A853] px-6 py-3 font-heading font-bold text-[#0A1628] text-sm hover:bg-[#C49A48] transition-colors"
              >
                Schedule Your Free Consultation
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#0A1628] px-6 py-3 font-heading font-bold text-[#0A1628] text-sm hover:bg-[#0A1628] hover:text-[#F5F0E8] transition-colors"
              >
                Get a Free Property Evaluation
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-5 flex flex-wrap gap-5 text-xs text-muted font-body"
            >
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#D4A853]" />
                Licensed Oregon Brokers
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#D4A853]" />
                Amharic · Oromo · English
              </span>
              <span className="flex items-center gap-1.5">
                <Handshake className="w-3.5 h-3.5 text-[#D4A853]" />
                Family-Run Team
              </span>
            </motion.div>
          </motion.div>

          {/* Hero image — paper cut-out illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Layered paper-frame effect */}
            <div className="relative">
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-[#D4A853]/15" />
              <div className="absolute -bottom-1.5 -right-1.5 w-full h-full rounded-2xl bg-[#0A1628]/8" />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/paper-cutout-hero-home.png"
                  alt="Paper cut-out illustration of a warm Portland Oregon craftsman home — Advantage Realty"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 2 — Social Proof Bar
   ─────────────────────────────────────────── */
function SocialProofBar() {
  const stats = [
    { value: "16+", label: "Years Portland\nExperience" },
    { value: "3", label: "Languages\nSpoken Fluently" },
    { value: "11+", label: "Communities\nServed" },
    { value: "1", label: "Specialized Care\nHome Niche" },
  ];

  return (
    <section className="relative bg-[#0A1628] py-12 md:py-16 overflow-hidden">
      <div className="grain-overlay" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <span className="block text-4xl md:text-5xl font-heading font-bold text-[#D4A853]">
                {value}
              </span>
              <span className="mt-2 block text-sm text-[#F5F0E8]/80 font-body whitespace-pre-line leading-snug">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 3 — Problem Agitation
   ─────────────────────────────────────────── */
function ProblemAgitation() {
  return (
    <section className="bg-[#FEFCF8] py-20 md:py-28 habesha-pattern">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="font-heading font-bold tracking-tight text-3xl md:text-5xl text-foreground"
          >
            Portland&rsquo;s Market Moves Fast.{" "}
            <span className="text-[#D4A853]">Your Agent Should Too.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-8 text-lg md:text-xl text-muted font-body leading-relaxed"
          >
            Portland&rsquo;s median home price sits at $525,000 — and in hot
            neighborhoods, properties move in days. If your agent doesn&rsquo;t
            understand Clackamas County tax rates or how to navigate a
            multiple-offer situation — you&rsquo;re already behind.
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 text-lg md:text-xl text-muted font-body leading-relaxed"
          >
            And if you&rsquo;re navigating all of that in your second language?
            Mistranslated contract terms and cultural disconnects don&rsquo;t
            just slow things down — they cost real money. You deserve a team that
            speaks your language, knows your market, and fights for your outcome.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 4 — Services (with paper cut-out neighborhood)
   ─────────────────────────────────────────── */
function ServicesOverview() {
  const services = [
    {
      icon: Home,
      title: "Residential Buying",
      description:
        "First-time buyer or upgrading — we guide you through every step with full-language support, from pre-approval to keys in hand.",
      href: "/buy",
    },
    {
      icon: TrendingUp,
      title: "Home Selling",
      description:
        "Strategic pricing, professional staging guidance, and aggressive marketing to get top dollar for your Portland-area property.",
      href: "/sell",
    },
    {
      icon: Building2,
      title: "Care Home Investment",
      description:
        "Our specialized niche — we help investors find, evaluate, and close on adult care home properties across the metro.",
      href: "/care-home-investment",
    },
    {
      icon: Users,
      title: "Multilingual Support",
      description:
        "Every document, every negotiation, every conversation — in Amharic, Oromo, or English. No translator needed.",
      href: "/about",
    },
    {
      icon: Heart,
      title: "Relocation Services",
      description:
        "Moving to Portland from out of state or another country? We handle the local knowledge so you can focus on the transition.",
      href: "/contact",
    },
    {
      icon: Globe,
      title: "Market Analysis",
      description:
        "Complimentary property valuations and neighborhood market reports for Portland, Milwaukie, Oregon City, and beyond.",
      href: "/contact",
    },
  ];

  return (
    <section className="bg-[#FEFCF8] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="font-heading font-bold tracking-tight text-3xl md:text-5xl text-foreground"
          >
            How We Help You <span className="text-[#D4A853]">Win</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-4 text-lg text-muted font-body max-w-2xl mx-auto"
          >
            Six ways the Abebe family puts your real estate goals first — in the
            language you think in.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {services.map(({ icon: Icon, title, description, href }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative bg-white rounded-2xl border border-border p-8 hover:shadow-lg hover:border-[#D4A853]/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#D4A853]/10 flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-[#D4A853]" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground">
                {title}
              </h3>
              <p className="mt-3 text-muted font-body text-[15px] leading-relaxed">
                {description}
              </p>
              <Link
                href={href}
                className="mt-5 inline-flex items-center text-sm font-heading font-bold text-[#D4A853] group-hover:underline"
              >
                Learn more →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 5 — Why Advantage (paper cut-out Portland skyline)
   ─────────────────────────────────────────── */
function WhyAdvantage() {
  const benefits = [
    {
      title: "Family-Run, Not Corporate",
      description:
        "You work directly with Huluka and Hunde — no hand-offs to junior agents, no call centers, no runaround.",
    },
    {
      title: "Trilingual From Day One",
      description:
        "Amharic, Oromo, and English fluency means nothing gets lost in translation — contracts, negotiations, or conversations.",
    },
    {
      title: "Portland Born & Raised",
      description:
        "16+ years of Portland market experience across 11+ communities from inner SE to Oregon City.",
    },
    {
      title: "Care Home Specialists",
      description:
        "A rare niche: we understand adult care home regulations, licensing, and investment opportunities most agents overlook.",
    },
  ];

  return (
    <section className="bg-[#0A1628] text-[#F5F0E8] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="font-heading font-bold tracking-tight text-3xl md:text-5xl"
            >
              Why Portland Families Choose{" "}
              <span className="text-[#D4A853]">Advantage</span>
            </motion.h2>

            <div className="mt-10 space-y-8">
              {benefits.map(({ title, description }, i) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  custom={i + 1}
                  className="flex gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#D4A853] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-bold text-lg">{title}</h3>
                    <p className="mt-1 text-[#F5F0E8]/70 font-body text-[15px] leading-relaxed">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Paper cut-out Portland skyline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden aspect-[4/3] relative">
              <Image
                src="/images/paper-cutout-portland-skyline.png"
                alt="Paper cut-out illustration of Portland Oregon skyline with bridges and Mt Hood"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 6 — Testimonials (REAL from brief.json)
   ─────────────────────────────────────────── */
function Testimonials() {
  const testimonials = [
    {
      quote:
        "Huluka and his team are very organized and have a good understanding of what a buyer\u2019s needs are in the home buying process. The process went efficiently and effectively with inspections, appraisal, and escrow. I\u2019m 100% satisfied with the home I purchased, and the fantastic deal Huluka helped me get.",
      author: "Tilahun S.",
      role: "Homebuyer, Portland Metro",
    },
    {
      quote:
        "Hunde assisted me in finding the perfect home, and I couldn\u2019t be happier with my experience dealing with him. Look no farther than Hunde if you want a real estate professional that will go above and beyond to achieve your goals.",
      author: "Guteta",
      role: "Homebuyer, Portland Metro",
    },
    {
      quote:
        "You will be well served with Hunde and Huluka with your real estate needs, especially in the adult care business.",
      author: "Timothy & Tsehay Smith",
      role: "Care Home Investors",
    },
    {
      quote:
        "Tadesse Haile Hunde knows exactly what you want once you consult him what kind of home and what price range you want to invest. I am satisfied on the property I bought.",
      author: "Verified Google Reviewer",
      role: "Buyer / Investor",
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-[#FEFCF8] py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-5 md:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="text-center"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="font-heading font-bold tracking-tight text-3xl md:text-5xl text-foreground"
          >
            What Our <span className="text-[#D4A853]">Clients</span> Say
          </motion.h2>
        </motion.div>

        <motion.div
          key={current}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mt-14 text-center"
        >
          <blockquote className="font-accent text-xl md:text-2xl text-foreground leading-snug italic">
            &ldquo;{testimonials[current].quote}&rdquo;
          </blockquote>
          <p className="mt-6 font-heading font-bold text-[#D4A853]">
            {testimonials[current].author}
          </p>
          <p className="text-sm text-muted font-body">
            {testimonials[current].role}
          </p>
        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() =>
              setCurrent((p) => (p === 0 ? testimonials.length - 1 : p - 1))
            }
            aria-label="Previous testimonial"
            className="p-2 rounded-full border border-border hover:border-[#D4A853] transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-[#D4A853]" : "bg-border"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() =>
              setCurrent((p) => (p === testimonials.length - 1 ? 0 : p + 1))
            }
            aria-label="Next testimonial"
            className="p-2 rounded-full border border-border hover:border-[#D4A853] transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 7 — Market Snapshot
   ─────────────────────────────────────────── */
function MarketSnapshot() {
  const marketStats = [
    { value: "$525,000", label: "Portland Metro\nMedian Home Price" },
    { value: "$549,900", label: "Clackamas County\nMedian Home Price" },
    { value: "28", label: "Average Days\non Market" },
    { value: "+4.2%", label: "Year-Over-Year\nAppreciation" },
  ];

  return (
    <section className="bg-[#FEFCF8] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="font-heading font-bold tracking-tight text-3xl md:text-5xl text-foreground"
          >
            Portland Market <span className="text-[#D4A853]">Snapshot</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-4 text-lg text-muted font-body max-w-2xl mx-auto"
          >
            Real numbers. Real insight. Know where the market stands before you
            make your move.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {marketStats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="bg-white rounded-2xl border border-border p-6 md:p-8 text-center"
            >
              <span className="block text-3xl md:text-4xl font-heading font-bold text-[#0A1628]">
                {value}
              </span>
              <span className="mt-2 block text-sm text-muted font-body whitespace-pre-line leading-snug">
                {label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center text-muted font-body text-sm max-w-2xl mx-auto leading-relaxed"
        >
          Clackamas County remains one of the best-value corridors in the metro —
          offering more space, lower property taxes than Multnomah, and quick
          access to downtown Portland. That&rsquo;s where our 16+ years of local
          experience give you an edge.
        </motion.p>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 8 — Multilingual CTA
   ─────────────────────────────────────────── */
function MultilingualCTA() {
  return (
    <section className="relative bg-[#0A1628] text-[#F5F0E8] py-20 md:py-28 overflow-hidden">
      <div className="grain-overlay" />

      <div className="relative max-w-3xl mx-auto px-5 md:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="font-heading font-bold tracking-tight text-3xl md:text-5xl"
          >
            Your Language. Your Home.{" "}
            <span className="text-[#D4A853]">Your Terms.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-6 font-accent text-4xl md:text-5xl text-[#D4A853]"
          >
            ንግግር ይጀምሩ
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-4 text-lg text-[#F5F0E8]/70 font-body"
          >
            &ldquo;Start the conversation&rdquo; — in Amharic, Oromo, or
            English. We&rsquo;re ready when you are.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#D4A853] px-8 py-4 font-heading font-bold text-[#0A1628] text-lg hover:bg-[#C49A48] transition-colors"
            >
              Schedule Your Free Consultation
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 9 — FAQ
   ─────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "Do I really get to work directly with Huluka and Hunde?",
      a: "Yes \u2014 always. We\u2019re a family team, not a brokerage that passes you off to a junior agent. Huluka and Hunde personally handle every transaction from first consultation to closing day.",
    },
    {
      q: "What languages do you conduct business in?",
      a: "We\u2019re fluent in Amharic, Oromo, and English. Every document review, negotiation, and conversation can happen in the language you\u2019re most comfortable with \u2014 no interpreters needed.",
    },
    {
      q: "What areas of Portland do you cover?",
      a: "We serve 11+ communities across the Portland metro: inner SE and NE Portland, Milwaukie, Gladstone, Oregon City, West Linn, Lake Oswego, Happy Valley, Clackamas, Tigard, and Beaverton.",
    },
    {
      q: "How is the Portland real estate market right now?",
      a: "Portland\u2019s median home price is around $525,000 with properties averaging 28 days on market and +4.2% year-over-year appreciation. Clackamas County offers strong value at a $549,900 median. We provide a free market analysis specific to your neighborhood.",
    },
    {
      q: "What makes you different from a big brokerage?",
      a: "Three things: we speak your language (literally), we specialize in niches big firms ignore (like care home investments), and you\u2019ll never be a number \u2014 our family reputation is on the line with every deal.",
    },
    {
      q: "Can you help with care home property investments?",
      a: "Absolutely \u2014 it\u2019s one of our specialties. We understand adult care home licensing requirements, zoning considerations, and the investment economics that most residential agents don\u2019t.",
    },
    {
      q: "How much does a consultation cost?",
      a: "Nothing. Your first consultation is completely free with no obligation. We\u2019ll discuss your goals, timeline, and budget, and give you an honest assessment of your options.",
    },
  ];

  return (
    <section className="bg-[#FEFCF8] py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold tracking-tight text-3xl md:text-5xl text-foreground text-center mb-14"
        >
          Frequently Asked <span className="text-[#D4A853]">Questions</span>
        </motion.h2>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-heading font-bold text-foreground hover:bg-[#F5F0E8]/50 transition-colors"
              >
                <span>{q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#D4A853] shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: open === i ? "auto" : 0,
                  opacity: open === i ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-muted font-body leading-relaxed">
                  {a}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 10 — Final CTA
   ─────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section id="contact" className="bg-[#FEFCF8] py-20 md:py-28 habesha-pattern">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="font-heading font-bold tracking-tight text-3xl md:text-5xl text-foreground"
          >
            Ready to Make Your{" "}
            <span className="text-[#D4A853]">Move?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-6 text-lg md:text-xl text-muted font-body leading-relaxed"
          >
            Whether you&rsquo;re buying your first home, selling a property, or
            exploring care home investments — your free consultation starts with
            a conversation. In your language, on your terms.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a
              href="tel:+15037937520"
              className="inline-flex items-center justify-center rounded-full bg-[#D4A853] px-7 py-3.5 font-heading font-bold text-[#0A1628] text-base hover:bg-[#C49A48] transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (503) 793-7520
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-foreground px-7 py-3.5 font-heading font-bold text-foreground text-base hover:bg-foreground hover:text-[#FEFCF8] transition-colors"
            >
              Get a Free Property Evaluation
            </Link>
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-8 font-body text-muted"
          >
            Or email directly:{" "}
            <a
              href="mailto:huluka@advantageor.com"
              className="font-heading font-bold text-[#D4A853] hover:underline"
            >
              huluka@advantageor.com
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Page Export
   ─────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <SocialProofBar />
      <ProblemAgitation />
      <ServicesOverview />
      <WhyAdvantage />
      <Testimonials />
      <MarketSnapshot />
      <MultilingualCTA />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
