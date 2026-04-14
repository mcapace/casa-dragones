"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/content";

export default function StickyNav() {
  const [show, setShow] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          initial={{ y: reduceMotion ? 0 : -80, opacity: reduceMotion ? 1 : 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: reduceMotion ? 0 : -80, opacity: reduceMotion ? 1 : 0 }}
          transition={{
            duration: reduceMotion ? 0.01 : 0.3,
            ease: "easeOut",
          }}
          className="fixed top-0 left-0 right-0 z-50 border-b border-brand-blue/10 bg-brand-black/90 backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3 md:px-12">
            <Image
              src={siteConfig.brand.logo}
              alt="Casa Dragones"
              width={180}
              height={30}
              className="h-7 w-auto"
            />
            <div className="hidden items-center gap-8 md:flex">
              <button
                type="button"
                onClick={() => scrollTo("brand-story")}
                className="text-xs uppercase tracking-[0.2em] text-brand-cream/60 transition-colors hover:text-brand-blue"
              >
                Story
              </button>
              <button
                type="button"
                onClick={() => scrollTo("reposado-mizunara")}
                className="text-xs uppercase tracking-[0.2em] text-brand-cream/60 transition-colors hover:text-brand-blue"
              >
                Reposado
              </button>
              <button
                type="button"
                onClick={() => scrollTo("anejo-barrel-blend")}
                className="text-xs uppercase tracking-[0.2em] text-brand-cream/60 transition-colors hover:text-brand-blue"
              >
                Añejo
              </button>
              <button
                type="button"
                onClick={() => scrollTo("videos")}
                className="text-xs uppercase tracking-[0.2em] text-brand-cream/60 transition-colors hover:text-brand-blue"
              >
                Videos
              </button>
            </div>
            <span className="sponsored-label hidden sm:block">Sponsored Content</span>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
