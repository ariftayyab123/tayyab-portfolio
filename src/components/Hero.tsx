"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-between pt-28 pb-12 bg-[#FAF7F0] overflow-hidden">
      <div className="section-container w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="lg:col-span-7 space-y-8">
          {/* Availability Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold text-[#0A0A0A] uppercase tracking-wide mb-2"
          >
            Open for full-time roles & freelance work
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-[#0A0A0A] max-w-2xl"
          >
            I build complex web applications, backend services, and <span className="highlight">production systems</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#0A0A0A]/70 max-w-xl text-base md:text-lg leading-relaxed font-medium"
          >
            Full-stack developer with over 2 years of experience using React, Next.js, TypeScript, Java, and Spring Boot to solve real operational problems.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary">
              View Selected Work
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border-2 border-[#0A0A0A] rounded-xl text-[#0A0A0A] font-semibold text-sm hover:bg-[#0A0A0A] hover:text-white transition-all shadow-[2px_2px_0_0_#0A0A0A] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Download Résumé
            </a>
          </motion.div>

          {/* Static Tech Row */}

        </div>

        {/* Right Column - Browser Mockup Visual (Desktop Only) */}
        <div className="hidden lg:block lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-brutal overflow-hidden bg-white shadow-[8px_8px_0_0_#0A0A0A] rotate-2 hover:rotate-0 transition-transform duration-300"
            style={{ width: "100%" }}
          >
            {/* Browser Header Bar */}
            <div className="bg-[#FAF7F0] border-b-2 border-[#0A0A0A] px-4 py-2.5 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400 border border-[#0A0A0A]/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-[#0A0A0A]/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 border border-[#0A0A0A]/30" />
              </div>
              <div className="bg-white border border-[#0A0A0A]/20 rounded px-3 py-0.5 text-[10px] text-[#0A0A0A]/50 font-semibold w-1/2 text-center select-none truncate">
                https://beta.the-capacity.com
              </div>
              <div className="w-8" />
            </div>

            {/* Browser Window Content */}
            <div className="relative aspect-[4/3] w-full bg-[#FAF7F0]">
              <Image
                src="/images/capacity-listing.png"
                alt="Capacity Survey Platform Dashboard"
                fill
                sizes="33vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Floater Proof Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute -bottom-6 -left-6 card-brutal bg-[#FFD700] px-4 py-2.5 shadow-[4px_4px_0_0_#0A0A0A] rotate-[-2deg] max-w-[200px]"
          >
            <span className="text-xs font-black text-[#0A0A0A] leading-tight block">
              Survey Logic Engine (70+ Question Types)
            </span>
          </motion.div>
        </div>
      </div>

      {/* Proof Points Footer */}
      <div className="border-t-2 border-[#0A0A0A] bg-white py-6 mt-12">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="space-y-1">
              <span className="text-xl font-black text-[#0A0A0A]">2+ years</span>
              <p className="text-xs uppercase tracking-wider text-[#0A0A0A]/60 font-bold">Professional software development</p>
            </div>
            <div className="space-y-1 border-t md:border-t-0 md:border-l border-[#0A0A0A]/10 pt-4 md:pt-0 md:pl-8">
              <span className="text-xl font-black text-[#0A0A0A]">Company systems</span>
              <p className="text-xs uppercase tracking-wider text-[#0A0A0A]/60 font-bold">Survey authoring and runtime workflows</p>
            </div>
            <div className="space-y-1 border-t md:border-t-0 md:border-l border-[#0A0A0A]/10 pt-4 md:pt-0 md:pl-8">
              <span className="text-xl font-black text-[#0A0A0A]">Live operations</span>
              <p className="text-xs uppercase tracking-wider text-[#0A0A0A]/60 font-bold">Warehouse QC and label printing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
