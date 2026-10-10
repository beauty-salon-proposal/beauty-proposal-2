// @ts-check
import { defineConfig } from "astro/config";

/**
 * Production base URL is intentionally not hard-coded: the owner has not
 * confirmed a domain yet (STATUS.md DEC-010). Set SITE_URL at build time, e.g.
 *   SITE_URL=https://example.com npm run build
 * Without it the build still succeeds, but sitemap.xml and canonical URLs are
 * omitted so a placeholder domain can never leak into production output.
 */
const site = process.env.SITE_URL?.trim() || undefined;

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
