"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/content";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const delay = reduceMotion ? 450 : 1800;
    const timer = setTimeout(() => setVisible(false), delay);
    return () => clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: reduceMotion ? 0.15 : 0.6,
            ease: "easeInOut",
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-black"
        >
          <motion.div
            initial={{ opacity: reduceMotion ? 1 : 0, scale: reduceMotion ? 1 : 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.6,
              ease: "easeOut",
            }}
          >
            <Image
              src={siteConfig.brand.logo}
              alt="Casa Dragones"
              width={320}
              height={52}
              priority
              className="h-auto w-56 md:w-72"
            />
          </motion.div>
          <motion.div
            initial={{ width: reduceMotion ? 120 : 0 }}
            animate={{ width: 120 }}
            transition={{
              duration: reduceMotion ? 0.01 : 1.2,
              ease: "easeInOut",
              delay: reduceMotion ? 0 : 0.3,
            }}
            className="mt-8 h-[1px] bg-brand-blue/50"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
