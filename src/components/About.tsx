"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Code, Cpu, Megaphone, Palette } from "lucide-react";
import GlassCard from "./ui/GlassCard";

const FOCUS_AREAS = [
  {
    icon: Palette,
    title: "Visual Design",
    description: "Designing corporate brands, custom social collateral, and premium modern user interfaces.",
    color: "text-rose-400 border-rose-500/20 bg-rose-500/5",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building fast, SEO-optimized, highly responsive web apps using modern frameworks.",
    color: "text-blue-400 border-blue-500/20 bg-blue-500/5",
  },
  {
    icon: Megaphone,
    title: "Marketing Assets",
    description: "Creating highly engaging promo videos, reels, and custom digital marketing graphics.",
    color: "text-amber-400 border-amber-500/20 bg-amber-500/5",
  },
  {
    icon: Cpu,
    title: "Automation Systems",
    description: "Implementing n8n workflows and API integrations to automate repetitive tasks.",
    color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Fusing large language models and automations to optimize operational workflows.",
    color: "text-purple-400 border-purple-500/20 bg-purple-500/5",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-4 md:px-8 border-t dark:border-white/5 border-zinc-200 transition-colors duration-400"
      style={{ background: "var(--background)" }}
    >
      <div className="w-full max-w-5xl mx-auto space-y-16">
        
        {/* Section Title */}
        <div className="space-y-4 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-widest text-blue-500 uppercase"
          >
            01 / Profile
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold dark:text-white text-zinc-900 tracking-tight uppercase"
          >
            About Me
          </motion.h3>
        </div>

        {/* Description & Detail Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* About Paragraph Card */}
          <div className="md:col-span-5 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base dark:text-zinc-300 text-zinc-600 leading-relaxed font-medium"
            >
              I am a multidisciplinary creative professional specializing in graphic design, video editing, web development, and business automation.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm dark:text-zinc-400 text-zinc-500 leading-relaxed font-normal"
            >
              I enjoy creating digital experiences that not only look great but also improve efficiency and deliver measurable results. By bridging the gap between aesthetics and automation, I help startups scale their operations and elevate their brand presence.
            </motion.p>

            {/* Glowing Accent Decorative Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
              <p className="text-xs font-semibold text-blue-400 tracking-wider uppercase mb-1">My Philosophy</p>
              <p className="text-xs dark:text-zinc-300 text-zinc-600 leading-relaxed font-medium">
                Design without systems is artwork. Automation without design is machine-like. Combining both creates seamless human experiences.
              </p>
            </motion.div>
          </div>

          {/* Focus Areas cards column */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FOCUS_AREAS.map((item, idx) => {
              const IconComponent = item.icon;
              const isFullWidthOnMobile = idx === FOCUS_AREAS.length - 1;
              return (
                <GlassCard
                  key={idx}
                  delay={idx * 0.08}
                  className={`flex flex-col gap-4 border dark:border-white/5 border-zinc-200 ${
                    isFullWidthOnMobile ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className={`p-2.5 rounded-lg border w-fit ${item.color}`}>
                    <IconComponent size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold dark:text-white text-zinc-900 uppercase tracking-wider">{item.title}</h4>
                    <p className="text-xs dark:text-zinc-400 text-zinc-500 leading-relaxed">{item.description}</p>
                  </div>
                </GlassCard>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
