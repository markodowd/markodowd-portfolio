"use client";

export function ContactFooter() {
  return (
    <div className="mt-6 text-center text-sm text-muted-foreground">
      <p>
        Prefer direct contact?{" "}
        <a
          href="mailto:contact@markodowd.dev"
          className="text-primary hover:underline font-medium"
        >
          contact@markodowd.dev
        </a>
      </p>
    </div>
  );
}

