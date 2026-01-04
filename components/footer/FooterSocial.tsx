"use client";

import { Linkedin, Mail } from "lucide-react";
import { SimpleIcon } from "@/components/shared/SimpleIcon";

const socialLinks = [
  { href: "https://github.com/markodowd", icon: "siGithub", label: "GitHub", isSimpleIcon: true },
  { href: "https://www.linkedin.com/in/markodowd2/", icon: Linkedin, label: "LinkedIn", isSimpleIcon: false },
  { href: "https://x.com/markodowd_dev", icon: "siX", label: "X", isSimpleIcon: true },
  { href: "https://bsky.app/profile/markodowd.dev", icon: "siBluesky", label: "Bluesky", isSimpleIcon: true },
  { href: "mailto:contact@markodowd.dev", icon: Mail, label: "Email", isSimpleIcon: false },
];

export function FooterSocial() {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">Connect</h3>
      <div className="flex gap-4">
        {socialLinks.map((social) => {
          const IconComponent = social.isSimpleIcon ? null : social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="rounded-lg p-2 transition-colors hover:bg-accent"
              aria-label={social.label}
            >
              {social.isSimpleIcon ? (
                <SimpleIcon 
                  icon={social.icon as keyof typeof import("simple-icons")} 
                  className="h-5 w-5" 
                />
              ) : (
                IconComponent && <IconComponent className="h-5 w-5" />
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}

