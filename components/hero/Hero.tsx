"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";
import { motion } from "framer-motion";
import { HeroBackground } from "./HeroBackground";
import { HeroActions } from "./HeroActions";
import { SocialIcons } from "./SocialIcons";
import { ScrollIndicator } from "./ScrollIndicator";

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
      <HeroBackground mousePosition={mousePosition} />
      
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

          {/* Credentials as simple text */}
          <motion.div
            className="flex items-center justify-center gap-2 flex-wrap text-base sm:text-lg md:text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span>Full-stack Developer</span>
            <span className="text-muted-foreground/50">•</span>
            <span>AWS Certified</span>
            <span className="text-muted-foreground/50">•</span>
            <span>Based in Ireland</span>
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

        <HeroActions />

        <SocialIcons />
      </div>

      <ScrollIndicator />
    </section>
  );
}

