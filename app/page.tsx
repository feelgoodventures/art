import Link from "next/link";
import ArtGrid from "@/components/ArtGrid";
import ArtCard from "@/components/ArtCard";
import StyleTiles from "@/components/StyleTiles";
import PostCard from "@/components/PostCard";
import Signup from "@/components/Signup";
import { styles } from "@/lib/styles";
import { getArtForStyle } from "@/lib/etsy";
import { posts } from "@/lib/posts";

export const revalidate = 21600;

export default async function Home() {
  const [abstract, boho, botanical, minimal] = await Promise.all([
    getArtForStyle(styles[0], 8),
    getArtForStyle(styles[1], 4),
    getArtForStyle(styles[2], 4),
    getArtForStyle(styles[3], 4),
  ]);
  const heroPicks = [boho[0], botanical[0], abstract[0], minimal[0]].filter(Boolean);

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Original paintings, thoughtfully curated</span>
            <h1>Find the art your walls have been waiting for.</h1>
            <p className="lead">
              WallGlamUp brings together original paintings from marketplaces, galleries and artists, organized by style, so you
              can discover something you love in minutes, not hours.
            </p>
            <div className="hero-actions">
              <Link href="/art" className="btn">
                Shop by style
              </Link>
              <Link href="/journal" className="btn ghost">
                Styling guides
              </Link>
            </div>
          </div>
          <div className="hero-art">
            {heroPicks.map((a) => (
              <ArtCard key={a.id} art={a} />
            ))}
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <div className="section-head">
            <h2>Shop by style</h2>
            <Link href="/art" className="link-arrow">
              All styles
            </Link>
          </div>
          <StyleTiles />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Fresh today</span>
              <h2>Abstract favorites</h2>
            </div>
            <Link href={`/art/${styles[0].slug}`} className="link-arrow">
              See the collection
            </Link>
          </div>
          <ArtGrid items={abstract} />
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <div className="section-head">
            <h2>From the Journal</h2>
            <Link href="/journal" className="link-arrow">
              All stories
            </Link>
          </div>
          <div className="post-list">
            {posts.slice(0, 3).map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <Signup
        heading="The WallGlamUp app is coming"
        text="Save favorites, get matched with art for your space, and hear about new artists first. Join the waitlist."
      />
    </>
  );
}
