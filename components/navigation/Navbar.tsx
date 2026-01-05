"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/theme/ThemeToggle";

type NavLink = {
  href: string;
  label: string;
  isHash: boolean;
  isHome?: boolean;
};

const baseNavLinks: NavLink[] = [
  { href: "/", label: "Home", isHash: false, isHome: true },
  { href: "#about", label: "About", isHash: true, isHome: false },
  { href: "#projects", label: "Projects", isHash: true, isHome: false },
  { href: "#skills", label: "Skills", isHash: true, isHome: false },
  { href: "#certificates", label: "Certificates", isHash: true, isHome: false },
  { href: "#hobbies", label: "Hobbies", isHash: true, isHome: false },
  { href: "#contact", label: "Contact", isHash: true, isHome: false },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Convert all nav links to point to home page sections when not on home page
  const navLinks: NavLink[] = baseNavLinks.map((link) => {
    // Home link always stays as "/"
    if (link.isHome) {
      return link;
    }
    
    if (isHomePage) {
      return link; // Keep hash links on home page
    } else {
      // Convert to /#section format when on other pages
      return { ...link, href: `/${link.href}`, isHash: false, isHome: false };
    }
  });
  
  // Insert Blog link in the right position
  const blogLink: NavLink = isHomePage
    ? { href: "#blog", label: "Blog", isHash: true, isHome: false }
    : { href: "/#blog", label: "Blog", isHash: false, isHome: false };
  
  const finalNavLinks: NavLink[] = [
    ...navLinks.slice(0, 6),
    blogLink,
    ...navLinks.slice(6),
  ];

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["hero", "about", "projects", "skills", "certificates", "hobbies", "blog", "contact"];
      const scrollPosition = window.scrollY + 150; // Offset for navbar + some padding

      // Check if we're at the top (hero section)
      if (window.scrollY < 100) {
        setActiveSection("hero");
        return;
      }

      // Find the active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isHash: boolean, isHome?: boolean) => {
    // Handle Home link - scroll to top on homepage, navigate to / on other pages
    if (isHome) {
      if (isHomePage) {
        e.preventDefault();
        // Clear hash from URL
        window.history.pushState(null, "", "/");
        // Scroll to top
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setActiveSection("hero");
      }
      // If not on homepage, let Next.js Link handle navigation
      setIsMobileMenuOpen(false);
      return;
    }
    
    if (isHash) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      
      if (element) {
        // Update URL hash
        window.history.pushState(null, "", href);
        
        const offsetTop = element.offsetTop - 80; // Account for navbar height
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
        
        // Force scroll even if already at the section (in case of slight misalignment)
        // This ensures the section is always properly positioned
        setTimeout(() => {
          const currentTop = window.scrollY;
          const targetTop = element.offsetTop - 80;
          if (Math.abs(currentTop - targetTop) > 5) {
            window.scrollTo({
              top: targetTop,
              behavior: "smooth",
            });
          }
        }, 100);
      }
    } else if (href.startsWith("/#")) {
      // Handle navigation from blog page back to homepage with hash
      e.preventDefault();
      window.location.href = href;
    }
    
    setIsMobileMenuOpen(false);
  };

  // Handle scroll to blog section after navigation from blog page
  useEffect(() => {
    if (isHomePage && window.location.hash === "#blog") {
      // Use a slight delay to ensure the page has rendered
      const timeoutId = setTimeout(() => {
        const element = document.getElementById("blog");
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }, 150);
      return () => clearTimeout(timeoutId);
    }
  }, [isHomePage, pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {finalNavLinks.map((link) => {
              const sectionId = link.isHash ? link.href.substring(1) : "";
              const isActive = link.isHash && activeSection === sectionId;
              const isHomeActive = link.isHome && isHomePage && activeSection === "hero";
              
              // Handle Home link
              if (link.isHome) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.isHash, link.isHome)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors rounded-md",
                      isHomeActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                  >
                    {link.label}
                    {isHomeActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-primary" />
                    )}
                  </Link>
                );
              }
              
              // Use handleNavClick for /#section links (navigation from other pages to home sections)
              // This ensures proper scrolling behavior
              if (!link.isHash && link.href.startsWith("/#")) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.isHash, link.isHome)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors rounded-md",
                      "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                  >
                    {link.label}
                  </a>
                );
              }
              
              // Use Next.js Link for other non-hash links that navigate to other pages
              if (!link.isHash && link.href.startsWith("/")) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors rounded-md",
                      "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              }
              
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.isHash, link.isHome)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors rounded-md",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-primary" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Theme Toggle */}
          <div className="hidden md:block absolute right-4">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden absolute right-0 flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4 mt-8">
                <div className="mb-4 px-4">
                  <SheetTitle className="text-lg font-semibold">Navigation</SheetTitle>
                </div>
                {finalNavLinks.map((link) => {
                  const sectionId = link.isHash ? link.href.substring(1) : "";
                  const isActive = link.isHash && activeSection === sectionId;
                  const isHomeActive = link.isHome && isHomePage && activeSection === "hero";
                  
                  // Handle Home link
                  if (link.isHome) {
                    const linkContent = (
                      <Link
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href, link.isHash, link.isHome)}
                        className={cn(
                          "block px-4 py-3 text-base font-medium transition-colors rounded-md",
                          isHomeActive
                            ? "text-primary bg-accent"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent"
                        )}
                      >
                        {link.label}
                      </Link>
                    );
                    return <div key={link.href}>{linkContent}</div>;
                  }
                  
                  // Use handleNavClick for /#section links (navigation from other pages to home sections)
                  if (!link.isHash && link.href.startsWith("/#")) {
                    const linkContent = (
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href, link.isHash, link.isHome)}
                        className={cn(
                          "block px-4 py-3 text-base font-medium transition-colors rounded-md",
                          "text-muted-foreground hover:text-foreground hover:bg-accent"
                        )}
                      >
                        {link.label}
                      </a>
                    );
                    return (
                      <SheetClose key={link.href} asChild>
                        {linkContent}
                      </SheetClose>
                    );
                  }
                  
                  // Use Next.js Link for other non-hash links that navigate to other pages
                  if (!link.isHash && link.href.startsWith("/")) {
                    const linkContent = (
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "block px-4 py-3 text-base font-medium transition-colors rounded-md",
                          "text-muted-foreground hover:text-foreground hover:bg-accent"
                        )}
                      >
                        {link.label}
                      </Link>
                    );
                    return <div key={link.href}>{linkContent}</div>;
                  }
                  
                  const linkContent = (
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href, link.isHash, link.isHome)}
                      className={cn(
                        "block px-4 py-3 text-base font-medium transition-colors rounded-md",
                        isActive
                          ? "text-primary bg-accent"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      )}
                    >
                      {link.label}
                    </a>
                  );
                  
                  return link.isHash ? (
                    <SheetClose key={link.href} asChild>
                      {linkContent}
                    </SheetClose>
                  ) : (
                    <div key={link.href}>{linkContent}</div>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

