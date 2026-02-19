import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

/**
 * Header Component - Modern Dark Elegance with Creative Design
 * Features: Animated logo, smooth scroll effects, responsive navigation
 * Design Philosophy: Sophisticated dark theme with playful elements
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${isScrolled
        ? "bg-background/80 backdrop-blur-md border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section with Creative Design */}
        <div className="flex items-center gap-3 group cursor-pointer transition-smooth">
          {/* Brand Name */}
          <div className="flex flex-col">
            <img src="/public/logo-branco.png" alt="Garimpei Shop" className="h-12" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-smooth hover:text-orange-500"
          >
            Benefícios
          </a>
          <a
            href="#cta"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-smooth hover:text-orange-500"
          >
            Comunidade
          </a>
          <a
            href="#footer"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-smooth hover:text-orange-500"
          >
            Contato
          </a>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-orange-500/30 transition-smooth hover:scale-105 glow-orange">
            Entrar no WhatsApp
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-smooth"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border animate-fade-in-up">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a
              href="#features"
              className="text-sm font-medium text-foreground/70 hover:text-orange-500 transition-smooth py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefícios
            </a>
            <a
              href="#cta"
              className="text-sm font-medium text-foreground/70 hover:text-orange-500 transition-smooth py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Comunidade
            </a>
            <a
              href="#footer"
              className="text-sm font-medium text-foreground/70 hover:text-orange-500 transition-smooth py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </a>
            <button className="w-full px-6 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium text-sm hover:shadow-lg transition-smooth mt-2">
              Entrar no WhatsApp
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
