"use client";

import ScrollAnimation from "@/components/shared/ScrollAnimation";

export function HobbiesHeader() {
  return (
    <ScrollAnimation direction="up">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Hobbies & Interests
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Things I enjoy doing outside of work that keep me balanced and
          inspired.
        </p>
      </div>
    </ScrollAnimation>
  );
}

