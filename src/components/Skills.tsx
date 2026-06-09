"use client";

import React from "react";
import { easeOut, motion } from "framer-motion";
import { Cpu, Film, Layout, Terminal } from "lucide-react";
import GlassCard from "./ui/GlassCard";

const SKILL_CATEGORIES = [
  {
    title: "Design",
    icon: Layout,
    accentColor: "rose",
    iconColor: "text-rose-400 border-rose-500/20 bg-rose-500/5",
    tagBorder: "border-rose-500/20 hover:border-rose-400/50",
    tagGlow: "hover:shadow-[0_0_12px_rgba(251,113,133,0.15)]",
    tagText: "dark:text-rose-300/80 text-rose-600/80 dark:hover:text-rose-200 hover:text-rose-700",
    dotColor: "bg-rose-400",
    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Canva",
      "Figma",
      "Higgsfield",
      "Holo AI",
    ],
  },
  {
    title: "Video Production",
    icon: Film,
    accentColor: "purple",
    iconColor: "text-purple-400 border-purple-500/20 bg-purple-500/5",
    tagBorder: "border-purple-500/20 hover:border-purple-400/50",
    tagGlow: "hover:shadow-[0_0_12px_rgba(192,132,252,0.15)]",
    tagText: "dark:text-purple-300/80 text-purple-600/80 dark:hover:text-purple-200 hover:text-purple-700",
    dotColor: "bg-purple-400",
    tools: [
      "Adobe Premiere Pro",
      "Motion Graphics",
      "CapCut",
    ],
  },
  {
    title: "Development",
    icon: Terminal,
    accentColor: "blue",
    iconColor: "text-blue-400 border-blue-500/20 bg-blue-500/5",
    tagBorder: "border-blue-500/20 hover:border-blue-400/50",
    tagGlow: "hover:shadow-[0_0_12px_rgba(96,165,250,0.15)]",
    tagText: "dark:text-blue-300/80 text-blue-600/80 dark:hover:text-blue-200 hover:text-blue-700",
    dotColor: "bg-blue-400",
    tools: [
      "React / Next.js",
      "TypeScript",
      "Node.js",
      "Shopify",
      "Tailwind CSS",
      "Git & GitHub",
      "VS Code",
    ],
  },
  {
    title: "Automation",
    icon: Cpu,
    accentColor: "emerald",
    iconColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
    tagBorder: "border-emerald-500/20 hover:border-emerald-400/50",
    tagGlow: "hover:shadow-[0_0_12px_rgba(52,211,153,0.15)]",
    tagText: "dark:text-emerald-300/80 text-emerald-600/80 dark:hover:text-emerald-200 hover:text-emerald-700",
    dotColor: "bg-emerald-400",
    tools: [
      "n8n",
      "AI Workflow Automation",
      "API Integrations",
      "Webhooks",
      "Zapier",
      "OpenAI API",
      "Google Console",
      "Google Gemini API",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut, type: "spring", stiffness: 300, damping: 20 },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
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
            02 / Capabilities
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold dark:text-white text-zinc-900 tracking-tight uppercase"
          >
            Skills & Tools
          </motion.h3>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, catIdx) => {
            const IconComponent = category.icon;
            return (
              <GlassCard
                key={catIdx}
                delay={catIdx * 0.1}
                className="border dark:border-white/5 border-zinc-200 p-8 flex flex-col gap-6"
                hoverEffect={true}
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2.5 rounded-lg border w-fit ${category.iconColor}`}
                  >
                    <IconComponent size={20} />
                  </div>
                  <h4 className="text-md font-bold tracking-wider dark:text-white text-zinc-900 uppercase">
                    {category.title}
                  </h4>
                </div>

                {/* Tool Tags */}
                <motion.div
                  className="flex flex-wrap gap-2.5"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {category.tools.map((tool, toolIdx) => (
                    <motion.span
                      key={toolIdx}
                      variants={tagVariants}
                      className={`
                        inline-flex items-center gap-2 px-4 py-2 rounded-full
                        text-xs font-semibold tracking-wide uppercase
                        border dark:bg-white/[0.02] bg-white/80 backdrop-blur-sm
                        transition-all duration-300 cursor-default select-none
                        ${category.tagBorder} ${category.tagGlow} ${category.tagText}
                      `}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${category.dotColor} opacity-60`}
                      />
                      {tool}
                    </motion.span>
                  ))}
                </motion.div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
