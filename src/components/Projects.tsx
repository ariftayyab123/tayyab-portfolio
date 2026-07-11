"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-white">
      <div className="section-container">
        {/* Left-aligned header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A0A0A] mb-16"
        >
          Selected <span className="highlight">work</span>
        </motion.h2>

        {/* Project list — staggered editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          {projects.map((project, index) => {
            // Create a staggered effect: even items are pushed down on desktop
            const isEven = index % 2 !== 0;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`group ${isEven ? "md:mt-32" : ""}`}
              >
                {/* Image */}
                <a
                  href={project.liveUrl || project.githubUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative card-brutal overflow-hidden p-6 bg-[#FDFBF7]"
                >
                  <div className="relative w-full rounded-lg overflow-hidden border-2 border-[#0A0A0A]" style={{ aspectRatio: "16/9" }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Arrow icon on hover */}
                  <div className="absolute top-8 right-8 w-11 h-11 rounded-full bg-[#FFD700] border-2 border-[#0A0A0A] text-[#0A0A0A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[2px_2px_0_0_#0A0A0A]">
                    <ArrowUpRight className="w-6 h-6 stroke-[3px]" />
                  </div>

                  {/* Tech tags overlaid at bottom */}
                  <div className="absolute left-4 right-4 bottom-4 flex flex-wrap gap-2 justify-end">
                    {project.tech.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] tracking-widest uppercase rounded-full px-3 py-1.5 backdrop-blur-md bg-white/80 text-[#111827] border border-white/50 font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>

                {/* Text below image */}
                <div className="mt-6 flex flex-col items-start gap-3">
                  <div className="w-full flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-[#111827] tracking-tight">
                      {project.title}
                    </h3>
                    <a
                      href={project.liveUrl || project.githubUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-sm font-medium text-[#111827]/60 hover:text-[#111827] transition-colors mt-1"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-[#111827]/60 text-[15px] leading-relaxed font-[450]">
                    {project.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
