"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { Check, Copy } from "lucide-react";
import { SITE, SOCIALS } from "@/lib/data";
import { toast } from "@/lib/bus";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
      toast("EMAIL ACQUIRED", "Copied to clipboard. Now actually use it.", "diamond");
    } catch {
      window.location.href = `mailto:${SITE.email}`;
    }
  };

  return (
    <section id="contact" className="px-6 pb-32 pt-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="06" title="CONTACT" note="RESPONDS < 24H — USUALLY MUCH FASTER" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="font-mono text-xs tracking-[0.25em] text-fog">GOT A BUILD IN MIND? A DRONE TO FLY? A SERVER TO KEEP ALIVE?</p>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <a
              href={`mailto:${SITE.email}`}
              className="u text-[clamp(1.6rem,5.5vw,4rem)] font-bold tracking-tight leading-tight break-all text-bone hover:text-xp"
            >
              {SITE.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email address"
              className="btn-block flex size-12 items-center justify-center border border-line text-fog hover:border-xp hover:text-xp"
            >
              {copied ? <Check size={18} className="text-xp" /> : <Copy size={18} />}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="bg-panel p-5">
            <p className="font-mono text-[10px] tracking-[0.25em] text-fog/60">OPEN FOR</p>
            <p className="mt-2 font-mono text-xs leading-6 text-bone">FREELANCE · FULL-TIME · CONTRACT · REMOTE</p>
          </div>
          <div className="bg-panel p-5">
            <p className="font-mono text-[10px] tracking-[0.25em] text-fog/60">LOCATION</p>
            <p className="mt-2 font-mono text-xs leading-6 text-bone">{SITE.location.toUpperCase()} · UTC+5:30 · {SITE.coords}</p>
          </div>
          <div className="bg-panel p-5">
            <p className="font-mono text-[10px] tracking-[0.25em] text-fog/60">RESPONSE TIME</p>
            <p className="mt-2 font-mono text-xs leading-6 text-bone">&lt; 24 HOURS <span className="text-fog">(TYPICALLY MINUTES)</span></p>
          </div>
          <div className="bg-panel p-5">
            <p className="font-mono text-[10px] tracking-[0.25em] text-fog/60">ALSO KNOWN AS</p>
            <p className="mt-2 font-mono text-xs leading-6 text-bone">
              {SITE.handle} <span className="text-fog">· JUGADU GAMING</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap gap-x-8 gap-y-3"
        >
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="u font-mono text-xs tracking-[0.2em] text-fog hover:text-xp">
              {s.label} ↗
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
