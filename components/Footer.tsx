"use client";

import { Github, Linkedin, Mail, Twitter, MessageSquare } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#hobbies", label: "Hobbies" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/markodowd", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/markodowd2/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://x.com/markodowd_dev", icon: Twitter, label: "X" },
    { href: "https://bsky.app/profile/markodowd.dev", icon: MessageSquare, label: "Bluesky" },
    { href: "mailto:contact@markodowd.dev", icon: Mail, label: "Email" },
  ];

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <ScrollAnimation direction="up">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Mark O'Dowd Portfolio</h3>
              <p className="text-sm text-muted-foreground">
                Full-stack developer passionate about creating amazing web
                experiences.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Navigation</h3>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Connect</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-2 transition-colors hover:bg-accent"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="fade" delay={0.2}>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>
              © {currentYear} Mark O'Dowd. All rights reserved.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  );
}

