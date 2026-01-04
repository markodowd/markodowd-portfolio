"use client";

import Image from "next/image";
import { Award, Calendar } from "lucide-react";
import ScrollAnimation from "@/components/shared/ScrollAnimation";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  credentialId: string;
  credentialUrl: string;
}

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

export function CertificateCard({ certificate, index }: CertificateCardProps) {
  return (
    <ScrollAnimation direction="up" delay={0.1 + index * 0.1}>
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
  );
}

