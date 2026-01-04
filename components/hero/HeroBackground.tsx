"use client";

interface HeroBackgroundProps {
  mousePosition: { x: number; y: number };
}

export function HeroBackground({ mousePosition }: HeroBackgroundProps) {
  return (
    <>
      {/* Animated gradient background - base layer */}
      <div
        className="pointer-events-none absolute inset-0 animate-gradient-shift"
        style={{
          background: `linear-gradient(135deg, oklch(var(--background)) 0%, oklch(var(--primary) / 0.12) 50%, oklch(var(--background)) 100%)`,
          backgroundSize: '200% 200%',
        }}
      />
      
      {/* Animated radial gradient orbs */}
      <div
        className="pointer-events-none absolute inset-0 animate-gradient-move"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, oklch(0.5 0.15 265 / 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, oklch(0.5 0.15 200 / 0.25) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, oklch(0.5 0.15 300 / 0.2) 0%, transparent 60%)
          `,
          backgroundSize: '200% 200%',
        }}
      />
      
      {/* Rotating conic gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50 animate-gradient-rotate"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, oklch(var(--primary) / 0.2) 0deg, transparent 90deg, oklch(var(--primary) / 0.2) 180deg, transparent 270deg, oklch(var(--primary) / 0.2) 360deg)`,
        }}
      />
      
      {/* Mouse-following radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, oklch(0.5 0.15 265 / 0.2), transparent 40%)`,
          opacity: mousePosition.x > 0 && mousePosition.y > 0 ? 1 : 0,
        }}
      />
    </>
  );
}

