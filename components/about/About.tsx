"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";
import { AboutBackground } from "./AboutBackground";
import { AboutHeader } from "./AboutHeader";
import { AboutContent } from "./AboutContent";
import { AboutImage } from "./AboutImage";

export default function About() {
  const { mousePosition, ref } = useMousePosition();

  return (
    <section
      ref={ref}
      id="about"
      className="relative bg-gradient-to-b from-background via-background to-muted/30 px-4 py-20 sm:px-6 lg:px-8 overflow-hidden"
    >
      <AboutBackground mousePosition={mousePosition} />
      <div className="relative mx-auto max-w-6xl z-10">
        <AboutHeader />
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <AboutContent />
          <AboutImage />
        </div>
      </div>
    </section>
  );
}

