"use client";

import Link from "next/link";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useMousePosition } from "@/hooks/use-mouse-position";

export default function Hero() {
  const { mousePosition, ref } = useMousePosition();

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center overflow-hidden"
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
      <div className="relative max-w-4xl space-y-8 z-10">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Mark O'Dowd
            </span>
          </h1>
          <h2 className="text-4xl font-semibold text-muted-foreground sm:text-3xl md:text-4xl">
            Software Engineer
          </h2>
          <h3 className="text-2xl font-semibold text-muted-foreground sm:text-2xl md:text-3xl">
            Fullstack Developer | AWS Certified
          </h3>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            I build modern web applications with a focus on user experience,
            performance, and clean code. Passionate about creating digital
            solutions that make a difference.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#projects"
            className="group flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
          >
            View My Work
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Link>
          <Link
            href="#about"
            className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-all hover:scale-105 hover:bg-accent"
          >
            Learn More
          </Link>
        </div>

        <div className="flex items-center justify-center gap-6 pt-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 transition-all hover:scale-110 hover:bg-accent"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 transition-all hover:scale-110 hover:bg-accent"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="rounded-full p-3 transition-all hover:scale-110 hover:bg-accent"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

