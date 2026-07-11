"use client";

import { motion } from "motion/react";

const stack = {
  "Frontend": ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  "Backend": ["Java", "Spring Boot", "Node.js", "Python"],
  "Architecture & APIs": ["Microservices", "Hexagonal Architecture", "REST APIs", "WebSockets"],
  "Databases & Backend Services": ["PostgreSQL", "MongoDB", "Supabase", "Redis"],
  "Cloud & DevOps": ["Docker", "AWS", "Vercel", "Linux"],
  "Testing & Code Quality": ["JaCoCo", "Vitest", "Unit Testing", "Integration Testing", "Code Coverage"],
  "Tools, Workflow & Practices": ["Git", "GitHub", "Branching", "Pull Requests", "Code Reviews", "Agile Development", "BMAD Method", "AI-Augmented Development"],
};

export default function TechStack() {
  return (
    <section id="stack" className="py-20 md:py-28">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A0A0A] mb-12"
        >
          Tech <span className="highlight">Stack</span>
        </motion.h2>

        {/* Two-column editorial list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {Object.entries(stack).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <h3 className="text-xs uppercase tracking-widest text-[#0A0A0A]/50 font-bold mb-4">
                {category}
              </h3>
              <p className="text-[#0A0A0A]/70 text-base leading-relaxed font-medium md:text-lg mt-2">
                {items.join(" · ")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
