"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { PixelIcon } from "@/components/pixel-icons";
import { ADVANCEMENTS } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Advancements() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="05" title="ADVANCEMENTS" note="HALL OF RECOGNITION" />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANCEMENTS.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease, delay: (i % 3) * 0.08 }}
              className="notch group flex items-center gap-5 border border-line bg-panel p-5 transition-all duration-150 hover:-translate-y-1 hover:border-xp"
            >
              <div
                className={`flex size-12 shrink-0 items-center justify-center border transition-colors ${
                  a.won ? "border-ore/60 bg-ore/10" : "border-line bg-panel2"
                }`}
              >
                <PixelIcon name={a.icon} size={26} className={a.won ? "opacity-95" : "opacity-60"} />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-bone transition-colors group-hover:text-xp">{a.name}</p>
                <p className="mt-1 font-mono text-[11px] leading-relaxed text-fog">{a.desc}</p>
              </div>
              {a.won && <span className="ml-auto font-pixel text-[7px] text-ore">GOAL!</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
