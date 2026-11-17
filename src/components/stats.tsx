"use client";

import { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { STATS } from "@/lib/data";

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const el = ref.current;
    if (!el) return;
    const start = performance.now();
    const dur = 1300;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))).toString();
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>0</span>;
}

export default function Stats() {
  return (
    <section className="border-b border-line px-6 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 md:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className={`pl-6 ${i > 0 ? "md:border-l md:border-line" : ""}`}
          >
            <p className="text-5xl font-bold tracking-tight">
              <Counter to={s.value} />
              <span className="text-xp">{s.suffix}</span>
            </p>
            <p className="mt-3 font-mono text-[10px] tracking-[0.25em] text-fog">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
