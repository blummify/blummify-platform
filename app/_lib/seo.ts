/** Shared copy for meta descriptions and discoverability. */

export const defaultSiteDescription =
  "Blummify is a software consulting company: web and mobile development, branding, and digital marketing—built for clarity, speed, and long-term maintainability.";

export const seoKeywords = [
  "Blummify",
  "software consulting",
  "web development",
  "mobile app development",
  "branding",
  "digital marketing",
  "product development",
  "UI UX",
  "React",
  "Next.js",
] as const;

export const pageDescriptions = {
  home: `${defaultSiteDescription} Explore services, portfolio, and how we partner with your team.`,
  about:
    "Blummify is a growing digital company helping businesses evolve online—with digital solutions, a clear vision for growth, and the belief that every idea can become something meaningful.",
  services:
    "Blummify services: web development, mobile apps, branding design, and digital marketing—clear scopes, modern stacks, and measurable outcomes.",
  portfolio:
    "See Blummify portfolio work: case studies across web, mobile, branding, and growth—with highlights, stack, and outcomes.",
  contact:
    "Contact Blummify for your next web, mobile, or brand project. Send a message or reach us by email and WhatsApp.",
} as const;
