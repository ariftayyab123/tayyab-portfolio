"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ArrowRight, ShieldAlert, Code2, ChevronRight } from "lucide-react";
import { projects } from "../data/projects";
import ImageSlider from "./ImageSlider";

export default function Projects() {
  const caseStudies = projects.filter((p) => p.type === "case-study");
  const otherProjects = projects.filter((p) => p.type === "client-project");
  
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = caseStudies[activeIndex];

  return (
    <section id="projects" className="py-20 md:py-28 bg-white relative">
      <div className="section-container">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A0A0A]"
          >
            Selected <span className="highlight">Work</span>
          </motion.h2>
          <p className="mt-4 text-[#0A0A0A]/60 font-medium text-base md:text-lg max-w-xl">
            Real systems built for real operations. Explore deep technical case studies.
          </p>
        </div>

        {/* Fashionable Interactive Layout for Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">
          
          {/* Left Column: Interactive Accordion List */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {caseStudies.map((project, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={project.id}
                  className={`flex flex-col rounded-xl transition-all duration-300 border-2 overflow-hidden ${
                    isActive
                      ? "bg-[#FAF7F0] border-[#0A0A0A] shadow-[4px_4px_0_0_#0A0A0A]"
                      : "bg-white border-transparent hover:border-[#0A0A0A]/20 hover:bg-[#FAF7F0]/50"
                  }`}
                >
                  {/* Accordion Header (Clickable) */}
                  <button
                    onClick={() => setActiveIndex(idx)}
                    className="text-left p-6 w-full flex flex-col gap-1"
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className={`text-xs uppercase tracking-widest font-bold ${isActive ? "text-[#0A0A0A]/60" : "text-[#0A0A0A]/40"}`}>
                        {project.label || "Case Study"}
                      </span>
                      <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? "rotate-90 text-[#0A0A0A]" : "text-[#0A0A0A]/40"}`} />
                    </div>
                    <h3 className={`text-xl font-black tracking-tight mb-1 ${isActive ? "text-[#0A0A0A]" : "text-[#0A0A0A]/70"}`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm font-semibold line-clamp-2 ${isActive ? "text-[#0A0A0A]/80" : "text-[#0A0A0A]/50"}`}>
                      {project.shortDescription}
                    </p>
                  </button>

                  {/* Accordion Body (Details & Visual for Mobile) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        {/* Visual for Mobile (Hidden on Desktop) */}
                        <div className="lg:hidden mb-8 mt-2 w-full border-4 border-[#0A0A0A] bg-white rounded-xl shadow-[6px_6px_0_0_#FFD700] overflow-hidden flex flex-col">
                          {/* Browser Top Bar */}
                          <div className="bg-[#FAF7F0] border-b-4 border-[#0A0A0A] p-2.5 flex items-center justify-between">
                            <div className="flex gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full border-2 border-[#0A0A0A] bg-[#FF5F56]" />
                              <div className="w-2.5 h-2.5 rounded-full border-2 border-[#0A0A0A] bg-[#FFBD2E]" />
                              <div className="w-2.5 h-2.5 rounded-full border-2 border-[#0A0A0A] bg-[#27C93F]" />
                            </div>
                          </div>
                          <div className="bg-white">
                            <ImageSlider
                              images={project.screenshots && project.screenshots.length > 0 ? project.screenshots : [project.image]}
                              title={project.title}
                              aspectRatio="16/10"
                            />
                          </div>
                        </div>

                        <div className="space-y-5 pt-4 border-t border-[#0A0A0A]/10">
                          {project.confidential && (
                            <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-amber-50 border border-amber-600/30 text-amber-800 text-[10px] font-extrabold uppercase tracking-wide">
                              <ShieldAlert className="w-3.5 h-3.5 text-amber-700" />
                              NDA Restricted
                            </div>
                          )}

                          {/* Core Responsibilities */}
                          <div className="space-y-3">
                            <h4 className="text-xs uppercase tracking-wider text-[#0A0A0A]/40 font-extrabold">
                              Key Contributions
                            </h4>
                            <ul className="space-y-2">
                              {project.contributions.map((contrib, cIdx) => (
                                <li key={cIdx} className="text-sm font-semibold text-[#0A0A0A]/85 flex items-start gap-2 leading-relaxed">
                                  <span className="text-[#FFD700] text-lg leading-none select-none">•</span>
                                  <span>{contrib}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Footer area with tags and CTA */}
                          <div className="space-y-5 pt-4 border-t border-[#0A0A0A]/10">
                            <div className="flex flex-wrap gap-2">
                              {project.techLabels.map((tech) => (
                                <span
                                  key={tech}
                                  className="text-[10px] font-extrabold px-2.5 py-1 bg-white border border-[#0A0A0A]/10 rounded text-[#0A0A0A]/75 uppercase tracking-wide"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            <Link
                              href={`/projects/${project.id}`}
                              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A0A0A] text-white rounded-lg text-sm font-bold hover:bg-[#0A0A0A]/80 transition-colors"
                            >
                              View Deep Dive
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Visual (Desktop) */}
          <div className="hidden lg:block lg:col-span-7 relative">
            <div className="sticky top-32 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full border-4 border-[#0A0A0A] bg-white rounded-2xl shadow-[12px_12px_0_0_#FFD700] overflow-hidden flex flex-col group"
                >
                  {/* Browser / Mac OS Top Bar */}
                  <div className="bg-[#FAF7F0] border-b-4 border-[#0A0A0A] p-3 flex items-center justify-between transition-colors group-hover:bg-[#FFD700]">
                    <div className="flex gap-2">
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-[#0A0A0A] bg-[#FF5F56]" />
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-[#0A0A0A] bg-[#FFBD2E]" />
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-[#0A0A0A] bg-[#27C93F]" />
                    </div>
                    <div className="bg-white border-2 border-[#0A0A0A] rounded-full px-4 py-0.5 text-[10px] font-black tracking-widest uppercase text-[#0A0A0A]/60 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      {activeProject.id}.local
                    </div>
                    <div className="w-[60px]" /> {/* Spacer to perfectly center the address bar */}
                  </div>
                  {/* Image Area */}
                  <div className="p-0 bg-white">
                    <ImageSlider
                      images={activeProject.screenshots && activeProject.screenshots.length > 0 ? activeProject.screenshots : [activeProject.image]}
                      title={activeProject.title}
                      aspectRatio="16/10"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Other Client Projects Section (Envway) */}
        {otherProjects.length > 0 && (
          <div className="mt-24 pt-16 border-t-2 border-[#0A0A0A]/10">
            <h3 className="text-xl font-bold tracking-tight text-[#0A0A0A] mb-8">
              Other Production Systems
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map((project) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="card-brutal p-6 bg-[#FAF7F0] flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-widest text-[#0A0A0A]/40 font-bold">
                        Client Project
                      </span>
                      <Code2 className="w-4 h-4 text-[#0A0A0A]/30" />
                    </div>

                    <h4 className="text-xl font-black text-[#0A0A0A] tracking-tight">
                      {project.title}
                    </h4>

                    <p className="text-[#0A0A0A]/70 text-xs font-semibold leading-relaxed">
                      {project.shortDescription}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      {project.contributions.slice(0, 3).map((contrib, idx) => (
                        <div key={idx} className="text-[11px] font-semibold text-[#0A0A0A]/85 flex items-start gap-1.5">
                          <span className="text-[#FFD700]">•</span>
                          <span>{contrib}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 mt-6 border-t border-[#0A0A0A]/10">
                    <div className="flex flex-wrap gap-1">
                      {project.techLabels.map((tech) => (
                        <span
                          key={tech}
                          className="text-[9px] font-extrabold px-2 py-0.5 bg-white border border-[#0A0A0A]/10 rounded text-[#0A0A0A]/70 uppercase tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-black text-[#0A0A0A] hover:underline"
                      >
                        Visit Website
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
