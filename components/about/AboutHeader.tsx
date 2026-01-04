"use client";

import ScrollAnimation from "@/components/ScrollAnimation";

export function AboutHeader() {
  return (
    <ScrollAnimation direction="up">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          About Me
        </h2>
      </div>
    </ScrollAnimation>
  );
}

