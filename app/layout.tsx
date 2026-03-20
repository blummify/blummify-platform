import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import HeaderNav from "./_components/HeaderNav";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Blummify | Evolving with Intent",
  description:
    "Blummify is a software consulting company helping teams evolve through strategy, engineering, and data intelligence.",
  icons: {
    icon: "/blummifly-logo.png",
    apple: "/blummifly-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div id="top" className="sr-only" />
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
          <div className="flex justify-between items-center px-8 py-2 max-w-7xl mx-auto">
            <Link
              href="/"
              className="flex items-center font-headline font-bold text-[#1B1C1D] tracking-tighter transition-transform duration-300 hover:-translate-y-0.5"
              aria-label="Blummify Home"
            >
              <span className="relative w-30 h-30 overflow-hidden">
                <Image
                  src="/blummifly-logo.png"
                  alt="Blummify"
                  fill
                  sizes="120px"
                  className="object-contain"
                  priority
                />
              </span>
            </Link>
            <HeaderNav />
            <Link
              href="/contact"
              className="hidden md:inline-flex bg-signature-gradient text-on-primary px-6 py-2.5 rounded-full font-headline font-bold text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
            >
              Get Started
            </Link>
          </div>
        </header>
        <div className="flex-1 pt-[112px]">{children}</div>
        <footer className="bg-[#EFEDEF] w-full py-12">
          <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-7xl mx-auto">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <div className="text-xl font-bold text-[#1B1C1D] font-headline mb-2">
                Blummify
              </div>
              <p className="font-body text-xs text-zinc-600">
                © {new Date().getFullYear()} Blummify Consulting. All rights
                reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 font-body text-xs">
              <Link
                className="text-zinc-600 hover:text-[#7AD0A4] transition-colors"
                href="/services"
              >
                Services
              </Link>
              <Link
                className="text-zinc-600 hover:text-[#7AD0A4] transition-colors"
                href="/projects"
              >
                Projects
              </Link>
              <Link
                className="text-zinc-600 hover:text-[#7AD0A4] transition-colors"
                href="/about"
              >
                About
              </Link>
              <Link
                className="text-zinc-600 hover:text-[#7AD0A4] transition-colors"
                href="/contact"
              >
                Contact
              </Link>
            </div>
            <div className="flex gap-4 mt-8 md:mt-0">
              <Link
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-on-surface cursor-pointer hover:bg-primary hover:text-white transition-all"
                href="/"
                aria-label="Home"
              >
                <span className="material-symbols-outlined text-sm">home</span>
              </Link>
              <Link
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-on-surface cursor-pointer hover:bg-primary hover:text-white transition-all"
                href="/contact"
                aria-label="Contact"
              >
                <span className="material-symbols-outlined text-sm">
                  mail
                </span>
              </Link>
            </div>
          </div>
        </footer>
        <a
          href="#top"
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-on-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-white active:scale-95"
        >
          <span className="material-symbols-outlined text-[20px]">
            arrow_upward
          </span>
        </a>
      </body>
    </html>
  );
}
