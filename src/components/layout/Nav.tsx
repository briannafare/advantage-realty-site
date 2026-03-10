"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 h-20 transition-all duration-300",
          scrolled
            ? "bg-white/95 shadow-sm shadow-[#E5E7EB]/50 backdrop-blur-md"
            : "bg-white/80 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/advantage-logo.png"
              alt="Advantage Realty LLC"
              width={44}
              height={44}
              className="h-11 w-11"
            />
            <span className="font-heading text-xl font-bold tracking-tight text-[#111827] lg:text-2xl">
              Advantage
              <span className="text-[#2563EB]"> Realty</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-1 lg:flex" role="navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 font-body text-sm font-medium text-[#374151] transition-colors hover:bg-[#F3F4F6] hover:text-[#2563EB]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden items-center gap-4 lg:flex">
            {/* Languages badge */}
            <span className="rounded-full bg-[#2563EB]/10 px-3 py-1 font-body text-xs font-medium text-[#2563EB]">
              EN · OM · AM
            </span>

            {/* Phone */}
            <a
              href={`tel:${BRAND.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-2 font-body text-sm font-semibold text-[#111827] transition-colors hover:text-[#2563EB]"
            >
              <Phone className="h-4 w-4" />
              {BRAND.phone}
            </a>

            {/* CTA */}
            <Link href="/contact">
              <Button
                variant="default"
                size="sm"
                className="bg-[#84CC16] font-semibold text-[#111827] hover:bg-[#65A30D]"
              >
                Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-[#111827] transition-colors hover:bg-[#F3F4F6] lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-[#111827]/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-40 flex w-80 flex-col bg-white shadow-2xl lg:hidden"
            >
              <div className="flex flex-1 flex-col gap-2 overflow-y-auto px-6 pb-8 pt-24">
                <div className="mb-4">
                  <span className="rounded-full bg-[#2563EB]/10 px-3 py-1 font-body text-xs font-medium text-[#2563EB]">
                    EN · OM · AM
                  </span>
                </div>

                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-4 py-3 font-heading text-lg font-bold text-[#111827] transition-colors hover:bg-[#F3F4F6] hover:text-[#2563EB]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="my-4 h-px bg-[#E5E7EB]" />

                <motion.a
                  href={`tel:${BRAND.phone.replace(/[^+\d]/g, "")}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 font-body text-base font-semibold text-[#111827] transition-colors hover:text-[#2563EB]"
                >
                  <Phone className="h-5 w-5 text-[#2563EB]" />
                  {BRAND.phone}
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4"
                >
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    <Button
                      variant="default"
                      className="w-full bg-[#84CC16] font-semibold text-[#111827] hover:bg-[#65A30D]"
                    >
                      Free Consultation
                    </Button>
                  </Link>
                </motion.div>
              </div>

              <div className="border-t border-[#E5E7EB] px-6 py-4">
                <p className="font-body text-xs text-[#6B7280]">
                  {BRAND.address}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="h-20" />
    </>
  );
}
