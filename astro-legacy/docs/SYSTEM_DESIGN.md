# System Design — Implementation Blueprint

**Document ID:** DESIGN-KBS-001  
**Version:** 1.0 initial baseline  
**Status:** Proposed; implement only after the relevant discovery gates pass

## 1. Design principles

1. Use static HTML output and centralised typed content; avoid backend infrastructure.
2. Keep the design light, lavender-led and readable; use sage green as an accent.
3. Every main user journey ends in a clear action but never suggests the site itself confirmed a booking.
4. Treat owner-approved content and imagery as data with review/permission status, not as arbitrary files.
5. Keep animation optional, accessible and non-blocking.
6. Make missing business information visible in the internal content checklist, not as fake public values.

## 2. Recommended repository structure

```text
kalai-beauty-site/
├── PROJECT.md
├── docs/
│   ├── PDR.md
│   ├── SYSTEM_ARCHITECTURE.md
│   ├── SYSTEM_DESIGN.md
│   ├── USER_STORIES.md
│   ├── MILESTONES.md
│   ├── TASK.md
│   ├── STATUS.md
│   └── ASSET_GUIDE.md
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/                 # only approved, optimised assets if not processed from src/assets
├── src/
│   ├── assets/images/          # preferred location for images processed by Astro
│   ├── components/
│   │   ├── SiteHeader.astro
│   │   ├── MobileNavigation.astro
│   │   ├── SiteFooter.astro
│   │   ├── PageHero.astro
│   │   ├── SectionHeading.astro
│   │   ├── ServiceCard.astro
│   │   ├── WhatsAppLink.astro
│   │   ├── EnquiryForm.astro
│   │   ├── GalleryGrid.astro
│   │   ├── GalleryLightbox.ts
│   │   ├── FAQList.astro
│   │   ├── JewelleryTeaser.astro
│   │   └── Reveal.astro
│   ├── data/
│   │   ├── site.ts
│   │   ├── services.ts
│   │   ├── course.ts
│   │   ├── gallery.ts
│   │   ├── faqs.ts
│   │   └── translations/       # only if language support is approved
│   ├── layouts/
│   │   └── SiteLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── services.astro
│   │   ├── bridal.astro
│   │   ├── course.astro
│   │   ├── gallery.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── 404.astro
│   ├── scripts/
│   │   ├── navigation.ts
│   │   ├── enquiry-form.ts
│   │   ├── gallery.ts
│   │   └── motion.ts
│   └── styles/
│       ├── tokens.css
│       ├── global.css
│       └── utilities.css
├── tests/
│   ├── unit/
│   ├── e2e/
│   └── fixtures/
├── .editorconfig
├── .gitignore
├── package.json
├── package-lock.json (or the package manager's single lockfile)
├── tsconfig.json
├── astro.config.mjs
├── .nvmrc (or equivalent Node version pin)
└── README.md
```

This is a recommended target, not a claim that these files already exist. Do not commit raw image sources into `public/`. Keep one package manager and one lockfile. Root `PROJECT.md` may link to this documentation from the implementation repository.

## 3. Routes and page responsibilities

| Route | Primary goal | Required sections/components | Core IDs |
|---|---|---|---|
| `/` | Establish the brand and route people to the right service | Header, hero, bridal CTA, service overview, course teaser, approved gallery preview, owner/about preview, optional membership teaser, compact jewellery teaser, contact CTA, footer | FR-001–004, FR-011–013 |
| `/services/` | Explain everyday and special-occasion services | Service grid/detail rows, enquiry links, FAQ, contact band; prices only if approved | FR-006, FR-015, FR-023 |
| `/bridal/` | Convert wedding interest into a date enquiry | Bridal overview, approved portfolio, process/what to share, date enquiry form, FAQ | FR-005, FR-014 |
| `/course/` | Explain the 10-day course and invite student enquiries | Duration, approved curriculum topics, schedule/fee only if confirmed, enrolment CTA, FAQ | FR-007, FR-014, FR-023 |
| `/gallery/` | Show approved work and help visitors inspect it | Category filter, responsive images, lightbox, alt text/captions, Instagram link | FR-008–009 |
| `/about/` | Build trust without unsupported claims | Owner-approved story, verified credential photo/caption if approved, membership teaser, contact CTA | FR-010–011 |
| `/contact/` | Make contact and directions straightforward | Phone, WhatsApp, Instagram, confirmed map link/address/hours, enquiry form, FAQ | FR-013–015 |
| `404` | Recover from an invalid route | Plain helpful message and links to Home, Services and Contact | FR-025 |

