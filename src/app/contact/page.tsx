"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  Globe,
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
const teamContacts = [
  {
    name: "[CLIENT TO PROVIDE: Principal Broker Name]",
    role: "Principal Broker",
    phone: "(503) 793-7520",
    email: "info@advantagerealtypdx.com",
  },
  {
    name: "Jenni Anderson",
    role: "1031 Exchange & Investment Specialist",
    phone: "[CLIENT TO PROVIDE: Direct line]",
    email: "[CLIENT TO PROVIDE: Email]",
  },
  {
    name: "[CLIENT TO PROVIDE: Agent 3 Name]",
    role: "[CLIENT TO PROVIDE: Role]",
    phone: "[CLIENT TO PROVIDE: Direct line]",
    email: "[CLIENT TO PROVIDE: Email]",
  },
];

const interestOptions = [
  { value: "", label: "What can we help with?" },
  { value: "Buy", label: "Buying a Home" },
  { value: "Sell", label: "Selling a Home" },
  { value: "Invest", label: "Investment Properties" },
  { value: "Care Home", label: "Care Home Investment" },
  { value: "1031", label: "1031 Exchange" },
  { value: "Evaluation", label: "Home Evaluation" },
  { value: "Other", label: "Something Else" },
];

const languageOptions = [
  { value: "", label: "Preferred language" },
  { value: "English", label: "English" },
  { value: "Oromo", label: "Oromo" },
  { value: "Amharic", label: "Amharic" },
];

