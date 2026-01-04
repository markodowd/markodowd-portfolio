"use client";

interface ProjectsBackgroundProps {
  mousePosition: { x: number; y: number };
}

export function ProjectsBackground({ mousePosition }: ProjectsBackgroundProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, oklch(0.5 0.15 265 / 0.2), transparent 40%)`,
        opacity: mousePosition.x > 0 && mousePosition.y > 0 ? 1 : 0,
      }}
    />
  );
}

