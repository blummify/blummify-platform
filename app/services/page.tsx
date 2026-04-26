import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { pageDescriptions } from "../_lib/seo";
import { siteUrl } from "../_lib/site";
import BreadcrumbJsonLd from "../_components/BreadcrumbJsonLd";
import ServiceJsonLd from "../_components/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Services",
  description: pageDescriptions.services,
  alternates: { canonical: `${siteUrl}/services` },
  openGraph: {
    url: `${siteUrl}/services`,
    description: pageDescriptions.services,
  },
};

export default function ServicesPage() {
  const breadcrumbItems = [
    { name: "Home", url: siteUrl },
    { name: "Services", url: `${siteUrl}/services` },
  ];

  const services = [
    {
      id: "web-development",
      icon: "language",
      title: "Web Development",
      description:
        "Modern websites and web apps engineered for performance, accessibility, and long-term maintainability.",
      image: {
        src: "/images/service-web-dev.webp",
        alt: "Abstract data visualization with clean green lines",
      },
      metric: "Fast delivery",
    },
    {
      id: "mobile-application-development",
      icon: "smartphone",
      title: "Mobile Application Development",
      description:
        "iOS and Android apps built for reliability, speed, and the kind of UX users want to keep.",
      image: {
        src: "/images/service-mobile-dev.webp",
        alt: "Close up of hands working on a sleek laptop",
      },
      metric: "Reliable apps",
    },
    {
      id: "branding-design",
      icon: "palette",
      title: "Branding Design",
      description:
        "A cohesive brand system and UI direction that elevates trust, clarity, and conversion.",
      image: {
        src: "/images/service-branding.webp",
        alt: "Modern office team collaborating in a bright airy space",
      },
      metric: "Premium look",
    },
    {
      id: "digital-marketing",
      icon: "campaign",
      title: "Digital Marketing",
      description:
        "Growth-focused strategy and execution designed to increase visibility and capture qualified leads.",
      image: {
        src: "/images/service-marketing.webp",
        alt: "Abstract data visualization with clean green lines",
      },
      metric: "Lead growth",
    },
  ] as const;

  return (
    <main className="pb-16">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <ServiceJsonLd
        name="Digital Consulting Services"
        description="Web, mobile, brand, and marketing services for businesses that want stronger products and presence online."
        provider="Blummify"
      />
      <section className="relative overflow-hidden bg-on-surface shadow-sm">
        <div className="absolute top-0 right-0 h-[44rem] w-[44rem] -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/25 blur-[140px] anim-ambient" />
        <div className="absolute bottom-0 left-0 h-[44rem] w-[44rem] translate-y-1/2 -translate-x-1/2 rounded-full bg-primary-container/20 blur-[140px] anim-float" />
        <div className="relative z-10 px-8 py-10 lg:px-16 lg:py-12">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-label text-xs font-bold uppercase tracking-wider text-white backdrop-blur anim-fade-up">
                <span className="material-symbols-outlined text-[18px]">
                  widgets
                </span>
                What we offer
              </span>
              <h1
                className="mt-6 font-headline text-4xl font-bold tracking-tight text-white anim-fade-up lg:text-6xl"
                style={{ animationDelay: "90ms" }}
              >
                Services
              </h1>
              <p
                className="mt-5 font-body text-lg leading-relaxed text-white/80 anim-fade-up"
                style={{ animationDelay: "160ms" }}
              >
                Clear offerings, clean execution, and measurable outcomes.
                Explore each service below to see what we deliver and how we
                work with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="px-8">
        <div className="max-w-7xl mx-auto">
          <section className="mt-14">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wider uppercase font-label">
                <span className="material-symbols-outlined text-[18px]">
                  stars
                </span>
                World-Class Services
              </span>
              <h2 className="mt-6 text-4xl lg:text-5xl font-headline font-bold tracking-tight text-on-surface">
                Tailored Solutions Driving Real Results
              </h2>
              <p className="mt-5 text-on-surface-variant font-body leading-relaxed">
                From web and mobile delivery to brand and growth, our team
                integrates where it&apos;s needed most and ships work that lasts.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-surface-container-lowest rounded-[2rem] p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="relative w-full h-40 rounded-2xl overflow-hidden bg-surface-container">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      width={512}
                      height={512}
                      sizes="(min-width: 1024px) 360px, 100vw"
                      quality={90}
                      className="object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-primary">
                        {service.icon}
                      </span>
                    </span>
                    <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-bold font-label text-on-surface shadow-sm">
                      {service.metric}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-headline font-bold text-on-surface">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-on-surface-variant font-body leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <Link
                      href="/contact"
                      className="text-primary font-bold font-headline inline-flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Explore service{" "}
                      <span className="material-symbols-outlined">
                        arrow_forward
                      </span>
                    </Link>
                    <Link
                      href="/contact"
                      className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center transition-transform duration-300 hover:scale-105"
                      aria-label="Get started"
                    >
                      <span className="material-symbols-outlined text-primary">
                        call_made
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-14 bg-on-surface rounded-[3rem] p-10 lg:p-16 text-center overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 anim-ambient" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-container/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 anim-float" />
            <h2 className="text-3xl lg:text-5xl font-headline font-bold text-white relative z-10">
              Let&apos;s build something that stands out.
            </h2>
            <p className="mt-5 text-zinc-400 text-lg max-w-2xl mx-auto relative z-10">
              Tell us what you&apos;re shipping, what success looks like, and
              how quickly you want to move.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 relative z-10">
              <Link
                href="/contact"
                className="bg-primary text-white px-10 py-5 rounded-full font-headline font-bold text-lg transition-all duration-300 hover:bg-primary-container hover:text-on-primary-container hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.99]"
              >
                Contact us
              </Link>
              <Link
                href="/projects"
                className="border border-white/20 text-white px-10 py-5 rounded-full font-headline font-bold text-lg transition-all duration-300 hover:bg-white hover:text-on-surface hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.99]"
              >
                View portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
