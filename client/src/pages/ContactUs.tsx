/*
 * Contact Us — Wabi-Sabi Luxe editorial layout
 * Rich visual page with hero, contact cards, inquiry guide, and process steps
 */

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PromoWidget } from "@/components/PromoWidget";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Palette,
  Ruler,
  Image,
  Gift,
  CalendarDays,
  ArrowRight,
  MessageSquare,
  FileText,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export default function ContactUs() {
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
              Get in Touch
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-warm-white leading-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let's Create Something
              <br />
              <span className="text-gold-light italic">Beautiful Together</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p
              className="text-warm-white/60 text-lg max-w-2xl leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Whether you have a specific design in mind or just want to explore what is possible
              with custom resin art, we are here to help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CONTACT CARDS ===== */}
      <section className="py-16 lg:py-24 bg-ivory relative grain-overlay">
        <div className="container max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Email */}
              <a
                href="mailto:hello@craftmyhand.site"
                className="group flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-warm-white border border-border/50 hover:border-gold/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3
                    className="text-sm font-semibold text-charcoal mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Email
                  </h3>
                  <p className="text-xs text-charcoal-light" style={{ fontFamily: "var(--font-body)" }}>
                    hello@craftmyhand.site
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-gold/30 group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </a>

              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="group flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-warm-white border border-border/50 hover:border-gold/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3
                    className="text-sm font-semibold text-charcoal mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Phone
                  </h3>
                  <p className="text-xs text-charcoal-light" style={{ fontFamily: "var(--font-body)" }}>
                    +91 98765 43210
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-gold/30 group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </a>

              {/* Location */}
              <div className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-warm-white border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3
                    className="text-sm font-semibold text-charcoal mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Studio
                  </h3>
                  <p className="text-xs text-charcoal-light leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    Shop No. 01, Azaadi Rte, 10D,
                    <br />
                    Sector 10, Chandigarh, 160010
                  </p>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-warm-white border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3
                    className="text-sm font-semibold text-charcoal mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Response Time
                  </h3>
                  <p className="text-xs text-charcoal-light" style={{ fontFamily: "var(--font-body)" }}>
                    We typically respond
                    <br />
                    within 24–48 hours
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHAT TO INCLUDE ===== */}
      <section className="py-16 lg:py-24 bg-beige/30 relative grain-overlay">
        <div className="container max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10">
              <p
                className="text-gold text-sm tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Your Inquiry
              </p>
              <h2
                className="text-2xl lg:text-3xl font-semibold text-charcoal"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What to Include When You Reach Out
              </h2>
              <p
                className="text-charcoal-light mt-3 max-w-xl mx-auto"
                style={{ fontFamily: "var(--font-body)" }}
              >
                To help us understand your requirements and provide an accurate quotation, please
                share the following details.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Palette,
                label: "Type of Piece",
                desc: "Coasters, wall art, serving tray, decorative piece, etc.",
              },
              {
                icon: Ruler,
                label: "Size",
                desc: "Approximate dimensions or size preference.",
              },
              {
                icon: Sparkles,
                label: "Colors & Style",
                desc: "Your preferred color palette and design style.",
              },
              {
                icon: Image,
                label: "Reference Images",
                desc: "Any inspiration images you'd like to share.",
              },
              {
                icon: Gift,
                label: "Purpose",
                desc: "For your home, a gift, an event, or something else?",
              },
              {
                icon: CalendarDays,
                label: "Timeline",
                desc: "Do you need it by a specific date?",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.06}>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-warm-white border border-border/50 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h3
                      className="text-sm font-semibold text-charcoal mb-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.label}
                    </h3>
                    <p className="text-xs text-charcoal-light leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT HAPPENS NEXT ===== */}
      <section className="py-16 lg:py-24 bg-charcoal text-warm-white relative grain-overlay overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

        <div className="container max-w-4xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p
                className="text-gold text-sm tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                The Process
              </p>
              <h2
                className="text-2xl lg:text-3xl font-semibold text-warm-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What Happens After You Contact Us
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: MessageSquare,
                step: "01",
                title: "We Review",
                desc: "We review your requirements and may ask follow-up questions for clarity.",
              },
              {
                icon: FileText,
                step: "02",
                title: "Quotation",
                desc: "We provide a detailed quotation including price, timeline, and material details.",
              },
              {
                icon: CheckCircle,
                step: "03",
                title: "Your Decision",
                desc: "You review the quotation and decide whether to proceed. No obligation.",
              },
              {
                icon: Sparkles,
                step: "04",
                title: "We Create",
                desc: "If you confirm, we begin handcrafting your custom piece with care.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-warm-white/5 border border-warm-white/10 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-2xl font-bold text-gold/20"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-gold" />
                    </div>
                  </div>
                  <h3
                    className="text-sm font-semibold text-warm-white mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-warm-white/50 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5}>
            <p
              className="text-center text-warm-white/40 text-sm mt-10 italic"
              style={{ fontFamily: "var(--font-body)" }}
            >
              We look forward to hearing from you and helping bring your resin art vision to life.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
