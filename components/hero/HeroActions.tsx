"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export function HeroActions() {
  return (
    <motion.div 
      className="flex flex-wrap items-center justify-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <motion.a
        href="#projects"
        className="group relative flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all overflow-hidden"
        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px oklch(var(--primary) / 0.5)" }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10 flex items-center gap-2">
          View My Work
          <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
        </span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"
          initial={{ x: "-100%" }}
          whileHover={{ x: "0%" }}
          transition={{ duration: 0.3 }}
        />
      </motion.a>
      
      <motion.a
        href="#about"
        className="relative rounded-full border border-border bg-card/50 backdrop-blur-sm px-8 py-4 text-sm font-medium transition-all overflow-hidden group"
        whileHover={{ scale: 1.05, borderColor: "oklch(var(--primary) / 0.5)" }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10">Learn More</span>
        <motion.div
          className="absolute inset-0 bg-accent/50"
          initial={{ x: "-100%" }}
          whileHover={{ x: "0%" }}
          transition={{ duration: 0.3 }}
        />
      </motion.a>
    </motion.div>
  );
}

