"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: "Development" | "Marketing" | "Automation";
  description: string;
  image: string;
  techStack: string[];
  features: string[];
  client: string;
  year: string;
  link?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Zenoboard Philippines",
    category: "Development",
    description: "Developed a modern, high-performance e-commerce platform for a local startup. Focused on creating a smooth digital product catalog, lightning-fast load time, completely responsive mobile layout, and with a product visualizer. ",
    image: "https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-6/655737571_1367353278482907_4151684737744893578_n.jpg?stp=dst-jpg_tt6&cstp=mx2047x2048&ctp=s2047x2048&_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Xus6XqKA27oQ7kNvwEilMXu&_nc_oc=AdoiguSs1fnpoB-akrCiUARQ1pVb_ogZdERa-3miYQNDQgx_3I50ee86JNz0SSdI8G8&_nc_zt=23&_nc_ht=scontent.fcrk1-2.fna&_nc_gid=KLYQWFSOc1EunYtX60fg8g&_nc_ss=7a2a8&oh=00_Af-kQOkBL4eBGZLNksGsgC2FtVFe5LIdVBMK54KfFjWSEQ&oe=6A30781D",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    features: [
      "Custom product visualizer with user-friendly interface",
      "Email marketing integration with Mailjs",
      "Guided product selection and purchase process",
      "Customer experience optimization with recommendations",
    ],
    client: "Zenoboard Philippines",
    year: "2026",
    link: "https://zenoboardphilippines.com",
  },
  {
    id: 2,
    title: "Pathra Philippines",
    category: "Development",
    description: "Developed a modern, high-performance e-commerce platform for a local fashion brand. Focused on creating a smooth digital product catalog, lightning-fast load time, and a completely responsive mobile layout. ",
    image: "https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-6/632053286_122124704655051886_8889425382460707749_n.jpg?stp=dst-jpg_tt6&cstp=mx2000x2000&ctp=s2000x2000&_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=JU0K9E_AxuYQ7kNvwEuwuqe&_nc_oc=AdqUspTicAp7DQhtGl95lWoJvlaZpyZyq6r4GZ1gOCxz12tDqWg5o01hJTdH7g0fZmw&_nc_zt=23&_nc_ht=scontent.fcrk1-2.fna&_nc_gid=kafl3PXMRVjTmTwbgtHDrQ&_nc_ss=7b2a8&oh=00_Af_H9QaKrSDS1-OkeE48E5-kdDmbnazpo3ic-DYdtYi_PQ&oe=6A3072CD",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    features: [
      "Custom product visualizer with user-friendly interface",
      "Guided product selection and purchase process",
      "Customer experience and SEO optimization",
    ],
    client: "Pathra Collections",
    year: "2026",
    link: "https://www.pathracollection.com/",
  },
  {
    id: 3,
    title: "Pathra Chatbot",
    category: "Automation",
    description: "Built a chatbot using OpenAI API and n8n.io to automate the customer service and support process.",
    image: "/pathrachat.png",
    techStack: ["n8n.io", "OpenAI API", "Node.js", "Docker", "Ngrok", "Google Console"],
    features: [
      "Automated customer service and support process",
      "AI-driven initial reply generation for customer service",
    ],
    client: "Pathra Collections",
    year: "2026",
    link: "",
  },
  {
    id: 4,
    title: "Zenobaord Marketing Campaign",
    category: "Marketing",
    description: "Designed and developed custom marketing campaigns that is ready for ad campaigns and social media campaigns. ",
    image: "https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-6/655737571_1367353278482907_4151684737744893578_n.jpg?stp=dst-jpg_tt6&cstp=mx2047x2048&ctp=s2047x2048&_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Xus6XqKA27oQ7kNvwEilMXu&_nc_oc=AdoiguSs1fnpoB-akrCiUARQ1pVb_ogZdERa-3miYQNDQgx_3I50ee86JNz0SSdI8G8&_nc_zt=23&_nc_ht=scontent.fcrk1-2.fna&_nc_gid=KLYQWFSOc1EunYtX60fg8g&_nc_ss=7a2a8&oh=00_Af-kQOkBL4eBGZLNksGsgC2FtVFe5LIdVBMK54KfFjWSEQ&oe=6A30781D",
    techStack: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "Capcut", "Higgsfield", "Holo AI", "Gemini"],
    features: [
      "Delivered a marketing campaign Video Ads and Graphic Ads for the brand",
      "Optimized the brand's social media presence and engagement",
      "Increased the brand's reach and awareness",
      "100+ Inquiries from facebook and tiktok",
    ],
    client: "Pathra Collections",
    year: "2026",
    link: "https://www.pathracollection.com/",
  },
];

const FILTERS: ("All" | "Development" | "Marketing" | "Automation")[] = [
  "All",
  "Development",
  "Marketing",
  "Automation",
];

