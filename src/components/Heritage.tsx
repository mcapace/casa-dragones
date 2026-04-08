"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { siteConfig } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Heritage() {
  const { heritage } = siteConfig;

  return (
    <Section id="heritage" className="py-20 md:py-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.div variants={fadeUp} className="mb-6 flex justify-center">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-brand-blue/30" />
            <span className="text-2xl font-light text-brand-blue" style={{ fontFamily: "var(--font-playfair)" }}>
              16
            </span>
            <div className="h-[1px] w-12 bg-brand-blue/30" />
          </div>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="mb-8 text-2xl font-light tracking-wide text-brand-cream md:text-3xl lg:text-4xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {heritage.heading}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-base leading-relaxed text-brand-cream/85 md:text-lg md:leading-relaxed"
        >
          {heritage.body}
        </motion.p>
      </motion.div>
    </Section>
  );
}
