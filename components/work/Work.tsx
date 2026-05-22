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
        <div className="mb-10 space-y-4 text-center text-muted-foreground">
          <p>
            I am the founder and lead engineer at{" "}
            <a
              href="https://www.emeraldsoftware.ie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              Emerald Software
            </a>
            , an Irish web software company.
          </p>
          <p>
            We specialise in building responsive web applications, providing expert cloud architecture, and delivering tailored software solutions, including:
          </p>
        </div>
        <ul className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-muted-foreground">
          {[
            "Full-Stack SaaS & Web Application MVP Development",
            "High-Performance Headless CMS & E-commerce Sites",
            "API Development & System Integration",
            "Cloud Infrastructure & DevOps Consulting",
          ].map((service) => (
            <li key={service} className="flex items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-3">
              <span className="size-1.5 rounded-full bg-primary shrink-0" />
              {service}
            </li>
          ))}
        </ul>
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