export default function Projects() {
  const [filter, setFilter] = useState<"All" | "Development" | "Marketing" | "Automation">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "All") return true;
    return p.category === filter;
  });

  return (
    <section
      id="projects"
      className="relative py-24 px-4 md:px-8 border-t dark:border-white/5 border-zinc-200 transition-colors duration-400"
      style={{ background: "var(--background)" }}
    >
      <div className="w-full max-w-5xl mx-auto space-y-16">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-bold tracking-widest text-blue-500 uppercase"
            >
              04 / Showcase
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold dark:text-white text-zinc-900 tracking-tight uppercase"
            >
              Featured Projects
            </motion.h3>
          </div>

          {/* Filtering Tabs */}
          <div className="flex items-center justify-start md:justify-center gap-1 dark:bg-white/5 bg-zinc-100 p-1 rounded-full border dark:border-white/10 border-zinc-200 w-full md:w-fit mx-auto md:mx-0 overflow-x-auto no-scrollbar">
            {FILTERS.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 relative cursor-pointer whitespace-nowrap shrink-0 ${
                  filter === cat ? "text-white" : "dark:text-zinc-400 text-zinc-500 dark:hover:text-zinc-200 hover:text-zinc-800"
                }`}
              >
                {filter === cat && (
                  <motion.span
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-blue-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border dark:border-white/10 border-zinc-200 rounded-2xl overflow-hidden divide-x divide-y dark:divide-white/10 divide-zinc-200"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-full flex flex-col">

                  {/* Thumbnail Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden dark:bg-zinc-950 bg-zinc-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 scale-100 group-hover:scale-105"
                    />
                  </div>

                  {/* Text Details */}
                  <div className="px-5 py-4 flex items-center justify-between gap-3">
                    <div className="space-y-0.5 min-w-0">
                      <h4 className="text-sm font-semibold dark:text-white text-zinc-900 truncate">
                        {project.title}
                      </h4>
                      <p className="text-xs dark:text-zinc-500 text-zinc-400">
                        {project.category}
                      </p>
                    </div>
                    <div className="shrink-0 p-2 rounded-full border dark:border-white/10 border-zinc-200 dark:text-zinc-400 text-zinc-500 group-hover:border-blue-500 group-hover:text-blue-500 group-hover:bg-blue-500/10 transition-colors">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal Dialog */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 dark:bg-[#08080a]/80 bg-black/40 backdrop-blur-sm"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="w-full max-w-2xl border rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] relative z-10 max-h-[90vh] flex flex-col"
                style={{ background: "var(--modal-bg)", borderColor: "var(--border-color)" }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 p-2.5 rounded-full dark:bg-black/60 bg-zinc-100 border dark:border-white/10 border-zinc-200 dark:hover:bg-white/10 hover:bg-zinc-200 transition-colors dark:text-zinc-300 text-zinc-600 dark:hover:text-white hover:text-zinc-900 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>

                {/* Modal Scrollable Container */}
                <div className="overflow-y-auto no-scrollbar flex-1">
                  
                  {/* Large Image Banner */}
                  <div className="relative aspect-video w-full dark:bg-zinc-950 bg-zinc-100 border-b dark:border-white/5 border-zinc-200">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      sizes="600px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t dark:from-[#0b0b0e] from-white via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Details */}
                  <div className="p-6 md:p-8 space-y-6">
                    
                    {/* Header info */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                          {selectedProject.category}
                        </span>
                        <span className="text-[10px] font-bold dark:text-zinc-500 text-zinc-400 uppercase tracking-widest">
                          {selectedProject.year}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-extrabold dark:text-white text-zinc-900 uppercase tracking-wider">
                        {selectedProject.title}
                      </h3>
                      <p className="text-xs dark:text-zinc-500 text-zinc-400 font-bold uppercase tracking-wider">
                        Client: <span className="dark:text-zinc-300 text-zinc-600">{selectedProject.client}</span>
                      </p>
                    </div>

                    {/* Long Description */}
                    <div className="space-y-2">
                      <h5 className="text-xs font-bold dark:text-white text-zinc-900 uppercase tracking-widest">Overview</h5>
                      <p className="text-xs md:text-sm dark:text-zinc-400 text-zinc-500 leading-relaxed font-normal">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Tech Stack List */}
                    <div className="space-y-3">
                      <h5 className="text-xs font-bold dark:text-white text-zinc-900 uppercase tracking-widest">Technologies Used</h5>
                      <div className="flex flex-wrap items-center gap-2">
                        {selectedProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-md dark:bg-white/5 bg-zinc-100 border dark:border-white/5 border-zinc-200 text-[10px] font-bold dark:text-zinc-300 text-zinc-600 uppercase tracking-wider"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Accomplishments / Features */}
                    <div className="space-y-3">
                      <h5 className="text-xs font-bold dark:text-white text-zinc-900 uppercase tracking-widest">Key Accomplishments</h5>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feat, idx) => (
                          <li key={idx} className="text-xs md:text-sm dark:text-zinc-400 text-zinc-500 leading-relaxed flex items-start gap-2">
                            <span className="text-blue-500 font-bold mt-1">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* View Project Button */}
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-widest transition-colors"
                      >
                        View Project <ExternalLink size={14} />
                      </a>
                    )}

                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}