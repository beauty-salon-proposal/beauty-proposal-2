# PDR — Product Requirements Document

**Project:** Kalai's Beauty Salon & Spa marketing website  
**Document ID:** PDR-KBS-001  
**Version:** 1.0 initial baseline  
**Baseline date:** 2026-10-10  
**Status:** Proposed specification; owner approval pending  
**Implementation status:** Not started

## 1. Document language and confidence labels

- **Confirmed from conversation/source:** stated in the discussion or visible in the supplied Instagram-derived material.
- **Proposed:** a recommended solution that fits the project and should be reviewed.
- **Assumption:** used to make this blueprint buildable while waiting for confirmation.
- **Open:** cannot be decided responsibly from the supplied material alone.

This document describes a new project. It does not declare that a prototype or any feature is production-ready.

## 2. Product vision

Create a polished, lightweight, mobile-first marketing website for **Kalai's Beauty Salon & Spa** in Vadavalli, Coimbatore. The site should make it easy for prospective brides, salon customers, and students to understand the services, see approved work, build trust, and start a conversation via WhatsApp or phone.

The brand should feel elegant, contemporary, feminine without being cliché, and locally relevant. Use a light visual system with lavender as the lead colour and sage green as a supporting accent unless the owner selects an alternative. Focus on excellent typography, generous spacing, portrait-led portfolio imagery and purposeful motion rather than a heavy 3D experience.

## 3. Business context and source-derived facts

| Item | Current known value | Confidence / action |
|---|---|---|
| Public-facing name | Kalai's Beauty Salon & Spa | Seen in supplied Instagram-derived material; confirm spelling/apostrophe with owner. |
| Instagram | `@kalai_makeupartistry` | Seen in source discussion; verify live handle before launch. |
| Location | Vadavalli, Coimbatore, Tamil Nadu | Seen in supplied poster/material; exact address confirmed 2026-10-10 from the owner-supplied Google Maps listing: Seendur Complex, Linganur Road, Linganoor, Vadavalli, Coimbatore – 641041. |
| Phone | `9842023382` | Visible in supplied material; verify owner still uses it. |
| WhatsApp URL number | `919842023382` | Proposed international-format construction from the listed number; test before release. |
| Core service areas | Bridal makeup, hair styling/cuts, facials/skin care, ear piercing | Supported by supplied discussion and images. Confirm current availability. |
| Education offering | 10-day beautician course | Advertised in supplied material. Fee, dates, batch size and certificate details unknown. |
| Membership | Premium Membership Card promoted | Existence visible; benefits, terms and price unknown. |
| Jewellery | Imitation / gold-plated jewellery is promoted | Separate website is intended later; now use only a small teaser if owner approves. |
| Language | English first discussed; Tamil switch later requested in concept | Mixed signals. English-only is the release-1 recommendation until translations are approved. |
| Theme | Light theme; lavender, green or mixed options discussed | Lavender + sage green recommended; not formally signed off. |

## 4. Goals and measurable outcomes

| ID | Goal | Success measure |
|---|---|---|
| OBJ-001 | Turn local interest into enquiries | Every major service page has a clear WhatsApp CTA; event testing confirms it opens a prefilled message with the right service context. |
| OBJ-002 | Showcase genuine work professionally | Approved photos are grouped by service, sharp enough for their display size, accessible, and permission-tracked. |
| OBJ-003 | Explain distinct offerings | Visitors can find bridal services, everyday salon services, the 10-day course, and membership information within one or two interactions from the home page. |
| OBJ-004 | Improve local discoverability | Unique titles/descriptions, accurate local contact information, crawlable routes, sitemap/robots and valid applicable LocalBusiness structured data. Ranking is not guaranteed. |
| OBJ-005 | Keep operations simple | Static build, no site database, account system, admin panel, payment gateway or form submission backend in release 1. |
| OBJ-006 | Deliver a credible owner-review version quickly | First usable build uses current approved material or carefully labelled internal placeholders; launch is blocked by missing required facts/permissions. |

## 5. Target users and needs

