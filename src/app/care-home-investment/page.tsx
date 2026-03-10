"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Accessibility,
  ShieldCheck,
  Building,
  HeartPulse,
  Brain,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

/* ============================================================
   Animation Variants
   ============================================================ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ============================================================
   Data
   ============================================================ */
const requirementCards = [
  {
    icon: Accessibility,
    title: "ADA Accessibility",
    description:
      "Doorway widths, ramp grading, bathroom grab bars, and wheelchair-accessible common areas — all must meet ADA and Oregon Structural Specialty Code standards before licensing.",
  },
  {
    icon: ShieldCheck,
    title: "Oregon Licensing",
    description:
      "OAR 411-054 governs Adult Foster Home and Residential Care Facility licensing. We verify properties against every requirement before you make an offer.",
  },
  {
    icon: Building,
    title: "Building Code",
    description:
      "Fire suppression systems, egress windows, commercial kitchen ventilation, and occupancy classification — the building code gaps that kill care home deals.",
  },
  {
    icon: HeartPulse,
    title: "Resident Safety",
    description:
      "Emergency call systems, medication storage, smoke/CO detection, and nighttime lighting standards mandated by the Oregon Department of Human Services.",
  },
  {
    icon: Brain,
    title: "Memory Care",
    description:
      "Secured perimeters, wandering prevention, sensory gardens, and specialized layouts for dementia and Alzheimer's care — a growing sub-market with specific physical requirements.",
  },
];

const audiences = [
  {
    title: "First-Time Operators",
    description:
      "Entering the care home industry for the first time? We find properties that meet licensing requirements from day one — no costly retrofits, no surprises at inspection.",
  },
  {
    title: "Expanding Operators",
    description:
      "Adding a second or third home to your portfolio? We source properties in high-demand corridors and negotiate terms that protect your operating margins.",
  },
  {
    title: "Investors",
    description:
      "Looking for passive income backed by Oregon's aging population? We identify turn-key care homes with established licenses, trained staff, and occupancy history.",
  },
  {
    title: "Upgrading Operators",
    description:
      "Outgrowing your current property? We coordinate the sale of your existing home and acquisition of a larger facility — including license transfer timelines.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We learn your goals, budget, operator experience, and target care model — adult foster home, residential care, or memory care.",
  },
  {
    step: "02",
    title: "Requirements Assessment",
    description:
      "We map your needs against OAR 411-054 requirements, local zoning, and ADA standards to create a property search profile.",
  },
  {
    step: "03",
    title: "Property Search",
    description:
      "On-market, off-market, and pre-market properties screened for compliance readiness — we only show you homes that can realistically be licensed.",
  },
  {
    step: "04",
    title: "Due Diligence",
    description:
      "Building inspections, code compliance review, licensing feasibility assessment, and financial modeling before you commit.",
  },
  {
    step: "05",
    title: "Acquisition Support",
    description:
      "Offer negotiation, contract management, and coordination with your licensing consultant, contractor, and lender through closing.",
  },
];

const faqs = [
  {
    question:
      "What Oregon regulations apply to purchasing a care home property?",
    answer:
      "Adult care homes in Oregon are governed by OAR 411-054 (Adult Foster Homes) and OAR 411-050 (Residential Care and Assisted Living Facilities). These rules specify physical plant requirements including bedroom size, bathroom ratios, accessibility features, fire safety systems, and outdoor space. We screen every property against these requirements before recommending it.",
  },
  {
    question:
      "Can I convert a regular residential property into a licensed care home?",
    answer:
      "Yes, but conversion costs vary dramatically. Key factors include ADA compliance (doorways, ramps, bathrooms), fire suppression system installation, commercial kitchen requirements, and local zoning. Some municipalities in Clackamas County are more conversion-friendly than others — we help you identify the right areas.",
  },
  {
    question: "How long does the care home licensing process take in Oregon?",
    answer:
      "Initial licensing through the Oregon Department of Human Services typically takes 3–6 months, depending on the facility type and inspection readiness. Buying a property that already meets physical requirements significantly shortens this timeline. License transfers for existing homes follow a separate, usually faster process.",
  },
  {
    question:
      "What's the difference between an Adult Foster Home and a Residential Care Facility?",
    answer:
      "An Adult Foster Home (AFH) serves up to 5 residents in a home-like setting and is licensed under OAR 411-054. A Residential Care Facility (RCF) serves 6 or more residents and falls under OAR 411-050 with stricter physical plant and staffing requirements. The property requirements differ significantly — we help you choose the model that matches your investment.",
  },
  {
    question:
      "Does Advantage Realty help with the licensing process itself?",
    answer:
      "We focus on the real estate side — finding compliant properties, negotiating acquisitions, and coordinating due diligence. For licensing, we refer you to trusted Oregon licensing consultants who specialize in DHS applications. Our job is to make sure the property you buy doesn't create licensing roadblocks.",
  },
];

