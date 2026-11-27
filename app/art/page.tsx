import type { Metadata } from "next";
import StyleTiles from "@/components/StyleTiles";

export const metadata: Metadata = {
  title: "Wall Art by Style",
  description:
    "Browse curated wall art by style: abstract, boho, botanical, minimalist, vintage and coastal original paintings from marketplaces, galleries and artists.",
  alternates: { canonical: "/art" },
};

export default function ArtIndex() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">Shop by style</span>
          <h1>Wall art by style</h1>
          <p>Every collection is refreshed daily with new original paintings.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <StyleTiles />
        </div>
      </section>
    </>
  );
}
