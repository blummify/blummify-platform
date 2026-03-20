"use client";

import Image from "next/image";
import Link from "next/link";
import type { PointerEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

type BannerImage = {
  src: string;
  alt: string;
};

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export default function HeroBanner() {
  const images: BannerImage[] = useMemo(
    () => [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIJAPDlotjWcVtvo-up8HWyAwYdkU5wgTSpXIxwKWkYmpJxvxN3aWWdpcXCgkYvIWDVIDw5DkXsLEOKmCmXJ9tq5O4chjfvs8Vnk1GhafhVMBpdVjkfUyA6BJueufmKjQf-VBb9m7pG_Lech-va4hoM0cPO_jFQAwcahZFRvLMPPOTnuQFkw_-24YuDtE-oBIZV3Tf9VHcF6PIvUDqzknNL7ACVI3LF-n8gr90YaLb1B_dogRwKrt0FsOggb9du-JVMRLAH8A8_g",
        alt: "Modern office team collaborating in a bright airy space",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPRMMrZeiblkDxXELyquAD9RscP2e7e0jN_kkJ0BfeGrZTPHmQN79x-2re0hGlTXiO9d4x_ITgigEDee-RNMYtuwHD2xULhJfYsZ8IqQ7IBCDKGxfplUbWR1o-yYM4QNSp6ywW7Wyx5iUq203nxxw2H1nvseHMVrhc3UT6RAYV7C1LkI3-f_qp9GLpfLq3MH65xknMmJRg8JZN985GocyjcOUvlVit6CO40EZhqTg5DIW7Z4U2ftlaQDW2N8dJECJEZOjEJcOjdw",
        alt: "Close up of hands working on a sleek laptop",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzNnTZpWtzdEHSq2il11IMwmUhxEfsrBhCYAG0Fip3yIq1_oOPkc-yfvWvIA1Uac3VFxBgWqNNAdRjpq-thY4s5GBu4n1Renr3F72EQ67JE2lGT0Ihste-IRKzkibznwp-w9qPicxr1qGePxF4d2JUn-jlfP4gjBb7K7jf1gIPGApvYeLYhRfx5NB1aIFPlbpczer67oYL8TyYareWNsNs2cMTx_p3b4EYjDZAnmvWjEIrXgGfrb5PRVBgPj53ZGBYXOHuVw-qWw",
        alt: "Abstract data visualization with clean green lines",
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStartX = useRef<number | null>(null);
  const reduceMotion = useRef(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotion.current = media.matches;
    const handler = () => {
      reduceMotion.current = media.matches;
    };
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduceMotion.current) return;
    const id = window.setInterval(() => {
      setActiveIndex((prev) => mod(prev + 1, images.length));
    }, 6500);
    return () => window.clearInterval(id);
  }, [images.length]);

  const goTo = (index: number) => setActiveIndex(mod(index, images.length));
  const next = () => goTo(activeIndex + 1);
  const prev = () => goTo(activeIndex - 1);

  const onPointerDown = (e: PointerEvent) => {
    pointerStartX.current = e.clientX;
  };

  const onPointerUp = (e: PointerEvent) => {
    if (pointerStartX.current == null) return;
    const deltaX = e.clientX - pointerStartX.current;
    pointerStartX.current = null;
    if (Math.abs(deltaX) < 40) return;
    if (deltaX < 0) next();
    else prev();
  };

  const onPointerCancel = () => {
    pointerStartX.current = null;
  };

  return (
    <section className="relative overflow-hidden min-h-[520px] lg:min-h-[640px]">
      <div
        className="absolute inset-0"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        {images.map((img, index) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="100vw"
              quality={92}
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

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
            Innovation in Bloom
          </span>
          <h1
            className="mt-6 text-5xl lg:text-7xl font-headline font-bold text-white leading-[1.05] tracking-tighter anim-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            Evolve your product with clarity, craft, and speed.
          </h1>
          <p
            className="mt-6 text-lg lg:text-xl text-white/80 leading-relaxed font-body anim-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Blummify is a software consulting company focused on helping teams
            evolve through web, mobile, branding, and marketing.
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
              View Projects
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="w-10 h-10 rounded-full bg-white/10 text-white backdrop-blur flex items-center justify-center transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5 active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">
                chevron_left
              </span>
            </button>
            <div className="flex items-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to image ${i + 1}`}
                  aria-current={i === activeIndex ? "true" : undefined}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "w-8 bg-white" : "w-2 bg-white/50"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="w-10 h-10 rounded-full bg-white/10 text-white backdrop-blur flex items-center justify-center transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5 active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">
                chevron_right
              </span>
            </button>
          </div>

          <p className="mt-6 text-xs text-white/60 font-body">
            Swipe the background to browse.
          </p>
        </div>
      </div>
    </section>
  );
}
