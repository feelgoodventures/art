import Link from "next/link";
import Collage from "./Collage";
import { Post } from "@/lib/posts";
import { getStyle } from "@/lib/styles";
import { getArtForStyle } from "@/lib/etsy";

export default async function PostCard({ post }: { post: Post }) {
  const style = post.featureStyle ? getStyle(post.featureStyle) : undefined;
  const art = style ? await getArtForStyle(style, 6) : [];
  return (
    <Link href={`/journal/${post.slug}`} className="post-card">
      <div className="cover">
        <Collage items={art.slice(3, 6).length === 3 ? art.slice(3, 6) : art} tones={post.tones} />
      </div>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </Link>
  );
}
