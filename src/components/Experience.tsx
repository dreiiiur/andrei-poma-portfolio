"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import GlassCard from "./ui/GlassCard";

const TIMELINE_DATA = [
  {
    year: "2025 - Present",
    company: "Lyvera Digital Marketing Services",
    role: "Creative Technologist & Multimedia Designer",
    responsibilities: [
      "Produced graphics and video advertisements to boost social media campaigns.",
      "Developed custom websites for multiple clients using modern frontend technologies and design systems.",
      "Implemented AI-powered workflows to reduce operational tasks and automate marketing pipelines.",
      "Created reusable modern design systems and digital marketing assets.",
    ],
  },
  {
    year: "2025",
    company: "Freelance",
    role: "Graphic Artist & Web Developer",
    responsibilities: [
      "Created high-impact social media collateral and ad creatives.",
      "Designed logos, brand identities, and promotional marketing assets.",
      "Developed responsive, modern business websites using custom frontend code.",
      "Worked directly with startup clients to scope requirements and deliver high-quality assets.",
    ],
  },
  {
    year: "2025",
    company: "Shift101 IT Solutions",
    role: "Full-Stack Web Developer (Intern)",
    responsibilities: [
      "Developed a custom Shopify/E-commerce platform for an international client.",
      "Assisted senior developers with frontend layouts and backend server endpoints.",
      "Collaborated closely with creative designers and product project managers.",
      "Configured robust client responsive designs and optimized page speed scores.",
    ],
  },
];

export default function Experience() {
  const lastIndex = TIMELINE_DATA.length - 1;

  return (
    <section
      id="experience"
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
            03 / History
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold dark:text-white text-zinc-900 tracking-tight uppercase"
          >
            Experience
          </motion.h3>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-0 max-w-3xl mx-auto md:mx-0">
          {TIMELINE_DATA.map((item, idx) => (
            <div key={idx} className="relative flex gap-4 md:gap-6 group">
              
              {/* Track: dot + connector (line stops at last entry) */}
              <div className="relative flex w-5 md:w-6 shrink-0 flex-col items-center">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative z-10 mt-1.5 flex h-4 w-4 md:h-5 md:w-5 shrink-0 items-center justify-center rounded-full border border-blue-500"
                  style={{ background: "var(--background)" }}
                >
                  <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-blue-500 transition-transform duration-300 group-hover:scale-125" />
                </motion.div>

                {idx < lastIndex && (
                  <div
                    className="mt-2 w-px flex-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-blue-500/40"
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Entry content */}
              <div className={`min-w-0 flex-1 space-y-3 ${idx < lastIndex ? "pb-12" : "pb-0"}`}>
                
                {/* Year Info */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest"
                >
                  <Calendar size={12} />
                  <span>{item.year}</span>
                </motion.div>

                {/* Content Card */}
                <GlassCard
                  delay={idx * 0.15}
                  className="border dark:border-white/5 border-zinc-200 p-6 md:p-8"
                  hoverEffect={true}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                    <div>
                      <h4 className="text-base md:text-lg font-bold dark:text-white text-zinc-900 uppercase tracking-wider">
                        {item.role}
                      </h4>
                      <p className="text-xs font-bold dark:text-zinc-400 text-zinc-500 uppercase tracking-widest mt-1 flex items-center gap-1.5">
                        <Briefcase size={12} className="dark:text-zinc-500 text-zinc-400" />
                        {item.company}
                      </p>
                    </div>
                  </div>

                  {/* Responsibilities list */}
                  <ul className="space-y-2.5">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="text-xs md:text-sm dark:text-zinc-400 text-zinc-500 leading-relaxed font-normal flex items-start gap-2">
                        <span className="text-blue-500 font-bold mt-1 text-xs">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