1. **Bride / wedding party visitor:** wants to judge style, understand what's included, enquire about a date and contact the salon quickly.
2. **Everyday salon customer:** wants a concise service overview, approximate prices if approved, location, opening hours and phone/WhatsApp access.
3. **Prospective beautician student:** wants course topics, duration, upcoming batches, fees, outcomes and how to enrol. Only confirmed facts may be published.
4. **Existing customer / referral:** wants gallery images, direct contact details, directions and the Instagram profile.
5. **Salon owner / authorised marketer:** needs an easy-to-update static content structure and a clear approval process, without administering a database.
6. **Implementation developer:** needs authoritative, traceable requirements and acceptance checks.

## 6. Scope

### 6.1 Release 1 — included

- Responsive static marketing site with these routes: Home, Services, Bridal, Beautician Course, Gallery, About, Contact.
- Light-only lavender-led design, sage accent, accessible typography, consistent navigation and footer.
- Strong home hero with the brand/location context and primary WhatsApp enquiry action.
- Service cards and individual bridal-focused content with WhatsApp enquiry CTAs.
- Beautician course overview and published curriculum topics based on supplied material, with course enquiry CTA.
- Gallery with categories (All, Bridal, Hair, Skin/Care, Salon), accessible image enlargement, captions/alt text and an Instagram link. Only approved assets appear.
- About section with owner story/credential photo only after the owner verifies the wording and approves the image.
- Membership teaser; details stay generic until benefits and terms are confirmed.
- Small jewellery teaser that explains a dedicated jewellery site is planned; CTA points to WhatsApp until a real approved URL is supplied.
- Contact options: tap-to-call, WhatsApp, Instagram and Google Maps directions once a valid map link/pin is confirmed.
- Client-side enquiry form that validates fields, composes a WhatsApp message, and opens WhatsApp. It does not send messages automatically or persist personal details.
- Local SEO fundamentals, structured data using only verified values, social sharing metadata, canonical URLs, sitemap and robots policy.
- Subtle GSAP section/hero reveal motion as progressive enhancement, disabled or reduced when `prefers-reduced-motion` is set; no required content depends on animation.
- Functional QA, accessibility checks, performance checks, deployment and handover instructions.

### 6.2 Explicitly out of scope for release 1

- Separate jewellery e-commerce site, product catalogue, rental-date availability, cart, checkout, inventory, delivery tracking or payments.
- Backend/API/serverless functions, user accounts, admin dashboard, CMS, database, customer record storage or CRM.
- Real online appointment scheduling, availability calendar, automatic reminders or booking confirmation.
- Embedded live Instagram feed (use an outbound link or manually curated approved gallery items).
- Analytics/advertising trackers unless the owner approves purpose, privacy wording and configuration.
- Online payment/advance collection, before-and-after comparison slider until matching assets and consent exist.
- Claims about prices, awards, years of experience, qualifications, guaranteed results, ratings or testimonials without verification.

## 7. Functional requirements

Priority meanings: **P0** release blocker; **P1** release-1 essential; **P2** optional/after approval.

