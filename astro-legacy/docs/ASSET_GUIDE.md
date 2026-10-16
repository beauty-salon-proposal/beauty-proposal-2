# Asset Guide — Supplied Instagram Images

**Document ID:** ASSETS-KBS-001  
**Version:** 1.0 initial review guide  
**Status:** Assets attached for reference; no permission status is assumed

## 1. What is included

- `../assets/instagram-source/` contains the 51 supplied PNGs with their original filenames preserved.
- `../assets/reference/instagram-image-contact-sheet.jpg` is a thumbnail contact sheet to make visual review easier.
- `../assets/asset-manifest.csv` lists every file's filename and pixel dimensions. All entries start with `not-reviewed / not-approved for publication`.

The archive contains a mixture of potentially useful salon/promotional photos, very small Instagram thumbnails, duplicate images, personal photos, unrelated content and pictures where clients or minors may be identifiable. **The fact that a file is included in this project ZIP does not mean it may be published.**

## 2. How to select a photo

For each candidate, the owner or authorised reviewer must:

1. Match the file to the business and intended website section.
2. Confirm the image is current and the salon has rights to use it on a public website.
3. Get clear permission from identifiable clients/subjects where required; get parent/guardian approval for any minor. Do not assume an Instagram post gives blanket website consent.
4. Confirm the image does not expose sensitive/private details, unrelated family/travel content, a previous offer, a QR code or an obsolete fee the owner does not want online.
5. Approve the proposed crop and alt text.
6. Mark it `approved` in the private working manifest. Otherwise mark `rejected` or `needs-owner-approval`.

If permissions are uncertain, exclude the image. The launch date is not a reason to publish an unapproved photo.

## 3. Stronger candidate images to inspect first

These are **review suggestions based on the contact sheet**, not final approvals. Inspect the full-size image before use.

| Candidate ID | Exact source filename | Observed candidate use | Notes / next check |
|---|---|---|---|
| IMG-001 | `277095117_511627113907092_3850832331328932814_n-20261010-161249.png` | Potential hero / About portrait: flower-arch backdrop | 864×864. Owner must approve subject/use; request original high-resolution file later. |
| IMG-002 | `634794997_1684423212921278_2203394907307037514_n-20261010-161317.png` | Potential bridal or hair portfolio | 640×1138. Check subject consent and the crop before use. |
| IMG-003 | `806298887_1777251896640285_991364652189716329_n-20261010-161306.png` | Potential hairstyle / floral hair work | 640×800. Check permission and whether image reflects current work. |
| IMG-004 | `831237464_1256603146671265_2412355992064765707_n-20261010-161305.png` | Beautician course promotional poster | 640×1136. Verify course still exists and poster text/dates/fees remain current; do not publish expired terms. |
| IMG-005 | `836117638_18646741228054596_2792683925076072748_n-20261010-161304.png` | Facial/skin-care promotional poster | 1440×1920. Check readability, offer validity and service claims before publication. |
| IMG-006 | `799085720_1997281660928825_5896294949719346179_n-20261010-161307.png` | Potential jewellery teaser visual | 640×1136. Jewellery is outside this site's commerce scope; do not repeat an unverified price or product claim. |
| IMG-007 | `764752035_18624713710054596_8752546892839737077_n-20261010-161310.png` | Potential certificate/recognition or About photo | 1440×1440. Verify exactly what is being presented before describing it; obtain consent from all identifiable subjects. |
| IMG-008 | `753488131_1658173045285930_3435398103174638187_n-20261010-161313.png` | Potential salon frontage/signage | 640×800. Check that signage and location are current and avoid exposing unwanted personal details. |
| IMG-009 | `753690566_1052789390477679_6372387531557136927_n-20261010-161311.png` | Potential salon frontage/signage duplicate/alternate | 640×800. Compare with IMG-008; use only one best/approved version if appropriate. |
| IMG-010 | `611240444_723931113809076_8393895832211770797_n-20261010-161318.png` | Potential ear-piercing service example | 640×1136. Close-up subject/client consent required; use only if approved. |
| IMG-011 | `659646909_1231590202333179_41867839044152786_n-20261010-161315.png` | Potential promotional/signage photo | 640×800. Inspect full-size content and confirm it remains current; do not infer facts from a small thumbnail. |

### Images to exclude unless the owner gives a specific, legitimate reason

- Travel, family, couple, personal selfie, outdoor trip and non-business photos.
- The helicopter/tour advertisement file `550715325_18538146442054596_8752546892839737077_n-20261010-161329.png`.
- Tiny 150×150 profile/grid thumbnails when they would be enlarged into a hero/gallery image. Use an original instead.
- Any image containing a child unless specific guardian approval has been received.
- Old price/offer graphics, QR codes, outdated course schedules or text-heavy posters unless the owner confirms they remain accurate.
- Duplicate thumbnails and duplicate storefront photos that do not add value.

