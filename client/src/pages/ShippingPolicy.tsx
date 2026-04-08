import PolicyPageLayout from "@/components/PolicyPageLayout";
import {
  Globe,
  Clock,
  Package,
  DollarSign,
  MapPin,
  AlertTriangle,
  RotateCcw,
} from "lucide-react";

export default function ShippingPolicy() {
  return (
    <PolicyPageLayout
      title="Shipping & Delivery Policy"
      subtitle="How we handle packaging and delivery of your custom resin art."
      lastUpdated="April 9, 2026"
      sections={[
        {
          icon: Globe,
          title: "Delivery Scope",
          content: (
            <p>
              We currently ship across India. If you are located outside India and are interested in
              placing an order, please contact us to discuss whether international shipping is
              possible for your specific request.
            </p>
          ),
        },
        {
          icon: Clock,
          title: "Delivery Timelines",
          content: (
            <>
              <p>
                Since every piece is custom-made, delivery timelines vary depending on the
                complexity of the design, the size of the piece, and the current order queue. When
                we provide your quotation, we will also include an estimated timeline for production
                and delivery.
              </p>
              <p>
                Please note that these timelines are estimates and not fixed guarantees. Handmade
                work sometimes requires additional time to achieve the desired quality, and we would
                rather take the time to do it right than rush and compromise the result.
              </p>
            </>
          ),
        },
        {
          icon: Package,
          title: "Packaging",
          content: (
            <p>
              Resin art is delicate and requires careful handling. We take extra care to package
              every piece securely using protective materials to minimize the risk of damage during
              transit. Each piece is wrapped, cushioned, and boxed to withstand the shipping
              process.
            </p>
          ),
        },
        {
          icon: DollarSign,
          title: "Shipping Costs",
          content: (
            <p>
              Shipping costs depend on the size and weight of the piece and your delivery location.
              The shipping cost will be communicated to you along with your quotation so you know
              the full cost before confirming your order. There are no hidden shipping charges.
            </p>
          ),
        },
        {
          icon: MapPin,
          title: "Tracking",
          content: (
            <p>
              Once your order is shipped, we will share the tracking details with you so you can
              monitor the delivery status. If you have any concerns about the delivery, please
              contact us and we will assist you.
            </p>
          ),
        },
        {
          icon: AlertTriangle,
          title: "Delivery Issues",
          content: (
            <p>
              If your package arrives damaged, please contact us within 48 hours of delivery with
              photographs of the packaging and the product. We will review the situation and work
              with you to find a resolution. Please refer to our Refund & Cancellation Policy for
              more details on how we handle damaged deliveries.
            </p>
          ),
        },
        {
          icon: RotateCcw,
          title: "Undeliverable Orders",
          content: (
            <p>
              If a delivery attempt fails due to an incorrect address, unavailability of the
              recipient, or other reasons on the client's end, additional shipping charges may apply
              for re-delivery. Please make sure to provide accurate and complete delivery details
              when placing your order.
            </p>
          ),
        },
      ]}
    />
  );
}