/* ============================================================
   Floating Label Input
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
        className="peer w-full bg-[#FEFCF8] border border-[#E8E2D8] rounded-lg px-4 pt-6 pb-2 font-body text-[#0A1628] outline-none focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 transition-all"
      />
      <label
        htmlFor={name}
        className={`absolute left-4 transition-all pointer-events-none font-body ${
          isActive
            ? "top-2 text-xs text-[#D4A853]"
            : "top-1/2 -translate-y-1/2 text-sm text-[#6B7280]"
        }`}
      >
        {label}
        {required && <span className="text-[#D4A853] ml-0.5">*</span>}
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
        className="peer w-full bg-[#FEFCF8] border border-[#E8E2D8] rounded-lg px-4 pt-6 pb-2 font-body text-[#0A1628] outline-none focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 transition-all appearance-none cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
            {opt.label}
          </option>
        ))}
      </select>
      <label
        htmlFor={name}
        className="absolute left-4 top-2 text-xs text-[#D4A853] pointer-events-none font-body"
      >
        {label}
        {required && <span className="text-[#D4A853] ml-0.5">*</span>}
      </label>
      {/* Chevron */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg
          className="w-4 h-4 text-[#6B7280]"
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
        className="peer w-full bg-[#FEFCF8] border border-[#E8E2D8] rounded-lg px-4 pt-6 pb-2 font-body text-[#0A1628] outline-none focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 transition-all resize-none"
      />
      <label
        htmlFor={name}
        className={`absolute left-4 transition-all pointer-events-none font-body ${
          isActive
            ? "top-2 text-xs text-[#D4A853]"
            : "top-4 text-sm text-[#6B7280]"
        }`}
      >
        {label}
        {required && <span className="text-[#D4A853] ml-0.5">*</span>}
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
          SECTION 1 — Hero Minimal
          ────────────────────────────────────────────────────────── */}
      <section className="bg-[#FEFCF8] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-[#D4A853] font-heading font-semibold tracking-widest uppercase text-sm mb-6"
            >
              Get in Touch
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-heading font-bold tracking-tight text-5xl md:text-7xl text-[#0A1628] mb-6"
            >
              Contact Advantage Realty —{" "}
              <span className="text-[#D4A853]">
                Start Your Portland Real Estate Journey
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="font-body text-lg md:text-xl text-[#6B7280]"
            >
              Whether you&apos;re buying your first home, selling a property,
              exploring investment opportunities, or navigating care home
              acquisitions — we&apos;re here to talk. No pressure, no
              obligation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 2 — Form + Contact Info Split
          ────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A1628] py-20 md:py-32 overflow-hidden">
        <div className="grain-overlay" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16"
          >
            {/* Form — 60% */}
            <motion.div variants={fadeUp} className="lg:col-span-3">
              <h2 className="font-heading font-bold tracking-tight text-3xl md:text-4xl text-[#F5F0E8] mb-8">
                Send Us a Message
              </h2>

              <form
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
                  className="inline-flex items-center gap-2 bg-[#D4A853] text-[#0A1628] font-heading font-semibold px-8 py-4 rounded-lg hover:bg-[#C49A48] transition-colors w-full md:w-auto justify-center"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

            {/* Contact Info — 40% */}
            <motion.div variants={fadeUp} custom={2} className="lg:col-span-2">
              <h2 className="font-heading font-bold tracking-tight text-3xl md:text-4xl text-[#F5F0E8] mb-8">
                Contact Info
              </h2>

              {/* Office Address */}
              <div className="flex gap-4 mb-8 pb-8 border-b border-[#F5F0E8]/10">
                <div className="w-10 h-10 rounded-lg bg-[#D4A853]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#D4A853]" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-[#F5F0E8] mb-1">
                    Office
                  </p>
                  <p className="font-body text-sm text-[#F5F0E8]/60 leading-relaxed">
                    13100 SE Sunnyside Rd Suite B
                    <br />
                    Clackamas, OR 97015
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 mb-8 pb-8 border-b border-[#F5F0E8]/10">
                <div className="w-10 h-10 rounded-lg bg-[#D4A853]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#D4A853]" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-[#F5F0E8] mb-1">
                    Hours
                  </p>
                  <p className="font-body text-sm text-[#F5F0E8]/60">
                    Monday – Friday: 9:00 AM – 6:00 PM
                    <br />
                    Weekends: By Appointment
                  </p>
                </div>
              </div>

              {/* Languages */}
              <div className="flex gap-4 mb-8 pb-8 border-b border-[#F5F0E8]/10">
                <div className="w-10 h-10 rounded-lg bg-[#D4A853]/10 flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4 text-[#D4A853]" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-[#F5F0E8] mb-1">
                    Languages
                  </p>
                  <p className="font-body text-sm text-[#F5F0E8]/60">
                    We speak English, Oromo, and Amharic
                  </p>
                </div>
              </div>

              {/* Team Contacts */}
              <div className="space-y-6">
                <p className="font-heading font-semibold text-[#F5F0E8]/40 text-xs tracking-widest uppercase">
                  Team
                </p>
                {teamContacts.map((member, i) => (
                  <div key={i} className="border-l-2 border-[#D4A853]/30 pl-4">
                    <p className="font-heading font-semibold text-[#F5F0E8]">
                      {member.name}
                    </p>
                    <p className="font-body text-xs text-[#D4A853] mb-2">
                      {member.role}
                    </p>
                    <div className="flex flex-col gap-1">
                      <a
                        href={`tel:${member.phone.replace(/[^\d+]/g, "")}`}
                        className="flex items-center gap-2 font-body text-sm text-[#F5F0E8]/60 hover:text-[#D4A853] transition-colors"
                      >
                        <Phone className="w-3 h-3" />
                        {member.phone}
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 font-body text-sm text-[#F5F0E8]/60 hover:text-[#D4A853] transition-colors"
                      >
                        <Mail className="w-3 h-3" />
                        {member.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 3 — Map
          ────────────────────────────────────────────────────────── */}
      <section className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full h-[400px] md:h-[500px]"
        >
          <iframe
            title="Advantage Realty LLC Office — Clackamas, Oregon"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.5!2d-122.5737!3d45.4168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s13100+SE+Sunnyside+Rd+Suite+B%2C+Clackamas%2C+OR+97015!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale contrast-[1.1] opacity-90"
          />
        </motion.div>
      </section>
    </main>
  );
}
