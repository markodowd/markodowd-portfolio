import ScrollAnimation from "@/components/shared/ScrollAnimation";

export function BlogHeader() {
  return (
    <ScrollAnimation direction="up">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Blog & Articles
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Technical writing, tutorials, and thought pieces on web development,
          cloud architecture, and software engineering.
        </p>
      </div>
    </ScrollAnimation>
  );
}


