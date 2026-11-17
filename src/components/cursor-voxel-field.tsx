"use client";

import { useEffect, useRef } from "react";

/**
 * Hero background: a field of dim voxel cells. Cells near the cursor "power
 * on" like redstone, a few fixed cells twinkle as amber ore. Canvas 2D,
 * direct rAF, no React state per frame.
 */
export default function CursorVoxelField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const CELL = 26;
    const RADIUS = 150;
    let raf = 0;
    let running = true;
    let cols = 0;
    let rows = 0;
    let energy: Float32Array | null = null;
    let ore: Uint8Array | null = null;
    let mouse = { x: -9999, y: -9999 };
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      cols = Math.ceil(rect.width / CELL);
      rows = Math.ceil(rect.height / CELL);
      const n = cols * rows;
      energy = new Float32Array(n);
      ore = new Uint8Array(n);
      for (let i = 0; i < n; i++) {
        const x = i % cols;
        const y = Math.floor(i / cols);
        // deterministic pseudo-hash → stable "ore" cells
        const h = Math.abs((x * 73856093) ^ (y * 19349663)) % 97;
        ore[i] = h < 1 ? 1 : 0;
      }
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawFrame = (t: number) => {
      const en = energy;
      const or = ore;
      if (!en || !or) return;
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      const mx = mouse.x;
      const my = mouse.y;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = y * cols + x;
          const cx = x * CELL + CELL / 2;
          const cy = y * CELL + CELL / 2;
          const dx = cx - mx;
          const dy = cy - my;
          const d = Math.sqrt(dx * dx + dy * dy);
          const target = d < RADIUS ? 1 - d / RADIUS : 0;
          en[i] = Math.max(en[i] * 0.93, target);

          const e = en[i];
          const isOre = or[i] === 1;
          const tw = isOre ? 0.05 + 0.08 * (0.5 + 0.5 * Math.sin(t / 620 + i * 1.7)) : 0;

          let fill: string;
          let alpha: number;
          if (e > 0.04) {
            // powered → xp green
            const g = 32 + Math.round(126 * e);
            const b = 16 + Math.round(60 * e);
            fill = `rgb(${40 + Math.round(60 * e)},${g},${b})`;
            alpha = 0.15 + 0.5 * e;
          } else if (isOre) {
            fill = "#f2a71b";
            alpha = tw;
          } else {
            fill = "#151a20";
            alpha = 0.28;
          }
          ctx.fillStyle = fill;
          ctx.globalAlpha = alpha;
          ctx.fillRect(x * CELL + 1, y * CELL + 1, CELL - 2, CELL - 2);
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = (t: number) => {
      if (!running) return;
      drawFrame(t);
      raf = requestAnimationFrame(loop);
    };

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => {
      mouse = { x: -9999, y: -9999 };
    };
    const onResize = () => {
      build();
      if (reduced) drawFrame(0);
    };
    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduced) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };

    build();
    if (reduced) {
      drawFrame(0); // static field, no cursor interaction
    } else {
      raf = requestAnimationFrame(loop);
      window.addEventListener("mousemove", onMouse, { passive: true });
      document.documentElement.addEventListener("mouseleave", onLeave);
    }
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
