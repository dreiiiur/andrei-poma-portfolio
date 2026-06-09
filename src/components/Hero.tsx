"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Sparkles, Terminal, Video } from "lucide-react";
import GlassCard from "./ui/GlassCard";
import Blob from "./ui/Blob";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden transition-colors duration-400"
      style={{ background: "var(--background)" }}
    >
      {/* Background Blobs */}
      <Blob color="blue" className="top-10 left-10 opacity-70" speed="slow" />
      <Blob color="purple" className="bottom-10 right-10 opacity-50" speed="medium" />
      <Blob color="cyan" className="top-1/3 right-1/4 opacity-40" speed="fast" />

      {/* Grid overlay for tech look */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--overlay-gradient)" }} />
      <div 
        className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" 
        style={{ opacity: "var(--grid-opacity)" }}
        aria-hidden="true" 
      />

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Content Column */}
        <div className="md:col-span-7 text-left space-y-8 order-2 md:order-1">
          {/* Subtle tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase"
          >
            <Sparkles size={12} className="animate-pulse" />
            Available for Freelance & Contracts
          </motion.div>

          {/* Main Title & Headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight dark:text-white text-zinc-900 uppercase"
            >
              Andrei Poma
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base font-semibold tracking-widest dark:text-zinc-400 text-zinc-500 uppercase leading-relaxed"
            >
              Graphic Artist <span className="text-blue-500">•</span> Video Editor <span className="text-blue-500">•</span> Full-Stack Web Developer <span className="text-blue-500">•</span> Automation Specialist
            </motion.p>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base dark:text-zinc-300 text-zinc-600 max-w-xl font-medium leading-relaxed"
          >
            Designing visuals, building websites, and creating automations that help businesses grow. I combine technical design systems with custom full-stack solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => handleScrollTo("projects")}
              className="px-6 py-3.5 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm tracking-wider uppercase shadow-lg shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 group cursor-pointer"
            >
              View Projects
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="px-6 py-3.5 rounded-full dark:bg-white/5 bg-zinc-100 dark:hover:bg-white/10 hover:bg-zinc-200 dark:text-white text-zinc-800 border dark:border-white/10 border-zinc-300 font-semibold text-sm tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-5 pt-4"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-zinc-500 text-zinc-400 dark:hover:text-white hover:text-zinc-900 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-zinc-500 text-zinc-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:contact@andreipoma.com"
              className="dark:text-zinc-500 text-zinc-400 hover:text-red-400 transition-colors"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right Card Column */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-72 sm:w-80 md:w-full max-w-[350px] aspect-[4/5] group"
          >
            {/* Ambient Card Background Glow */}
            <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-2xl group-hover:bg-blue-500/15 transition-all duration-500" />
            
            <GlassCard className="h-full w-full flex flex-col p-4 dark:border-white/10 border-zinc-200 relative" hoverEffect={false}>
              
              {/* Profile Image container */}
              <div className="relative flex-1 w-full rounded-xl overflow-hidden dark:bg-zinc-900 bg-zinc-200 border dark:border-white/5 border-zinc-200">
                <Image
                  src="/hero.jpg"
                  alt="Andrei Poma Profile"
                  fill
                  sizes="(max-w-768px) 100vw, 350px"
                  priority
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t dark:from-[#08080a] from-zinc-100 via-transparent to-transparent opacity-80" />
                
                {/* Floating Micro-Badge 1 */}
                <div className="absolute top-3 left-3 dark:bg-black/60 bg-white/80 backdrop-blur-md border dark:border-white/10 border-zinc-200 px-2.5 py-1 rounded-md text-[10px] font-bold dark:text-zinc-300 text-zinc-600 uppercase flex items-center gap-1.5">
                  <Terminal size={10} className="text-blue-400" />
                  Code
                </div>

                {/* Floating Micro-Badge 2 */}
                <div className="absolute bottom-3 right-3 dark:bg-black/60 bg-white/80 backdrop-blur-md border dark:border-white/10 border-zinc-200 px-2.5 py-1 rounded-md text-[10px] font-bold dark:text-zinc-300 text-zinc-600 uppercase flex items-center gap-1.5">
                  <Video size={10} className="text-purple-400" />
                  Video
                </div>
              </div>

              {/* Card Footer Text */}
              <div className="mt-4 pt-3 border-t dark:border-white/5 border-zinc-200 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold dark:text-white text-zinc-900 tracking-wide uppercase">Andrei Poma</h4>
                  <p className="text-[10px] font-semibold dark:text-zinc-500 text-zinc-400 tracking-wider uppercase mt-0.5">Creative Technologist</p>
                </div>
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              </div>
            </GlassCard>
            
            {/* Orbiting Tech Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-panel p-3 rounded-xl shadow-lg border dark:border-white/10 border-zinc-200 flex items-center justify-center"
            >
              <span className="text-xs font-bold text-blue-400 tracking-wider">n8n</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-6 glass-panel p-2.5 rounded-xl shadow-lg border dark:border-white/10 border-zinc-200 flex items-center justify-center"
            >
              <span className="text-[10px] font-extrabold text-purple-400 tracking-wider">AE / PR</span>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
