"use client";

import { motion } from "motion/react";
import { Monitor, Server, Layers } from "lucide-react";

const capabilities = [
  {
    icon: Monitor,
    title: "Frontend Systems",
    description:
      "Responsive interfaces and complex business applications using React, Next.js, and TypeScript, with a focus on performance, accessibility, and maintainable component architecture.",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description:
      "Secure APIs and production services using Java and Spring Boot, supported by clean architecture, database design, testing, caching, and reliable integrations.",
  },
  {
    icon: Layers,
    title: "Operational Integrations",
    description:
      "End-to-end tools connecting software with warehouse workflows, barcode scanners, print queues, industrial printers, local networks, and external business systems.",
  },
];

export default function CoreCapabilities() {
  return (
    <section id="capabilities" className="py-20 md:py-28 bg-white">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A0A0A] mb-4">
            Core <span className="highlight">Capabilities</span>
          </h2>
          <p className="mt-4 text-[#0A0A0A]/60 text-base leading-relaxed font-medium md:text-lg">
            Engineering software solutions across the stack with a focus on clean systems, reliability, and business impact.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-brutal p-8 bg-[#FDFBF7]"
              >
                <div className="w-12 h-12 rounded-full bg-[#FFD700] border-2 border-[#0A0A0A] flex items-center justify-center mb-6 shadow-[2px_2px_0_0_#0A0A0A]">
                  <Icon className="w-5 h-5 text-[#0A0A0A] stroke-[2.5px]" />
                </div>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">
                  {cap.title}
                </h3>
                <p className="text-[#0A0A0A]/75 text-sm leading-relaxed font-medium">
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
