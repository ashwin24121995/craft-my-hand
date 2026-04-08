import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#process", label: "How It Works" },
    { href: "/#showcase", label: "Our Work" },
    { href: "/#why-us", label: "Why Choose Us" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      if (location !== "/") {
        window.location.href = href;
      } else {
        const el = document.getElementById(href.replace("/#", ""));
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/90 backdrop-blur-md shadow-[0_1px_0_0_oklch(0.75_0.12_75/0.2)]"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className="text-xl lg:text-2xl font-semibold tracking-tight text-charcoal"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Resin Art
            </span>
            <span className="text-gold text-sm font-light tracking-widest uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              by Tanmeet
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-charcoal-light hover:text-gold transition-colors duration-300 tracking-wide"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-warm-white text-sm font-medium rounded-full hover:bg-charcoal-light transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Phone className="w-3.5 h-3.5" />
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-ivory/95 backdrop-blur-md border-t border-border overflow-hidden"
          >
            <div className="container py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left text-base font-medium text-charcoal-light hover:text-gold transition-colors py-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <a
                  href="mailto:hello@resinartbytanmeet.com"
                  className="flex items-center gap-2 text-sm text-charcoal-light"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  hello@resinartbytanmeet.com
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-sm text-charcoal-light"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  +91 98765 43210
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
