"use client";

import { ArrowDown, Github, Linkedin, Mail, Twitter, MessageSquare } from "lucide-react";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { motion } from "framer-motion";

export default function Hero() {
  const { mousePosition, ref } = useMousePosition();

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-24 pb-20 text-center overflow-hidden"
    >
      {/* Animated gradient background - base layer */}
      <div
        className="pointer-events-none absolute inset-0 animate-gradient-shift"
        style={{
          background: `linear-gradient(135deg, oklch(var(--background)) 0%, oklch(var(--primary) / 0.12) 50%, oklch(var(--background)) 100%)`,
          backgroundSize: '200% 200%',
        }}
      />
      
      {/* Animated radial gradient orbs */}
      <div
        className="pointer-events-none absolute inset-0 animate-gradient-move"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, oklch(0.5 0.15 265 / 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, oklch(0.5 0.15 200 / 0.25) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, oklch(0.5 0.15 300 / 0.2) 0%, transparent 60%)
          `,
          backgroundSize: '200% 200%',
        }}
      />
      
      {/* Rotating conic gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50 animate-gradient-rotate"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, oklch(var(--primary) / 0.2) 0deg, transparent 90deg, oklch(var(--primary) / 0.2) 180deg, transparent 270deg, oklch(var(--primary) / 0.2) 360deg)`,
        }}
      />
      
      {/* Mouse-following radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, oklch(0.5 0.15 265 / 0.2), transparent 40%)`,
          opacity: mousePosition.x > 0 && mousePosition.y > 0 ? 1 : 0,
        }}
      />
      
      {/* Subtle glow effect behind content */}
      <div className="relative max-w-4xl space-y-8 z-10 before:absolute before:inset-0 before:rounded-3xl before:bg-primary/5 before:blur-3xl before:-z-10">
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 1.11, 0.81, 0.99] }}
        >
          <motion.h1 
            className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground/70 bg-clip-text text-transparent">
              Mark O'Dowd
            </span>
          </motion.h1>
          <motion.h2 
            className="text-4xl font-semibold text-muted-foreground sm:text-3xl md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Software Engineer
          </motion.h2>
          <motion.h3 
            className="text-2xl font-semibold text-muted-foreground sm:text-2xl md:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Fullstack Developer | AWS Certified
          </motion.h3>
          <motion.p 
            className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I build modern web applications with a focus on user experience,
            performance, and clean code. Passionate about creating digital
            solutions that make a difference.
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
          >
            View My Work
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </a>
          <a
            href="#about"
            className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-all hover:scale-105 hover:bg-accent"
          >
            Learn More
          </a>
        </motion.div>

        <motion.div 
          className="flex items-center justify-center gap-6 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 transition-all hover:scale-110 hover:bg-accent group"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6 transition-colors group-hover:text-primary" />
          </a>
          <a
            href="https://www.linkedin.com/in/markodowd2/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 transition-all hover:scale-110 hover:bg-accent group"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 transition-colors group-hover:text-primary" />
          </a>
          <a
            href="https://x.com/markodowd_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 transition-all hover:scale-110 hover:bg-accent group"
            aria-label="X"
          >
            <Twitter className="h-6 w-6 transition-colors group-hover:text-primary" />
          </a>
          <a
            href="https://bsky.app/profile/markodowd.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 transition-all hover:scale-110 hover:bg-accent group"
            aria-label="Bluesky"
          >
            <MessageSquare className="h-6 w-6 transition-colors group-hover:text-primary" />
          </a>
          <a
            href="mailto:contact@markodowd.dev"
            className="rounded-full p-3 transition-all hover:scale-110 hover:bg-accent group"
            aria-label="Email"
          >
            <Mail className="h-6 w-6 transition-colors group-hover:text-primary" />
          </a>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm">Scroll</span>
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

