import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="px-8 py-16 max-w-7xl mx-auto">
      <section className="sticky top-24 z-40 relative overflow-hidden rounded-[3rem] bg-surface-container-lowest p-10 lg:p-16 shadow-sm">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 anim-ambient" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-container/25 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 anim-float" />
        <div className="relative z-10 max-w-3xl">
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
            Four core offerings to help your product look premium, ship faster,
            and grow with clarity.
          </p>
        </div>
      </section>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ServiceCard
          icon="language"
          title="Web Development"
          description="Modern, high-performance websites and web apps built for growth and maintainability."
        />
        <ServiceCard
          icon="smartphone"
          title="Mobile Application Development"
          description="iOS and Android apps designed for reliability, performance, and a polished user experience."
        />
        <ServiceCard
          icon="palette"
          title="Branding Design"
          description="Brand identity systems, UI kits, and visual direction that make your product feel premium."
        />
        <ServiceCard
          icon="campaign"
          title="Digital Marketing"
          description="Performance-focused campaigns and content that increase visibility and qualified leads."
        />
      </div>

      <div className="mt-14 bg-on-surface rounded-[3rem] p-10 lg:p-16 text-center overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 anim-ambient" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-container/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 anim-float" />
        <h2 className="text-3xl lg:text-5xl font-headline font-bold text-white relative z-10">
          Let&apos;s build something that stands out.
        </h2>
        <p className="mt-5 text-zinc-400 text-lg max-w-2xl mx-auto relative z-10">
          Tell us what you&apos;re shipping, what success looks like, and how
          quickly you want to move.
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
    </main>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-surface-container-lowest transition-all duration-500 hover:bg-surface-container hover:-translate-y-1 hover:shadow-xl">
      <div className="w-20 h-20 rounded-full bg-primary-fixed flex items-center justify-center mb-8">
        <span className="material-symbols-outlined text-on-primary-fixed text-4xl">
          {icon}
        </span>
      </div>
      <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">
        {title}
      </h3>
      <p className="text-on-surface-variant font-body">{description}</p>
    </div>
  );
}
