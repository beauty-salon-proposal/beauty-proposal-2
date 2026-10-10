# Kalai's Beauty Salon & Spa — Project Blueprint

**Purpose:** authoritative planning package for a new static marketing website. This ZIP contains specifications and supplied visual assets only; it does not contain an implemented website.

## Start here

1. Read this file, then [docs/PDR.md](docs/PDR.md) for the requirements baseline.
2. Read [docs/SYSTEM_ARCHITECTURE.md](docs/SYSTEM_ARCHITECTURE.md) and [docs/SYSTEM_DESIGN.md](docs/SYSTEM_DESIGN.md) before choosing code structure or implementing components.
3. Use [docs/USER_STORIES.md](docs/USER_STORIES.md), [docs/MILESTONES.md](docs/MILESTONES.md), and [docs/TASK.md](docs/TASK.md) as the delivery and testing plan.
4. Keep [docs/STATUS.md](docs/STATUS.md) updated as work progresses. Its initial implementation status is **not started**.
5. Read [docs/ASSET_GUIDE.md](docs/ASSET_GUIDE.md) before moving any supplied image into the website's public asset path.
6. Give [docs/IMPLEMENTATION_AGENT_BRIEF.md](docs/IMPLEMENTATION_AGENT_BRIEF.md) to the coding agent as the initial implementation instruction, together with this blueprint.

## Confirmed project direction from the conversation

- Business name seen in the Instagram materials: **Kalai's Beauty Salon & Spa**.
- Instagram handle: `@kalai_makeupartistry`.
- Location shown in supplied materials: **Vadavalli, Coimbatore, Tamil Nadu, India**.
- Business phone on supplied promotional material: `9842023382`; proposed WhatsApp international format: `+919842023382`. Verify this with the owner before go-live.
- Light-only visual style. Recommended default: lavender and soft-white surfaces, deep violet actions, sage-green accents; no automatic dark mode.
- Main site is for marketing and enquiries, not online commerce. Bridal makeup leads the presentation; everyday salon services and the beautician course also receive clear entry points.
- A compact jewellery teaser may link to WhatsApp until a separate jewellery website exists. No catalogue, stock system, cart, or payment workflow is in the first release.
- Planned pages: Home, Services, Bridal, Beautician Course, Gallery, About, and Contact.
- WhatsApp is the primary enquiry and booking hand-off. The static site prepares a message and opens WhatsApp; it does not store submissions or confirm a booking.
- Scroll reveal and restrained GSAP motion are desired as progressive enhancement. Respect reduced-motion preferences. Do not add a site search field or a persistent theme selector to the final site.

## Files

| File | Purpose |
|---|---|
| [docs/PDR.md](docs/PDR.md) | Product vision, scope, users, requirement IDs, business rules, non-functional requirements and release acceptance. |
| [docs/SYSTEM_ARCHITECTURE.md](docs/SYSTEM_ARCHITECTURE.md) | Technology recommendation, system boundaries, integration/deployment diagrams, data flows, and trade-offs. |
| [docs/SYSTEM_DESIGN.md](docs/SYSTEM_DESIGN.md) | Route, component, content, image, SEO, validation, security, accessibility and testing implementation details. |
| [docs/USER_STORIES.md](docs/USER_STORIES.md) | User roles, journeys, success/alternative/failure flows and acceptance criteria. |
| [docs/MILESTONES.md](docs/MILESTONES.md) | Phased implementation roadmap and definitions of done. |
| [docs/TASK.md](docs/TASK.md) | Ordered task backlog with IDs, dependencies, priorities, affected modules and tests. |
| [docs/STATUS.md](docs/STATUS.md) | Honest starting baseline, open questions, risk log and progress-tracking conventions. |
| [docs/ASSET_GUIDE.md](docs/ASSET_GUIDE.md) | Image inventory guidance, approval gates, destination paths and image usage rules. |
| [docs/IMPLEMENTATION_AGENT_BRIEF.md](docs/IMPLEMENTATION_AGENT_BRIEF.md) | Copy-ready initial instruction for an AI coding agent or developer. |
| [assets/instagram-source/](assets/instagram-source/) | The 51 supplied image files preserved with their original filenames. Reference only; not all are suitable for public use. |
| [assets/reference/instagram-image-contact-sheet.jpg](assets/reference/instagram-image-contact-sheet.jpg) | Contact sheet to identify the supplied images quickly. |

## Source material and authority order

1. Decisions in the supplied conversation export and the source material it quotes.
2. Explicit decisions the business owner confirms during discovery.
3. This blueprint's recommendations, clearly called out as proposed decisions or assumptions.
4. Existing mockup HTML or generated preview pages, if consulted separately, are visual exploration only—not the source code or architecture to copy.

Links mentioned in the source discussion: Instagram profile `https://www.instagram.com/kalai_makeupartistry/`, one supplied Instagram post `https://www.instagram.com/p/DeOHozOTcIi/`, the earlier visual exploration `https://claude.ai/artifact/QN7PVyWHzPh76rvVkhVbHB`, and the user-supplied shared reference `https://share.google/hZw7O6F6l9vjKZGDn`. These links are contextual references, not verified production dependencies.

## Important open decisions

- Confirm the brand name and the correct public phone/WhatsApp number.
- Confirm the final colour palette (lavender-led is the recommendation) and whether Tamil language support is required in release 1.
- Obtain client approval for every photo, especially identifiable clients and children, and replace suitable low-resolution imagery with originals when available.
- Confirm exact address or map pin, opening hours, current service list, course fee/batch schedule, membership benefits, and any prices to show.
- Confirm hosting account, domain ownership, and who will maintain copy and images.

## Using the assets in a coding conversation

Attach the ZIP (or unzip it and provide [assets/instagram-source/](assets/instagram-source/) plus this blueprint) alongside [docs/IMPLEMENTATION_AGENT_BRIEF.md](docs/IMPLEMENTATION_AGENT_BRIEF.md). In the live project repository, **do not point the website at this raw source directory**. After permission and suitability checks, copy only approved, selected files into `public/images/` or the optimised source-image folder described in [docs/ASSET_GUIDE.md](docs/ASSET_GUIDE.md). Keep source-only images outside deployable/public paths.

## Traceability convention

- Product requirements: `FR-*`, `NFR-*`, `BR-*`, `OBJ-*`.
- User stories: `US-*`.
- Tests: `TC-*`.
- Milestones: `MS-*`.
- Tasks: `T-*`.

If a requirement changes, update all linked stories, tasks, tests and status entries in the same change. Do not mark a feature done solely because markup exists; test the behaviour and content.
