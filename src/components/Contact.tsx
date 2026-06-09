"use client";
import React, { useState } from "react";
import { AnimatePresence, motion as framerMotion } from "framer-motion";
import { Check, Download, Github, Linkedin, Mail, Send } from "lucide-react";
import GlassCard from "./ui/GlassCard";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "Web Development",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: "",
        email: "",
        projectType: "Web Development",
        message: "",
      });

      // Clear success notification after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 md:px-8 border-t border-white/5 bg-[#08080a]"
    >
      <div className="w-full max-w-5xl mx-auto space-y-16">
        
        {/* Section Title */}
        <div className="space-y-4 text-center md:text-left">
          <framerMotion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-widest text-blue-500 uppercase"
          >
            06 / Connect
          </framerMotion.h2>
          <framerMotion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase"
          >
            Let's Build Something Amazing
          </framerMotion.h3>
          <framerMotion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-zinc-400 max-w-md"
          >
            Interested in working together? Let's discuss your next project and outline a strategy for success.
          </framerMotion.p>
        </div>

        {/* Layout: Two Column Contact Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div className="md:col-span-5 space-y-6">
            
            {/* Quick Contact Links Box */}
            <GlassCard className="border border-white/5 p-8 space-y-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Info</h4>
              
              <div className="space-y-4">
                <a
                  href="mailto:contact@andreipoma.com"
                  className="flex items-center gap-3 text-xs md:text-sm text-zinc-400 hover:text-white transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 group-hover:border-blue-500/30 group-hover:bg-blue-500/5 transition-colors">
                    <Mail size={16} className="text-zinc-400 group-hover:text-blue-400" />
                  </div>
                  <span>contact@andreipoma.com</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs md:text-sm text-zinc-400 hover:text-white transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 group-hover:border-blue-500/30 group-hover:bg-blue-500/5 transition-colors">
                    <Linkedin size={16} className="text-zinc-400 group-hover:text-blue-400" />
                  </div>
                  <span>linkedin.com/in/andreipoma</span>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs md:text-sm text-zinc-400 hover:text-white transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 group-hover:border-blue-500/30 group-hover:bg-blue-500/5 transition-colors">
                    <Github size={16} className="text-zinc-400 group-hover:text-blue-400" />
                  </div>
                  <span>github.com/andreipoma</span>
                </a>
              </div>
            </GlassCard>

            {/* Resume Action Card */}
            <GlassCard className="border border-white/5 p-8 relative overflow-hidden flex flex-col gap-4">
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Need the details?</h4>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Download my full background, technical credentials, and past client references in one PDF.
                </p>
              </div>

              <a
                href="/Andrei_Poma_Resume.pdf"
                download="Andrei_Poma_Resume.pdf"
                className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md shadow-blue-500/10 transition-colors w-full"
              >
                <Download size={14} />
                Download Resume
              </a>
            </GlassCard>

          </div>

          {/* Right Column: Form Card */}
          <div className="md:col-span-7">
            <GlassCard className="border border-white/5 p-8" hoverEffect={false}>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Form Row: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 glass-input text-xs"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 glass-input text-xs"
                    />
                  </div>
                </div>

                {/* Form Row: Project Type Select */}
                <div className="space-y-2">
                  <label htmlFor="projectType" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formState.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass-input text-xs bg-[#0b0b0e] cursor-pointer"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="Automation Solutions">Automation Solutions</option>
                    <option value="Other Contract">Other Contract / Consultation</option>
                  </select>
                </div>

                {/* Form Row: Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    Your Message
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me a bit about your project..."
                    className="w-full px-4 py-3 glass-input text-xs resize-none"
                  />
                </div>

                {/* Action Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-xs tracking-wider uppercase transition-all duration-300 w-full flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={12} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Success Notification Alert */}
                <AnimatePresence>
                  {submitSuccess && (
                    <framerMotion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center gap-2"
                    >
                      <Check size={16} />
                      Thank you! Your inquiry was sent successfully. Andrei will contact you shortly.
                    </framerMotion.div>
                  )}
                </AnimatePresence>

              </form>

            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
}
