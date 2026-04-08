export const siteConfig = {
  brand: {
    name: "Casa Dragones",
    tagline: "The Art of Tequila",
    logo: "/assets/logos/casa-dragones-logo.svg",
    url: "https://casadragones.com",
  },
  publisher: {
    name: "Whisky Advocate",
    logo: "/assets/logos/whisky-advocate-logo.svg",
    url: "https://whiskyadvocate.com",
    parent: "M. Shanken Communications",
  },
  hero: {
    mediaType: "image" as "video" | "image",
    imageSrc: "/assets/hero/hero-placeholder.svg",
    videoSrc: "", // swap in final video URL
    headline: "Where Tradition Meets Mastery",
    subheadline: "A journey through the art of ultra-premium tequila",
  },
  brandStory: {
    heading: "The Pursuit of Perfection",
    body: [
      "Casa Dragones is an ultra-premium small batch tequila founded on a passion for innovation and a deep reverence for tequila-making tradition. Each expression is a masterwork — meticulously crafted in the highlands of Jalisco using 100% pure Blue Weber Agave.",
      "From the moment the agave is hand-selected to the final bottling in its signature crystal decanter, every detail reflects an uncompromising commitment to excellence. This is tequila elevated to art.",
    ],
  },
  products: [
    {
      id: "reposado-mizunara",
      name: "Casa Dragones Reposado Mizunara",
      shortName: "Reposado Mizunara",
      tagline: "The First of Its Kind",
      description:
        "The first tequila rested exclusively in new Japanese Mizunara oak casks. This groundbreaking expression marries the smooth, refined character of Casa Dragones tequila with the rare and coveted Mizunara oak — prized for its complex aromatics of sandalwood, coconut, and oriental incense.",
      tastingNotes: {
        nose: "Delicate sandalwood, toasted coconut, hints of oriental incense and vanilla",
        palate:
          "Silky smooth entry with notes of caramel, dried fruit, and subtle spice from the Mizunara oak",
        finish:
          "Long, elegant finish with lingering notes of Japanese oak and sweet agave",
      },
      imageSrc: "/assets/products/reposado-mizunara.svg",
      accent: "mizunara", // used for theming
      ctaText: "Explore Reposado Mizunara",
      ctaUrl: "https://casadragones.com",
    },
    {
      id: "anejo-barrel-blend",
      name: "Casa Dragones Añejo Barrel Blend",
      shortName: "Añejo Barrel Blend",
      tagline: "Selected as Food & Wine Top Picks 2020",
      description:
        "A masterful blend of Casa Dragones tequilas aged in new American and French oak barrels, then finished in Sonoma County red wine casks. The result is an exquisitely complex añejo with remarkable depth and balance — recognized by Food & Wine as a Top Pick.",
      tastingNotes: {
        nose: "Rich butterscotch, toasted oak, dried apricot, and a whisper of dark chocolate",
        palate:
          "Velvety layers of caramel, roasted agave, baking spices, and hints of red berry from the wine cask finish",
        finish:
          "Warm, lingering finish with notes of vanilla, cinnamon, and a touch of leather",
      },
      imageSrc: "/assets/products/anejo-barrel-blend.svg",
      accent: "anejo",
      ctaText: "Explore Añejo Barrel Blend",
      ctaUrl: "https://casadragones.com",
    },
  ],
  accolades: [
    {
      quote: "96 Points",
      source: "Wine Enthusiast",
      detail: "Highest rated tequila",
      product: "Casa Dragones Joven",
    },
    {
      quote: "Best Blanco Tequila",
      source: "Epicurious",
      detail: "Editor's Pick",
      product: "Casa Dragones Blanco",
    },
    {
      quote: "Top Picks 2020",
      source: "Food & Wine",
      detail: "Selected by editors",
      product: "Añejo Barrel Blend",
    },
    {
      quote: "Ultimate Spirits Challenge",
      source: "96 Points, Chairman's Trophy",
      detail: "Extraordinary",
      product: "Casa Dragones Joven",
    },
  ],
  videos: [
    {
      id: "reposado-mizunara-video",
      title: "Casa Dragones Reposado Mizunara",
      vimeoId: "744805235",
      posterSrc: "/assets/products/reposado-mizunara.svg",
    },
    {
      id: "anejo-barrel-blend-video",
      title: "Casa Dragones Añejo Barrel Blend",
      vimeoId: "427150598",
      posterSrc: "/assets/products/anejo-barrel-blend.svg",
    },
  ],
  cta: {
    heading: "Discover Casa Dragones",
    body: "Experience the art of ultra-premium tequila. Visit casadragones.com to explore our full collection.",
    buttonText: "Visit Casa Dragones",
    buttonUrl: "https://casadragones.com",
  },
  seo: {
    title: "Casa Dragones — Ultra-Premium Tequila | Whisky Advocate",
    description:
      "Discover Casa Dragones ultra-premium tequila. Featuring the groundbreaking Reposado Mizunara and award-winning Añejo Barrel Blend. Presented by Whisky Advocate.",
    ogImage: "/assets/hero/hero-placeholder.svg",
  },
};

export type SiteConfig = typeof siteConfig;
export type Product = (typeof siteConfig.products)[number];
export type Accolade = (typeof siteConfig.accolades)[number];
export type VideoItem = (typeof siteConfig.videos)[number];
