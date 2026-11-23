export type ArtStyle = {
  slug: string;
  name: string;
  keywords: string;
  title: string;
  blurb: string;
  intro: string[];
  tones: [string, string, string];
};

export const styles: ArtStyle[] = [
  {
    slug: "abstract-wall-art",
    name: "Abstract",
    keywords: "abstract wall art print",
    title: "Abstract Wall Art",
    blurb: "Bold shapes, soft washes and modern texture.",
    intro: [
      "Abstract art is the easiest way to bring color and energy to a room without committing to a theme. A single large canvas can anchor a living room, while a pair of smaller prints adds rhythm above a bed or console.",
      "Look for one or two colors already in your space, such as a cushion, rug or wood tone, and choose a piece that repeats them. It will feel considered rather than random.",
    ],
    tones: ["#c9775b", "#e8d5c0", "#3f4a4a"],
  },
  {
    slug: "boho-wall-art",
    name: "Boho",
    keywords: "boho wall art print",
    title: "Boho Wall Art",
    blurb: "Warm neutrals, sun shapes and relaxed charm.",
    intro: [
      "Boho wall art leans into warm earth tones, organic shapes and a collected-over-time feel. It pairs beautifully with rattan, linen, plants and natural wood.",
      "Boho walls work best layered: mix a sun or arch print with a textile piece or a small mirror for a relaxed gallery wall.",
    ],
    tones: ["#d4a373", "#f1e3d3", "#9c6644"],
  },
  {
    slug: "botanical-wall-art",
    name: "Botanical",
    keywords: "botanical wall art print",
    title: "Botanical Wall Art",
    blurb: "Leaves, florals and vintage plant studies.",
    intro: [
      "Botanical prints bring the calm of the garden indoors. Vintage plant studies feel classic in a study or hallway, while oversized leaves add drama to a living room.",
      "Prints in sets of two, three or four are especially easy to hang in a neat row or grid.",
    ],
    tones: ["#6b8f71", "#e9efe6", "#2f3e35"],
  },
  {
    slug: "minimalist-wall-art",
    name: "Minimalist",
    keywords: "minimalist line art print",
    title: "Minimalist Wall Art",
    blurb: "Line drawings and quiet, neutral compositions.",
    intro: [
      "Minimalist art proves that less really can be more. Single-line drawings, simple shapes and soft neutrals keep a room feeling calm and open.",
      "Give minimalist pieces plenty of wall space around them, and choose thin black, oak or white frames to keep the look clean.",
    ],
    tones: ["#2b2b2b", "#f4f1ec", "#b8ada0"],
  },
  {
    slug: "vintage-wall-art",
    name: "Vintage",
    keywords: "vintage art print wall decor",
    title: "Vintage Wall Art",
    blurb: "Old-world landscapes, still lifes and muted oils.",
    intro: [
      "Vintage-inspired art adds instant character, like something found in a European flea market. Muted landscapes and moody still lifes feel at home with both modern and traditional furniture.",
      "A vintage oil print in an ornate or chunky wood frame turns even a rental wall into a focal point.",
    ],
    tones: ["#8a7650", "#e6dcc8", "#4a3f35"],
  },
  {
    slug: "coastal-wall-art",
    name: "Coastal",
    keywords: "coastal beach wall art print",
    title: "Coastal Wall Art",
    blurb: "Ocean blues, sandy tones and breezy light.",
    intro: [
      "Coastal wall art brings a breath of sea air to any room: soft blues, sandy neutrals and lots of light. It suits bathrooms, bedrooms and sunny living spaces especially well.",
      "Keep the palette airy and pair it with white or natural wood frames for an effortless, beach-house feel.",
    ],
    tones: ["#6d98ab", "#eef3f2", "#c8b69a"],
  },
];

export const getStyle = (slug: string) => styles.find((s) => s.slug === slug);
