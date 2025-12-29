"use client";

import { Heart, Music, BookOpen, Camera, Code2, Gamepad2 } from "lucide-react";
import { useMousePosition } from "@/hooks/use-mouse-position";

interface Hobby {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const hobbies: Hobby[] = [
  {
    name: "Coding",
    description: "Exploring new technologies and building side projects in my spare time.",
    icon: <Code2 className="h-6 w-6 text-primary" />,
  },
  {
    name: "Music",
    description: "Playing guitar and discovering new artists across various genres.",
    icon: <Music className="h-6 w-6 text-primary" />,
  },
  {
    name: "Reading",
    description: "Fascinated by tech books, science fiction, and personal development.",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
];

export default function Hobbies() {
  const { mousePosition, ref } = useMousePosition();

  return (
    <section
      ref={ref}
      id="hobbies"
      className="relative bg-gradient-to-br from-primary/10 via-muted/50 to-muted/40 px-4 py-20 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, oklch(0.5 0.15 265 / 0.2), transparent 40%)`,
          opacity: mousePosition.x > 0 && mousePosition.y > 0 ? 1 : 0,
        }}
      />
      <div className="relative mx-auto max-w-6xl z-10">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Hobbies & Interests
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Things I enjoy doing outside of work that keep me balanced and
            inspired.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
            >
              <div className="mb-4 flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  {hobby.icon}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-semibold">{hobby.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {hobby.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

