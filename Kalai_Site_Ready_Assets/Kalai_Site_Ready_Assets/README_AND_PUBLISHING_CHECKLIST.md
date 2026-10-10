# Kalai's Beauty Salon & Spa — Website Image Pack

This pack contains a curated set of relevant images from the supplied Instagram image bundle, converted to optimized WebP for faster website loading. It is designed to be handed to the AI coding agent currently building the website.

## Fast instructions

1. Open the **actual website source-code repository** (not only the planning folder).
2. Copy the `public-images/` folder into the existing website project's `public/images/` folder. Keep the current framework and naming conventions; do not rebuild the app to fit these assets.
3. Use these public URL paths in the website code, for example `/images/hero/hero-floral-arch.webp`. If the current project uses Astro's `src/assets` imports or a different asset pipeline, keep its conventions and adjust import paths instead of forcing `public/` paths.
4. Replace the matching placeholders in the hero, services, bridal, hair, course, about/contact and jewellery-teaser sections. Keep the images in context; do not use the full set as a random collage.
5. Use responsive image dimensions, `loading="lazy"` for below-the-fold images, and descriptive alt text. The hero image may load eagerly; avoid forcing all images to load immediately.
6. Check mobile crops. Use `object-fit: cover` and adjust `object-position` where faces, hairstyles or jewellery get cropped.
7. **Do not publish an image until Kalai confirms permission and that any offer/poster information is current.** `IMAGE_PLACEMENT_MANIFEST.csv` records the source filename and intended use. The originals remain in the blueprint's `assets/instagram-source/` folder.

## Asset path → section mapping

| Path in this pack | Website use | Alt text suggestion (verify accuracy) |
|---|---|---|
| `public-images/hero/hero-floral-arch.webp` | Home hero | `Beauty styling at a floral arch` |
| `public-images/bridal/bridal-makeup-styling.webp` | Bridal page / portfolio | `Traditional bridal makeup and styling` |
| `public-images/hair/floral-hairstyle.webp` | Hair styling service / portfolio | `Hairstyle decorated with flowers` |
| `public-images/services/salon-styling-session.webp` | Services / styling gallery | `Beauty service being carried out in the salon` |
| `public-images/skin-care/facial-service-poster.webp` | Facial section, only if current | `Facial and skin-care service poster` |
| `public-images/course/beautician-course-poster.webp` | Beautician course page, only if current | `Poster for the 10-day beautician course` |
| `public-images/jewellery-teaser/jewellery-product-teaser.webp` | Small jewellery teaser only | `Jewellery item featured by the salon` |
| `public-images/salon/salon-frontage.webp` | About/contact, if location is public | `Salon frontage and signboard` |
| `public-images/about/certificate-presentation.webp` | About/credentials, after facts checked | `Certificate presentation at a salon event` |
| `public-images/services/ear-piercing-service.webp` | Ear-piercing service, with consent | `Ear-piercing service close-up` |

Alt text above is only a starting point; make it truthful after inspecting each image. If an image is decorative, use empty alt text. Never identify a person or claim a credential based only on the image.

## Copy-paste message for the coding agent

> Use the image pack in `Kalai_Site_Ready_Assets`. Copy `public-images/` into the site's existing public image directory (or adapt paths to the existing asset pipeline; do not change frameworks). Replace suitable placeholders with the exact images listed in `IMAGE_PLACEMENT_MANIFEST.csv`: hero-floral-arch for hero, bridal-makeup-styling for bridal, floral-hairstyle and salon-styling-session for hair/services, beautician-course-poster for the course, facial-service-poster for facial services only after its offer text is verified, jewellery-product-teaser for a small jewellery teaser, salon-frontage for about/contact if owner approves, certificate-presentation only after its credential is verified, and ear-piercing-service only with permission. Keep the lavender/light theme and sage-green accent. Do not invent business facts, testimonials, prices, opening hours or booking confirmation. Add descriptive alt text, lazy-load below-the-fold images, check responsive crops, and tell me any image blocked by missing owner approval. Do not use unrelated/personal photos from the full 51-image source set.

## Publishing checklist

- [ ] Kalai approves the selected images for website use and confirms client/subject permissions as needed.
- [ ] Poster/service/course information and any offer/price are confirmed current; otherwise remove that poster from the published site.
- [ ] Confirm official business name, address, phone/WhatsApp, opening hours and travel/service area.
- [ ] Click-test WhatsApp and `tel:` links on both desktop and mobile; verify the number before launch.
- [ ] Replace all placeholders and remove sample reviews, dummy prices, empty membership benefits, and unsupported claims.
- [ ] Check page title, meta description, canonical URL (once domain decided), favicon, Open Graph preview and local business structured data.
- [ ] Test mobile layout, image crops, keyboard access, contrast, reduced motion, broken links and console errors.
- [ ] Run the project's build, lint and tests; preview production output before deployment.
- [ ] Confirm domain/DNS/HTTPS and deploy; smoke-test the live URL on a phone.
- [ ] Submit the sitemap to Google Search Console and complete/verify Google Business Profile if applicable.

## Important

These are optimized candidate assets, not permission-cleared final assets. Original high-resolution photography should replace social-media-sized files later where possible. Keep raw originals outside the publicly deployed build.
