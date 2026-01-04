"use client";

import { useRef, useEffect } from "react";

interface SectionBackgroundProps {
  mousePosition: { x: number; y: number };
  opacity?: number;
}

export function SectionBackground({ mousePosition, opacity = 0.15 }: SectionBackgroundProps) {
  const lastValidPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (mousePosition.x > 0 && mousePosition.y > 0) {
      lastValidPosition.current = { x: mousePosition.x, y: mousePosition.y };
    }
  }, [mousePosition]);

  const displayPosition = mousePosition.x > 0 && mousePosition.y > 0 
    ? mousePosition 
    : lastValidPosition.current;

  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
      style={{
        background: `radial-gradient(600px circle at ${displayPosition.x}px ${displayPosition.y}px, oklch(0.5 0.15 265 / ${opacity}), transparent 40%)`,
        opacity: mousePosition.x > 0 && mousePosition.y > 0 ? 1 : 0,
      }}
    />
  );
}
