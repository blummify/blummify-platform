import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { siteUrl } from "../../_lib/site";
import { getServiceBySlug, serviceDetails } from "../_data";
import { projects } from "../../projects/_data";
import BreadcrumbJsonLd from "../../_components/BreadcrumbJsonLd";
import ServiceJsonLd from "../../_components/ServiceJsonLd";

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  const url = `${siteUrl}/services/${service.slug}`;

  return {
    title: `${service.title} | Blummify`,
    description: service.longDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} | Blummify`,
      description: service.longDescription,
      url,
      images: [
        {
          url: service.image.src,
          width: 1024,
          height: 683,
          alt: service.image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Blummify`,
      description: service.longDescription,
      images: [service.image.src],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", url: siteUrl },
    { name: "Services", url: `${siteUrl}/services` },
    { name: service.title, url: `${siteUrl}/services/${service.slug}` },
  ];

  const relatedProjects = service.relatedProjectSlugs
    ? projects.filter((p) => service.relatedProjectSlugs?.includes(p.slug))
    : [];

  return (
    <main className="pb-16">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <ServiceJsonLd
        name={service.title}
        description={service.longDescription}
        provider="Blummify"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-on-surface shadow-sm">
        <div className="absolute top-0 right-0 w-[44rem] h-[44rem] bg-primary/25 blur-[140px] rounded-full -translate-y-1/2 translate-x-1/2 anim-ambient" />
        <div className="absolute bottom-0 left-0 w-[44rem] h-[44rem] bg-primary-container/20 blur-[140px] rounded-full translate-y-1/2 -translate-x-1/2 anim-float" />
        <div className="relative z-10 px-8 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 text-sm text-white/70 font-body anim-fade-up">
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                  <span aria-hidden="true">/</span>
                  <span className="text-white">{service.title}</span>
                </div>
                <h1
                  className="mt-6 text-4xl lg:text-6xl font-headline font-bold tracking-tight text-white anim-fade-up"
                  style={{ animationDelay: "90ms" }}
                >
                  {service.title}
                </h1>
                <p
                  className="mt-5 text-lg text-white/80 font-body leading-relaxed anim-fade-up"
                  style={{ animationDelay: "160ms" }}
                >
                  {service.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-4 anim-fade-up" style={{ animationDelay: "230ms" }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-signature-gradient text-on-primary px-8 py-4 rounded-full font-headline font-bold text-base transition-all duration-300 hover:opacity-95 hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.99]"
                  >
                    Get Started
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                  {service.startingPrice && (
                    <div className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/10 text-white/90 backdrop-blur">
                      <span className="material-symbols-outlined text-sm">payments</span>
                      <span className="font-body text-sm">Starting at {service.startingPrice}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="relative rounded-[2rem] overflow-hidden bg-surface-container shadow-2xl">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  width={1024}
                  height={683}
                  sizes="100vw"
                  quality={90}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long Description & Quick Info */}
      <section className="px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-2xl font-body leading-relaxed text-on-surface-variant">
                {service.longDescription}
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-primary">schedule</span>
                    <span className="text-sm font-bold uppercase tracking-wider text-on-surface-variant font-label">Timeline</span>
                  </div>
                  <p className="text-2xl font-headline font-bold text-on-surface">{service.timeline}</p>
                </div>
                {service.startingPrice && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-primary">payments</span>
                      <span className="text-sm font-bold uppercase tracking-wider text-on-surface-variant font-label">Starting Price</span>
                    </div>
                    <p className="text-2xl font-headline font-bold text-on-surface">{service.startingPrice}</p>
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-primary">inventory_2</span>
                    <span className="text-sm font-bold uppercase tracking-wider text-on-surface-variant font-label">Deliverables</span>
                  </div>
                  <p className="text-sm text-on-surface-variant">{service.deliverables.length} items included</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-8 py-20 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-fixed text-primary text-xs font-bold tracking-wider uppercase font-label">
              <span className="material-symbols-outlined text-[18px]">timeline</span>
              Our Process
            </span>
            <h2 className="mt-6 text-3xl lg:text-4xl font-headline font-bold text-on-surface">
              How We Work
            </h2>
            <p className="mt-4 text-on-surface-variant font-body leading-relaxed">
              Our proven 5-step process ensures your project is delivered on time, on budget, and exceeds expectations.
            </p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
            
            <div className="space-y-12 lg:space-y-0">
              {service.process.map((step, index) => (
                <div
                  key={step.step}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 items-center ${index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'}`}
                >
                  {/* Content */}
                  <div className={`relative bg-surface rounded-2xl p-8 transition-all duration-300 hover:shadow-xl ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto lg:col-start-2'}`}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline font-bold text-xl shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                          {step.title}
                        </h3>
                        <p className="text-on-surface-variant font-body leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-primary border-4 border-surface-container-lowest -translate-x-1/2 -translate-y-1/2 z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wider uppercase font-label">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                Benefits
              </span>
              <h2 className="mt-6 text-3xl lg:text-4xl font-headline font-bold text-on-surface">
                Why Choose Us
              </h2>
              <p className="mt-4 text-on-surface-variant font-body leading-relaxed">
                We combine expertise, innovation, and dedication to deliver exceptional results that drive your business forward.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-3 p-4 rounded-xl bg-surface-container-lowest transition-all duration-300 hover:shadow-xl"
                >
                  <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-xl">
                      check_circle
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-headline font-bold text-on-surface mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-on-surface-variant font-body text-xs leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="px-8 py-20 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-fixed text-primary text-xs font-bold tracking-wider uppercase font-label">
                <span className="material-symbols-outlined text-[18px]">inventory_2</span>
                Deliverables
              </span>
              <h2 className="mt-6 text-3xl lg:text-4xl font-headline font-bold text-on-surface">
                What You'll Get
              </h2>
              <p className="mt-4 text-on-surface-variant font-body leading-relaxed">
                We provide comprehensive deliverables to ensure your project is complete and ready for launch.
              </p>
            </div>
            <div className="bg-surface rounded-2xl p-8">
              <ul className="space-y-4">
                {service.deliverables.map((deliverable, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-on-surface-variant font-body"
                  >
                    <span className="material-symbols-outlined text-primary mt-0.5 shrink-0">
                      check
                    </span>
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-fixed text-primary text-xs font-bold tracking-wider uppercase font-label">
                  <span className="material-symbols-outlined text-[18px]">work</span>
                  Portfolio
                </span>
                <h2 className="mt-6 text-2xl font-headline font-bold text-on-surface">
                  Related Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="hidden md:inline-flex items-center gap-2 text-primary font-bold font-headline hover:gap-3 transition-all"
              >
                View All Projects
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group bg-surface-container-lowest rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex items-start justify-between gap-6 mb-4">
                    <div>
                      <p className="text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label">
                        {project.year}
                      </p>
                      <h3 className="mt-2 text-lg font-headline font-bold text-on-surface group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-on-surface-variant font-body text-sm leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.services.slice(0, 2).map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-xs font-label"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center md:hidden">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-primary font-bold font-headline hover:gap-3 transition-all"
              >
                View All Projects
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="px-8 py-20 bg-on-surface rounded-[3rem] mx-8 lg:mx-16 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 anim-ambient" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-container/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 anim-float" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-headline font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/80 font-body mb-10 leading-relaxed">
            Let's discuss how we can help you achieve your goals with our{" "}
            {service.title.toLowerCase()} services.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-signature-gradient text-on-primary px-8 py-4 rounded-full font-headline font-bold text-base transition-all duration-300 hover:opacity-95 hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.99]"
          >
            Start Your Project
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
