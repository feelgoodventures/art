import Link from "next/link";
import type { ReactNode } from "react";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readMinutes: number;
  tones: [string, string, string];
  featureStyle?: string;
  body: ReactNode;
};

export const posts: Post[] = [
  {
    slug: "what-size-art-for-your-wall",
    title: "How to Choose the Right Size Art for Your Wall",
    description:
      "Simple rules for picking wall art that fits: above a sofa, over a bed, in a hallway, and on a big blank wall.",
    date: "2026-11-23",
    readMinutes: 5,
    tones: ["#c9775b", "#efe4d6", "#3f4a4a"],
    featureStyle: "abstract-wall-art",
    body: (
      <>
        <p>
          The most common wall art mistake is not the style. It is the size. A painting that looked perfect online can
          end up floating like a postage stamp on a big wall, or swallowing a narrow hallway. The good news is that a
          few simple rules take the guesswork out of it.
        </p>
        <h2>The two-thirds rule</h2>
        <p>
          When art hangs above a piece of furniture, aim for it to be about two-thirds to three-quarters of the
          furniture&apos;s width. Above an 84-inch sofa, that means art (or a group of pieces) around 56 to 63 inches
          wide. Above a queen bed, roughly 40 to 45 inches wide works beautifully.
        </p>
        <div className="callout">
          Quick math: measure your furniture width and multiply by 0.66 and 0.75. Your art should land somewhere
          between the two numbers.
        </div>
        <h2>On a blank wall</h2>
        <p>
          With no furniture underneath, look at the wall itself. A single piece should take up roughly 60 to 75
          percent of the open wall space you want to fill. If one piece that size is out of budget, a gallery wall or
          a pair or trio of smaller paintings can fill the same area for less.
        </p>
        <h2>How high to hang it</h2>
        <p>
          Hang art so its center sits about 57 to 60 inches from the floor, which is average eye level. Above a sofa
          or headboard, leave 6 to 10 inches between the top of the furniture and the bottom of the frame so the two
          feel connected.
        </p>
        <h2>Common sizes and where they work</h2>
        <ul>
          <li>
            <strong>8 x 10 and 11 x 14 inches:</strong> shelves, desks, bathrooms and gallery walls.
          </li>
          <li>
            <strong>16 x 20 and 18 x 24 inches:</strong> bedside walls, entryways, and pairs above a dresser.
          </li>
          <li>
            <strong>24 x 36 inches and up:</strong> statement pieces above sofas, beds and dining tables.
          </li>
        </ul>
        <h2>When in doubt, go bigger</h2>
        <p>
          Art that is slightly too large almost always looks more intentional than art that is too small. Before you
          buy, tape a piece of paper the size of the painting to your wall and live with it for a day. Many independent artists
          also take commissions in custom sizes, so you can get the one that fits.
        </p>
        <p>
          Ready to browse? Start with our <Link href="/art/abstract-wall-art">abstract wall art</Link> collection,
          where large-format pieces are easy to find.
        </p>
      </>
    ),
  },
  {
    slug: "gallery-wall-ideas",
    title: "Gallery Wall Ideas That Look Collected, Not Cluttered",
    description:
      "Layouts, spacing and mixing tips for a gallery wall that feels curated, plus how to plan one before you hammer a single nail.",
    date: "2026-11-23",
    readMinutes: 6,
    tones: ["#d4a373", "#f3e9dc", "#6b8f71"],
    featureStyle: "botanical-wall-art",
    body: (
      <>
        <p>
          A gallery wall is the fastest way to give a room personality. Done well, it looks like a collection built
          over years. Done in a hurry, it can feel busy. The difference comes down to a few choices you make before
          anything goes on the wall.
        </p>
        <h2>Pick a thread that ties it together</h2>
        <p>
          The best gallery walls share at least one thing: a color palette, a subject, a frame finish or a style.
          Botanical paintings in mixed frames, or a mix of subjects in matching black frames, both work. Mixing
          everything at once is what tips it into clutter.
        </p>
        <h2>Three layouts that always work</h2>
        <ul>
          <li>
            <strong>The grid:</strong> identical frames in even rows. Clean, modern and perfect above a sofa or
            console.
          </li>
          <li>
            <strong>The salon wall:</strong> mixed sizes clustered around one larger anchor piece. Relaxed and
            personal.
          </li>
          <li>
            <strong>The line:</strong> frames of different heights aligned along one horizontal center line. Great
            for hallways and staircases.
          </li>
        </ul>
        <h2>Spacing is everything</h2>
        <p>
          Keep 2 to 3 inches between frames. Consistent gaps are what make a gallery wall look polished, even when
          the frames themselves are all different.
        </p>
        <h2>Plan it on the floor first</h2>
        <p>
          Lay your frames on the floor and arrange them until you love the layout. Then trace each one onto kraft
          paper, cut the shapes out, and tape them to the wall. Mark the nail spots through the paper and hang the
          real pieces right over the templates.
        </p>
        <div className="callout">
          Renting? Strong adhesive strips hold many small framed paintings up to 16 x 20 inches, and they come off without
          damaging paint.
        </div>
        <h2>Where to find pieces that go together</h2>
        <p>
          Many independent painters create small works in coordinated series, which makes a gallery wall almost
          effortless. Browse our <Link href="/art/botanical-wall-art">botanical</Link> and{" "}
          <Link href="/art/minimalist-wall-art">minimalist</Link> collections for pieces that pair easily.
        </p>
      </>
    ),
  },
  {
    slug: "boho-wall-art-ideas",
    title: "Boho Wall Art Ideas for a Warm, Layered Home",
    description:
      "How to style boho wall art with earthy colors, sun motifs and natural textures, room by room.",
    date: "2026-11-23",
    readMinutes: 4,
    tones: ["#9c6644", "#f1e3d3", "#d4a373"],
    featureStyle: "boho-wall-art",
    body: (
      <>
        <p>
          Boho style is all about warmth: earthy colors, natural textures and a home that feels lived in and loved.
          The right wall art pulls the look together, and it is one of the easiest places to start.
        </p>
        <h2>Lean into the palette</h2>
        <p>
          Terracotta, rust, sand, olive and cream are the heart of boho art. Choose pieces in two or three of these
          tones and repeat them in cushions, throws or a rug for a room that feels connected.
        </p>
        <h2>Motifs to look for</h2>
        <ul>
          <li>Suns, arches and rainbows in muted, earthy shades</li>
          <li>Abstract organic shapes and soft line work</li>
          <li>Desert landscapes, palms and dried florals</li>
          <li>Textured, layered brushwork and fiber-art-inspired pieces</li>
        </ul>
        <h2>Room by room</h2>
        <p>
          <strong>Living room:</strong> anchor the sofa wall with one large abstract in warm tones, or create a
          relaxed salon-style gallery wall mixing small paintings with a round mirror.
        </p>
        <p>
          <strong>Bedroom:</strong> a pair of arch or sun paintings above the bed feels calm and balanced.
        </p>
        <p>
          <strong>Entryway:</strong> one small, cheerful painting sets the tone the moment someone walks in.
        </p>
        <h2>Frame it naturally</h2>
        <p>
          Light oak, rattan and natural wood frames suit boho art perfectly. For an even more relaxed look, try
          displaying a small unframed canvas on a picture ledge.
        </p>
        <p>
          Explore our full <Link href="/art/boho-wall-art">boho wall art</Link> collection, refreshed daily with new
          pieces from independent artists.
        </p>
      </>
    ),
  },
  {
    slug: "hang-art-without-nails",
    title: "How to Hang Art Without Nails (Renter Friendly)",
    description:
      "Damage-free ways to hang and display wall art: adhesive strips, ledges, leaning art and more.",
    date: "2026-11-23",
    readMinutes: 4,
    tones: ["#6d98ab", "#eef3f2", "#c8b69a"],
    featureStyle: "minimalist-wall-art",
    body: (
      <>
        <p>
          Renting does not mean living with bare walls. There are plenty of ways to display art without a single nail
          hole, and some of them look even better than a traditional hanging.
        </p>
        <h2>1. Adhesive picture-hanging strips</h2>
        <p>
          Removable strips are the go-to for lightweight framed art. Check the weight rating on the package, press
          firmly for 30 seconds, and wait an hour before hanging. Always pull the tab straight down to remove them.
        </p>
        <h2>2. Picture ledges</h2>
        <p>
          A picture ledge lets you layer and swap art whenever you like. Some attach with strong adhesive, and many
          landlords are fine with two small screws.
        </p>
        <h2>3. Lean it</h2>
        <p>
          A large canvas leaning on a dresser, console or mantel looks effortlessly styled. Layer a smaller
          piece in front for depth.
        </p>
        <h2>4. Adhesive hooks for small pieces</h2>
        <p>
          Small paintings on panel or paper can hang from a single adhesive hook, no nails needed.
        </p>
        <h2>5. Tension rods and easels</h2>
        <p>
          A floor easel turns one oversized piece into a gallery-style focal point, no wall required.
        </p>
        <div className="callout">
          Tip: small paintings on paper or thin panel are the easiest to hang damage-free. Many independent artists offer
          pieces in standard sizes that fit affordable ready-made frames.
        </div>
        <p>
          Looking for something light and simple? Browse our{" "}
          <Link href="/art/minimalist-wall-art">minimalist wall art</Link> picks.
        </p>
      </>
    ),
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
