import { Github, Linkedin, Mail, Twitter, Home, User, Briefcase, Layout, Layers, Server, Smartphone, Grid } from "lucide-react";

export const SITE_CONFIG = {
  name: "Mokwa",
  title: "Full Stack Developer",
  description: "I build accessible, pixel-perfect, performant, and responsive web experiences.",
  url: "https://mokwa.dev",
  socials: {
    github: "https://github.com/mokwathedeveloper",
    linkedin: "https://www.linkedin.com/in/mokwa-dev/",
    twitter: "https://twitter.com",
    email: "mailto:mokwamoffatohuru@gmail.com",
  },
};

export const NAV_ICONS: Record<string, any> = {
  Home: Home,
  About: User,
  Projects: Briefcase,
  Contact: Mail,
};

export const CATEGORY_ICONS: Record<string, any> = {
  All: Grid,
  "Full Stack": Layout,
  "Web App": Layers,
  "AI/ML": Server,
  Mobile: Smartphone,
};

export const CONTENT = {
  hero: {
    status: "Available for work",
    title: {
      first: "Building digital",
      highlight: "experiences",
      last: "that matter.",
    },
    cta: {
      primary: "View Projects",
      secondary: "Contact Me",
    },
  },
  about: {
    title: "About Me",
    subtitle: "A glimpse into my professional journey, skills, and background.",
    background: {
      title: "Background",
      text1: "I'm a passionate developer who loves building things for the web. With a strong foundation in modern technologies, I strive to create applications that are not only functional but also provide a great user experience.",
      text2: "When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee.",
    },
    skillsTitle: "Technical Skills",
    experienceTitle: "Experience",
  },
  projects: {
    title: "Featured Projects",
    subtitle: "A selection of projects that showcase my passion for building scalable and user-centric applications.",
    tagline: "My Portfolio",
  },
  contact: {
    title: "Let's work together",
    subtitle: "I'm currently looking for new opportunities. Whether you have a project in mind, a question, or just want to say hi, I'll try my best to get back to you!",
    formTitle: "Send a message",
    formSubtitle: "Fill out the form below and I'll get back to you as soon as possible.",
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
    title: "Vanguard E-Commerce",
    description: "A high-performance headless commerce engine built with Next.js 15 and Stripe. Features real-time inventory sync, automated tax calculation, and a custom-built analytics dashboard.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    category: "Full Stack",
    link: "https://github.com/mokwathedeveloper",
    github: "https://github.com/mokwathedeveloper",
    image: "/images/project-1.webp",
  },
  {
    id: 2,
    title: "Zenith Task Engine",
    description: "Enterprise-grade project management tool with collaborative real-time workspaces. Implemented using Socket.io for live updates and a robust RBAC system for secure team management.",
    tags: ["React", "Node.js", "Socket.io", "Redis", "Prisma"],
    category: "Web App",
    link: "https://github.com/mokwathedeveloper",
    github: "https://github.com/mokwathedeveloper",
    image: "/images/project-2.webp",
  },
  {
    id: 3,
    title: "Neural Vision AI",
    description: "An AI-powered image analysis platform that leverages custom-trained models to detect anomalies in medical imaging. Integrated with OpenAI for automated diagnostic reporting.",
    tags: ["Python", "FastAPI", "TensorFlow", "React", "OpenAI"],
    category: "AI/ML",
    link: "https://github.com/mokwathedeveloper",
    github: "https://github.com/mokwathedeveloper",
    image: "/images/project-3.webp",
  },
  {
    id: 4,
    title: "Quantum Finance",
    description: "Decentralized finance dashboard for tracking cross-chain assets. Features advanced data visualization with D3.js and automated portfolio rebalancing suggestions.",
    tags: ["Next.js", "Ether.js", "D3.js", "Solidity", "GraphQL"],
    category: "Mobile",
    link: "https://github.com/mokwathedeveloper",
    github: "https://github.com/mokwathedeveloper",
    image: "/images/project-4.webp",
  },
];

export const EXPERIENCES = [
  {
    company: "Global Tech Systems",
    role: "Senior Software Engineer",
    period: "2023 - Present",
    description: "Architecting scalable microservices using Node.js and AWS. Reduced system latency by 35% through database optimization and caching strategies. Mentoring a team of 5 developers.",
  },
  {
    company: "Innovate AI",
    role: "Full Stack Developer",
    period: "2021 - 2023",
    description: "Engineered and deployed an AI-driven marketing platform. Integrated complex machine learning models into user-friendly React interfaces, resulting in a 25% increase in user engagement.",
  },
  {
    company: "Creative Solutions Lab",
    role: "Junior Web Developer",
    period: "2019 - 2021",
    description: "Developed responsive frontend components for diverse client projects. Gained deep expertise in React, TypeScript, and modern CSS frameworks while delivering pixel-perfect designs.",
  },
];
