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
    slug: "odutan-platform",
    name: "Odutan Construction Platform",
    year: "2026",
    summary:
      "Corporate website and multilingual experience for Odutan, designed to present services, projects, and company story with a polished, responsive interface.",
    imageSrc:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Construction team reviewing site plans outdoors",
    services: [
      "Web Development",
      "Localization",
      "Content Architecture",
      "UI/UX Design",
    ],
    stack: ["Laravel", "Blade", "Tailwind CSS", "JavaScript"],
    highlights: [
      "Structured page system for home, services, projects, gallery, and contact journeys",
      "Multilingual readiness with localized content files for wider audience reach",
      "Modern responsive layout to improve readability and navigation across devices",
      "Clear conversion paths that guide visitors from discovery to inquiry",
    ],
    liveUrl: "https://odutan.com/",
  },
  {
    slug: "bamda-mining-platform",
    name: "Bamda Mining Platform",
    year: "2026",
    summary:
      "High-impact corporate platform for Bamda Mining & Construction focused on industrial credibility, service clarity, and multilingual communication.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDUo5k25ooqM6yG7Bat_jxIHCmN85z1rLSL5IMBDtpDWzgIcGG-7MHaxR8gWqnVFARsQDFP7kMYnztn-FfGIPp906Ewgb8PcUSHEz3oeR9QQue2LEX4pZQ6WU-zZq3H3h71IN4IjYUZeQ4HWXNPUp5bX_byUN2ON97FN7NeloCb44LaKdPW5_w2XlyJ6K0CSW8IlCO_IOc-P8URUNikrqPCepQNs5u3p4R0-iOj5J7m16SzXsuo0uUPHaSvNeaxPKgu7bcpxL3aJvI",
    imageAlt: "Heavy-duty mining site operations with large machinery",
    services: [
      "Web Development",
      "Brand Positioning",
      "Localization",
      "Information Design",
    ],
    stack: ["Laravel", "Blade", "Tailwind CSS", "Alpine.js"],
    highlights: [
      "Enterprise-style homepage and service architecture for mining and construction operations",
      "Reusable component system for content blocks across hero, services, projects, and contact pages",
      "Localized copy structure for English, French, Spanish, and German",
      "Professional visual treatment aligned with industrial brand expectations",
    ],
    liveUrl: "https://bamdamining.com/",
  },
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
