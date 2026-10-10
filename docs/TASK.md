# Task Backlog

**Document ID:** TASKS-KBS-001  
**Version:** 1.0 initial baseline  
**Status:** Planned only; no implementation tasks are marked complete

## 1. How to use this backlog

- Work top to bottom unless a dependency explicitly permits parallel execution.
- Tasks are not complete simply because a component exists; the listed acceptance criteria and tests must pass.
- `P0` = release blocker / must resolve; `P1` = required for release 1; `P2` = optional approved follow-up.
- `Owner` means the person accountable for completion (developer, owner/client, or both). It is not a user account in the website.
- If a dependency cannot be met, pause the dependent task and record the blocker in `STATUS.md`.

## 2. Ordered implementation backlog

| Task | Milestone | Priority | Depends on | Requirements / stories | Affected modules | Task output |
|---|---|---:|---|---|---|---|
| T-001 | MS-00 | P0 | — | FR-001, FR-006–007, FR-013, FR-023; US-011 | Discovery/content checklist | Owner-approved facts and decision log |
| T-002 | MS-00 | P0 | T-001 | FR-001, FR-004, FR-013; US-006 | Site contact config | Verified phone/WhatsApp, Instagram and map choice |
| T-003 | MS-00/MS-04 | P0 | — | FR-009, FR-028–029; US-012 | Asset register | Per-image approve/reject/needs-consent decisions |
| T-004 | MS-00 | P1 | T-001 | FR-002, FR-020–021; US-010, US-014 | Design/language/hosting decisions | Palette, language and host decision notes |
| T-005 | MS-01 | P1 | T-004 (or provisional theme) | FR-026; US-013 | Repo/toolchain | Astro static scaffold, TypeScript, pinned runtime and lockfile |
| T-006 | MS-01 | P1 | T-005 | FR-026; NFR-007; US-013 | Quality/CI scripts | Lint, format, typecheck, tests and build commands |
| T-007 | MS-02 | P1 | T-005 | FR-002, FR-020; US-001, US-010 | `tokens.css`, global CSS | Single light theme with central tokens and responsive primitives |
| T-008 | MS-02 | P1 | T-007 | FR-001–003, FR-016; US-001 | Layout, routes, SEO shell | Shared layout and seven routes with real path URLs |
| T-009 | MS-02 | P1 | T-008 | FR-018, FR-020; US-010 | Header/mobile navigation/footer | Keyboard/touch-accessible site navigation; no search/theme control |
| T-010 | MS-03 | P1 | T-001, T-008 | FR-001, FR-024; US-001, US-013 | `src/data/site.ts` | Central typed config for brand, contact, URL and location |
| T-011 | MS-03 | P1 | T-001, T-008, T-010 | FR-006, FR-015, FR-023; US-003 | Services data and `/services/` | Verified service grid, pricing omitted or enquiry-only |
| T-012 | MS-03 | P1 | T-010, T-011 | FR-004–005, FR-014; US-002 | `/bridal/`, CTA content | Bridal page with approved copy and date-enquiry path |
| T-013 | MS-03 | P1 | T-001, T-010 | FR-007, FR-014, FR-023; US-004 | `course.ts`, `/course/` | Course topics and enquiry page, no fabricated fees/schedule |
| T-014 | MS-03 | P1 | T-010 | FR-011–012; US-007–008 | About/home teasers | Membership and compact jewellery teaser with honest copy |
| T-015 | MS-03 | P1 | T-002, T-010, T-011 | FR-013, FR-015; US-006, US-009 | `/contact/`, FAQ data | Verified contact cards, directions fallback and approved FAQs |
| T-016 | MS-03 | P0 | T-002, T-010 | FR-004, FR-014; US-002–004, US-006 | WhatsApp URL utility | Safe message builder and unit tests for Unicode/encoding |
| T-017 | MS-03 | P1 | T-016 | FR-014, FR-025; US-002–004 | `EnquiryForm`, `enquiry-form.ts` | Validated client-side hand-off with messaging and fallback |
| T-018 | MS-04 | P0 | T-003 | FR-009, FR-028; US-012 | Asset manifest/content review | Explicit approved asset allow-list; no uncertain photos exposed |
| T-019 | MS-04 | P1 | T-018, T-005 | FR-008–009, FR-029; US-005 | `src/assets/images/`, gallery data | Selected, optimised assets with alt text, provenance and variants |
| T-020 | MS-04 | P1 | T-019, T-008 | FR-008–009, FR-025; US-005 | `/gallery/`, `GalleryGrid`, lightbox | Filter and accessible image enlargement |
| T-021 | MS-04 | P1 | T-019 | FR-002, FR-029; NFR-002 | Image layout | Responsive hero/gallery crop, sizing, lazy loading and dimensions |
| T-022 | MS-05 | P1 | T-008, T-012–T-015 | FR-019, FR-027; US-010 | `motion.ts`, `Reveal` | Restrained GSAP reveal with reduced-motion and no-JS fallback |
| T-023 | MS-05 | P1 | T-008, T-010 | FR-016–017; US-001, US-009 | SEO metadata, sitemap, robots, JSON-LD | Route-specific metadata and verified structured data |
| T-024 | MS-05 | P1 | T-009, T-017, T-020, T-022 | FR-018–019; NFR-003 | Accessibility | Keyboard, focus, contrast, form labels/errors and reduced-motion review |
| T-025 | MS-05 | P1 | T-010–T-020 | FR-024–025, FR-009; US-013 | Unit/content validation | Tests fail on missing config, unapproved images, invalid routes/content |
| T-026 | MS-05 | P1 | T-008–T-025 | FR-003–004, FR-014, FR-026 | E2E/route tests | Core route, CTA, form and gallery automated checks |
| T-027 | MS-05 | P1 | T-020–T-026 | NFR-001, NFR-008; US-010 | Whole site | Responsive/browser manual QA record |
| T-028 | MS-05 | P1 | T-021–T-027 | NFR-002, NFR-004–006 | Whole site / build output | Lighthouse/performance, SEO validation and public asset audit |
| T-029 | MS-06 | P0 | T-027–T-028 | FR-030; US-011–012 | Preview deployment | Review link and owner checklist sent to authorised reviewers |
| T-030 | MS-06 | P0 | T-029 | FR-001, FR-005–017, FR-022–023, FR-028 | Content and page components | Addressed owner feedback and final approval recorded |
| T-031 | MS-06 | P0 | T-030 | FR-026; NFR-005–006 | Production hosting | Approved production deployment over HTTPS |
| T-032 | MS-06 | P1 | T-031 | FR-026, FR-030; US-013 | README/handover | Smoke test, rollback/account ownership and update guide |
| T-033 | MS-07 | P2 | T-004, T-032 | FR-021; US-014 | Translation dictionary/routes | Fully reviewed Tamil content/toggle if specifically approved |
| T-034 | MS-07 | P2 | T-032 | BR-012, NFR-006 | Analytics/privacy docs | Analytics only with owner approval and documented privacy decision |
| T-035 | MS-07 | P2 | T-032 | BR-003; future scope | Separate project discovery | Separate jewellery site requirements, catalogue and commerce decisions |

