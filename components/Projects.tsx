"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useMousePosition } from "@/hooks/use-mouse-position";
import ScrollAnimation from "@/components/ScrollAnimation";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Fight or Flight Studio",
    description:
      "A custom portfolio website built for a Manchester-based creative studio. Developed using a modern tech stack and deployed to AWS with staging and production environments. Integrated Contentful CMS for content management and configured Cloudflare DNS for enhanced performance and security.",
    technologies: ["Next", "React", "TypeScript", "Contentful CMS", "AWS"],
    liveUrl: "https://www.fightorflight.studio",
    image: "/images/projects/forf.webp",
  },
  {
    title: "Irish Trad",
    description:
      "A fullstack web application designed for musicians learning traditional Irish instruments. Features include interactive sheet music, ear and sight training modules, along with practice tools such as a chromatic tuner and metronome. A passion project that demonstrates my dedication to creating meaningful, community-focused applications.",
    technologies: ["Next", "React", "TypeScript", "Django", "AWS"],
    liveUrl: "https://www.irishtrad.ie",
    image: "/images/projects/irishtrad.webp",
  },
];

export default function Projects() {
  const { mousePosition, ref } = useMousePosition();

  return (
    <section
      ref={ref}
      id="projects"
      className="relative bg-gradient-to-br from-muted/50 via-muted/40 to-primary/10 px-4 py-20 sm:px-6 lg:px-8 overflow-hidden"
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
              Featured Projects
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A collection of projects I&apos;ve worked on, showcasing my skills
              and experience in web development.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollAnimation key={index} direction="up" delay={0.1 + index * 0.1}>
              <div className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-xl">
              <div className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg p-2 transition-colors hover:bg-accent"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mb-4 text-muted-foreground">
                  {project.description}
                </p>
                {project.image && (
                  <div className="mb-4 relative w-full aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

