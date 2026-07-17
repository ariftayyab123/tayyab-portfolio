export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  contributions: string[];
  techLabels: string[];
  image: string; // Featured image
  screenshots: string[]; // Slideshow / Gallery screenshots
  liveUrl?: string;
  githubUrl?: string;
  confidential?: boolean;
  type: "case-study" | "client-project";
  flowSteps?: { step: string; description: string }[];
  label?: string; // e.g. "Company Project - Internet Research Bureau"
}

export const projects: Project[] = [
  {
    id: "capacity",
    title: "Capacity Survey Programming Platform",
    label: "Company Project - Internet Research Bureau",
    shortDescription: "Contributed to a survey-authoring platform used to configure complex research surveys, conditional logic, scripting, and respondent workflows.",
    contributions: [
      "Built and maintained survey-authoring interfaces using React and Next.js",
      "Developed workflows for question configuration, validation, and branching",
      "Integrated frontend modules with Spring Boot APIs",
      "Built dashboard views for monitoring survey completion and drop-offs"
    ],
    techLabels: ["Next.js", "React", "TypeScript", "Spring Boot", "MySQL", "Redis"],
    image: "/images/capacity-listing.png",
    screenshots: [
      "/images/capacity-listing.png",
      "/images/capacity-authoring.png",
      "/images/capacity-scripting.png",
      "/images/capacity-stats.png",
      "/images/capacity-incompletes.png",
      "/images/capacity-respondent.png"
    ],
    liveUrl: "https://beta.the-capacity.com/",
    confidential: true,
    type: "case-study",
    flowSteps: [
      { step: "Survey Authoring", description: "Visual and code-based interfaces for defining survey content and custom DSL variables." },
      { step: "Custom Scripting", description: "Providing secure environments for running custom scripts directly inside the authoring workflow." },
      { step: "Conditional Logic", description: "Applying conditional branching, looping, and Skip logic rules based on previous responses." },
      { step: "Real-time Stats", description: "Tracking real-time survey statistics, showing drop-offs and incomplete metrics question by question." },
      { step: "Runtime Rendering", description: "Rendering the survey to respondents with optimized performance and zero layout shifts." },
      { step: "Data Storage", description: "Persisting responses using Spring Boot microservices into MySQL, with Redis caching." }
    ]
  },
  {
    id: "warehouse-ops",
    title: "Warehouse Operations and Labelling System",
    label: "Independent Client Project - Warehouse and Logistics",
    shortDescription: "Built operational workflows for scanning items, validating SKUs, managing boxes, and printing ZPL labels in a physical warehouse.",
    contributions: [
      "Created barcode-based shipment verification workflows",
      "Implemented workstation-specific box assignment rules",
      "Generated configurable ZPL labels from the web application",
      "Integrated local printing and warehouse event workflows"
    ],
    techLabels: ["React", "TypeScript", "Supabase", "PostgreSQL", "ZPL", "WebSockets"],
    image: "/images/warehouse-listing.png",
    screenshots: [
      "/images/warehouse-listing.png",
      "/images/warehouse-detail.png",
      "/images/warehouse-edit.png",
      "/images/warehouse-printers.png",
      "/images/warehouse-station.png"
    ],
    confidential: true,
    type: "case-study",
    flowSteps: [
      { step: "Barcode Scan", description: "Operator scans items at the workstation using barcode readers connected to the web interface." },
      { step: "SKU Verification", description: "Server-side verification of SKU and category validity against database records." },
      { step: "Box Assignment", description: "Associating verified items with active operational boxes/shipments." },
      { step: "Quality Control", description: "Flagging anomalies (shortages, damages) and logging them into the database." },
      { step: "Label Generation", description: "Rendering custom ZPL codes based on verified invoice and item specifications." },
      { step: "Print Queue", description: "Pushing the print job to a centralized queue in Supabase for hardware execution." },
      { step: "Thermal Printer", description: "Delivered to local Zebra printers over raw TCP via the Print Agent." }
    ]
  },
  {
    id: "print-agent",
    title: "Print Agent — Warehouse Label System",
    shortDescription: "A Python service that runs on warehouse computers to pull cloud print jobs and send them to local thermal printers.",
    contributions: [
      "Built raw TCP communication scripts to send ZPL code to local Zebra printers",
      "Wrote polling logic to fetch pending print jobs from a Supabase database",
      "Stored database credentials locally using the operating-system keychain",
      "Created a web-based pairing interface to register workstations without manual configuration"
    ],
    techLabels: ["Python", "TCP Sockets", "ZPL", "Supabase Edge Functions"],
    image: "/images/print-agent-setup.png",
    screenshots: [
      "/images/print-agent-setup.png",
      "/images/print-agent-pairing.png"
    ],
    githubUrl: "https://github.com/ariftayyab123/qc-app",
    type: "case-study"
  },
  {
    id: "envway",
    title: "Envway Technologies Website",
    shortDescription: "A corporate website for a solar energy and water treatment company built during a short freelance contract.",
    contributions: [
      "Built a multi-page static website using React and Vite",
      "Connected the contact form to Formspree to route emails directly to the founders",
      "Configured the custom domain and deployed the site on Vercel"
    ],
    techLabels: ["React", "TypeScript", "Vite", "Vercel", "Formspree"],
    image: "/images/mockup-envway.png",
    screenshots: ["/images/mockup-envway.png"],
    liveUrl: "https://www.envwaytechnologies.in/",
    githubUrl: "https://github.com/ariftayyab123/WaterManagementPublishingWebsite",
    type: "client-project"
  }
];
