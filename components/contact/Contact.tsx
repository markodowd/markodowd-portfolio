"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";
import ScrollAnimation from "@/components/shared/ScrollAnimation";
import { SectionBackground } from "@/components/shared/SectionBackground";
import { ContactHeader } from "./ContactHeader";
import { ContactForm } from "./ContactForm";
import { ContactFooter } from "./ContactFooter";

export default function Contact() {
  const { mousePosition, ref } = useMousePosition();

  return (
    <section
      ref={ref}
      id="contact"
      className="relative bg-gradient-to-b from-background via-muted/20 to-background px-4 py-20 sm:px-6 lg:px-8 overflow-hidden"
    >
      <SectionBackground mousePosition={mousePosition} opacity={0.15} />
      <div className="relative mx-auto max-w-2xl z-10">
        <ContactHeader />

        <ScrollAnimation direction="up" delay={0.1}>
          <div className="rounded-lg border border-border bg-card p-8 shadow-lg">
            <ContactForm />
            <ContactFooter />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

