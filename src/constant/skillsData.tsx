import React from "react";

import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLaptopCode,
  FaMobile,
  FaReact,
  FaDocker,
  FaAws,
} from "react-icons/fa6";

import {
  SiExpress,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiVercel,
  SiFramer,
} from "react-icons/si";

import { MdApi, MdSecurity } from "react-icons/md";
import { TbDatabase } from "react-icons/tb";
import { RiExchangeLine } from "react-icons/ri";
import { RiExchangeFill } from "react-icons/ri";

interface LogoProps {
  title: string;
  logoComponent: React.FC;
  color?: string;
}

interface SkillsDataProps {
  title: string;
  data: LogoProps[];
}

export const skillsData: SkillsDataProps[] = [
  {
    title: "Frontend",
    data: [
      { title: "React", logoComponent: FaReact, color: "#61DAFB" },
      { title: "Next.js", logoComponent: SiNextdotjs, color: "#d4d4d8" },
      { title: "TypeScript", logoComponent: SiTypescript, color: "#3178C6" },
      { title: "HTML5", logoComponent: FaHtml5, color: "#E34F26" },
      { title: "CSS3", logoComponent: FaCss3, color: "#1572B6" },
      { title: "Tailwind CSS", logoComponent: SiTailwindcss, color: "#06B6D4" },
      { title: "Framer Motion", logoComponent: SiFramer, color: "#0055FF" },
    ],
  },
  {
    title: "Backend & Databases",
    data: [
      { title: "Node.js", logoComponent: SiNodedotjs, color: "#339933" },
      { title: "Express.js", logoComponent: SiExpress, color: "#d4d4d8" },
      { title: "PostgreSQL", logoComponent: SiPostgresql, color: "#336791" },
      { title: "Redis", logoComponent: SiRedis, color: "#DC382D" },
      { title: "Prisma", logoComponent: SiPrisma, color: "#2D3748" },
      { title: "Java", logoComponent: FaJava, color: "#007396" },
      { title: "REST APIs", logoComponent: MdApi, color: "#5C2D91" },
    ],
  },
  {
    title: "Real-time & System Design",
    data: [
      { title: "WebSockets", logoComponent: RiExchangeLine, color: "#FF6B6B" },
      { title: "Server-Sent Events", logoComponent: RiExchangeFill, color: "#4ECDC4" },
      { title: "Caching", logoComponent: TbDatabase, color: "#FFD93D" },
      { title: "RBAC", logoComponent: MdSecurity, color: "#6BCB77" },
      { title: "Performance", logoComponent: FaLaptopCode, color: "#FF6B9D" },
    ],
  },
  {
    title: "DevOps & Tools",
    data: [
      { title: "Git", logoComponent: FaGitAlt, color: "#F05032" },
      { title: "GitHub", logoComponent: FaGithub, color: "#d4d4d8" },
      { title: "Docker", logoComponent: FaDocker, color: "#2496ED" },
      { title: "AWS", logoComponent: FaAws, color: "#FF9900" },
      { title: "Vercel", logoComponent: SiVercel, color: "#d4d4d8" },
      { title: "CI/CD", logoComponent: FaLaptopCode, color: "#0A66C2" },
    ],
  },
];
