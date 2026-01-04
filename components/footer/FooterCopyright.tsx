"use client";

import ScrollAnimation from "@/components/ScrollAnimation";

export function FooterCopyright() {
  const currentYear = new Date().getFullYear();

  return (
    <ScrollAnimation direction="fade" delay={0.2}>
      <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
        <p>
          © {currentYear} Mark O'Dowd. All rights reserved.
        </p>
      </div>
    </ScrollAnimation>
  );
}

