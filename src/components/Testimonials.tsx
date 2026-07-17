"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    quote: "Tayyab helped us improve our warehouse QC and labelling workflow by building a system around our real operational needs. He understood the scanning, verification, and printing process well, and delivered a practical solution that made the work easier for our team.",
    author: "Operations Director",
    company: "Warehouse Operations Client (Europe)",
  },
  {
    quote: "We needed a robust, SEO-optimized business website, and Tayyab delivered beyond our expectations. His communication, architecture choices, and final delivery were truly production-grade.",
    author: "Founder",
    company: "Envway Technologies",
    companyUrl: "https://www.linkedin.com/company/envway-technologies/?viewAsMember=true",
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FDFBF7] border-t-2 border-[#0A0A0A]/5">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A0A0A]">
            Client <span className="highlight">Testimonials</span>
          </h2>
          <p className="mt-4 text-[#0A0A0A]/60 font-medium text-sm md:text-base">
            Feedback from stakeholders on active systems currently running in production.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-brutal p-8 md:p-10 bg-white flex flex-col justify-between"
            >
              <div>
                <p className="text-[#0A0A0A]/85 text-base md:text-lg leading-relaxed font-semibold italic mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
              
              <div className="flex items-center gap-4 border-t border-[#0A0A0A]/10 pt-6">
                <div className="w-10 h-10 rounded-full bg-[#0A0A0A] flex items-center justify-center shrink-0">
                  <span className="text-[#FFD700] font-black text-sm uppercase">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-[#0A0A0A] font-bold text-sm">{testimonial.author}</h4>
                  {testimonial.companyUrl ? (
                    <a
                      href={testimonial.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0A0A0A]/60 text-xs font-semibold hover:text-[#0A0A0A] transition-colors hover:underline decoration-[#FFD700] decoration-2 underline-offset-2"
                    >
                      {testimonial.company}
                    </a>
                  ) : (
                    <p className="text-[#0A0A0A]/60 text-xs font-semibold">{testimonial.company}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
