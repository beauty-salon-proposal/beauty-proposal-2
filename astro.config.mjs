// @ts-check
import { defineConfig } from "astro/config";

/**
 * Production base URL is intentionally not hard-coded: the owner has not
 * confirmed a custom domain yet (STATUS.md DEC-010). It resolves from, in
 * order: SITE_URL (explicit, preferred — set it when a custom domain exists),
 * VERCEL_PROJECT_PRODUCTION_URL, then VERCEL_URL. Without any of them the
 * build still succeeds, but sitemap.xml and canonical URLs are omitted so a
 * placeholder domain can never leak into production output.
 */
const explicitSite = process.env.SITE_URL?.trim().replace(/\/$/, "") || undefined;
const vercelHost = (
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL ||
  ""
)
  .trim()
  .replace(/^https?:\/\//, "")
  .replace(/\/$/, "");
const site = explicitSite ?? (vercelHost ? `https://${vercelHost}` : undefined);

export default defineConfig({
  site,
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: site ? [await import("@astrojs/sitemap")] : [],
  compressHTML: true,
  prefetch: { prefetchAll: true, defaultStrategy: "viewport" },
  devToolbar: { enabled: false },
});
