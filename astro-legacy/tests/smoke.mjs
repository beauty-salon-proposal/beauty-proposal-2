/**
 * Smoke test for the built site (T-026 / TC-002, TC-007, TC-011–TC-013).
 *
 * Serves `dist/` with `astro preview`, then checks every route at mobile and
 * desktop widths: rendering, horizontal overflow, image loading/alt text,
 * console errors, gallery filter + lightbox keyboard behaviour, enquiry form
 * validation, and reduced-motion visibility.
 *
 * Run with: npm run test:smoke
 */
import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";

const BASE = "http://127.0.0.1:4399";
const ROUTES = ["/", "/services/", "/bridal/", "/course/", "/gallery/", "/about/", "/contact/"];

const failures = [];
const results = [];
const seoPages = [];

function check(name, condition, detail = "") {
  results.push({ name, ok: Boolean(condition), detail });
  if (!condition) failures.push(`${name}${detail ? ` — ${detail}` : ""}`);
}

async function startServer() {
  const child = spawn(
    process.execPath,
    ["node_modules/astro/astro.js", "preview", "--host", "127.0.0.1", "--port", "4399"],
    { stdio: "ignore" },
  );
  for (let i = 0; i < 40; i += 1) {
    try {
      const res = await fetch(`${BASE}/`);
      if (res.ok) return child;
    } catch {
      /* not up yet */
    }
    await sleep(250);
  }
  child.kill();
  throw new Error("preview server did not start");
}

const server = await startServer();
const browser = await chromium.launch();

