export type Project = {
  slug: string;
  name: string;
  year: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  services: string[];
  stack: string[];
  highlights: string[];
  /** Public production URL when the work is live */
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "ckm-marfcos",
    name: "CKM Marfcos Herbal",
    year: "2026",
    summary:
      "E-commerce and brand experience for a Ghana-based herbal remedies retailer—shop, categories, search, cart, and checkout built for clarity and conversion.",
    imageSrc:
      "https://ckmmarfcos.com/storage/banners/01KKQ9WC6CR32X3NV4MNGD5CQ2.jpg",
    imageAlt: "Marfcos Herbal storefront hero promoting warehouse products",
    services: [
      "Web Development",
      "E-commerce",
      "Branding & UX",
    ],
    stack: ["Laravel", "Livewire", "Alpine.js", "Tailwind CSS"],
    highlights: [
      "Product catalog with category browsing (diabetes, immune, respiratory, and more)",
      "On-site search, cart, and checkout flow tailored for retail operations",
      "Trust-led content highlighting organic sourcing and FDA certification",
      "Responsive, fast UI with a polished marketing and shop experience",
    ],
    liveUrl: "https://ckmmarfcos.com/",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
