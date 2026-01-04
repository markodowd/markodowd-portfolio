"use client";

import ScrollAnimation from "@/components/ScrollAnimation";

export function CertificatesHeader() {
  return (
    <ScrollAnimation direction="up">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Certifications
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Professional certifications and courses that demonstrate my
          commitment to continuous learning and professional development.
        </p>
      </div>
    </ScrollAnimation>
  );
}

