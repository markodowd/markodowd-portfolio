"use client";

import Image from "next/image";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { SectionBackground } from "@/components/shared/SectionBackground";
import { WorkHeader } from "./WorkHeader";

export default function Work() {
  const { mousePosition, ref } = useMousePosition();

  return (
    <section
      ref={ref}
      id="work"
      className="relative bg-gradient-to-br from-muted/50 via-muted/40 to-primary/10 px-4 py-20 sm:px-6 lg:px-8 overflow-hidden"
    >
      <SectionBackground mousePosition={mousePosition} opacity={0.2} />
      <div className="relative mx-auto max-w-6xl z-10">
        <WorkHeader />
        <p className="mb-10 text-center text-muted-foreground">
          I am the founder and lead engineer at{" "}
          <a
            href="https://www.emeraldsoftware.ie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            Emerald Software
          </a>
          , an Irish web software company.{" "}
          <br />
          We specialise in building responsive web applications, providing expert cloud architecture, and delivering tailored software solutions.
        </p>
        <a
          href="https://www.emeraldsoftware.ie"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full overflow-hidden rounded-xl"
        >
          <Image
            src="/images/work/emerald.webp"
            alt="Emerald Software"
            width={1456}
            height={816}
            className="w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </a>
      </div>
    </section>
  );
}
