interface ServiceJsonLdProps {
  name: string;
  description: string;
  provider: string;
  areaServed?: string;
}

export default function ServiceJsonLd({
  name,
  description,
  provider,
  areaServed = "Global",
}: ServiceJsonLdProps) {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
    },
    areaServed,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceData),
      }}
    />
  );
}