Navigation should not include search. Route URLs are real static paths, not hash-only states.

## 4. Data model (build-time TypeScript; no database)

The following types are examples of content contracts. They are source objects, not persistent tables.

```ts
export type ApprovalState = "draft" | "needs-owner-approval" | "approved" | "do-not-publish";

export interface SiteConfig {
  brandName: string;
  instagramHandle: string;
  phoneDisplay: string;
  phoneE164: string; // e.g. +919842023382; owner must verify
  whatsappDigits: string; // wa.me form without plus signs
  locationLabel: string;
  publicBaseUrl: string;
  defaultLanguage: "en";
  languagesEnabled: Array<"en" | "ta">;
  mapDirectionsUrl?: string; // only after verified
  openingHoursText?: string; // omit until verified
}

export interface ServiceItem {
  id: string;
  name: string;
  summary: string;
  category: "bridal" | "hair" | "skin-care" | "piercing" | "other";
  featured: boolean;
  approval: ApprovalState;
  priceText?: string; // never populate without owner approval
  enquiryLabel: string;
}

export interface GalleryItem {
  id: string;
  src: ImageMetadata | string;
  alt: string;
  caption?: string;
  category: "bridal" | "hair" | "care" | "salon" | "course" | "jewellery";
  approval: ApprovalState;
  consentRecordId?: string; // internal tracking only; never rendered publicly
  sourceFilename: string; // provenance/audit
  showOnWebsite: boolean;
}

export interface CourseModule {
  id: string;
  title: string;
  summary: string;
  approval: ApprovalState;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  approval: ApprovalState;
}
```

Implementation rules:

- The render layer must filter gallery items so that only `approval === "approved" && showOnWebsite === true` are rendered. Add a build-time assertion/test that fails if a public gallery item is not approved.
- The internal consent record identifier is for the private project checklist; do not publish that ID, consent scans or private documentation.
- Public content only contains facts the owner reviewed. Missing optional values are omitted, not rendered as “₹...” or dummy text.
- A `src` may use Astro's image metadata when imported through `src/assets/images/`, allowing responsive image helpers. Public paths should be used only where required.

## 5. Navigation and component contracts

| Component/module | Responsibility | Behaviour and constraints |
|---|---|---|
| `SiteLayout` | Shared page shell, metadata, font setup, global styles and consistent layout | Requires `title`, `description`, canonical path and Open Graph values; no dark-mode logic. |
| `SiteHeader` | Brand, desktop navigation and main CTA | Semantic `<header>` and `<nav>`; marks active route; no search field or theme picker. |
| `MobileNavigation` | Small-screen nav drawer | Toggle button exposes `aria-expanded` and `aria-controls`; Escape closes; focus remains understandable; route choice closes it. |
| `PageHero` | Reusable title/intro/CTA layout | Content-first; image optional; no text baked into images. |
| `ServiceCard` | Show service title/short description/enquiry action | Uses configured enquiry intent; do not render unapproved prices. |
| `WhatsAppLink` | Single consistent click-to-chat link constructor | Builds links from one central verified number, uses encoded text, opens only on explicit click. |
| `EnquiryForm` | Collect minimal information client-side and build a WhatsApp draft | Accessible labels, required/optional flags, validation messages, max lengths, no backend persistence, no auto-send. |
| `GalleryGrid` | Render approved gallery images, category filters and captions | Alt text mandatory; no thumb-sized images used at large display sizes. |
| `GalleryLightbox` | Enlarge the selected gallery image | Close button and Escape key; manage focus; no keyboard trap after close; touch-friendly controls. |
| `FAQList` | Publish approved question/answer content | Use native disclosure semantics or an accessible accordion; hide unapproved FAQs. |
| `JewelleryTeaser` | Explain separate jewellery site is planned | URL falls back to a WhatsApp enquiry until an owner-approved dedicated URL is added. |
| `Reveal` / `motion.ts` | Add subtle progressive-enhancement animation | GSAP only; animation setup must be idempotent and cleaned up; reduced motion disables transforms and long transitions. |
| `SiteFooter` | Contact links, business name, route links and copyright | No fake address/hours; no invented legal business identifiers. |

