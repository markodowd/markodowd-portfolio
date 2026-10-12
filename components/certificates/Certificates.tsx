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
    description: "Earners of this certification have a comprehensive understanding of AWS services and technologies. They demonstrated the ability to build secure and robust solutions using architectural design principles based on customer requirements. Badge owners are able to strategically design well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant.",
    image: "/images/certifications/solutions.webp",
    credentialId: "99597869b2b646e0817788459a545da4",
    credentialUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/99597869b2b646e0817788459a545da4"
  },
  {
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    date: "2026",
    description: "Earners of this badge understand AI, ML, and generative AI concepts, methods, and strategies in general and on AWS. They can determine the correct types of AI/ML technologies to apply to specific use cases and know how to use AI, ML, and generative AI technologies responsibly. They are familiar with the AWS Global Infrastructure, core AWS services and use cases, AWS service pricing models, and the AWS shared responsibility model for security and compliance in the AWS Cloud.",
    image: "/images/certifications/ai.webp",
    credentialId: "81e1a61e008945e08cf50d4654b3fe2b",
    credentialUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/81e1a61e008945e08cf50d4654b3fe2b",
  },
  {
    title: "AWS Certified AI Business Strategist",
    issuer: "Amazon Web Services",
    date: "2026",
    description: "Earners of this badge validate their ability to translate AI capabilities into business outcomes, establish responsible AI practices, and drive AI adoption at scale. They can evaluate AI investments, build credible business cases, apply governance frameworks, and assess organizational readiness to scale AI initiatives. They understand how to apply responsible AI principles, manage enterprise AI risk, and design adoption strategies that move AI from experimentation to production.",
    image: "/images/certifications/ai-business.webp",
    credentialId: "a2e2c402a17a43759c30aa446e8ba851",
    credentialUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/a2e2c402a17a43759c30aa446e8ba851",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.",
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
          {certificates.map((certificate, index) => {
            const isLastOdd =
              index === certificates.length - 1 && certificates.length % 2 === 1;
            return (
              <div
                key={index}
                className={
                  isLastOdd
                    ? "md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)]"
                    : undefined
                }
              >
                <CertificateCard certificate={certificate} index={index} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

