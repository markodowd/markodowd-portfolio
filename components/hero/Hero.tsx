"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";
import { motion } from "framer-motion";
import Image from "next/image";
import { HeroBackground } from "./HeroBackground";
import { HeroActions } from "./HeroActions";
import { SocialIcons } from "./SocialIcons";
import { ScrollIndicator } from "./ScrollIndicator";
import { siteConfig } from "@/lib/metadata";
import { SimpleIcon } from "@/components/shared/SimpleIcon";

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
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 sm:pt-40 pb-32 text-center overflow-hidden"
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
          {/* Logo */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100 }}
          >
            <Image
              src="/images/logo/logo-dark.webp"
              alt="Logo"
              width={400}
              height={400}
              className="dark:hidden w-48 sm:w-64 md:w-80 lg:w-[400px] h-auto"
              priority
            />
            <Image
              src="/images/logo/logo-light.webp"
              alt="Logo"
              width={400}
              height={400}
              className="hidden dark:block w-48 sm:w-64 md:w-80 lg:w-[400px] h-auto"
              priority
            />
          </motion.div>

          {/* Enhanced name with better typography */}
          <motion.h1
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-foreground via-primary via-50% to-foreground/70 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift-text">
                {siteConfig.author.name}
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
            <span>{siteConfig.credentials.jobTitle}</span>
            <span className="text-muted-foreground/50">•</span>
            <span>{siteConfig.credentials.awsCertified}</span>
            <span className="text-muted-foreground/50">•</span>
            <span>{siteConfig.credentials.location}</span>
          </motion.div>

          {/* Tech stack icons */}
          <motion.div
            className="flex items-center justify-center gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            {[
              { icon: "siTypescript" as const, label: "TypeScript" },
              { icon: "siPython" as const, label: "Python" },
              { icon: "siRust" as const, label: "Rust" },
            ].map(({ icon, label }, index) => (
              <motion.div
                key={label}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.75 + index * 0.12, type: "spring", stiffness: 120 }}
                whileHover={{ scale: 1.15, y: -4 }}
              >
                <SimpleIcon
                  icon={icon}
                  className="h-14 w-14 text-foreground"
                />
                <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced description with better animation */}
          <motion.div
            className="mx-auto max-w-2xl space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <p className="text-lg text-muted-foreground/90 sm:text-xl leading-relaxed">
              I partner with startups and small to medium-sized enterprises (SMEs)
              to build{" "}
              <span className="relative inline font-semibold text-foreground">
                modern, scalable web applications
              </span>
              .
            </p>
            <p className="text-lg text-muted-foreground/90 sm:text-xl leading-relaxed">
              My focus is on delivering high-performance digital products that
              bridge the gap between seamless user experience and clean,
              maintainable code.
            </p>
          </motion.div>
        </motion.div>

        <HeroActions />

        <SocialIcons />
      </div>

      <ScrollIndicator />
    </section>
  );
}

