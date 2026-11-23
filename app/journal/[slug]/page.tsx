import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArtGrid from "@/components/ArtGrid";
import Collage from "@/components/Collage";
import Signup from "@/components/Signup";
import { getPost, posts } from "@/lib/posts";
import { getStyle } from "@/lib/styles";
import { getArtForStyle } from "@/lib/etsy";
import { formatDate } from "@/lib/date";
import { site } from "@/lib/site";

export const revalidate = 21600;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/journal/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.description, publishedTime: post.date },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const style = post.featureStyle ? getStyle(post.featureStyle) : undefined;
  const picks = style ? await getArtForStyle(style, 8) : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/journal/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="article">
        <div className="wrap narrow">
          <span className="eyebrow">
            <Link href="/journal" style={{ textDecoration: "none" }}>
              The Journal
            </Link>
          </span>
          <h1>{post.title}</h1>
          <p className="meta">
            {formatDate(post.date)} · {post.readMinutes} min read
          </p>
        </div>
        <div className="wrap" style={{ maxWidth: 1000 }}>
          <div className="cover">
            <Collage items={picks} tones={post.tones} />
          </div>
        </div>
        <div className="wrap narrow prose">{post.body}</div>
      </article>
      {style && (
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">Shop the story</span>
                <h2>{style.title} we love</h2>
              </div>
              <Link href={`/art/${style.slug}`} className="link-arrow">
                See all {style.name.toLowerCase()}
              </Link>
            </div>
            <ArtGrid items={picks} />
          </div>
        </section>
      )}
      <Signup
        heading="Get new picks in your inbox"
        text="Fresh art finds and styling ideas, plus early access to the WallGlamUp app."
      />
    </>
  );
}
