/*
 * PolicyPageLayout — Wabi-Sabi Luxe visual treatment for legal/info pages
 * Replaces plain PageLayout with: hero banner, icon sections, contact CTA footer
 */

import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { PromoWidget } from "./PromoWidget";
import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, MapPin } from "lucide-react";

interface PolicySection {
  icon: React.ElementType;
  title: string;
  content: ReactNode;
}

interface PolicyPageLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: PolicySection[];
  /** Optional extra content before the contact CTA */
  extraContent?: ReactNode;
}

export default function PolicyPageLayout({
  title,
  subtitle,
  lastUpdated,
  sections,
  extraContent,
}: PolicyPageLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <PromoWidget />
      <Navbar />

      {/* ===== HERO BANNER ===== */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 grain-overlay opacity-40" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-gold/5 rounded-full blur-3xl" />

        <div className="container relative z-10 max-w-4xl mx-auto">
          <AnimatedSection delay={0.1}>
            <p
              className="text-gold text-sm tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Legal
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-warm-white leading-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {title}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p
              className="text-warm-white/60 text-lg max-w-2xl leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {subtitle}
            </p>
            <p
              className="text-warm-white/30 text-sm mt-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Last Updated: {lastUpdated}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CONTENT SECTIONS ===== */}
      <section className="py-16 lg:py-24 bg-ivory relative grain-overlay">
        <div className="container max-w-4xl mx-auto">
          <div className="space-y-0">
            {sections.map((section, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div
                  className={`flex gap-5 lg:gap-6 py-8 lg:py-10 ${
                    i < sections.length - 1 ? "border-b border-border/50" : ""
                  }`}
                >
                  {/* Icon */}
                  <div className="shrink-0 mt-1">
                    <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-gold/10 flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-gold" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <h2
                      className="text-lg lg:text-xl font-semibold text-charcoal mb-3"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {section.title}
                    </h2>
                    <div
                      className="text-charcoal-light leading-relaxed text-[15px] space-y-3
                        [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2
                        [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2
                        [&_strong]:text-charcoal [&_strong]:font-semibold"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {section.content}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {extraContent && (
            <AnimatedSection>
              <div className="mt-10">{extraContent}</div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section className="py-14 lg:py-18 bg-beige/40 relative grain-overlay">
        <div className="container max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2
                className="text-2xl lg:text-3xl font-semibold text-charcoal mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Questions?
              </h2>
              <p className="text-charcoal-light" style={{ fontFamily: "var(--font-body)" }}>
                Reach out and we will be happy to help.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <a
                href="mailto:hello@craftmyhand.site"
                className="group flex flex-col items-center gap-2 p-5 rounded-xl bg-warm-white border border-border/50 hover:border-gold/30 transition-colors text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <p className="text-xs text-charcoal-light" style={{ fontFamily: "var(--font-body)" }}>
                  hello@craftmyhand.site
                </p>
              </a>

              <a
                href="tel:+919876543210"
                className="group flex flex-col items-center gap-2 p-5 rounded-xl bg-warm-white border border-border/50 hover:border-gold/30 transition-colors text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <p className="text-xs text-charcoal-light" style={{ fontFamily: "var(--font-body)" }}>
                  +91 98765 43210
                </p>
              </a>

              <div className="flex flex-col items-center gap-2 p-5 rounded-xl bg-warm-white border border-border/50 text-center">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <p className="text-xs text-charcoal-light leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  Shop No. 01, Azaadi Rte, 10D,
                  <br />
                  Sector 10, Chandigarh, 160010
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
