"use client";

import { useState, useEffect } from "react";
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

const navLinks = [
  { href: "#hero", label: "Home", isHash: true },
  { href: "#about", label: "About", isHash: true },
  { href: "#projects", label: "Projects", isHash: true },
  { href: "#skills", label: "Skills", isHash: true },
  { href: "#certificates", label: "Certificates", isHash: true },
  { href: "#hobbies", label: "Hobbies", isHash: true },
  { href: "/blog", label: "Blog", isHash: false },
  { href: "#contact", label: "Contact", isHash: true },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1));
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
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isHash: boolean) => {
    if (isHash) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      
      if (element) {
        const offsetTop = element.offsetTop - 80; // Account for navbar height
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
    
    setIsMobileMenuOpen(false);
  };

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
            {navLinks.map((link) => {
              const sectionId = link.isHash ? link.href.substring(1) : "";
              const isActive = link.isHash && activeSection === sectionId;
              
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.isHash)}
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
                {navLinks.map((link) => {
                  const sectionId = link.isHash ? link.href.substring(1) : "";
                  const isActive = link.isHash && activeSection === sectionId;
                  
                  const linkContent = (
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href, link.isHash)}
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

