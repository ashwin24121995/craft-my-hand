import PolicyPageLayout from "@/components/PolicyPageLayout";
import {
  FileCheck,
  Store,
  ClipboardList,
  DollarSign,
  CreditCard,
  Fingerprint,
  Copyright,
  AlertTriangle,
  RefreshCw,
  Scale,
} from "lucide-react";

export default function TermsConditions() {
  return (
    <PolicyPageLayout
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before placing a custom order."
      lastUpdated="April 9, 2026"
      sections={[
        {
          icon: FileCheck,
          title: "Agreement to Terms",
          content: (
            <p>
              By accessing this website and placing a custom order with Craft My Hand, you agree to
              be bound by these Terms & Conditions. If you do not agree with any part of these
              terms, please do not use our website or services.
            </p>
          ),
        },
        {
          icon: Store,
          title: "Nature of Our Business",
          content: (
            <p>
              Craft My Hand is a custom handmade resin art business. We do not sell ready-made or
              mass-produced products. Every piece is created from scratch based on the specific
              requirements provided by the client. The images displayed on this website are examples
              of past custom work and are not available for direct purchase.
            </p>
          ),
        },
        {
          icon: ClipboardList,
          title: "Custom Order Process",
          content: (
            <>
              <p>The process for placing a custom order is as follows:</p>
              <ol>
                <li>You contact us by email or phone to share your requirements.</li>
                <li>
                  We review your request and provide a detailed quotation based on the design,
                  size, materials, and complexity.
                </li>
                <li>
                  You review and confirm the quotation. Production begins only after your
                  confirmation.
                </li>
                <li>Your piece is handcrafted and delivered to you upon completion.</li>
              </ol>
            </>
          ),
        },
        {
          icon: DollarSign,
          title: "Pricing",
          content: (
            <p>
              All pricing is provided on a per-order basis through individual quotations. Prices
              depend on the design complexity, size, materials, and finish requested. We do not have
              fixed prices for any products because every order is unique. The quotation provided to
              you is valid for the specific order discussed and may not apply to future orders.
            </p>
          ),
        },
        {
          icon: CreditCard,
          title: "Payment",
          content: (
            <p>
              Payment terms will be communicated along with your quotation. In most cases, a
              partial advance payment is required before production begins, with the remaining
              balance due before or upon delivery. Specific payment details will be agreed upon
              before work starts.
            </p>
          ),
        },
        {
          icon: Fingerprint,
          title: "Handmade Product Variations",
          content: (
            <p>
              Since all our products are handmade, slight variations in color, texture, pattern,
              and finish are natural and expected. These variations are part of the character of
              handmade art and do not constitute defects. While we work closely with your design
              preferences, the final piece may have minor differences from any reference images
              discussed.
            </p>
          ),
        },
        {
          icon: Copyright,
          title: "Intellectual Property",
          content: (
            <p>
              All content on this website, including text, images, and design, is the property of
              Craft My Hand and is protected by applicable intellectual property laws. You may not
              reproduce, distribute, or use any content from this website without our written
              permission.
            </p>
          ),
        },
        {
          icon: AlertTriangle,
          title: "Limitation of Liability",
          content: (
            <p>
              Craft My Hand is not liable for any indirect, incidental, or consequential damages
              arising from the use of our website or services. Our total liability for any claim
              related to an order shall not exceed the amount paid for that specific order.
            </p>
          ),
        },
        {
          icon: RefreshCw,
          title: "Changes to These Terms",
          content: (
            <p>
              We reserve the right to update these Terms & Conditions at any time. Changes will be
              posted on this page with an updated date. Continued use of our website or services
              after changes are posted constitutes acceptance of the revised terms.
            </p>
          ),
        },
        {
          icon: Scale,
          title: "Governing Law",
          content: (
            <p>
              These Terms & Conditions are governed by the laws of India. Any disputes arising from
              these terms shall be subject to the jurisdiction of the courts in Chandigarh, India.
            </p>
          ),
        },
      ]}
    />
  );
}
