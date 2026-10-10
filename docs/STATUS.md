# Project Status — Initial Baseline

**Document ID:** STATUS-KBS-001  
**Baseline date:** 2026-10-10  
**Version:** 1.0  
**Status:** Planning baseline prepared; implementation not started

## 1. Truthful baseline

- **Project specification:** seven requested core documents drafted and cross-linked, plus practical asset/agent guidance.
- **Application implementation in this new project:** **0% / not started**.
- **Implementation preview built 2026-10-10 (same day, after the user confirmed that no site existed):** Astro static site scaffolded in this workspace (`package.json`, `astro.config.mjs`, `src/`, `public/`), 7 routes + 404 + robots, typed central data, enquiry-to-WhatsApp flow, gallery allow-list, 7 of 10 supplied images integrated via Astro image optimisation. Evidence: `npm run build` exit 0 (8 pages, 22 optimised images), `npm run check` 0 errors, `npm run test:smoke` 110/110 checks passed against `dist/`. This is a **local preview only**: it is `noindex`/`Disallow: /`, it has never been deployed, and every image/content record is still `needs-owner-approval`.
- **Production site:** not deployed by this project package.
- **Backend/database:** none planned for release 1.
- **Asset approval:** unknown; supplied images are preserved for review only.
- **Owner approval of requirements/theme/contact details:** pending unless separately confirmed after this baseline.
- **Test status:** test plan and test IDs are specified; tests have not been run because the website has not been implemented.
- **Discovery (MS-00) progress, 2026-10-10:** `PROJECT.md`, all seven core specs, `ASSET_GUIDE.md`, `IMPLEMENTATION_AGENT_BRIEF.md`, `assets/asset-manifest.csv` and the contact sheet were reviewed. Findings were classified as confirmed-from-source / missing / owner-approval-required. **No owner decision has been obtained yet**, so no business fact, image or design token is approved and no implementation task is complete.

A supplied HTML mockup and an external preview link were part of the materials. They are not considered this new project's implementation baseline and are not evidence that the requirements in this blueprint are implemented.

## 2. Documentation readiness

| Deliverable | Status | Notes |
|---|---|---|
| `PDR.md` | Drafted / review needed | Includes requirements, assumptions and owner confirmations required. |
| `SYSTEM_ARCHITECTURE.md` | Drafted / review needed | Static Astro + TypeScript proposed; no backend/database. |
| `SYSTEM_DESIGN.md` | Drafted / review needed | Routes, data contracts, validation, security, images and tests. |
| `USER_STORIES.md` | Drafted / review needed | Public journeys plus owner/developer stories. |
| `MILESTONES.md` | Planned | All milestones are not started. |
| `TASK.md` | Planned | Tasks T-001 through T-035 are backlog items, not completed tasks. |
| `STATUS.md` | Initial baseline | To be updated during implementation. |
| `ASSET_GUIDE.md` | Included supporting guide | Image suitability and consent still require owner review. |
| `IMPLEMENTATION_AGENT_BRIEF.md` | Included supporting guide | Copy-ready build instruction; not an implementation. |

## 3. Milestone tracker

Allowed statuses: `Not started`, `In progress`, `Blocked`, `Ready for review`, `Done`, `Deferred`.

| Milestone | Name | Status | Completion evidence |
|---|---|---|---|
| MS-00 | Discovery and owner sign-off | In progress | Discovery review of all specs + asset contact sheet completed 2026-10-10; T-001–T-004 still open pending owner decisions (BL-001–BL-006). |
| MS-01 | Foundation and quality gates | Done | `package.json` + lockfile, Node 24 pin, strict TS, astro/check/prettier/smoke scripts; clean install, `npm run build` exit 0, `npm run check` 0 errors, no secrets committed. |
| MS-02 | Shared shell and routes | Done | 7 routes + deliberate 404 resolve on direct visit, responsive keyboard/touch nav (Escape, closes on choice), single light theme, no search/theme picker; smoke-verified, reveal hides nothing on JS failure. Palette tokens provisional pending DEC-007. |
| MS-03 | Core content and enquiries | In progress | Preview routes carry source-supported copy with no invented facts; central config + WhatsApp builder tested. Blocked from launch: no owner content sign-off (T-001, BL-001/BL-004/BL-005). |
| MS-04 | Approved images and gallery | In progress | Allow-list, optimisation, filters, keyboard lightbox and held-poster boundary implemented and tested. Blocked: all 10 images still `needs-owner-approval` (BL-002); facial/course/certificate images excluded from output by design. |
| MS-05 | SEO, accessibility, motion and hardening | In progress | Per-route titles/descriptions, truthful BeautySalon JSON-LD (no fake rating/hours/address), noindex preview, GSAP reduced-motion-safe reveals, 110/110 smoke checks. Blocked: canonical/sitemap need SITE_URL (DEC-010); Lighthouse run still to do. |
| MS-06 | Owner review, launch and handover | Not started | Written approval, production smoke test and owner handover. |
| MS-07 | Optional expansions | Deferred | Only start if separately approved. |

