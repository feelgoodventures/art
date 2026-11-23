# WallGlamUp website

Curated wall art discovery site. Listings come from the Etsy API by keyword per style, refresh automatically once a day, and link out to Etsy (through Awin affiliate links once configured).

## Setup
1. Copy `.env.example` to `.env.local` (or add the same variables in Vercel > Settings > Environment Variables).
2. `npm install` then `npm run dev`.

With no `ETSY_API_KEY`, the site shows sample artwork so it can be previewed.

## Editing
- Styles and their search keywords: `lib/styles.ts`
- Journal posts: `lib/posts.tsx`
- Look and feel: `app/globals.css`
