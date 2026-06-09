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
        <div className="relative pl-6 md:pl-10 border-l dark:border-white/10 border-zinc-300 space-y-12 max-w-3xl mx-auto md:mx-0">
          
          {/* Glowing Line Overlay */}
          <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent pointer-events-none" />

          {TIMELINE_DATA.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Bullet Node */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 md:w-5 md:h-5 rounded-full border border-blue-500 flex items-center justify-center z-10"
                style={{ background: "var(--background)" }}
              >
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform duration-300" />
              </motion.div>

              {/* Entry Animation Wrapper */}
              <div className="space-y-3">
                
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
