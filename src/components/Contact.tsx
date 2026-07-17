"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Send, Mail, MessageCircle, ArrowUpRight, CheckCircle2, ShieldAlert } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const contactLinks = [
  { icon: Mail, label: "ariftayyab2002@gmail.com", href: "mailto:ariftayyab2002@gmail.com" },
  { icon: MessageCircle, label: "+91 879 185 6401", href: "https://wa.me/918791856401" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/tayyab-arif-24991123b?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { icon: GitHubIcon, label: "GitHub", href: "https://github.com/ariftayyab123" },
];

const formFields = [
  { id: "name", label: "Name", type: "text", element: "input" as const },
  { id: "email", label: "Email", type: "email", element: "input" as const },
  { id: "message", label: "Message", type: "text", element: "textarea" as const },
];

function FormspreeForm({ onReset }: { onReset: () => void }) {
  const [state, handleSubmit] = useForm("xkodwnad");
  const [isSubmittedLocal, setIsSubmittedLocal] = useState(false);

  useEffect(() => {
    // Check local storage on mount
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("tayyab_form_submitted");
      if (stored === "true") {
        setTimeout(() => setIsSubmittedLocal(true), 0);
      }
    }
  }, []);

  useEffect(() => {
    // If Formspree confirms success, save to local storage
    if (state.succeeded) {
      setTimeout(() => setIsSubmittedLocal(true), 0);
      if (typeof window !== "undefined") {
        localStorage.setItem("tayyab_form_submitted", "true");
      }
    }
  }, [state.succeeded]);

  const handleReset = () => {
    setIsSubmittedLocal(false);
    if (typeof window !== "undefined") {
      localStorage.removeItem("tayyab_form_submitted");
    }
    onReset();
  };

  const hasErrors = state.errors !== null;

  if (isSubmittedLocal || state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-[#0A0A0A] bg-[#FFD700] rounded-xl h-full shadow-[4px_4px_0_0_#0A0A0A]">
        <CheckCircle2 className="w-12 h-12 text-[#0A0A0A] mb-4" />
        <h3 className="text-2xl font-bold text-[#0A0A0A] tracking-tight mb-2">Message Sent!</h3>
        <p className="text-[#0A0A0A]/80 font-medium mb-6">Thank you for reaching out. I&apos;ll get back to you shortly.</p>
        <button onClick={handleReset} type="button" className="btn-primary !bg-white !text-[#0A0A0A] hover:!bg-white/90" suppressHydrationWarning>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xkodwnad"
      method="POST"
      className="space-y-5"
      suppressHydrationWarning
    >
      {hasErrors && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-500/20 text-red-800 text-xs font-semibold flex items-start gap-2">
          <ShieldAlert className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold">Failed to send message</h4>
            <p className="opacity-80 mt-0.5">Please check your inputs and try again, or email directly.</p>
          </div>
        </div>
      )}

      {formFields.map((field) => (
        <div key={field.id}>
          <label
            htmlFor={field.id}
            className="block text-xs uppercase tracking-widest text-[#0A0A0A]/40 font-bold mb-2"
          >
            {field.label}
          </label>
          {field.element === "textarea" ? (
            <textarea
              id={field.id}
              name={field.id}
              rows={5}
              required
              suppressHydrationWarning
              className="w-full border border-[#E5E7EB] bg-[#FAF7F0] rounded-lg px-4 py-3 text-[#0A0A0A] text-sm outline-none transition-colors focus:border-[#0A0A0A]/40"
            />
          ) : (
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              required
              suppressHydrationWarning
              className="w-full border border-[#E5E7EB] bg-[#FAF7F0] rounded-lg px-4 py-3 text-[#0A0A0A] text-sm outline-none transition-colors focus:border-[#0A0A0A]/40"
            />
          )}
          <ValidationError prefix={field.label} field={field.id} errors={state.errors} className="text-red-500 text-xs mt-1 font-semibold" />
        </div>
      ))}

      <button
        type="submit"
        disabled={state.submitting}
        className="btn-primary w-full justify-center"
        suppressHydrationWarning
      >
        <Send className="w-4 h-4" />
        {state.submitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

export default function Contact() {
  const [formKey, setFormKey] = useState(0);

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t-2 border-[#0A0A0A]/5">
      <div className="section-container">
        <div className="grid gap-16 md:grid-cols-2 items-start">
          {/* Left — Copy + Links */}
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A0A0A]"
              >
                Let&apos;s build something that <span className="highlight">works</span> in the real world.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[#0A0A0A]/60 text-base md:text-lg leading-relaxed font-semibold max-w-md"
              >
                Whether you are hiring for a development role or need help building a business system, I&apos;m open to discussing practical, production-focused opportunities.
              </motion.p>
            </div>

            {/* Contact Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              {contactLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors group w-fit"
                >
                  <Icon className="w-5 h-5 text-[#0A0A0A]/40 group-hover:text-[#0A0A0A] transition-colors" />
                  <span className="text-sm font-bold">{label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xs text-[#0A0A0A]/30 font-bold"
            >
              Usually responds within 24 hours ⚡
            </motion.p>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="card-brutal p-8 bg-[#FDFBF7]">
              <FormspreeForm key={formKey} onReset={() => setFormKey(k => k + 1)} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