## 3. Task implementation cards

### T-001 — Confirm business facts and public content

- **Goal:** make P0 business content accurate before implementation uses it.
- **Actions:** ask the owner to confirm public name, current services, what bridal work includes, current 10-day course status/topics, membership offer status, any prices, opening hours, exact address, language preference and final palette.
- **Acceptance:** a checklist marks each value `approved`, `unknown/omit`, or `not applicable`; no assumed value is marked approved.
- **Tests/evidence:** TC-001, TC-008, TC-019; owner response or written confirmation.

### T-002 — Verify contact destinations

- **Goal:** avoid dead or incorrect lead links.
- **Actions:** verify the 10-digit number; create/validate international digits-only WhatsApp target; confirm exact Instagram profile URL; obtain a shareable Google Maps pin or explicitly omit the directions link.
- **Acceptance:** calling and WhatsApp have both been tested on at least one phone; map falls back to area text if exact pin is unavailable.
- **Tests/evidence:** TC-003, TC-015.

### T-003 — Review all supplied images and permissions

- **Goal:** decide which, if any, images may be public.
- **Actions:** inspect `assets/reference/instagram-image-contact-sheet.jpg`, review full-size originals in `assets/instagram-source/`, map candidates to sections, reject unrelated personal images and thumbnails, record consent and owner decision.
- **Acceptance:** only approved IDs enter the public allow-list; all uncertain items remain source-only.
- **Tests/evidence:** TC-006, TC-016.

