export interface Position {
  company: string;
  role: string;
  period: string;
  summary: string;
  achievements: string[];
  tech: string[];
}

export const positions: Position[] = [
  {
    company: "Internet Research Bureau",
    role: "Junior Software Engineer",
    period: "Sep 2024 - Present",
    summary: "Building survey platforms and internal tools using React, Next.js, and Spring Boot.",
    achievements: [
      "Built the frontend for a survey authoring tool where researchers can write custom survey logic and scripts.",
      "Implemented real-time drop-off tracking to identify which questions cause users to abandon surveys.",
      "Integrated Spring Boot backend services with PostgreSQL and Redis for secure data storage."
    ],
    tech: ["Next.js", "React", "Spring Boot", "TypeScript", "PostgreSQL", "Redis"]
  },
  {
    company: "Internet Research Bureau",
    role: "Software Development Trainee",
    period: "Feb 2024 - Sep 2024",
    summary: "Worked on frontend features and API integrations for the core survey engine.",
    achievements: [
      "Migrated legacy UI components to React and improved keyboard accessibility.",
      "Wrote and consumed REST APIs to handle survey respondent data.",
      "Participated in weekly code reviews and sprint planning."
    ],
    tech: ["React", "JavaScript", "HTML/CSS", "Java"]
  },
  {
    company: "Warehouse & Logistics Client",
    role: "Independent Consultant",
    period: "Jan 2026 - Present",
    summary: "Built a custom labelling system and verification workflow for a physical warehouse.",
    achievements: [
      "Built workstation-specific box assignment rules to prevent two warehouse operators from opening the same active box.",
      "Wrote a Python print agent that connects a cloud database to local thermal Zebra printers via raw TCP sockets.",
      "Created a scanning interface to verify SKUs against database records before packing."
    ],
    tech: ["React", "TypeScript", "Python", "Supabase", "PostgreSQL", "ZPL"]
  }
];
