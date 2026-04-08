"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { siteConfig } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Founders() {
  const { founders } = siteConfig;

  return (
    <Section
      id="founders"
      fullBleed
      className="border-y border-brand-blue/10 bg-gradient-to-b from-brand-charcoal/40 via-brand-charcoal/60 to-brand-charcoal/40 py-24 md:py-36"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-[1200px] px-6 md:px-12"
      >
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            variants={fadeUp}
            className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-brand-blue"
          >
            The Origin
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mb-8 text-3xl font-light tracking-wide text-brand-cream md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {founders.heading}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mb-10 text-base leading-relaxed text-brand-cream/90 md:text-lg md:leading-relaxed"
          >
            {founders.body}
          </motion.p>

          {/* Founder attribution */}
          <motion.div
            variants={fadeUp}
            className="mb-8 inline-flex flex-col items-center gap-3"
          >
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-8 bg-brand-blue/40" />
              <div className="h-1.5 w-1.5 rotate-45 bg-brand-blue/60" />
              <div className="h-[1px] w-8 bg-brand-blue/40" />
            </div>
            <p className="text-sm font-medium text-brand-cream">
              {founders.founderName}
            </p>
            <p className="text-xs tracking-wide text-brand-blue/80">
              {founders.founderTitle}
            </p>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            variants={fadeUp}
            className="mx-auto max-w-lg"
          >
            <p
              className="text-xl italic text-brand-cream/90 md:text-2xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              &ldquo;{founders.quote}&rdquo;
            </p>
          </motion.blockquote>
        </div>
      </motion.div>
    </Section>
  );
}
