"use client";

import Image from "next/image";
import { useMousePosition } from "@/hooks/use-mouse-position";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function About() {
  const { mousePosition, ref } = useMousePosition();

  return (
    <section
      ref={ref}
      id="about"
      className="relative bg-gradient-to-b from-background via-background to-muted/30 px-4 py-20 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, oklch(0.5 0.15 265 / 0.15), transparent 40%)`,
          opacity: mousePosition.x > 0 && mousePosition.y > 0 ? 1 : 0,
        }}
      />
      <div className="relative mx-auto max-w-6xl z-10">
        <ScrollAnimation direction="up">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              About Me
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <ScrollAnimation direction="right" delay={0.1}>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I&apos;m a full-stack software developer with experience building modern web
                applications across the entire stack from polished, accessible user interfaces
                to backend APIs, databases, and cloud infrastructure on AWS. I approach problems
                holistically, understanding how each layer of a system fits together to make
                thoughtful architectural decisions.
              </p>
              <p className="text-muted-foreground">
                I care deeply about code quality, performance, and long-term maintainability,
                preferring clear, pragmatic solutions over unnecessary complexity. My focus is
                on building software that is fast, reliable, and easy to reason about, whether
                that&apos;s a small product feature or a large, scalable system.
              </p>
              <p className="text-muted-foreground">
                When working on projects, I value clear communication, ownership, and turning
                ambiguous requirements into well-structured, dependable solutions. I enjoy
                collaborating closely with designers, stakeholders, and other engineers to
                deliver meaningful results incrementally, with a strong emphasis on user
                experience.
              </p>
              <p className="text-muted-foreground">
                Outside of development, I enjoy exploring interests beyond code (Hobbies &amp; Interests below) which helps me stay
                curious, balanced, and continuously improving as both a developer and a
                problem-solver.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="left" delay={0.2}>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/user/me.webp"
                alt="Mark"
                fill
                className="object-cover"
                priority
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

