/* eslint-disable @next/next/no-img-element */
import { Artwork } from "@/lib/etsy";

/** Three Etsy images in a 2-column collage; falls back to color blocks for samples. */
export default function Collage({ items, tones }: { items: Artwork[]; tones: [string, string, string] }) {
  const pics = items.filter((a) => a.image).slice(0, 3);
  if (pics.length < 3) {
    return (
      <div className="collage" aria-hidden="true">
        <i style={{ background: tones[0] }} />
        <i style={{ background: tones[1] }} />
        <i style={{ background: tones[2] }} />
      </div>
    );
  }
  return (
    <div className="collage">
      {pics.map((a) => (
        <img key={a.id} src={a.image} alt={a.title} loading="lazy" />
      ))}
    </div>
  );
}
