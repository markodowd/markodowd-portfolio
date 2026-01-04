"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";
import { SectionBackground } from "@/components/shared/SectionBackground";
import { CertificatesHeader } from "./CertificatesHeader";
import { CertificateCard } from "./CertificateCard";

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
      <SectionBackground mousePosition={mousePosition} opacity={0.15} />
      <div className="relative mx-auto max-w-6xl z-10">
        <CertificatesHeader />
        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((certificate, index) => (
            <CertificateCard key={index} certificate={certificate} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

