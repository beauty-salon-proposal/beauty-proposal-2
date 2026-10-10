import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";

function markReady(): void {
  document.documentElement.dataset.motionReady = "true";
}

function showAll(): void {
  document.documentElement.classList.remove("js");
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
}

let triggers: ScrollTriggerType[] = [];
let gsapReady: Promise<typeof ScrollTriggerType> | null = null;

function loadScrollTrigger(): Promise<typeof ScrollTriggerType> {
  if (!gsapReady) {
    gsapReady = (async () => {
      const gsapModule = await import("gsap");
      const scrollModule = await import("gsap/ScrollTrigger");
      gsapModule.gsap.registerPlugin(scrollModule.ScrollTrigger);
      return scrollModule.ScrollTrigger;
    })();
  }
  return gsapReady;
}

function bindReveals(ScrollTrigger: typeof ScrollTriggerType): void {
  triggers.forEach((trigger) => trigger.kill());
  triggers = [];
  document.querySelectorAll<HTMLElement>(".reveal").forEach((element) => {
    if (element.classList.contains("is-visible")) return;
    triggers.push(
      ScrollTrigger.create({
        trigger: element,
        start: "top 90%",
        once: true,
        onEnter: () => element.classList.add("is-visible"),
      }),
    );
  });
  ScrollTrigger.refresh();
}

async function init(): Promise<void> {
  if (document.documentElement.classList.contains("reduced-motion")) {
    markReady();
    return;
  }

  const ScrollTrigger = await loadScrollTrigger();

  if (!document.documentElement.dataset.smoothReady) {
    const smooth = await import("./smooth");
    smooth.initSmoothScroll(ScrollTrigger);
    document.documentElement.dataset.smoothReady = "true";
  }

  document.documentElement.classList.add("js");
  bindReveals(ScrollTrigger);
  markReady();
}

document.addEventListener("astro:page-load", () => {
  void init().catch(showAll);
});

window.addEventListener("load", () => {
  if (gsapReady) void gsapReady.then((ScrollTrigger) => ScrollTrigger.refresh());
});

init().then(markReady).catch(showAll);
