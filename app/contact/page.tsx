import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="pb-16">
      <section className="relative overflow-hidden bg-on-surface shadow-sm">
        <div className="absolute top-0 right-0 w-[44rem] h-[44rem] bg-primary/25 blur-[140px] rounded-full -translate-y-1/2 translate-x-1/2 anim-ambient" />
        <div className="absolute bottom-0 left-0 w-[44rem] h-[44rem] bg-primary-container/20 blur-[140px] rounded-full translate-y-1/2 -translate-x-1/2 anim-float" />
        <div className="relative z-10 px-8 py-10 lg:px-16 lg:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-bold tracking-wider uppercase font-label backdrop-blur anim-fade-up">
                <span className="material-symbols-outlined text-[18px]">
                  forum
                </span>
                Contact
              </span>
              <h1
                className="mt-6 text-4xl lg:text-6xl font-headline font-bold tracking-tight text-white anim-fade-up"
                style={{ animationDelay: "90ms" }}
              >
                Contact
              </h1>
              <p
                className="mt-5 text-lg text-white/80 font-body leading-relaxed anim-fade-up"
                style={{ animationDelay: "160ms" }}
              >
                Tell us what you&apos;re building. We&apos;ll respond with next
                steps, timelines, and the best way to move forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-surface-container-lowest rounded-[2rem] p-10 transition-all duration-500 hover:shadow-xl">
              <h2 className="text-2xl font-headline font-bold text-on-surface">
                Send us a message
              </h2>
              <p className="mt-3 text-on-surface-variant font-body">
                Email works best for now. Include your goals, your timeline, and
                any existing links or screenshots.
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-surface-container p-6">
                  <p className="text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label">
                    Email
                  </p>
                  <a
                    href="mailto:hello@blummify.com"
                    className="mt-2 block text-lg font-headline font-bold text-primary hover:opacity-80 transition-opacity"
                  >
                    hello@blummify.com
                  </a>
                  <p className="mt-3 text-sm text-on-surface-variant font-body">
                    We typically reply within 1–2 business days.
                  </p>
                </div>
                <div className="rounded-2xl bg-surface-container p-6">
                  <p className="text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label">
                    Services
                  </p>
                  <p className="mt-2 text-on-surface font-headline font-bold">
                    Web · Mobile · Branding · Marketing
                  </p>
                  <p className="mt-3 text-sm text-on-surface-variant font-body">
                    Prefer a quick overview first? See what we offer.
                  </p>
                  <Link
                    href="/services"
                    className="mt-4 inline-flex items-center gap-2 text-primary font-bold font-headline hover:gap-3 transition-all"
                  >
                    View services{" "}
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-on-surface-variant font-body hover:text-primary transition-colors"
                >
                  See recent work{" "}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-5 bg-on-surface rounded-[2rem] p-10 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 anim-ambient" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-container/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 anim-float" />
              <div className="relative z-10">
                <h2 className="text-2xl lg:text-3xl font-headline font-bold">
                  Ready to start?
                </h2>
                <p className="mt-4 text-zinc-300 font-body leading-relaxed">
                  If you already know what you need, send us a short brief and
                  we&apos;ll propose a clean path to delivery.
                </p>
                <a
                  href="mailto:hello@blummify.com?subject=Project%20Inquiry"
                  className="mt-8 inline-flex w-full justify-center bg-primary text-white px-8 py-4 rounded-full font-headline font-bold text-base transition-all duration-300 hover:bg-primary-container hover:text-on-primary-container hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.99]"
                >
                  Email us
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
