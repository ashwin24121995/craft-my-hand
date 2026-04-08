import PolicyPageLayout from "@/components/PolicyPageLayout";
import {
  Lightbulb,
  ListOrdered,
  Palette,
  PenLine,
  DollarSign,
  Clock,
  Gem,
} from "lucide-react";

export default function CustomOrderPolicy() {
  return (
    <PolicyPageLayout
      title="Custom Order Policy"
      subtitle="What to expect when you place a custom handmade resin art order."
      lastUpdated="April 9, 2026"
      sections={[
        {
          icon: Lightbulb,
          title: "Understanding Custom Orders",
          content: (
            <p>
              Craft My Hand operates as a custom handmade art business. This means that every piece
              we create is made from scratch based on your specific requirements. We do not maintain
              an inventory of ready-made products. When you place an order with us, you are
              commissioning a unique piece of art that is crafted specifically for you.
            </p>
          ),
        },
        {
          icon: ListOrdered,
          title: "How to Place a Custom Order",
          content: (
            <>
              <p>To place a custom order, follow these steps:</p>
              <ol>
                <li>
                  <strong>Contact Us:</strong> Reach out by email at hello@craftmyhand.site or call
                  us at +91 98765 43210.
                </li>
                <li>
                  <strong>Share Your Requirements:</strong> Tell us what you are looking for — the
                  type of piece (coasters, wall art, tray, etc.), preferred colors, approximate
                  size, design style, and any reference images you have.
                </li>
                <li>
                  <strong>Receive a Quotation:</strong> We will review your requirements and provide
                  a detailed quotation including the price, estimated timeline, and any other
                  relevant details.
                </li>
                <li>
                  <strong>Confirm Your Order:</strong> Once you approve the quotation and complete
                  the agreed-upon advance payment, production begins.
                </li>
                <li>
                  <strong>Production & Delivery:</strong> Your piece is handcrafted, carefully
                  packaged, and shipped to you.
                </li>
              </ol>
            </>
          ),
        },
        {
          icon: Palette,
          title: "Design Approval",
          content: (
            <p>
              Before we begin production, we will confirm the design details with you. This includes
              the color palette, size, style, and any specific elements you want included. Once you
              approve the design direction, we proceed with crafting. Please note that while we
              follow your preferences closely, handmade resin art involves natural flow and curing
              processes that may result in slight variations from any reference images.
            </p>
          ),
        },
        {
          icon: PenLine,
          title: "Changes to Your Order",
          content: (
            <p>
              If you need to make changes to your order after confirming, please contact us as soon
              as possible. Changes requested before production begins can usually be accommodated.
              However, changes requested after production has started may not be possible, or may
              result in additional costs and extended timelines.
            </p>
          ),
        },
        {
          icon: DollarSign,
          title: "Pricing Transparency",
          content: (
            <>
              <p>
                Every quotation we provide is based on the specific requirements of your order.
                Factors that affect pricing include:
              </p>
              <ul>
                <li>Type and size of the piece</li>
                <li>Design complexity and detail level</li>
                <li>Materials used (pigments, gold leaf, crystals, etc.)</li>
                <li>Finish and coating requirements</li>
                <li>Packaging and shipping costs</li>
              </ul>
              <p>
                We do not have fixed prices because no two orders are the same. The quotation you
                receive is specific to your order and includes a clear breakdown of costs.
              </p>
            </>
          ),
        },
        {
          icon: Clock,
          title: "Production Timelines",
          content: (
            <p>
              Handmade resin art requires time for mixing, pouring, curing, and finishing. The
              timeline for your order depends on the complexity of the design and the current order
              queue. We will provide an estimated timeline with your quotation. Please understand
              that these are estimates, and actual completion times may vary slightly.
            </p>
          ),
        },
        {
          icon: Gem,
          title: "Quality Expectations",
          content: (
            <p>
              We take pride in the quality of our work and use high-quality materials for every
              piece. However, as with all handmade art, each piece has its own unique character.
              Slight variations in color depth, texture, and pattern flow are natural and expected.
              These are not defects — they are what make handmade art special.
            </p>
          ),
        },
      ]}
    />
  );
}
