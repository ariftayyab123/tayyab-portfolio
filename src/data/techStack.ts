export interface TechCategory {
  name: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  {
    name: "Core Technologies",
    items: ["React", "Next.js", "TypeScript", "Java", "Spring Boot", "PostgreSQL"],
  },
  {
    name: "Systems & Architecture",
    items: ["Microservices", "REST APIs", "WebSockets", "Hexagonal Architecture", "Supabase", "Redis"],
  },
  {
    name: "Delivery & Quality",
    items: ["Docker", "AWS", "Vercel", "Git", "JaCoCo", "Vitest"],
  },
];