| ID | Priority | Requirement | Acceptance summary |
|---|---|---|---|
| FR-001 | P0 | Present the correct brand and location. | Approved name appears in header, title and footer; public location text matches owner-confirmed details. |
| FR-002 | P1 | Provide a responsive, light-only site shell. | Layout works at 320 px through large desktop widths; no dark-theme auto-switch or theme picker. |
| FR-003 | P1 | Provide seven primary routes: Home, Services, Bridal, Course, Gallery, About, Contact. | All links work on direct visit, refresh and internal navigation; 404 handling is deliberate. |
| FR-004 | P0 | Put a prominent contact/enquiry CTA in the hero and repeated appropriate places. | WhatsApp opens with contextual prefilled text; phone action is a valid `tel:` link. |
| FR-005 | P1 | Explain bridal makeup and styling. | Bridal route describes only owner-confirmed offerings and includes “check date / enquire” WhatsApp action. |
| FR-006 | P1 | Explain everyday services. | Bridal, hair styling/cuts, facials/skin care and ear piercing are represented if confirmed current. |
| FR-007 | P1 | Explain the 10-day beautician course. | Curriculum lists the sourced topics; fee and schedule are not invented; enrolment CTA opens WhatsApp. |
| FR-008 | P1 | Present gallery categories and enlargement. | Filters work by category; keyboard/touch can open and close a lightbox; alt text and focus handling work. |
| FR-009 | P0 | Prevent unauthorised or unsuitable imagery from publishing. | Gallery uses an allow-list of approved asset records; raw source folder is not copied wholesale into the public site. |
| FR-010 | P1 | Provide About/credentials content. | Uses owner-approved biography; any certificate/credential is transcribed only after verification. |
| FR-011 | P1 | Describe the membership offering without inventing its terms. | Show a teaser and enquiry CTA; benefits/pricing remain unpublished until confirmed. |
| FR-012 | P1 | Include a compact jewellery teaser only. | No product browse/cart/checkout; CTA uses WhatsApp until jewellery site URL is approved. |
| FR-013 | P1 | Provide contact and directions. | Phone, WhatsApp, Instagram and map link use verified destinations; missing data is not fabricated. |
| FR-014 | P1 | Provide a booking/enquiry form that hands off to WhatsApp. | Validates name/service/date/note; encodes message safely; user explicitly triggers WhatsApp open; offers fallback if popup/opening fails. |
| FR-015 | P1 | Provide useful FAQ content. | Answers are based on confirmed facts; unknown items say to enquire, not a made-up policy. |
| FR-016 | P1 | Implement local on-page SEO. | Unique title/description and heading hierarchy per route; canonical URLs, Open Graph tags, alt text and sitemap. |
| FR-017 | P1 | Emit accurate structured data. | Valid JSON-LD includes only verified `BeautySalon`/`LocalBusiness` fields; no fabricated ratings, hours, address or geo coordinates. |
| FR-018 | P1 | Provide a mobile navigation pattern. | Menu opens/closes, traps no unintended focus, supports Escape, announces state and closes after route choice. |
| FR-019 | P1 | Provide accessible, restrained motion. | GSAP reveals are non-essential, do not hide content on script failure, and respect reduced-motion settings. |
| FR-020 | P1 | Do not include site search or a theme picker. | No search field, theme selector or persistent floating design-control UI in production. |
| FR-021 | P2 | Support Tamil content toggle. | Only ship after full translation review; selected language updates all strings and language metadata consistently. |
| FR-022 | P2 | Add approved social proof. | Real reviews can be added only with owner approval and source/permission notes; no fabricated sample reviews are public. |
| FR-023 | P2 | Add approved prices/hours/course batches. | Data is displayed only after owner provides confirmed values and effective dates. |
| FR-024 | P1 | Make site content maintainable. | Services, FAQs, gallery records, navigation and site contact values live in typed data/config rather than scattered repeated literals. |
| FR-025 | P1 | Provide error/fallback behaviour. | Invalid gallery filter, missing image, unsupported route or WhatsApp hand-off failure never leaves a blank or inaccessible UI. |
| FR-026 | P1 | Deploy with HTTPS and reproducible build. | Git-based deploy, environment/version documented, preview deploy reviewed, production smoke test passed. |
| FR-027 | P1 | Keep page useful without JavaScript motion. | Content, navigation and contact links remain usable when animation scripts fail or are disabled. |
| FR-028 | P1 | Include legal/consent guardrails for photos. | Written owner permission and appropriate client/guardian permission recorded before publication; no confidential EXIF/location metadata is intentionally exposed. |
| FR-029 | P1 | Use performance-appropriate images. | Selected images have responsive display sizes, meaningful alt text, compression/format handling, lazy loading below fold and no oversized gallery payload. |
| FR-030 | P1 | Include release and handover documentation. | Owner knows how to request copy/image changes, which data must be verified, and who owns hosting/domain accounts. |

## 8. Non-functional requirements

