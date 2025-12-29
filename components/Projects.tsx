import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with location-based forecasts and interactive maps.",
    technologies: ["React", "Chart.js", "OpenWeather API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Social Media Analytics",
    description:
      "Analytics platform for tracking social media performance with detailed insights and reports.",
    technologies: ["Next.js", "Python", "Django", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-muted/50 via-muted/40 to-primary/10 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A collection of projects I&apos;ve worked on, showcasing my skills
            and experience in web development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-xl"
            >
              <div className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg p-2 transition-colors hover:bg-accent"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
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
          ))}
        </div>
      </div>
    </section>
  );
}

