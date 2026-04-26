import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100dvh-112px)]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-banner.jpg"
          alt="Black professionals collaborating in a meeting with laptops"
          fill
          sizes="100vw"
          quality={92}
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      <div className="relative px-8 py-20 lg:py-28 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-bold tracking-wider uppercase font-label backdrop-blur anim-fade-up"
            style={{ animationDelay: "40ms" }}
          >
            <span className="material-symbols-outlined text-[18px]">eco</span>
            Bloom
          </span>
          <h1
            className="mt-6 text-5xl lg:text-7xl font-headline font-bold text-white leading-[1.05] tracking-tighter anim-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            Where Ideas Bloom into digital success
          </h1>
          <p
            className="mt-6 text-lg lg:text-xl text-white/80 leading-relaxed font-body anim-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Whether you&apos;re starting from scratch or looking to upgrade your
            existing platform, we&apos;ve got you covered
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4 anim-fade-up"
            style={{ animationDelay: "280ms" }}
          >
            <Link
              href="/contact"
              className="bg-signature-gradient text-on-primary px-8 py-4 rounded-full font-headline font-bold text-base transition-all duration-300 shadow-lg hover:opacity-95 hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.99]"
            >
              Get Started
            </Link>
            <Link
              href="/projects"
              className="bg-white/10 text-white px-8 py-4 rounded-full font-headline font-bold text-base transition-all duration-300 backdrop-blur hover:bg-white/15 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.99]"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
