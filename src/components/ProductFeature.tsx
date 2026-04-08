"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { type Product } from "@/lib/content";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

interface ProductFeatureProps {
  product: Product;
  reversed?: boolean;
}

export default function ProductFeature({ product, reversed = false }: ProductFeatureProps) {
  const isMizunara = product.accent === "mizunara";

  return (
    <section
      id={product.id}
      className={`relative overflow-hidden py-24 md:py-36 ${
        isMizunara
          ? "bg-gradient-to-b from-brand-black via-[#0D0D0A] to-brand-black"
          : "bg-gradient-to-b from-brand-black via-[#120E05] to-brand-black"
      }`}
    >
      {/* Accent background texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "url('/assets/textures/oak-pattern.svg')",
          backgroundSize: "400px",
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={`mx-auto grid max-w-[1200px] items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-12 lg:gap-24 ${
          reversed ? "md:[direction:rtl]" : ""
        }`}
      >
        {/* Product Image */}
        <motion.div
          variants={reversed ? slideInRight : slideInLeft}
          className="relative md:[direction:ltr]"
        >
          <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden">
            {/* Glow effect behind bottle */}
            <div
              className={`absolute inset-0 rounded-full opacity-20 blur-3xl ${
                isMizunara
                  ? "bg-gradient-to-br from-brand-gold/30 to-transparent"
                  : "bg-gradient-to-br from-brand-amber/30 to-transparent"
              }`}
            />
            <Image
              src={product.imageSrc}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="relative z-10 object-contain p-8"
            />
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div
          variants={reversed ? slideInLeft : slideInRight}
          className="md:[direction:ltr]"
        >
          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className={`mb-4 text-xs font-medium uppercase tracking-[0.25em] ${
              isMizunara ? "text-brand-gold" : "text-brand-amber"
            }`}
          >
            {product.tagline}
          </motion.p>

          {/* Name */}
          <motion.h2
            variants={fadeUp}
            className="mb-6 text-3xl font-light tracking-wide text-brand-cream md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {product.shortName}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mb-8 text-base leading-relaxed text-brand-cream/70 md:text-lg"
          >
            {product.description}
          </motion.p>

          {/* Tasting Notes */}
          <motion.div variants={fadeUp} className="mb-10 space-y-4">
            <h3
              className="text-xs font-medium uppercase tracking-[0.2em] text-brand-cream/50"
            >
              Tasting Notes
            </h3>
            <div className="space-y-3">
              {(["nose", "palate", "finish"] as const).map((note) => (
                <div key={note} className="flex gap-4">
                  <span
                    className={`w-16 shrink-0 text-xs font-medium uppercase tracking-widest ${
                      isMizunara ? "text-brand-gold/70" : "text-brand-amber/70"
                    }`}
                  >
                    {note}
                  </span>
                  <span className="text-sm leading-relaxed text-brand-cream/60">
                    {product.tastingNotes[note]}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.a
            variants={fadeUp}
            href={product.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-3 border px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 ${
              isMizunara
                ? "border-brand-gold/30 text-brand-gold hover:border-brand-gold hover:bg-brand-gold/10"
                : "border-brand-amber/30 text-brand-amber hover:border-brand-amber hover:bg-brand-amber/10"
            }`}
          >
            {product.ctaText}
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent" />
    </section>
  );
}
