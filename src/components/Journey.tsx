"use client";

import { motion } from "motion/react";

const milestones = [
  {
    year: "2023",
    title: "The Beginning",
    description: "Started diving deep into web development and full-stack engineering, learning the foundational technologies and architectural patterns.",
  },
  {
    year: "2024",
    title: "Graduation & Full-Time Role",
    description: "Graduated and started working full-time as a Junior Software Developer, applying my knowledge to real-world software problems.",
  },
  {
    year: "2025",
    title: "Client Projects",
    description: "Began taking on independent client work, focusing on delivering end-to-end solutions that solve genuine business problems.",
  },
  {
    year: "Present",
    title: "Production Systems",
    description: "Successfully shipped production-grade projects for multiple clients, focusing on best practices, robust architectures, and client satisfaction.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-20 md:py-28">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold tracking-tight text-[#111827] mb-14"
        >
          Journey
        </motion.h2>

        {/* Simple vertical list — no alternating sides, no colored badges */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#E5E7EB]" />

          <div className="space-y-10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative pl-8"
              >
                {/* Dot */}
                <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-[3px] border-[#111827]/20 bg-[#FAF7F0]" />

                <div className="flex items-baseline gap-4 mb-1">
                  <span className="text-xs uppercase tracking-widest text-[#111827]/35 font-semibold shrink-0">
                    {milestone.year}
                  </span>
                  <h3 className="text-base font-semibold text-[#111827]">
                    {milestone.title}
                  </h3>
                </div>
                <p className="text-[#111827]/50 text-sm leading-relaxed font-[450] max-w-lg">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
