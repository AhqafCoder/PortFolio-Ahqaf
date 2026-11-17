"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { EXPERIENCE } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Experience() {
  return (
    <section id="log" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="03" title="EXPERIENCE.LOG" note="TAIL -F ~/CAREER" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="notch border border-line bg-panel/60"
        >
          {/* terminal chrome */}
          <div className="flex items-center gap-3 border-b border-line bg-panel2 px-5 py-3">
            <span className="flex gap-1.5">
              <span className="size-2.5 bg-lava" />
              <span className="size-2.5 bg-ore" />
              <span className="size-2.5 bg-xp" />
            </span>
            <span className="font-mono text-xs text-fog">ahqaf@prod:~$ cat experience.log</span>
          </div>

          <div className="divide-y divide-line/60">
            {EXPERIENCE.map((e, i) => (
              <motion.div
                key={`${e.org}-${e.period}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group grid gap-1 px-5 py-5 transition-colors hover:bg-panel2/70 md:grid-cols-[190px_1fr] md:gap-6 md:px-8"
              >
                <p className={`font-mono text-xs tracking-wider ${e.current ? "text-xp" : "text-fog"}`}>
                  [{e.period}]
                </p>
                <div>
                  <p className="font-medium text-bone transition-colors group-hover:text-xp">
                    {e.role} <span className="text-fog">— {e.org}</span>
                  </p>
                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-fog">{e.detail}</p>
                </div>
              </motion.div>
            ))}
            <div className="px-5 py-4 md:px-8">
              <p className="font-mono text-xs text-fog">
                ahqaf@prod:~$ tail -f ambition.log
                <span className="blink ml-2 inline-block h-[1em] w-[0.55em] translate-y-[0.1em] bg-xp" />
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
