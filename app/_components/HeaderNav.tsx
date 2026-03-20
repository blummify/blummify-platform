"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

function subscribeNoop() {
  return () => {};
}

type NavItem = {
  href: string;
  label: string;
  exact?: boolean;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home", exact: true },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

function isActivePath(pathname: string, item: NavItem) {
  if (item.exact) return pathname === item.href;
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export default function HeaderNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const mounted = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false
  );

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <nav className="hidden md:flex items-center space-x-8 font-headline font-medium text-sm tracking-tight">
        {navItems.map((item) => {
          const isActive = isActivePath(pathname, item);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={
                isActive
                  ? "text-[#7AD0A4] font-bold border-b-2 border-[#7AD0A4] pb-1"
                  : "text-[#1B1C1D] hover:text-[#7AD0A4] transition-colors"
              }
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="md:hidden">
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 text-on-surface shadow-sm ring-1 ring-black/[0.04] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.97] motion-reduce:hover:translate-y-0 motion-reduce:transition-none"
        >
          <span className="material-symbols-outlined text-[22px]">menu</span>
        </button>
      </div>

      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-[60] min-h-dvh ${
              isOpen ? "pointer-events-auto" : "pointer-events-none"
            }`}
            aria-hidden={!isOpen}
          >
            <div
              className={`absolute inset-0 bg-[#1b1c1d]/35 backdrop-blur-[8px] transition-[opacity,backdrop-filter] duration-500 ease-out motion-reduce:duration-200 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => setIsOpen(false)}
              aria-hidden
            />
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Main menu"
              className={`absolute top-0 right-0 flex h-full min-h-dvh w-[min(86vw,20rem)] flex-col rounded-l-[1.75rem] border-l border-white/60 bg-surface-bright/95 shadow-[-28px_0_90px_rgba(27,28,29,0.14)] ring-1 ring-black/[0.03] backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:duration-200 motion-reduce:ease-out ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-y-contain px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-[max(1.25rem,calc(env(safe-area-inset-top)+0.5rem))]">
                <div className="flex shrink-0 items-center justify-between gap-4">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
                    aria-label="Blummify Home"
                  >
                    <span className="relative h-25 w-25 overflow-hidden">
                      <Image
                        src="/blummifly-logo.png"
                        alt="Blummify"
                        fill
                        sizes="140px"
                        className="object-contain object-left"
                      />
                    </span>
                  </Link>
                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setIsOpen(false)}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-on-surface active:scale-95 motion-reduce:active:scale-100"
                  >
                    <span className="material-symbols-outlined text-[22px]">
                      close
                    </span>
                  </button>
                </div>

                <nav
                  className="mt-8 flex flex-col gap-0.5"
                  aria-label="Primary"
                >
                  {navItems.map((item) => {
                    const isActive = isActivePath(pathname, item);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setIsOpen(false)}
                        className={`group flex items-center justify-between gap-3 rounded-xl px-3 py-3.5 font-headline text-[0.9375rem] font-medium tracking-tight transition-colors motion-reduce:transition-none ${
                          isActive
                            ? "bg-white text-primary shadow-sm ring-1 ring-black/[0.04]"
                            : "text-on-surface hover:bg-white/70 hover:text-on-surface"
                        }`}
                      >
                        <span className={isActive ? "font-semibold" : ""}>
                          {item.label}
                        </span>
                        <span
                          className={`material-symbols-outlined text-[1.125rem] transition-transform duration-300 motion-reduce:transition-none ${
                            isActive
                              ? "text-primary translate-x-0"
                              : "text-on-surface-variant/35 group-hover:translate-x-0.5 group-hover:text-primary/70"
                          }`}
                          aria-hidden
                        >
                          chevron_right
                        </span>
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-auto shrink-0 border-t border-outline-variant/25 pt-6">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-signature-gradient py-3.5 font-headline text-sm font-bold text-on-primary shadow-md shadow-primary/20 transition-[transform,box-shadow,opacity] duration-300 hover:opacity-[0.97] hover:shadow-lg active:scale-[0.99] motion-reduce:hover:shadow-md motion-reduce:active:scale-100"
                  >
                    Get Started
                    <span
                      className="material-symbols-outlined text-[1.125rem]"
                      aria-hidden
                    >
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
