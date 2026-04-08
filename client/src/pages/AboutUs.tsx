import PageLayout from "@/components/PageLayout";

const ARTISAN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663290463358/iyr7y2KcaUeAxm4yAww8ZX/artisan-workspace-PupNhRPXFZsYqZQGtC5k49.webp";

export default function AboutUs() {
  return (
    <PageLayout
      title="About Us"
      subtitle="The story behind Craft My Hand."
      lastUpdated="April 9, 2026"
    >
      <div className="not-prose mb-10">
        <div className="aspect-[16/9] rounded-2xl overflow-hidden">
          <img
            src={ARTISAN_IMG}
            alt="Craft My Hand studio — handmade resin art"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      <h2>Who We Are</h2>
      <p>
        Craft My Hand is a small, independent handmade art business based in Chandigarh, founded and run by Tanmeet.
        We specialize in creating custom resin art pieces — from coasters and serving trays to wall art
        and decorative items — all made by hand based on our clients' specific requirements.
      </p>
      <p>
        This is not a factory, a franchise, or a mass-production operation. It is a personal creative
        practice where every order receives individual attention from start to finish. When you work
        with us, you are working directly with the person who will be crafting your piece.
      </p>

      <h2>How It Started</h2>
      <p>
        What began as a personal interest in resin art gradually grew into a dedicated business as
        friends, family, and word-of-mouth clients started requesting custom pieces. Tanmeet's approach
        has always been the same: understand what the client wants, be transparent about the process
        and pricing, and create something that genuinely reflects their vision.
      </p>

      <h2>What We Believe In</h2>
      <p>
        Our work is guided by a few simple principles:
      </p>
      <ul>
        <li><strong>Honesty:</strong> We are upfront about what we can and cannot do. If a design is not feasible or if timelines need to be adjusted, we will tell you directly.</li>
        <li><strong>Transparency:</strong> You receive a clear quotation before any work begins. There are no hidden costs or surprise charges.</li>
        <li><strong>Quality over speed:</strong> Handmade work takes time. We would rather take the time to create something we are proud of than rush to meet an unrealistic deadline.</li>
        <li><strong>Personal touch:</strong> Every piece is made with care and attention. We treat each order as if it were our own.</li>
      </ul>

      <h2>What We Create</h2>
      <p>
        We create a variety of resin art pieces, all custom-made to order. Some of the types of pieces
        we commonly work on include:
      </p>
      <ul>
        <li>Resin art coasters (individual or sets)</li>
        <li>Serving trays with resin art surfaces</li>
        <li>Wall art and decorative panels</li>
        <li>Geode-inspired art pieces</li>
        <li>Ocean and wave-themed resin art</li>
        <li>Custom gifts and special occasion pieces</li>
      </ul>
      <p>
        If you have an idea that is not listed here, feel free to reach out. We are always open to
        exploring new types of projects.
      </p>

      <h2>Our Business Model</h2>
      <p>
        We operate on a custom-order basis. This means:
      </p>
      <ul>
        <li>We do not have a catalog of ready-made products for sale.</li>
        <li>Every piece is created from scratch based on your requirements.</li>
        <li>Pricing is determined by the specific design, size, materials, and complexity of each order.</li>
        <li>You receive a quotation before committing to anything.</li>
        <li>Production begins only after you confirm the order and the agreed-upon advance payment is received.</li>
      </ul>

      <h2>Get in Touch</h2>
      <p>
        If you would like to discuss a custom resin art piece, we would love to hear from you:
      </p>
      <ul>
        <li><strong>Email:</strong> hello@craftmyhand.site</li>
        <li><strong>Phone:</strong> +91 98765 43210</li>
        <li><strong>Address:</strong> Shop No. 01, Azaadi Rte, 10D, Sector 10, Chandigarh, 160010, India</li>
      </ul>
    </PageLayout>
  );
}