### T-004 — Confirm design, language and hosting

- **Goal:** close open decisions that affect structure.
- **Actions:** approve lavender-led light palette or change tokens; confirm if full Tamil is required now; confirm Netlify or existing host; identify owner of domain/repository.
- **Acceptance:** decisions are recorded in `STATUS.md`; default if no decision: light lavender + sage, English only, static Netlify preview.
- **Tests/evidence:** TC-017; add TC-018 only if Tamil is approved.

### T-005 — Scaffold the application

- **Actions:** initialise Astro static project, enable TypeScript strict mode, pin a currently supported Node LTS version, choose npm unless team standard differs, commit one lockfile, configure static output and the intended trailing-slash route strategy.
- **Acceptance:** clean install and build work locally; no backend/server adapter added without approved need.
- **Tests/evidence:** TC-014.

### T-006 — Add baseline code quality and continuous checks

- **Actions:** add formatting/lint scripts, typecheck, unit-test runner and CI workflow; keep external dependencies limited; document all commands.
- **Acceptance:** checks can run from a clean clone; CI blocks failed build/type/lint tests.
- **Tests/evidence:** TC-014.

### T-007 — Build design tokens and responsive primitives

- **Actions:** define colour/type/spacing/radius/shadow/focus/transition variables; create buttons, container/grid helpers and page spacing; use approved light palette only.
- **Acceptance:** visual system is consistent and contrasted; no CSS dark-mode override or theme picker exists.
- **Tests/evidence:** TC-012, TC-013, TC-017.

### T-008 — Create page layout and routes

- **Actions:** implement layout, route metadata API, seven real routes, 404 page, shared footer and CTA components; include provisional content only in local review builds when owner text is missing.
- **Acceptance:** direct URLs and refresh work; route table matches `SYSTEM_DESIGN.md`.
- **Tests/evidence:** TC-002, TC-010.

### T-009 — Create responsive, accessible navigation

- **Actions:** build desktop header, mobile drawer, focus management, Escape behaviour, active links, sticky-header anchor offset and footer links.
- **Acceptance:** keyboard/screen reader state and phone interaction pass; no search or theme controls.
- **Tests/evidence:** TC-012, TC-013, TC-017.

### T-010 — Centralise site configuration

- **Actions:** add typed single-source values for brand, phone, WhatsApp, Instagram, location label, public base URL, enabled language, verified map link and hours when supplied.
- **Acceptance:** repeated site values are not hard-coded in separate page components; optional unknown values are omitted.
- **Tests/evidence:** TC-001, TC-003, TC-014.

### T-011 — Create services content and route

- **Actions:** represent only owner-confirmed service items; render service grid/list; add enquiry CTAs; show prices only with approval.
- **Acceptance:** services are labelled plainly and accurately; service-specific CTA message contains selected service.
- **Tests/evidence:** TC-003, TC-019.

### T-012 — Create bridal route

- **Actions:** write approved bridal copy, add appropriate gallery teaser after T-019, explain how to enquire about date; use `EnquiryForm`/WhatsApp utility.
- **Acceptance:** no guarantee of availability, prices or results; no unapproved photo.
- **Tests/evidence:** TC-004, TC-006, TC-009.

### T-013 — Create beautician course route

- **Actions:** model sourced curriculum topics, verify “10-day” duration, create enrolment enquiry. Do not add a fee, schedule or qualification claim unless approved.
- **Acceptance:** missing batch details are described as an enquiry, not filled with sample values.
- **Tests/evidence:** TC-008, TC-019.

### T-014 — Add membership and jewellery teasers

- **Actions:** implement reusable compact teaser components; membership benefits remain omitted until confirmed; jewellery points to WhatsApp unless a dedicated approved URL exists.
- **Acceptance:** no membership or jewellery checkout, catalogue, pricing or availability invented.
- **Tests/evidence:** TC-009, TC-019.

### T-015 — Build contact page and approved FAQ data

