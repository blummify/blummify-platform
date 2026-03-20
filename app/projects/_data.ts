export type Project = {
  slug: string;
  name: string;
  year: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  services: string[];
  stack: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "blummify-platform",
    name: "Blummify Platform",
    year: "2026",
    summary:
      "A modern consulting website foundation with a crisp brand system, fast performance, and a scalable content structure.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIJAPDlotjWcVtvo-up8HWyAwYdkU5wgTSpXIxwKWkYmpJxvxN3aWWdpcXCgkYvIWDVIDw5DkXsLEOKmCmXJ9tq5O4chjfvs8Vnk1GhafhVMBpdVjkfUyA6BJueufmKjQf-VBb9m7pG_Lech-va4hoM0cPO_jFQAwcahZFRvLMPPOTnuQFkw_-24YuDtE-oBIZV3Tf9VHcF6PIvUDqzknNL7ACVI3LF-n8gr90YaLb1B_dogRwKrt0FsOggb9du-JVMRLAH8A8_g",
    imageAlt: "Modern team collaborating in a bright office",
    services: ["Web Development", "Branding Design"],
    stack: ["Next.js", "React", "Tailwind CSS"],
    highlights: [
      "Modern responsive layout with motion-safe animation",
      "Reusable navigation and page structure",
      "Optimized images with remote pattern configuration",
    ],
  },
  {
    slug: "mobile-commerce-app",
    name: "Mobile Commerce App",
    year: "2025",
    summary:
      "A mobile shopping experience designed for conversion, reliability, and rapid iteration across iOS and Android.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPRMMrZeiblkDxXELyquAD9RscP2e7e0jN_kkJ0BfeGrZTPHmQN79x-2re0hGlTXiO9d4x_ITgigEDee-RNMYtuwHD2xULhJfYsZ8IqQ7IBCDKGxfplUbWR1o-yYM4QNSp6ywW7Wyx5iUq203nxxw2H1nvseHMVrhc3UT6RAYV7C1LkI3-f_qp9GLpfLq3MH65xknMmJRg8JZN985GocyjcOUvlVit6CO40EZhqTg5DIW7Z4U2ftlaQDW2N8dJECJEZOjEJcOjdw",
    imageAlt: "Hands working on a laptop",
    services: ["Mobile Application Development", "Branding Design"],
    stack: ["React Native", "TypeScript", "Firebase"],
    highlights: [
      "Streamlined onboarding and checkout",
      "Push notifications and lifecycle messaging",
      "Analytics instrumentation for growth experiments",
    ],
  },
  {
    slug: "brand-and-web-relaunch",
    name: "Brand + Web Relaunch",
    year: "2025",
    summary:
      "A full identity refresh and website rebuild focused on credibility, clarity, and lead generation.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzNnTZpWtzdEHSq2il11IMwmUhxEfsrBhCYAG0Fip3yIq1_oOPkc-yfvWvIA1Uac3VFxBgWqNNAdRjpq-thY4s5GBu4n1Renr3F72EQ67JE2lGT0Ihste-IRKzkibznwp-w9qPicxr1qGePxF4d2JUn-jlfP4gjBb7K7jf1gIPGApvYeLYhRfx5NB1aIFPlbpczer67oYL8TyYareWNsNs2cMTx_p3b4EYjDZAnmvWjEIrXgGfrb5PRVBgPj53ZGBYXOHuVw-qWw",
    imageAlt: "Abstract data visualization",
    services: ["Branding Design", "Web Development"],
    stack: ["Next.js", "Tailwind CSS", "Figma"],
    highlights: [
      "New design system and component library",
      "Improved content hierarchy and messaging",
      "Accessible UI patterns and polished interactions",
    ],
  },
  {
    slug: "marketing-growth-sprints",
    name: "Digital Marketing Growth Sprints",
    year: "2024",
    summary:
      "Campaign strategy and execution to increase visibility and capture qualified leads with measurable outcomes.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzNnTZpWtzdEHSq2il11IMwmUhxEfsrBhCYAG0Fip3yIq1_oOPkc-yfvWvIA1Uac3VFxBgWqNNAdRjpq-thY4s5GBu4n1Renr3F72EQ67JE2lGT0Ihste-IRKzkibznwp-w9qPicxr1qGePxF4d2JUn-jlfP4gjBb7K7jf1gIPGApvYeLYhRfx5NB1aIFPlbpczer67oYL8TyYareWNsNs2cMTx_p3b4EYjDZAnmvWjEIrXgGfrb5PRVBgPj53ZGBYXOHuVw-qWw",
    imageAlt: "Abstract data visualization",
    services: ["Digital Marketing", "Branding Design"],
    stack: ["Analytics", "SEO", "Content Ops"],
    highlights: [
      "Conversion-focused landing pages and funnels",
      "Search and content strategy with performance tracking",
      "Iterative creative testing and reporting cadence",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
