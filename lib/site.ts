export const site = {
  name: "WallGlamUp",
  tagline: "Wall art worth falling for",
  description:
    "WallGlamUp curates beautiful wall art from independent Etsy artists, organized by style and room, with styling guides to help you find the perfect piece.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://wallglamup.com").replace(/\/$/, ""),
};
