"use client";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#ambassador", label: "Ambassador" },
  { href: "#certificates", label: "Certificates" },
  { href: "#blog", label: "Blog" },
  { href: "#hobbies", label: "Hobbies" },
  { href: "#contact", label: "Contact" },
];

export function FooterNavigation() {
  return (
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
  );
}

