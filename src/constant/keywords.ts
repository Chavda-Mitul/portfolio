const names = [
  "Mitul Chavda",
  "Mitul Chavda Portfolio",
  "Mitul Chavda Full Stack",
  "Mitul Chavda Charusat",
  "Mitul Chavda Ahmedabad",
];

const roles = [
  "Full-Stack Software Engineer",
  "React Developer",
  "Next.js Developer",
  "TypeScript Developer",
  "Node.js Developer",
  "Backend Developer",
  "System Designer",
  "Real-Time Systems Expert",
  "Software Engineer",
  "Web Developer",
];

const skills = [
  // Frontend
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Material UI",
  
  // State & Data
  "Redux",
  "Zustand",
  "TanStack Query",
  "React Query",
  
  // Backend
  "Node.js",
  "Express.js",
  "REST APIs",
  "Java",
  "Spring Boot",
  
  // Databases
  "PostgreSQL",
  "Redis",
  "Prisma",
  "SQL",
  
  // Real-time
  "WebSockets",
  "Server-Sent Events",
  "SSE",
  
  // System Design
  "Caching",
  "Pagination",
  "RBAC",
  "Idempotency",
  "Rate Limiting",
  "JWT",
  "Authentication",
  
  // DevOps & Tools
  "Git",
  "Docker",
  "AWS",
  "CI/CD",
  "Vercel",
  "Netlify",
  
  // Mobile
  "React Native",
  "Offline Caching",
  "Background Sync",
];

const projects = [
  "FlashCommerce",
  "Sentinel",
  "PulseBoard",
  "OfflineSync",
  "High-Traffic Sale System",
  "Multi-Tenant SaaS",
  "Real-Time Dashboard",
  "Offline-First Mobile App",
];

const locations = [
  "India",
  "Ahmedabad",
  "Gujarat",
  "Remote",
  "Worldwide",
  "Bangalore",
  "Hyderabad",
  "Pune",
  "Mumbai",
];

const achievements = [
  "CodeChef Global Rank 468",
  "Google Kickstart Rank 3891",
  "CodeChef College Chapter Lead",
  "Competitive Programming",
];

const longTail = [
  "Hire Full-Stack Developer in India",
  "Best Full Stack Developer Portfolio",
  "React Developer for startup",
  "Software Engineer opportunities",
  "Next.js Portfolio",
  "Real-time Systems Developer",
  "Full-Stack Developer with system design",
  "Freelance Web Developer India",
  "Open to Remote Work",
  "Performance Optimization Expert",
];

export const Keywords = [
  ...names,
  ...roles,
  ...skills,
  ...projects,
  ...locations,
  ...achievements,
  ...longTail,

  ...roles.flatMap((role) => locations.map((loc) => `${role} in ${loc}`)),
  ...skills.map((skill) => `${skill} Developer`),
  ...skills.map((skill) => `${skill} Expert`),
  ...skills.map((skill) => `Hire ${skill} Developer`),
];
