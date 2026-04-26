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
    imageSrc: "/images/project-odutan.jpg",
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
    imageSrc: "/images/project-featured.jpg",
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
    imageSrc: "/images/project-ckm.jpg",
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
  {
    slug: "fam-multimedia",
    name: "FAM Multimedia",
    year: "2025",
    summary:
      "Events and entertainment platform featuring concerts, corporate events, conferences, and community outreach programs with ticket booking and vendor management.",
    imageSrc: "/images/project-fam.jpg",
    imageAlt: "Live concert stage with vibrant lighting and crowd",
    services: [
      "Web Development",
      "Event Management",
      "Ticketing System",
      "UI/UX Design",
    ],
    stack: ["Laravel", "Blade", "Tailwind CSS", "JavaScript"],
    highlights: [
      "Comprehensive event management system for concerts, entertainment, and corporate events",
      "Integrated ticket booking platform with secure payment processing",
      "Vendor and sponsor management features for event partnerships",
      "Community outreach section highlighting social impact initiatives",
    ],
    liveUrl: "https://fammultimedia.com/",
  },
  {
    slug: "brix-tech-solutions",
    name: "Brix Tech Solutions",
    year: "2025",
    summary:
      "Corporate website and digital presence for a full-service IT company specializing in cloud engineering, cybersecurity, data management, and software development for federal and commercial clients.",
    imageSrc: "/images/project-brix.jpg",
    imageAlt: "Modern data center with server infrastructure and cybersecurity systems",
    services: [
      "Web Development",
      "Brand Identity",
      "Content Strategy",
      "UI/UX Design",
    ],
    stack: ["Laravel", "Blade", "Tailwind CSS", "JavaScript"],
    highlights: [
      "Professional corporate website showcasing six core service areas",
      "Clear service architecture for data, cloud, software, cybersecurity, and support solutions",
      "Trust-focused design emphasizing federal and commercial expertise",
      "Responsive layout optimized for B2B client engagement and conversion",
    ],
    liveUrl: "https://brixtechsolutions.com/",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
