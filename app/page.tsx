import Image from "next/image";
import Link from "next/link";

import { projects } from "./projects/_data";
import HeroBanner from "./_components/HeroBanner";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <IntentBento />
      <CoreSpecializations />
      <FeaturedProjects />
      <Testimonials />
      <CTA />
    </main>
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
              <div className="relative w-full h-full">
                <Image
                  alt="Abstract data visualization with clean green lines"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzNnTZpWtzdEHSq2il11IMwmUhxEfsrBhCYAG0Fip3yIq1_oOPkc-yfvWvIA1Uac3VFxBgWqNNAdRjpq-thY4s5GBu4n1Renr3F72EQ67JE2lGT0Ihste-IRKzkibznwp-w9qPicxr1qGePxF4d2JUn-jlfP4gjBb7K7jf1gIPGApvYeLYhRfx5NB1aIFPlbpczer67oYL8TyYareWNsNs2cMTx_p3b4EYjDZAnmvWjEIrXgGfrb5PRVBgPj53ZGBYXOHuVw-qWw"
                  fill
                  sizes="(min-width: 768px) 640px, 100vw"
                  quality={90}
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </div>
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
              <div className="relative w-full h-full">
                <Image
                  alt="Close up of hands working on a sleek laptop"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPRMMrZeiblkDxXELyquAD9RscP2e7e0jN_kkJ0BfeGrZTPHmQN79x-2re0hGlTXiO9d4x_ITgigEDee-RNMYtuwHD2xULhJfYsZ8IqQ7IBCDKGxfplUbWR1o-yYM4QNSp6ywW7Wyx5iUq203nxxw2H1nvseHMVrhc3UT6RAYV7C1LkI3-f_qp9GLpfLq3MH65xknMmJRg8JZN985GocyjcOUvlVit6CO40EZhqTg5DIW7Z4U2ftlaQDW2N8dJECJEZOjEJcOjdw"
                  fill
                  sizes="(min-width: 768px) 240px, 100vw"
                  quality={90}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreSpecializations() {
  const services = [
    {
      icon: "language",
      title: "Web Development",
      description:
        "Modern websites and web apps engineered for performance, accessibility, and maintainability.",
      metric: "Fast delivery",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCzNnTZpWtzdEHSq2il11IMwmUhxEfsrBhCYAG0Fip3yIq1_oOPkc-yfvWvIA1Uac3VFxBgWqNNAdRjpq-thY4s5GBu4n1Renr3F72EQ67JE2lGT0Ihste-IRKzkibznwp-w9qPicxr1qGePxF4d2JUn-jlfP4gjBb7K7jf1gIPGApvYeLYhRfx5NB1aIFPlbpczer67oYL8TyYareWNsNs2cMTx_p3b4EYjDZAnmvWjEIrXgGfrb5PRVBgPj53ZGBYXOHuVw-qWw",
      imageAlt: "Abstract data visualization with clean green lines",
    },
    {
      icon: "smartphone",
      title: "Mobile Application Development",
      description:
        "iOS and Android apps built for reliability, speed, and a polished user experience.",
      metric: "Reliable apps",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDPRMMrZeiblkDxXELyquAD9RscP2e7e0jN_kkJ0BfeGrZTPHmQN79x-2re0hGlTXiO9d4x_ITgigEDee-RNMYtuwHD2xULhJfYsZ8IqQ7IBCDKGxfplUbWR1o-yYM4QNSp6ywW7Wyx5iUq203nxxw2H1nvseHMVrhc3UT6RAYV7C1LkI3-f_qp9GLpfLq3MH65xknMmJRg8JZN985GocyjcOUvlVit6CO40EZhqTg5DIW7Z4U2ftlaQDW2N8dJECJEZOjEJcOjdw",
      imageAlt: "Close up of hands working on a sleek laptop",
    },
    {
      icon: "palette",
      title: "Branding Design",
      description:
        "A cohesive identity and UI system that elevates trust, clarity, and conversion.",
      metric: "Premium look",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDIJAPDlotjWcVtvo-up8HWyAwYdkU5wgTSpXIxwKWkYmpJxvxN3aWWdpcXCgkYvIWDVIDw5DkXsLEOKmCmXJ9tq5O4chjfvs8Vnk1GhafhVMBpdVjkfUyA6BJueufmKjQf-VBb9m7pG_Lech-va4hoM0cPO_jFQAwcahZFRvLMPPOTnuQFkw_-24YuDtE-oBIZV3Tf9VHcF6PIvUDqzknNL7ACVI3LF-n8gr90YaLb1B_dogRwKrt0FsOggb9du-JVMRLAH8A8_g",
      imageAlt: "Modern office team collaborating in a bright airy space",
    },
    {
      icon: "campaign",
      title: "Digital Marketing",
      description:
        "Growth strategy and execution designed to increase visibility and capture qualified leads.",
      metric: "Lead growth",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCzNnTZpWtzdEHSq2il11IMwmUhxEfsrBhCYAG0Fip3yIq1_oOPkc-yfvWvIA1Uac3VFxBgWqNNAdRjpq-thY4s5GBu4n1Renr3F72EQ67JE2lGT0Ihste-IRKzkibznwp-w9qPicxr1qGePxF4d2JUn-jlfP4gjBb7K7jf1gIPGApvYeLYhRfx5NB1aIFPlbpczer67oYL8TyYareWNsNs2cMTx_p3b4EYjDZAnmvWjEIrXgGfrb5PRVBgPj53ZGBYXOHuVw-qWw",
      imageAlt: "Abstract data visualization with clean green lines",
    },
  ] as const;

  return (
    <section id="services" className="py-24 px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wider uppercase font-label">
          <span className="material-symbols-outlined text-[18px]">stars</span>
          World-Class Services
        </span>
        <h2 className="mt-6 text-4xl lg:text-5xl font-headline font-bold tracking-tight text-on-surface">
          Tailored Solutions Driving Real Results
        </h2>
        <p className="mt-5 text-on-surface-variant font-body leading-relaxed">
          From web and mobile delivery to brand and growth, we integrate where
          it&apos;s needed most and ship work that lasts.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-surface-container-lowest rounded-[2rem] p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="relative w-full h-40 rounded-2xl overflow-hidden bg-surface-container">
              <Image
                src={service.imageSrc}
                alt={service.imageAlt}
                fill
                sizes="(min-width: 1024px) 360px, 100vw"
                quality={90}
                className="object-cover"
              />
              <span className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-primary">
                  {service.icon}
                </span>
              </span>
              <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-bold font-label text-on-surface shadow-sm">
                {service.metric}
              </span>
            </div>

            <h3 className="mt-6 text-xl font-headline font-bold text-on-surface">
              {service.title}
            </h3>
            <p className="mt-3 text-sm text-on-surface-variant font-body leading-relaxed">
              {service.description}
            </p>
            <div className="mt-6 flex items-center justify-between">
              <Link
                href="/services"
                className="text-primary font-bold font-headline inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Explore service{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                href="/contact"
                className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center transition-transform duration-300 hover:scale-105"
                aria-label="Get started"
              >
                <span className="material-symbols-outlined text-primary">
                  call_made
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 bg-surface-container-highest text-on-surface px-8 py-4 rounded-full font-headline font-bold text-base transition-all duration-300 hover:bg-surface-container-high hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.99]"
        >
          See all services{" "}
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="bg-surface-container-low py-24">
      <div className="px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-headline font-bold tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-4 text-on-surface-variant font-body">
              A quick look at recent work across product builds, relaunches, and
              growth engagements.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary font-bold font-headline hover:gap-3 transition-all"
          >
            View all projects{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group bg-surface-container-lowest rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative w-full h-44">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  quality={90}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-8">
                <p className="text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label">
                  {project.year}
                </p>
                <h3 className="mt-3 text-2xl font-headline font-bold text-on-surface">
                  {project.name}
                </h3>
                <p className="mt-4 text-on-surface-variant font-body leading-relaxed">
                  {project.summary}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-primary font-bold font-headline">
                    View details
                  </span>
                  <span className="material-symbols-outlined text-primary transition-transform duration-300 group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Blummify felt like an extension of our team. They delivered quickly, communicated clearly, and elevated the quality of our product experience.",
      name: "Client Partner",
      title: "Founder",
      company: "Product Studio",
      initials: "CP",
    },
    {
      quote:
        "From strategy to execution, the process was structured and dependable. The end result looks modern, performs well, and is easy for our team to maintain.",
      name: "Operations Lead",
      title: "Director",
      company: "Services Company",
      initials: "OL",
    },
    {
      quote:
        "Great attention to detail. The UI polish and motion made the brand feel premium, and the rollout was smooth with no surprises.",
      name: "Product Owner",
      title: "PM",
      company: "Growth Team",
      initials: "PO",
    },
  ] as const;

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wider uppercase font-label">
          <span className="material-symbols-outlined text-[18px]">star</span>
          Client Success Stories
        </span>
        <h2 className="mt-6 text-4xl lg:text-6xl font-headline font-bold tracking-tight text-on-surface">
          Strong Partnerships. Stronger Results.
        </h2>
        <p className="mt-5 text-on-surface-variant font-body leading-relaxed">
          Trusted by teams who need clarity, quality, and consistent delivery.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.quote}
            className="bg-surface-container-lowest rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex items-center gap-1 text-primary">
              <span className="material-symbols-outlined text-[18px]">star</span>
              <span className="material-symbols-outlined text-[18px]">star</span>
              <span className="material-symbols-outlined text-[18px]">star</span>
              <span className="material-symbols-outlined text-[18px]">star</span>
              <span className="material-symbols-outlined text-[18px]">star</span>
            </div>
            <p className="mt-6 text-on-surface-variant font-body leading-relaxed">
              “{t.quote}”
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center font-headline font-bold text-primary">
                {t.initials}
              </div>
              <div>
                <p className="font-headline font-bold text-on-surface">
                  {t.name}
                </p>
                <p className="text-xs text-on-surface-variant font-body">
                  {t.title}, {t.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-8 mb-24">
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
          <Link
            className="bg-primary text-white px-10 py-5 rounded-full font-headline font-bold text-lg transition-all duration-300 hover:bg-primary-container hover:text-on-primary-container hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.99]"
            href="/contact"
          >
            Schedule a Strategy Call
          </Link>
          <Link
            className="border border-white/20 text-white px-10 py-5 rounded-full font-headline font-bold text-lg transition-all duration-300 hover:bg-white hover:text-on-surface hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.99]"
            href="/projects"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