## 6. WhatsApp contract and validation

### URL construction

- Base URL: `https://wa.me/{WHATSAPP_DIGITS}?text={ENCODED_MESSAGE}`.
- `WHATSAPP_DIGITS` is configured once, contains country code plus digits only and is verified by the owner.
- Build `ENCODED_MESSAGE` with `encodeURIComponent()` from a constrained template. Do not string-concatenate raw field text into a URL.
- Open the target only after a user click/submit. Do not trigger it on page load, route change or keystroke.
- Use `target="_blank"` with `rel="noopener noreferrer"`, or direct same-tab navigation if popup blocking/testing makes it more reliable. Document the chosen pattern.
- On form submission, show a message such as “WhatsApp will open with your enquiry. Review it and press Send there; this does not confirm a booking.”
- If the application cannot open WhatsApp, show the phone number and a copyable message fallback.

### Proposed fields

| Field | Requirement | Validation |
|---|---|---|
| Name | Required | Trim whitespace; 2–80 characters; do not reject normal Tamil/Unicode names. |
| Enquiry type | Required select | One of configured options: Bridal makeup, Salon service, Beautician course, Membership, General enquiry. Jewellery can be included as “Jewellery enquiry” but still routes to WhatsApp. |
| Desired date | Optional except where bridal date is requested | Valid date input; prevent past date if business requests this rule, but do not imply availability. |
| Note | Optional | Trim; maximum 500 characters; remove control characters; normal punctuation and Unicode remain valid. |
| Contact number | Not collected in the first form | WhatsApp itself carries the user's response path; collect more only if owner has a clear need. |

### Message examples

General: `Hi Kalai's Beauty Salon & Spa, I'd like to enquire about {service}. Name: {name}. Preferred date: {date-or-not-specified}. Note: {note-or-none}.`

Course: `Hi, I'd like details about the 10-day beautician course. Name: {name}. Please share the next batch dates and fees.`

The examples are draft copy. Keep them centralised, test URL encoding for apostrophes, Tamil text, ampersands, emoji and line breaks, and get owner approval for tone.

## 7. Image pipeline and asset placement

The blueprint archive preserves all 51 source images in `assets/instagram-source/` plus a contact sheet. That folder is **not** a production public directory.

Workflow:

1. Review `docs/ASSET_GUIDE.md` and the contact sheet.
2. Verify that each candidate belongs to the business and is appropriate for the chosen section.
3. Ask for owner/client/guardian consent where identifiable people appear.
4. Select only images that pass the `approved` gate; keep original source filename in the internal manifest.
5. Copy or import selected images to the implementation repository's `src/assets/images/` tree, preferably with descriptive filenames and modern responsive derivatives.
6. Generate alt text that describes the visual content without guessing identity or making unsupported claims. Do not put promotional text solely inside an image where HTML copy is needed for SEO/accessibility.
7. Inspect cropping on mobile/desktop; use `object-position` or explicit focal point where appropriate.
8. Check image size/format, remove unnecessary metadata, and test no build emits the source-only folder.

