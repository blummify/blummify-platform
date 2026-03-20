import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: "web-development",
      icon: "language",
      title: "Web Development",
      description:
        "Modern websites and web apps engineered for performance, accessibility, and long-term maintainability.",
      offers: [
        "Product and marketing websites",
        "Web application development",
        "API development and integrations",
        "Performance and SEO optimization",
        "Testing, QA, and release automation",
      ],
      reasons: [
        "Production-grade engineering standards",
        "Design-forward implementation that feels premium",
        "Fast iteration cycles without breaking quality",
      ],
    },
    {
      id: "mobile-application-development",
      icon: "smartphone",
      title: "Mobile Application Development",
      description:
        "iOS and Android apps built for reliability, speed, and the kind of UX users want to keep.",
      offers: [
        "Cross-platform or native delivery",
        "Authentication and secure data flows",
        "Payments, subscriptions, and in-app purchases",
        "Offline-first experiences and sync",
        "Analytics, events, and experimentation",
      ],
      reasons: [
        "Polished UX with consistent design systems",
        "Stable releases with QA baked in",
        "Architecture that scales as features grow",
      ],
    },
    {
      id: "branding-design",
      icon: "palette",
      title: "Branding Design",
      description:
        "A cohesive brand system and UI direction that elevates trust, clarity, and conversion.",
      offers: [
        "Brand identity and visual direction",
        "Design systems and component libraries",
        "UI/UX for web and mobile",
        "Landing pages and conversion flows",
        "Prototyping and design handoff",
      ],
      reasons: [
        "Modern aesthetics grounded in usability",
        "Clear messaging hierarchy and structure",
        "Reusable UI foundations for faster shipping",
      ],
    },
    {
      id: "digital-marketing",
      icon: "campaign",
      title: "Digital Marketing",
      description:
        "Growth-focused strategy and execution designed to increase visibility and capture qualified leads.",
      offers: [
        "Content and SEO strategy",
        "Landing pages and funnel optimization",
        "Campaign creative and iteration",
        "Analytics and reporting cadence",
        "Lifecycle messaging and retention",
      ],
      reasons: [
        "Data-backed decisions and clear reporting",
        "Conversion-first messaging and design",
        "Systems that compound over time",
      ],
    },
  ] as const;

  return (
    <main className="pb-16">
      <section className="sticky top-[68px] z-40 relative overflow-hidden bg-surface-container-lowest shadow-sm">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 anim-ambient" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-container/25 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 anim-float" />
        <div className="relative z-10 px-8 py-10 lg:px-16 lg:py-14">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wider uppercase font-label anim-fade-up">
                <span className="material-symbols-outlined text-[18px]">
                  widgets
                </span>
                Services
              </span>
              <h1
                className="mt-6 text-4xl lg:text-6xl font-headline font-bold tracking-tight text-on-surface anim-fade-up"
                style={{ animationDelay: "90ms" }}
              >
                Services
              </h1>
              <p
                className="mt-5 text-lg text-on-surface-variant font-body leading-relaxed anim-fade-up"
                style={{ animationDelay: "160ms" }}
              >
                Clear offerings, clean execution, and measurable outcomes. Pick
                a service below to see what we deliver and how we work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mt-8 flex flex-wrap gap-3">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface font-headline font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                {service.title}
              </a>
            ))}
          </div>

          <div className="mt-10 space-y-8">
            {services.map((service) => (
              <section
                key={service.id}
                id={service.id}
                className="bg-surface-container-lowest rounded-[3rem] p-10 lg:p-14 transition-all duration-500 hover:shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-3xl">
                        {service.icon}
                      </span>
                    </div>
                    <h2 className="mt-6 text-3xl lg:text-4xl font-headline font-bold text-on-surface">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-on-surface-variant font-body leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link
                        href="/contact"
                        className="bg-signature-gradient text-on-primary px-7 py-3 rounded-full font-headline font-bold text-sm transition-all duration-300 hover:opacity-95 hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.99]"
                      >
                        Get started
                      </Link>
                      <Link
                        href="/projects"
                        className="bg-surface-container-highest text-on-surface px-7 py-3 rounded-full font-headline font-bold text-sm transition-all duration-300 hover:bg-surface-container-high hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.99]"
                      >
                        View projects
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-[2rem] bg-surface-container p-8">
                      <p className="text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label">
                        What we offer
                      </p>
                      <ul className="mt-5 space-y-3 text-on-surface font-body">
                        {service.offers.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span
                              className="material-symbols-outlined text-primary"
                              aria-hidden="true"
                            >
                              check_circle
                            </span>
                            <span className="text-on-surface-variant">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-[2rem] bg-surface-container p-8">
                      <p className="text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label">
                        Why Blummify
                      </p>
                      <ul className="mt-5 space-y-3 text-on-surface font-body">
                        {service.reasons.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span
                              className="material-symbols-outlined text-primary"
                              aria-hidden="true"
                            >
                              auto_awesome
                            </span>
                            <span className="text-on-surface-variant">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

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
                View projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
