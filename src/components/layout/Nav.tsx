"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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

  // Lock body scroll when mobile menu is open
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
            ? "bg-background/95 shadow-sm shadow-border/50 backdrop-blur-md"
            : "bg-background/80 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-xl font-bold tracking-tight text-primary lg:text-2xl">
              Advantage
              <span className="text-accent"> Realty</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-1 lg:flex" role="navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 font-body text-sm font-medium text-foreground transition-colors hover:bg-surface hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden items-center gap-4 lg:flex">
            {/* Languages badge */}
            <span className="rounded-full bg-surface px-3 py-1 font-body text-xs text-muted">
              EN &middot; OR &middot; AM
            </span>

            {/* Phone */}
            <a
              href={`tel:${BRAND.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-2 font-body text-sm font-semibold text-primary transition-colors hover:text-accent"
            >
              <Phone className="h-4 w-4" />
              {BRAND.phone}
            </a>

            {/* CTA */}
            <Link href="/contact">
              <Button variant="default" size="sm">
                Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-primary transition-colors hover:bg-surface lg:hidden"
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
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-primary/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-40 flex w-80 flex-col bg-background shadow-2xl lg:hidden"
            >
              <div className="flex flex-1 flex-col gap-2 overflow-y-auto px-6 pb-8 pt-24">
                {/* Language badge */}
                <div className="mb-4">
                  <span className="rounded-full bg-surface px-3 py-1 font-body text-xs text-muted">
                    EN &middot; OR &middot; AM
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
                      className="block rounded-lg px-4 py-3 font-heading text-lg font-bold text-primary transition-colors hover:bg-surface hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Divider */}
                <div className="my-4 h-px bg-border" />

                {/* Phone */}
                <motion.a
                  href={`tel:${BRAND.phone.replace(/[^+\d]/g, "")}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 font-body text-base font-semibold text-primary transition-colors hover:text-accent"
                >
                  <Phone className="h-5 w-5 text-accent" />
                  {BRAND.phone}
                </motion.a>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4"
                >
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    <Button variant="default" className="w-full">
                      Free Consultation
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Bottom info */}
              <div className="border-t border-border px-6 py-4">
                <p className="font-body text-xs text-muted">
                  {BRAND.address}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding under fixed nav */}
      <div className="h-20" />
    </>
  );
}
