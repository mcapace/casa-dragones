"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { siteConfig } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Accolades() {
  const { accolades } = siteConfig;

  return (
    <Section
      id="accolades"
      fullBleed
      className="border-y border-brand-blue/10 bg-gradient-to-b from-brand-black via-brand-charcoal/50 to-brand-black py-24 md:py-32"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-[1200px] px-6 md:px-12"
      >
        <motion.h2
          variants={fadeUp}
          className="mb-16 text-center text-xs font-medium uppercase tracking-[0.3em] text-brand-blue/70"
        >
          Recognition & Acclaim
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {accolades.map((accolade, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative border border-brand-blue/10 bg-brand-black/50 p-8 text-center transition-all duration-500 hover:border-brand-blue/30 hover:bg-brand-charcoal/30"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-brand-blue transition-all duration-500 group-hover:w-full" />

              <p
                className="mb-2 text-2xl font-light tracking-wide text-brand-blue md:text-3xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {accolade.quote}
              </p>
              <p className="mb-3 text-sm font-medium tracking-wide text-brand-cream/80">
                {accolade.source}
              </p>
              <p className="mb-1 text-xs text-brand-cream/40">
                {accolade.detail}
              </p>
              <p className="text-[0.65rem] uppercase tracking-[0.15em] text-brand-blue/40">
                {accolade.product}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
