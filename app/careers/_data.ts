export type CareerRole = {
  slug: string;
  title: string;
  type: string;
  tags: string[];
  location: string;
  stack: string[];
  summary: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
  image?: string;
};

export const careerRoles: CareerRole[] = [
  {
    slug: "digital-marketing-specialist",
    title: "Digital Marketing & Content Specialist",
    type: "Career Opportunity",
    tags: ["Marketing", "Content Creation", "Social Media", "Branding", "Campaigns", "Analytics"],
    location: "Remote",
    stack: ["Canva", "CapCut", "Meta Business Suite", "Google Analytics"],
    summary:
      "We are looking for a creative and results-driven Digital Marketing & Content Specialist to grow Blummify's brand, create engaging content, and drive impactful digital campaigns.",
    overview:
      "You will be responsible for managing Blummify's online presence, creating engaging content, executing digital marketing strategies, and increasing brand awareness across multiple platforms. This role blends creativity, strategy, and analytics to deliver real results.",
    responsibilities: [
      "Manage and grow Blummify's social media platforms",
      "Create engaging content for social media and marketing campaigns",
      "Design promotional graphics, flyers, and digital materials",
      "Create and edit short-form videos, reels, and other multimedia content",
      "Plan and schedule content calendars across platforms",
      "Develop and execute digital marketing strategies",
      "Run and monitor social media advertising campaigns",
      "Increase brand awareness and audience engagement",
      "Write captions, marketing copy, and website content",
      "Monitor social media trends and suggest creative campaign ideas",
      "Track campaign performance and prepare basic reports/analytics",
      "Maintain consistent brand identity across all digital channels",
      "Support lead generation and customer acquisition efforts",
      "Collaborate with the team on campaigns, launches, and promotions",
      "Manage online community interactions and respond to messages/comments",
    ],
    requirements: [
      "Experience in digital marketing, social media management, or content creation",
      "Strong creativity, copywriting, and communication skills",
      "Proficiency with tools like Canva, CapCut, Meta Business Suite, Google Analytics, etc.",
      "Basic knowledge of SEO, paid ads, and analytics",
      "Ability to work independently and meet deadlines",
    ],
    perks: [
      "Opportunity to work on exciting projects and campaigns",
      "Creative and supportive work environment",
      "Competitive stipend",
    ],
    image: "/images/career-digital-marketing-removebg.webp",
  },
  {
    slug: "fullstack",
    title: "Fullstack Developer (Volunteer)",
    type: "Career Opportunity",
    tags: ["Volunteer"],
    location: "Remote",
    stack: ["HTML", "CSS", "Next.js", "React.js", "Express.js", "Node.js"],
    summary:
      "We are looking for a volunteer developer to help build one of Blummify's products using HTML, CSS, Next.js, React.js, Express.js, and Node.js.",
    overview:
      "You will support the development and continuous improvement of one of Blummify’s products, working closely with the team to deliver high-quality, reliable features across both frontend and backend systems.",
    responsibilities: [
      "Help build and improve product features with HTML, CSS, Next.js, React.js, Express.js, and Node.js",
      "Collaborate with the team to implement pages, APIs, and user-facing experiences",
      "Write clean, maintainable code and support testing and bug fixes",
      "Participate in feedback and weekly progress updates",
    ],
    requirements: [
      "Basic to intermediate experience with HTML, CSS, Next.js, React.js, Express.js, and Node.js",
      "A portfolio, GitHub profile, or sample project to demonstrate your work",
      "Ability to communicate clearly and collaborate in a remote team",
      "Commitment to delivering tasks reliably",
    ],
    perks: [
      "Hands-on mentorship and practical experience",
      "Opportunity to contribute to a live platform",
      "Monthly stipend",
    ],
  },
];

export function getCareerRoleBySlug(slug: string) {
  return careerRoles.find((role) => role.slug === slug);
}
