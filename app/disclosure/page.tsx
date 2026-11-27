import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How WallGlamUp earns money through affiliate links.",
  alternates: { canonical: "/disclosure" },
};

export default function Disclosure() {
  return (
    <section className="article">
      <div className="wrap narrow prose">
        <h1>Affiliate disclosure</h1>
        <p className="meta">Last updated November 23, 2026</p>
        <p>
          WallGlamUp is a participant in affiliate programs, including programs run by the marketplaces we link to, such as Etsy, and affiliate networks such as Rakuten. This means that
          when you click a link on our site and make a purchase, we may earn a small commission. This comes at no
          extra cost to you, and the price you pay is exactly the same.
        </p>
        <p>
          Commissions help us keep WallGlamUp running and free to use. They never affect the price you pay, and we
          aim to feature art based on style and quality.
        </p>
        <p>
          All purchases are made with the seller, whether that is a marketplace, a gallery or an artist. Questions about an
          order, shipping or returns should go to the seller.
        </p>
        <p>
          The term &quot;Etsy&quot; is a trademark of Etsy, Inc. This application uses the Etsy API but is not
          endorsed or certified by Etsy, Inc.
        </p>
      </div>
    </section>
  );
}
