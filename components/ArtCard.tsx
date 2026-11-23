import Image from "next/image";
import { Artwork, affiliateUrl } from "@/lib/etsy";

function Placeholder({ tones }: { tones: Artwork["tones"] }) {
  const [a, b, c] = tones;
  return (
    <svg viewBox="0 0 400 500" className="art-img" role="img" aria-label="Sample artwork">
      <rect width="400" height="500" fill={b} />
      <circle cx="250" cy="190" r="110" fill={a} opacity="0.85" />
      <rect x="70" y="270" width="200" height="150" rx="4" fill={c} opacity="0.8" />
      <path d="M40 440 Q200 360 360 440" stroke={c} strokeWidth="3" fill="none" opacity="0.5" />
    </svg>
  );
}

export default function ArtCard({ art }: { art: Artwork }) {
  return (
    <a
      className="art-card"
      href={affiliateUrl(art.url)}
      target="_blank"
      rel="sponsored noopener noreferrer"
    >
      <div className="art-frame">
        {art.image ? (
          <Image
            src={art.image}
            alt={art.title}
            width={570}
            height={712}
            className="art-img"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
          />
        ) : (
          <Placeholder tones={art.tones} />
        )}
      </div>
      <div className="art-meta">
        <span className="art-title">{art.title}</span>
        {art.price && <span className="art-price">{art.price}</span>}
      </div>
      <span className="art-cta">View on Etsy →</span>
    </a>
  );
}
