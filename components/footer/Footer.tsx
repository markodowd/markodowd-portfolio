"use client";

import ScrollAnimation from "@/components/shared/ScrollAnimation";
import { FooterInfo } from "./FooterInfo";
import { FooterNavigation } from "./FooterNavigation";
import { FooterSocial } from "./FooterSocial";
import { FooterCopyright } from "./FooterCopyright";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <ScrollAnimation direction="up">
          <div className="grid gap-8 md:grid-cols-3">
            <FooterInfo />
            <FooterNavigation />
            <FooterSocial />
          </div>
        </ScrollAnimation>

        <FooterCopyright />
      </div>
    </footer>
  );
}

