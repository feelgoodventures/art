import Link from "next/link";
import { styles } from "@/lib/styles";

export default function StyleTiles() {
  return (
    <div className="style-tiles">
      {styles.map((s) => (
        <Link key={s.slug} href={`/art/${s.slug}`} className="style-tile">
          <div className="swatch" aria-hidden="true">
            <i style={{ background: s.tones[0] }} />
            <i style={{ background: s.tones[1] }} />
            <i style={{ background: s.tones[2] }} />
          </div>
          <h3>{s.name}</h3>
          <p>{s.blurb}</p>
        </Link>
      ))}
    </div>
  );
}