| ID | Priority | Requirement | Measure / test |
|---|---|---|---|
| NFR-001 | P0 | Mobile-first responsive layout. | Test 320, 375, 768, 1024 and 1440 px; no horizontal overflow or clipped CTA. |
| NFR-002 | P1 | Performance. | Target Lighthouse Performance ≥90 on representative mobile/desktop test runs after images are optimised; Core Web Vitals should be reviewed on real traffic when available. This is a target, not a guarantee. |
| NFR-003 | P1 | Accessibility. | Aim WCAG 2.2 AA; keyboard nav, visible focus, semantic landmarks, labels, adequate contrast, alt text and reduced motion. |
| NFR-004 | P1 | SEO/crawlability. | Rendered HTML contains unique titles/descriptions, canonical URLs, working sitemap and appropriate robots rules. |
| NFR-005 | P1 | Reliability. | Static delivery does not depend on an application server or database; direct routes and refreshes resolve on host. |
| NFR-006 | P1 | Security/privacy. | No backend collection of form data; no secrets in source; external links are safe; approved image inventory only. |
| NFR-007 | P1 | Maintainability. | TypeScript strictness, lint/format checks, reusable components, documented content model and no unexplained duplicated contact literals. |
| NFR-008 | P1 | Browser support. | Validate current Chrome, Edge, Firefox and Safari, plus real Android/iOS viewport behaviour where available. |
| NFR-009 | P1 | Visual consistency. | Colour, type, spacing, card and motion tokens are centralised; one light theme only at release. |
| NFR-010 | P1 | Graceful degradation. | Site content works with animation disabled; WhatsApp/Instagram/Maps failures have straightforward fallbacks. |
| NFR-011 | P1 | Low operating complexity. | No paid backend service required to render or update static content. Hosting/domain costs must be explained to owner. |
| NFR-012 | P1 | Content trustworthiness. | No invented prices, reviews, credentials, dates, opening hours or health/beauty outcome promises. |

## 9. Business rules

| ID | Rule |
|---|---|
| BR-001 | Bridal makeup is the recommended leading service in page hierarchy; everyday salon services and course information follow prominently. Confirm with owner if business priorities differ. |
| BR-002 | A click on WhatsApp is only an enquiry hand-off; it is not a submitted booking or a booking confirmation. |
| BR-003 | Jewellery is a teaser only in this release. Do not implement jewellery checkout, catalogue or rental calendar here. |
| BR-004 | All prices, fees, batches, hours and membership details require owner approval before being visible. |
| BR-005 | Do not publish placeholder reviews or use placeholder copy that looks like a real endorsement. Hide the reviews section until genuine approved material exists. |
| BR-006 | Photos from social media are drafts/reference assets until usage rights and consent are confirmed; photos showing minors need explicit parent/guardian approval. |
| BR-007 | Never imply availability or confirm booking based only on the enquiry form. The owner replies manually through WhatsApp/phone. |
| BR-008 | Structured data must be consistent with visible page content and only use verified business facts. |
| BR-009 | If the public WhatsApp number changes, update the single central config and tests; do not search/replace across component templates. |
| BR-010 | A Tamil toggle must not be enabled with a partial translation that silently leaves key flows in a different language; either fully translate release scope or defer it. |
| BR-011 | Keep jewellery's CTA label honest (“Ask about jewellery” / “Coming soon”) until an actual approved store URL exists. |
| BR-012 | Do not add analytics, marketing pixels, cookie banners or embedded third-party feeds without owner approval and a documented data/privacy decision. |

## 10. Content and brand guardrails

### Proposed design tokens (not final until owner approval)

| Token | Recommendation | Use |
|---|---|---|
| Base background | `#FAF8FF` | Page canvas; keep overwhelmingly light. |
| Surface | `#FFFFFF` | Cards and content panels. |
| Primary text | `#2A2438` | Body and headings. |
| Muted text | `#6E6683` | Secondary copy; contrast-test on actual surface. |
| Primary action | `#6B4FA8` | Main buttons, links and accents. |
| Lavender tint | `#EDE6FA` | Soft panels and hero halo. |
| Sage accent | `#3F7A5A` | Supporting badges, secondary CTAs and accents. |
| Border | `#E5DDF1` | Dividers and subtle card outlines. |

