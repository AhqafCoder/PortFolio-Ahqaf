"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Boots Lenis smooth scrolling and paints scroll progress into the nav's
 * XP bar (#xp-fill width, #xp-level level) — direct DOM writes so the
 * rAF loop never triggers a React re-render.
 */
export default function LenisProvider() {
  useEffect(() => {
    const fill = document.getElementById("xp-fill");
    const level = document.getElementById("xp-level");

    const paint = (progress: number) => {
      const p = Math.min(1, Math.max(0, progress));
      if (fill) fill.style.width = `${Math.round(p * 100)}%`;
      if (level) level.textContent = `LV.${Math.round(p * 100)}`;
    };

    const fromWindow = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      paint(max > 0 ? window.scrollY / max : 0);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.addEventListener("scroll", fromWindow, { passive: true });
      fromWindow();
      return () => window.removeEventListener("scroll", fromWindow);
    }

    const lenis = new Lenis({ lerp: 0.09, anchors: true });
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onScroll = (e: { scroll: number; limit: number }) => {
      paint(e.limit > 0 ? e.scroll / e.limit : 0);
    };
    lenis.on("scroll", onScroll);
    fromWindow();

    return () => {
      cancelAnimationFrame(raf);
      lenis.off("scroll", onScroll);
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  return null;
}
