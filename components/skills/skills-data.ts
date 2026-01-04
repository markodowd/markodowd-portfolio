export interface Skill {
  name: string;
  icon: string; // simple-icons key or fallback identifier
  category: "Frontend" | "Backend" | "DevOps" | "Tools";
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "siReact", category: "Frontend" },
  { name: "Next.js", icon: "siNextdotjs", category: "Frontend" },
  { name: "JavaScript", icon: "siJavascript", category: "Frontend" },
  { name: "TypeScript", icon: "siTypescript", category: "Frontend" },
  { name: "Tailwind CSS", icon: "siTailwindcss", category: "Frontend" },
  
  // Backend
  { name: "Express", icon: "siExpress", category: "Backend" },
  { name: "Django", icon: "siDjango", category: "Backend" },
  { name: "Python", icon: "siPython", category: "Backend" },
  { name: "PostgreSQL", icon: "siPostgresql", category: "Backend" },
  { name: "SQL", icon: "siSql", category: "Backend" },
  
  // DevOps
  { name: "AWS", icon: "siAmazonaws", category: "DevOps" },
  { name: "Docker", icon: "siDocker", category: "DevOps" },
  
  // Tools
  { name: "Linux", icon: "siLinux", category: "Tools" },
  { name: "Bash", icon: "siGnubash", category: "Tools" },
  { name: "Git", icon: "siGit", category: "Tools" },
  { name: "GitHub", icon: "siGithub", category: "Tools" },
];

export const categories: ("Frontend" | "Backend" | "DevOps" | "Tools")[] = [
  "Frontend",
  "Backend",
  "DevOps",
  "Tools",
];

