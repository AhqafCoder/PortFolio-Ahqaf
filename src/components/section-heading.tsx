"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function SectionHeading({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="mb-14">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
        className="flex flex-wrap items-baseline justify-between gap-4"
      >
        <div className="flex items-baseline gap-5">
          <span className="font-mono text-sm text-xp">/{index}</span>
          <h2 className="text-5xl font-bold tracking-tight md:text-6xl">{title}</h2>
        </div>
        {note && (
          <p className="hidden font-mono text-[11px] tracking-widest text-fog md:block">{note}</p>
        )}
      </motion.div>
      {/* pixel underline */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-5 flex gap-1"
        aria-hidden="true"
      >
        <span className="size-2 bg-xp" />
        <span className="size-2 bg-xp/60" />
        <span className="size-2 bg-ore" />
        <span className="size-2 bg-line" />
        <span className="size-2 bg-line" />
        <span className="size-2 bg-line" />
        <span className="size-2 bg-line/50" />
        <span className="size-2 bg-line/30" />
      </motion.div>
    </div>
  );
}
