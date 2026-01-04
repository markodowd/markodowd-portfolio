import ScrollAnimation from "@/components/shared/ScrollAnimation";

export function SkillsHeader() {
  return (
    <ScrollAnimation direction="up">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Skills & Technologies
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          As a full-stack developer, I&apos;m constantly experimenting with new tools, but these are the core technologies I focus on to build modern web applications and deliver high-quality solutions.
        </p>
      </div>
    </ScrollAnimation>
  );
}

