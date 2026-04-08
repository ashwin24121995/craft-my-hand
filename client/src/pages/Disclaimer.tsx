import PolicyPageLayout from "@/components/PolicyPageLayout";
import {
  Info,
  Fingerprint,
  DollarSign,
  Image,
  Building2,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";

export default function Disclaimer() {
  return (
    <PolicyPageLayout
      title="Disclaimer"
      subtitle="Important information about our products and services."
      lastUpdated="April 9, 2026"
      sections={[
        {
          icon: Info,
          title: "General Disclaimer",
          content: (
            <p>
              The information provided on this website is for general informational purposes only.
              While we make every effort to keep the information accurate and up to date, Craft My
              Hand makes no representations or warranties of any kind, express or implied, about the
              completeness, accuracy, or reliability of the information on this site.
            </p>
          ),
        },
        {
          icon: Fingerprint,
          title: "Handmade Product Variations",
          content: (
            <>
              <p>
                All products created by Craft My Hand are handmade. Due to the nature of handmade
                resin art, each piece may have slight variations in:
              </p>
              <ul>
                <li>
                  <strong>Color:</strong> Colors may appear slightly different from reference images
                  due to the natural flow of resin pigments and differences in screen displays.
                </li>
                <li>
                  <strong>Texture:</strong> Surface texture may vary slightly between pieces due to
                  the curing process and hand-finishing techniques.
                </li>
                <li>
                  <strong>Pattern:</strong> Resin naturally flows and settles during the curing
                  process, which means patterns may differ from reference images even when the same
                  technique is used.
                </li>
                <li>
                  <strong>Finish:</strong> The final finish may have minor variations depending on
                  the materials and techniques used for each specific piece.
                </li>
              </ul>
              <p>
                These variations are inherent to handmade art and are considered part of the
                character and uniqueness of each piece. They are not defects and do not qualify for
                refunds or replacements.
              </p>
            </>
          ),
        },
        {
          icon: DollarSign,
          title: "Pricing and Timelines",
          content: (
            <p>
              All pricing and production timelines provided by Craft My Hand are estimates based on
              the specific requirements discussed with each client. Actual costs and timelines may
              vary depending on design changes, material availability, and other factors. Final
              pricing is confirmed through the quotation process before production begins.
            </p>
          ),
        },
        {
          icon: Image,
          title: "Images on This Website",
          content: (
            <p>
              The images displayed on this website are examples of past custom work and are intended
              to showcase the type of resin art we create. These images do not represent products
              available for direct purchase. Your custom order will be created based on your
              specific requirements and may differ from the images shown.
            </p>
          ),
        },
        {
          icon: Building2,
          title: "No Affiliation",
          content: (
            <p>
              Craft My Hand is an independent, small handmade art business. We are not affiliated
              with, endorsed by, or connected to any other brand, company, franchise, or
              organization unless explicitly stated. All branding, content, and artwork on this
              website are original and belong to Craft My Hand.
            </p>
          ),
        },
        {
          icon: ExternalLink,
          title: "External Links",
          content: (
            <p>
              This website may contain links to external websites. We are not responsible for the
              content, privacy practices, or availability of those external sites. Inclusion of any
              external link does not imply endorsement or affiliation.
            </p>
          ),
        },
        {
          icon: ShieldAlert,
          title: "Limitation of Liability",
          content: (
            <p>
              Craft My Hand shall not be held liable for any loss or damage arising from the use of
              this website or reliance on any information provided herein. Use of this website and
              our services is at your own discretion and risk.
            </p>
          ),
        },
      ]}
    />
  );
}
