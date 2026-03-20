import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="pb-16">
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
                We&apos;re a software consulting studio pairing thoughtful design
                with dependable engineering—so your team can ship web and mobile
                products, brand experiences, and growth work with confidence.
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
                      To help businesses bloom online by creating and improving
                      modern digital solutions that drive growth and impact.
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
                      To become a trusted global brand that empowers businesses
                      to grow, innovate, and succeed through impactful
                      solutions.
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzNnTZpWtzdEHSq2il11IMwmUhxEfsrBhCYAG0Fip3yIq1_oOPkc-yfvWvIA1Uac3VFxBgWqNNAdRjpq-thY4s5GBu4n1Renr3F72EQ67JE2lGT0Ihste-IRKzkibznwp-w9qPicxr1qGePxF4d2JUn-jlfP4gjBb7K7jf1gIPGApvYeLYhRfx5NB1aIFPlbpczer67oYL8TyYareWNsNs2cMTx_p3b4EYjDZAnmvWjEIrXgGfrb5PRVBgPj53ZGBYXOHuVw-qWw"
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
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-fixed text-primary text-xs font-bold tracking-wider uppercase font-label">
                <span className="material-symbols-outlined text-[18px]">
                  handshake
                </span>
                Core Values
              </span>
              <h2 className="mt-6 text-3xl lg:text-5xl font-headline font-bold tracking-tight text-on-surface">
                The principles behind every project we ship.
              </h2>
              <p className="mt-4 text-on-surface-variant font-body leading-relaxed">
                These values shape how we think, collaborate, and deliver
                outcomes that help businesses grow.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-surface-container-lowest rounded-[2rem] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <span className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">
                      trending_up
                    </span>
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label">
                      1. Growth
                    </p>
                    <p className="mt-2 text-on-surface-variant font-body leading-relaxed">
                      We are committed to helping businesses grow and reach
                      their full potential.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-[2rem] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <span className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-secondary-container">
                      tune
                    </span>
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label">
                      2. Simplicity
                    </p>
                    <p className="mt-2 text-on-surface-variant font-body leading-relaxed">
                      We believe in clean, simple, and effective solutions that
                      deliver real results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-[2rem] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <span className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary-container">
                      auto_awesome
                    </span>
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label">
                      3. Innovation
                    </p>
                    <p className="mt-2 text-on-surface-variant font-body leading-relaxed">
                      We embrace new ideas and continuously improve to create
                      better solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-[2rem] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <span className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-tertiary-container">
                      verified
                    </span>
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label">
                      4. Reliability
                    </p>
                    <p className="mt-2 text-on-surface-variant font-body leading-relaxed">
                      We deliver on our promises and build solutions our clients
                      can depend on.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-[2rem] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <span className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">
                      public
                    </span>
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label">
                      5. Impact
                    </p>
                    <p className="mt-2 text-on-surface-variant font-body leading-relaxed">
                      We focus on creating solutions that make a meaningful
                      difference for businesses.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-[2rem] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <span className="w-12 h-12 rounded-full bg-primary-fixed-dim flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary-fixed">
                      groups
                    </span>
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label">
                      6. Collaboration
                    </p>
                    <p className="mt-2 text-on-surface-variant font-body leading-relaxed">
                      We work closely with our clients to understand their needs
                      and bring their ideas to life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-surface-container shadow-xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIJAPDlotjWcVtvo-up8HWyAwYdkU5wgTSpXIxwKWkYmpJxvxN3aWWdpcXCgkYvIWDVIDw5DkXsLEOKmCmXJ9tq5O4chjfvs8Vnk1GhafhVMBpdVjkfUyA6BJueufmKjQf-VBb9m7pG_Lech-va4hoM0cPO_jFQAwcahZFRvLMPPOTnuQFkw_-24YuDtE-oBIZV3Tf9VHcF6PIvUDqzknNL7ACVI3LF-n8gr90YaLb1B_dogRwKrt0FsOggb9du-JVMRLAH8A8_g"
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
                Built for teams who want to move fast without breaking quality.
              </h2>
              <div className="mt-6 space-y-4 text-on-surface-variant font-body leading-relaxed">
                <p>
                  We work with founders and teams to clarify direction, design a
                  modern experience, and build software that stays maintainable.
                </p>
                <p>
                  The goal is simple: ship confidently, learn quickly, and grow
                  with a foundation that won&apos;t slow you down later.
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
