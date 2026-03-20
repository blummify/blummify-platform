import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="px-8 pb-16 max-w-7xl mx-auto">
      <section className="sticky top-24 z-40 relative overflow-hidden rounded-[3rem] bg-surface-container-lowest p-10 lg:p-16 shadow-sm">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 anim-ambient" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-container/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 anim-float" />
        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wider uppercase font-label anim-fade-up">
            <span className="material-symbols-outlined text-[18px]">
              lightbulb
            </span>
            About
          </span>
          <h1
            className="mt-6 text-4xl lg:text-6xl font-headline font-bold tracking-tight text-on-surface anim-fade-up"
            style={{ animationDelay: "90ms" }}
          >
            About Blummify
          </h1>
          <p
            className="mt-5 text-lg text-on-surface-variant font-body leading-relaxed anim-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            We help teams design, build, and grow digital products with intent.
            From strategy to execution, we blend modern engineering with crisp
            branding and measurable outcomes.
          </p>
        </div>
      </section>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-lowest rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  verified
                </span>
              </div>
              <h2 className="mt-5 text-xl font-headline font-bold text-on-surface">
                Quality-first delivery
              </h2>
              <p className="mt-3 text-on-surface-variant font-body">
                Clean systems, reliable releases, and thoughtful UX that feels
                premium.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-container">
                  timeline
                </span>
              </div>
              <h2 className="mt-5 text-xl font-headline font-bold text-on-surface">
                Built to evolve
              </h2>
              <p className="mt-3 text-on-surface-variant font-body">
                Strategy-led foundations that scale with your product and your
                market.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="bg-signature-gradient text-on-primary px-8 py-4 rounded-full font-headline font-bold text-base transition-all duration-300 shadow-lg hover:opacity-95 hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.99]"
            >
              Explore projects
            </Link>
            <Link
              href="/services"
              className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-full font-headline font-bold text-base transition-all duration-300 hover:bg-surface-container-high hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.99]"
            >
              View services
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-surface-container-lowest rounded-[2rem] p-10 transition-all duration-500 hover:shadow-xl">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full bg-white overflow-hidden shadow-sm">
                <Image
                  src="/blummifly-logo.jpeg"
                  alt="Blummify"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label">
                  Evolving with intent
                </p>
                <p className="text-lg font-bold font-headline text-on-surface">
                  Consulting that delivers
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-4 text-on-surface-variant font-body">
              <p>
                We partner with founders and teams to ship high-performing web
                and mobile experiences.
              </p>
              <p>
                Our approach is simple: clarify the outcome, design the system,
                execute with quality, and iterate with data.
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-10 inline-flex w-full justify-center bg-primary text-white px-8 py-4 rounded-full font-headline font-bold text-base transition-all duration-300 hover:bg-primary-container hover:text-on-primary-container hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.99]"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
