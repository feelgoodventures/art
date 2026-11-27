import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How WallGlamUp handles your information.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <section className="article">
      <div className="wrap narrow prose">
        <h1>Privacy policy</h1>
        <p className="meta">Last updated November 23, 2026</p>
        <p>
          Your privacy matters to us. This policy explains what information WallGlamUp collects when you use this
          website and how we use it.
        </p>
        <h2>Information we collect</h2>
        <ul>
          <li>
            <strong>Email address:</strong> only if you choose to join our newsletter or app waitlist. We use it to
            send you updates, and you can unsubscribe at any time.
          </li>
          <li>
            <strong>Usage data:</strong> basic, anonymous analytics such as pages visited and the type of device
            used, to help us improve the site.
          </li>
        </ul>
        <h2>Affiliate links and cookies</h2>
        <p>
          When you click through to a marketplace or artist shop, our affiliate partners may set a cookie so that a purchase
          can be credited to WallGlamUp. These cookies do not give us access to your personal or payment details.
          Purchases happen entirely on the seller&apos;s site (for example, Etsy) and are covered by that seller&apos;s own privacy policy.
        </p>
        <h2>Marketplace content</h2>
        <p>
          Listing images, titles and prices are provided by the marketplaces, galleries and artists we work with (including through the Etsy API) and belong to their respective sellers.
        </p>
        <h2>Sharing your information</h2>
        <p>We do not sell your personal information. We share it only with services that help us run the site, such as our email provider and hosting.</p>
        <h2>Your choices</h2>
        <p>
          You can unsubscribe from emails using the link in any message, and you can block or delete cookies in your
          browser settings.
        </p>
        <h2>Contact</h2>
        <p>Questions about this policy? Contact us through the details on our About page.</p>
      </div>
    </section>
  );
}
