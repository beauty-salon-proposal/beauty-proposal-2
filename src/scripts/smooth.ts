import Lenis from "lenis";
import type { ScrollTrigger } from "gsap/ScrollTrigger";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/**
 * Buttery, restrained smooth scrolling (Lenis) as progressive enhancement.
 *
 * Never initialised when the visitor prefers reduced motion — native instant
 * scrolling stays in place instead. Safe to call only after GSAP's
 * ScrollTrigger is registered; keeps scroll-driven reveals in sync.
 */
export function initSmoothScroll(scrollTrigger: typeof ScrollTrigger): void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.__lenis) return;

  const lenis = new Lenis({
    autoRaf: true,
    anchors: true,
    lerp: 0.11,
  });

  lenis.on("scroll", scrollTrigger.update);
  window.__lenis = lenis;
}

/** Pause smooth scrolling while a modal layer (lightbox) owns the screen. */
export function stopSmoothScroll(): void {
  window.__lenis?.stop();
}

export function startSmoothScroll(): void {
  window.__lenis?.start();
}
