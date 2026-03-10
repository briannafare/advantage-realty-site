"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Accessibility,
  ShieldCheck,
  Building,
  Brain,
  Phone,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Users,
  TrendingUp,
  RefreshCw,
  ClipboardCheck,
  Search,
  FileCheck,
  Handshake,
  MessageSquareQuote,
} from "lucide-react";
/* ============================================================
   Animation Variants
   ============================================================ */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

/* ============================================================
   Data
   ============================================================ */
const complianceCards = [
  {
    icon: Accessibility,
    title: "ADA Accessibility",
    description:
      "Doorway widths, ramp grading, bathroom grab bars, wheelchair-accessible common areas — all verified against ADA and Oregon Structural Specialty Code standards before you tour.",
  },
  {
    icon: ShieldCheck,
    title: "OAR 411-054 Licensing Compliance",
    description:
      "Oregon's Adult Foster Home and Residential Care Facility rules dictate bedroom size, bathroom ratios, outdoor space, and more. We screen every property against the full checklist.",
  },
  {
    icon: Building,
    title: "Building Code & Fire Safety",
    description:
      "Fire suppression systems, egress windows, commercial kitchen ventilation, occupancy classification — the code gaps that quietly kill care home deals.",
  },
  {
    icon: Brain,
    title: "Memory Care Additional Requirements",
    description:
      "Secured perimeters, wandering prevention systems, sensory-friendly layouts, and specialized safety features for dementia and Alzheimer's care facilities.",
  },
];

const audiences = [
  {
    icon: Users,
    title: "First-Time Operators",
    description:
      "Entering the care home industry? We find properties that meet licensing requirements from day one — no costly retrofits, no inspection surprises.",
  },
  {
    icon: TrendingUp,
    title: "Experienced Operators Expanding",
    description:
      "Adding a second or third home? We source properties in high-demand corridors and negotiate terms that protect your operating margins.",
  },
  {
    icon: RefreshCw,
    title: "Real Estate Investors Entering Care Homes",
    description:
      "Looking for stable returns backed by Oregon's aging population? We identify properties with the right bones for licensing — and the numbers to prove ROI.",
  },
  {
    icon: ClipboardCheck,
    title: "Operators Upgrading",
    description:
      "Outgrowing your current facility? We coordinate the sale of your existing home and acquisition of a larger property — including license transfer timelines.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Specialist Consultation",
    description:
      "We learn your goals, budget, operator experience, and target care model — adult foster home, residential care, or memory care.",
  },
  {
    num: "02",
    title: "Requirements Mapping",
    description:
      "Your needs mapped against OAR 411-054 requirements, local zoning, and ADA standards to create a precise property search profile.",
  },
  {
    num: "03",
    title: "Compliance-First Property Search",
    description:
      "On-market, off-market, and pre-market properties screened for compliance readiness. We only show you homes that can realistically be licensed.",
  },
  {
    num: "04",
    title: "ADA & Code Review",
    description:
      "Building inspections, code compliance review, licensing feasibility assessment, and financial modeling before you commit.",
  },
  {
    num: "05",
    title: "Acquisition Through Closing",
    description:
      "Offer negotiation, contract management, and coordination with your licensing consultant, contractor, and lender through closing day.",
  },
];

const faqs = [
  {
    question: "What Oregon regulations apply to purchasing a care home property?",
    answer:
      "Adult care homes in Oregon are governed by OAR 411-054 (Adult Foster Homes) and OAR 411-050 (Residential Care and Assisted Living Facilities). These rules specify physical plant requirements including bedroom size, bathroom ratios, accessibility features, fire safety systems, and outdoor space. We screen every property against these requirements before recommending it.",
  },
  {
    question: "Can I convert a regular residential property into a licensed care home?",
    answer:
      "Yes, but conversion costs vary dramatically. Key factors include ADA compliance (doorways, ramps, bathrooms), fire suppression system installation, commercial kitchen requirements, and local zoning. Some municipalities in the Portland metro are more conversion-friendly than others — we help you identify the right areas.",
  },
  {
    question: "How long does the care home licensing process take in Oregon?",
    answer:
      "Initial licensing through the Oregon Department of Human Services typically takes 3-6 months, depending on the facility type and inspection readiness. Buying a property that already meets physical requirements significantly shortens this timeline. License transfers for existing homes follow a separate, usually faster process.",
  },
  {
    question: "What's the difference between an Adult Foster Home and a Residential Care Facility?",
    answer:
      "An Adult Foster Home (AFH) serves up to 5 residents in a home-like setting and is licensed under OAR 411-054. A Residential Care Facility (RCF) serves 6 or more residents and falls under OAR 411-050 with stricter physical plant and staffing requirements. The property requirements differ significantly — we help you choose the model that matches your investment goals.",
  },
  {
    question: "Does Advantage Realty help with the licensing process itself?",
    answer:
      "We focus on the real estate side — finding compliant properties, negotiating acquisitions, and coordinating due diligence. For licensing, we connect you with trusted Oregon licensing consultants who specialize in DHS applications. Our job is to make sure the property you buy doesn't create licensing roadblocks.",
  },
  {
    question: "What areas in Portland are best for care home investment?",
    answer:
      "Location suitability depends on zoning, neighborhood demographics, proximity to medical facilities, and local demand for care services. Some Portland-area municipalities have more favorable zoning for care homes than others. During your consultation, we'll walk you through the areas that align with your care model and budget.",
  },
];

