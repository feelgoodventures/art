import Link from "next/link";
import { styles } from "@/lib/styles";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="wordmark small">
            WallGlam<span>Up</span>
          </p>
          <p className="muted">
            Original paintings curated by style and room, sourced from marketplaces, galleries and artists.
          </p>
        </div>
        <div>
          <h4>Styles</h4>
          {styles.map((s) => (
            <Link key={s.slug} href={`/art/${s.slug}`}>
              {s.name}
            </Link>
          ))}
        </div>
        <div>
          <h4>WallGlamUp</h4>
          <Link href="/journal">Journal</Link>
          <Link href="/app">The App</Link>
          <Link href="/about">About</Link>
          <Link href="/disclosure">Affiliate disclosure</Link>
          <Link href="/privacy">Privacy policy</Link>
        </div>
      </div>
      <div className="wrap legal">
        <p>
          The term &quot;Etsy&quot; is a trademark of Etsy, Inc. This application uses the Etsy API but is not endorsed or
          certified by Etsy, Inc.
        </p>
        <p>
          WallGlamUp may earn a commission, including through affiliate networks such as Rakuten, when you buy through links on this site, at no extra cost to you.{" "}
          <Link href="/disclosure">Learn more</Link>.
        </p>
        <p>© 2026 Feelgood Ventures LLC. All rights reserved. Created by Priya Patel.</p>
      </div>
    </footer>
  );
}
