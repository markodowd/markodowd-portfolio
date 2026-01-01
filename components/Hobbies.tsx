"use client";

import Image from "next/image";
import { Heart, Music, BookOpen, Camera, Code2, Gamepad2 } from "lucide-react";
import { useMousePosition } from "@/hooks/use-mouse-position";
import ScrollAnimation from "@/components/ScrollAnimation";

interface Hobby {
  name: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  link?: string;
}

const hobbies: Hobby[] = [
  {
    name: "Ju-Jitsu",
    description: "I've been training in Ju-Jitsu (Japanese) under the World Ju-Jitsu Federation Ireland for almost a decade now. I'm aiming to earn a black belt soon which will represent years of dedication and discipline being recognised",
    image: "/images/hobbies/jujitsu.webp",
  },
  {
    name: "Music & Instruments",
    description: "I've been playing guitar for more than 25 years and irish banjo more recently. I play in traditional Irish sessions, which I enjoy for both the performance aspect and the social nature of the gatherings.",
    image: "/images/hobbies/banjo.webp",
    link: "https://www.youtube.com/@MarkODowd-IrishTenorBanjo",
  },
  {
    name: "Chess",
    description: "I enjoy the strategic depth and mental challenge of chess. I play on Lichess, which I use because of its open source nature. I'm open to friendly challenges!",
    image: "/images/hobbies/chess.webp",
    link: "https://lichess.org/@/modowd91",
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby, index) => (
            <ScrollAnimation key={index} direction="up" delay={0.1 + index * 0.1}>
              <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg flex flex-col h-full">
              <div className="mb-4 flex items-start gap-4 flex-1">
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
                  {hobby.link && (
                    <a
                      href={hobby.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm text-primary hover:underline"
                    >
                      {hobby.name === "Chess" ? "Lichess Profile" : "YouTube Channel"}
                    </a>
                  )}
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
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

