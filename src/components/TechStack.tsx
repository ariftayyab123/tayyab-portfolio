"use client";

import { motion } from "motion/react";
import { techStack } from "../data/techStack";

export default function TechStack() {
  return (
    <section id="stack" className="py-20 md:py-28 bg-[#FAF7F0]">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-xl"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A0A0A] mb-4">
            Technology <span className="highlight">Stack</span>
          </h2>
          <p className="mt-4 text-[#0A0A0A]/60 font-medium text-sm md:text-base">
            A curated set of technologies verified by real-world system deployments.
          </p>
        </motion.div>

        {/* Compact Rows */}
        <div className="card-brutal p-8 md:p-10 bg-white space-y-8">
          {techStack.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-baseline pb-6 last:pb-0 border-b border-[#0A0A0A]/10 last:border-b-0"
            >
              {/* Category Label */}
              <div className="lg:col-span-3">
                <h3 className="text-xs uppercase tracking-widest text-[#0A0A0A]/40 font-extrabold">
                  {category.name}
                </h3>
              </div>

              {/* Items List */}
              <div className="lg:col-span-9 flex flex-wrap gap-2.5">
                {category.items.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block text-xs font-semibold px-3.5 py-1.5 bg-[#FAF7F0] border-2 border-[#0A0A0A]/10 rounded-lg hover:border-[#0A0A0A] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
