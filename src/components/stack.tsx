"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { HOTBAR, STACK_GROUPS } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Minecraft-style hotbar: auto-cycles, pauses on hover, and keys 1–9 select
 * directly (when you're not typing in a field).
 */
export default function Stack() {
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setSelected((s) => (s + 1) % HOTBAR.length), 1900);
    return () => window.clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) return;
      const n = Number.parseInt(e.key, 10);
      if (n >= 1 && n <= 9) setSelected(n - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const current = HOTBAR[selected];

  return (
    <section id="stack" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="04" title="LOADOUT" note="TOOLS OF THE TRADE — KEYS 1–9 TO SELECT" />

        {/* hotbar */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <div
            className="mx-auto flex w-fit max-w-full gap-1.5 overflow-x-auto p-1.5"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {HOTBAR.map((h, i) => (
              <button
                key={h.name}
                type="button"
                onClick={() => setSelected(i)}
                aria-pressed={selected === i}
                className={`relative flex size-14 shrink-0 flex-col items-center justify-center gap-1 border transition-colors md:size-16 ${
                  selected === i
                    ? "border-bone bg-panel2 shadow-[inset_0_0_0_1px_rgba(236,233,226,0.25)]"
                    : "border-line bg-panel hover:border-fog"
                }`}
              >
                <span className="font-mono text-sm font-bold text-bone">{h.ab}</span>
                <span className="size-1.5" style={{ background: h.c }} />
                <span className="absolute right-1 bottom-0.5 font-mono text-[8px] text-fog/50">{i + 1}</span>
              </button>
            ))}
          </div>

          <p className="mt-5 text-center font-mono text-xs tracking-[0.2em] text-fog">
            <span className="text-fog/50">SELECTED:</span>{" "}
            <span className="text-xp">{current.name.toUpperCase()}</span>{" "}
            <span className="text-fog/50">— {current.cat}</span>
          </p>
        </motion.div>

        {/* grouped lists */}
        <div className="mt-16 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {STACK_GROUPS.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease, delay: (i % 2) * 0.08 }}
              className="border-t border-line pt-5"
            >
              <h3 className="flex items-center gap-2.5 font-mono text-xs tracking-[0.25em] text-xp">
                <span className="size-1.5 bg-xp" />
                {g.title}
              </h3>
              <p className="mt-3 font-mono text-[13px] leading-7 text-fog">{g.items}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
