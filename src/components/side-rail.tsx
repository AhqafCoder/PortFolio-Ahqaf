"use client";

import { NAV_LINKS } from "@/lib/data";
import { useScrollSpy } from "@/lib/use-scrollspy";

/** Left-edge vertical telemetry: current section + section ticks. */
export default function SideRail() {
  const active = useScrollSpy(NAV_LINKS.map((l) => l.id));
  const idx = NAV_LINKS.findIndex((l) => l.id === active);

  return (
    <aside className="pointer-events-none fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex">
      <span className="h-10 w-px bg-line" />
      <span
        className="font-mono text-[10px] tracking-[0.3em] text-fog"
        style={{ writingMode: "vertical-rl" }}
      >
        {idx >= 0 ? `SEC.0${idx + 1} — ${NAV_LINKS[idx].label}` : "SEC.00 — BOOT"}
      </span>
      <span className="flex flex-col gap-1.5">
        {NAV_LINKS.map((l) => (
          <span
            key={l.id}
            className={`size-1.5 transition-colors ${active === l.id ? "bg-xp" : "bg-line"}`}
          />
        ))}
      </span>
      <span className="h-10 w-px bg-line" />
    </aside>
  );
}
