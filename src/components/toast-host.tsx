"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PixelIcon } from "@/components/pixel-icons";
import type { ToastPayload } from "@/lib/bus";

type Item = Required<Pick<ToastPayload, "title" | "icon">> & { desc?: string; id: number };

/** Minecraft advancement toasts — slides in top-right, lingers, leaves. */
export default function ToastHost() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    let nextId = 0;
    const onToast = (e: Event) => {
      const detail = (e as CustomEvent<ToastPayload>).detail ?? {};
      const id = nextId++;
      setItems((prev) => [...prev.slice(-3), { id, title: detail.title ?? "ADVANCEMENT MADE!", desc: detail.desc, icon: detail.icon ?? "trophy" }]);
      window.setTimeout(() => {
        setItems((prev) => prev.filter((t) => t.id !== id));
      }, 4600);
    };
    window.addEventListener("ahqaf:toast", onToast);
    return () => window.removeEventListener("ahqaf:toast", onToast);
  }, []);

  return (
    <div className="pointer-events-none fixed right-4 top-20 z-[200] flex w-[300px] flex-col gap-3 sm:right-6">
      <AnimatePresence>
        {items.map((t) => (
          <motion.div
            key={t.id}
            initial={{ x: 340, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 340, opacity: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            className="flex items-center gap-3 border-2 border-[#3a3a3a] bg-[#171717] p-3 shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
          >
            <div className="flex size-11 shrink-0 items-center justify-center border border-xp/50 bg-xp/10">
              <PixelIcon name={t.icon} size={24} />
            </div>
            <div className="min-w-0">
              <p className="font-pixel text-[8px] leading-relaxed text-xp">{t.title}</p>
              {t.desc && <p className="mt-1.5 text-xs text-bone/85">{t.desc}</p>}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
