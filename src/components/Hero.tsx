"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const skills = [
  "React", "Spring Boot", "TypeScript", "Next.js", "Microservices",
  "Hexagonal Architecture", "Node.js", "PostgreSQL", "REST APIs",
  "Docker", "Supabase", "Test-Driven Development", "AI-Augmented Dev",
  "Production Systems", "Python", "Vercel",
];

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-between pt-28 pb-0">
      <div className="section-container w-full flex-1 flex items-center">
        <div className="w-full">
          {/* Main heading — left-aligned, editorial */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2rem,5vw,4.25rem)] font-bold leading-[1.08] tracking-tight text-[#0A0A0A] max-w-3xl mt-12"
          >
            I build <span className="highlight">production systems</span> that businesses actually rely on.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-[#0A0A0A]/70 max-w-xl text-base md:text-lg leading-relaxed font-medium"
          >
            Full-stack developer focused on turning business ideas into reliable, production-ready software. I build clean interfaces, scalable backend systems, and practical workflows that solve real operational problems.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <a
              href="#projects"
              className="btn-primary group"
            >
              View my work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Skills Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative w-full overflow-hidden py-6 border-t border-[#E5E7EB]"
      >
        <div className="flex items-center animate-marquee" style={{ width: "max-content" }}>
          {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
            <span key={`${skill}-${i}`} className="flex items-center shrink-0 text-[15px] text-[#111827]/60 font-[450] whitespace-nowrap">
              {skill}
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#111827]/20 mx-5 shrink-0" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
