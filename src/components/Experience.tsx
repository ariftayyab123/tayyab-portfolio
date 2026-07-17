"use client";

import { motion } from "motion/react";
import { positions } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#FAF7F0]">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A0A0A] mb-16"
        >
          Professional <span className="highlight">Experience</span>
        </motion.h2>

        <div className="space-y-12">
          {positions.map((pos, index) => (
            <motion.div
              key={`${pos.company}-${pos.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-brutal p-8 md:p-10 bg-white"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#0A0A0A]">{pos.role}</h3>
                  <p className="text-lg font-semibold text-[#0A0A0A]/60 mt-1">{pos.company}</p>
                </div>
                <span className="inline-block text-xs uppercase tracking-widest text-[#0A0A0A]/40 font-bold md:mt-2">
                  {pos.period}
                </span>
              </div>

              <p className="text-[#0A0A0A]/85 font-medium text-base mb-6 border-l-4 border-[#FFD700] pl-4">
                {pos.summary}
              </p>

              <ul className="space-y-3 mb-8">
                {pos.achievements.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#0A0A0A]/70 text-[15px] font-medium leading-relaxed">
                    <span className="text-[#FFD700] text-lg select-none leading-none mt-[2px]">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2 border-t-2 border-[#0A0A0A]/10">
                {pos.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold px-3 py-1 bg-[#FAF7F0] text-[#0A0A0A] border border-[#0A0A0A]/20 rounded-full"
                  >
                    {t}
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
