"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Film, GitFork, Paintbrush } from "lucide-react";
import GlassCard from "./ui/GlassCard";

const SERVICES_DATA = [
  {
    icon: Paintbrush,
    title: "Graphic Design",
    description: "Creating premium digital designs, corporate identities, and custom marketing templates that make brands stand out in crowded feeds.",
    deliverables: ["Brand assets & style guides", "Social media graphics", "Custom pitch decks & flyers"],
    color: "text-rose-400 border-rose-500/20 bg-rose-500/5",
  },
  {
    icon: Film,
    title: "Video Editing",
    description: "Assembling fast-paced, highly engaging promotional edits, social media reels, and high-fidelity video advertisements.",
    deliverables: ["Social ads & promotional videos", "TikTok & Instagram reels editing", "Subtle motion graphics & transitions"],
    color: "text-purple-400 border-purple-500/20 bg-purple-500/5",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Developing modern, blazing-fast, and fully responsive websites or custom e-commerce web applications tailored to business growth.",
    deliverables: ["Responsive corporate websites", "Custom E-commerce storefronts", "SEO & Core Web Vitals optimization"],
    color: "text-blue-400 border-blue-500/20 bg-blue-500/5",
  },
  {
    icon: GitFork,
    title: "Automation Solutions",
    description: "Connecting separate software suites, APIs, and AI models to automate operational processes and scale workflow capabilities.",
    deliverables: ["n8n.io workflow builds", "OpenAI & LLM API integrations", "Automated marketing lead routing"],
    color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
  },
];

export default function Services() {
  return (
    <section
      id="services"
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
            05 / Offerings
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold dark:text-white text-zinc-900 tracking-tight uppercase"
          >
            Services Offered
          </motion.h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_DATA.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <GlassCard
                key={idx}
                delay={idx * 0.1}
                className="border dark:border-white/5 border-zinc-200 p-8 flex flex-col justify-between gap-8"
                hoverEffect={true}
              >
                <div className="space-y-6">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl border w-fit ${service.color}`}>
                      <IconComponent size={22} />
                    </div>
                    <h4 className="text-base md:text-lg font-bold tracking-wider dark:text-white text-zinc-900 uppercase">
                      {service.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-xs md:text-sm dark:text-zinc-400 text-zinc-500 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="space-y-3 pt-4 border-t dark:border-white/5 border-zinc-200">
                  <h5 className="text-[10px] font-extrabold dark:text-white text-zinc-900 uppercase tracking-widest">Typical Deliverables</h5>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="text-xs dark:text-zinc-400 text-zinc-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
