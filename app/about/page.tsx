import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
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
                  lightbulb
                </span>
                About
              </span>
              <h1
                className="mt-6 text-4xl lg:text-6xl font-headline font-bold tracking-tight text-white anim-fade-up"
                style={{ animationDelay: "90ms" }}
              >
                Driven by people. Defined by results.
              </h1>
              <p
                className="mt-5 text-lg text-white/80 font-body leading-relaxed anim-fade-up"
                style={{ animationDelay: "160ms" }}
              >
                Blummify helps teams ship modern web and mobile products with a
                brand that feels premium and a delivery process that stays
                dependable.
              </p>
              <div
                className="mt-8 flex flex-wrap gap-4 anim-fade-up"
                style={{ animationDelay: "220ms" }}
              >
                <Link
                  href="/contact"
                  className="bg-signature-gradient text-on-primary px-8 py-4 rounded-full font-headline font-bold text-base transition-all duration-300 shadow-lg hover:opacity-95 hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.99]"
                >
                  Talk to us
                </Link>
                <Link
                  href="/projects"
                  className="bg-white/10 text-white px-8 py-4 rounded-full font-headline font-bold text-base transition-all duration-300 backdrop-blur hover:bg-white/15 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.99]"
                >
                  View projects
                </Link>
              </div>
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
                      Help teams evolve with intent by shipping high-quality
                      software, building strong brands, and creating systems
                      that scale.
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
                      Be the consulting partner teams trust for modern delivery,
                      clean design, and outcomes that hold up in the real world.
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
                  Explore projects
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
