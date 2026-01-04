"use client";

import Image from "next/image";
import ScrollAnimation from "@/components/shared/ScrollAnimation";
import { Hobby } from "./hobbies-data";

interface HobbyCardProps {
  hobby: Hobby;
  index: number;
}

export function HobbyCard({ hobby, index }: HobbyCardProps) {
  return (
    <ScrollAnimation direction="up" delay={0.1 + index * 0.1}>
      <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg hover:scale-105 flex flex-col h-full">
        <div className="mb-4 flex-1">
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
        <div className="relative w-full h-64 rounded-lg overflow-hidden bg-muted/50">
          <Image
            src={hobby.image}
            alt={hobby.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </ScrollAnimation>
  );
}

