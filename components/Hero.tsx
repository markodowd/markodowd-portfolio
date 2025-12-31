"use client";

import { ArrowDown, Github, Linkedin, Mail, Twitter, MessageSquare, Sparkles } from "lucide-react";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { motion } from "framer-motion";

export default function Hero() {
  const { mousePosition, ref } = useMousePosition();

  // Typing animation variants for subtitle
  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
  };

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
      
      {/* Enhanced glow effect behind content */}
      <div className="relative max-w-4xl space-y-8 z-10 before:absolute before:inset-0 before:rounded-3xl before:bg-primary/5 before:blur-3xl before:-z-10">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 1.11, 0.81, 0.99] }}
        >
          {/* Enhanced name with better typography */}
          <motion.h1 
            className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
          >
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-foreground via-primary via-50% to-foreground/70 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift-text">
                Mark O'Dowd
              </span>
              {/* Animated underline */}
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              />
            </span>
          </motion.h1>

          {/* Enhanced subtitle with typing effect */}
          <motion.h2 
            className="text-3xl font-semibold text-muted-foreground sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              variants={subtitleVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {"Software Engineer".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
          </motion.h2>

          {/* Badge/tag for credentials */}
          <motion.div
            className="flex items-center justify-center gap-3 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.span
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "oklch(var(--primary) / 0.2)" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Fullstack Developer
            </motion.span>
            <motion.span
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "oklch(var(--primary) / 0.2)" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              AWS Certified
            </motion.span>
          </motion.div>

          {/* Enhanced description with better animation */}
          <motion.p 
            className="mx-auto max-w-2xl text-lg text-muted-foreground/90 sm:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            I build{" "}
            <span className="relative inline-block font-semibold text-foreground">
              modern web applications
            </span>
            {" "}with a focus on user experience,
            performance, and clean code. Passionate about creating digital
            solutions that make a difference.
          </motion.p>
        </motion.div>

        {/* Enhanced buttons with glassmorphism */}
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

        {/* Enhanced social icons with better hover effects */}
        <motion.div 
          className="flex items-center justify-center gap-6 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/markodowd2/", label: "LinkedIn" },
            { icon: Twitter, href: "https://x.com/markodowd_dev", label: "X" },
            { icon: MessageSquare, href: "https://bsky.app/profile/markodowd.dev", label: "Bluesky" },
            { icon: Mail, href: "mailto:contact@markodowd.dev", label: "Email" },
          ].map(({ icon: Icon, href, label }, index) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="relative rounded-full p-3 transition-all group"
              aria-label={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
              <Icon className="relative h-6 w-6 transition-colors group-hover:text-primary z-10" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
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
    </section>
  );
}

