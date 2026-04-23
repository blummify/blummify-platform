export type CareerRole = {
  slug: string;
  title: string;
  type: string;
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
    slug: "platform-developer",
    title: "Fullstack Developer",
    type: "Career Opportunity",
    location: "Remote",
    stack: ["HTML", "CSS", "Next.js", "React.js", "Express.js", "Node.js"],
    summary:
      "We are looking for a developer to help build one of Blummify's platforms using HTML, CSS, Next.js, React.js, Express.js, and Node.js.",
    overview:
      "You will support the build and improvement of a Blummify platform, collaborating with our team to deliver clean, reliable features across frontend and backend.",
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
      "Monthly stipend support",
      "Hands-on mentorship and practical experience",
      "Opportunity to contribute to a live platform",
    ],
  },
];

export function getCareerRoleBySlug(slug: string) {
  return careerRoles.find((role) => role.slug === slug);
}
