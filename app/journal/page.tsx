import type { Metadata } from "next";
import PostCard from "@/components/PostCard";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "The Journal: Wall Art Styling Guides",
  description: "Styling guides, gallery wall ideas and decorating tips to help you choose and hang wall art you love.",
  alternates: { canonical: "/journal" },
};

export default function JournalIndex() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">The Journal</span>
          <h1>Styling guides and ideas</h1>
          <p>Practical advice for choosing, arranging and hanging art, plus the styles we are loving right now.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap post-list">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
    </>
  );
}
