import Link from "next/link";
import Collage from "./Collage";
import { styles } from "@/lib/styles";
import { getArtForStyle } from "@/lib/etsy";

export default async function StyleTiles() {
  const art = await Promise.all(styles.map((s) => getArtForStyle(s, 3)));
  return (
    <div className="style-tiles">
      {styles.map((s, i) => (
        <Link key={s.slug} href={`/art/${s.slug}`} className="style-tile">
          <Collage items={art[i]} tones={s.tones} />
          <h3>{s.name}</h3>
          <p>{s.blurb}</p>
        </Link>
      ))}
    </div>
  );
}
