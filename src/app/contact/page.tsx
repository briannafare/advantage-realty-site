"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Globe,
  ArrowRight,
} from "lucide-react";

/* ============================================================
   Metadata (exported from layout or head — kept here for reference)
   title: "Contact Advantage Realty | Portland OR | Free Consultation"
   description: "Schedule a free real estate consultation with Advantage Realty in Clackamas, OR. Call (503) 793-7520. Direct broker access on every deal."
   ============================================================ */

/* ============================================================
   Animation Variants
   ============================================================ */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

/* ============================================================
   Data
   ============================================================ */
const teamContacts = [
  {
    name: "Huluka Abebe",
    role: "Principal Broker",
    phone: "(503) 793-7520",
    email: "huluka@advantageor.com",
    photo: "/images/team/huluka-abebe.jpg",
  },
  {
    name: "Hunde Abebe",
    role: "Broker & Co-Founder",
    phone: "(503) 449-4362",
    email: "hunde@advantageor.com",
    photo: "/images/team/hunde-abebe.jpg",
  },
  {
    name: "Jenni Anderson",
    role: "Broker & 1031 Exchange Specialist",
    phone: "(503) 508-8779",
    email: "jenni@advantageor.com",
    photo: "/images/team/jenni-anderson.png",
  },
];

const interestOptions = [
  { value: "", label: "Select your interest" },
  { value: "Buying", label: "Buying a Home" },
  { value: "Selling", label: "Selling a Home" },
  { value: "Investment", label: "Investment Properties" },
  { value: "Care Home", label: "Care Home Investment" },
  { value: "1031", label: "1031 Exchange" },
  { value: "Evaluation", label: "Home Evaluation" },
  { value: "Other", label: "Other" },
];

const languageOptions = [
  { value: "", label: "Preferred language" },
  { value: "English", label: "English" },
  { value: "Oromo", label: "Oromo" },
  { value: "Amharic", label: "Amharic" },
];

/* ============================================================
   Floating Label Components
   ============================================================ */
function FloatingInput({
  label,
  name,
  type = "text",
  required = false,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        id={name}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="peer w-full bg-[#FFFFFF] border border-[#E0DDD6] rounded-lg px-4 pt-6 pb-2 text-[#141414] outline-none focus:border-[#E8622A] focus:ring-2 focus:ring-[#E8622A]/20 transition-all"
      />
      <label
        htmlFor={name}
        className={`absolute left-4 transition-all pointer-events-none ${
          isActive
            ? "top-2 text-xs text-[#E8622A]"
            : "top-1/2 -translate-y-1/2 text-sm text-[#505050]"
        }`}
      >
        {label}
        {required && <span className="text-[#E8622A] ml-0.5">*</span>}
      </label>
    </div>
  );
}

function FloatingSelect({
  label,
  name,
  options,
  required = false,
  value,
  onChange,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <select
        name={name}
        id={name}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="peer w-full bg-[#FFFFFF] border border-[#E0DDD6] rounded-lg px-4 pt-6 pb-2 text-[#141414] outline-none focus:border-[#E8622A] focus:ring-2 focus:ring-[#E8622A]/20 transition-all appearance-none cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
            {opt.label}
          </option>
        ))}
      </select>
      <label
        htmlFor={name}
        className="absolute left-4 top-2 text-xs text-[#E8622A] pointer-events-none"
      >
        {label}
        {required && <span className="text-[#E8622A] ml-0.5">*</span>}
      </label>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg
          className="w-4 h-4 text-[#505050]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

function FloatingTextarea({
  label,
  name,
  required = false,
  value,
  onChange,
}: {
  label: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <textarea
        name={name}
        id={name}
        required={required}
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="peer w-full bg-[#FFFFFF] border border-[#E0DDD6] rounded-lg px-4 pt-6 pb-2 text-[#141414] outline-none focus:border-[#E8622A] focus:ring-2 focus:ring-[#E8622A]/20 transition-all resize-none"
      />
      <label
        htmlFor={name}
        className={`absolute left-4 transition-all pointer-events-none ${
          isActive
            ? "top-2 text-xs text-[#E8622A]"
            : "top-4 text-sm text-[#505050]"
        }`}
      >
        {label}
        {required && <span className="text-[#E8622A] ml-0.5">*</span>}
      </label>
    </div>
  );
}

