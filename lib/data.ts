import type { Project } from "./types"

export const projects: Project[] = [
  {
    id: 1,
    title: "Next-Gen CyberSafe Website",
    description:
      "Complete redesign and development of a sservice showcase website for the company nextgen cyber cafe",
    image: "/pa1.png",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB"],
    completionDate: "March 2023",
    clientName: "NextGen Cyber Cafe",
    featured: true,
  },
  {
    id: 2,
    title: "NavShristi Website",
    description:
      "Website made for managing user roless, referral sysstem, authentication and task based incentive with an e-commerce store built inside with 20+ features.",
    image: "/pf1.png",
    category: "Software Development",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    completionDate: "January 2025",
    clientName: "NavShristi",
    featured: true,
  },
  {
    id: 3,
    title: "E-Commerce store",
    description:
      "Full-stack e-commerce platform with user authentication, product management, and payment integration.",
    image: "/pb2.png",
    category: "Enterprise Solutions",
    technologies: ["React", "Django", "MySQL"],
    completionDate: "November 2024",
    clientName: "eTrade",
    featured: true,
  },
  {
    id: 4,
    title: "Sd Craness website",
    description:
      "Website made for providing many services and products related to craness",
    image: "/pd1.png",
    category: "Software Development",
    technologies: ["React Native", "Firebase", "GraphQL"],
    completionDate: "October 2023",
    clientName: "SD Cranes",
    featured: false,
  },
  {
    id: 5,
    title: "Educational Learning Platform",
    description:
      "Online learning platform with course management, video streaming, interactive quizzes, and progress tracking.",
    image: "/pg1.png",
    category: "EdTech",
    technologies: ["Vue.js", "Laravel", "AWS"],
    completionDate: "August 2022",
    clientName: "EduSmart Inc.",
    featured: false,
  },
  {
    id: 6,
    title: "Renewable Revolution website",
    description:
      "Website made for providing many services and products related to renewable energy",
    image: "/pc1.png",
    category: "Web Development",
    technologies: ["Next.js", "Strapi", "PostgreSQL"],
    completionDate: "July 2022",
    clientName: "HomeFind Properties",
    featured: false,
  },
]
