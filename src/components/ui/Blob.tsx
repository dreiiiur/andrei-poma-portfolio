"use client";

import React from "react";

interface BlobProps {
  color?: "blue" | "purple" | "cyan";
  className?: string;
  speed?: "slow" | "medium" | "fast";
}

export default function Blob({
  color = "blue",
  className = "",
  speed = "slow",
}: BlobProps) {
  const colorMap = {
    blue: "bg-blue-600/20 blur-[130px] shadow-[0_0_120px_rgba(59,130,246,0.25)]",
    purple: "bg-indigo-600/15 blur-[130px] shadow-[0_0_120px_rgba(99,102,241,0.18)]",
    cyan: "bg-cyan-500/15 blur-[130px] shadow-[0_0_120px_rgba(6,182,212,0.18)]",
  };

  const speedMap = {
    slow: "animate-float-slow",
    medium: "animate-float-delayed",
    fast: "animate-float",
  };

  return (
    <div
      className={`absolute pointer-events-none rounded-full w-72 h-72 md:w-96 md:h-96 ${colorMap[color]} ${speedMap[speed]} ${className}`}
      aria-hidden="true"
    />
  );
}
