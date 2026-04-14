"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "./Section";
import { siteConfig } from "@/lib/content";
import { useScrollAnimationVariants } from "@/hooks/useScrollAnimationVariants";

export default function Footer() {
  const { cta, brand, publisher } = siteConfig;
  const anim = useScrollAnimationVariants();

  return (
    <footer className="relative">
      {/* CTA Section */}
      <Section
        id="cta"
        fullBleed
        className="bg-gradient-to-b from-brand-black via-brand-charcoal/30 to-brand-black py-28 md:py-40"
      >
        <motion.div
          variants={anim.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-2xl px-6 text-center md:px-12"
        >
          {/* Logo */}
          <motion.div variants={anim.fadeUp} className="mb-10 flex justify-center">
            <Image
              src={brand.logoBlu}
              alt={brand.name}
              width={280}
              height={45}
              className="h-auto w-44 md:w-56"
            />
          </motion.div>

          <motion.h2
            variants={anim.fadeUp}
            className="mb-6 text-3xl font-light tracking-wide text-brand-cream md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {cta.heading}
          </motion.h2>

          <motion.p
            variants={anim.fadeUp}
            className="mb-10 text-base leading-relaxed text-brand-cream/85 md:text-lg"
          >
            {cta.body}
          </motion.p>

          <motion.a
            variants={anim.fadeUp}
            href={cta.buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-brand-blue/40 bg-brand-blue/5 px-10 py-4 text-xs font-medium uppercase tracking-[0.25em] text-brand-blue transition-all duration-300 hover:border-brand-blue hover:bg-brand-blue/15"
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

      {/* Whisky Advocate Footer Bar */}
      <div className="border-t border-brand-blue/10 bg-brand-charcoal/40">
        <div className="mx-auto max-w-[1200px] px-6 py-10 md:px-12">
          {/* Top row: logos + branding */}
          <div className="mb-8 flex flex-col items-center gap-8 md:flex-row md:justify-between">
            {/* Whisky Advocate branding — prominent */}
            <div className="flex flex-col items-center gap-3 md:items-start">
              <Image
                src={publisher.logo}
                alt={publisher.name}
                width={200}
                height={50}
                className="h-8 w-auto"
              />
              <p className="text-xs tracking-wide text-brand-cream/60">
                A publication of {publisher.parent}
              </p>
            </div>

            {/* Casa Dragones logo */}
            <div className="flex flex-col items-center gap-3 md:items-end">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={180}
                height={30}
                className="h-6 w-auto opacity-70"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="mb-6 h-px bg-gradient-to-r from-transparent via-brand-cream/10 to-transparent" />

          {/* Bottom row: legal + disclosure */}
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex flex-col gap-1">
              <span className="sponsored-label">Sponsored Content</span>
              <p className="text-[0.6rem] leading-relaxed tracking-wide text-brand-cream/50">
                This content was produced in collaboration with Casa Dragones and does not reflect
                the editorial opinion of {publisher.name}.
              </p>
            </div>
            <p className="shrink-0 text-[0.6rem] tracking-wide text-brand-cream/50">
              &copy; {new Date().getFullYear()} {publisher.parent}. All rights reserved.
              <br />
              Please sip responsibly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
