"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Linkedin } from "lucide-react";
import { BRAND, FOOTER_LINKS } from "@/lib/constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Footer() {
  return (
    <footer className="relative bg-[#1D3B22]">
      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-16 lg:px-8">
        {/* Main Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — About */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/images/advantage-logo.png"
                alt="Advantage Realty LLC"
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <span className="font-display text-xl font-extrabold tracking-tight text-white">
                Advantage Realty
              </span>
            </Link>
            <p className="mt-4 font-body text-sm leading-relaxed text-white/70">
              Portland-area real estate brokerage rooted in community.
              Specializing in residential sales, investment properties, and
              adult care home consulting — with direct broker access on every deal. Also available in Oromo and Amharic.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={BRAND.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-white/10 text-white transition-colors hover:bg-[#C9E83A] hover:text-[#1D3B22]"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={BRAND.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-white/10 text-white transition-colors hover:bg-[#C9E83A] hover:text-[#1D3B22]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Column 2 — Quick Links */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-[#C9E83A]">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/70 transition-colors hover:text-[#C9E83A]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 — Services */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-[#C9E83A]">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/70 transition-colors hover:text-[#C9E83A]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 — Contact Info */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-[#C9E83A]">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`tel:${BRAND.phone.replace(/[^+\d]/g, "")}`}
                  className="flex items-start gap-3 font-body text-sm text-white/70 transition-colors hover:text-[#C9E83A]"
                >
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C9E83A]" />
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C9E83A]" />
                  <div className="flex flex-col gap-1">
                    <a
                      href="mailto:hunde@advantageor.com"
                      className="font-body text-sm text-white/70 transition-colors hover:text-[#C9E83A]"
                    >
                      hunde@advantageor.com
                    </a>
                    <a
                      href="mailto:huluka@advantageor.com"
                      className="font-body text-sm text-white/70 transition-colors hover:text-[#C9E83A]"
                    >
                      huluka@advantageor.com
                    </a>
                    <a
                      href="mailto:jenni@advantageor.com"
                      className="font-body text-sm text-white/70 transition-colors hover:text-[#C9E83A]"
                    >
                      jenni@advantageor.com
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=13100+SE+Sunnyside+Rd+Suite+B+Clackamas+OR+97015"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 font-body text-sm text-white/70 transition-colors hover:text-[#C9E83A]"
                >
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C9E83A]" />
                  {BRAND.address}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px bg-white/10" />

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-body text-xs text-white/50">
            &copy; {new Date().getFullYear()} Advantage Realty LLC |{" "}
            {BRAND.address}
          </p>
          <p className="font-body text-xs text-white/40">
            Built by{" "}
            <a
              href="https://eighty5labs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9E83A]/60 transition-colors hover:text-[#C9E83A]"
            >
              eighty5labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