/* ============================================================
   Page Component
   ============================================================ */
export default function CareHomeInvestmentPage() {
  return (
    <main>
      {/* ──────────────────────────────────────────────────────────
          SECTION 1 — Hero
          ────────────────────────────────────────────────────────── */}
      <section className="bg-[#FFFFFF] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="inline-block bg-[#F5B800]/10 text-[#F5B800] font-heading font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
            >
              Oregon Care Home Specialists
            </motion.span>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-heading font-bold tracking-tight text-5xl md:text-7xl text-[#0A1628] mb-6"
            >
              Care Home Investment in Portland —{" "}
              <span className="text-[#F5B800]">
                Oregon&apos;s Compliance-Ready Real Estate Experts
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="font-body text-lg md:text-xl text-[#4B5563] mb-10 max-w-3xl"
            >
              Most brokers show you houses. We show you properties that can
              actually be licensed as care homes in Oregon — pre-screened against
              OAR 411-054 requirements, ADA standards, and local building code
              so you invest with confidence, not guesswork.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <Link
                href="/contact?interest=Care+Home"
                className="inline-flex items-center gap-2 bg-[#F5B800] text-[#0A1628] font-heading font-semibold px-8 py-4 rounded-lg hover:bg-[#E0A800] transition-colors"
              >
                Schedule Care Home Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+15037937520"
                className="inline-flex items-center gap-2 border border-[#E5E7EB] text-[#0A1628] font-heading font-semibold px-8 py-4 rounded-lg hover:border-[#F5B800]/50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (503) 793-7520
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 2 — Why a Specialist
          ────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#FFFFFF] py-20 md:py-32 border-t border-[#E5E7EB] overflow-hidden">
        <div className="habesha-pattern absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
          >
            <div>
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-[#F5B800] font-heading font-semibold tracking-widest uppercase text-sm mb-4"
              >
                Not Just Another Broker
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="font-heading font-bold tracking-tight text-3xl md:text-5xl text-[#0A1628] mb-6"
              >
                Why Care Home Investment Needs a Specialist Broker
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="font-body text-lg text-[#4B5563] leading-relaxed mb-6"
              >
                Oregon&apos;s care home regulations are among the most detailed
                in the country. A beautiful 4-bedroom house can fail licensing
                because of a 2-inch doorway gap or a missing fire suppression
                zone. The wrong property costs you months and tens of thousands
                in retrofits — or worse, a license denial.
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={3}
                className="font-body text-lg text-[#4B5563] leading-relaxed"
              >
                We know OAR 411-054 requirements by heart. We walk properties
                with a licensing lens, not just a real estate one — so you buy
                with the confidence that your investment can actually operate as
                a care home.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} custom={2}>
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-8">
                <h3 className="font-heading font-bold text-lg text-[#0A1628] mb-5">
                  Key Building Requirements We Screen For
                </h3>
                <ul className="space-y-4">
                  {[
                    "Minimum bedroom sizes (80 sq ft single, 120 sq ft shared) per OAR 411-054",
                    "ADA-compliant doorways (32\" clear width minimum), hallways, and bathrooms",
                    "Fire suppression systems — residential sprinklers or commercial, depending on capacity",
                    "Emergency egress windows in every sleeping room meeting IRC standards",
                    "Commercial-grade kitchen ventilation and food storage for licensed meal service",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#F5B800] shrink-0 mt-0.5" />
                      <span className="font-body text-[#4B5563] leading-relaxed text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 3 — Requirements Cards
          ────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A1628] py-20 md:py-32 overflow-hidden">
        <div className="grain-overlay" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-[#F5B800] font-heading font-semibold tracking-widest uppercase text-sm mb-4"
            >
              Compliance Categories
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading font-bold tracking-tight text-3xl md:text-5xl text-[#F8F6F2]"
            >
              What Oregon Requires — And What We Verify
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {requirementCards.map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                custom={i}
                className="bg-[#F8F6F2]/5 border border-[#F8F6F2]/10 rounded-xl p-8 hover:border-[#F5B800]/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-[#F5B800]/10 flex items-center justify-center mb-5">
                  <card.icon className="w-5 h-5 text-[#F5B800]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#F8F6F2] mb-3">
                  {card.title}
                </h3>
                <p className="font-body text-sm text-[#F8F6F2]/60 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 4 — Who We Serve
          ────────────────────────────────────────────────────────── */}
      <section className="bg-[#FFFFFF] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-[#F5B800] font-heading font-semibold tracking-widest uppercase text-sm mb-4"
            >
              Who We Work With
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading font-bold tracking-tight text-3xl md:text-5xl text-[#0A1628]"
            >
              Built for Every Stage of Care Home Ownership
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {audiences.map((audience, i) => (
              <motion.div
                key={audience.title}
                variants={fadeUp}
                custom={i}
                className="bg-[#F8F6F2] rounded-xl border border-[#E5E7EB] p-8 hover:border-[#F5B800]/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F5B800]/10 flex items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-sm text-[#F5B800]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-[#0A1628] mb-2">
                      {audience.title}
                    </h3>
                    <p className="font-body text-[#4B5563] leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 5 — Process Timeline
          ────────────────────────────────────────────────────────── */}
      <section className="bg-[#FFFFFF] py-20 md:py-32 border-t border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
          >
            {/* Heading */}
            <div className="lg:col-span-4">
              <motion.p
                variants={fadeUp}
                className="text-[#F5B800] font-heading font-semibold tracking-widest uppercase text-sm mb-4"
              >
                Our Process
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-heading font-bold tracking-tight text-3xl md:text-5xl text-[#0A1628] mb-6"
              >
                From Consultation to Keys in Hand
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="font-body text-lg text-[#4B5563] leading-relaxed"
              >
                A structured, compliance-first approach that protects your
                investment at every step.
              </motion.p>
            </div>

            {/* Timeline */}
            <div className="lg:col-span-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="relative"
              >
                {/* Vertical line */}
                <div className="absolute left-5 top-0 bottom-0 w-px bg-[#E5E7EB]" />

                {processSteps.map((step, i) => (
                  <motion.div
                    key={step.step}
                    variants={fadeUp}
                    custom={i}
                    className="relative pl-14 pb-12 last:pb-0"
                  >
                    {/* Dot */}
                    <div className="absolute left-3 top-1 w-4 h-4 rounded-full bg-[#F5B800] border-4 border-[#FFFFFF]" />
                    <p className="font-heading font-bold text-xs text-[#F5B800] tracking-widest uppercase mb-1">
                      Step {step.step}
                    </p>
                    <h3 className="font-heading font-bold text-xl text-[#0A1628] mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-[#4B5563] leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 6 — Testimonial (Timothy & Tsehay Smith)
          ────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A1628] py-20 md:py-32 overflow-hidden">
        <div className="grain-overlay" />
        <div className="habesha-pattern absolute inset-0 opacity-30" />
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUp}
              className="w-16 h-16 mx-auto mb-8 rounded-full bg-[#F5B800]/10 flex items-center justify-center"
            >
              <span className="font-accent text-[#F5B800] text-3xl">&ldquo;</span>
            </motion.div>
            <motion.blockquote
              variants={fadeUp}
              className="font-accent text-2xl md:text-4xl lg:text-5xl text-[#F8F6F2] leading-snug mb-10"
            >
              You will be well served with Hunde and Huluka with your real estate
              needs, especially in the adult care business.
            </motion.blockquote>
            <motion.div variants={fadeUp}>
              <p className="font-heading font-bold text-[#F5B800] text-lg">
                Timothy &amp; Tsehay Smith
              </p>
              <p className="font-body text-sm text-[#F8F6F2]/50">
                Care Home Investors, Portland
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 7 — FAQ
          ────────────────────────────────────────────────────────── */}
      <section className="bg-[#FFFFFF] py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-[#F5B800] font-heading font-semibold tracking-widest uppercase text-sm mb-4"
            >
              Common Questions
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading font-bold tracking-tight text-3xl md:text-5xl text-[#0A1628]"
            >
              Care Home Investment FAQ
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                variants={fadeUp}
                custom={i}
                className="group bg-[#F8F6F2] rounded-xl border border-[#E5E7EB] overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-heading font-semibold text-[#0A1628] text-lg list-none [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="ml-4 shrink-0 text-[#F5B800] group-open:rotate-45 transition-transform duration-200 text-2xl leading-none">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="font-body text-[#4B5563] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.details>
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
          SECTION 8 — CTA
          ────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A1628] py-20 md:py-32 overflow-hidden">
        <div className="grain-overlay" />
        <div className="habesha-pattern absolute inset-0 opacity-30" />
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="font-heading font-bold tracking-tight text-3xl md:text-5xl text-[#F8F6F2] mb-6"
            >
              Ready to Invest in Oregon&apos;s Care Home Market?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-body text-lg text-[#F8F6F2]/70 mb-10 max-w-2xl mx-auto"
            >
              Whether you&apos;re buying your first care home or expanding a
              portfolio, we&apos;ll walk you through the compliance landscape
              and find properties that actually work. No guesswork. No costly
              surprises.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact?interest=Care+Home"
                className="inline-flex items-center gap-2 bg-[#F5B800] text-[#0A1628] font-heading font-semibold px-8 py-4 rounded-lg hover:bg-[#E0A800] transition-colors"
              >
                Start Your Care Home Search
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+15037937520"
                className="inline-flex items-center gap-2 text-[#F8F6F2] font-heading font-semibold hover:text-[#F5B800] transition-colors"
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
