import ArtCard from "./ArtCard";
import { Artwork } from "@/lib/etsy";

export default function ArtGrid({ items }: { items: Artwork[] }) {
  return (
    <div className="art-grid">
      {items.map((a) => (
        <ArtCard key={a.id} art={a} />
      ))}
    </div>
  );
}
