"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Deep dive into requirements, business logic, and user needs before writing any code.",
  },
  {
    number: "02",
    title: "Design",
    description: "Plan architecture, design interfaces, and map data flows for clarity.",
  },
  {
    number: "03",
    title: "Build",
    description: "Write clean, modular code with proper structure, tests, and documentation.",
  },
  {
    number: "04",
    title: "Ship",
    description: "Thorough testing, optimization, and deployment with monitoring setup.",
  },
];

export default function WorkProcess() {
  return (
    <section id="process" className="py-20 md:py-28 bg-white">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold tracking-tight text-[#111827] mb-14"
        >
          How I work
        </motion.h2>

        {/* Horizontal steps on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Step number */}
              <span className="text-[#111827]/10 text-5xl font-bold select-none block mb-3">
                {step.number}
              </span>

              {/* Connecting line (desktop only, between steps) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(100%+2px)] w-[calc(100%-20px)] h-px bg-[#E5E7EB]" />
              )}

              <h3 className="text-base font-semibold text-[#111827] mb-2">
                {step.title}
              </h3>
              <p className="text-[#111827]/50 text-sm leading-relaxed font-[450]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
