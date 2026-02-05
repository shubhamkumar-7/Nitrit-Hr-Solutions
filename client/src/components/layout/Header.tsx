import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Fees", href: "#fees" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    } else {
        // Fallback if on another page (unlikely in this single page setup but good practice)
        window.location.href = href;
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm border-gray-100 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={(e) => scrollToSection(e, '#home')}
          >
            <span className={cn("font-heading font-bold text-2xl tracking-tight", isScrolled ? "text-primary" : "text-primary lg:text-white")}>
              NITRIT <span className="text-secondary">HR</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-secondary",
                  isScrolled ? "text-slate-600" : "text-white/90"
                )}
              >
                {link.name}
              </a>
            ))}
            <Button 
              size="sm" 
              className={cn(
                "font-semibold",
                isScrolled ? "bg-primary text-white hover:bg-primary/90" : "bg-secondary text-primary hover:bg-white hover:text-primary"
              )}
              asChild
            >
              <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>Get a Quote</a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu className={isScrolled ? "text-primary" : "text-primary lg:text-white"} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg lg:hidden animate-in slide-in-from-top-5">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-base font-medium text-slate-600 hover:text-primary py-2 border-b border-slate-50 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full mt-2" onClick={() => setIsMobileMenuOpen(false)} asChild>
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
