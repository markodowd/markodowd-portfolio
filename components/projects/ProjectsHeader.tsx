import ScrollAnimation from "@/components/ScrollAnimation";

export function ProjectsHeader() {
  return (
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
  );
}

