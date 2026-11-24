const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export const site = {
  name: "WallGlamUp",
  tagline: "Wall art worth falling for",
  description:
    "WallGlamUp curates original paintings from independent Etsy artists, organized by style and room, with styling guides to help you find the perfect piece.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || vercelUrl || "https://wallglamup.com").replace(/\/$/, ""),
};
