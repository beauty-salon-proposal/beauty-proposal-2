/**
 * Canonical base URL for canonical/OG tags and the sitemap. Prefers an
 * explicit SITE_URL; falls back to the Vercel deployment domain on Vercel so
 * production builds on Vercel need no extra configuration. Omitted in local
 * preview builds, where canonical/sitemap must never leak (TC-010).
 */
function resolvePublicBaseUrl(): string | undefined {
  const explicit = process.env.SITE_URL?.trim().replace(/\/$/, "");
  if (explicit) return explicit;
  const vercelHost = (
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    ""
  )
    .trim()
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");
  return vercelHost ? `https://${vercelHost}` : undefined;
}

/**
 * Central site configuration (FR-024, FR-001, FR-013).
 *
 * Contact facts (phone, Instagram, area) come from the supplied source
 * material. The street address, opening hours, Google Maps link and
 * coordinates were confirmed from the owner-supplied Google Maps listing
 * (/"Kalai's beauty & academy", place id 0x3ba85fc48dd71297:0xf7de926d8c7698c1)
 * on 2026-10-10 — see docs/STATUS.md DEC-003 / DEC-004 (resolved).
 * Still unconfirmed facts (prices, course fees, membership benefits) remain
 * absent rather than guessed.
 */
export const site = {
  brandName: "Kalai's Beauty Salon & Spa",
  instagramHandle: "@kalai_makeupartistry",
  instagramUrl: "https://www.instagram.com/kalai_makeupartistry/",
  /** Printed on supplied promotional material; owner verification pending. */
  phoneDisplay: "+91 98420 23382",
  phoneE164: "+919842023382",
  /** wa.me digits, country code first, digits only (BR-009). */
  whatsappDigits: "919842023382",
  locationLabel: "Vadavalli, Coimbatore, Tamil Nadu",
  /** Confirmed from the owner-supplied Google Maps listing (DEC-003). */
  streetAddress: "Seendur Complex, Linganur Road, Linganoor, Vadavalli",
  addressLocality: "Vadavalli, Coimbatore",
  addressRegion: "Tamil Nadu",
  postalCode: "641041",
  addressCountry: "IN",
  /** Owner-supplied Google Maps share link, resolved 2026-10-10. */
  mapDirectionsUrl:
    "https://www.google.com/maps/place/Kalai's+beauty+%26academy+Coimbatore+vadavalli/@11.0228381,76.9082814,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba85fc48dd71297:0xf7de926d8c7698c1!8m2!3d11.0228381!4d76.9082814!16s%2Fg%2F11zymfzq28",
  latitude: 11.0228381,
  longitude: 76.9082814,
  /** Open every day, from the Google Maps listing (DEC-004). */
  openingHoursText: "Open daily, 10 AM to 8 PM",
  openingHoursOpens: "10:00",
  openingHoursCloses: "20:00",
  defaultLanguage: "en",
  languagesEnabled: ["en"] as const,
  /** Canonical base URL for OG/canonical/sitemap — omitted in local preview. */
  publicBaseUrl: resolvePublicBaseUrl(),
} as const;

export type SiteConfig = typeof site;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/bridal/", label: "Bridal" },
  { href: "/course/", label: "Beautician Course" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
] as const;

export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "bridal", label: "Bridal" },
  { id: "hair", label: "Hair" },
  { id: "salon", label: "Salon" },
] as const;

export type GalleryCategoryId = (typeof galleryCategories)[number]["id"];