The visual style should be editorial and polished, with large portrait imagery, asymmetrical but readable composition, white space, a clear typographic hierarchy and a small set of purposeful motion effects. Avoid excessive glassmorphism blur, large glowing blobs behind text, dark mode, search UI, fake counters, fake star ratings and intrusive animations.

### Copy rules

- Proposed hero line: “Bridal glow, healthy skin, beautiful hair.” Owner must approve before production.
- Use the name `Kalai's Beauty Salon & Spa` provisionally; verify the official legal/trading spelling.
- Only describe the course as “10-day” because this appears in the provided material; verify whether it remains current.
- Avoid medical claims about facial treatments. Say what service is offered, not that it cures a condition or guarantees results.
- Do not describe the owner as certified, award-winning, a specific number of years experienced, or “best” unless verifiable facts and owner permission are obtained.

## 11. Core acceptance gates

Release 1 is accepted only when all P0/P1 rows below are satisfied or formally waived by the owner:

- `TC-001` brand/contact facts reviewed and approved.
- `TC-002` all seven routes and navigation work, including direct-load/refresh checks.
- `TC-003` WhatsApp, phone, Instagram and confirmed directions actions work.
- `TC-004` enquiry form validates and composes the right WhatsApp message without storing it.
- `TC-005` published images are permission-cleared, selected for quality and have alt text.
- `TC-006` no fake reviews/prices/fees/hours/benefits or unverified credentials appear.
- `TC-007` responsive, keyboard, screen-reader basics and reduced-motion checks pass.
- `TC-008` SEO metadata, canonical links, sitemap, robots and structured data validate.
- `TC-009` production build passes and deployed routes/assets work over HTTPS.
- `TC-010` owner handover, account ownership and change process are documented.

## 12. Assumptions and unresolved questions

| ID | Type | Item | Recommendation / decision needed |
|---|---|---|---|
| A-001 | Assumption | Astro/static generation is suitable for the site. | Use it unless the team has an established simpler static stack that satisfies all requirements. |
| A-002 | Assumption | WhatsApp number in poster remains active. | Verify with owner before any preview is sent outside the team. |
| A-003 | Open | Whether Tamil must be in release 1. | Recommend English release 1; add Tamil only after full translation review. |
| A-004 | Open | Final palette and exact branding. | Present lavender-led + sage option for approval. |
| A-005 | Resolved | Exact map location and hours. | Resolved 2026-10-10 from the owner-supplied Google Maps listing: Seendur Complex, Linganur Road, Linganoor, Vadavalli, Coimbatore – 641041; open daily 10 AM–8 PM; map link and coordinates wired into `site.ts`. |
| A-006 | Open | Service names and current availability. | Ask the owner to verify every service. |
| A-007 | Open | Course price, schedule, capacity and terms. | Keep unconfirmed values as enquiry-only. |
| A-008 | Open | Membership benefits/price/eligibility. | Show minimal teaser only until confirmed. |
| A-009 | Open | Client reviews and public image permissions. | Gather written approval and use genuine review text only. |
| A-010 | Open | Hosting/domain ownership. | Use a Git-based Netlify deployment as proposed default, but create accounts under owner/company control. |
| A-011 | Assumption | No CMS needed. | Content changes are small enough for a developer-controlled source update in release 1. |

## 13. Traceability index

- Feature requirements map to users in `USER_STORIES.md`.
- System responsibilities and module mapping are in `SYSTEM_ARCHITECTURE.md` and `SYSTEM_DESIGN.md`.
- Delivery order is in `MILESTONES.md` and the task-by-task implementation sequence in `TASK.md`.
- Test IDs are defined in `USER_STORIES.md` / `SYSTEM_DESIGN.md` and traced again in `TASK.md`.
- Open risks and current baseline are recorded in `STATUS.md`.
