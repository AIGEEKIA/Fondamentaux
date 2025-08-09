"use client";

import { Sparkles } from "lucide-react";

interface AIGEKIA_SignatureProps {
  className?: string;
  variant?: "simple" | "decorated";
}

export default function AIGEKIA_Signature({
  className = "",
  variant = "decorated",
}: AIGEKIA_SignatureProps) {
  if (variant === "simple") {
    return (
      <div
        className={`flex items-center gap-2 text-white/90 font-medium text-sm ${className}`}
      >
        <Sparkles className="h-4 w-4 text-yellow-400" />
        <span className="font-bold tracking-wider">AIGEEKIA</span>
      </div>
    );
  }

  // Decorated variant
  return (
    <div
      className={`flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10 shadow-lg ${className}`}
    >
      <div className="relative">
        <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
        <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-sm"></div>
      </div>
      <span className="font-bold text-white text-sm tracking-wider">
        AIGEEKIA
      </span>
    </div>
  );
}