Proposed production directories:

```text
src/assets/images/
├── brand/
├── hero/
├── bridal/
├── hair/
├── skin-care/
├── salon/
├── course/
├── membership/
└── jewellery-teaser/
```

The names above describe destinations after approval, not permission to publish the images in those categories. Exclude unrelated travel/family/food/helicopter-ad content, low-resolution 150×150 thumbnails in large hero/gallery slots, and any image whose subject/consent is unclear.

## 8. Design system

### Tokens

Define CSS custom properties in `tokens.css`. Start with the proposed PDR palette; run contrast tests against exact text/background combinations. Aesthetic preference does not override readable contrast.

### Typography

- One elegant high-contrast serif for display headings and one readable sans serif for body/UI, with safe fallbacks.
- Keep heading line length restrained and copy legible on 320–375 px screens.
- Use a limited number of font weights; do not block rendering on multiple remote font families.

### Layout/components

- Content width around 68–76 rem on desktop; comfortable side gutters on phone.
- Grid cards collapse cleanly to one column on smaller viewports; galleries can use a two-column mobile grid if images remain legible.
- Use consistent corner radii and subtle borders/shadows. Use blur/glass effects sparingly and only where performance/readability survive.
- Primary CTA uses one brand accent consistently; provide visible hover, active and focus states.
- Sticky header is acceptable if it does not cover anchor targets; use scroll margin for focused sections.
- The mobile bottom contact bar is optional; if used, it must not cover content, cookies/consent controls or form buttons, and it must account for device safe areas.

## 9. SEO implementation detail

For each route:

- Unique `<title>` and meta description; no duplicate all-site generic title.
- One meaningful H1, ordered H2/H3 headings and descriptive link labels.
- Canonical URL based on the actual production domain.
- Open Graph/Twitter metadata and an approved share image.
- Descriptive alt text for content imagery; decorative images get empty alt text.
- Sitemap generation from static routes; `robots.txt` allows indexing only on production.
- Structured data only includes accurate values and passes JSON parsing/validator review. Remove fields that are unknown.

Suggested title patterns (drafts pending owner approval):

- Home: `Kalai's Beauty Salon & Spa | Vadavalli, Coimbatore`
- Bridal: `Bridal Makeup & Styling in Vadavalli, Coimbatore | Kalai's Beauty Salon & Spa`
- Course: `10-Day Beautician Course in Coimbatore | Kalai's Beauty Salon & Spa`

Do not claim “top rated”, “award-winning”, “best in Coimbatore” or similar without evidence.

## 10. Language handling

Release recommendation: English-only until the owner requests Tamil and a reviewer can approve the translations. If Tamil is confirmed, use a complete translation dictionary or content variants, set the document `lang` correctly, use correct route/language links, translate all labels/errors/forms/metadata and verify line wrapping for Tamil script. Do not translate only the hero/headings and leave critical form/error content untranslated.

## 11. Error handling and edge cases

- Missing image: do not render a broken icon; skip the item or show a non-public build error during development. Approved image paths should be validated in tests.
- Image cannot load: accessible fallback description and the rest of the page remain usable.
- Invalid or empty form: prevent WhatsApp open, announce the issue and focus the first invalid field.
- WhatsApp open blocked: display phone number, “copy enquiry message” action if supported, and instruction to message manually.
- Unsupported gallery category: reset to “All” or show a clear no-results message; never blank the entire page.
- Reduced motion: do not run reveals or parallax; ensure content is visible by default.
- JS fails: static nav links and phone/WhatsApp anchors remain available; no reveal styles may start content at opacity 0 without a working fallback.
- Production base URL missing: fail build or emit a clear warning before canonical URLs/sitemap are deployed.
- Unknown contact or address values: omit map/opening-hours field rather than guessing.

## 12. Accessibility requirements

