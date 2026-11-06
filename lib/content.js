// Shared content used across the home page, /work and the project pages.

export const VC_UNFILTERED_URL =
  "https://www.linkedin.com/pulse/vc-unfiltered-founder-spotlight-vol-11-1752vc-39akc/";
export const PRODUCT_HUNT_URL =
  "https://www.producthunt.com/products/remore-your-2nd-brain-living-in-whatsapp?launch=remore-your-2nd-brain-living-in-whatsapp";
export const REMORE_URL = "https://www.remoreai.in";

export const featuredItems = [
  {
    href: VC_UNFILTERED_URL,
    title: "Featured in VC Unfiltered — Founder Spotlight, Vol. 11",
    description:
      "Remore got featured in this week's VC Unfiltered for building under vertical and applied AI, alongside many other founders building interesting things.",
    image: "/images/vc-unfiltered.jpg",
    badge: "Featured",
    accent: "blue",
  },
  {
    href: PRODUCT_HUNT_URL,
    title: "Remore is live on Product Hunt",
    description:
      "After months of building, experimenting and fixing things, Remore went live on Product Hunt.",
    image: "/images/producthunt-remore.jpg",
    badge: "Launched",
    accent: "neutral",
  },
];

// Add more items here later — both /work and the home teaser read this array.
// Description is taken from the site's own meta description (scoutly-wine.vercel.app).
export const buildingItems = [
  {
    name: "Scoutly",
    href: "https://scoutly-wine.vercel.app",
    image: "/images/scoutly.png",
    status: "Building now",
    description:
      "Finds early-stage startups that fit you, finds the right person to write to, and drafts a short email from your own work. Nothing goes out until you reply SEND.",
  },
];
