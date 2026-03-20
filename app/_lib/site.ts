export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://blummify.com";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Blummify",
  url: siteUrl,
  description:
    "Software consulting focused on web, mobile, branding, and marketing—delivered with clarity and craft.",
  email: "hello@blummify.com",
} as const;
