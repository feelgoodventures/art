import Link from "next/link";

export default function NotFound() {
  return (
    <section className="article">
      <div className="wrap narrow center">
        <h1>This wall is empty</h1>
        <p className="muted">We couldn&apos;t find that page.</p>
        <Link href="/art" className="btn">
          Browse art by style
        </Link>
      </div>
    </section>
  );
}
