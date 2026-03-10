"use client";

import Image from "next/image";
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
   Section 1 — Hero
   ─────────────────────────────────────────── */
function AboutHero() {
  return (
    <section className="bg-[#FEFCF8] py-20 md:py-32">
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
            className="font-heading font-bold tracking-tight text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.05]"
          >
            Meet the Family Behind{" "}
            <span className="text-[#D4A853]">Advantage</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-6 text-lg md:text-xl text-muted font-body leading-relaxed max-w-2xl"
          >
            We&rsquo;re not a franchise. We&rsquo;re not a call center. We&rsquo;re two
            brothers — Senai and Benyam Huluka — who built a real estate practice
            around the one thing Portland&rsquo;s diverse communities deserve: an
            agent who speaks your language, knows your neighborhood, and treats
            your home search like family business.
          </motion.p>
        </motion.div>

        {/* Team group photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 relative rounded-2xl overflow-hidden aspect-[21/9]"
        >
          <Image
            src="/images/team-group-photo.jpg"
            alt="Advantage Realty LLC team — Senai and Benyam Huluka with the Portland skyline"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4A853]" />
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 2 — Story
   ─────────────────────────────────────────── */
function Story() {
  return (
    <section className="bg-[#FEFCF8] py-20 md:py-32 habesha-pattern">
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
            Two Brothers,{" "}
            <span className="text-[#D4A853]">One Vision</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-8 text-lg md:text-xl text-muted font-body leading-relaxed"
          >
            Advantage Realty LLC was born from a simple frustration: watching
            family and friends in Portland&rsquo;s Ethiopian and Oromo communities
            struggle through real estate transactions with agents who didn&rsquo;t
            understand their language, their culture, or their priorities. Senai
            and Benyam Huluka decided to change that — not by joining a big
            brokerage and hoping for the best, but by building something from
            scratch that put their community first.
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 text-lg md:text-xl text-muted font-body leading-relaxed"
          >
            Over 16 years later, that vision hasn&rsquo;t changed. Every transaction
            we handle — whether it&rsquo;s a first-time buyer in SE Portland, a
            growing family moving to Milwaukie, or an investor evaluating a care
            home opportunity — gets the same treatment: direct access to us,
            transparent communication in your language, and the kind of market
            knowledge that only comes from living and working in these
            neighborhoods for over a decade.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-10 p-8 rounded-2xl bg-[#0A1628] text-[#F5F0E8]"
          >
            <p className="font-accent text-xl md:text-2xl italic leading-relaxed">
              &ldquo;Our mission is simple: make Portland real estate accessible,
              transparent, and personal — for every family, in every language we
              speak.&rdquo;
            </p>
            <p className="mt-4 font-heading font-bold text-[#D4A853] text-sm tracking-wide uppercase">
              — Senai &amp; Benyam Huluka, Founders
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 3 — Team Grid
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
    name: "Senai Huluka",
    role: "Principal Broker / Co-Founder",
    languages: ["Amharic", "Oromo", "English"],
    phone: "[CLIENT TO PROVIDE: phone]",
    email: "[CLIENT TO PROVIDE: email]",
    photo: "/images/senai-huluka.jpg",
    bio: "With over 16 years of Portland real estate experience, Senai leads the team's residential and investment practice. He specializes in buyer representation, market analysis, and care home property acquisitions across the metro. His deep roots in Portland's Ethiopian community and encyclopedic knowledge of Clackamas County neighborhoods make him a go-to resource for families navigating their biggest financial decision.",
  },
  {
    name: "Benyam Huluka",
    role: "Broker / Co-Founder",
    languages: ["Amharic", "Oromo", "English"],
    phone: "[CLIENT TO PROVIDE: phone]",
    email: "[CLIENT TO PROVIDE: email]",
    photo: "/images/benyam-huluka.jpg",
    bio: "Benyam brings sharp negotiation skills and a detail-oriented approach to every transaction. Whether he's helping sellers price competitively in a shifting market or guiding first-time buyers through the inspection process, his focus is always on clear communication and client advocacy. He handles listing strategy, contract negotiation, and the operational side of the team.",
  },
  {
    name: "[CLIENT TO PROVIDE: Third Team Member]",
    role: "[CLIENT TO PROVIDE: role]",
    languages: ["Amharic", "Oromo", "English"],
    phone: "[CLIENT TO PROVIDE: phone]",
    email: "[CLIENT TO PROVIDE: email]",
    photo: "/images/team-member-3.jpg",
    bio: "[CLIENT TO PROVIDE: bio for third team member. If there is no third member, this card can be removed.]",
  },
];

function TeamGrid() {
  return (
    <section className="bg-[#FEFCF8] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold tracking-tight text-3xl md:text-5xl text-foreground text-center mb-16"
        >
          Your <span className="text-[#D4A853]">Team</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group"
            >
              {/* Photo */}
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] mb-6">
                <Image
                  src={member.photo}
                  alt={`${member.name} — ${member.role} at Advantage Realty LLC`}
                  fill
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4A853] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <h3 className="font-heading font-bold text-xl text-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-muted font-body">{member.role}</p>

              {/* Languages badge */}
              <div className="mt-3 flex flex-wrap gap-2">
                {member.languages.map((lang) => (
                  <span
                    key={lang}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D4A853]/10 text-xs font-heading font-bold text-[#D4A853]"
                  >
                    <Globe className="w-3 h-3" />
                    {lang}
                  </span>
                ))}
              </div>

              {/* Contact */}
              <div className="mt-4 space-y-1.5 text-sm text-muted font-body">
                <a
                  href={`tel:${member.phone}`}
                  className="flex items-center gap-2 hover:text-[#D4A853] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {member.phone}
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 hover:text-[#D4A853] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {member.email}
                </a>
              </div>

              {/* Bio */}
              <p className="mt-4 text-muted font-body text-[15px] leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 4 — Languages
   ─────────────────────────────────────────── */
function Languages() {
  return (
    <section className="bg-[#0A1628] text-[#F5F0E8] py-20 md:py-32">
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
            Three Languages,{" "}
            <span className="text-[#D4A853]">One Promise</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-8 text-lg md:text-xl text-[#F5F0E8]/80 font-body leading-relaxed"
          >
            Portland is home to one of the largest Ethiopian and Eritrean
            communities in the United States. For families who think in Amharic or
            Oromo, buying a home shouldn&rsquo;t require a translator sitting between
            you and your agent. At Advantage Realty, language isn&rsquo;t a courtesy —
            it&rsquo;s the foundation of how we do business.
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 text-lg md:text-xl text-[#F5F0E8]/80 font-body leading-relaxed"
          >
            From the first phone call to the closing table, every document review,
            every negotiation, every market explanation happens in the language
            you&rsquo;re most comfortable with. No misunderstandings. No awkward
            pauses. No important details lost in translation. That&rsquo;s not a
            marketing line — it&rsquo;s the reason we started this firm.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-12 grid grid-cols-3 gap-6"
          >
            {[
              { lang: "Amharic", script: "አማርኛ" },
              { lang: "Oromo", script: "Afaan Oromoo" },
              { lang: "English", script: "English" },
            ].map(({ lang, script }) => (
              <div
                key={lang}
                className="rounded-xl border border-[#F5F0E8]/10 p-6"
              >
                <span className="block font-accent text-2xl md:text-3xl text-[#D4A853]">
                  {script}
                </span>
                <span className="mt-2 block text-sm text-[#F5F0E8]/60 font-body">
                  {lang}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 5 — Values
   ─────────────────────────────────────────── */
function Values() {
  const values = [
    {
      icon: Heart,
      title: "Family First",
      description:
        "Your home is your family's foundation. We treat every transaction with the same care and urgency we'd bring to our own family's move.",
    },
    {
      icon: Users,
      title: "Cultural Understanding",
      description:
        "We don't just speak your language — we understand the cultural context behind your priorities, your timeline, and your decision-making process.",
    },
    {
      icon: BookOpen,
      title: "Expert Knowledge",
      description:
        "16+ years in Portland's market, 11+ communities covered, and a care home niche no other local team can match. We know this metro inside and out.",
    },
    {
      icon: Sparkles,
      title: "Personal Attention",
      description:
        "No junior agents. No hand-offs. No automated emails pretending to be personal. You get Senai and Benyam — directly, always.",
    },
  ];

  return (
    <section className="bg-[#FEFCF8] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold tracking-tight text-3xl md:text-5xl text-foreground text-center mb-16"
        >
          What We <span className="text-[#D4A853]">Stand For</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl border border-border p-8 text-center hover:shadow-lg hover:border-[#D4A853]/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#D4A853]/10 flex items-center justify-center mx-auto mb-5">
                <Icon className="w-7 h-7 text-[#D4A853]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground">
                {title}
              </h3>
              <p className="mt-3 text-muted font-body text-[15px] leading-relaxed">
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
   Section 6 — CTA
   ─────────────────────────────────────────── */
function AboutCTA() {
  return (
    <section className="bg-[#0A1628] text-[#F5F0E8] py-20 md:py-32">
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
            Let&rsquo;s Talk About{" "}
            <span className="text-[#D4A853]">Your Goals</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-6 text-lg md:text-xl text-[#F5F0E8]/80 font-body leading-relaxed"
          >
            Whether you&rsquo;re ready to buy, thinking about selling, or just want
            to understand what your Portland home is worth — we&rsquo;re here. Your
            first consultation is free, no strings attached. Let&rsquo;s start the
            conversation.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-10"
          >
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#D4A853] px-8 py-4 font-heading font-bold text-[#0A1628] text-lg hover:bg-[#C49A48] transition-colors"
            >
              Schedule Your Free Consultation
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-6 text-sm text-[#F5F0E8]/50 font-body"
          >
            Available in Amharic, Oromo, and English
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
      <TeamGrid />
      <Languages />
      <Values />
      <AboutCTA />
    </main>
  );
}
