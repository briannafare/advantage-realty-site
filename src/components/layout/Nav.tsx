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
          "fixed inset-x-0 top-0 z-[60] h-24 transition-all duration-300",
          scrolled
            ? "bg-white/95 shadow-sm shadow-[#E0DDD6]/50 backdrop-blur-md"
            : "bg-white/80 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/advantage-logo.png"
              alt="Advantage Realty LLC"
              width={120}
              height={120}
              className="h-[80px] w-[80px] lg:h-[88px] lg:w-[88px]"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-1 lg:flex" role="navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-[14px] px-4 py-2 font-body text-[13px] font-medium text-[#505050] transition-colors hover:bg-[#F2F0EA] hover:text-[#141414]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Phone */}
            <a
              href={`tel:${BRAND.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-2 font-body text-sm font-semibold text-[#141414] transition-colors hover:text-[#2A5430]"
            >
              <Phone className="h-4 w-4" />
              {BRAND.phone}
            </a>

            {/* Get Started — lime CTA (Rillo nav style) */}
            <Link href="/contact">
              <Button variant="default" size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-[80] flex h-10 w-10 items-center justify-center rounded-[14px] text-[#141414] transition-colors hover:bg-[#F2F0EA] lg:hidden"
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
              className="fixed inset-0 z-[65] bg-[#141414]/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-[70] flex w-80 flex-col bg-white shadow-2xl lg:hidden"
            >
              <div className="flex flex-1 flex-col gap-2 overflow-y-auto px-6 pb-8 pt-24">
                <div className="mb-4">
                  <span className="rounded-full bg-[#F0F7DC] px-3 py-1 font-body text-xs font-medium text-[#5a7000]">
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
                      className="block rounded-[14px] px-4 py-3 font-display text-lg font-bold text-[#141414] transition-colors hover:bg-[#F2F0EA]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="my-4 h-px bg-[#E0DDD6]" />

                <motion.a
                  href={`tel:${BRAND.phone.replace(/[^+\d]/g, "")}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3 rounded-[14px] px-4 py-3 font-body text-base font-semibold text-[#141414] transition-colors hover:text-[#2A5430]"
                >
                  <Phone className="h-5 w-5 text-[#2A5430]" />
                  {BRAND.phone}
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4"
                >
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    <Button variant="dark" className="w-full justify-center">
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              </div>

              <div className="border-t border-[#E0DDD6] px-6 py-4">
                <p className="font-body text-xs text-[#909090]">
                  {BRAND.address}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="h-24" />
    </>
  );
}
