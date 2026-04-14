"use client";

import LoadingScreen from "@/components/LoadingScreen";
import StickyNav from "@/components/StickyNav";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import Founders from "@/components/Founders";
import ProductFeature from "@/components/ProductFeature";
import Craftsmanship from "@/components/Craftsmanship";
import Heritage from "@/components/Heritage";
import Accolades from "@/components/Accolades";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/content";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <StickyNav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <BrandStory />
        <Founders />
        <ProductFeature product={siteConfig.products[0]} />
        <ProductFeature product={siteConfig.products[1]} reversed />
        <Craftsmanship />
        <Heritage />
        <Accolades />
        <VideoSection />
      </main>
      <Footer />
    </>
  );
}
