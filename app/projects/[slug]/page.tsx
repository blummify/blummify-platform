import Link from "next/link";
import { notFound } from "next/navigation";

import { getProjectBySlug, projects } from "../_data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pb-16">
      <section className="relative overflow-hidden bg-on-surface shadow-sm">
        <div className="absolute top-0 right-0 w-[44rem] h-[44rem] bg-primary/25 blur-[140px] rounded-full -translate-y-1/2 translate-x-1/2 anim-ambient" />
        <div className="absolute bottom-0 left-0 w-[44rem] h-[44rem] bg-primary-container/20 blur-[140px] rounded-full translate-y-1/2 -translate-x-1/2 anim-float" />
        <div className="relative z-10 px-8 py-10 lg:px-16 lg:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-sm text-white/70 font-body anim-fade-up">
                <Link
                  href="/projects"
                  className="hover:text-white transition-colors"
                >
                  Projects
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-white">{project.name}</span>
              </div>
              <h1
                className="mt-6 text-4xl lg:text-6xl font-headline font-bold tracking-tight text-white anim-fade-up"
                style={{ animationDelay: "90ms" }}
              >
                {project.name}
              </h1>
              <p
                className="mt-5 text-lg text-white/80 font-body leading-relaxed anim-fade-up"
                style={{ animationDelay: "160ms" }}
              >
                {project.summary}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-label backdrop-blur"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <section className="mt-10 bg-surface-container-lowest rounded-[2rem] p-8 transition-all duration-500 hover:shadow-xl">
                <h2 className="text-xl font-headline font-bold text-on-surface">
                  Highlights
                </h2>
                <ul className="mt-5 space-y-3 text-on-surface-variant font-body">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span
                        className="material-symbols-outlined text-primary"
                        aria-hidden="true"
                      >
                        check_circle
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="lg:col-span-4">
              <div className="bg-surface-container-lowest rounded-[2rem] p-8 transition-all duration-500 hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label">
                    {project.year}
                  </p>
                  <span className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">
                      insights
                    </span>
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-bold text-on-surface font-label">
                    Services
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.services.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-xs font-label"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-7">
                  <h3 className="text-sm font-bold text-on-surface font-label">
                    Tech stack
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-label"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-10 inline-flex w-full justify-center bg-signature-gradient text-on-primary px-6 py-3 rounded-full font-headline font-bold text-sm transition-all duration-300 hover:opacity-95 hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.99]"
                >
                  Start a similar project
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
