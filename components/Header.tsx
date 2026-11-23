import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="wordmark" aria-label="WallGlamUp home">
          WallGlam<span>Up</span>
        </Link>
        <nav aria-label="Main">
          <Link href="/art">Shop by Style</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/app">The App</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
