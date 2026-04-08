"use client";

import LoadingScreen from "@/components/LoadingScreen";
import StickyNav from "@/components/StickyNav";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import ProductFeature from "@/components/ProductFeature";
import Accolades from "@/components/Accolades";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/content";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <StickyNav />
      <main>
        <Hero />
        <BrandStory />
        <ProductFeature product={siteConfig.products[0]} />
        <ProductFeature product={siteConfig.products[1]} reversed />
        <Accolades />
        <VideoSection />
      </main>
      <Footer />
    </>
  );
}
