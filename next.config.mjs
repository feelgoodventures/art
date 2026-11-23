/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "i.etsystatic.com" }],
  },
  // Build pages one at a time so the Etsy API isn't hit with many requests at once.
  experimental: {
    cpus: 1,
    staticGenerationMaxConcurrency: 1,
    staticGenerationRetryCount: 1,
  },
};
export default nextConfig;
