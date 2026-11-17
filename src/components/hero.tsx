"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CursorVoxelField from "@/components/cursor-voxel-field";
import { toast } from "@/lib/bus";
import { SITE } from "@/lib/data";

const ROLES = ["FULL-STACK DEVELOPER", "R&D ENGINEER", "DRONE & ROVER BUILDER", "PLUGIN DEVELOPER", "WTFBUILDS FOUNDER"];

const ease = [0.16, 1, 0.3, 1] as const;

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx % words.length];
    let delay = deleting ? 38 : 72;
    if (!deleting && text === word) delay = 1800;
    if (deleting && text === "") delay = 350;

    const timer = window.setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [text, deleting, wordIdx, words]);

  return text;
}

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6">
      <CursorVoxelField className="absolute inset-0 size-full" />

      <div className="relative mx-auto w-full max-w-7xl pb-28 pt-32 md:pb-16">
        {/* status strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] tracking-widest text-fog"
        >
          <span className="flex items-center gap-2 text-bone">
            <span className="pulse-dot inline-block size-2 bg-xp" />
            OPEN TO WORK
          </span>
          <span className="text-fog/70">RESPONDS &lt; 24H</span>
          <span className="hidden sm:inline text-fog/70">{SITE.coords} — BAREILLY, IN</span>
        </motion.div>

        {/* name + player card */}
        <div className="mt-2 flex items-start justify-between gap-10">
          <h1 className="font-bold leading-[0.85] tracking-tighter">
            <span className="block overflow-hidden">
              <motion.span
                className="block text-[clamp(4rem,14vw,11.5rem)]"
                initial={{ y: "112%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease, delay: 0.25 }}
              >
                AHQAF
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="text-outline block text-[clamp(4rem,14vw,11.5rem)]"
                initial={{ y: "112%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease, delay: 0.38 }}
              >
                ALI
                <span className="ml-3 inline-block size-[0.13em] bg-xp align-baseline" />
              </motion.span>
            </span>
          </h1>

          {/* player card — top right, beside the name */}
          <motion.button
            type="button"
            onClick={() => toast("PLAYER_ONE", "Real mountains, no shaders. Spawn point: India.", "grass")}
            aria-label="That's me"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.9 }}
            className="btn-block notch hidden shrink-0 border border-line bg-panel p-1.5 md:block"
          >
            <Image
              src="/me.jpg"
              alt="Ahqaf Ali standing at a lakeside railing, mountains behind him"
              width={675}
              height={1200}
              priority
              className="h-60 w-44 object-cover object-[50%_62%] contrast-[1.05] saturate-[.85]"
            />
            <span className="mt-1.5 flex items-center justify-between px-1 pb-0.5 font-mono text-[9px] tracking-widest">
              <span className="text-fog">PLAYER_ONE</span>
              <span className="flex items-center gap-1.5 text-xp">
                <span className="pulse-dot inline-block size-1.5 bg-xp" />
                ONLINE
              </span>
            </span>
          </motion.button>
        </div>

        {/* role + tagline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-xl">
            <p className="font-mono text-sm tracking-widest text-bone">
              {role}
              <span className="blink ml-1 inline-block h-[1em] w-[0.55em] translate-y-[0.15em] bg-xp" />
            </p>
            <p className="mt-5 text-lg leading-relaxed text-fog">
              From web apps to hybrid VTOL drones and an AI mine rover — I build what others only
              plan. Currently shipping at two startups, a drone lab, and{" "}
              <span className="text-bone">WTFBuilds</span>.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#work"
                className="btn-block bg-bone px-7 py-4 font-mono text-xs font-bold tracking-widest text-ink"
              >
                VIEW WORK ↘
              </a>
              <a
                href="#contact"
                className="btn-block border border-line px-7 py-4 font-mono text-xs tracking-widest text-bone hover:border-xp hover:text-xp"
              >
                CONTACT
              </a>
            </div>

            {/* player card — inline on mobile */}
            <motion.button
              type="button"
              onClick={() => toast("PLAYER_ONE", "Real mountains, no shaders. Spawn point: India.", "grass")}
              aria-label="That's me"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 1 }}
              className="btn-block notch mt-8 block border border-line bg-panel p-1.5 md:hidden"
            >
              <Image
                src="/me.jpg"
                alt="Ahqaf Ali standing at a lakeside railing, mountains behind him"
                width={675}
                height={1200}
                priority
                className="h-48 w-36 object-cover object-[50%_62%] contrast-[1.05] saturate-[.85]"
              />
              <span className="mt-1.5 flex items-center justify-between px-1 pb-0.5 font-mono text-[9px] tracking-widest">
                <span className="text-fog">PLAYER_ONE</span>
                <span className="flex items-center gap-1.5 text-xp">
                  <span className="pulse-dot inline-block size-1.5 bg-xp" />
                  ONLINE
                </span>
              </span>
            </motion.button>
          </div>

          {/* build meta — right, bottom-aligned */}
          <div className="hidden shrink-0 flex-col gap-2 border-l border-line pl-6 font-mono text-[11px] leading-6 tracking-wider text-fog md:flex">
            <p>
              <span className="text-fog/50">BUILD&nbsp;&nbsp;</span>2026.11 — REVAMP
            </p>
            <p>
              <span className="text-fog/50">FOCUS&nbsp;&nbsp;</span>
              <span className="text-ore">VTOL DRONE · AI MINE ROVER</span>
            </p>
            <p>
              <span className="text-fog/50">OS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>LINUX (DAILY DRIVER)
            </p>
            <p className="flex items-center gap-2">
              <span className="text-fog/50">STATUS&nbsp;</span>
              <span className="pulse-dot inline-block size-1.5 bg-ore" />
              <span>COMPILING…</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-14 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-fog/70">SCROLL</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="block size-2.5 border-b-2 border-r-2 border-fog rotate-45"
        />
      </motion.div>
    </section>
  );
}
