export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://blummify.com";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Blummify",
  alternateName: "Blummify Consulting",
  url: siteUrl,
  logo: `${siteUrl}/blummifly-logo.png`,
  description:
    "A growing digital company helping businesses evolve online with solutions that strengthen presence, support growth, and turn ideas into meaningful outcomes.",
  email: "info@blummify.com",
  sameAs: [
    "https://www.linkedin.com/company/blummify/",
    "https://www.instagram.com/blummify/",
    "https://x.com/blummify",
    "https://www.tiktok.com/@blummify",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@blummify.com",
    contactType: "customer service",
    availableLanguage: ["English"],
  },
} as const;