/* ============================================================
   Page Component
   ============================================================ */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    language: "",
    message: "",
  });

  const updateField = (field: string) => (value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <main>
      {/* ──────────────────────────────────────────────────────────
          HERO
          ────────────────────────────────────────────────────────── */}
      <section className="bg-[#F8F6F1] py-24 md:py-36">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 bg-[#FDF0EB] text-[#E8622A] rounded-full px-4 py-1.5 text-sm font-medium mb-8"
            >
              <Phone className="w-3.5 h-3.5" />
              Direct broker access
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-bold tracking-tight text-4xl md:text-6xl lg:text-7xl text-[#141414] mb-6 leading-[1.1]"
            >
              Talk to a Portland Broker{" "}
              <span className="italic text-[#2A5430]">Who Answers Their Phone</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg md:text-xl text-[#505050] max-w-2xl mx-auto leading-relaxed"
            >
              No call centers. No automated menus. No junior associates. When you
              reach out to Advantage Realty, you&apos;re talking to the broker
              who&apos;ll handle your deal. No runaround. No junior agents.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          TEAM CONTACTS
          ────────────────────────────────────────────────────────── */}
      <section className="bg-[#FFFFFF] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="font-bold tracking-tight text-3xl md:text-4xl text-[#141414] text-center mb-4"
            >
              Reach Your Broker Directly
            </motion.h2>
            <motion.div
              variants={fadeUp}
              custom={1}
              className="w-16 h-1 bg-[#E8622A] rounded-full mx-auto mb-14"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {teamContacts.map((member, i) => (
              <motion.div
                key={member.name}
                variants={scaleIn}
                custom={i}
                className="group bg-[#F8F6F1] rounded-[22px] overflow-hidden border border-[#E0DDD6] hover:border-[#E8622A]/30 hover:shadow-lg hover:shadow-[#E8622A]/5 transition-all duration-300"
              >
                {/* Photo */}
                <div className="relative w-full aspect-[3/4] bg-[#F2F0EA] overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={`${member.name} — ${member.role}`}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-bold text-xl text-[#141414] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#E8622A] font-medium mb-4">
                    {member.role}
                  </p>

                  <div className="space-y-2.5">
                    <a
                      href={`tel:${member.phone.replace(/[^\d+]/g, "")}`}
                      className="flex items-center gap-3 text-[#505050] hover:text-[#D4551F] transition-colors group/link"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#FDF0EB] flex items-center justify-center group-hover/link:bg-[#E8622A]/20 transition-colors">
                        <Phone className="w-3.5 h-3.5 text-[#E8622A]" />
                      </div>
                      <span className="text-sm font-medium">{member.phone}</span>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-3 text-[#505050] hover:text-[#D4551F] transition-colors group/link"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#FDF0EB] flex items-center justify-center group-hover/link:bg-[#E8622A]/20 transition-colors">
                        <Mail className="w-3.5 h-3.5 text-[#E8622A]" />
                      </div>
                      <span className="text-sm font-medium">{member.email}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          OFFICE + MAP
          ────────────────────────────────────────────────────────── */}
      <section className="bg-[#F2F0EA] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch"
          >
            {/* Office Details */}
            <motion.div
              variants={fadeUp}
              className="bg-[#FFFFFF] rounded-[22px] p-8 md:p-10 border border-[#E0DDD6] flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 text-[#E8622A] text-sm font-semibold tracking-wide uppercase mb-6">
                <MapPin className="w-4 h-4" />
                Our Office
              </div>

              <h2 className="font-bold text-2xl md:text-3xl text-[#141414] mb-2">
                Advantage Realty LLC
              </h2>
              <p className="text-[#505050] text-lg leading-relaxed mb-6">
                13100 SE Sunnyside Rd Suite B
                <br />
                Clackamas, OR 97015
              </p>
              <p className="text-[#505050] mb-8">
                Located in Sunnyside Marketplace, off I-205 and SE Sunnyside Road.
              </p>

              <div className="flex items-center gap-3 bg-[#FDF0EB] rounded-xl px-5 py-4">
                <Globe className="w-5 h-5 text-[#E8622A] shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[#141414]">
                    Languages Spoken
                  </p>
                  <p className="text-sm text-[#505050]">
                    Also available in Oromo &amp; Amharic
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="rounded-[22px] overflow-hidden border border-[#E0DDD6] min-h-[400px]"
            >
              <iframe
                title="Advantage Realty LLC Office — Clackamas, Oregon"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.5!2d-122.5737!3d45.4168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s13100+SE+Sunnyside+Rd+Suite+B%2C+Clackamas%2C+OR+97015!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          CONTACT FORM
          ────────────────────────────────────────────────────────── */}
      <section className="bg-[#FFFFFF] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="font-bold tracking-tight text-3xl md:text-4xl text-[#141414] text-center mb-3"
            >
              Send Us a Message
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-[#505050] text-center text-lg mb-12 max-w-xl mx-auto"
            >
              Tell us what you&apos;re looking for — we&apos;ll respond within 24 hours.
            </motion.p>

            <motion.form
              variants={fadeUp}
              custom={2}
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                // Form submission handler — integrate with GHL or API
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FloatingInput
                  label="Full Name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={updateField("name")}
                />
                <FloatingInput
                  label="Email Address"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={updateField("email")}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FloatingInput
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={updateField("phone")}
                />
                <FloatingSelect
                  label="Interest"
                  name="interest"
                  options={interestOptions}
                  required
                  value={formData.interest}
                  onChange={updateField("interest")}
                />
              </div>

              <FloatingSelect
                label="Preferred Language"
                name="language"
                options={languageOptions}
                value={formData.language}
                onChange={updateField("language")}
              />

              <FloatingTextarea
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={updateField("message")}
              />

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#E8622A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#D4551F] transition-colors w-full md:w-auto justify-center text-base"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          FINAL CTA — Dark Rounded Block
          ────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="bg-[#141414] rounded-[22px] max-w-5xl mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="font-bold tracking-tight text-3xl md:text-5xl text-[#FFFFFF] mb-6"
            >
              Prefer to Talk?{" "}
              <span className="text-[#F0F7DC]">Pick Up the Phone.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-white/70 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed"
            >
              The fastest way to get answers is a five-minute conversation. Call
              Huluka directly — no phone tree, no hold music, no runaround.
            </motion.p>
            <motion.a
              variants={fadeUp}
              custom={2}
              href="tel:5037937520"
              className="inline-flex items-center gap-3 bg-transparent border-[1.5px] border-white/50 text-white font-bold px-10 py-5 rounded-full hover:bg-white/10 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              Call (503) 793-7520
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
