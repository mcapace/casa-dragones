# Casa Dragones — Sponsored Content Landing Page

A premium sponsored content landing page for **Tequila Casa Dragones**, hosted on **Whisky Advocate** (M. Shanken Communications).

## Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion (scroll-driven)
- **Language:** TypeScript
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Design tokens, base styles
│   ├── layout.tsx       # Root layout with SEO meta
│   └── page.tsx         # Main landing page
├── components/
│   ├── Hero.tsx          # Full-viewport hero with parallax
│   ├── BrandStory.tsx    # Editorial intro section
│   ├── ProductFeature.tsx # Reusable product section
│   ├── Accolades.tsx     # Awards & press grid
│   ├── VideoSection.tsx  # Lazy-loaded Vimeo embeds
│   ├── Footer.tsx        # CTA + footer with disclosures
│   ├── StickyNav.tsx     # Appears after scrolling past hero
│   ├── LoadingScreen.tsx # Splash screen with logo
│   └── Section.tsx       # Reusable scroll-animated wrapper
└── lib/
    ├── content.ts        # All copy, images, URLs (edit here)
    ├── animations.ts     # Framer Motion variants
    └── fonts.ts          # Font configuration
public/
└── assets/
    ├── hero/             # Hero images/video
    ├── products/         # Product photography
    ├── logos/            # Brand logos
    ├── textures/         # Grain overlay, oak pattern
    └── video/            # Video assets
```

## Content Updates

All content (copy, images, URLs) is managed in `src/lib/content.ts`. Non-developers can update this file to swap assets when the client delivers final creative.

## Deployment

Connected to Vercel for auto-deploy on push. Configure environment variables in the Vercel dashboard if needed.

```bash
npm run build   # Production build
npm run start   # Start production server
```

## Swapping Assets

1. **Hero:** Replace `public/assets/hero/hero-placeholder.svg` with final hero image/video. Update `src/lib/content.ts` hero section.
2. **Products:** Replace SVGs in `public/assets/products/` with photography. Update paths in `content.ts`.
3. **Logos:** Replace SVGs in `public/assets/logos/` with final brand logos.
4. **Fonts:** When brand fonts are delivered, update font references in `globals.css`.
