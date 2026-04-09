/*
 * Design: "Wabi-Sabi Luxe" — Organic Imperfection Meets Premium Craft
 * Colors: ivory, beige, blush, gold accents, charcoal
 * Typography: Playfair Display (display) + DM Sans (body)
 * Layout: Staggered editorial, asymmetric, generous negative space
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  Mail,
  MessageSquare,
  Palette,
  FileText,
  CheckCircle,
  Truck,
  Heart,
  Shield,
  Sparkles,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";

// Image URLs
const HERO_IMG = "/assets/hero-resin-art.webp";
const COASTERS_IMG = "/assets/showcase-coasters.webp";
const WALL_ART_IMG = "/assets/showcase-wall-art.webp";
const TRAY_IMG = "/assets/showcase-tray.webp";
const ARTISAN_IMG = "/assets/artisan-workspace.webp";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Handmade resin art being crafted"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
        </div>

        <div className="container relative z-10 pt-20">
          <div className="max-w-2xl">
            <AnimatedSection delay={0.2}>
              <p
                className="text-gold-light text-sm tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Custom Handmade Resin Art
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-warm-white leading-[1.1] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Art That Tells
                <br />
                <span className="text-gold-light italic">Your Story</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <p
                className="text-lg text-warm-white/80 leading-relaxed mb-8 max-w-lg"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Every piece of resin art we create is handmade to your specifications.
                Share your vision, and we bring it to life — one careful pour at a time.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold text-charcoal font-semibold rounded-full hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <Phone className="w-4 h-4" />
                  Call for a Quote
                </a>
                <a
                  href="mailto:hello@craftmyhand.site"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-warm-white/30 text-warm-white font-medium rounded-full hover:bg-warm-white/10 transition-all duration-300"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <Mail className="w-4 h-4" />
                  Email Your Idea
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-warm-white/40">
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-warm-white/40 to-transparent" />
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="py-20 lg:py-28 bg-ivory relative grain-overlay">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-charcoal/10">
                  <img
                    src={ARTISAN_IMG}
                    alt="Craft My Hand studio — handmade resin art"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative gold accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-2xl" />
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection direction="right">
              <p
                className="text-gold text-sm tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                About the Artist
              </p>
              <h2
                className="text-3xl lg:text-4xl font-semibold text-charcoal mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Meet Tanmeet
              </h2>
              <div className="space-y-4 text-charcoal-light leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                <p>
                  Behind every piece of resin art is a hands-on creative process led by Tanmeet, the founder
                  of this small, independent art business. What started as a personal passion for working
                  with resin has grown into a dedicated practice of creating custom art pieces for clients
                  who value something truly one-of-a-kind.
                </p>
                <p>
                  This is not a factory or a mass-production setup. Each order is personally reviewed,
                  designed, and handcrafted. Tanmeet works closely with every client to understand their
                  vision — whether it is a set of coasters for a new home, a statement wall piece for a
                  living room, or a meaningful gift for someone special.
                </p>
                <p>
                  The process is simple and transparent: you share your idea, receive a detailed quotation
                  based on the design, size, and complexity, and once confirmed, your piece is carefully
                  created and delivered to you.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== CUSTOM ORDER PROCESS ===== */}
      <section id="process" className="py-20 lg:py-28 bg-beige/40 relative grain-overlay">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
              <p
                className="text-gold text-sm tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                How It Works
              </p>
              <h2
                className="text-3xl lg:text-4xl font-semibold text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Your Custom Order Process
              </h2>
              <p className="text-charcoal-light leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                From your initial idea to the finished piece in your hands, here is exactly how
                the custom order process works. No hidden steps, no surprises.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: MessageSquare,
                step: "01",
                title: "Share Your Idea",
                desc: "Reach out by email or phone with your requirements. Tell us what you are looking for — the type of piece, colors, size, and any design references you have in mind.",
              },
              {
                icon: FileText,
                step: "02",
                title: "Receive a Quotation",
                desc: "We review your request and provide a detailed quotation based on the design complexity, size, materials, and finish. Pricing varies for every order since each piece is custom.",
              },
              {
                icon: CheckCircle,
                step: "03",
                title: "Confirm & Create",
                desc: "Once you approve the quotation and confirm the details, we begin handcrafting your piece. This involves multiple careful steps including pouring, curing, and finishing.",
              },
              {
                icon: Truck,
                step: "04",
                title: "Delivery to You",
                desc: "Your finished resin art piece is carefully packaged and shipped to your address. Delivery timelines depend on the complexity of the order and your location.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.1}>
                <div className="relative bg-warm-white rounded-2xl p-7 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full border border-border/50">
                  {/* Step number */}
                  <span
                    className="text-5xl font-bold text-gold/15 absolute top-4 right-5"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.step}
                  </span>
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

          <AnimatedSection delay={0.4}>
            <div className="mt-12 text-center">
              <p className="text-sm text-charcoal-light/70 max-w-xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
                Please note: Since every piece is custom-made, we do not have fixed prices listed on this website.
                The cost depends entirely on your specific requirements. Contact us to discuss your idea and receive
                a personalized quotation.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SHOWCASE SECTION ===== */}
      <section id="showcase" className="py-20 lg:py-28 bg-ivory relative grain-overlay">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl mb-14 lg:mb-18">
              <p
                className="text-gold text-sm tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Our Work
              </p>
              <h2
                className="text-3xl lg:text-4xl font-semibold text-charcoal mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Handcrafted Resin Art Pieces
              </h2>
              <p className="text-charcoal-light leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Each piece shown here was made for a specific client based on their requirements.
                Your order will be uniquely crafted to match your vision — these are examples of the
                kind of work we do, not ready-made products for sale.
              </p>
            </div>
          </AnimatedSection>

          {/* Staggered Gallery */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Large card - Wall Art */}
            <AnimatedSection direction="left" className="md:row-span-2">
              <div className="group relative rounded-2xl overflow-hidden h-full min-h-[400px] lg:min-h-[550px] shadow-lg">
                <img
                  src={WALL_ART_IMG}
                  alt="Custom resin wall art with ocean wave design and gold leaf accents"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <span className="text-gold-light text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
                    Wall Art
                  </span>
                  <h3
                    className="text-xl lg:text-2xl font-semibold text-warm-white mt-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Ocean Wave Resin Artwork
                  </h3>
                  <p className="text-warm-white/70 text-sm mt-2 max-w-sm" style={{ fontFamily: "var(--font-body)" }}>
                    A large statement piece featuring deep navy resin with white wave details and real gold leaf accents, framed in natural wood.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Coasters */}
            <AnimatedSection direction="right">
              <div className="group relative rounded-2xl overflow-hidden h-[260px] lg:h-[265px] shadow-lg">
                <img
                  src={COASTERS_IMG}
                  alt="Set of four handmade resin art coasters with unique designs"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-gold-light text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
                    Coasters
                  </span>
                  <h3
                    className="text-lg font-semibold text-warm-white mt-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Artisan Resin Coaster Sets
                  </h3>
                  <p className="text-warm-white/70 text-sm mt-1" style={{ fontFamily: "var(--font-body)" }}>
                    Each coaster features a unique design — geode, marble, metallic, and crystal patterns.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Tray */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="group relative rounded-2xl overflow-hidden h-[260px] lg:h-[265px] shadow-lg">
                <img
                  src={TRAY_IMG}
                  alt="Handmade resin art serving tray with amethyst geode design"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-gold-light text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
                    Trays & Decor
                  </span>
                  <h3
                    className="text-lg font-semibold text-warm-white mt-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Geode-Inspired Serving Tray
                  </h3>
                  <p className="text-warm-white/70 text-sm mt-1" style={{ fontFamily: "var(--font-body)" }}>
                    A functional art piece with amethyst-inspired layers, real crystal formations, and gold leaf details.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-10 text-center">
              <p className="text-sm text-charcoal-light/70 italic" style={{ fontFamily: "var(--font-body)" }}>
                These are examples of past custom work. Your piece will be designed and created based on your specific requirements.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section id="why-us" className="py-20 lg:py-28 bg-charcoal text-warm-white relative grain-overlay">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
              <p
                className="text-gold text-sm tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Why Choose Us
              </p>
              <h2
                className="text-3xl lg:text-4xl font-semibold text-warm-white mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What Sets Our Work Apart
              </h2>
              <p className="text-warm-white/60 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                When you choose Craft My Hand, you are choosing a personal, hands-on approach
                to creating something meaningful. Here is what you can expect.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Palette,
                title: "Fully Custom Designs",
                desc: "Every piece is made from scratch based on your requirements. You choose the colors, size, style, and finish. There are no pre-made templates — your art is uniquely yours.",
              },
              {
                icon: Heart,
                title: "Handmade with Care",
                desc: "Each piece goes through a careful process of mixing, pouring, curing, and finishing by hand. This is not machine-made or mass-produced work — it is genuine handmade craft.",
              },
              {
                icon: Users,
                title: "Personal Attention",
                desc: "You work directly with Tanmeet throughout the process. From understanding your vision to delivering the final piece, there is clear communication at every step.",
              },
              {
                icon: Shield,
                title: "Transparent Pricing",
                desc: "You receive a detailed quotation before any work begins. The price is based on your specific design, size, and materials. No hidden charges, no surprises after the fact.",
              },
              {
                icon: Sparkles,
                title: "Quality Materials",
                desc: "We use high-quality resin, pigments, and finishing materials to create pieces that are durable and visually striking. Each piece is built to last and look beautiful over time.",
              },
              {
                icon: Clock,
                title: "Honest Timelines",
                desc: "We provide realistic timelines based on the complexity of your order. Handmade work takes time to do well, and we would rather be upfront about that than rush and compromise quality.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="p-7 rounded-2xl bg-warm-white/5 border border-warm-white/10 hover:border-gold/30 transition-colors duration-300 h-full">
                  <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center mb-5">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3
                    className="text-lg font-semibold text-warm-white mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-warm-white/55 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INQUIRY CTA SECTION ===== */}
      <section id="contact" className="py-20 lg:py-28 bg-blush/20 relative grain-overlay">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="left">
              <p
                className="text-gold text-sm tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Ready to Start?
              </p>
              <h2
                className="text-3xl lg:text-4xl font-semibold text-charcoal mb-5 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Let's Create Something
                <br />
                <span className="text-gold italic">Beautiful Together</span>
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-6" style={{ fontFamily: "var(--font-body)" }}>
                Have an idea for a custom resin art piece? Whether you know exactly what you want or
                need help figuring it out, the first step is simple — reach out to us. Share your
                requirements, and we will get back to you with a personalized quotation.
              </p>
              <p className="text-sm text-charcoal-light/70 mb-8" style={{ fontFamily: "var(--font-body)" }}>
                There is no obligation when you inquire. We are happy to discuss your idea and help
                you understand what is possible before you commit to anything.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="space-y-5">
                {/* Email Card */}
                <a
                  href="mailto:hello@craftmyhand.site"
                  className="group flex items-center gap-5 p-6 bg-warm-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/50"
                >
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1" style={{ fontFamily: "var(--font-display)" }}>
                      Email Us
                    </h3>
                    <p className="text-sm text-charcoal-light" style={{ fontFamily: "var(--font-body)" }}>
                      hello@craftmyhand.site
                    </p>
                    <p className="text-xs text-charcoal-light/60 mt-1" style={{ fontFamily: "var(--font-body)" }}>
                      Share your requirements and any reference images
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gold/40 ml-auto group-hover:text-gold group-hover:translate-x-1 transition-all" />
                </a>

                {/* Phone Card */}
                <a
                  href="tel:+919876543210"
                  className="group flex items-center gap-5 p-6 bg-warm-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/50"
                >
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1" style={{ fontFamily: "var(--font-display)" }}>
                      Call Us
                    </h3>
                    <p className="text-sm text-charcoal-light" style={{ fontFamily: "var(--font-body)" }}>
                      +91 98765 43210
                    </p>
                    <p className="text-xs text-charcoal-light/60 mt-1" style={{ fontFamily: "var(--font-body)" }}>
                      Talk to us directly about your custom order
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gold/40 ml-auto group-hover:text-gold group-hover:translate-x-1 transition-all" />
                </a>

                {/* Info note */}
                <div className="p-5 bg-charcoal/5 rounded-xl border border-charcoal/10">
                  <p className="text-xs text-charcoal-light/70 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    <strong className="text-charcoal">How inquiries work:</strong> When you contact us, share details about the type of piece
                    you want, preferred colors, approximate size, and any reference images. We will review your request
                    and respond with a detailed quotation. Production begins only after you confirm and approve the quote.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section id="faq" className="py-20 lg:py-28 bg-ivory relative grain-overlay">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left heading */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="left">
                <p
                  className="text-gold text-sm tracking-[0.3em] uppercase mb-3"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Common Questions
                </p>
                <h2
                  className="text-3xl lg:text-4xl font-semibold text-charcoal mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Frequently
                  <br />
                  Asked Questions
                </h2>
                <p className="text-charcoal-light leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  Here are answers to the questions we hear most often. If you have something
                  specific in mind that is not covered here, feel free to reach out directly.
                </p>
              </AnimatedSection>
            </div>

            {/* Right accordion */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <Accordion type="single" collapsible className="space-y-3">
                  {[
                    {
                      q: "How much does a custom resin art piece cost?",
                      a: "Pricing depends entirely on your specific requirements — including the type of piece, size, design complexity, materials used, and finish. Since every order is custom, we do not have fixed prices. Contact us with your idea, and we will provide a detailed quotation tailored to your request.",
                    },
                    {
                      q: "How long does it take to receive my order?",
                      a: "Timelines vary based on the complexity of the design and the current order queue. Simple pieces like coasters may take a few days of work, while larger wall art or intricate designs may take longer. We will give you an estimated timeline along with your quotation so you know what to expect before confirming.",
                    },
                    {
                      q: "Can I choose my own colors and design?",
                      a: "Absolutely. That is the whole point of custom work. You can specify your preferred colors, patterns, style, and even share reference images. We work with you to finalize the design before we begin crafting.",
                    },
                    {
                      q: "Do you sell ready-made products?",
                      a: "No. We are a custom handmade art business. Every piece is created from scratch based on the client's specific requirements. The images on this website are examples of past work to give you an idea of what we can create.",
                    },
                    {
                      q: "What types of resin art do you make?",
                      a: "We create a range of resin art pieces including coasters, serving trays, wall art, decorative pieces, and more. If you have a specific idea in mind, let us know and we can discuss whether it is something we can create for you.",
                    },
                    {
                      q: "Will my piece look exactly like the photos on this website?",
                      a: "The photos on this website are examples of past custom work. Since resin is a handmade medium, each piece has its own natural flow and character. We will work closely with your design preferences, but slight variations in texture, color depth, and pattern are part of what makes handmade art unique.",
                    },
                    {
                      q: "What is your refund or cancellation policy?",
                      a: "Since each piece is custom-made to your specifications, cancellations and refunds are handled on a case-by-case basis. Please review our Refund & Cancellation Policy page for full details. In general, cancellations before production begins are easier to accommodate than those made after work has started.",
                    },
                    {
                      q: "Do you ship across India?",
                      a: "Yes, we ship across India. Shipping costs and timelines depend on your location and the size of the piece. We take extra care with packaging to make sure your art arrives safely. Please check our Shipping & Delivery Policy for more details.",
                    },
                  ].map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="bg-warm-white rounded-xl border border-border/50 px-6 shadow-sm"
                    >
                      <AccordionTrigger
                        className="text-left text-charcoal font-medium py-5 hover:no-underline hover:text-gold transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent
                        className="text-charcoal-light leading-relaxed pb-5"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA BANNER ===== */}
      <section className="py-16 lg:py-20 bg-charcoal relative grain-overlay overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2
                className="text-2xl lg:text-3xl font-semibold text-warm-white mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Have a Custom Resin Art Idea?
              </h2>
              <p className="text-warm-white/60 mb-8" style={{ fontFamily: "var(--font-body)" }}>
                Share your vision with us and receive a personalized quotation. No commitment required.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold text-charcoal font-semibold rounded-full hover:bg-gold-light transition-all duration-300"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href="mailto:hello@craftmyhand.site"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-warm-white/30 text-warm-white font-medium rounded-full hover:bg-warm-white/10 transition-all duration-300"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <Mail className="w-4 h-4" />
                  Send an Email
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
