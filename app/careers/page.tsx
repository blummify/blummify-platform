import type { Metadata } from "next";
import Link from "next/link";

import { careerRoles } from "./_data";
import { pageDescriptions } from "../_lib/seo";
import { siteUrl } from "../_lib/site";
import BreadcrumbJsonLd from "../_components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Careers",
  description: pageDescriptions.careers,
  alternates: { canonical: `${siteUrl}/careers` },
  openGraph: {
    url: `${siteUrl}/careers`,
    description: pageDescriptions.careers,
  },
};

const whyJoin = [
  {
    icon: "rocket_launch",
    title: "Meaningful impact",
    description:
      "You work on projects that directly help businesses grow and improve how they operate.",
  },
  {
    icon: "bolt",
    title: "Fast learning loop",
    description:
      "You collaborate across product, design, and engineering with room to experiment and improve quickly.",
  },
  {
    icon: "groups",
    title: "Supportive team culture",
    description:
      "We value ownership, clear communication, and practical execution over hierarchy and noise.",
  },
] as const;

export default function CareersPage() {
  const breadcrumbItems = [
    { name: "Home", url: siteUrl },
    { name: "Careers", url: `${siteUrl}/careers` },
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
                <span className="material-symbols-outlined text-[18px]">work</span>
                Join our team
              </span>
              <h1
                className="mt-6 font-headline text-4xl font-bold tracking-tight text-white anim-fade-up lg:text-6xl"
                style={{ animationDelay: "90ms" }}
              >
                Careers at Blummify
              </h1>
              <p
                className="mt-5 font-body text-lg leading-relaxed text-white/80 anim-fade-up"
                style={{ animationDelay: "160ms" }}
              >
                Build meaningful products with us and grow your career at Blummify.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-fixed px-4 py-2 font-label text-xs font-bold uppercase tracking-wider text-primary">
              <span className="material-symbols-outlined text-[18px]">
                badge
              </span>
              Opportunity
            </span>
          </div>

          <div className="mt-10 space-y-4">
            {careerRoles.map((role) => (
              <article
                key={role.title}
                className="rounded-2xl border border-black/[0.05] bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-headline text-xl font-bold text-on-surface">
                      {role.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                      <span className="rounded-full bg-surface-container-high px-3 py-1">
                        {role.type}
                      </span>
                      {role.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-secondary-container px-3 py-1 text-on-secondary-container"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="rounded-full bg-surface-container-high px-3 py-1">
                        {role.location}
                      </span>
                    </div>
                    <p className="mt-4 max-w-3xl font-body leading-relaxed text-on-surface-variant">
                      {role.summary}
                    </p>
                  </div>
                  <Link
                    href={`/careers/${role.slug}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-signature-gradient px-6 py-3 font-headline text-sm font-bold text-on-primary transition-all duration-300 hover:opacity-95 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.99]"
                  >
                    View role
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary-container px-4 py-2 font-label text-xs font-bold uppercase tracking-wider text-on-secondary-container">
              <span className="material-symbols-outlined text-[18px]">
                diversity_3
              </span>
              Why Blummify
            </span>
            <h2 className="mt-6 font-headline text-3xl font-bold tracking-tight text-on-surface lg:text-5xl">
              A place to do focused, high-leverage work.
            </h2>
            <p className="mt-4 font-body leading-relaxed text-on-surface-variant">
              We keep teams small, communication clear, and standards high so
              everyone can contribute at their best.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {whyJoin.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_1px_3px_rgba(27,28,29,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-16px_rgba(27,28,29,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-fixed text-primary">
                  <span className="material-symbols-outlined text-[22px]">
                    {item.icon}
                  </span>
                </div>
                <h3 className="mt-4 font-headline text-xl font-bold text-on-surface">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-on-surface-variant">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    
    </main>
  );
}
