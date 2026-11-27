import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArtGrid from "@/components/ArtGrid";
import { getStyle, styles } from "@/lib/styles";
import { getArtForStyle } from "@/lib/etsy";
import { site } from "@/lib/site";

export const revalidate = 21600;

export function generateStaticParams() {
  return styles.map((s) => ({ style: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ style: string }> }): Promise<Metadata> {
  const style = getStyle((await params).style);
  if (!style) return {};
  return {
    title: `${style.title}: Curated Original Paintings`,
    description: `${style.blurb} Browse original ${style.name.toLowerCase()} paintings from marketplaces, galleries and artists, refreshed daily.`,
    alternates: { canonical: `/art/${style.slug}` },
  };
}

export default async function StylePage({ params }: { params: Promise<{ style: string }> }) {
  const style = getStyle((await params).style);
  if (!style) notFound();
  const art = await getArtForStyle(style, 24);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: style.title,
    url: `${site.url}/art/${style.slug}`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Styles", item: `${site.url}/art` },
        { "@type": "ListItem", position: 3, name: style.title, item: `${site.url}/art/${style.slug}` },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">
            <Link href="/art" style={{ textDecoration: "none" }}>
              Shop by style
            </Link>
          </span>
          <h1>{style.title}</h1>
          <div className="narrow">
            {style.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <nav className="chips" aria-label="Styles">
            {styles.map((s) => (
              <Link key={s.slug} href={`/art/${s.slug}`} className={s.slug === style.slug ? "on" : ""}>
                {s.name}
              </Link>
            ))}
          </nav>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <ArtGrid items={art} />
          <p className="sample-note">
            Prices and availability are set by each seller and may change. Tap any piece to see it where it&apos;s sold.
          </p>
        </div>
      </section>
    </>
  );
}
