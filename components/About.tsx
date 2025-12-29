"use client";

import { Code, Database, Globe, Smartphone } from "lucide-react";
import { useMousePosition } from "@/hooks/use-mouse-position";

export default function About() {
  const { mousePosition, ref } = useMousePosition();
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Designing scalable server-side applications with Node.js, Express, and various database technologies.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Creating cross-platform mobile applications with React Native and Flutter.",
    },
    {
      icon: Globe,
      title: "Full Stack Solutions",
      description:
        "End-to-end development from concept to deployment, ensuring seamless integration across all layers.",
    },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="relative bg-gradient-to-b from-background via-background to-muted/30 px-4 py-20 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, oklch(0.5 0.15 265 / 0.15), transparent 40%)`,
          opacity: mousePosition.x > 0 && mousePosition.y > 0 ? 1 : 0,
        }}
      />
      <div className="relative mx-auto max-w-6xl z-10">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            About Me
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            I&apos;m a passionate developer with a love for creating elegant
            solutions to complex problems. With experience in both frontend and
            backend technologies, I bring a holistic approach to web development.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Background</h3>
            <p className="text-muted-foreground">
              I started my journey in web development with a curiosity about how
              things work on the internet. Over the years, I&apos;ve honed my
              skills in various technologies and frameworks, always staying
              up-to-date with the latest trends and best practices.
            </p>
            <p className="text-muted-foreground">
              My approach combines technical expertise with a focus on user
              experience, ensuring that every project I work on is both
              functional and delightful to use.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">What I Do</h3>
            <p className="text-muted-foreground">
              I specialize in building modern web applications that are fast,
              scalable, and maintainable. Whether it&apos;s a simple landing
              page or a complex enterprise application, I bring the same level
              of dedication and attention to detail.
            </p>
            <p className="text-muted-foreground">
              When I&apos;m not coding, I enjoy contributing to open-source
              projects, writing technical articles, and exploring new
              technologies.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <skill.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

