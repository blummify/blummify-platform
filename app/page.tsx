export default function Home() {
  return (
    <>
      <TopNav />
      <main className="pt-24">
        <Hero />
        <IntentBento />
        <CoreSpecializations />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

function TopNav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <a
          href="#top"
          className="text-2xl font-bold text-[#1B1C1D] tracking-tighter font-headline transition-transform duration-300 hover:-translate-y-0.5"
        >
          Blummify
        </a>
        <div className="hidden md:flex items-center space-x-8 font-headline font-medium text-sm tracking-tight">
          <a
            className="text-[#7AD0A4] font-bold border-b-2 border-[#7AD0A4] pb-1"
            href="#services"
          >
            Services
          </a>
          <a
            className="text-[#1B1C1D] hover:text-[#7AD0A4] transition-colors"
            href="#case-studies"
          >
            Case Studies
          </a>
          <a
            className="text-[#1B1C1D] hover:text-[#7AD0A4] transition-colors"
            href="#about"
          >
            About
          </a>
          <a
            className="text-[#1B1C1D] hover:text-[#7AD0A4] transition-colors"
            href="#insights"
          >
            Insights
          </a>
        </div>
        <a
          href="#contact"
          className="bg-signature-gradient text-on-primary px-6 py-2.5 rounded-full font-headline font-bold text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative px-8 py-20 lg:py-32 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wider uppercase mb-6 font-label anim-fade-up"
            style={{ animationDelay: "40ms" }}
          >
            Innovation in Bloom
          </span>
          <h1
            className="text-5xl lg:text-7xl font-headline font-bold text-on-surface leading-[1.1] tracking-tighter mb-8 anim-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            The Digital <span className="text-primary">Greenhouse</span> for
            Business.
          </h1>
          <p
            className="text-lg lg:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg font-body anim-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Blummify is a software consulting company focused on helping teams
            evolve and succeed through strategy, engineering, and data-driven
            decisions.
          </p>
          <div
            className="flex flex-wrap gap-4 anim-fade-up"
            style={{ animationDelay: "280ms" }}
          >
            <a
              href="#contact"
              className="bg-signature-gradient text-on-primary px-8 py-4 rounded-full font-headline font-bold text-base transition-all duration-300 shadow-lg hover:opacity-95 hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.99]"
            >
              Start Your Evolution
            </a>
            <a
              href="#method"
              className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-full font-headline font-bold text-base transition-all duration-300 hover:bg-surface-container-high hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.99]"
            >
              View Our Method
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-[3rem] overflow-hidden bg-surface-container-low anim-fade-in">
            <img
              className="w-full h-full object-cover"
              alt="Modern office team collaborating in a bright airy space"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIJAPDlotjWcVtvo-up8HWyAwYdkU5wgTSpXIxwKWkYmpJxvxN3aWWdpcXCgkYvIWDVIDw5DkXsLEOKmCmXJ9tq5O4chjfvs8Vnk1GhafhVMBpdVjkfUyA6BJueufmKjQf-VBb9m7pG_Lech-va4hoM0cPO_jFQAwcahZFRvLMPPOTnuQFkw_-24YuDtE-oBIZV3Tf9VHcF6PIvUDqzknNL7ACVI3LF-n8gr90YaLb1B_dogRwKrt0FsOggb9du-JVMRLAH8A8_g"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-container/40 rounded-full blur-3xl anim-float" />
          <div className="absolute top-10 -right-10 w-64 h-64 bg-secondary-container/30 rounded-full blur-[100px] anim-ambient" />
          <div className="absolute -bottom-10 right-10 bg-surface-container-lowest p-6 rounded-2xl shadow-xl flex items-center gap-4 anim-fade-up">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">
                trending_up
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface-variant font-label">
                Efficiency
              </p>
              <p className="text-lg font-bold font-headline">+42% Growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntentBento() {
  return (
    <section id="method" className="bg-surface-container-low py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-headline font-bold tracking-tight mb-6">
              Evolving with Intent
            </h2>
            <p className="text-on-surface-variant font-body">
              Strategy isn&apos;t a static document; it&apos;s a living organism.
              We build systems that don&apos;t just solve today&apos;s problems
              but adapt to tomorrow&apos;s opportunities.
            </p>
          </div>
          <span className="font-headline font-bold text-8xl text-outline-variant/20 hidden lg:block">
            01
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-[2rem] flex flex-col justify-between group transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
            <div className="max-w-md">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">
                psychology
              </span>
              <h3 className="text-2xl font-headline font-bold mb-4">
                Strategic Architecture
              </h3>
              <p className="text-on-surface-variant mb-8">
                We map the digital DNA of your organization to ensure every
                technological leap is grounded in purpose and measurable ROI.
              </p>
            </div>
            <div className="h-48 w-full bg-surface-container-low rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Abstract data visualization with clean green lines"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzNnTZpWtzdEHSq2il11IMwmUhxEfsrBhCYAG0Fip3yIq1_oOPkc-yfvWvIA1Uac3VFxBgWqNNAdRjpq-thY4s5GBu4n1Renr3F72EQ67JE2lGT0Ihste-IRKzkibznwp-w9qPicxr1qGePxF4d2JUn-jlfP4gjBb7K7jf1gIPGApvYeLYhRfx5NB1aIFPlbpczer67oYL8TyYareWNsNs2cMTx_p3b4EYjDZAnmvWjEIrXgGfrb5PRVBgPj53ZGBYXOHuVw-qWw"
              />
            </div>
          </div>
          <div className="md:col-span-4 bg-signature-gradient p-10 rounded-[2rem] text-on-primary flex flex-col justify-center items-center text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
            <span
              className="material-symbols-outlined text-6xl mb-6"
              style={{
                fontVariationSettings:
                  '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24',
              }}
            >
              eco
            </span>
            <h3 className="text-2xl font-headline font-bold mb-4">
              Sustainable Growth
            </h3>
            <p className="opacity-90">
              Building digital foundations that prioritize longevity over
              quick-fixes.
            </p>
          </div>
          <div className="md:col-span-4 bg-surface-container-lowest p-10 rounded-[2rem] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">
              hub
            </span>
            <h3 className="text-2xl font-headline font-bold mb-4">
              Interconnected Systems
            </h3>
            <p className="text-on-surface-variant">
              Breaking silos through unified data streams and seamless API
              integrations.
            </p>
          </div>
          <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-[2rem] flex flex-col md:flex-row gap-8 items-center transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
            <div className="flex-1">
              <h3 className="text-2xl font-headline font-bold mb-4">
                Continuous Adaptation
              </h3>
              <p className="text-on-surface-variant">
                Our agile methodology ensures your software evolves at the
                speed of your market.
              </p>
            </div>
            <div className="w-full md:w-1/3 aspect-square bg-secondary-fixed rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Close up of hands working on a sleek laptop"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPRMMrZeiblkDxXELyquAD9RscP2e7e0jN_kkJ0BfeGrZTPHmQN79x-2re0hGlTXiO9d4x_ITgigEDee-RNMYtuwHD2xULhJfYsZ8IqQ7IBCDKGxfplUbWR1o-yYM4QNSp6ywW7Wyx5iUq203nxxw2H1nvseHMVrhc3UT6RAYV7C1LkI3-f_qp9GLpfLq3MH65xknMmJRg8JZN985GocyjcOUvlVit6CO40EZhqTg5DIW7Z4U2ftlaQDW2N8dJECJEZOjEJcOjdw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreSpecializations() {
  return (
    <section id="services" className="py-24 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl lg:text-5xl font-headline font-bold tracking-tight mb-4">
          Core Specializations
        </h2>
        <div className="w-24 h-2 bg-primary mx-auto rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-500 hover:bg-surface-container hover:-translate-y-1 hover:shadow-xl">
          <div className="w-20 h-20 rounded-full bg-primary-fixed flex items-center justify-center mb-8">
            <span className="material-symbols-outlined text-on-primary-fixed text-4xl">
              cloud_done
            </span>
          </div>
          <h3 className="text-2xl font-headline font-bold mb-4">
            Cloud Modernization
          </h3>
          <p className="text-on-surface-variant font-body">
            Legacy migration and native cloud architecture that scales with
            zero friction.
          </p>
          <a
            className="mt-6 text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all"
            href="#contact"
          >
            Learn More{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
        <div className="flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-500 hover:bg-surface-container hover:-translate-y-1 hover:shadow-xl">
          <div className="w-20 h-20 rounded-full bg-secondary-fixed flex items-center justify-center mb-8">
            <span className="material-symbols-outlined text-on-secondary-fixed text-4xl">
              terminal
            </span>
          </div>
          <h3 className="text-2xl font-headline font-bold mb-4">
            Custom Engineering
          </h3>
          <p className="text-on-surface-variant font-body">
            Tailored software solutions built with modern stacks to give you a
            lasting edge.
          </p>
          <a
            className="mt-6 text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all"
            href="#contact"
          >
            Learn More{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
        <div className="flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-500 hover:bg-surface-container hover:-translate-y-1 hover:shadow-xl">
          <div className="w-20 h-20 rounded-full bg-tertiary-fixed flex items-center justify-center mb-8">
            <span className="material-symbols-outlined text-on-tertiary-fixed text-4xl">
              monitoring
            </span>
          </div>
          <h3 className="text-2xl font-headline font-bold mb-4">
            Data Intelligence
          </h3>
          <p className="text-on-surface-variant font-body">
            Turning raw metrics into actionable narratives through AI and
            advanced analytics.
          </p>
          <a
            className="mt-6 text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all"
            href="#contact"
          >
            Learn More{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="mx-8 mb-24">
      <div className="max-w-7xl mx-auto bg-on-surface rounded-[3rem] p-12 lg:p-24 text-center overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 anim-ambient" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-container/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 anim-float" />
        <h2 className="text-4xl lg:text-6xl font-headline font-bold text-white mb-8 relative z-10 leading-tight">
          Ready to nurture your <br className="hidden md:block" />
          next big idea?
        </h2>
        <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto relative z-10">
          Join teams transforming their digital presence with Blummify&apos;s
          consultative approach.
        </p>
        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          <a
            className="bg-primary text-white px-10 py-5 rounded-full font-headline font-bold text-lg transition-all duration-300 hover:bg-primary-container hover:text-on-primary-container hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.99]"
            href="mailto:hello@blummify.com"
          >
            Schedule a Strategy Call
          </a>
          <a
            className="border border-white/20 text-white px-10 py-5 rounded-full font-headline font-bold text-lg transition-all duration-300 hover:bg-white hover:text-on-surface hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.99]"
            href="#case-studies"
          >
            Our Case Studies
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#EFEDEF] w-full py-12">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-7xl mx-auto">
        <div id="about" className="mb-8 md:mb-0 text-center md:text-left">
          <div className="text-xl font-bold text-[#1B1C1D] font-headline mb-2">
            Blummify
          </div>
          <p className="font-body text-xs text-zinc-600">
            © {new Date().getFullYear()} Blummify Consulting. All rights
            reserved.
          </p>
        </div>
        <div
          id="insights"
          className="flex flex-wrap justify-center gap-8 font-body text-xs"
        >
          <a
            className="text-zinc-600 hover:text-[#7AD0A4] transition-colors"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-zinc-600 hover:text-[#7AD0A4] transition-colors"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-zinc-600 hover:text-[#7AD0A4] transition-colors"
            href="#"
          >
            Cookie Settings
          </a>
          <a
            className="text-zinc-600 hover:text-[#7AD0A4] transition-colors"
            href="mailto:hello@blummify.com"
          >
            Contact Us
          </a>
        </div>
        <div id="case-studies" className="flex gap-4 mt-8 md:mt-0">
          <a
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-on-surface cursor-pointer hover:bg-primary hover:text-white transition-all"
            href="#"
            aria-label="Website"
          >
            <span className="material-symbols-outlined text-sm">public</span>
          </a>
          <a
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-on-surface cursor-pointer hover:bg-primary hover:text-white transition-all"
            href="#"
            aria-label="Share"
          >
            <span className="material-symbols-outlined text-sm">share</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
