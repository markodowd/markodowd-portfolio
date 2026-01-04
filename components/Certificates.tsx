"use client";

import Image from "next/image";
import { Award, Calendar } from "lucide-react";
import { useMousePosition } from "@/hooks/use-mouse-position";
import ScrollAnimation from "@/components/ScrollAnimation";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  credentialId: string;
  credentialUrl: string;
}

const certificates: Certificate[] = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2025",
    description: "This certification validates expertise in designing distributed systems on AWS, including compute, storage, networking, and security services. It covers architectural best practices, cost optimization, and scalability patterns for cloud-based applications.",
    image: "/images/certifications/solutions.webp",
    credentialId: "99597869b2b646e0817788459a545da4",
    credentialUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/99597869b2b646e0817788459a545da4"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "This foundational certification demonstrates understanding of AWS Cloud concepts, services, security, architecture, pricing, and support. It covers core AWS services, use cases, deployment models, and basic architectural principles of the AWS Cloud platform.",
    image: "/images/certifications/ccp.webp",
    credentialId: "5e89a2261c694a02a802e05d8331d7d9",
    credentialUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/5e89a2261c694a02a802e05d8331d7d9",
  },
];

export default function Certificates() {
  const { mousePosition, ref } = useMousePosition();

  return (
    <section
      ref={ref}
      id="certificates"
      className="relative bg-gradient-to-b from-background via-background to-muted/20 px-4 py-20 sm:px-6 lg:px-8 overflow-hidden"
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
              Certifications
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Professional certifications and courses that demonstrate my
              commitment to continuous learning and professional development.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((certificate, index) => (
            <ScrollAnimation key={index} direction="up" delay={0.1 + index * 0.1}>
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg hover:scale-105 flex flex-col cursor-pointer"
                aria-label={`View ${certificate.title} credential`}
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex flex-col flex-1">
                    <h3 className="text-xl font-semibold">
                      {certificate.title}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      {certificate.issuer}
                    </p>
                  </div>
                  <div className="rounded-lg bg-primary/10 p-3 flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="mb-4 text-sm text-muted-foreground">
                    {certificate.description}
                  </p>
                  <div className="mb-3 w-full">
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{certificate.date}</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Credential ID: {certificate.credentialId}
                  </p>
                  <div className="mt-3 text-sm font-medium text-primary pointer-events-none">
                    View Credential →
                  </div>
                </div>
              </a>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

