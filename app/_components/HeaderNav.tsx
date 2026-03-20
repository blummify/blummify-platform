"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
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
  );
}
