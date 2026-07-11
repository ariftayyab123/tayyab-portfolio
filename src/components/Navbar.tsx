"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#E5E7EB] backdrop-blur-md"
          : "border-b border-transparent"
      }`}
      style={{ backgroundColor: scrolled ? "rgba(250, 247, 240, 0.85)" : "transparent" }}
    >
      <nav className="section-container flex items-center justify-between py-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 text-lg font-semibold text-[#111827] tracking-tight"
        >
          <Image src="/logo.png" alt="TA Logo" width={32} height={32} className="rounded-md" />
          Tayyab Arif
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-sm font-[450] text-[#111827]/50 hover:text-[#111827] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:ariftayyab2002@gmail.com"
              className="inline-flex items-center gap-1.5 bg-[#111827] text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors"
            >
              Get in touch
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((p) => !p)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-[#111827]"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden md:hidden border-t border-[#E5E7EB] bg-[#FAF7F0]"
          >
            <div className="section-container flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="block rounded-lg px-4 py-3 text-sm font-[450] text-[#111827]/70 hover:text-[#111827] hover:bg-white/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:ariftayyab2002@gmail.com"
                className="mt-2 inline-flex items-center justify-center gap-1.5 bg-[#111827] text-white text-sm font-medium px-4 py-3 rounded-full"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
