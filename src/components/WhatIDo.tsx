"use client";

import { motion } from "motion/react";
import { Monitor, Server, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Frontend Interfaces",
    description:
      "React, Next.js, and TypeScript interfaces for business websites, dashboards, and complex applications - including survey engines, custom logic flows, lazy-loaded routing, and optimized frontend performance.",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description:
      "Production-focused backend development with Spring Boot microservices, clean architecture, secure APIs, testing, database design, and serverless functions when the project needs them.",
  },
  {
    icon: BarChart3,
    title: "Business Systems",
    description:
      "End-to-end operational systems including warehouse Quality Check platforms, print gateway agents, data export modules, barcode workflows, dashboards, and deployment-ready tools for real-world business operations.",
  },
];

export default function WhatIDo() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-container">
        {/* Left-aligned heading — no centered subtitle pattern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A0A0A] mb-4">
            What I <span className="highlight">Do</span>
          </h2>
          <p className="mt-4 text-[#0A0A0A]/70 text-base leading-relaxed font-medium md:text-lg">
            I build market-ready software systems that solve real business problems. I am not limited to one stack - I choose the right tools for the project and focus on clean architecture, reliable delivery, and practical results.
          </p>
        </motion.div>

        {/* Cards — slight visual variety */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
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
                  {service.title}
                </h3>
                <p className="text-[#0A0A0A]/80 text-[15px] leading-relaxed font-medium">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