## 4. Destination paths in the actual website repository

Do **not** copy the whole raw source folder to `public/`. Keep the ZIP's `assets/instagram-source/` outside deployment output. After the review/approval gate, move only approved files into one of the following locations:

```text
src/assets/images/
├── brand/             # approved logo and favicon artwork
├── hero/              # approved main portrait/hero image
├── bridal/            # approved bridal makeup and styling work
├── hair/              # approved hairstyles, cuts and styling
├── skin-care/         # approved facial/skin-care work
├── salon/             # approved premises / general service images
├── course/            # approved course graphic and class-related material
├── membership/        # approved membership artwork after terms are checked
└── jewellery-teaser/  # one approved visual for the teaser only
```

Recommended use by route:

| Route | Possible destination | Asset rule |
|---|---|---|
| `/` | `hero/`, small selections from `bridal/`, `hair/`, `salon/` | Use one focal hero image and a few approved examples; no image collage overload. |
| `/services/` | `hair/`, `skin-care/`, `salon/` | Use only current service examples. Posters can supplement but should not replace readable HTML service text. |
| `/bridal/` | `bridal/`, `hair/` | Prioritise relevant, approved portfolio images with truthful captions. |
| `/course/` | `course/` | Course poster must be current; curriculum must also exist as accessible HTML text. |
| `/gallery/` | all relevant approved categories | Gallery manifest enforces consent/status and includes alt text. |
| `/about/` | `hero/` or `salon/` | Owner portrait/credential images require fact and consent review. |
| `/contact/` | `salon/` optionally | Do not show a location-revealing photo if the owner doesn't want it public. |
| jewellery teaser | `jewellery-teaser/` | A compact teaser only; not a product inventory page. |

Use Astro's source asset/image handling where practical so responsive widths and formats can be generated. Give descriptive filenames for production copies while retaining the original source filename in the internal manifest for provenance. Never place private consent files or the complete raw download into public output.

## 5. Alt-text guidance

Alt text describes the image's visible content and purpose; it should not guess the person's name or identity. Example patterns to review and adapt after approval:

- `Bridal hairstyle with jasmine flowers and traditional attire` (only if it accurately describes the approved photo).
- `Kalai standing in front of a floral arch` (only if the person is identified by the owner and approves the description).
- `Poster describing the 10-day beautician course` (for a poster that remains legible/current; keep the curriculum in real text too).
- Empty alt (`alt=""`) for purely decorative shapes and background flourishes.

Do not use the raw filename as alt text. Avoid keyword-stuffed alt attributes.

## 6. Where to attach the images/instructions when using an AI coding agent

**For this blueprint/planning ZIP:** attach this ZIP and explicitly point the agent to `docs/IMPLEMENTATION_AGENT_BRIEF.md`. The source images are at `assets/instagram-source/`; the quick visual reference is at `assets/reference/instagram-image-contact-sheet.jpg`.

**For the real website repository:** put only approved assets under `src/assets/images/` (preferred) or the specific optimised `public/images/...` destination chosen in `SYSTEM_DESIGN.md`. Do not paste binary image data into a Markdown spec, do not embed all images as base64, and do not ask the agent to use unapproved raw files directly.

**Copy-ready instruction:**

> Read `PROJECT.md` and all seven core specification documents before coding. Review `docs/ASSET_GUIDE.md` and `assets/reference/instagram-image-contact-sheet.jpg`. Original files are in `assets/instagram-source/` and are reference-only. Do not copy any raw file into the public build until the owner has approved that exact image for web use. Use the approved-image manifest and implement the destination folders from `docs/SYSTEM_DESIGN.md`. Do not invent missing business facts or reuse an earlier mockup as source code.

## 7. Replacing images with high-resolution originals later

When the owner supplies originals:

1. Keep the existing `GalleryItem.id` stable if it represents the same subject/content.
2. Update `sourceFilename` and image import path in the data manifest.
3. Recheck permission/approval and new image metadata.
4. Regenerate responsive variants; do not use an uncompressed 10 MB original as the public full-size asset without optimisation.
5. Recheck crop focal point, alt text, dimensions, layout shift, loading performance and mobile view.
6. Run `TC-006`, `TC-007`, `TC-016` and the relevant image performance checks before deploying.

## 8. Change record

This file records candidates based on a quick contact-sheet review. It is not proof of identity, ownership, permission, current offer details or final image selection. Update it after owner review rather than treating the initial suggestions as approval.
