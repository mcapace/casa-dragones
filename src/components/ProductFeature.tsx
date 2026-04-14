"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { type Product } from "@/lib/content";
import { useScrollAnimationVariants } from "@/hooks/useScrollAnimationVariants";

interface ProductFeatureProps {
  product: Product;
  reversed?: boolean;
}

export default function ProductFeature({ product, reversed = false }: ProductFeatureProps) {
  const isMizunara = product.accent === "mizunara";
  const anim = useScrollAnimationVariants();

  return (
    <section
      id={product.id}
      className={`relative overflow-hidden py-24 md:py-36 ${
        isMizunara
          ? "bg-gradient-to-b from-[#151A1E] via-[#1C2228] to-[#151A1E]"
          : "bg-gradient-to-b from-[#1A1710] via-[#221E15] to-[#1A1710]"
      }`}
    >
      {/* Accent background texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "url('/assets/textures/oak-pattern.svg')",
          backgroundSize: "400px",
        }}
      />

      <motion.div
        variants={anim.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={`mx-auto grid max-w-[1200px] items-center gap-8 px-6 md:grid-cols-[1fr_1fr] md:gap-12 md:px-12 lg:gap-20 ${
          reversed ? "md:[direction:rtl]" : ""
        }`}
      >
        {/* Product Image — LARGE and prominent */}
        <motion.div
          variants={reversed ? anim.slideInRight : anim.slideInLeft}
          className="relative md:[direction:ltr]"
        >
          <div className="relative mx-auto aspect-[2/3] w-full max-w-lg overflow-hidden">
            {/* Glow effect behind bottle — softer on Reposado to match retouch feedback */}
            <div
              className={`absolute top-1/4 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-full ${
                isMizunara ? "blur-[64px] bg-brand-blue/10" : "blur-[80px] bg-brand-amber/15"
              }`}
            />
            <Image
              src={product.imageSrc}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 90vw, 45vw"
              className={
                isMizunara
                  ? "relative z-10 object-contain [filter:brightness(1.03)_contrast(0.94)_saturate(0.98)_drop-shadow(0_28px_56px_rgba(0,0,0,0.5))]"
                  : "relative z-10 object-contain drop-shadow-2xl"
              }
            />
            {/* Bottom blend — helps bottle base read cleanly on dark ground (silo) */}
            {isMizunara && (
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[28%] bg-gradient-to-t from-[#07090b] via-[#07090b]/70 to-transparent"
                aria-hidden
              />
            )}
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div
          variants={reversed ? anim.slideInLeft : anim.slideInRight}
          className="md:[direction:ltr]"
        >
          {/* Tagline */}
          <motion.p
            variants={anim.fadeUp}
            className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-blue"
          >
            {product.tagline}
          </motion.p>

          {/* Name */}
          <motion.h2
            variants={anim.fadeUp}
            className="mb-6 text-3xl font-light tracking-wide text-brand-cream md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {product.shortName}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={anim.fadeUp}
            className="mb-8 text-base leading-relaxed text-brand-cream/90 md:text-lg"
          >
            {product.description}
          </motion.p>

          {/* Body & Color */}
          <motion.div variants={anim.fadeUp} className="mb-6">
            <h3 className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-brand-cream/70">
              Body & Color
            </h3>
            <p className="text-sm leading-relaxed italic text-brand-cream/80">
              {product.body}
            </p>
          </motion.div>

          {/* Tasting Notes */}
          <motion.div variants={anim.fadeUp} className="mb-8 space-y-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-brand-cream/70">
              Tasting Notes
            </h3>
            <div className="space-y-3">
              {(["nose", "palate", "finish"] as const).map((note) => (
                <div key={note} className="flex gap-4">
                  <span className="w-16 shrink-0 text-xs font-medium uppercase tracking-widest text-brand-blue/70">
                    {note === "palate" ? "taste" : note}
                  </span>
                  <span className="text-sm leading-relaxed text-brand-cream/80">
                    {product.tastingNotes[note]}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Serving suggestion */}
          <motion.p
            variants={anim.fadeUp}
            className="mb-8 text-xs italic tracking-wide text-brand-cream/60"
          >
            {product.serving}
          </motion.p>

          {/* Quote */}
          {product.quotes[0] && (
            <motion.blockquote
              variants={anim.fadeUp}
              className="mb-10 border-l-2 border-brand-blue/30 pl-5"
            >
              <p className="mb-1 text-sm italic leading-relaxed text-brand-cream/70">
                &ldquo;{product.quotes[0].text}&rdquo;
              </p>
              <cite className="text-xs not-italic tracking-wide text-brand-cream/60">
                — {product.quotes[0].source}
              </cite>
            </motion.blockquote>
          )}

          {/* CTA */}
          <motion.a
            variants={anim.fadeUp}
            href={product.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-brand-blue/30 px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-blue transition-all duration-300 hover:border-brand-blue hover:bg-brand-blue/10"
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
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/10 to-transparent" />
    </section>
  );
}
