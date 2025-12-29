import { Award, Calendar } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
}

const certificates: Certificate[] = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-123456",
    credentialUrl: "https://example.com",
  },
  {
    title: "React Advanced Patterns",
    issuer: "Frontend Masters",
    date: "2023",
    credentialId: "FEM-789012",
    credentialUrl: "https://example.com",
  },
  {
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialId: "FCC-345678",
    credentialUrl: "https://example.com",
  },
  {
    title: "TypeScript Mastery",
    issuer: "Udemy",
    date: "2022",
    credentialId: "UD-901234",
    credentialUrl: "https://example.com",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Certifications
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Professional certifications and courses that demonstrate my
            commitment to continuous learning and professional development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
            >
              <div className="mb-4 flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-xl font-semibold">
                    {certificate.title}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-muted-foreground">
                    {certificate.issuer}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{certificate.date}</span>
                  </div>
                  {certificate.credentialId && (
                    <p className="mt-2 text-xs text-muted-foreground">
                      Credential ID: {certificate.credentialId}
                    </p>
                  )}
                  {certificate.credentialUrl && (
                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
                    >
                      View Credential →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