## 4. Open decision register

| ID | Decision / question | Recommended default | Owner | State |
|---|---|---|---|---|
| DEC-001 | Official brand spelling and punctuation | `Kalai's Beauty Salon & Spa` as provisionally seen in source | Salon owner | Open |
| DEC-002 | Is `9842023382` still the public phone/WhatsApp number? | Do not publish until verified; then derive one central international number | Salon owner | Open |
| DEC-003 | Is exact address/map link available? | Show only Vadavalli, Coimbatore until a shareable pin/address is confirmed | Salon owner | Open |
| DEC-004 | Current service list, pricing and opening hours | Publish service names only after review; omit unconfirmed price/hours | Salon owner | Open |
| DEC-005 | Current 10-day course, fee and next batch dates | Keep course-topic overview, enquiry CTA; omit fee/date | Salon owner | Open |
| DEC-006 | Premium Membership Card benefits and terms | Teaser only, or hide if offer is inactive | Salon owner | Open |
| DEC-007 | Final colour | Lavender-led light background + sage accents | Salon owner / team | Proposed, not approved |
| DEC-008 | Tamil support in first release | English-only until full translation review | Salon owner / team | Open |
| DEC-009 | Are all Instagram pictures licensed/consented for public site use? | Treat every file as not approved until recorded | Salon owner / relevant clients/guardians | Open |
| DEC-010 | Hosting, repo and custom domain | Owner-controlled Git repository + Netlify as default | Client/team | Open |
| DEC-011 | GSAP interpretation | Include subtle scroll reveals as optional enhancement, remove search/theme picker | Team/owner | Proposed interpretation |
| DEC-012 | Reviews/testimonials and credential copy | No public placeholders; only verified owner-approved text | Salon owner | Open |

## 5. Risk register

| Risk ID | Risk | Likelihood / impact | Mitigation | Trigger / owner |
|---|---|---|---|---|
| R-001 | Photo consent unclear, especially for clients/minors | High / High | Permission inventory, strict approved-asset allow-list, choose safe alternatives. | Before publishing any photo; owner + developer. |
| R-002 | Old poster contains outdated number, fee or offer | Medium / High | Verify business facts with owner; central config; no unconfirmed prices/benefits. | Discovery and preview review; owner. |
| R-003 | Low resolution causes blurry hero or gallery | High / Medium | Use current images only for approved draft sizing; request originals; avoid enlarging 150×150 thumbnails. | Image QA; developer. |
| R-004 | Website promises a booking that was not recorded | Medium / High | Explicit WhatsApp hand-off copy; no “confirmed” language or fake scheduling. | Form tests and copy review; developer. |
| R-005 | Incomplete Tamil makes site confusing | Medium / Medium | English-only default; enable language toggle only after full translation QA. | Scope decision; owner/team. |
| R-006 | GSAP/third-party script slows or breaks site | Medium / Medium | Bundle/pin package; progressive enhancement; reduced-motion support; fallback tests. | Performance review; developer. |
| R-007 | Search visibility expectations are unrealistic | Medium / Medium | Technical SEO basics, accurate local copy and profile link; no ranking guarantee. | Owner briefing; marketing lead. |
| R-008 | Hosting/domain is controlled by an individual developer | Medium / High | Place accounts under business ownership; document access and renewal contact. | Before production; project lead. |
| R-009 | Unapproved source images leak through public output | Medium / High | Keep raw assets outside public directories; inspect built output; automated checks. | T-028; developer. |
| R-010 | Scope expands into jewellery commerce or real booking | High / Medium | PDR scope limits; create separate MS-07 project brief before adding backend features. | Change requests; project lead. |

