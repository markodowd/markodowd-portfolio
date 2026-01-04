"use client";

import ScrollAnimation from "@/components/shared/ScrollAnimation";

export function AboutContent() {
  return (
    <ScrollAnimation direction="right" delay={0.1}>
      <div className="space-y-4">
        <p className="text-muted-foreground">
          I&apos;m a full-stack software developer from Ireland with experience building modern web
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
  );
}

