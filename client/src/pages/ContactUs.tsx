import PageLayout from "@/components/PageLayout";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactUs() {
  return (
    <PageLayout
      title="Contact Us"
      subtitle="We would love to hear from you. Reach out to discuss your custom resin art idea."
      lastUpdated="April 9, 2026"
    >
      <p>
        Whether you have a specific design in mind or just want to explore what is possible with
        custom resin art, we are here to help. The best way to get started is to share your idea
        with us, and we will respond with a personalized quotation.
      </p>

      <h2>How to Reach Us</h2>

      <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
        <a
          href="mailto:hello@craftmyhand.site"
          className="flex items-start gap-4 p-5 rounded-xl bg-beige/30 border border-border/50 hover:border-gold/30 transition-colors"
        >
          <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5 text-gold" />
          </div>
          <div>
            <h3 className="font-semibold text-charcoal text-sm mb-1" style={{ fontFamily: "var(--font-display)" }}>Email</h3>
            <p className="text-sm text-charcoal-light">hello@craftmyhand.site</p>
          </div>
        </a>

        <a
          href="tel:+919876543210"
          className="flex items-start gap-4 p-5 rounded-xl bg-beige/30 border border-border/50 hover:border-gold/30 transition-colors"
        >
          <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
            <Phone className="w-5 h-5 text-gold" />
          </div>
          <div>
            <h3 className="font-semibold text-charcoal text-sm mb-1" style={{ fontFamily: "var(--font-display)" }}>Phone</h3>
            <p className="text-sm text-charcoal-light">+91 98765 43210</p>
          </div>
        </a>

        <div className="flex items-start gap-4 p-5 rounded-xl bg-beige/30 border border-border/50">
          <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-gold" />
          </div>
          <div>
            <h3 className="font-semibold text-charcoal text-sm mb-1" style={{ fontFamily: "var(--font-display)" }}>Location</h3>
            <p className="text-sm text-charcoal-light">Shop No. 01, Azaadi Rte, 10D, Sector 10, Chandigarh, 160010, India</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 rounded-xl bg-beige/30 border border-border/50">
          <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5 text-gold" />
          </div>
          <div>
            <h3 className="font-semibold text-charcoal text-sm mb-1" style={{ fontFamily: "var(--font-display)" }}>Response Time</h3>
            <p className="text-sm text-charcoal-light">We typically respond within 24-48 hours</p>
          </div>
        </div>
      </div>

      <h2>What to Include in Your Inquiry</h2>
      <p>
        To help us understand your requirements and provide an accurate quotation, please include
        the following details when you contact us:
      </p>
      <ul>
        <li><strong>Type of piece:</strong> What are you looking for? (e.g., coasters, wall art, serving tray, decorative piece)</li>
        <li><strong>Size:</strong> Approximate dimensions or size preference.</li>
        <li><strong>Colors and style:</strong> Your preferred color palette and design style.</li>
        <li><strong>Reference images:</strong> If you have any inspiration images, feel free to share them.</li>
        <li><strong>Purpose:</strong> Is this for your home, a gift, an event, or something else?</li>
        <li><strong>Timeline:</strong> Do you need it by a specific date?</li>
      </ul>

      <h2>What Happens After You Contact Us</h2>
      <ol>
        <li>We review your requirements and may ask follow-up questions for clarity.</li>
        <li>We provide a detailed quotation including price, estimated timeline, and material details.</li>
        <li>You review the quotation and decide whether to proceed. There is no obligation.</li>
        <li>If you confirm, we begin crafting your custom piece.</li>
      </ol>

      <p>
        We look forward to hearing from you and helping bring your resin art vision to life.
      </p>
    </PageLayout>
  );
}
