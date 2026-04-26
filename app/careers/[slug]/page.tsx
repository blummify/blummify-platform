import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { siteUrl } from "../../_lib/site";
import { careerRoles, getCareerRoleBySlug } from "../_data";
import BreadcrumbJsonLd from "../../_components/BreadcrumbJsonLd";

export function generateStaticParams() {
  return careerRoles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "platform-developer") {
    return {
      title: "Fullstack Developer role",
      alternates: { canonical: `${siteUrl}/careers/fullstack` },
    };
  }
  const role = getCareerRoleBySlug(slug);

  if (!role) {
    return { title: "Careers" };
  }

  const url = `${siteUrl}/careers/${role.slug}`;

  return {
    title: `${role.title} role`,
    description: role.summary,
    alternates: { canonical: url },
    openGraph: {
      title: `${role.title} | Careers at Blummify`,
      description: role.summary,
      url,
    },
    twitter: {
      title: `${role.title} | Careers at Blummify`,
      description: role.summary,
    },
  };
}

export default async function CareerRoleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === "platform-developer") {
    redirect("/careers/fullstack");
  }
  const role = getCareerRoleBySlug(slug);

  if (!role) {
    notFound();
  }

  const applySubject = encodeURIComponent(`CV Application for ${role.title}`);

  const breadcrumbItems = [
    { name: "Home", url: siteUrl },
    { name: "Careers", url: `${siteUrl}/careers` },
    { name: role.title, url: `${siteUrl}/careers/${role.slug}` },
  ];

  return (
    <main className="pb-16">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <section className="relative overflow-hidden bg-on-surface shadow-sm">
        <div className="absolute top-0 right-0 h-[44rem] w-[44rem] -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/25 blur-[140px] anim-ambient" />
        <div className="absolute bottom-0 left-0 h-[44rem] w-[44rem] translate-y-1/2 -translate-x-1/2 rounded-full bg-primary-container/20 blur-[140px] anim-float" />
        <div className="relative z-10 px-8 py-10 lg:px-16 lg:py-12">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-sm text-white/70 font-body anim-fade-up">
                <Link
                  href="/careers"
                  className="transition-colors hover:text-white"
                >
                  Careers
                </Link>
                <span aria-hidden>/</span>
                <span className="text-white">{role.title}</span>
              </div>
              <h1
                className="mt-6 font-headline text-4xl font-bold tracking-tight text-white anim-fade-up lg:text-6xl"
                style={{ animationDelay: "90ms" }}
              >
                {role.title}
              </h1>
              <p
                className="mt-5 font-body text-lg leading-relaxed text-white/80 anim-fade-up"
                style={{ animationDelay: "160ms" }}
              >
                {role.summary}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/85">
                <span className="rounded-full bg-white/10 px-3 py-1 backdrop-blur">
                  {role.type}
                </span>
                {role.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-3 py-1 backdrop-blur"
                  >
                    {tag}
                  </span>
                ))}
                <span className="rounded-full bg-white/10 px-3 py-1 backdrop-blur">
                  {role.location}
                </span>
                {role.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/10 px-3 py-1 backdrop-blur"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12">
          <article className="lg:col-span-8 rounded-[2rem] bg-surface-container-lowest p-8 shadow-sm">
            <h2 className="font-headline text-2xl font-bold tracking-tight text-on-surface">
              Role overview
            </h2>
            <p className="mt-4 font-body leading-relaxed text-on-surface-variant">
              {role.overview}
            </p>

            <h3 className="mt-8 font-headline text-xl font-bold text-on-surface">
              Responsibilities
            </h3>
            <ul className="mt-4 space-y-3">
              {role.responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-on-surface-variant"
                >
                  <span
                    className="material-symbols-outlined mt-0.5 shrink-0 text-[20px] leading-none text-primary"
                    aria-hidden
                  >
                    check_circle
                  </span>
                  <span className="font-body leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-headline text-xl font-bold text-on-surface">
              Requirements
            </h3>
            <ul className="mt-4 space-y-3">
              {role.requirements.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-on-surface-variant"
                >
                  <span
                    className="material-symbols-outlined mt-0.5 shrink-0 text-[20px] leading-none text-primary"
                    aria-hidden
                  >
                    radio_button_checked
                  </span>
                  <span className="font-body leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <aside className="lg:col-span-4">
            <div className="rounded-[2rem] bg-surface-container-lowest p-8 shadow-sm">
              <h2 className="font-headline text-xl font-bold text-on-surface">
                What we offer
              </h2>
              <ul className="mt-5 space-y-3">
                {role.perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-start gap-3 text-on-surface-variant"
                  >
                    <span
                      className="material-symbols-outlined mt-1 shrink-0 text-[20px] leading-none text-primary"
                      aria-hidden
                    >
                      check_circle
                    </span>
                    <span className="font-body leading-relaxed">{perk}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:info@blummify.com?subject=${applySubject}`}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-signature-gradient px-6 py-3 font-headline text-sm font-bold text-on-primary transition-all duration-300 hover:opacity-95 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.99]"
              >
                Send your CV
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </a>

              <Link
                href="/careers"
                className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-primary/30 px-6 py-3 font-headline text-sm font-bold text-primary transition-all duration-300 hover:bg-primary/5"
              >
                Back to careers
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
