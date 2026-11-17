"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";

const ease = [0.16, 1, 0.3, 1] as const;

const NOW = [
  { org: "EduSphere Technologies", role: "Full Stack Developer", since: "2026.02" },
  { org: "WTFBuilds", role: "Founder — shipping in public", since: "2026" },
  { org: "Invertis Incubation Center", role: "Tech Associate", since: "2025.10" },
  { org: "MineX Rover + Hybrid VTOL", role: "R&D — autonomy, AI navigation", since: "NOW" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="01" title="ABOUT" note="MINECRAFT → DRONES → ROVERS" />

        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="space-y-6 text-lg leading-relaxed text-fog"
          >
            <p>
              I got into engineering sideways — through{" "}
              <span className="text-bone">Minecraft</span>. Running a multiplayer arcade server on
              Singapore cloud hardware taught me uptime, Linux and how to keep a community alive
              before I ever opened a CS textbook. Owning things end-to-end never stopped being the
              fun part.
            </p>
            <p>
              Today I&apos;m a full-stack developer and R&D engineer from Bareilly, India — a{" "}
              <span className="text-bone">Linux daily-driver</span> who ships production web
              platforms, writes <span className="text-bone">custom Minecraft plugins</span>, flies
              a hybrid VTOL drone and is building <span className="text-bone">MineX</span>, an
              autonomous AI rover for mine safety. Five hackathon wins, 20+ projects shipped,
              1700+ contributions — and I founded{" "}
              <span className="text-bone">WTFBuilds</span> to do more of it in public.
            </p>
            <p className="border-l-2 border-xp pl-5 font-mono text-base text-bone">
              Concept → production. Fast. That&apos;s the whole method.
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.12 }}
            className="space-y-8"
          >
            {/* current work */}
            <div className="notch border border-line bg-panel p-6">
              <p className="mb-5 flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-fog">
                <span className="pulse-dot inline-block size-1.5 bg-xp" />
                CURRENTLY RUNNING
              </p>
              <ul className="space-y-4">
                {NOW.map((n) => (
                  <li key={n.org} className="border-l border-line pl-4">
                    <p className="text-sm font-semibold text-bone">{n.org}</p>
                    <p className="mt-0.5 font-mono text-xs text-fog">{n.role}</p>
                    <p className="mt-1 font-mono text-[10px] tracking-widest text-xp">SINCE {n.since}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* education */}
            <div className="notch border border-line bg-panel p-6">
              <p className="mb-4 font-mono text-[10px] tracking-[0.25em] text-fog">EDUCATION.SAVE</p>
              <div className="space-y-2 font-mono text-xs leading-6 text-fog">
                <p>
                  <span className="text-bone">B.TECH CSE</span> — INVERTIS UNIVERSITY, BAREILLY
                </p>
                <p className="text-fog/60">2024 → 2028</p>
                <p className="pt-2">
                  CLASS XII — 74.62% · CLASS X — 85.20% · R.P.M. ACADEMY, GORAKHPUR
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
