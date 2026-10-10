# Implementation Agent Brief — Kalai's Beauty Salon & Spa

> Use this brief as the first instruction to the implementation developer/AI coding agent. It is not a request to build until the user explicitly authorises implementation. This blueprint ZIP itself contains documentation and reference assets only.

## Copy-ready prompt

You are implementing a new static marketing website for **Kalai's Beauty Salon & Spa**, a business associated in the supplied materials with Vadavalli, Coimbatore, Tamil Nadu and Instagram handle `@kalai_makeupartistry`.

### First, read the specification

Read `PROJECT.md` and all seven core documents in `docs/`: `PDR.md`, `SYSTEM_ARCHITECTURE.md`, `SYSTEM_DESIGN.md`, `USER_STORIES.md`, `MILESTONES.md`, `TASK.md` and `STATUS.md`. Also read `ASSET_GUIDE.md` before using any photo. Treat the PDR and signed-off status decisions as authoritative. Do not reverse-engineer or copy an earlier generated HTML mockup; this is a clean implementation from the specification.

### Product scope

Build a lightweight, responsive, SEO-conscious, light-only marketing site with real static routes: Home, Services, Bridal, Beautician Course, Gallery, About and Contact. Focus the design on bridal makeup first, with everyday salon services and the 10-day beautician course clearly represented. Use a compact jewellery teaser only because a dedicated jewellery website is intended later. No jewellery store, catalogue, cart, checkout, online payment, booking calendar, backend API, database, authentication or admin CMS belongs in release 1.

### Design direction

Use the proposed light lavender + soft white theme with sage-green accents unless the owner approved another palette. Aim for polished editorial beauty branding: generous whitespace, strong portraits, refined typography, responsive card layouts and clear calls to action. Avoid a generic Bootstrap look, excessive glass blur, dark mode, fake metric counters, intrusive full-screen effects, search bar and theme picker. Include restrained GSAP scroll reveal as progressive enhancement only. Respect `prefers-reduced-motion`, and make every section visible if JavaScript/GSAP fails.

### Stack and architecture

Use Astro with static output, strict TypeScript and lightweight CSS unless a documented team constraint says otherwise. Pin the currently supported Node LTS runtime and dependencies when implementing, keep one package lockfile, and use typed central content data for brand/contact/services/course/gallery/FAQs. Follow the route and component proposal in `SYSTEM_DESIGN.md`. No backend is expected.

### Business data and honesty rules

The source discussion shows the business name `Kalai's Beauty Salon & Spa`, Instagram handle `@kalai_makeupartistry`, area `Vadavalli, Coimbatore` and phone `9842023382`. Verify them with the owner before production. Do not invent full street address, opening hours, prices, course fee or schedule, membership benefits, testimonials, awards, years of experience, qualifications, ratings or service availability. Unknown fields should be omitted or presented as an enquiry topic, not filled with demo values. WhatsApp opening is an enquiry hand-off only: it is not a booking confirmation and form values must not be persisted by the site.

### Image safety

The 51 originals are in `assets/instagram-source/`; the contact sheet is `assets/reference/instagram-image-contact-sheet.jpg`. These files include tiny thumbnails and unrelated/personal images. This directory is source-only, not public output. Do not use any image unless it is explicitly marked approved in the asset manifest and appropriate consent exists, including guardian consent if a minor appears. Import only selected files into `src/assets/images/`, optimise them and add accurate alt text. A visual candidate suggestion in `ASSET_GUIDE.md` is not permission to publish.

### Build order

Work through `TASK.md` in order, respecting dependencies and milestone gates. Begin with T-001–T-004 (owner confirmations and asset decisions) and T-005–T-009 (foundation and shared shell) only as appropriate. Mark no work complete without evidence. Use task IDs in commits/PRs and keep `STATUS.md` current. If blocked by an owner decision, do not guess; log the blocker and continue on independent work only.

### Quality bar

For release candidate:

- All seven routes work on direct open, navigation and refresh.
- WhatsApp links and form messages are correctly encoded and use the verified number.
- The enquiry form validates, opens WhatsApp only after a user action and provides a fallback if WhatsApp cannot open.
- Gallery filters/lightbox are usable by keyboard and touch and only approved images are shown.
- No placeholder reviews/prices/hours/fees/benefits are public.
- Mobile navigation and form errors are accessible; reduced-motion mode disables non-essential motion; no content is hidden because animation code failed.
- Titles/descriptions/canonical/OG/sitemap/robots/JSON-LD are correct and based on verified data.
- Source-only files do not leak into build output.
- Lint, typecheck, tests and build pass; responsive, accessibility and performance checks are recorded.
- Production launch waits for owner sign-off and uses owner-controlled repository/hosting/domain accounts.

Before implementing any requirement not represented in the documents, ask for approval or record it as an open decision in `STATUS.md`. Do not make scope changes silently.
