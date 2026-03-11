"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Globe,
  Heart,
  Users,
  BookOpen,
  Sparkles,
} from "lucide-react";

/* ───────────────────────────────────────────
   Animation helpers
   ─────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ───────────────────────────────────────────
   Section 1 — Hero (text-only, white bg)
   ─────────────────────────────────────────── */
function AboutHero() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="max-w-4xl"
        >
          <motion.h1
            variants={fadeUp}
            custom={0}
            className="font-display font-bold tracking-tight text-4xl md:text-6xl lg:text-7xl text-[#141414] leading-[1.05]"
          >
            Meet the Family Behind{" "}
            <em className="font-accent not-italic text-[#2A5430]" style={{ fontStyle: "italic", fontWeight: 300 }}>Advantage</em>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-6 text-lg md:text-xl text-[#505050] font-body leading-relaxed max-w-2xl"
          >
            We&rsquo;re not a franchise. We&rsquo;re not a call center.
            We&rsquo;re two brothers who built a real estate practice around
            putting Portland families first.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 2 — Story (surface bg + habesha pattern)
   ─────────────────────────────────────────── */
function Story() {
  return (
    <section className="bg-[#F2F0EA] py-20 md:py-28">
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
            className="font-display font-bold tracking-tight text-3xl md:text-5xl text-[#141414]"
          >
            Two Brothers,{" "}
            <em className="font-accent not-italic text-[#2A5430]" style={{ fontStyle: "italic", fontWeight: 300 }}>One Vision</em>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-8 text-lg md:text-xl text-[#505050] font-body leading-relaxed"
          >
            Advantage Realty LLC was born from a simple frustration: watching
            family and friends struggle through real estate transactions with
            agents who didn&rsquo;t understand their community or their
            priorities. Huluka and Hunde Abebe decided to change that — not by
            joining a big brokerage and hoping for the best, but by building
            something from scratch that put their community first.
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 text-lg md:text-xl text-[#505050] font-body leading-relaxed"
          >
            Over 16 years later, that vision hasn&rsquo;t changed. Every
            transaction we handle — whether it&rsquo;s a first-time buyer in SE
            Portland, a growing family moving to Milwaukie, or an investor
            evaluating a care home opportunity — gets the same treatment: direct
            access to us, transparent communication, and the kind of market
            knowledge that only comes from living and working in these
            neighborhoods for over a decade.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-10 p-8 rounded-2xl bg-[#141414] text-[#F2F0EA]"
          >
            <p className="font-accent text-xl md:text-2xl italic leading-relaxed">
              &ldquo;Our mission is simple: make Portland real estate accessible,
              transparent, and personal — for every family.&rdquo;
            </p>
            <p className="mt-4 font-display font-bold text-[#C9E83A] text-sm tracking-wide uppercase">
              — Huluka &amp; Hunde Abebe, Founders
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 3 — Team Bios (split layout, alternating)
   ─────────────────────────────────────────── */
interface TeamMember {
  name: string;
  role: string;
  languages: string[];
  phone: string;
  email: string;
  photo: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    name: "Huluka Abebe",
    role: "Principal Broker / Co-Founder",
    languages: ["Amharic", "Oromo", "English"],
    phone: "(503) 793-7520",
    email: "huluka@advantageor.com",
    photo: "/images/team/huluka-abebe.jpg",
    bio: "With over 16 years of Portland real estate experience, Huluka leads the team\u2019s residential and investment practice. He specializes in buyer representation, market analysis, and care home property acquisitions across the metro. His deep roots in Portland\u2019s Ethiopian community and encyclopedic knowledge of Clackamas County neighborhoods make him a go-to resource for families navigating their biggest financial decision.",
  },
  {
    name: "Hunde Abebe",
    role: "Broker / Co-Founder",
    languages: ["Amharic", "Oromo", "English"],
    phone: "(503) 449-4362",
    email: "hunde@advantageor.com",
    photo: "/images/team/hunde-abebe.jpg",
    bio: "Hunde brings sharp negotiation skills and a detail-oriented approach to every transaction. Whether he\u2019s helping sellers price competitively in a shifting market or guiding first-time buyers through the inspection process, his focus is always on clear communication and client advocacy. Known for going above and beyond, he handles listing strategy, contract negotiation, and the operational side of the team.",
  },
  {
    name: "Jenni Anderson",
    role: "Broker / 1031 Exchange Specialist",
    languages: ["English"],
    phone: "(503) 508-8779",
    email: "jenni@advantageor.com",
    photo: "/images/team/jenni-anderson.jpg",
    bio: "A native Oregonian with international experience, Jenni brings 10+ years of project management and client services expertise to the Advantage team. She specializes in 1031 tax-deferred property exchanges and relocation assistance, helping investors protect their wealth and families find their footing in Portland.",
  },
];

function TeamBios() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold tracking-tight text-3xl md:text-5xl text-[#141414] text-center mb-16"
        >
          Your <em className="font-accent not-italic text-[#2A5430]" style={{ fontStyle: "italic", fontWeight: 300 }}>Team</em>
        </motion.h2>

        <div className="space-y-16 md:space-y-24">
          {team.map((member, i) => {
            const photoLeft = i % 2 === 0;

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex flex-col ${
                  photoLeft ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-12 items-center`}
              >
                {/* Photo — 40% */}
                <div className="w-full md:w-[40%] flex-shrink-0">
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                    <Image
                      src={member.photo}
                      alt={`${member.name} — ${member.role} at Advantage Realty LLC`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9E83A]" />
                  </div>
                </div>

                {/* Bio — 60% */}
                <div className="w-full md:w-[60%]">
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-[#141414]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[#505050] font-body text-base">
                    {member.role}
                  </p>

                  {/* Language badges — subtle */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {member.languages.map((lang) => (
                      <span
                        key={lang}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#C9E83A]/10 text-xs font-display font-medium text-[#141414]/70"
                      >
                        <Globe className="w-3 h-3" />
                        {lang}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 text-[#505050] font-body text-[15px] md:text-base leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Contact links */}
                  <div className="mt-5 flex flex-wrap gap-5 text-sm text-[#505050] font-body">
                    <a
                      href={`tel:${member.phone.replace(/[^+\d]/g, "")}`}
                      className="flex items-center gap-2 hover:text-[#E8622A] transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {member.phone}
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 hover:text-[#E8622A] transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      {member.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 4 — Values
   ─────────────────────────────────────────── */
function Values() {
  const values = [
    {
      icon: Heart,
      title: "Family First",
      description:
        "Your home is your family\u2019s foundation. We treat every transaction with the same care and urgency we\u2019d bring to our own family\u2019s move.",
    },
    {
      icon: Users,
      title: "Community Roots",
      description:
        "We live and work in the neighborhoods we serve. Our deep ties to Portland\u2019s communities mean we don\u2019t just know the market — we know the people.",
    },
    {
      icon: BookOpen,
      title: "Expert Knowledge",
      description:
        "16+ years in Portland\u2019s market, 11+ communities covered, and a care home niche no other local team can match.",
    },
    {
      icon: Sparkles,
      title: "Personal Attention",
      description:
        "No junior agents. No hand-offs. No automated emails pretending to be personal. You get Huluka and Hunde — directly, always.",
    },
  ];

  return (
    <section className="bg-[#F2F0EA] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold tracking-tight text-3xl md:text-5xl text-[#141414] text-center mb-16"
        >
          What We <em className="font-accent not-italic text-[#2A5430]" style={{ fontStyle: "italic", fontWeight: 300 }}>Stand For</em>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl border border-[#E0DDD6] p-8 text-center hover:shadow-lg hover:border-[#E8622A]/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#C9E83A]/10 flex items-center justify-center mx-auto mb-5">
                <Icon className="w-7 h-7 text-[#C9E83A]" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-bold text-lg text-[#141414]">
                {title}
              </h3>
              <p className="mt-3 text-[#505050] font-body text-[15px] leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 5 — CTA (dark bg)
   ─────────────────────────────────────────── */
function AboutCTA() {
  return (
    <section className="bg-[#1D3B22] text-white py-20 md:py-28">
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
            className="font-display font-bold tracking-tight text-3xl md:text-5xl"
          >
            Let&rsquo;s Talk About{" "}
            <em className="font-accent not-italic text-[#C9E83A]" style={{ fontStyle: "italic", fontWeight: 300 }}>Your Goals</em>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-6 text-lg md:text-xl text-[#F2F0EA]/80 font-body leading-relaxed"
          >
            Whether you&rsquo;re ready to buy, thinking about selling, or just
            want to understand what your Portland home is worth — we&rsquo;re
            here. Your first consultation is free, no strings attached.
          </motion.p>

          <motion.div variants={fadeUp} custom={2} className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#C9E83A] px-8 py-4 font-display font-bold text-[#141414] text-lg hover:bg-[#B6D82A] transition-colors"
            >
              Schedule Your Free Consultation
            </Link>
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-6 text-sm text-[#F2F0EA]/50 font-body"
          >
            Direct broker access on every deal
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Page Export
   ─────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <Story />
      <TeamBios />
      <Values />
      <AboutCTA />
    </main>
  );
}
