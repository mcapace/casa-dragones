"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Section from "./Section";
import { siteConfig } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/animations";

function VideoPlayer({
  vimeoId,
  title,
  posterSrc,
}: {
  vimeoId: string;
  title: string;
  posterSrc: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-brand-charcoal">
      {playing ? (
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0&color=C9A96E`}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          className="group relative block h-full w-full"
          aria-label={`Play ${title}`}
        >
          {/* Poster image */}
          <Image
            src={posterSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-brand-black/40 transition-colors group-hover:bg-brand-black/30" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-cream/30 bg-brand-black/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-brand-gold/50 md:h-20 md:w-20">
              <svg
                className="ml-1 h-6 w-6 text-brand-cream transition-colors group-hover:text-brand-gold md:h-7 md:w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-black/80 to-transparent p-6">
            <p className="text-sm font-medium text-brand-cream/80">{title}</p>
          </div>
        </button>
      )}
    </div>
  );
}

export default function VideoSection() {
  const { videos } = siteConfig;

  return (
    <Section id="videos" fullBleed className="py-24 md:py-36">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-[1200px] px-6 md:px-12"
      >
        <motion.div variants={fadeUp} className="mb-16 text-center">
          <h2
            className="mb-4 text-3xl font-light tracking-wide text-brand-cream md:text-4xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The Craft
          </h2>
          <p className="text-sm tracking-wide text-brand-cream/50">
            Experience the artistry behind each expression
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {videos.map((video) => (
            <motion.div key={video.id} variants={fadeUp}>
              <VideoPlayer
                vimeoId={video.vimeoId}
                title={video.title}
                posterSrc={video.posterSrc}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
