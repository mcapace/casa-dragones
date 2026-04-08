"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function StickyNav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 border-b border-brand-gold/10 bg-brand-black/90 backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3 md:px-12">
            <Image
              src="/assets/logos/casa-dragones-logo.svg"
              alt="Casa Dragones"
              width={140}
              height={40}
              className="h-8 w-auto"
            />
            <div className="hidden items-center gap-8 md:flex">
              <button
                onClick={() => scrollTo("brand-story")}
                className="text-xs uppercase tracking-[0.2em] text-brand-cream/60 transition-colors hover:text-brand-gold"
              >
                Story
              </button>
              <button
                onClick={() => scrollTo("reposado-mizunara")}
                className="text-xs uppercase tracking-[0.2em] text-brand-cream/60 transition-colors hover:text-brand-gold"
              >
                Reposado
              </button>
              <button
                onClick={() => scrollTo("anejo-barrel-blend")}
                className="text-xs uppercase tracking-[0.2em] text-brand-cream/60 transition-colors hover:text-brand-gold"
              >
                Añejo
              </button>
              <button
                onClick={() => scrollTo("videos")}
                className="text-xs uppercase tracking-[0.2em] text-brand-cream/60 transition-colors hover:text-brand-gold"
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
