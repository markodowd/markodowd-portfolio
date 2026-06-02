import Image from "next/image";

export default function Talk() {
  return (
    <section id="talk" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">Tech Talks</h2>
        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="text-center lg:text-left">
            <p className="text-muted-foreground">
              I&apos;m incredibly passionate about teaching and mentoring, which is exactly what drives me to step away from the terminal and share engineering insights on stage.
            </p>
            <h4 className="mt-6 text-lg font-semibold">Some of my tech talks</h4>
            <ul className="mt-3 flex flex-col items-center lg:items-start gap-2">
              <li>
                <a
                  href="https://github.com/markodowd/2026-30-05-data-engineering-apache-spark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
                >
                  Add a Spark to Your Data Manipulation
                </a>
              </li>
            </ul>
          </div>
          <div className="relative w-full aspect-[917/1018] overflow-hidden rounded-xl">
            <Image
              src="/images/talk/talk.webp"
              alt="Mark presenting a tech talk on Apache Spark"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
