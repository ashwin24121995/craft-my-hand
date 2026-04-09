/*
 * About Us — "Wabi-Sabi Luxe" editorial layout
 * Rich visual storytelling with alternating sections, images, and cards
 * NOT a plain text page — designed to feel like the homepage
 */

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PromoWidget } from "@/components/PromoWidget";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Heart,
  Eye,
  Gem,
  HandMetal,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const ARTISAN_IMG = "/assets/artisan-workspace.webp";
const HERO_IMG = "/assets/hero-resin-art.webp";
const TRAY_IMG = "/assets/showcase-tray.webp";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <PromoWidget />
      <Navbar />

      {/* ===== HERO BANNER ===== */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ARTISAN_IMG}
            alt="Tanmeet crafting resin art in her studio"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
        </div>
        <div className="container relative z-10 pb-12 lg:pb-16 pt-28">
          <AnimatedSection delay={0.2}>
            <p
              className="text-gold-light text-sm tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Our Story
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-warm-white leading-[1.1]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Crafted by Hand,
              <br />
              <span className="text-gold-light italic">Driven by Passion</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHO WE ARE — Asymmetric text + image ===== */}
      <section className="py-20 lg:py-28 bg-ivory relative grain-overlay">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Text — takes 3 cols */}
            <AnimatedSection direction="left" className="lg:col-span-3">
              <p
                className="text-gold text-sm tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Who We Are
              </p>
              <h2
                className="text-3xl lg:text-4xl font-semibold text-charcoal mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A Small Studio with
                <br />
                <span className="text-gold italic">Big Heart</span>
              </h2>
              <div className="space-y-4 text-charcoal-light leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                <p>
                  Craft My Hand is a small, independent handmade art business based in Chandigarh,
                  founded and run by Tanmeet. We specialize in creating custom resin art pieces — from
                  coasters and serving trays to wall art and decorative items — all made by hand based
                  on our clients' specific requirements.
                </p>
                <p>
                  This is not a factory, a franchise, or a mass-production operation. It is a personal
                  creative practice where every order receives individual attention from start to finish.
                  When you work with us, you are working directly with the person who will be crafting
                  your piece.
                </p>
              </div>
            </AnimatedSection>

            {/* Image — takes 2 cols */}
            <AnimatedSection direction="right" className="lg:col-span-2">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-charcoal/10">
                  <img
                    src={HERO_IMG}
                    alt="Close-up of resin art being poured with gold leaf details"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 border-2 border-gold/30 rounded-2xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== THE ORIGIN STORY — Full-width accent band ===== */}
      <section className="py-20 lg:py-28 bg-charcoal text-warm-white relative grain-overlay overflow-hidden">
        {/* Decorative blurs */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-gold/5 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <p
                className="text-gold text-sm tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                How It Started
              </p>
              <h2
                className="text-3xl lg:text-4xl font-semibold text-warm-white mb-8 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                From a Personal Passion
                <br />
                to a <span className="text-gold italic">Creative Practice</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-warm-white/70 leading-relaxed text-lg mb-6" style={{ fontFamily: "var(--font-body)" }}>
                What began as a personal interest in resin art gradually grew into a dedicated
                business as friends, family, and word-of-mouth clients started requesting custom
                pieces. Tanmeet's approach has always been the same: understand what the client
                wants, be transparent about the process and pricing, and create something that
                genuinely reflects their vision.
              </p>
              <p className="text-warm-white/50 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Every piece that leaves the studio carries the same care and intention that went
                into the very first one. The scale may have grown, but the personal touch has not changed.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== VALUES — Card grid ===== */}
      <section className="py-20 lg:py-28 bg-beige/40 relative grain-overlay">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
              <p
                className="text-gold text-sm tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                What We Believe In
              </p>
              <h2
                className="text-3xl lg:text-4xl font-semibold text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Principles That Guide Our Work
              </h2>
              <p className="text-charcoal-light leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                These are not marketing slogans. They are the actual standards we hold ourselves to
                with every order.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Eye,
                title: "Honesty",
                desc: "We are upfront about what we can and cannot do. If a design is not feasible or if timelines need to be adjusted, we will tell you directly rather than make promises we cannot keep.",
              },
              {
                icon: Gem,
                title: "Transparency",
                desc: "You receive a clear quotation before any work begins. There are no hidden costs or surprise charges. What we quote is what you pay.",
              },
              {
                icon: Heart,
                title: "Quality Over Speed",
                desc: "Handmade work takes time. We would rather take the time to create something we are proud of than rush to meet an unrealistic deadline.",
              },
              {
                icon: HandMetal,
                title: "Personal Touch",
                desc: "Every piece is made with care and attention. We treat each order as if it were our own — because our reputation depends on the quality of every single piece.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-warm-white rounded-2xl p-7 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full border border-border/50">
                  <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3
                    className="text-lg font-semibold text-charcoal mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal-light leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT WE CREATE — Image + list ===== */}
      <section className="py-20 lg:py-28 bg-ivory relative grain-overlay">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-charcoal/10">
                  <img
                    src={TRAY_IMG}
                    alt="Handmade resin art serving tray with geode design"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-gold/30 rounded-2xl" />
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection direction="right">
              <p
                className="text-gold text-sm tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                What We Create
              </p>
              <h2
                className="text-3xl lg:text-4xl font-semibold text-charcoal mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Custom Resin Art,
                <br />
                <span className="text-gold italic">Made to Order</span>
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-6" style={{ fontFamily: "var(--font-body)" }}>
                We create a variety of resin art pieces, all custom-made to order. Some of the types
                of pieces we commonly work on include:
              </p>
              <div className="grid grid-cols-2 gap-3" style={{ fontFamily: "var(--font-body)" }}>
                {[
                  "Resin Art Coasters",
                  "Serving Trays",
                  "Wall Art Panels",
                  "Geode-Inspired Art",
                  "Ocean Wave Art",
                  "Custom Gifts",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-charcoal-light py-2 px-3 bg-beige/40 rounded-lg border border-border/30"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-sm text-charcoal-light/60 mt-5 italic" style={{ fontFamily: "var(--font-body)" }}>
                Have an idea that is not listed here? Reach out — we are always open to exploring
                new types of projects.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== BUSINESS MODEL — Horizontal feature strip ===== */}
      <section className="py-16 lg:py-20 bg-blush/20 relative grain-overlay">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p
                className="text-gold text-sm tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                How We Work
              </p>
              <h2
                className="text-2xl lg:text-3xl font-semibold text-charcoal"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Custom-Order Model
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {[
                "No ready-made catalog",
                "Every piece made from scratch",
                "Pricing based on your design",
                "Quotation before commitment",
                "Production after confirmation",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-warm-white rounded-xl px-5 py-4 shadow-sm border border-border/50"
                >
                  <span
                    className="text-2xl font-bold text-gold/20"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-charcoal-light leading-snug" style={{ fontFamily: "var(--font-body)" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section className="py-20 lg:py-28 bg-charcoal text-warm-white relative grain-overlay overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p
                className="text-gold text-sm tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Get in Touch
              </p>
              <h2
                className="text-3xl lg:text-4xl font-semibold text-warm-white mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Let's Talk About Your Idea
              </h2>
              <p className="text-warm-white/60 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                If you would like to discuss a custom resin art piece, we would love to hear from you.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
              {/* Email */}
              <a
                href="mailto:hello@craftmyhand.site"
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-warm-white/5 border border-warm-white/10 hover:border-gold/30 transition-colors duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center group-hover:bg-gold/25 transition-colors">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-warm-white mb-1" style={{ fontFamily: "var(--font-display)" }}>
                    Email
                  </h3>
                  <p className="text-xs text-warm-white/50" style={{ fontFamily: "var(--font-body)" }}>
                    hello@craftmyhand.site
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-gold/30 group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </a>

              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-warm-white/5 border border-warm-white/10 hover:border-gold/30 transition-colors duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center group-hover:bg-gold/25 transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-warm-white mb-1" style={{ fontFamily: "var(--font-display)" }}>
                    Phone
                  </h3>
                  <p className="text-xs text-warm-white/50" style={{ fontFamily: "var(--font-body)" }}>
                    +91 98765 43210
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-gold/30 group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </a>

              {/* Address */}
              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-warm-white/5 border border-warm-white/10 text-center">
                <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-warm-white mb-1" style={{ fontFamily: "var(--font-display)" }}>
                    Studio
                  </h3>
                  <p className="text-xs text-warm-white/50 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    Shop No. 01, Azaadi Rte, 10D,
                    <br />
                    Sector 10, Chandigarh, 160010
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