- **Actions:** add call/WhatsApp/Instagram links; embed Google Maps only if justified and privacy/performance-approved, otherwise use directions link; add approved FAQ records.
- **Acceptance:** unknown hours/street address are not shown; fallback says contact for directions.
- **Tests/evidence:** TC-003, TC-010, TC-019.

### T-016 — Implement WhatsApp URL builder

- **Actions:** validate configured phone digits; build contextual templates; encode the full message; unit-test Unicode, ampersand, emoji, apostrophe and multi-line notes; keep phone destination fixed.
- **Acceptance:** valid URL is generated without breaking query parameters; tests ensure raw input never appears unencoded.
- **Tests/evidence:** TC-003–TC-005.

### T-017 — Implement enquiry form and fallbacks

- **Actions:** create accessible inputs, validation/error summary, max lengths, date/service choices and submit feedback; open WhatsApp only on explicit valid submission; show number/manual fallback on failure.
- **Acceptance:** no fetch/POST/network submission; no success message claiming booking; WhatsApp handoff is described correctly.
- **Tests/evidence:** TC-004, TC-005, TC-013.

### T-018 — Create approved asset allow-list

- **Actions:** translate `ASSET_GUIDE.md` owner decisions into typed data; ensure every public record includes approval, alt text and source filename; keep private consent documents outside repository if they contain personal information.
- **Acceptance:** build/test catches `needs-owner-approval`, `draft` or `do-not-publish` items selected for output.
- **Tests/evidence:** TC-006, TC-016.

### T-019 — Add and optimise approved assets

- **Actions:** move/copy only approved images into source-image folder, name descriptively, generate variants, define aspect ratios and focal points, remove avoidable metadata.
- **Acceptance:** output is appropriately sized and no raw unreviewed source archive is publicly served.
- **Tests/evidence:** TC-006, TC-016, TC-021.

### T-020 — Implement gallery and lightbox

- **Actions:** create category filters, item cards, no-results state and accessible lightbox; retain focus return and Escape close; do not show category filters with no value unless helpful.
- **Acceptance:** mouse, keyboard and touch interactions work; alt text accompanies images.
- **Tests/evidence:** TC-006, TC-007.

### T-021 — Review image loading and responsive crops

- **Actions:** set dimensions/aspect ratios, hero priority, lazy loading for below-fold photos, thumbnail/hero variants, object-position, alt text and fallbacks.
- **Acceptance:** no stretched 150x150 thumbnails or major layout shift; hero image selected by performance test.
- **Tests/evidence:** TC-012, TC-016, TC-021.

### T-022 — Add restrained GSAP reveals

- **Actions:** use one motion module, initialise only when needed, clean up observers/triggers, keep content visible by default and disable transforms/delays for reduced motion.
- **Acceptance:** failed GSAP import cannot hide content; no essential controls animate offscreen; no continuous motion on reading content.
- **Tests/evidence:** TC-011, TC-013.

### T-023 — Add route-specific SEO

- **Actions:** supply unique title/description/canonical/OG fields, generate sitemap, robots policy and JSON-LD from verified config; ensure preview environments are not indexed.
- **Acceptance:** no fake ratings/hours/address; structured data parses; canonical points to the actual production domain after launch.
- **Tests/evidence:** TC-010.

### T-024 — Conduct accessibility review

- **Actions:** test keyboard-only navigation, focus sequence, visible focus, contrast, headings, forms/errors, lightbox/menu, zoom and reduced motion; fix issues found.
- **Acceptance:** no known critical accessibility blockers; findings and exceptions recorded.
- **Tests/evidence:** TC-007, TC-011–TC-013.

### T-025 — Add content/config validation

- **Actions:** test required config, phone destination format, missing alt text, invalid gallery category, unapproved image flag, duplicate IDs and empty SEO fields.
- **Acceptance:** invalid public data fails a test or build validation with actionable messages.
- **Tests/evidence:** TC-001, TC-006, TC-010, TC-014, TC-016.

### T-026 — Add route and interaction tests

- **Actions:** add tests for direct paths, internal links, WhatsApp URL/message, form errors, gallery filters/lightbox and fallback behaviour.
- **Acceptance:** test coverage aligns with `SYSTEM_DESIGN.md` TC IDs; no stale selectors or test-only fake content reaches production.
- **Tests/evidence:** TC-002–TC-007.

