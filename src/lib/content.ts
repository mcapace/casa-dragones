export const siteConfig = {
  brand: {
    name: "Casa Dragones",
    tagline: "The Art of Tequila",
    logo: "/assets/logos/casa-dragones-logo-white.png",
    logoBlu: "/assets/logos/casa-dragones-logo-blue.png",
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
    imageSrc: "/assets/hero/casa-dragones-reposado-anejo-16x9.jpg",
    mobileImageSrc: "/assets/hero/casa-dragones-reposado-anejo-4x5.jpg",
    videoSrc: "",
    headline: "Where Tradition Meets Mastery",
    subheadline: "Ultra-premium small batch tequila — Woman-founded. Woman-led.",
  },
  brandStory: {
    heading: "The Pursuit of Perfection",
    body: [
      "Casa Dragones is an ultra-premium small batch tequila founded on a passion for innovation and a deep reverence for tequila-making tradition. Each expression is meticulously handcrafted to deliver an extraordinary sipping experience — from hand-selected Blue Weber Agave grown in volcanic soil to the final pour.",
      "Our journey of taste begins with a modern, sustainable method of production in the highlands of Jalisco. Water sourced from natural spring aquifers, mineral-rich from volcanic soil, and precision-purified for balance. This is tequila elevated to art.",
    ],
  },
  products: [
    {
      id: "reposado-mizunara",
      name: "Casa Dragones Reposado Mizunara",
      shortName: "Reposado Mizunara",
      tagline: "The First Tequila Rested Exclusively in Japanese Mizunara Oak",
      description:
        "Casa Dragones Reposado Mizunara is the first tequila rested exclusively in new Mizunara casks, a rare oak native to Japan and traditionally used for aging Japanese whiskies. Crafted in partnership with Japan's only independent cooperage, these ancient trees can grow up to 200 years before they are harvested and handcrafted into the highest quality casks. This delicately rested tequila delivers subtle notes of orange blossom, apricot and coffee bean — perfect for the discerning reposado or Japanese whisky lover.",
      tastingNotes: {
        nose: "Orange blossom, magnolia with gentle notes of honey and sandalwood",
        palate: "Balanced notes of oak, butterscotch and apricot",
        finish: "Long finish with hints of coffee bean and mellow spice",
      },
      body: "Light, bright golden with a silky texture, and long pronounced legs",
      imageSrc: "/assets/products/tequila-casa-dragones-reposado-750-US-bottle.png",
      heroImageSrc: "/assets/hero/casa-dragones-reposado-mizunara-16x9.jpg",
      accent: "mizunara",
      ctaText: "Explore Reposado Mizunara",
      ctaUrl: "https://casadragones.com",
      serving: "Best served neat or with a small ice cube",
      quotes: [
        {
          text: "A tequila to celebrate the finest Mexico can offer.",
          source: "The New York Times",
        },
        {
          text: "I love the smooth texture and beautiful apricot notes of the Reposado Mizunara.",
          source: "Chef Masa Takayama, Chef-Proprietor, Masa & Bar Masa",
        },
        {
          text: "Mexico meets Japan with this new, aged tequila.",
          source: "Robb Report",
        },
      ],
    },
    {
      id: "anejo-barrel-blend",
      name: "Casa Dragones Añejo Barrel Blend",
      shortName: "Añejo Barrel Blend",
      tagline: "An Extraordinary Barrel Blend",
      description:
        "A 100% Blue Agave Añejo tequila matured in two different wood barrels — new French Oak and new American Oak — each selected for their individual flavor and characteristics. Working with one of France's most respected cooperages, our Maestro Tequilero and Master Cooper expertly crafted two custom-made oak barrels. At the end of the aging process, we artfully blend both barrel styles together to create infinite richness and an agave-forward taste profile that is both elegant and smooth.",
      tastingNotes: {
        nose: "Fresh floral, pear with notes of figs and almonds",
        palate: "Notes of macadamia, nutmeg and blackberry",
        finish: "Long round finish, notes of cacao, spicy black pepper",
      },
      body: "Light caramel, with bright hues and pronounced legs",
      imageSrc: "/assets/products/tequila-casa-dragones-anejo-750-US-bottle.png",
      heroImageSrc: "/assets/hero/casa-dragones-anejo-barrel-blend-16x9.jpg",
      accent: "anejo",
      ctaText: "Explore Añejo Barrel Blend",
      ctaUrl: "https://casadragones.com",
      serving: "Best served neat or with a small ice cube",
      quotes: [
        {
          text: "A luxurious sipping tequila matured in French and American oak… a refreshing alternative to gifting a bottle of scotch.",
          source: "Food & Wine",
        },
        {
          text: "You have another winner. It's beautiful and the body and color are extraordinary.",
          source: "Chef Thomas Keller, Chef-Proprietor, The French Laundry & Per Se",
        },
      ],
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
      quote: "Chairman's Trophy",
      source: "Ultimate Spirits Challenge",
      detail: "96 Points — Extraordinary",
      product: "Casa Dragones Joven",
    },
  ],
  videos: [
    {
      id: "reposado-mizunara-video",
      title: "Casa Dragones Reposado Mizunara",
      vimeoId: "744805235",
      posterSrc: "/assets/hero/casa-dragones-reposado-mizunara-16x9.jpg",
    },
    {
      id: "anejo-barrel-blend-video",
      title: "Casa Dragones Añejo Barrel Blend",
      vimeoId: "427150598",
      posterSrc: "/assets/hero/casa-dragones-anejo-barrel-blend-16x9.jpg",
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
      "Discover Casa Dragones ultra-premium tequila. Featuring the groundbreaking Reposado Mizunara aged in rare Japanese oak and the award-winning Añejo Barrel Blend. Presented by Whisky Advocate.",
    ogImage: "/assets/hero/casa-dragones-reposado-mizunara-16x9.jpg",
  },
};

export type SiteConfig = typeof siteConfig;
export type Product = (typeof siteConfig.products)[number];
export type Accolade = (typeof siteConfig.accolades)[number];
export type VideoItem = (typeof siteConfig.videos)[number];
