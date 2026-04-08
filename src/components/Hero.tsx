"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/content";

export default function Hero() {
  const { hero, brand } = siteConfig;

  return (
    <section
      id="hero"
      className="film-grain vignette relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      {hero.mediaType === "video" && hero.videoSrc ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          poster={hero.imageSrc}
        >
          <source src={hero.videoSrc} type="video/mp4" />
        </video>
      ) : (
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {/* Desktop hero (16:9) */}
          <Image
            src={hero.imageSrc}
            alt={brand.name}
            fill
            priority
            sizes="100vw"
            className="hidden object-cover md:block"
          />
          {/* Mobile hero (4:5) */}
          <Image
            src={hero.mobileImageSrc}
            alt={brand.name}
            fill
            priority
            sizes="100vw"
            className="block object-cover md:hidden"
          />
        </motion.div>
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-brand-black/70 via-brand-black/20 to-brand-black" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-brand-black/30 via-transparent to-brand-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Sponsored label */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="sponsored-label mb-10"
        >
          Sponsored Content
        </motion.span>

        {/* Logo — real Casa Dragones logo (white on dark) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        >
          <Image
            src={brand.logo}
            alt={brand.name}
            width={500}
            height={80}
            priority
            className="mb-10 h-auto w-56 md:w-72 lg:w-96"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          className="mb-4 max-w-3xl text-4xl font-light tracking-wide text-brand-cream md:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {hero.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="max-w-xl text-sm uppercase tracking-[0.15em] text-brand-cream/60 md:text-base"
        >
          {hero.subheadline}
        </motion.p>

        {/* Decorative line — brand blue */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 2, duration: 1.2, ease: "easeInOut" }}
          className="mt-8 h-[1px] bg-brand-blue/60"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[0.6rem] uppercase tracking-[0.3em] text-brand-cream/40">
            Scroll
          </span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            className="text-brand-blue/50"
          >
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1" />
            <motion.circle
              cx="8"
              cy="8"
              r="2"
              fill="currentColor"
              animate={{ cy: [8, 14, 8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
