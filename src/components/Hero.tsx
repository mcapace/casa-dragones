"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/content";

export default function Hero() {
  const { hero, brand } = siteConfig;
  const reduceMotion = useReducedMotion();

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
      ) : reduceMotion ? (
        <div className="absolute inset-0 overflow-hidden">
          {/* Heavy zoom — source art has large margins; crop tight on bottles & glassware */}
          <div className="absolute inset-0 origin-center scale-[1.72] md:scale-[2.12]">
            <Image
              src={hero.imageSrc}
              alt={brand.name}
              fill
              priority
              sizes="100vw"
              className="hidden object-cover object-center md:block"
            />
            <Image
              src={hero.mobileImageSrc}
              alt={brand.name}
              fill
              priority
              sizes="100vw"
              className="block object-cover object-[center_48%] md:hidden"
            />
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 origin-center scale-[1.72] md:scale-[2.12]">
            <motion.div
              initial={{ scale: 1.03 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "easeOut" }}
              className="absolute inset-0 origin-center"
            >
              <Image
                src={hero.imageSrc}
                alt={brand.name}
                fill
                priority
                sizes="100vw"
                className="hidden object-cover object-center md:block"
              />
              <Image
                src={hero.mobileImageSrc}
                alt={brand.name}
                fill
                priority
                sizes="100vw"
                className="block object-cover object-[center_48%] md:hidden"
              />
            </motion.div>
          </div>
        </div>
      )}

      {/* Gradient overlays — lighter base + subtle vignette + center scrim for type */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-brand-black/50 via-transparent to-brand-black/80" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-brand-black/20 via-transparent to-brand-black/20" />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_88%_58%_at_50%_40%,rgba(0,0,0,0.38),transparent_74%)]"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Sponsored label */}
        <motion.span
          initial={{ opacity: reduceMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: reduceMotion ? 0 : 0.5,
            duration: reduceMotion ? 0.01 : 0.8,
          }}
          className="sponsored-label mb-10"
        >
          Sponsored Content
        </motion.span>

        {/* Logo — real Casa Dragones logo (white on dark) */}
        <motion.div
          initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: reduceMotion ? 0 : 0.8,
            duration: reduceMotion ? 0.01 : 1,
            ease: "easeOut",
          }}
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
          initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: reduceMotion ? 0 : 1.2,
            duration: reduceMotion ? 0.01 : 1,
            ease: "easeOut",
          }}
          className="mb-4 max-w-3xl text-4xl font-light tracking-wide text-brand-cream md:text-5xl lg:text-6xl"
          style={{
            fontFamily: "var(--font-playfair)",
            textShadow:
              "0 2px 28px rgba(0,0,0,0.85), 0 1px 3px rgba(0,0,0,0.95)",
          }}
        >
          {hero.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: reduceMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: reduceMotion ? 0 : 1.6,
            duration: reduceMotion ? 0.01 : 1,
          }}
          className="max-w-xl text-sm uppercase tracking-[0.15em] text-brand-cream/90 md:text-base"
          style={{
            textShadow: "0 1px 18px rgba(0,0,0,0.85), 0 1px 2px rgba(0,0,0,0.9)",
          }}
        >
          {hero.subheadline}
        </motion.p>

        {/* Decorative line — brand blue */}
        <motion.div
          initial={{ width: reduceMotion ? 80 : 0 }}
          animate={{ width: 80 }}
          transition={{
            delay: reduceMotion ? 0 : 2,
            duration: reduceMotion ? 0.01 : 1.2,
            ease: "easeInOut",
          }}
          className="mt-8 h-[1px] bg-brand-blue/60"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: reduceMotion ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: reduceMotion ? 0 : 2.5,
          duration: reduceMotion ? 0.01 : 1,
        }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        {reduceMotion ? (
          <div className="flex flex-col items-center gap-2">
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-brand-cream/40">
              Scroll
            </span>
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              className="text-brand-blue/50"
              aria-hidden
            >
              <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1" />
              <circle cx="8" cy="11" r="2" fill="currentColor" />
            </svg>
          </div>
        ) : (
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-brand-cream/60">
              Scroll
            </span>
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              className="text-brand-blue/50"
              aria-hidden
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
        )}
      </motion.div>
    </section>
  );
}
