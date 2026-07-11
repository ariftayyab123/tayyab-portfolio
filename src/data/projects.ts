export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  tech: string[];
  image: string;
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "capacity",
    title: "Capacity Survey Programming Tool",
    description:
      "A full-stack survey programming platform built for creating complex research surveys. It supports conditional branching, looping, validations, and 70+ question types through a visual and code-based logic interface. The frontend is built with TypeScript, while the backend uses Spring Boot microservices, MySQL, Redis, Resilience4j, Docker, and Kubernetes.",
    problem:
      "Off-the-shelf tools can't express real market-research logic. Needed a way to render unlimited, arbitrary surveys with complex conditional logic, loops, and auto-filled answers without redeploying code.",
    tech: ["TypeScript", "Spring Boot", "MySQL", "Resilience4j", "Redis", "Docker", "Kubernetes"],
    image: "/images/mockup-survey.png",
    highlights: [
      "Custom logic DSL & parser",
      "Spring Boot microservices",
      "Resilience4j & Redis",
      "Kubernetes deployment",
    ],
    liveUrl: "https://beta.the-capacity.com/",
  },
  {
    id: "qc-print-agent",
    title: "Print Agent — Warehouse Label System",
    description:
      "An on-premise Python print service built for warehouse workstations. It polls a centralized print queue, retrieves label jobs, and forwards ZPL commands to local thermal printers over raw TCP. The agent includes network-resilient job handling, secure credential storage through the OS keychain, and a zero-touch installer for easy workstation setup.",
    problem:
      "Needed to bridge a secure cloud platform (Supabase) with on-premise Zebra printers on isolated networks, without exposing database credentials or using VPNs.",
    tech: ["Python", "TCP Sockets", "Supabase Edge Functions", "PyInstaller"],
    image: "/images/mockup-print.png",
    highlights: [
      "Parallel multi-printer support",
      "Self-healing network recovery",
      "OS keychain security",
      "Scaled throughput 3x",
    ],
    githubUrl: "https://github.com/ariftayyab123/qc-app",
  },
  {
    id: "bmj-warehouse",
    title: "BMJ Warehouse Labelling System",
    description:
      "A full-stack warehouse Quality Check and labelling system designed to manage barcode scanning, box verification, and industrial label printing workflows. It includes role-based access control, real-time scan handling, SKU validation, and a visual label template editor with ZPL code generation for thermal printers.",
    problem:
      "Manual warehouse QC processes were slow and error-prone. Required a system for anomaly detection, checklists, and dynamic label generation directly from the browser.",
    tech: ["React 18", "TypeScript", "Supabase", "Deno Edge Functions", "Zustand/Query"],
    image: "/images/mockup-warehouse.png",
    highlights: [
      "Serverless architecture (Deno)",
      "Visual ZPL label editor",
      "GS1 barcode normalization",
      "Multi-tenant device identity",
    ],
    liveUrl: "http://192.168.18.92:8081/",
  },
  {
    id: "envway",
    title: "Envway Technologies Website",
    description:
      "Built a multi-page corporate website from scratch for a solar energy and water treatment solutions company. Features 10+ dynamic routes, a custom theming architecture, and highly optimized performance.",
    problem:
      "The business needed a professional, high-performance web presence to showcase a complex catalog of 20+ service offerings and their project portfolio.",
    tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "React Router v7"],
    image: "/images/mockup-envway.png",
    highlights: [
      "Lazy-loaded routing",
      "Custom design system",
      "Optimized images (18MB to 47KB)",
      "Formspree integration",
    ],
    liveUrl: "https://www.envwaytechnologies.in/",
    githubUrl: "https://github.com/ariftayyab123/WaterManagementPublishingWebsite",
  },
];
