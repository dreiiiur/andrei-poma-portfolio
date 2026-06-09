"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden transition-colors duration-400" style={{ background: "var(--background)" }}>
      {/* Sticky Capsule Navigation */}
      <Navbar />

      {/* Main Single Page Layout Sections */}
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Contact />
      </main>

      {/* Minimalist Footer */}
      <footer className="w-full border-t dark:border-white/5 border-zinc-200 dark:bg-[#070709] bg-zinc-50 py-8 px-4 text-center z-10 relative transition-colors duration-400">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <img src="/logo.jpg" alt="Logo" className="w-12 h-12 rounded-full" />
          <p className="text-[10px] font-bold dark:text-zinc-500 text-zinc-400 uppercase tracking-widest">
            © {new Date().getFullYear()} Andrei Poma. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[10px] font-bold dark:text-zinc-500 dark:hover:text-white text-zinc-400 hover:text-zinc-900 uppercase tracking-widest transition-colors"
            >
              Back to Top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