try {
  for (const viewport of [
    { name: "mobile", width: 375, height: 812 },
    { name: "desktop", width: 1440, height: 900 },
  ]) {
    const context = await browser.newContext({ viewport });
    // Keep the test hermetic: no request may leave the local preview server.
    await context.route("**/*", (route) => {
      const url = route.request().url();
      return url.startsWith(BASE) ? route.continue() : route.abort();
    });

    const page = await context.newPage();
    // This suite deliberately blocks every non-local request so the test is
    // hermetic. Aborted stylesheet/font loads therefore show up as console
    // noise; only real script errors count.
    const scriptErrors = [];
    page.on("pageerror", (error) => scriptErrors.push(String(error)));
    page.on("console", (message) => {
      if (message.type() === "error" && !/Failed to load resource/i.test(message.text())) {
        scriptErrors.push(message.text());
      }
    });

    for (const route of ROUTES) {
      await page.goto(`${BASE}${route}`, { waitUntil: "domcontentloaded" });
      await page.waitForTimeout(400);

      // Re-scroll against the *current* page height (it grows as lazy images
      // resolve), then wait until every image has finished loading.
      await page.evaluate(async () => {
        for (let i = 0; i < 5; i += 1) {
          window.scrollTo(0, document.body.scrollHeight);
          await new Promise((resolve) => setTimeout(resolve, 350));
        }
        window.scrollTo(0, 0);
      });
      try {
        await page.waitForFunction(
          () => Array.from(document.images).every((img) => img.complete),
          null,
          { timeout: 15000 },
        );
      } catch {
        /* reported by the per-image check below */
      }
      await page.waitForTimeout(500);
      console.log(`visited ${viewport.name} ${route}`);

      const metrics = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        h1: document.querySelectorAll("h1").length,
        // The lightbox <img> intentionally starts with an empty src and is
        // populated only when a photo is opened, so it is not part of this check.
        images: Array.from(document.images)
          .filter((img) => !img.hasAttribute("data-lightbox-img"))
          .map((img) => ({
            src: img.currentSrc || img.src,
            alt: img.getAttribute("alt"),
            loaded: img.complete && img.naturalWidth > 0,
          })),
        hasSearch: Boolean(document.querySelector('input[type="search"], [role="search"]')),
        hasThemeToggle: Boolean(document.querySelector("[data-theme-toggle]")),
        revealHidden: Array.from(document.querySelectorAll(".reveal")).filter(
          (el) => Number.parseFloat(getComputedStyle(el).opacity) < 0.9,
        ).length,
        seo: {
          title: document.title,
          description:
            document.querySelector('meta[name="description"]')?.getAttribute("content") ?? "",
          canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? null,
          ogUrl: document.querySelector('meta[property="og:url"]')?.getAttribute("content") ?? null,
          robots: document.querySelector('meta[name="robots"]')?.getAttribute("content") ?? "",
          jsonLdTypes: Array.from(
            document.querySelectorAll('script[type="application/ld+json"]'),
          ).map((node) => {
            try {
              const value = JSON.parse(node.textContent ?? "");
              const list = Array.isArray(value) ? value : [value];
              return list.map((entry) => entry?.["@type"] ?? "MISSING");
            } catch {
              return ["INVALID"];
            }
          }),
          jsonLdRaw: Array.from(
            document.querySelectorAll('script[type="application/ld+json"]'),
          )
            .map((node) => node.textContent ?? "")
            .join("\n"),
        },
      }));

      const label = `${viewport.name} ${route}`;
      check(
        `${label}: no horizontal overflow`,
        metrics.scrollWidth <= metrics.clientWidth + 1,
        `${metrics.scrollWidth} > ${metrics.clientWidth}`,
      );
      check(`${label}: exactly one h1`, metrics.h1 === 1, `found ${metrics.h1}`);
      check(
        `${label}: all images loaded`,
        metrics.images.every((image) => image.loaded),
        metrics.images
          .filter((image) => !image.loaded)
          .map((image) => image.src)
          .join(", "),
      );
      check(
        `${label}: every image has an alt attribute`,
        metrics.images.every((image) => image.alt !== null),
      );
      check(`${label}: no search field`, !metrics.hasSearch);
      check(`${label}: no theme toggle`, !metrics.hasThemeToggle);
      check(
        `${label}: reveal content visible`,
        metrics.revealHidden === 0,
        `${metrics.revealHidden} hidden`,
      );
      if (viewport.name === "desktop") seoPages.push({ route, ...metrics.seo });
    }

    check(
      `${viewport.name}: no script errors`,
      scriptErrors.length === 0,
      scriptErrors.join(" | "),
    );
    await context.close();
  }

  /* SEO audit (TC-010): unique titles, bounded descriptions, truthful
     structured data, and proof that no placeholder domain or indexable
     canonical leaks into this preview build. */
  const titles = seoPages.map((page) => page.title);
  check(
    "seo: every route has a non-empty title",
    seoPages.every((page) => page.title.trim().length > 0),
  );
  check(
    "seo: titles are unique per route",
    new Set(titles).size === titles.length,
    titles.join(" | "),
  );
  check(
    "seo: descriptions are 50–160 chars",
    seoPages.every((page) => page.description.length >= 50 && page.description.length <= 160),
    seoPages.map((page) => `${page.route}=${page.description.length}`).join(", "),
  );
  check(
    "seo: no canonical URL without a real domain",
    seoPages.every((page) => page.canonical === null && page.ogUrl === null),
  );
  check(
    "seo: preview pages carry noindex",
    seoPages.every((page) => /noindex/.test(page.robots)),
  );
  check(
    "seo: BeautySalon structured data parses on every route",
    seoPages.every((page) => page.jsonLdTypes.flat().includes("BeautySalon")),
  );
  check(
    "seo: structured data carries the verified address, hours and map",
    seoPages.every(
      (page) =>
        page.jsonLdRaw.includes("Seendur Complex") &&
        page.jsonLdRaw.includes("641041") &&
        page.jsonLdRaw.includes("openingHoursSpecification") &&
        page.jsonLdRaw.includes("GeoCoordinates"),
    ),
  );
  check(
    "seo: no fabricated rating or price in structured data",
    !JSON.stringify(seoPages.map((page) => page.jsonLdRaw)).match(
      /aggregateRating|reviewCount|priceRange/i,
    ),
  );
  for (const route of ["/services/", "/bridal/", "/contact/"]) {
    const page = seoPages.find((entry) => entry.route === route);
    check(
      `seo: FAQ structured data on ${route}`,
      Boolean(page) && page.jsonLdTypes.flat().includes("FAQPage"),
    );
  }
  const contactPage = seoPages.find((entry) => entry.route === "/contact/");
  check(
    "seo: contact page publishes Google Maps directions",
    Boolean(contactPage) && /google\.com\/maps/.test(contactPage.jsonLdRaw),
  );

  /* Gallery interaction ------------------------------------------------- */
  const context = await browser.newContext({ viewport: { width: 375, height: 812 } });
  await context.route("**/*", (route) =>
    route.request().url().startsWith(BASE) ? route.continue() : route.abort(),
  );
  const page = await context.newPage();
  await page.goto(`${BASE}/gallery/`, { waitUntil: "domcontentloaded" });

  const itemCount = await page.locator(".gallery-item").count();
  check("gallery: items rendered", itemCount > 0, `${itemCount} items`);

  const bridalFilter = page.locator('[data-filter="bridal"]');
  if ((await bridalFilter.count()) > 0) {
    await bridalFilter.click();
    const visible = await page.locator(".gallery-item:not([hidden])").count();
    const pressed = await bridalFilter.getAttribute("aria-pressed");
    check(
      "gallery: bridal filter narrows results",
      visible > 0 && visible < itemCount,
      `${visible}/${itemCount}`,
    );
    check("gallery: filter exposes pressed state", pressed === "true");
    await page.locator('[data-filter="all"]').click();
  }

  await page.locator(".gallery-item").first().click();
  check(
    "lightbox: opens",
    (await page.locator("[data-lightbox]").getAttribute("data-open")) === "true",
  );
  await page.keyboard.press("Escape");
  check(
    "lightbox: closes with Escape",
    (await page.locator("[data-lightbox]").getAttribute("data-open")) === "false",
  );

  /* Enquiry form -------------------------------------------------------- */
  await page.goto(`${BASE}/contact/`, { waitUntil: "domcontentloaded" });

  const externalPosts = [];
  page.on("request", (request) => {
    if (request.method() === "POST" && !request.url().startsWith(BASE)) {
      externalPosts.push(request.url());
    }
  });

  await page.locator("[data-enquiry-form] button[type=submit]").click();
  const nameError = await page.locator('[data-error-for="name"]').textContent();
  check("form: blocks empty submission", (nameError ?? "").trim().length > 0);

  await page.fill("#enq-name", "Test Visitor");
  await page.locator("[data-enquiry-form] button[type=submit]").click();
  await page.waitForTimeout(300);
  const status = (await page.locator("[data-form-status]").textContent()) ?? "";
  check("form: reports outcome to the user", status.trim().length > 0, status.trim());
  check(
    "form: never claims a booking was confirmed",
    !/booked|confirmed your|appointment confirmed/i.test(status),
    status.trim(),
  );
  check("form: no data is posted anywhere", externalPosts.length === 0, externalPosts.join(", "));

  /* Reduced motion ------------------------------------------------------ */
  const reduced = await browser.newContext({
    viewport: { width: 375, height: 812 },
    reducedMotion: "reduce",
  });
  await reduced.route("**/*", (route) =>
    route.request().url().startsWith(BASE) ? route.continue() : route.abort(),
  );
  const reducedPage = await reduced.newPage();
  await reducedPage.goto(`${BASE}/`, { waitUntil: "domcontentloaded" });
  await reducedPage.waitForTimeout(300);
  const hiddenWithReducedMotion = await reducedPage.evaluate(
    () =>
      Array.from(document.querySelectorAll(".reveal")).filter(
        (el) => Number.parseFloat(getComputedStyle(el).opacity) < 0.9,
      ).length,
  );
  check(
    "reduced motion: all content visible without animation",
    hiddenWithReducedMotion === 0,
    `${hiddenWithReducedMotion} hidden`,
  );

  await reduced.close();
  await context.close();
} finally {
  await browser.close();
  server.kill();
}

for (const result of results) {
  console.log(
    `${result.ok ? "PASS" : "FAIL"}  ${result.name}${result.detail ? ` — ${result.detail}` : ""}`,
  );
}
console.log(`\n${results.length - failures.length}/${results.length} checks passed`);

if (failures.length > 0) {
  console.error("\nFailures:");
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exitCode = 1;
}
