export interface TechCategory {
  name: string;
  color: string;
  dotColor: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  {
    name: "Frontend",
    color: "#2563EB",
    dotColor: "bg-[#2563EB]",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    name: "Backend",
    color: "#F59E0B",
    dotColor: "bg-[#F59E0B]",
    items: ["Node.js", "Express", "REST APIs", "Python", "PHP"],
  },
  {
    name: "Database",
    color: "#10B981",
    dotColor: "bg-[#10B981]",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    name: "Tools & Deploy",
    color: "#8B5CF6",
    dotColor: "bg-[#8B5CF6]",
    items: ["Git", "Docker", "Vercel", "AWS", "Linux"],
  },
];
