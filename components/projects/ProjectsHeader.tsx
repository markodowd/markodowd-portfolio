import ScrollAnimation from "@/components/shared/ScrollAnimation";

export function ProjectsHeader() {
  return (
    <ScrollAnimation direction="up">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          My Work
        </h2>
      </div>
    </ScrollAnimation>
  );
}

