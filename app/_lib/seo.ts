/** Shared copy for meta descriptions and discoverability. */

export const defaultSiteDescription =
  "We help businesses build and refine their digital presence—websites, apps, brand, and marketing—with straight answers, solid delivery, and work that lasts.";

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
  home: `${defaultSiteDescription} Browse services, see recent work, and reach out when you are ready to talk.`,
  about:
    "We are a growing digital company helping businesses adapt and do better online. We ship practical solutions, think long term, and believe good ideas deserve room to grow.",
  services:
    "Web, mobile, brand, and marketing—scoped projects, clear timelines, and stacks that make sense for your team today and tomorrow.",
  portfolio:
    "Real projects across web, mobile, branding, and growth. Each one includes what we built, how we approached it, and what changed for the client.",
  contact:
    "Tell us what you need—use the form, email, or WhatsApp. We read every message and usually reply within one business day.",
  careers:
    "Volunteer opportunity at Blummify: help build one of our platforms using HTML, CSS, Next.js, React.js, Express.js, and Node.js, with stipend support.",
} as const;
