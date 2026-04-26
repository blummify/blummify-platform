export type ServiceDetail = {
  slug: string;
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  image: {
    src: string;
    alt: string;
  };
  metric: string;
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  deliverables: string[];
  timeline: string;
  startingPrice?: string;
  relatedProjectSlugs?: string[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "web-development",
    id: "web-development",
    title: "Web Development",
    description:
      "Modern websites and web apps engineered for performance, accessibility, and long-term maintainability.",
    longDescription:
      "We build high-performance websites and web applications that scale with your business. From simple landing pages to complex web applications, we focus on clean code, fast load times, and exceptional user experiences. Our development process ensures your site is secure, accessible, and optimized for search engines.",
    icon: "language",
    image: {
      src: "/images/service-web-dev-new.webp",
      alt: "Developer working on code with multiple screens",
    },
    metric: "Fast delivery",
    process: [
      {
        step: 1,
        title: "Discovery & Planning",
        description:
          "We analyze your requirements, target audience, and business goals to create a comprehensive project plan.",
      },
      {
        step: 2,
        title: "Design & Prototyping",
        description:
          "Our designers create wireframes and high-fidelity prototypes to visualize the user experience.",
      },
      {
        step: 3,
        title: "Development",
        description:
          "We build your site using modern frameworks and best practices, ensuring clean, maintainable code.",
      },
      {
        step: 4,
        title: "Testing & Launch",
        description:
          "Rigorous testing across devices and browsers, followed by a smooth deployment to production.",
      },
      {
        step: 5,
        title: "Support & Maintenance",
        description:
          "Ongoing support to keep your site secure, updated, and performing at its best.",
      },
    ],
    benefits: [
      {
        title: "Lightning Fast Performance",
        description:
          "Optimized code and assets ensure your site loads quickly, improving user experience and SEO rankings.",
      },
      {
        title: "Mobile-First Design",
        description:
          "Responsive layouts that work flawlessly across all devices, from smartphones to large screens.",
      },
      {
        title: "SEO Optimized",
        description:
          "Built-in SEO best practices to help your site rank higher in search engine results.",
      },
      {
        title: "Accessible to Everyone",
        description:
          "WCAG-compliant design ensures your site is usable by people with disabilities.",
      },
      {
        title: "Secure & Reliable",
        description:
          "Security best practices and regular updates to protect your site and user data.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Built to grow with your business, handling increased traffic and feature additions.",
      },
    ],
    deliverables: [
      "Responsive website design",
      "Content management system integration",
      "Performance optimization",
      "SEO implementation",
      "Analytics setup",
      "Documentation and training",
    ],
    timeline: "4-12 weeks",
    startingPrice: "$3,000",
    relatedProjectSlugs: ["odutan-platform", "bamda-mining-platform", "ckm-marfcos"],
  },
  {
    slug: "mobile-application-development",
    id: "mobile-application-development",
    title: "Mobile Application Development",
    description:
      "iOS and Android apps built for reliability, speed, and the kind of UX users want to keep.",
    longDescription:
      "We create native and cross-platform mobile applications that deliver exceptional user experiences. Whether you need an iOS app, Android app, or both, we ensure your app is fast, reliable, and intuitive. Our development process focuses on performance, battery efficiency, and seamless integration with device capabilities.",
    icon: "smartphone",
    image: {
      src: "/images/service-mobile-dev-new.webp",
      alt: "Mobile phone showing app interface",
    },
    metric: "Reliable apps",
    process: [
      {
        step: 1,
        title: "Concept & Strategy",
        description:
          "We define your app's purpose, target users, and key features to create a solid foundation.",
      },
      {
        step: 2,
        title: "UX/UI Design",
        description:
          "Intuitive interfaces designed for mobile touch interactions and platform guidelines.",
      },
      {
        step: 3,
        title: "Development",
        description:
          "Native or cross-platform development using React Native, Flutter, or native technologies.",
      },
      {
        step: 4,
        title: "Testing & QA",
        description:
          "Comprehensive testing on real devices to ensure functionality and performance.",
      },
      {
        step: 5,
        title: "App Store Launch",
        description:
          "Submission to App Store and Google Play with all necessary assets and documentation.",
      },
    ],
    benefits: [
      {
        title: "Native Performance",
        description:
          "Apps built for optimal performance on each platform, ensuring smooth user experiences.",
      },
      {
        title: "Offline Functionality",
        description:
          "Features that work without internet connectivity, improving user engagement.",
      },
      {
        title: "Push Notifications",
        description:
          "Engage users with timely notifications and updates directly on their devices.",
      },
      {
        title: "Device Integration",
        description:
          "Leverage camera, GPS, sensors, and other device capabilities for richer experiences.",
      },
      {
        title: "Regular Updates",
        description:
          "Continuous improvement with new features, bug fixes, and OS compatibility updates.",
      },
      {
        title: "Analytics & Insights",
        description:
          "Track user behavior and app performance to make data-driven improvements.",
      },
    ],
    deliverables: [
      "iOS and/or Android application",
      "App store submission",
      "Backend API integration",
      "Push notification setup",
      "Analytics dashboard",
      "Source code and documentation",
    ],
    timeline: "8-20 weeks",
    startingPrice: "$8,000",
    relatedProjectSlugs: ["fam-multimedia"],
  },
  {
    slug: "branding-design",
    id: "branding-design",
    title: "Branding Design",
    description:
      "A cohesive brand system and UI direction that elevates trust, clarity, and conversion.",
    longDescription:
      "We build complete brand identities that resonate with your target audience and differentiate you from competitors. From logo design to comprehensive brand guidelines, we ensure consistency across all touchpoints. Our branding process combines strategic thinking with creative excellence to create memorable, impactful brands.",
    icon: "palette",
    image: {
      src: "/images/service-branding-new.webp",
      alt: "Brand design materials with color swatches and logos",
    },
    metric: "Premium look",
    process: [
      {
        step: 1,
        title: "Brand Discovery",
        description:
          "Deep dive into your business, audience, and competitive landscape to inform brand strategy.",
      },
      {
        step: 2,
        title: "Brand Strategy",
        description:
          "Define your brand positioning, personality, and messaging framework.",
      },
      {
        step: 3,
        title: "Visual Identity",
        description:
          "Create logo, color palette, typography, and visual elements that represent your brand.",
      },
      {
        step: 4,
        title: "Brand Guidelines",
        description:
          "Comprehensive guidelines to ensure consistent application across all channels.",
      },
      {
        step: 5,
        title: "Implementation",
        description:
          "Apply the brand identity across digital and physical touchpoints.",
      },
    ],
    benefits: [
      {
        title: "Memorable Identity",
        description:
          "A distinctive brand that stands out and stays top-of-mind with your audience.",
      },
      {
        title: "Consistent Experience",
        description:
          "Unified brand presence across all channels builds trust and recognition.",
      },
      {
        title: "Strategic Positioning",
        description:
          "Brand strategy that aligns with your business goals and resonates with customers.",
      },
      {
        title: "Scalable System",
        description:
          "Flexible brand assets that work across various applications and mediums.",
      },
      {
        title: "Professional Polish",
        description:
          "High-quality design that communicates credibility and attention to detail.",
      },
      {
        title: "Competitive Advantage",
        description:
          "Unique positioning that differentiates you from competitors in your market.",
      },
    ],
    deliverables: [
      "Logo design (primary and variations)",
      "Color palette and typography",
      "Brand guidelines document",
      "Business card and stationery design",
      "Social media templates",
      "Brand asset library",
    ],
    timeline: "4-8 weeks",
    startingPrice: "$2,500",
    relatedProjectSlugs: ["brix-tech-solutions"],
  },
  {
    slug: "digital-marketing",
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Growth-focused strategy and execution designed to increase visibility and capture qualified leads.",
    longDescription:
      "We develop and execute digital marketing strategies that drive measurable results. From SEO and content marketing to paid advertising and social media, we take a data-driven approach to grow your online presence. Our marketing efforts are focused on attracting qualified leads and converting them into customers.",
    icon: "campaign",
    image: {
      src: "/images/service-marketing-new.webp",
      alt: "Analytics dashboard showing marketing metrics and growth",
    },
    metric: "Lead growth",
    process: [
      {
        step: 1,
        title: "Audit & Research",
        description:
          "Analyze current performance, competitors, and market opportunities.",
      },
      {
        step: 2,
        title: "Strategy Development",
        description:
          "Create a comprehensive marketing plan with clear objectives and KPIs.",
      },
      {
        step: 3,
        title: "Content Creation",
        description:
          "Produce engaging content that resonates with your target audience.",
      },
      {
        step: 4,
        title: "Campaign Execution",
        description:
          "Launch and manage campaigns across SEO, PPC, social media, and email.",
      },
      {
        step: 5,
        title: "Optimization & Reporting",
        description:
          "Continuous monitoring, testing, and optimization to improve performance.",
      },
    ],
    benefits: [
      {
        title: "Increased Visibility",
        description:
          "Improved search rankings and online presence make it easier for customers to find you.",
      },
      {
        title: "Qualified Leads",
        description:
          "Targeted strategies attract prospects who are actually interested in your offerings.",
      },
      {
        title: "Measurable Results",
        description:
          "Data-driven approach with clear metrics to track ROI and campaign performance.",
      },
      {
        title: "Cost Effective",
        description:
          "Optimized campaigns maximize your marketing budget and improve conversion rates.",
      },
      {
        title: "Brand Authority",
        description:
          "Consistent content and engagement establish your brand as an industry leader.",
      },
      {
        title: "Scalable Growth",
        description:
          "Strategies that can be scaled as your business grows and marketing needs evolve.",
      },
    ],
    deliverables: [
      "Marketing strategy document",
      "SEO optimization",
      "Content calendar and creation",
      "Paid ad campaign management",
      "Social media management",
      "Monthly performance reports",
    ],
    timeline: "Ongoing",
    startingPrice: "$1,500/month",
    relatedProjectSlugs: ["odutan-platform", "bamda-mining-platform"],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((service) => service.slug === slug);
}
