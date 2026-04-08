import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-warm-white/80 relative grain-overlay">
      {/* Gold line separator */}
      <div className="gold-line" />

      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3
              className="text-2xl font-semibold text-warm-white mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Resin Art
            </h3>
            <p
              className="text-gold text-sm tracking-widest uppercase mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              by Tanmeet
            </p>
            <p className="text-sm leading-relaxed text-warm-white/60 mb-6" style={{ fontFamily: "var(--font-body)" }}>
              Custom handmade resin art, crafted with care and attention to detail. Every piece is made to order based on your unique requirements.
            </p>
            <p className="text-xs text-warm-white/40" style={{ fontFamily: "var(--font-body)" }}>
              This is an independent handmade art business. We are not affiliated with any other brand, franchise, or organization.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold text-warm-white tracking-wider uppercase mb-5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3" style={{ fontFamily: "var(--font-body)" }}>
              {[
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact Us" },
                { href: "/#showcase", label: "Our Work" },
                { href: "/#process", label: "How It Works" },
                { href: "/#faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-white/60 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4
              className="text-sm font-semibold text-warm-white tracking-wider uppercase mb-5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Policies
            </h4>
            <ul className="space-y-3" style={{ fontFamily: "var(--font-body)" }}>
              {[
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms-conditions", label: "Terms & Conditions" },
                { href: "/refund-policy", label: "Refund & Cancellation Policy" },
                { href: "/shipping-policy", label: "Shipping & Delivery Policy" },
                { href: "/custom-order-policy", label: "Custom Order Policy" },
                { href: "/disclaimer", label: "Disclaimer" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-white/60 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-sm font-semibold text-warm-white tracking-wider uppercase mb-5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Get In Touch
            </h4>
            <ul className="space-y-4" style={{ fontFamily: "var(--font-body)" }}>
              <li>
                <a
                  href="mailto:hello@resinartbytanmeet.com"
                  className="flex items-start gap-3 text-sm text-warm-white/60 hover:text-gold transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-gold/60 shrink-0" />
                  hello@resinartbytanmeet.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-start gap-3 text-sm text-warm-white/60 hover:text-gold transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-gold/60 shrink-0" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-warm-white/60">
                  <MapPin className="w-4 h-4 mt-0.5 text-gold/60 shrink-0" />
                  India
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-warm-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-warm-white/40" style={{ fontFamily: "var(--font-body)" }}>
              &copy; {currentYear} Resin Art by Tanmeet. All rights reserved.
            </p>
            <p className="text-xs text-warm-white/30" style={{ fontFamily: "var(--font-body)" }}>
              Handmade with care in India. Each piece is unique and made to order.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
