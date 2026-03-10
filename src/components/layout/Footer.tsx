"use client";

import React from "react";
import Link from "next/link";
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
    <footer className="relative bg-[#0A1628]">
      {/* Habesha pattern overlay */}
      <div className="habesha-pattern absolute inset-0 pointer-events-none" />

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
            <Link href="/" className="inline-block">
              <span className="font-heading text-xl font-bold tracking-tight text-[#F5F0E8]">
                Advantage
                <span className="text-accent"> Realty</span>
              </span>
            </Link>
            <p className="mt-4 font-body text-sm leading-relaxed text-[#F5F0E8]/70">
              Portland-area real estate brokerage rooted in community.
              Specializing in residential sales, investment properties, and
              adult care home consulting. Proudly serving Oregon&apos;s East
              African community in English, Oromo, and Amharic.
            </p>
            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href={BRAND.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F5F0E8]/10 text-[#F5F0E8] transition-colors hover:bg-accent hover:text-primary"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={BRAND.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F5F0E8]/10 text-[#F5F0E8] transition-colors hover:bg-accent hover:text-primary"
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
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-accent">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[#F5F0E8]/70 transition-colors hover:text-accent"
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
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-accent">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[#F5F0E8]/70 transition-colors hover:text-accent"
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
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-accent">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`tel:${BRAND.phone.replace(/[^+\d]/g, "")}`}
                  className="flex items-start gap-3 font-body text-sm text-[#F5F0E8]/70 transition-colors hover:text-accent"
                >
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-start gap-3 font-body text-sm text-[#F5F0E8]/70 transition-colors hover:text-accent"
                >
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=13100+SE+Sunnyside+Rd+Suite+B+Clackamas+OR+97015"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 font-body text-sm text-[#F5F0E8]/70 transition-colors hover:text-accent"
                >
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  {BRAND.address}
                </a>
              </li>
            </ul>

            {/* Languages */}
            <div className="mt-6 rounded-lg bg-[#F5F0E8]/5 px-4 py-3">
              <p className="font-body text-xs text-[#F5F0E8]/60">
                We speak{" "}
                <span className="font-semibold text-accent">
                  English, Oromo, and Amharic
                </span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px bg-[#F5F0E8]/10" />

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-body text-xs text-[#F5F0E8]/50">
            &copy; {new Date().getFullYear()} Advantage Realty LLC |{" "}
            {BRAND.address}
          </p>
          <p className="font-body text-xs text-[#F5F0E8]/40">
            Built by{" "}
            <a
              href="https://eighty5labs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent/60 transition-colors hover:text-accent"
            >
              eighty5labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
