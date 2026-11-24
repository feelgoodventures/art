import Link from "next/link";
import { styles } from "@/lib/styles";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="wordmark small">
            WallGlam<span>Up</span>
          </p>
          <p className="muted">
            Wall art from independent artists, curated by style and room. Every piece is sold by its maker on Etsy.
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
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">
            Instagram @wallglamup
          </a>
        </div>
      </div>
      <div className="wrap legal">
        <p>
          The term &quot;Etsy&quot; is a trademark of Etsy, Inc. This application uses the Etsy API but is not endorsed or
          certified by Etsy, Inc.
        </p>
        <p>
          WallGlamUp may earn a commission when you buy through links on this site, at no extra cost to you.{" "}
          <Link href="/disclosure">Learn more</Link>.
        </p>
        <p>© {new Date().getFullYear()} WallGlamUp</p>
      </div>
    </footer>
  );
}
