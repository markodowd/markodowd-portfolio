"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <ScrollAnimation direction="up" delay={0.1 + index * 0.1}>
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary hover:shadow-lg hover:scale-105 cursor-pointer"
        aria-label={`View ${project.title} project`}
      >
        <div className="p-6">
          <div className="mb-4 flex items-start justify-between">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <div className="flex gap-2">
              <div className="rounded-lg p-2 transition-colors group-hover:bg-accent pointer-events-none">
                <ExternalLink className="h-5 w-5" />
              </div>
            </div>
          </div>
          <p className="mb-4 text-muted-foreground">
            {project.description}
          </p>
          <div className="mb-4 relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
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
      </a>
    </ScrollAnimation>
  );
}

