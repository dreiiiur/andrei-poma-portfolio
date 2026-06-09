"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeProvider";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Timeline" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section highlighting based on scroll position
      const scrollPosition = window.scrollY + 180;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4">
        <nav
          className={`w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${scrolled
              ? "dark:bg-[#08080a]/60 bg-white/70 backdrop-blur-md border dark:border-white/10 border-zinc-200/80 dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              : "bg-transparent border border-transparent"
            }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="text-base font-bold tracking-wider dark:text-white text-zinc-900 flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 w-2 h-2 rounded-full animate-pulse" />
            <img src="/logo.jpg" alt="Logo" className="w-12 h-12 rounded-full" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 relative ${activeSection === item.id
                    ? "dark:text-white text-zinc-900"
                    : "dark:text-zinc-400 text-zinc-500 dark:hover:text-zinc-200 hover:text-zinc-800"
                  }`}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 dark:bg-blue-500/10 bg-blue-500/10 border dark:border-blue-500/20 border-blue-500/20 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            ))}

            {/* Theme Toggle */}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile: Theme Toggle + Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full dark:hover:bg-white/5 hover:bg-zinc-200 border dark:border-white/5 border-zinc-200 transition-colors dark:text-zinc-300 text-zinc-600 dark:hover:text-white hover:text-zinc-900"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden glass-panel rounded-3xl p-6 dark:shadow-[0_10px_50px_rgba(0,0,0,0.8)] shadow-[0_10px_50px_rgba(0,0,0,0.1)] border dark:border-white/10 border-zinc-200"
          >
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold tracking-wider uppercase transition-colors ${activeSection === item.id
                      ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      : "dark:text-zinc-400 text-zinc-500 dark:hover:text-zinc-200 hover:text-zinc-800 dark:hover:bg-white/5 hover:bg-zinc-100"
                    }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
