"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = {
  href: string;
  label: string;
  exact?: boolean;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home", exact: true },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

function isActivePath(pathname: string, item: NavItem) {
  if (item.exact) return pathname === item.href;
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export default function HeaderNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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
          className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-center text-on-surface transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
        >
          <span className="material-symbols-outlined text-[22px]">menu</span>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[60] ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          className={`absolute top-0 right-0 h-full w-[86vw] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between">
              <p className="font-headline font-bold text-on-surface">Menu</p>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface transition-all duration-300 active:scale-95"
              >
                <span className="material-symbols-outlined text-[22px]">
                  close
                </span>
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = isActivePath(pathname, item);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-2xl font-headline font-bold transition-all ${
                      isActive
                        ? "bg-secondary-container text-on-secondary-container"
                        : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-8 inline-flex w-full justify-center bg-signature-gradient text-on-primary px-6 py-3 rounded-full font-headline font-bold text-sm transition-all duration-300 hover:opacity-95 active:scale-[0.99]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
