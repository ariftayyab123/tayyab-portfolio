"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Tayyab helped us improve our warehouse QC and labelling workflow by building a system around our real operational needs. He understood the scanning, verification, and printing process well, and delivered a practical solution that made the work easier for our team.",
    author: "Operations Director",
    company: "Warehouse & Logistics Client",
  },
  {
    quote: "We needed a robust, SEO-optimized business website and Tayyab delivered beyond our expectations. His communication, architecture choices, and final delivery were truly production-grade.",
    author: "Founder",
    company: "Envway Technologies",
    companyUrl: "https://www.linkedin.com/company/envway-technologies/?viewAsMember=true",
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FDFBF7]">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A0A0A] mb-14"
        >
          Client <span className="highlight">Feedback</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-brutal p-8 md:p-10 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-[#FFD700] mb-6" fill="currentColor" />
                <p className="text-[#0A0A0A]/80 text-lg leading-relaxed font-medium mb-8">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 border-t-2 border-[#0A0A0A]/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-[#0A0A0A] flex items-center justify-center shrink-0">
                  <span className="text-[#FFD700] font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-[#0A0A0A] font-bold">{testimonial.author}</h4>
                  {testimonial.companyUrl ? (
                    <a
                      href={testimonial.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0A0A0A]/60 text-sm font-medium hover:text-[#0A0A0A] transition-colors hover:underline decoration-[#FFD700] decoration-2 underline-offset-2"
                    >
                      {testimonial.company}
                    </a>
                  ) : (
                    <p className="text-[#0A0A0A]/60 text-sm font-medium">{testimonial.company}</p>
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
