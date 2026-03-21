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
    "Digital consulting for businesses that want stronger products and presence online—web, mobile, brand, and marketing, delivered with care and follow-through.",
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
