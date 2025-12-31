"use client";

import Image from "next/image";
import { useMousePosition } from "@/hooks/use-mouse-position";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function About() {
  const { mousePosition, ref } = useMousePosition();

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
        <ScrollAnimation direction="up">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              About Me
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <ScrollAnimation direction="right" delay={0.1}>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I&apos;m a passionate developer with a love for creating elegant
                solutions to complex problems. With experience in both frontend and
                backend technologies, I bring a holistic approach to web development.
              </p>
              <p className="text-muted-foreground">
                I started my journey in web development with a curiosity about how
                things work on the internet. Over the years, I&apos;ve honed my
                skills in various technologies and frameworks, always staying
                up-to-date with the latest trends and best practices.
              </p>
              <p className="text-muted-foreground">
                My approach combines technical expertise with a focus on user
                experience, ensuring that every project I work on is both
                functional and delightful to use. I specialize in building modern web applications that are fast,
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
          </ScrollAnimation>
          <ScrollAnimation direction="left" delay={0.2}>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/user/me.webp"
                alt="Mark"
                fill
                className="object-cover"
                priority
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

