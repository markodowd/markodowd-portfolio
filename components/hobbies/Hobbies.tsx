"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";
import { SectionBackground } from "@/components/shared/SectionBackground";
import { HobbiesHeader } from "./HobbiesHeader";
import { HobbyCard } from "./HobbyCard";
import { hobbies } from "./hobbies-data";

export default function Hobbies() {
  const { mousePosition, ref } = useMousePosition();

  return (
    <section
      ref={ref}
      id="hobbies"
      className="relative bg-gradient-to-br from-primary/10 via-muted/50 to-muted/40 px-4 py-20 sm:px-6 lg:px-8 overflow-hidden"
    >
      <SectionBackground mousePosition={mousePosition} opacity={0.2} />
      <div className="relative mx-auto max-w-6xl z-10">
        <HobbiesHeader />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby, index) => (
            <HobbyCard key={index} hobby={hobby} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

