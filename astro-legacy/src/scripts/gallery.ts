async function pauseSmoothScroll(): Promise<void> {
  const smooth = await import("./smooth");
  smooth.stopSmoothScroll();
}

async function resumeSmoothScroll(): Promise<void> {
  const smooth = await import("./smooth");
  smooth.startSmoothScroll();
}

let lastFocused: HTMLElement | null = null;

function lightboxElements() {
  const lightbox = document.querySelector<HTMLElement>("[data-lightbox]");
  return {
    lightbox,
    image: lightbox?.querySelector<HTMLImageElement>("[data-lightbox-img]") ?? null,
    caption: lightbox?.querySelector<HTMLElement>("[data-lightbox-caption]") ?? null,
    close: lightbox?.querySelector<HTMLButtonElement>("[data-lightbox-close]") ?? null,
  };
}

function openLightbox(trigger: HTMLButtonElement): void {
  const { lightbox, image, caption, close } = lightboxElements();
  if (!lightbox || !image) return;
  lastFocused = trigger;
  image.src = trigger.dataset.full ?? "";
  image.alt = trigger.dataset.alt ?? "";
  if (caption) caption.textContent = trigger.dataset.caption || trigger.dataset.alt || "";
  lightbox.dataset.open = "true";
  document.body.style.overflow = "hidden";
  void pauseSmoothScroll();
  close?.focus();
}

function closeLightbox(): void {
  const { lightbox, image } = lightboxElements();
  if (!lightbox || !image) return;
  lightbox.dataset.open = "false";
  image.src = "";
  document.body.style.overflow = "";
  void resumeSmoothScroll();
  lastFocused?.focus();
  lastFocused = null;
}

function applyFilter(category: string): void {
  const items = Array.from(document.querySelectorAll<HTMLButtonElement>(".gallery-item"));
  const filterButtons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-filter]"));
  const empty = document.querySelector<HTMLElement>("[data-gallery-empty]");
  let visible = 0;
  for (const item of items) {
    const match = category === "all" || item.dataset.category === category;
    item.hidden = !match;
    if (match) visible += 1;
  }
  for (const button of filterButtons) {
    button.setAttribute("aria-pressed", String(button.dataset.filter === category));
  }
  if (empty) empty.hidden = visible > 0;
}

function bindGallery(): void {
  const root = document.querySelector<HTMLElement>("[data-gallery]");
  if (!root || root.dataset.bound === "true") return;
  root.dataset.bound = "true";

  document.querySelectorAll<HTMLButtonElement>("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.filter ?? "all"));
  });
  root.querySelectorAll<HTMLButtonElement>(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => openLightbox(item));
  });

  const { lightbox, close } = lightboxElements();
  close?.addEventListener("click", closeLightbox);
  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  applyFilter("all");
}

document.addEventListener("keydown", (event) => {
  const { lightbox, close } = lightboxElements();
  if (lightbox?.dataset.open !== "true") return;

  if (event.key === "Escape") {
    closeLightbox();
    return;
  }

  if (event.key === "Tab") {
    event.preventDefault();
    close?.focus();
  }
});

document.addEventListener("astro:page-load", bindGallery);
bindGallery();
