import Link from "next/link";

import { projects } from "./_data";

export default function ProjectsPage() {
  return (
    <main className="px-8 py-16 max-w-7xl mx-auto">
      <section className="sticky top-24 z-40 relative overflow-hidden rounded-[3rem] bg-surface-container-lowest p-10 lg:p-16 shadow-sm">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 anim-ambient" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-container/25 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 anim-float" />
        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wider uppercase font-label anim-fade-up">
            <span className="material-symbols-outlined text-[18px]">
              work
            </span>
            Projects
          </span>
          <h1
            className="mt-6 text-4xl lg:text-6xl font-headline font-bold tracking-tight text-on-surface anim-fade-up"
            style={{ animationDelay: "90ms" }}
          >
            Projects
          </h1>
          <p
            className="mt-5 text-lg text-on-surface-variant font-body leading-relaxed anim-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            A selection of work across web, mobile, branding, and growth. Each
            project page breaks down what we built, why it matters, and the
            impact delivered.
          </p>
        </div>
      </section>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group bg-surface-container-lowest rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label">
                  {project.year}
                </p>
                <h2 className="mt-3 text-2xl font-headline font-bold text-on-surface">
                  {project.name}
                </h2>
              </div>
              <span className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">
                <span className="material-symbols-outlined text-primary">
                  work
                </span>
              </span>
            </div>

            <p className="mt-5 text-on-surface-variant font-body leading-relaxed">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.services.slice(0, 3).map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-xs font-label"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-7 flex items-center justify-between">
              <span className="text-primary font-bold font-headline">
                View details
              </span>
              <span className="material-symbols-outlined text-primary transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
