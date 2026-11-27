import { ArtStyle } from "./styles";

export type Artwork = {
  id: string;
  title: string;
  price: string;
  image?: string;
  url: string;
  source: string;
  tones: [string, string, string];
  sample?: boolean;
};

const API = "https://openapi.etsy.com/v3/application";
const REFRESH = 60 * 60 * 6; // re-check Etsy every 6 hours
const PER_STYLE = 24;

// Etsy allows only a few requests per second, so calls go out one at a time,
// spaced apart, and retry when Etsy says "too many requests" (429).
let queue: Promise<unknown> = Promise.resolve();
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function etsyFetch(url: URL, headers: Record<string, string>): Promise<Response> {
  const run = async () => {
    for (let attempt = 0; ; attempt++) {
      const res = await fetch(url, { headers, next: { revalidate: REFRESH } });
      if (res.status !== 429 || attempt >= 5) return res;
      const wait = Number(res.headers.get("retry-after")) * 1000 || 1000 * 2 ** attempt;
      await sleep(Math.min(wait, 15000));
    }
  };
  const next = queue.then(run, run);
  queue = next.then(() => sleep(250), () => sleep(250));
  return next;
}

const NOT_PAINTING =
  /\b(prints?|printable|poster|giclee|giclée|reproduction|digital|download|instant|canvas print|art print|wall decal|sticker|svg|png|jpg|pdf|file|template|set of \d+ prints)\b/i;

const memo = new Map<string, Promise<Artwork[]>>();

function apiKeyHeader() {
  const key = process.env.ETSY_API_KEY;
  if (!key) return null;
  const secret = process.env.ETSY_SHARED_SECRET;
  return secret ? `${key}:${secret}` : key;
}

function decode(text: string) {
  return text
    .replace(/&#39;|&#039;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function shortTitle(title: string) {
  const clean = decode(title).split(/[|,\-–]/)[0].trim();
  return clean.length > 70 ? clean.slice(0, 67).trimEnd() + "…" : clean;
}

function formatPrice(p?: { amount: number; divisor: number; currency_code: string }) {
  if (!p) return "";
  try {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: p.currency_code }).format(
      p.amount / p.divisor,
    );
  } catch {
    return `${(p.amount / p.divisor).toFixed(2)} ${p.currency_code}`;
  }
}

/** Wrap an Etsy URL in an Awin affiliate deep link once the IDs are configured. */
export function affiliateUrl(url: string) {
  const mid = process.env.AWIN_MERCHANT_ID;
  const affid = process.env.AWIN_AFFILIATE_ID;
  if (!mid || !affid) return url;
  return `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=${affid}&ued=${encodeURIComponent(url)}`;
}

function sampleArt(style: ArtStyle, count: number): Artwork[] {
  const [a, b, c] = style.tones;
  const rotations: [string, string, string][] = [
    [a, b, c],
    [b, c, a],
    [c, a, b],
  ];
  return Array.from({ length: count }, (_, i) => ({
    id: `${style.slug}-sample-${i}`,
    title: `${style.name} study no. ${i + 1}`,
    price: "",
    url: `https://www.etsy.com/search?q=${encodeURIComponent(style.keywords)}`,
    source: "Etsy",
    tones: rotations[i % 3],
    sample: true,
  }));
}

/**
 * Pulls active Etsy listings for a style. Pages using this are re-generated
 * at most once a day (ISR), so the site refreshes itself with no manual work.
 */
export async function getArtForStyle(style: ArtStyle, count = 24): Promise<Artwork[]> {
  let all = memo.get(style.slug);
  if (!all) {
    all = loadStyle(style);
    memo.set(style.slug, all);
  }
  const items = await all;
  return items.slice(0, count);
}

async function loadStyle(style: ArtStyle): Promise<Artwork[]> {
  const count = PER_STYLE;
  const header = apiKeyHeader();
  if (!header) {
    console.warn("[etsy] ETSY_API_KEY is not set; showing sample art.");
    return sampleArt(style, 12);
  }

  try {
    const headers = { "x-api-key": header };
    const search = new URL(`${API}/listings/active`);
    search.searchParams.set("keywords", style.keywords);
    search.searchParams.set("limit", "100");
    search.searchParams.set("sort_on", "score");
    const res = await etsyFetch(search, headers);
    if (!res.ok) throw new Error(`Etsy search ${res.status}: ${(await res.text()).slice(0, 300)}`);
    const found = (await res.json()) as {
      results: { listing_id: number; title: string; is_digital?: boolean; description?: string }[];
    };
    // Paintings only: drop prints, posters, reproductions and digital downloads.
    const ids = found.results
      .filter((r) => !r.is_digital && !NOT_PAINTING.test(decode(r.title)))
      .map((r) => r.listing_id)
      .slice(0, count + 8);
    if (!ids.length) return sampleArt(style, 12);

    const batch = new URL(`${API}/listings/batch`);
    batch.searchParams.set("listing_ids", ids.join(","));
    batch.searchParams.set("includes", "Images");
    const res2 = await etsyFetch(batch, headers);
    if (!res2.ok) throw new Error(`Etsy batch ${res2.status}: ${(await res2.text()).slice(0, 300)}`);
    const data = (await res2.json()) as {
      results: {
        listing_id: number;
        title: string;
        url: string;
        state?: string;
        price?: { amount: number; divisor: number; currency_code: string };
        images?: { url_570xN?: string; url_fullxfull?: string }[];
      }[];
    };

    return data.results
      .filter((l) => (l.state ?? "active") === "active" && l.images?.length)
      .slice(0, count)
      .map((l) => ({
        id: String(l.listing_id),
        title: shortTitle(l.title),
        price: formatPrice(l.price),
        image: l.images?.[0]?.url_570xN || l.images?.[0]?.url_fullxfull,
        url: l.url,
        source: "Etsy",
        tones: style.tones,
      }));
  } catch (err) {
    console.error("[etsy] Etsy fetch failed, showing sample art:", err);
    memo.delete(style.slug);
    return sampleArt(style, 12);
  }
}
