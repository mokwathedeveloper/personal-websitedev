import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const SITE_CONFIG = {
  name: "Your Name",
  title: "Full Stack Developer",
  description: "I build accessible, pixel-perfect, performant, and responsive web experiences.",
  url: "https://yourwebsite.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:hello@example.com",
  },
};

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "AWS",
  "Git",
];

export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for managing online stores, featuring real-time analytics and inventory management.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    category: "Full Stack",
    link: "#",
    github: "#",
    image: "/placeholder-1.jpg", // You would replace these with real images
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool with drag-and-drop functionality and team workspaces.",
    tags: ["React", "Redux", "Node.js", "Socket.io"],
    category: "Web App",
    link: "#",
    github: "#",
    image: "/placeholder-2.jpg",
  },
  {
    id: 3,
    title: "AI Image Generator",
    description: "An application that uses generative AI to create unique images based on user prompts.",
    tags: ["Python", "FastAPI", "React", "OpenAI API"],
    category: "AI/ML",
    link: "#",
    github: "#",
    image: "/placeholder-3.jpg",
  },
  {
    id: 4,
    title: "Finance Tracker",
    description: "Mobile-first application to track personal expenses and visualize spending habits.",
    tags: ["React Native", "Firebase", "Victory Charts"],
    category: "Mobile",
    link: "#",
    github: "#",
    image: "/placeholder-4.jpg",
  },
];

export const EXPERIENCES = [
  {
    company: "Tech Corp Inc.",
    role: "Senior Frontend Developer",
    period: "2023 - Present",
    description: "Leading the frontend team in migrating legacy codebase to Next.js. Improved performance by 40%.",
  },
  {
    company: "StartupX",
    role: "Full Stack Developer",
    period: "2021 - 2023",
    description: "Built and launched the MVP for a fintech product. Scaled to 10k users in 6 months.",
  },
];
