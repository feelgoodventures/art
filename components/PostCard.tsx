import Link from "next/link";
import Cover from "./Cover";
import { Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/journal/${post.slug}`} className="post-card">
      <div className="cover">
        <Cover tones={post.tones} />
      </div>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </Link>
  );
}
