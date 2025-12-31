"use client";

import Image from "next/image";
import { Heart, Music, BookOpen, Camera, Code2, Gamepad2 } from "lucide-react";
import { useMousePosition } from "@/hooks/use-mouse-position";

interface Hobby {
  name: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
}

const hobbies: Hobby[] = [
  {
    name: "Jujitsu",
    description: "Training in Japanese Jiu-Jitsu with the World Jiu-Jitsu Federation Ireland (WJJF) to stay active and disciplined.",
    image: "/images/hobbies/jujitsu.webp",
  },
  {
    name: "Music & Instruments",
    description: "Playing guitar and discovering new artists across various genres.",
    image: "/images/hobbies/banjo.webp",
  },
  {
    name: "Chess",
    description: "Fascinated by tech books, science fiction, and personal development.",
    image: "/images/hobbies/chess.webp",
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
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg flex flex-col"
            >
              <div className="mb-4 flex items-start gap-4 flex-grow">
                {hobby.icon && (
                  <div className="rounded-lg bg-primary/10 p-3">
                    {hobby.icon}
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-semibold">{hobby.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {hobby.description}
                  </p>
                </div>
              </div>
              {hobby.image && (
                <div className="relative w-full h-64 rounded-lg overflow-hidden bg-muted/50">
                  <Image
                    src={hobby.image}
                    alt={hobby.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

