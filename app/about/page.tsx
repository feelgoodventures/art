import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About WallGlamUp",
  description: "WallGlamUp helps you discover beautiful wall art from independent artists, organized by style.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <section className="article">
      <div className="wrap narrow prose">
        <span className="eyebrow">About</span>
        <h1>Art for every wall, from the people who make it</h1>
        <p>
          WallGlamUp started with a simple frustration: there is so much wonderful art made by independent artists,
          but finding the right piece for your space can take hours of scrolling.
        </p>
        <p>
          So we built a calmer way to browse. We gather original paintings from artists on Etsy and organize them by
          style, then pair them with practical guides on choosing sizes, building gallery walls and styling every
          room.
        </p>
        <h2>How it works</h2>
        <p>
          Every piece you see is sold by its artist on Etsy. When you find something you love, tap it and you will go
          straight to the artist&apos;s listing to buy. Our collections refresh every day, so there is always
          something new to discover.
        </p>
        <h2>Supporting independent artists</h2>
        <p>
          Buying from independent makers means your walls are filled with work that has a story, and your purchase
          supports a real person&apos;s creative business.
        </p>
        <h2>What&apos;s next</h2>
        <p>
          We are building the WallGlamUp app to make finding art for your space even easier.{" "}
          <Link href="/app">Learn about the app</Link>.
        </p>
        <p>
          WallGlamUp may earn a small commission when you buy through our links, at no extra cost to you. Read our{" "}
          <Link href="/disclosure">affiliate disclosure</Link>.
        </p>
      </div>
    </section>
  );
}
