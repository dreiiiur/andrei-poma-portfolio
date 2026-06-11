"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Sparkles, Terminal, Video } from "lucide-react";
import {FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";
import GlassCard from "./ui/GlassCard";
import Blob from "./ui/Blob";

const ROLES = [
  "Graphic Artist",
  "Video Editor",
  "Full-Stack Web Developer",
  "Automation Specialist",
];

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
      className="relative flex items-start md:items-center justify-center pt-[5.5rem] sm:pt-28 pb-10 sm:pb-14 md:pb-16 px-4 sm:px-6 md:px-8 overflow-hidden transition-colors duration-400 md:min-h-screen"
      style={{ background: "var(--background)" }}
    >
      {/* Background Blobs — toned down on mobile */}
      <Blob color="blue" className="top-10 left-10 opacity-40 md:opacity-70" speed="slow" />
      <Blob color="purple" className="bottom-10 right-10 opacity-30 md:opacity-50 hidden sm:block" speed="medium" />
      <Blob color="cyan" className="top-1/3 right-1/4 opacity-25 md:opacity-40 hidden sm:block" speed="fast" />

      {/* Grid overlay for tech look */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--overlay-gradient)" }} />
      <div 
        className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" 
        style={{ opacity: "var(--grid-opacity)" }}
        aria-hidden="true" 
      />

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center z-10">
        
        {/* Left Content Column — first on mobile for immediate impact */}
        <div className="md:col-span-7 text-center md:text-left space-y-5 sm:space-y-6 md:space-y-8 order-1">
          {/* Subtle tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] sm:text-xs font-semibold tracking-wider uppercase max-w-full"
          >
            <Sparkles size={12} className="animate-pulse shrink-0" />
            <span className="truncate">Available for Freelance & Contracts</span>
          </motion.div>

          {/* Main Title & Headline */}
          <div className="space-y-3 sm:space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[2rem] leading-[1.1] min-[400px]:text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight dark:text-white text-zinc-900 uppercase"
            >
              Andrei Poma
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1.5 text-[11px] sm:text-xs md:text-sm font-semibold tracking-widest dark:text-zinc-400 text-zinc-500 uppercase leading-relaxed max-w-lg mx-auto md:mx-0"
            >
              {ROLES.map((role, index) => (
                <React.Fragment key={role}>
                  {index > 0 && (
                    <span className="text-blue-500 hidden sm:inline" aria-hidden="true">•</span>
                  )}
                  <span>{role}</span>
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base dark:text-zinc-300 text-zinc-600 max-w-xl mx-auto md:mx-0 font-medium leading-relaxed"
          >
            Designing visuals, building websites, and creating automations that help businesses grow. I combine technical design systems with custom full-stack solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto md:mx-0"
          >
            <button
              onClick={() => handleScrollTo("projects")}
              className="px-6 py-3.5 rounded-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold text-sm tracking-wider uppercase shadow-lg shadow-blue-500/20 transition-all duration-300 sm:hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer w-full sm:w-auto"
            >
              View Projects
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="px-6 py-3.5 rounded-full dark:bg-white/5 bg-zinc-100 dark:hover:bg-white/10 hover:bg-zinc-200 active:bg-zinc-300 dark:active:bg-white/15 dark:text-white text-zinc-800 border dark:border-white/10 border-zinc-300 font-semibold text-sm tracking-wider uppercase transition-all duration-300 sm:hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center md:justify-start gap-5 pt-1 sm:pt-4"
          >
            <a
              href="https://github.com/dreiiiur"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 -m-2 dark:text-zinc-500 text-zinc-400 dark:hover:text-white hover:text-zinc-900 transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.facebook.com/dreiur/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook profile"
              className="p-2 -m-2 dark:text-zinc-500 text-zinc-400 hover:text-blue-400 transition-colors"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="mailto:contact@andreipoma123@gmail.com"
              aria-label="Send email"
              className="p-2 -m-2 dark:text-zinc-500 text-zinc-400 hover:text-red-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right Card Column — compact on mobile, below headline */}
        <div className="md:col-span-5 flex justify-center order-2 mt-2 sm:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[240px] min-[400px]:max-w-[260px] sm:max-w-[300px] md:max-w-[350px] aspect-[4/5] group pb-4 md:pb-0"
          >
            {/* Ambient Card Background Glow */}
            <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-2xl group-hover:bg-blue-500/15 transition-all duration-500" />
            
            <GlassCard className="h-full w-full flex flex-col p-3 sm:p-4 dark:border-white/10 border-zinc-200 relative" hoverEffect={false}>
              
              {/* Profile Image container */}
              <div className="relative flex-1 w-full rounded-xl overflow-hidden dark:bg-zinc-900 bg-zinc-200 border dark:border-white/5 border-zinc-200 min-h-0">
                <Image
                  src="/hero.jpg"
                  alt="Andrei Poma Profile"
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 300px, 350px"
                  priority
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t dark:from-[#08080a] from-zinc-100 via-transparent to-transparent opacity-80" />
                
                {/* Floating Micro-Badge 1 */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 dark:bg-black/60 bg-white/80 backdrop-blur-md border dark:border-white/10 border-zinc-200 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[9px] sm:text-[10px] font-bold dark:text-zinc-300 text-zinc-600 uppercase flex items-center gap-1 sm:gap-1.5">
                  <Terminal size={10} className="text-blue-400" />
                  Code
                </div>

                {/* Floating Micro-Badge 2 */}
                <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 dark:bg-black/60 bg-white/80 backdrop-blur-md border dark:border-white/10 border-zinc-200 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[9px] sm:text-[10px] font-bold dark:text-zinc-300 text-zinc-600 uppercase flex items-center gap-1 sm:gap-1.5">
                  <Video size={10} className="text-purple-400" />
                  Video
                </div>
              </div>

              {/* Card Footer Text */}
              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t dark:border-white/5 border-zinc-200 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-xs font-bold dark:text-white text-zinc-900 tracking-wide uppercase truncate">Andrei Poma</h4>
                  <p className="text-[9px] sm:text-[10px] font-semibold dark:text-zinc-500 text-zinc-400 tracking-wider uppercase mt-0.5 truncate">Creative Technologist</p>
                </div>
                <div className="relative shrink-0">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  <div className="absolute inset-0 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full animate-ping opacity-75" />
                </div>
              </div>
            </GlassCard>
            
            {/* Orbiting Tech Elements — desktop only to avoid navbar overlap */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-panel p-3 rounded-xl shadow-lg border dark:border-white/10 border-zinc-200 hidden md:flex items-center justify-center"
            >
              <span className="text-xs font-bold text-blue-400 tracking-wider">n8n</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-6 glass-panel p-2.5 rounded-xl shadow-lg border dark:border-white/10 border-zinc-200 hidden md:flex items-center justify-center"
            >
              <span className="text-[10px] font-extrabold text-purple-400 tracking-wider">AE / PR</span>
            </motion.div>

            {/* Mobile-only inline skill chips */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 md:hidden">
              <span className="glass-panel px-2.5 py-1 rounded-lg border dark:border-white/10 border-zinc-200 text-[10px] font-bold text-blue-400 tracking-wider shadow-sm">
                n8n
              </span>
              <span className="glass-panel px-2.5 py-1 rounded-lg border dark:border-white/10 border-zinc-200 text-[10px] font-extrabold text-purple-400 tracking-wider shadow-sm">
                AE / PR
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
