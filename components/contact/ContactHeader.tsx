"use client";

import ScrollAnimation from "@/components/shared/ScrollAnimation";

export function ContactHeader() {
  return (
    <ScrollAnimation direction="up">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Get In Touch
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>
    </ScrollAnimation>
  );
}

