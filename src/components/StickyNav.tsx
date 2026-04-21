"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/content";

const NAV_LINKS = [
  { id: "brand-story", label: "Story" },
  { id: "founders", label: "Founders" },
  { id: "reposado-mizunara", label: "Reposado" },
  { id: "anejo-barrel-blend", label: "Añejo" },
  { id: "craftsmanship", label: "Craftsmanship" },
  { id: "heritage", label: "Heritage" },
  { id: "videos", label: "Videos" },
] as const;

export default function StickyNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] border-b border-white/[0.08] bg-brand-black/95 shadow-[0_1px_0_rgba(28,161,209,0.06)] backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="flex shrink-0 items-center rounded-sm outline-none ring-brand-blue/40 focus-visible:ring-2"
            aria-label="Casa Dragones — home"
          >
            <Image
              src={siteConfig.brand.logo}
              alt=""
              width={180}
              height={30}
              className="h-7 w-auto sm:h-8"
            />
          </button>

          <nav
            className="hidden items-center gap-1 lg:flex lg:gap-0 xl:gap-1"
            aria-label="Page sections"
          >
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="rounded-sm px-3 py-2 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-brand-cream/70 transition-colors hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/50 xl:px-3.5"
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-5">
            <span className="sponsored-label hidden whitespace-nowrap sm:inline">Sponsored</span>
            <button
              type="button"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-brand-cream transition-colors hover:border-brand-blue/40 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/50 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed top-14 right-0 bottom-0 left-0 z-[99] bg-black/70 backdrop-blur-sm lg:hidden"
              initial={{ opacity: reduceMotion ? 1 : 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: reduceMotion ? 1 : 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              id="mobile-nav"
              className="fixed top-14 left-0 right-0 z-[100] max-h-[min(70vh,520px)] overflow-y-auto border-b border-white/10 bg-brand-black/98 px-4 py-4 shadow-xl backdrop-blur-xl lg:hidden"
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : -12 }}
              transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col gap-0.5">
                {NAV_LINKS.map(({ id, label }) => (
                  <li key={id}>
                    <button
                      type="button"
                      onClick={() => scrollTo(id)}
                      className="w-full rounded-md px-3 py-3 text-left text-xs font-medium uppercase tracking-[0.2em] text-brand-cream/85 transition-colors hover:bg-white/[0.05] hover:text-brand-blue"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-white/10 pt-4 text-center text-[0.6rem] uppercase tracking-[0.3em] text-brand-blue/90">
                Sponsored Content
              </p>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
