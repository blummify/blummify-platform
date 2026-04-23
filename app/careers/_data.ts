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
};

export const careerRoles: CareerRole[] = [
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
