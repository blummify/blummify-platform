import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { pageDescriptions } from "../_lib/seo";
import { siteUrl } from "../_lib/site";
import BreadcrumbJsonLd from "../_components/BreadcrumbJsonLd";

import { projects } from "./_data";

export const metadata: Metadata = {
  title: "Portfolio",
  description: pageDescriptions.portfolio,
  alternates: { canonical: `${siteUrl}/projects` },
  openGraph: {
    url: `${siteUrl}/projects`,
    description: pageDescriptions.portfolio,
  },
};

export default function ProjectsPage() {
  const breadcrumbItems = [
    { name: "Home", url: siteUrl },
    { name: "Portfolio", url: `${siteUrl}/projects` },
  ];

  return (
    <main className="pb-16">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <section className="relative overflow-hidden bg-on-surface shadow-sm">
        <div className="absolute top-0 right-0 h-[44rem] w-[44rem] -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/25 blur-[140px] anim-ambient" />
        <div className="absolute bottom-0 left-0 h-[44rem] w-[44rem] translate-y-1/2 -translate-x-1/2 rounded-full bg-primary-container/20 blur-[140px] anim-float" />
        <div className="relative z-10 px-8 py-10 lg:px-16 lg:py-12">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-label text-xs font-bold uppercase tracking-wider text-white backdrop-blur anim-fade-up">
                <span className="material-symbols-outlined text-[18px]">
                  work
                </span>
                Selected work
              </span>
              <h1
                className="mt-6 font-headline text-4xl font-bold tracking-tight text-white anim-fade-up lg:text-6xl"
                style={{ animationDelay: "90ms" }}
              >
                Portfolio
              </h1>
              <p
                className="mt-5 font-body text-lg leading-relaxed text-white/80 anim-fade-up"
                style={{ animationDelay: "160ms" }}
              >
                A selection of work across web, mobile, branding, and growth.
                Each project breaks down what we built, why it matters, and the
                impact delivered.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group bg-surface rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={90}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="text-xs font-bold tracking-wider uppercase text-primary font-label">
                        {project.year}
                      </p>
                      <h2 className="mt-2 text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">
                        {project.name}
                      </h2>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110">
                      <span className="material-symbols-outlined text-primary text-lg">
                        arrow_outward
                      </span>
                    </div>
                  </div>

                  <p className="text-on-surface-variant font-body text-sm leading-relaxed line-clamp-2 mb-4">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.services.slice(0, 2).map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-xs font-label"
                      >
                        {s}
                      </span>
                    ))}
                    {project.services.length > 2 && (
                      <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-xs font-label">
                        +{project.services.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
