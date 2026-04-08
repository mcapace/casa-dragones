"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { siteConfig } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Craftsmanship() {
  const { craftsmanship } = siteConfig;

  return (
    <Section id="craftsmanship" fullBleed className="py-24 md:py-36">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-[1200px] px-6 md:px-12"
      >
        <motion.div variants={fadeUp} className="mb-16 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-brand-blue">
            The Process
          </p>
          <h2
            className="text-3xl font-light tracking-wide text-brand-cream md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {craftsmanship.heading}
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2">
          {craftsmanship.features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative border border-brand-cream/10 bg-brand-charcoal/30 p-8 transition-all duration-500 hover:border-brand-blue/20 hover:bg-brand-charcoal/50 md:p-10"
            >
              {/* Number accent */}
              <span className="mb-4 block text-4xl font-light text-brand-blue/30" style={{ fontFamily: "var(--font-playfair)" }}>
                0{i + 1}
              </span>
              <h3
                className="mb-3 text-xl font-light tracking-wide text-brand-cream md:text-2xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-brand-cream/80">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
