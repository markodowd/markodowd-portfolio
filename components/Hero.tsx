import Link from "next/link";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center"
    >
      <div className="max-w-4xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Hi, I&apos;m Mark
            </span>
          </h1>
          <h2 className="text-2xl font-semibold text-muted-foreground sm:text-3xl md:text-4xl">
            Full Stack Developer
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            I build modern web applications with a focus on user experience,
            performance, and clean code. Passionate about creating digital
            solutions that make a difference.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#projects"
            className="group flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
          >
            View My Work
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Link>
          <Link
            href="#about"
            className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-all hover:scale-105 hover:bg-accent"
          >
            Learn More
          </Link>
        </div>

        <div className="flex items-center justify-center gap-6 pt-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 transition-all hover:scale-110 hover:bg-accent"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 transition-all hover:scale-110 hover:bg-accent"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="rounded-full p-3 transition-all hover:scale-110 hover:bg-accent"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

