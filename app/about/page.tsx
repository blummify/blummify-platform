import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { pageDescriptions } from "../_lib/seo";
import { siteUrl } from "../_lib/site";
import BreadcrumbJsonLd from "../_components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "About",
  description: pageDescriptions.about,
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    url: `${siteUrl}/about`,
    description: pageDescriptions.about,
  },
};

const coreValues = [
  {
    icon: "trending_up",
    title: "Growth",
    description:
      "We are committed to helping businesses grow and reach their full potential.",
    pillClass: "bg-primary-fixed",
    iconClass: "text-primary",
  },
  {
    icon: "tune",
    title: "Simplicity",
    description:
      "We believe in clean, simple, and effective solutions that deliver real results.",
    pillClass: "bg-secondary-container",
    iconClass: "text-on-secondary-container",
  },
  {
    icon: "auto_awesome",
    title: "Innovation",
    description:
      "We embrace new ideas and continuously improve to create better solutions.",
    pillClass: "bg-primary-container",
    iconClass: "text-on-primary-container",
  },
  {
    icon: "verified_user",
    title: "Reliability",
    description:
      "We deliver on our promises and build solutions our clients can depend on.",
    pillClass: "bg-primary-fixed-dim",
    iconClass: "text-on-primary-fixed",
  },
  {
    icon: "public",
    title: "Impact",
    description:
      "We focus on creating solutions that make a meaningful difference for businesses.",
    pillClass: "bg-secondary-fixed",
    iconClass: "text-secondary",
  },
  {
    icon: "groups",
    title: "Collaboration",
    description:
      "We work closely with our clients to understand their needs and bring their ideas to life.",
    pillClass: "bg-primary/15",
    iconClass: "text-primary",
  },
] as const;

export default function AboutPage() {
  const breadcrumbItems = [
    { name: "Home", url: siteUrl },
    { name: "About", url: `${siteUrl}/about` },
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
                  groups
                </span>
                Who we are
              </span>
              <h1
                className="mt-6 font-headline text-4xl font-bold tracking-tight text-white anim-fade-up lg:text-6xl"
                style={{ animationDelay: "90ms" }}
              >
                About Blummify
              </h1>
              <p
                className="mt-5 font-body text-lg leading-relaxed text-white/80 anim-fade-up"
                style={{ animationDelay: "160ms" }}
              >
                Blummify is a growing digital company focused on helping
                businesses evolve and succeed in a changing world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="px-8">
        <div className="max-w-7xl mx-auto">
          <section className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-8">
              <div className="bg-surface-container-lowest rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <span className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">
                      target
                    </span>
                  </span>
                  <div>
                    <h2 className="text-2xl font-headline font-bold text-on-surface">
                      Our Mission
                    </h2>
                    <p className="mt-3 text-on-surface-variant font-body leading-relaxed">
                      We build and improve digital solutions that help businesses
                      strengthen their online presence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <span className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-secondary-container">
                      visibility
                    </span>
                  </span>
                  <div>
                    <h2 className="text-2xl font-headline font-bold text-on-surface">
                      Our Vision
                    </h2>
                    <p className="mt-3 text-on-surface-variant font-body leading-relaxed">
                      As we grow, our vision is to expand into broader solutions
                      that support business growth, innovation, and long-term
                      impact.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-full font-headline font-bold text-base transition-all duration-300 hover:bg-surface-container-high hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.99]"
                >
                  View services
                </Link>
                <Link
                  href="/projects"
                  className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-full font-headline font-bold text-base transition-all duration-300 hover:bg-surface-container-high hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.99]"
                >
                  Explore portfolio
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-surface-container shadow-xl">
                <Image
                  src="/images/about-mission.jpg"
                  alt="Abstract data visualization"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  quality={90}
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          <section className="mt-20">
            <div className="mx-auto max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-fixed px-4 py-2 font-label text-xs font-bold uppercase tracking-wider text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  handshake
                </span>
                Core Values
              </span>
              <h2 className="mt-6 font-headline text-3xl font-bold tracking-tight text-on-surface lg:text-5xl">
                The principles behind every project we ship.
              </h2>
              <p className="mt-4 font-body leading-relaxed text-on-surface-variant">
                At Blummify, we believe every idea has the potential to grow into
                something meaningful.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {coreValues.map((item, index) => (
                <div
                  key={item.title}
                  className="flex h-full flex-col rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_1px_3px_rgba(27,28,29,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-16px_rgba(27,28,29,0.12)]"
                >
                  <div className="flex gap-4">
                    <span
                      className={`flex h-[3.75rem] w-11 shrink-0 items-center justify-center rounded-full ${item.pillClass}`}
                      aria-hidden
                    >
                      <span
                        className={`material-symbols-outlined text-[22px] ${item.iconClass}`}
                      >
                        {item.icon}
                      </span>
                    </span>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <p className="font-label text-xs font-bold uppercase tracking-[0.12em] text-on-surface">
                        {index + 1}. {item.title}
                      </p>
                      <p className="mt-2 font-body text-sm leading-relaxed text-on-surface-variant">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-surface-container shadow-xl">
                <Image
                  src="/images/about-story.jpg"
                  alt="Consulting team collaborating"
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  quality={90}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wider uppercase font-label">
                <span className="material-symbols-outlined text-[18px]">
                  auto_stories
                </span>
                Our Story
              </span>
              <h2 className="mt-6 text-3xl lg:text-5xl font-headline font-bold tracking-tight text-on-surface">
                Partnering for the next chapter of your business
              </h2>
              <div className="mt-6 space-y-4 text-on-surface-variant font-body leading-relaxed">
                <p>
                  From refining your online presence to exploring new ways to
                  serve customers, we grow alongside the teams we work with—
                  learning, building, and iterating together.
                </p>
                <p>
                  When you&apos;re ready to talk through what&apos;s next, we&apos;re
                  here to help you shape it with clarity and care.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-surface-container-lowest rounded-2xl p-6">
                  <p className="text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label">
                    Strategy
                  </p>
                  <p className="mt-2 font-headline font-bold text-on-surface">
                    Clear outcomes
                  </p>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl p-6">
                  <p className="text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label">
                    Delivery
                  </p>
                  <p className="mt-2 font-headline font-bold text-on-surface">
                    Quality-first
                  </p>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl p-6">
                  <p className="text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label">
                    Growth
                  </p>
                  <p className="mt-2 font-headline font-bold text-on-surface">
                    Systems that scale
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-signature-gradient text-on-primary px-8 py-4 rounded-full font-headline font-bold text-base transition-all duration-300 shadow-lg hover:opacity-95 hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.99]"
                >
                  Start a conversation
                </Link>
                <Link
                  href="/services"
                  className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-full font-headline font-bold text-base transition-all duration-300 hover:bg-surface-container-high hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.99]"
                >
                  Browse services
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
