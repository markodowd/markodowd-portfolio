"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";
import { SectionBackground } from "@/components/shared/SectionBackground";
import { ProjectsHeader } from "./ProjectsHeader";

export default function Projects() {
  const { mousePosition, ref } = useMousePosition();

  return (
    <section
      ref={ref}
      id="projects"
      className="relative bg-gradient-to-br from-muted/50 via-muted/40 to-primary/10 px-4 py-20 sm:px-6 lg:px-8 overflow-hidden"
    >
      <SectionBackground mousePosition={mousePosition} opacity={0.2} />
      <div className="relative mx-auto max-w-6xl z-10">
        <ProjectsHeader />
        <div className="flex items-center justify-center min-h-[200px] rounded-lg border border-dashed border-border text-muted-foreground">
          Coming soon
        </div>
      </div>
    </section>
  );
}
