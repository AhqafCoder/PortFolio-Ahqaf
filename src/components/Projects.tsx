"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { PixelIcon } from "@/components/pixel-icons";
import { FEATURED, SLOTS, RARITY_COLOR, type Slot } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

function SlotTooltip({ slot }: { slot: Slot }) {
  return (
    <div
      className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-3 hidden w-60 -translate-x-1/2 border-2 border-spell/50 bg-[#100010]/95 p-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.6)] group-hover:block sm:group-focus-within:block"
      role="tooltip"
    >
      <p className={`text-sm font-bold ${RARITY_COLOR[slot.rarity]}`}>{slot.name}</p>
      <div className="mt-2 space-y-0.5">
        {slot.lore.map((line, i) => (
          <p key={i} className="text-xs italic leading-relaxed text-[#9d9d9d]">
            {line}
          </p>
        ))}
      </div>
      <p className="mt-2.5 border-t border-white/10 pt-2 font-mono text-[9px] tracking-widest text-fog">
        {slot.rarity}
        {slot.href ? (slot.external ? " · CLICK TO OPEN ↗" : " · CLICK TO TRAVEL") : " · NO RECIPE YET"}
      </p>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="02" title="SHIPPED" note="SELECTED WORK — BUILT, NOT PLANNED" />

        {/* featured rows */}
        <div className="border-t border-line">
          {FEATURED.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: 0.05 * i }}
              className="group grid gap-4 border-b border-line py-9 transition-colors hover:bg-panel/50 md:grid-cols-[70px_1fr_auto] md:gap-8 md:px-4"
            >
              <span className="font-mono text-sm text-fog/50 transition-colors group-hover:text-xp">
                /{p.index}
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className="text-3xl font-bold tracking-tight transition-transform duration-200 group-hover:translate-x-1 group-hover:text-xp md:text-4xl">
                    {p.name}
                  </h3>
                  {p.badge && (
                    <span className="flex items-center gap-2 border border-ore/50 bg-ore/10 px-2.5 py-1 font-mono text-[10px] tracking-widest text-ore">
                      <PixelIcon name="trophy" size={12} />
                      {p.badge}
                    </span>
                  )}
                </div>
                <p className="mt-3 max-w-3xl leading-relaxed text-fog">{p.blurb}</p>
                <p className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] tracking-widest text-fog/60">
                  {p.tags.map((t) => (
                    <span key={t}>[{t}]</span>
                  ))}
                </p>
              </div>
              <div className="flex flex-row items-start gap-6 md:flex-col md:items-end">
                <span className="font-mono text-xs text-fog/60">{p.year}</span>
                <div className="flex gap-4 font-mono text-[11px] tracking-widest">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="u text-bone hover:text-xp">
                      LIVE ↗
                    </a>
                  )}
                  {p.code && (
                    <a href={p.code} target="_blank" rel="noreferrer" className="u text-fog hover:text-xp">
                      CODE ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* inventory */}
        <div className="mt-20">
          <p className="mb-6 font-mono text-[11px] tracking-[0.25em] text-fog">
            // MISC INVENTORY — 9 SLOTS · HOVER FOR LORE · KEYS 1–9 SWITCH SELECTION BELOW
          </p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-9"
          >
            {SLOTS.map((slot, i) => {
              const inner = (
                <>
                  <span className="absolute left-1.5 top-1 font-mono text-[9px] text-fog/40">{i + 1}</span>
                  <SlotTooltip slot={slot} />
                  <span className="flex flex-col items-center justify-center gap-1.5 pt-2">
                    <PixelIcon name={slot.icon} size={34} className="transition-transform duration-200 group-hover:scale-110" />
                    <span className="px-1 text-center font-mono text-[8px] leading-tight tracking-wider text-fog transition-colors group-hover:text-bone">
                      {slot.name.toUpperCase()}
                    </span>
                  </span>
                </>
              );
              const cls =
                "group relative aspect-square cursor-pointer border border-line bg-panel p-2 transition-all duration-150 hover:-translate-y-1 hover:border-xp hover:bg-panel2 focus-visible:border-xp";
              return slot.href ? (
                <a key={slot.name} href={slot.href} target={slot.external ? "_blank" : undefined} rel={slot.external ? "noreferrer" : undefined} className={cls}>
                  {inner}
                </a>
              ) : (
                <div key={slot.name} className={cls} tabIndex={0}>
                  {inner}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