/* ============================================================
   FAQ Accordion Item
   ============================================================ */
function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="border border-[#E5E7EB] rounded-xl overflow-hidden bg-white"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-semibold text-[#111827] text-lg pr-4">{question}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[#2563EB]" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <p className="text-[#6B7280] leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ============================================================
   Page Component
   ============================================================ */
export default function CareHomeInvestmentPage() {
  return (
    <main className="overflow-hidden">
      {/* ──────────────────────────────────────────────────────────
          HERO — Split layout
          ────────────────────────────────────────────────────────── */}
      <section className="bg-[#FFFFFF] py-20 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
          >
            {/* Left — Copy */}
            <div className="max-w-xl">
              <motion.span
                variants={fadeUp}
                custom={0}
                className="inline-block bg-[#2563EB]/8 text-[#2563EB] font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
              >
                Portland Care Home Specialists
              </motion.span>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl text-[#111827] mb-6 leading-[1.1]"
              >
                Care Home Investment in Portland —{" "}
                <span className="text-[#2563EB]">Done Right</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-lg md:text-xl text-[#6B7280] mb-4 leading-relaxed"
              >
                Finding a residential care facility property isn&apos;t hard. Finding one that
                passes Oregon&apos;s licensing inspection on the first try — that&apos;s where
                most investors lose time, money, and momentum.
              </motion.p>

              <motion.p
                variants={fadeUp}
                custom={3}
                className="text-lg md:text-xl text-[#374151] font-medium mb-10"
              >
                You don&apos;t have to.
              </motion.p>

              <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-4">
                <Link
                  href="/contact?interest=Care+Home"
                  className="inline-flex items-center gap-2 bg-[#84CC16] text-[#111827] font-semibold px-8 py-4 rounded-lg hover:bg-[#65A30D] transition-colors shadow-sm"
                >
                  Schedule a Care Home Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.p
                variants={fadeUp}
                custom={5}
                className="mt-3 text-sm text-[#6B7280]"
              >
                Talk to a specialist — not a generalist.
              </motion.p>
            </div>

            {/* Right — Image */}
            <motion.div
              variants={scaleIn}
              custom={2}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-[#2563EB]/10"
            >
              <Image
                src="/images/paper-cutout-care-home.png"
                alt="Paper cut-out illustration of an Oregon care home property"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Subtle overlay gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/20 via-transparent to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          PROBLEM — Why "Any Agent" Won't Work
          ────────────────────────────────────────────────────────── */}
      <section className="bg-[#FFFFFF] py-20 md:py-28 border-t border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-[#2563EB] font-semibold tracking-widest uppercase text-sm mb-4"
            >
              The Problem
            </motion.p>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl text-[#111827] mb-8"
            >
              Why &ldquo;Any Agent&rdquo; Won&apos;t Work for Care Home Investment
            </motion.h2>

            <motion.div variants={fadeUp} custom={2} className="space-y-6">
              <p className="text-lg text-[#374151] leading-relaxed">
                Oregon Administrative Rules OAR 411-054 aren&apos;t suggestions — they&apos;re
                the line between a licensed care facility and a property you can&apos;t operate.
                Bedroom square footage minimums. Bathroom-to-resident ratios. Hallway widths down
                to the inch. Fire suppression zones that differ by occupancy count. ADA accessibility
                requirements that go far beyond a ramp at the front door.
              </p>
              <p className="text-lg text-[#374151] leading-relaxed">
                A general residential agent doesn&apos;t know these rules exist — let alone how to
                evaluate a property against them. The result? Investors buy homes that look perfect
                on paper, then spend $30,000-$80,000 on retrofits. Or worse: they discover mid-renovation
                that the property can&apos;t meet code at any cost, and the deal is dead.
              </p>
              <p className="text-lg text-[#374151] leading-relaxed">
                With 16+ years specializing in care home real estate, we evaluate properties
                through a compliance lens first, deal terms second. You never waste money on a
                home that can&apos;t be licensed.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          COMPLIANCE — Oregon Requirements Cards
          ────────────────────────────────────────────────────────── */}
      <section className="bg-[#F3F4F6] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="text-[#2563EB] font-semibold tracking-widest uppercase text-sm mb-4"
            >
              Compliance Categories
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl text-[#111827] mb-4"
            >
              Oregon Care Home Requirements We Navigate for You
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {complianceCards.map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                custom={i}
                className="bg-white rounded-xl border border-[#E5E7EB] p-8 hover:shadow-lg hover:shadow-[#2563EB]/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/8 flex items-center justify-center mb-5">
                  <card.icon className="w-6 h-6 text-[#2563EB]" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-xl text-[#111827] mb-3">
                  {card.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-sm text-[#6B7280] mt-8"
          >
            Requirements per Oregon Administrative Rules, OAR 411-054-0200
          </motion.p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          WHO IT'S FOR — Audience Cards with lime left border
          ────────────────────────────────────────────────────────── */}
      <section className="bg-[#FFFFFF] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="text-[#84CC16] font-semibold tracking-widest uppercase text-sm mb-4"
            >
              Who This Is For
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl text-[#111827]"
            >
              Whether You&apos;re Opening Your First Facility or Your Fifth
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {audiences.map((a, i) => (
              <motion.div
                key={a.title}
                variants={fadeUp}
                custom={i}
                className="bg-[#F9FAFB] rounded-xl border border-[#E5E7EB] p-8 border-l-4 border-l-[#84CC16] hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#84CC16]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <a.icon className="w-5 h-5 text-[#65A30D]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#111827] mb-2">{a.title}</h3>
                    <p className="text-[#6B7280] leading-relaxed">{a.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          PROCESS — Dark section with numbered timeline
          ────────────────────────────────────────────────────────── */}
      <section className="bg-[#111827] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-[#84CC16] font-semibold tracking-widest uppercase text-sm mb-4"
            >
              Our 5-Step Process
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl text-white mb-4"
            >
              From First Call to Closing Day
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-white/60 max-w-2xl mx-auto"
            >
              A compliance-first approach that protects your investment at every step.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="relative max-w-3xl mx-auto"
          >
            {/* Vertical line */}
            <div className="absolute left-[27px] top-4 bottom-4 w-px bg-[#374151]" />

            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                custom={i}
                className="relative pl-20 pb-14 last:pb-0"
              >
                {/* Number circle */}
                <div className="absolute left-0 top-0 w-[54px] h-[54px] rounded-full bg-[#1F2937] border-2 border-[#2563EB] flex items-center justify-center z-10">
                  <span className="font-bold text-sm text-[#93C5FD]">{step.num}</span>
                </div>
                <h3 className="font-bold text-xl text-white mb-2 pt-3">{step.title}</h3>
                <p className="text-white/60 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          TESTIMONIAL — Large lime quotation marks
          ────────────────────────────────────────────────────────── */}
      <section className="bg-[#FFFFFF] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 md:px-8 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-8">
              <MessageSquareQuote className="w-16 h-16 mx-auto text-[#84CC16]" strokeWidth={1} />
            </motion.div>

            <motion.blockquote
              variants={fadeUp}
              className="text-2xl md:text-3xl lg:text-4xl text-[#111827] leading-snug mb-10 font-medium"
            >
              &ldquo;You will be well served with Hunde and Huluka with your real estate needs,
              especially in the adult care business.&rdquo;
            </motion.blockquote>

            <motion.div variants={fadeUp}>
              <p className="font-bold text-[#111827] text-lg">
                Timothy &amp; Tsehay Smith
              </p>
              <p className="text-sm text-[#6B7280] mt-1">
                Care Home Investors, Portland Metro
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          FAQ — Accordion
          ────────────────────────────────────────────────────────── */}
      <section className="bg-[#F3F4F6] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="text-[#2563EB] font-semibold tracking-widest uppercase text-sm mb-4"
            >
              Common Questions
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl text-[#111827]"
            >
              Care Home Investment FAQ
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-4"
          >
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
            ))}
          </motion.div>

          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          FINAL CTA — Blue gradient with lime button
          ────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] py-20 md:py-28 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4" />

        <div className="relative max-w-4xl mx-auto px-5 md:px-8 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl text-white mb-6"
            >
              Ready to Invest in Oregon&apos;s Care Home Market?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Whether you&apos;re buying your first care home or expanding a portfolio,
              we&apos;ll walk you through the compliance landscape and find properties that
              actually work. No guesswork. No costly surprises.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact?interest=Care+Home"
                className="inline-flex items-center gap-2 bg-[#84CC16] text-[#111827] font-semibold px-8 py-4 rounded-lg hover:bg-[#65A30D] transition-colors shadow-lg shadow-black/20"
              >
                Start Your Care Home Search
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+15037937520"
                className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#D9F99D] transition-colors"
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
