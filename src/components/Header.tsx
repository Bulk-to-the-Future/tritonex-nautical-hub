import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import tritonexLogo from "@/assets/tritonex-logo.jpeg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#facilities", label: "Facilities" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-lg shadow-xl border-b border-border/50 py-2"
          : "bg-gradient-to-b from-background/80 to-transparent backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div
              className={`transition-all duration-300 overflow-hidden rounded-lg ${
                isScrolled ? "h-14 w-auto" : "h-16 w-auto"
              }`}
            >
              <img
                src={tritonexLogo}
                alt="Tritonex Marine Solutions"
                className="h-full w-auto object-contain"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-5 py-2.5 text-sm font-semibold tracking-wide uppercase transition-all duration-300 rounded-md ${
                  isScrolled
                    ? "text-foreground hover:text-primary hover:bg-primary/10"
                    : "text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              variant={isScrolled ? "default" : "hero"}
              size="lg"
              className="ml-6 font-semibold tracking-wide uppercase"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-3 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? "bg-primary/10 hover:bg-primary/20" 
                : "bg-primary-foreground/10 hover:bg-primary-foreground/20"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={`h-6 w-6 ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-2 bg-card/98 backdrop-blur-lg rounded-xl p-5 shadow-xl border border-border/50">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary hover:bg-primary/10 font-semibold py-3 px-4 rounded-lg uppercase tracking-wide transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="default" size="lg" className="mt-3 font-semibold uppercase" asChild>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get In Touch
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
