interface LocalBusinessJsonLdProps {
  name: string;
  description: string;
  url: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  sameAs?: string[];
}

export default function LocalBusinessJsonLd({
  name,
  description,
  url,
  telephone,
  email,
  address,
  sameAs,
}: LocalBusinessJsonLdProps) {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name,
    description,
    url,
    telephone,
    email,
    address: address ? {
      "@type": "PostalAddress",
      ...address,
    } : undefined,
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessData),
      }}
    />
  );
}
