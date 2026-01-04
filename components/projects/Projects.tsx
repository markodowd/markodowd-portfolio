"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";
import { ProjectsBackground } from "./ProjectsBackground";
import { ProjectsHeader } from "./ProjectsHeader";
import { ProjectCard } from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  image: string;
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
      "A full-stack web application designed for musicians learning traditional Irish instruments. Features include interactive sheet music, ear and sight training modules, along with practice tools such as a chromatic tuner and metronome. A passion project that demonstrates my dedication to creating meaningful, community-focused applications.",
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
      <ProjectsBackground mousePosition={mousePosition} />
      <div className="relative mx-auto max-w-6xl z-10">
        <ProjectsHeader />
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

