import PolicyPageLayout from "@/components/PolicyPageLayout";
import {
  AlertCircle,
  XCircle,
  Clock,
  CheckCircle,
  PackageX,
  Sparkles,
  MessageSquare,
} from "lucide-react";

export default function RefundPolicy() {
  return (
    <PolicyPageLayout
      title="Refund & Cancellation Policy"
      subtitle="Understanding our policy for custom handmade orders."
      lastUpdated="April 9, 2026"
      sections={[
        {
          icon: AlertCircle,
          title: "Important Note About Custom Orders",
          content: (
            <p>
              All products created by Craft My Hand are custom-made to order based on your specific
              requirements. Unlike ready-made products, custom handmade pieces are created
              exclusively for you and cannot be resold or repurposed for another client. This is an
              important factor in our refund and cancellation policy.
            </p>
          ),
        },
        {
          icon: CheckCircle,
          title: "Cancellation Before Production",
          content: (
            <p>
              If you wish to cancel your order before production has begun, please contact us as
              soon as possible. Cancellations made before any materials have been purchased or work
              has started may be eligible for a full refund of any advance payment made.
            </p>
          ),
        },
        {
          icon: Clock,
          title: "Cancellation During Production",
          content: (
            <p>
              Once production has started on your custom piece, cancellation becomes more difficult
              because materials have been used and work has been invested. If you need to cancel
              during production, please reach out to us and we will discuss the situation on a
              case-by-case basis. Depending on the stage of production, a partial refund may or may
              not be possible.
            </p>
          ),
        },
        {
          icon: XCircle,
          title: "Cancellation After Completion",
          content: (
            <p>
              Since each piece is custom-made to your specifications, we generally cannot accept
              cancellations or returns after the piece has been completed. The finished product is
              made specifically for you and cannot be offered to another client.
            </p>
          ),
        },
        {
          icon: PackageX,
          title: "Damaged or Defective Products",
          content: (
            <p>
              If your order arrives damaged due to shipping or has a clear manufacturing defect (not
              a natural handmade variation), please contact us within 48 hours of receiving the
              product with photographs of the damage. We will review the situation and work with you
              to find a fair resolution, which may include a replacement or partial refund depending
              on the circumstances.
            </p>
          ),
        },
        {
          icon: Sparkles,
          title: "Natural Handmade Variations",
          content: (
            <p>
              Please note that slight variations in color, texture, pattern, and finish are inherent
              to handmade resin art and are not considered defects. These natural variations are part
              of what makes each piece unique. Refund requests based solely on natural handmade
              variations will not be accepted.
            </p>
          ),
        },
        {
          icon: MessageSquare,
          title: "How to Request a Cancellation or Refund",
          content: (
            <p>
              To request a cancellation or discuss a refund, please contact us directly using the
              details below. Include your order details and the reason for your request. We aim to
              respond to all cancellation and refund inquiries within 2–3 business days.
            </p>
          ),
        },
      ]}
    />
  );
}
