"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer group"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <span className="text-sm group-hover:text-primary transition-colors">Scroll</span>
        <ArrowDown className="h-5 w-5 group-hover:text-primary transition-colors" />
      </motion.div>
    </motion.div>
  );
}