### T-027 — Run responsive and cross-browser QA

- **Actions:** test supported browser set plus target mobile devices where available, 320/375/768/1024/1440 viewport sizes, keyboard and text zoom.
- **Acceptance:** no horizontal overflow, obscured fixed controls or broken external links; issues recorded with screenshots/steps.
- **Tests/evidence:** TC-012–TC-013, TC-015.

### T-028 — Run performance, SEO and build-output audit

- **Actions:** Lighthouse runs, inspect image weight/layout shift, validate metadata/schema/sitemap, inspect build output for source-only/unapproved assets and unused dependencies.
- **Acceptance:** P1 performance goals assessed; production-indexing settings intentional; no source-only images copied into output.
- **Tests/evidence:** TC-010, TC-014, TC-016.

### T-029 — Owner preview

- **Actions:** publish preview, share concise review checklist, collect feedback about business accuracy, photo use, palette, page hierarchy, language and contact links.
- **Acceptance:** feedback has a disposition (fixed/deferred/rejected with reason) and approver is identified.
- **Tests/evidence:** review log; TC-001, TC-016, TC-019, TC-022.

### T-030 — Resolve owner feedback and lock release content

- **Actions:** make approved changes; remove placeholder or unapproved copy/assets; retest affected routes; request explicit final approval.
- **Acceptance:** no launch-blocking open issue remains; owner signs off the content and visual direction.
- **Tests/evidence:** TC-001–TC-022 as relevant.

### T-031 — Deploy production

- **Actions:** ensure owner-controlled host/domain, HTTPS, production base URL, crawlability, DNS and rollback path; promote approved build.
- **Acceptance:** production uses exact reviewed commit and no preview-only indexing/config.
- **Tests/evidence:** TC-014–TC-015, TC-022.

### T-032 — Smoke-test and hand over

- **Actions:** test all routes/CTAs on live domain; provide repo/hosting ownership, content update flow, supported scope and known limits; update `STATUS.md`.
- **Acceptance:** owner has access or documented support arrangement; phone/WhatsApp links verified again after deploy.
- **Tests/evidence:** TC-001, TC-003, TC-015, TC-022.

### T-033 — Tamil localisation (optional)

- **Actions:** only after owner approval, translate complete route content, CTA templates, errors, metadata and FAQs; have a fluent reviewer approve; add route language metadata and tests.
- **Acceptance:** no partial language state; TC-018 passes.

### T-034 — Analytics (optional)

- **Actions:** obtain owner approval for metrics and privacy wording; select privacy-appropriate solution; document data collected, retention and consent need before adding script.
- **Acceptance:** no analytics until the decision is recorded; TC-020 passes.

### T-035 — Separate jewellery website discovery (future)

- **Actions:** define product count, attributes, sale/rental rules, pricing, inventory, order/payment/delivery, photography, policies, domain and operational owner. Start a separate PDR and tasks rather than expanding release 1.
- **Acceptance:** signed scope and requirements before any store code is written.

## 4. Requirement-to-task traceability

| Requirement group | Tasks | Tests |
|---|---|---|
| Brand/contact and content safety | T-001–T-004, T-010, T-015 | TC-001, TC-003, TC-008, TC-019 |
| Routes/navigation/theme | T-005–T-009 | TC-002, TC-011–TC-014, TC-017 |
| Services/bridal/course/teasers | T-011–T-015 | TC-003–TC-005, TC-008–TC-009, TC-019 |
| WhatsApp enquiry | T-016–T-017 | TC-003–TC-005, TC-013 |
| Images/gallery | T-003, T-018–T-021 | TC-006–TC-007, TC-016, TC-021 |
| Motion/accessibility/SEO | T-022–T-025 | TC-010–TC-014, TC-017–TC-020 |
| Integration/release/handover | T-026–T-032 | TC-002–TC-020 as relevant |
| Approved future changes | T-033–T-035 | TC-018, TC-020 and new scope tests |

## 5. Blockers and change control

If a task needs an unavailable owner response, mark it **Blocked** and create an entry in `STATUS.md` with a date and owner. Do not make a guessed value appear in production to keep momentum. Any new request that creates backend data, checkout, appointment confirmation or analytics must be treated as a scope change and documented before implementation.