- Keyboard access to menus, gallery filters, lightbox, forms, disclosures and close controls.
- Visible focus indicators; no colour-only status cues.
- Label every form field; errors use `aria-describedby` and are announced.
- Give icon-only buttons accessible names.
- Lightbox: dialog semantics, initial focus inside, Escape closes, returns focus to the opening thumbnail, and provides a visible close button.
- Motion: honour `prefers-reduced-motion`; no autoplaying or endless effects.
- Maintain readable contrast and support zoom to 200% without clipped controls.
- Use descriptive, human alt text and captions where they add information. Don't use filenames as alt text.

## 13. Test plan and IDs

| ID | Scenario | Requirements |
|---|---|---|
| TC-001 | Brand, phone and location facts match the owner-approved checklist. | FR-001, BR-009 |
| TC-002 | Every route opens directly, refreshes and navigates without 404s. | FR-003, FR-025 |
| TC-003 | Header/footer/CTA links use valid WhatsApp, phone, Instagram and map URLs. | FR-004, FR-013 |
| TC-004 | Enquiry validation blocks invalid entries and creates a correctly encoded WhatsApp draft. | FR-014, BR-002 |
| TC-005 | No form data is transmitted/persisted; no backend endpoints are required. | FR-014, NFR-006 |
| TC-006 | Gallery categories filter correctly and only approved records appear. | FR-008, FR-009, BR-006 |
| TC-007 | Gallery lightbox works with keyboard, touch, Escape and focus return. | FR-008, NFR-003 |
| TC-008 | Course topics match the supplied poster and unknown fees/dates are not fabricated. | FR-007, BR-004 |
| TC-009 | Membership and jewellery areas contain no unapproved details or store functionality. | FR-011, FR-012, BR-003 |
| TC-010 | SEO metadata/canonical/OG/sitemap/robots/structured data are valid and route-specific. | FR-016, FR-017 |
| TC-011 | Reduced-motion mode keeps all content visible and disables non-essential motion. | FR-019, FR-027, NFR-003 |
| TC-012 | Screen size matrix has no horizontal overflow or obscured controls. | FR-002, NFR-001 |
| TC-013 | Colour contrast, focus states, accessible labels and form errors are reviewed. | NFR-003 |
| TC-014 | Build/lint/typecheck are reproducible from a clean checkout. | FR-026, NFR-007 |
| TC-015 | Production HTTPS routes/assets and outbound links pass smoke test. | FR-026 |
| TC-016 | Source-only/unapproved assets do not appear in build output. | FR-009, FR-028 |
| TC-017 | There is no search field, theme picker or dark mode. | FR-020 |
| TC-018 | If Tamil is enabled, all exposed content/metadata/error messages have reviewed translation. | FR-021, BR-010 |
| TC-019 | Optional prices/hours/reviews/benefits appear only if approved. | FR-022, FR-023, BR-004, BR-005 |
| TC-020 | No analytics, pixels or embedded social feed are added without approval. | BR-012, NFR-006 |
| TC-021 | Performance review assesses Lighthouse target (90+ performance as a target), image sizing, layout shift and mobile loading; document exceptions. | NFR-002, NFR-005, NFR-010 |
| TC-022 | Owner preview sign-off, image/content approval, production account ownership and handover evidence are recorded before launch. | FR-028, FR-030, US-011–US-013 |

## 14. Developer workflow and coding standards

- Commit small changes against the task IDs; use commit/PR descriptions such as `T-012: build service content modules`.
- TypeScript strict mode; avoid `any` unless justified and narrowly scoped.
- Prefer semantic HTML and native elements over custom controls.
- Use a single source for public phone, Instagram, maps and canonical URL.
- Run formatter, lint, type-check, automated tests and production build before review.
- Do not silently change requirements or invent source facts; add unresolved questions to `STATUS.md` and pause dependent production content.
- Update docs when a route, content shape, decision, task or test changes.
