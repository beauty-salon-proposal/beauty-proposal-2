import type { APIRoute } from "astro";
import { isProduction } from "../lib/approval";
import { site } from "../data/site";

export const GET: APIRoute = () => {
  const baseUrl = site.publicBaseUrl;

  // Preview builds carry unapproved images and unconfirmed facts, so they are
  // never indexable (see SiteLayout's noindex meta and STATUS.md DEC-009).
  if (!isProduction || !baseUrl) {
    return new Response(
      ["# Preview build — not for indexing.", "User-agent: *", "Disallow: /", ""].join("\n"),
      { headers: { "Content-Type": "text/plain; charset=utf-8" } },
    );
  }

  return new Response(
    ["User-agent: *", "Allow: /", "", `Sitemap: ${baseUrl}/sitemap-index.xml`, ""].join("\n"),
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
};
