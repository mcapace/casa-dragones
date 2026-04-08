"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "./Section";
import { siteConfig } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Footer() {
  const { cta, brand, publisher } = siteConfig;

  return (
    <footer className="relative">
      {/* CTA Section */}
      <Section
        id="cta"
        fullBleed
        className="bg-gradient-to-b from-brand-black via-brand-charcoal/30 to-brand-black py-28 md:py-40"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-2xl px-6 text-center md:px-12"
        >
          {/* Decorative */}
          <motion.div variants={fadeUp} className="mb-8 flex justify-center">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-16 bg-brand-gold/30" />
              <div className="h-2 w-2 rotate-45 border border-brand-gold/40" />
              <div className="h-[1px] w-16 bg-brand-gold/30" />
            </div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mb-6 text-3xl font-light tracking-wide text-brand-cream md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {cta.heading}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mb-10 text-base leading-relaxed text-brand-cream/60 md:text-lg"
          >
            {cta.body}
          </motion.p>

          <motion.a
            variants={fadeUp}
            href={cta.buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-brand-gold/40 bg-brand-gold/5 px-10 py-4 text-xs font-medium uppercase tracking-[0.25em] text-brand-gold transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold/15"
          >
            {cta.buttonText}
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </motion.a>
        </motion.div>
      </Section>

      {/* Footer bar */}
      <div className="border-t border-brand-gold/10 bg-brand-black py-8">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-6 md:flex-row md:justify-between md:px-12">
          <div className="flex items-center gap-6">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={120}
              height={40}
              className="h-6 w-auto opacity-60"
            />
            <div className="h-4 w-px bg-brand-cream/20" />
            <Image
              src={publisher.logo}
              alt={publisher.name}
              width={120}
              height={40}
              className="h-5 w-auto opacity-40"
            />
          </div>

          <div className="flex flex-col items-center gap-2 text-center md:items-end">
            <span className="sponsored-label">Sponsored Content</span>
            <p className="text-[0.6rem] tracking-wide text-brand-cream/30">
              &copy; {new Date().getFullYear()} {publisher.parent}. Please drink responsibly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