## 6. Dependency and blocker log

| Blocker ID | Dependency | Blocks | Action |
|---|---|---|---|
| BL-001 | Owner confirms public phone/WhatsApp | T-002, T-010, T-016, production contact CTA | Ask owner and test a message on a phone. |
| BL-002 | Photo suitability and permissions | T-003, T-018–T-021, public launch | Review contact sheet and obtain permission; exclude unclear items. |
| BL-003 | Approved name/palette/language | T-004, T-007–T-009, copy review | Record one decision, leave alternatives out of production. |
| BL-004 | Exact address/map pin/hours | T-015 and local SEO fields | Ask owner; omit fields if unavailable. |
| BL-005 | Course and membership status/terms | T-013–T-014, copy approval | Verify whether offers are current and what is safe to publish. |
| BL-006 | Host and domain ownership | T-029–T-032 | Confirm account and DNS access before go-live. |

## 7. Current next actions

1. Complete T-001 to T-004 (owner confirmations and asset approval).
2. Start T-005 and T-006 only with configurable placeholders and the source-only asset boundary in place.
3. Implement shell/routes and core contact interactions before spending time on detailed motion.
4. Prioritise a true-to-brand, fast, accessible result over visual effects that make the page harder to use.

## 8. Update log

| Date | Change | Author/owner |
|---|---|---|
| 2026-10-10 | Initial planning baseline written; no implementation tasks marked complete. | Project planning |
| 2026-10-10 | MS-00 set to In progress: specification and asset review completed; T-001–T-004 remain open pending owner input. Evidence: 51 source files verified against `asset-manifest.csv`, all rows still `not-reviewed / not-approved`, all `owner_approval=pending`. Document defect found: `ASSET_GUIDE.md` §3 exclusion list cites helicopter file as `550715325_18538146442054596_8752546892839737077_n-20261010-161329.png`, but the actual file is `550715325_18538146442054596_5272403302578003066_n-20261010-161329.png` (the `8752546892839737077` segment belongs to `764752035_…`). Stray duplicate of the contact sheet also exists at repository root. No task marked done. | Discovery review |
| 2026-10-10 | Preview implementation built after confirming no site existed: Astro static scaffold (T-005/T-006), light lavender+sage shell + 7 routes + 404 (T-007–T-009), central config/services/course/faqs/gallery data with no invented facts (T-010–T-015), WhatsApp builder + validated enquiry form (T-016/T-017), allow-list gallery + 22 optimised images from 7 of 10 supplied files (T-018–T-021), GSAP reduced-motion reveals + truthful SEO (T-022–T-024), route/interaction tests added (T-026 subset: `tests/smoke.mjs`, 110/110 green). T-001–T-004 owner decisions still open, so MS-00/MS-03/MS-04/MS-05 stay non-launch; `dist/` verified free of held posters, `robots.txt` blocks all indexing. No deployment performed. | Builder |
| 2026-10-10 | Motion/SEO polish pass on the preview: Lenis smooth scroll wired to GSAP ScrollTrigger with anchor support, paused while the lightbox is open and fully disabled under `prefers-reduced-motion` (T-022); visual polish (hero halo + location tag, card/gallery hover, eyebrow rule, selection colour, button shadow); SEO hardening (T-023: BeautySalon + FAQPage JSON-LD with verified fields only, Twitter card, og:locale, Apple touch icon, all descriptions 50–160 chars, unique titles). Evidence: `npm run build` exit 0, `npm run check` 0 errors, `npm run test:smoke` 120/120 (incl. 10 new SEO assertions proving no canonical/sitemap/placeholder-domain leaks and no fake rating/hours/address in structured data). Still preview-only: owner approvals (BL-001–BL-006), SITE_URL and deployment outstanding. | Builder |

## 9. Status update template

When updating this file, append:

```text
Date:
Milestone / tasks changed:
Work completed (with evidence):
Tests run and result:
New blockers/risks:
Decisions requested:
Next tasks:
```
