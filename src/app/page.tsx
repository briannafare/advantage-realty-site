"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Home,
  TrendingUp,
  Building2,
  MapPin,
  BarChart3,
  Plane,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Phone,
  Shield,
  Users,
  Mail,
  ArrowRight,
} from "lucide-react";

/* ───────────────────────────────────────────
   Animation helpers
   ─────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.09 } },
};

/* ───────────────────────────────────────────
   Section 1 — Hero
   ─────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Copy — left 60% */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="flex items-center gap-2 mb-5"
            >
              <span className="inline-block w-10 h-[2px] bg-[#F5B800]" />
              <span className="font-body text-sm tracking-widest uppercase text-[#4B5563] font-semibold">
                Portland Real Estate
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-heading font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#0A1628] leading-[1.06]"
            >
              Your Portland
              <br />
              Real Estate{" "}
              <span className="text-[#F5B800]">Team</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-base md:text-lg text-[#4B5563] font-body leading-relaxed max-w-xl"
            >
              Two brothers — 16+ years of Portland market expertise. From
              first-time buyers to care home investors, we protect your biggest
              financial decisions.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#F5B800] px-7 py-3.5 font-heading font-bold text-[#0A1628] text-sm hover:bg-[#E0A800] transition-colors shadow-lg shadow-[#F5B800]/20"
              >
                Schedule Your Free Consultation
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#0A1628] px-7 py-3.5 font-heading font-bold text-[#0A1628] text-sm hover:bg-[#0A1628] hover:text-white transition-colors"
              >
                Get a Free Property Evaluation
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-6 flex flex-wrap gap-5 text-xs text-[#4B5563] font-body"
            >
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#F5B800]" />
                Licensed Oregon Brokers
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#F5B800]" />
                Family-Run Team
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#F5B800]" />
                Care Home Specialists
              </span>
            </motion.div>
          </motion.div>

          {/* Hero image — paper cut-out with layered frame */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.93 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-[#F5B800]/20" />
              <div className="absolute -bottom-2 -right-2 w-full h-full rounded-2xl bg-[#0A1628]/10" />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image
                  src="/images/paper-cutout-hero-home.png"
                  alt="Paper cut-out illustration of a warm Portland Oregon craftsman home — Advantage Realty"
                  fill
                  className="object-cover bright-cutout"
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
    { value: "16+", label: "Years Experience" },
    { value: "11+", label: "Communities Served" },
    { value: "4", label: "Verbatim Google Reviews" },
    { value: "$525K", label: "Median Market Expertise" },
  ];

  return (
    <section className="relative bg-[#0A1628] py-14 md:py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              className="text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <span className="block text-5xl md:text-6xl font-heading font-bold text-[#F5B800]">
                {value}
              </span>
              <span className="mt-3 block text-sm text-white/70 font-body leading-snug">
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
    <section className="bg-white py-20 md:py-28">
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
            className="font-heading font-bold tracking-tight text-3xl md:text-5xl text-[#0A1628]"
          >
            Portland&rsquo;s Market Moves Fast.{" "}
            <span className="text-[#F5B800]">Your Agent Should Too.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-8 text-lg md:text-xl text-[#4B5563] font-body leading-relaxed"
          >
            Portland&rsquo;s median home price sits at $525,000 — and in hot
            neighborhoods, properties move in days. If your agent doesn&rsquo;t
            understand Clackamas County tax rates or how to navigate a
            multiple-offer situation — you&rsquo;re already behind.
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 text-lg md:text-xl text-[#4B5563] font-body leading-relaxed"
          >
            You need a team that knows every corridor, every pricing pattern,
            and every negotiation lever — so when the right property appears,
            you move first, not last.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 4 — Services Overview
   ─────────────────────────────────────────── */
function ServicesOverview() {
  const services = [
    {
      icon: Home,
      title: "Residential Buying",
      description:
        "First-time buyer or upgrading — we guide you through every step, from pre-approval to keys in hand.",
      href: "/buy",
    },
    {
      icon: TrendingUp,
      title: "Home Selling",
      description:
        "Strategic pricing, professional staging guidance, and aggressive marketing to get top dollar for your property.",
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
      icon: MapPin,
      title: "Investment Properties",
      description:
        "Multi-family, rental, and income properties across Portland metro — we identify opportunities most agents miss.",
      href: "/contact",
    },
    {
      icon: Plane,
      title: "Relocation Services",
      description:
        "Moving to Portland from out of state or another country? We handle the local knowledge so you can focus on the transition.",
      href: "/contact",
    },
    {
      icon: BarChart3,
      title: "Market Analysis",
      description:
        "Complimentary property valuations and neighborhood market reports for Portland, Milwaukie, Oregon City, and beyond.",
      href: "/contact",
    },
  ];

  return (
    <section className="bg-[#F8F6F2] py-20 md:py-28">
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
            className="font-heading font-bold tracking-tight text-3xl md:text-5xl text-[#0A1628]"
          >
            How We Help You <span className="text-[#F5B800]">Win</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-4 text-lg text-[#4B5563] font-body max-w-2xl mx-auto"
          >
            Six ways we put your real estate goals first.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map(({ icon: Icon, title, description, href }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative bg-white rounded-2xl border border-[#E5E7EB] p-8 hover:shadow-lg hover:border-[#F5B800] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F5B800]/10 flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-[#F5B800]" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#0A1628]">
                {title}
              </h3>
              <p className="mt-3 text-[#4B5563] font-body text-[15px] leading-relaxed">
                {description}
              </p>
              <Link
                href={href}
                className="mt-5 inline-flex items-center text-sm font-heading font-bold text-[#F5B800] group-hover:text-[#E0A800] transition-colors"
              >
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 5 — Why Advantage
   ─────────────────────────────────────────── */
function WhyAdvantage() {
  const benefits = [
    {
      title: "Family-Run, Not Corporate",
      description:
        "You work directly with Huluka and Hunde — no hand-offs to junior agents, no call centers, no runaround.",
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
    {
      title: "Proven Track Record",
      description:
        "Real Google reviews from real clients. Every transaction backed by deep local knowledge and personal accountability.",
    },
  ];

  return (
    <section className="bg-[#0A1628] text-white py-20 md:py-28">
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
              <span className="text-[#F5B800]">Advantage</span>
            </motion.h2>

            <div className="mt-10 space-y-8">
              {benefits.map(({ title, description }, i) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  custom={i + 1}
                  className="flex gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#F5B800] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-bold text-lg">{title}</h3>
                    <p className="mt-1 text-white/70 font-body text-[15px] leading-relaxed">
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
            <div className="rounded-2xl overflow-hidden aspect-[4/3] relative shadow-2xl">
              <Image
                src="/images/paper-cutout-portland-skyline.png"
                alt="Paper cut-out illustration of Portland Oregon skyline with bridges and Mt Hood"
                fill
                className="object-cover bright-cutout"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 6 — Meet the Team
   ─────────────────────────────────────────── */
function MeetTheTeam() {
  const team = [
    {
      name: "Huluka Abebe",
      role: "Principal Broker / Co-Founder",
      phone: "(503) 793-7520",
      photo: "/images/team/huluka-abebe.jpg",
    },
    {
      name: "Hunde Abebe",
      role: "Broker / Co-Founder",
      phone: "(503) 449-4362",
      photo: "/images/team/hunde-abebe.jpg",
    },
    {
      name: "Jenni Anderson",
      role: "Broker / 1031 Exchange Specialist",
      phone: "(503) 508-8779",
      photo: "/images/team/jenni-anderson.jpg",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
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
            className="font-heading font-bold tracking-tight text-3xl md:text-5xl text-[#0A1628]"
          >
            Meet the <span className="text-[#F5B800]">Advantage</span> Team
          </motion.h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map(({ name, role, phone, photo }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group text-center"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5 bg-[#F8F6F2]">
                <Image
                  src={photo}
                  alt={`${name} — ${role} at Advantage Realty`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#0A1628]">
                {name}
              </h3>
              <p className="mt-1 text-[#4B5563] font-body text-sm">{role}</p>
              <a
                href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-[#F5B800] hover:text-[#E0A800] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                {phone}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center text-[#4B5563] font-body text-sm"
        >
          We also speak Amharic and Oromo
        </motion.p>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 7 — Testimonials
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
    <section className="bg-[#F8F6F2] py-20 md:py-28">
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
            className="font-heading font-bold tracking-tight text-3xl md:text-5xl text-[#0A1628]"
          >
            What Our <span className="text-[#F5B800]">Clients</span> Say
          </motion.h2>
        </motion.div>

        <motion.div
          key={current}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mt-14 text-center"
        >
          <blockquote className="font-accent text-xl md:text-2xl text-[#0A1628] leading-snug italic">
            &ldquo;{testimonials[current].quote}&rdquo;
          </blockquote>
          <p className="mt-6 font-heading font-bold text-[#F5B800]">
            {testimonials[current].author}
          </p>
          <p className="text-sm text-[#4B5563] font-body">
            {testimonials[current].role}
          </p>
        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() =>
              setCurrent((p) => (p === 0 ? testimonials.length - 1 : p - 1))
            }
            aria-label="Previous testimonial"
            className="p-2.5 rounded-full border border-[#E5E7EB] hover:border-[#F5B800] hover:bg-[#F5B800]/10 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-[#0A1628]" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-[#F5B800]" : "bg-[#E5E7EB]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() =>
              setCurrent((p) => (p === testimonials.length - 1 ? 0 : p + 1))
            }
            aria-label="Next testimonial"
            className="p-2.5 rounded-full border border-[#E5E7EB] hover:border-[#F5B800] hover:bg-[#F5B800]/10 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-[#0A1628]" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 8 — Market Snapshot (animated bar chart)
   ─────────────────────────────────────────── */
function MarketSnapshot() {
  const chartRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(chartRef, { once: true, amount: 0.4 });

  const markets = [
    { name: "Portland Metro", value: 525, display: "$525K", color: "#2EC4B6" },
    { name: "Clackamas", value: 585, display: "$585K", color: "#2EC4B6" },
    { name: "Oregon City", value: 597, display: "$597K", color: "#2EC4B6" },
    { name: "Happy Valley", value: 694, display: "$694K", color: "#2EC4B6" },
    { name: "Lake Oswego", value: 750, display: "$750K+", color: "#F5B800" },
  ];

  const maxValue = 800;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mb-16"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="font-heading font-bold tracking-tight text-3xl md:text-4xl text-[#0A1628]"
          >
            Portland Market
          </motion.p>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="font-heading font-bold tracking-tight text-6xl md:text-7xl lg:text-8xl text-[#F5B800] -mt-1 md:-mt-2"
          >
            Snapshot
          </motion.p>
        </motion.div>

        {/* Animated bar chart */}
        <div ref={chartRef} className="relative">
          <div className="flex items-end gap-4 md:gap-8 h-[320px] md:h-[400px]">
            {markets.map(({ name, value, display, color }, i) => {
              const heightPct = (value / maxValue) * 100;
              return (
                <div
                  key={name}
                  className="flex-1 flex flex-col items-center justify-end h-full"
                >
                  <motion.div
                    className="font-heading font-bold text-sm md:text-base text-[#0A1628] mb-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                  >
                    {display}
                  </motion.div>
                  <motion.div
                    className="w-full rounded-t-lg"
                    style={{ backgroundColor: color }}
                    initial={{ height: 0 }}
                    animate={
                      isInView
                        ? { height: `${heightPct}%` }
                        : { height: 0 }
                    }
                    transition={{
                      delay: i * 0.12,
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                  />
                  <motion.p
                    className="mt-3 text-xs md:text-sm font-body text-[#4B5563] text-center leading-tight"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                  >
                    {name}
                  </motion.p>
                </div>
              );
            })}
          </div>

          {/* Bottom border */}
          <div className="w-full h-[2px] bg-[#E5E7EB] mt-0" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-[#4B5563] font-body text-base max-w-3xl leading-relaxed"
        >
          Clackamas County remains one of the best-value corridors in the metro
          — offering more space, lower property taxes than Multnomah, and quick
          access to downtown Portland. That&rsquo;s where our 16+ years of
          local experience give you an edge.
        </motion.p>
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
      q: "What areas of Portland do you cover?",
      a: "We serve 11+ communities across the Portland metro: inner SE and NE Portland, Milwaukie, Gladstone, Oregon City, West Linn, Lake Oswego, Happy Valley, Clackamas, Tigard, and Beaverton.",
    },
    {
      q: "How is the Portland real estate market right now?",
      a: "Portland\u2019s median home price is around $525,000 with properties averaging 28 days on market and +4.2% year-over-year appreciation. Clackamas County offers strong value at a $549,900 median. We provide a free market analysis specific to your neighborhood.",
    },
    {
      q: "What makes you different from a big brokerage?",
      a: "Two things: we specialize in niches big firms ignore (like care home investments), and you\u2019ll never be a number \u2014 our family reputation is on the line with every deal.",
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
    <section className="bg-[#F8F6F2] py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold tracking-tight text-3xl md:text-5xl text-[#0A1628] text-center mb-14"
        >
          Frequently Asked{" "}
          <span className="text-[#F5B800]">Questions</span>
        </motion.h2>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-[#E5E7EB] rounded-xl overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-heading font-bold text-[#0A1628] hover:bg-[#F8F6F2]/60 transition-colors"
              >
                <span>{q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#F5B800] shrink-0 transition-transform duration-300 ${
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
                <p className="px-6 pb-5 text-[#4B5563] font-body leading-relaxed">
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
    <section id="contact" className="bg-[#0A1628] text-white py-20 md:py-28">
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
            className="font-heading font-bold tracking-tight text-3xl md:text-5xl"
          >
            Ready to Make Your{" "}
            <span className="text-[#F5B800]">Move?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-6 text-lg md:text-xl text-white/70 font-body leading-relaxed"
          >
            Whether you&rsquo;re buying your first home, selling a property, or
            exploring care home investments — your free consultation starts with
            a conversation.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a
              href="tel:+15037937520"
              className="inline-flex items-center justify-center rounded-full bg-[#F5B800] px-7 py-3.5 font-heading font-bold text-[#0A1628] text-base hover:bg-[#E0A800] transition-colors shadow-lg shadow-[#F5B800]/20"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (503) 793-7520
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-7 py-3.5 font-heading font-bold text-white text-base hover:bg-white hover:text-[#0A1628] transition-colors"
            >
              Get a Free Property Evaluation
            </Link>
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-8 font-body text-white/60"
          >
            Or email directly:{" "}
            <a
              href="mailto:huluka@advantageor.com"
              className="inline-flex items-center gap-1.5 font-heading font-bold text-[#F5B800] hover:underline"
            >
              <Mail className="w-4 h-4" />
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
      <MeetTheTeam />
      <Testimonials />
      <MarketSnapshot />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
