"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  delay = 0,
  hoverEffect = true,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-panel rounded-2xl p-6 relative overflow-hidden ${
        hoverEffect ? "glass-panel-hover" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
