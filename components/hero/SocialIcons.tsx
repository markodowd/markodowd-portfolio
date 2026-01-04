"use client";

import { Linkedin, Mail } from "lucide-react";
import { SimpleIcon } from "@/components/shared/SimpleIcon";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: "siGithub", href: "https://github.com/markodowd", label: "GitHub", isSimpleIcon: true },
  { icon: Linkedin, href: "https://www.linkedin.com/in/markodowd2/", label: "LinkedIn", isSimpleIcon: false },
  { icon: "siX", href: "https://x.com/markodowd_dev", label: "X", isSimpleIcon: true },
  { icon: "siBluesky", href: "https://bsky.app/profile/markodowd.dev", label: "Bluesky", isSimpleIcon: true },
  { icon: Mail, href: "mailto:contact@markodowd.dev", label: "Email", isSimpleIcon: false },
] as const;

export function SocialIcons() {
  return (
    <motion.div 
      className="flex items-center justify-center gap-6 pt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
    >
      {socialLinks.map(({ icon, href, label, isSimpleIcon }, index) => {
        const IconComponent = isSimpleIcon ? null : icon;
        return (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="relative rounded-full p-3 transition-all group"
            aria-label={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 0.1 }}
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
            {isSimpleIcon ? (
              <SimpleIcon 
                icon={icon as keyof typeof import("simple-icons")} 
                className="relative h-6 w-6 transition-colors group-hover:text-primary z-10" 
              />
            ) : (
              IconComponent && <IconComponent className="relative h-6 w-6 transition-colors group-hover:text-primary z-10" />
            )}
          </motion.a>
        );
      })}
    </motion.div>
  );
}

