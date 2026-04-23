import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import HeaderNav from "./_components/HeaderNav";
import OrganizationJsonLd from "./_components/OrganizationJsonLd";
import { defaultSiteDescription, seoKeywords } from "./_lib/seo";
import { siteUrl } from "./_lib/site";
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

const defaultTitle = "Where Ideas Bloom into Digital Success | Blummify";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Blummify",
  },
  description: defaultSiteDescription,
  keywords: [...seoKeywords],
  authors: [{ name: "Blummify", url: siteUrl }],
  creator: "Blummify",
  publisher: "Blummify",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Blummify",
    title: defaultTitle,
    description: defaultSiteDescription,
    images: [
      {
        url: "/blummifly-logo.png",
        width: 512,
        height: 512,
        alt: "Blummify",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: defaultSiteDescription,
    images: ["/blummifly-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <OrganizationJsonLd />
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
              <div className="mb-3 flex justify-center md:justify-start">
                <Link
                  href="/"
                  className="relative block h-10 w-36 transition-transform duration-300 hover:-translate-y-0.5"
                  aria-label="Blummify Home"
                >
                  <Image
                    src="/blummifly-logo.png"
                    alt="Blummify"
                    fill
                    sizes="180px"
                    className="object-contain object-left"
                  />
                </Link>
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
                Portfolio
              </Link>
              <Link
                className="text-zinc-600 hover:text-[#7AD0A4] transition-colors"
                href="/about"
              >
                About
              </Link>
              <Link
                className="text-zinc-600 hover:text-[#7AD0A4] transition-colors"
                href="/careers"
              >
                Careers
              </Link>
              <Link
                className="text-zinc-600 hover:text-[#7AD0A4] transition-colors"
                href="/contact"
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-8 md:mt-0">
              <a
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-on-surface cursor-pointer hover:bg-primary hover:text-white transition-all"
                href="mailto:info@blummify.com"
                aria-label="Email Blummify"
              >
                <span className="material-symbols-outlined text-sm">mail</span>
              </a>
              <a
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-on-surface cursor-pointer hover:bg-primary hover:text-white transition-all font-headline font-bold text-xs"
                href="https://www.linkedin.com/company/blummify/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-on-surface cursor-pointer hover:bg-primary hover:text-white transition-all font-headline font-bold text-xs"
                href="https://www.instagram.com/blummify/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-on-surface cursor-pointer hover:bg-primary hover:text-white transition-all font-headline font-bold text-xs"
                href="https://x.com/blummify"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                x
              </a>
              <a
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-on-surface cursor-pointer hover:bg-primary hover:text-white transition-all font-headline font-bold text-xs"
                href="https://wa.me/233206626569"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                wa
              </a>
              <a
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-on-surface cursor-pointer hover:bg-primary hover:text-white transition-all font-headline font-bold text-xs"
                href="https://www.tiktok.com/@blummify"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                tt
              </a>
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
