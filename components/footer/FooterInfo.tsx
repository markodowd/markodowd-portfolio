"use client";

import { siteConfig } from "@/lib/metadata";

export function FooterInfo() {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">{siteConfig.portfolioTitle}</h3>
      <p className="text-sm text-muted-foreground">
        {siteConfig.jobTitle} passionate about creating amazing web
        experiences.
      </p>
    </div>
  );
}

