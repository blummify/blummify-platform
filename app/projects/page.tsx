import Link from "next/link";

import { projects } from "./_data";

export default function ProjectsPage() {
  return (
    <main className="px-8 py-16 max-w-7xl mx-auto">
      <div className="max-w-2xl">
        <h1 className="text-4xl lg:text-6xl font-headline font-bold tracking-tight text-on-surface anim-fade-up">
          Projects
        </h1>
        <p
          className="mt-5 text-lg text-on-surface-variant font-body anim-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          A selection of work across web, mobile, branding, and growth. Each
          project page breaks down what we built, why it matters, and the impact
          delivered.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
