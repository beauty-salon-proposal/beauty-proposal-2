# Kalai's Beauty Salon & Spa — website (preview build)

Static marketing site for **Kalai's Beauty Salon & Spa**, Vadavalli, Coimbatore.
Planned in `PROJECT.md` + `docs/`; this is the implementation, built with the
documented stack (Astro, static output, strict TypeScript, no backend).

> **Preview only — do not publish.** Every image is still
> `NEEDS OWNER APPROVAL BEFORE PUBLICATION` (see
> `Kalai_Site_Ready_Assets/Kalai_Site_Ready_Assets/IMAGE_PLACEMENT_MANIFEST.csv`
> and `docs/STATUS.md` BL-001–BL-006). Preview builds are served `noindex` and
> `Disallow: /` by design. Production (`BUILD_MODE=production`) refuses to
> render anything that is not owner-approved.

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install from the lockfile. Needs Node 24 (see `.nvmrc`). |
| `npm run dev` | Local development server. |
| `npm run build` | Preview build → `dist/` (default). |
| `BUILD_MODE=production npm run build` | Production build — fails if any rendered record lacks owner approval. |
| `SITE_URL=https://example.com npm run build` | Adds canonical URLs, sitemap and share image. Never invent the domain. |
| `npm run preview` | Serve `dist/` locally for review. |
| `npm run check` | `astro check` (types). Must be clean. |
| `npm run test:smoke` | Playwright smoke test: 110 checks over `dist/` (routes, overflow, images, gallery, form, reduced motion). |
| `npm run format` / `format:check` | Prettier write / check (planning docs in `docs/` are excluded). |

## Images

- Rendered images live in `src/assets/images/` and are optimised by Astro at
  build time (responsive widths, `loading="lazy"` below the fold, explicit
  dimensions, truthful alt text). `public/` holds only the favicon and the
  Apple touch icon.
- `src/assets/pending-approval/` holds files that exist in the project but are
  **never** served or referenced:
  - `course/beautician-course-poster.webp` — details unconfirmed (DEC-005)
  - `skin-care/facial-service-poster.webp` — offer unconfirmed (DEC-004)
  - `about/certificate-presentation.webp` — credential + consent unverified
- Raw `assets/instagram-source/` is reference-only and never enters `dist/`.
  Verified: none of the held files appear in the production output.

## Content rules (enforced, not just documented)

- No prices, fees, opening hours, street address, map pin, reviews,
  testimonials, membership benefits, awards or qualifications appear anywhere —
  unknown facts are omitted or answered with "ask us on WhatsApp".
- One central config: `src/data/site.ts`. One WhatsApp builder:
  `src/lib/whatsapp.ts` (`wa.me/919842023382`, digits from supplied material).
- Gallery renders only `approval === "approved"` in production mode.

## Current blockers (see `docs/STATUS.md` for the full register)

1. Owner must confirm the phone/WhatsApp number on a real phone (DEC-002).
2. Owner must approve all 10 supplied images + subject consent (DEC-009).
3. Owner must confirm name spelling, address/pin, hours, services, course
   fee/batches, membership terms, palette, Tamil scope (DEC-001–DEC-008).
4. No domain/hosting ownership yet, so no canonical URL or deployment (DEC-010).
