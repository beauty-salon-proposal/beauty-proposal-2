/**
 * Central site configuration (FR-024, FR-001, FR-013).
 *
 * Every value below is traced to the supplied source material. None of it has
 * been re-confirmed by the owner yet — see docs/STATUS.md DEC-001..DEC-010.
 * Optional facts the owner has never supplied (street address, opening hours,
 * map pin, prices) are deliberately absent rather than filled with guesses.
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
  /** No exact street address or Google Maps pin has been supplied (DEC-003). */
  streetAddress: undefined as string | undefined,
  mapDirectionsUrl: undefined as string | undefined,
  /** No opening hours have been supplied (DEC-004). */
  openingHoursText: undefined as string | undefined,
  defaultLanguage: "en",
  languagesEnabled: ["en"] as const,
  /** Set SITE_URL at build time; canonical/sitemap are omitted without it. */
  publicBaseUrl: process.env.SITE_URL?.trim() || undefined,
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
