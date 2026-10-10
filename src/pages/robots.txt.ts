import type { APIRoute } from "astro";
import { isProduction } from "../lib/approval";

export const GET: APIRoute = () => {
  const site = process.env.SITE_URL?.trim().replace(/\/$/, "");

  // Preview builds carry unapproved images and unconfirmed facts, so they are
  // never indexable (see SiteLayout's noindex meta and STATUS.md DEC-009).
  if (!isProduction || !site) {
    return new Response(
      ["# Preview build — not for indexing.", "User-agent: *", "Disallow: /", ""].join("\n"),
      { headers: { "Content-Type": "text/plain; charset=utf-8" } },
    );
  }

  return new Response(
    ["User-agent: *", "Allow: /", "", `Sitemap: ${site}/sitemap-index.xml`, ""].join("\n"),
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
};
