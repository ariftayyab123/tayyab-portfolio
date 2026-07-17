"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Capabilities", href: "#capabilities" },
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

  // We rely on Next.js <Link> and native smooth scrolling defined in globals.css

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#0A0A0A]/10 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
      style={{ backgroundColor: scrolled ? "rgba(250, 247, 240, 0.85)" : "transparent" }}
    >
      <nav className="section-container flex items-center justify-between py-4">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-bold text-[#0A0A0A] tracking-tight"
        >
          <Image src="/logo.png" alt="TA Logo" width={32} height={32} className="rounded-md border border-[#0A0A0A]/20" />
          Tayyab Arif
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={`/${link.href}`}
                className="text-sm font-semibold text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          
          {/* Resume link */}
          <li>
            <a
              href="/resume.pdf"
              download
              className="text-xs uppercase tracking-widest text-[#0A0A0A]/60 hover:text-[#0A0A0A] font-bold transition-colors"
            >
              Resume
            </a>
          </li>

          {/* Connect Button */}
          <li>
            <a
              href="mailto:ariftayyab2002@gmail.com"
              className="inline-flex items-center gap-1.5 bg-[#0A0A0A] text-white text-xs uppercase tracking-wider font-bold px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors shadow-[2px_2px_0_0_rgba(10,10,10,0.15)]"
            >
              Get in touch
            </a>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen((p) => !p)}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-full border-2 border-[#0A0A0A] text-[#0A0A0A] bg-white shadow-[2px_2px_0_0_#0A0A0A]"
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
            className="overflow-hidden md:hidden border-t border-[#0A0A0A]/10 bg-[#FAF7F0]"
          >
            <div className="section-container flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/${link.href}`}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-semibold text-[#0A0A0A]/70 hover:text-[#0A0A0A] hover:bg-white/60 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              
              <a
                href="/resume.pdf"
                download
                className="block rounded-lg px-4 py-3 text-sm font-semibold text-[#0A0A0A]/70 hover:text-[#0A0A0A] hover:bg-white/60 transition-colors"
              >
                Download Résumé
              </a>

              <a
                href="mailto:ariftayyab2002@gmail.com"
                className="mt-2 inline-flex items-center justify-center gap-1.5 bg-[#0A0A0A] text-white text-xs uppercase tracking-wider font-bold px-4 py-3 rounded-full"
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
