export type Project = {
  slug: string;
  name: string;
  year: string;
  summary: string;
  services: string[];
  stack: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "blummify-platform",
    name: "Blummify Platform",
    year: "2026",
    summary:
      "A modern consulting website foundation with a crisp brand system, fast performance, and a scalable content structure.",
    services: ["Web Development", "Branding Design"],
    stack: ["Next.js", "React", "Tailwind CSS"],
    highlights: [
      "Modern responsive layout with motion-safe animation",
      "Reusable navigation and page structure",
      "Optimized images with remote pattern configuration",
    ],
  },
  {
    slug: "mobile-commerce-app",
    name: "Mobile Commerce App",
    year: "2025",
    summary:
      "A mobile shopping experience designed for conversion, reliability, and rapid iteration across iOS and Android.",
    services: ["Mobile Application Development", "Branding Design"],
    stack: ["React Native", "TypeScript", "Firebase"],
    highlights: [
      "Streamlined onboarding and checkout",
      "Push notifications and lifecycle messaging",
      "Analytics instrumentation for growth experiments",
    ],
  },
  {
    slug: "brand-and-web-relaunch",
    name: "Brand + Web Relaunch",
    year: "2025",
    summary:
      "A full identity refresh and website rebuild focused on credibility, clarity, and lead generation.",
    services: ["Branding Design", "Web Development"],
    stack: ["Next.js", "Tailwind CSS", "Figma"],
    highlights: [
      "New design system and component library",
      "Improved content hierarchy and messaging",
      "Accessible UI patterns and polished interactions",
    ],
  },
  {
    slug: "marketing-growth-sprints",
    name: "Digital Marketing Growth Sprints",
    year: "2024",
    summary:
      "Campaign strategy and execution to increase visibility and capture qualified leads with measurable outcomes.",
    services: ["Digital Marketing", "Branding Design"],
    stack: ["Analytics", "SEO", "Content Ops"],
    highlights: [
      "Conversion-focused landing pages and funnels",
      "Search and content strategy with performance tracking",
      "Iterative creative testing and reporting cadence",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
