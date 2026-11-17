"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PixelIcon } from "@/components/pixel-icons";
import { NAV_LINKS, SOCIALS } from "@/lib/data";
import { useScrollSpy } from "@/lib/use-scrollspy";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "border-b border-line bg-ink/85 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
          <a href="#top" className="group flex items-center gap-3">
            <PixelIcon name="grass" size={22} className="transition-transform duration-200 group-hover:rotate-6" />
            <span className="font-mono text-sm font-bold tracking-wider">
              AHQAF_ALI<span className="text-fog">.dev</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l, i) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`font-mono text-xs tracking-widest transition-colors ${
                  active === l.id ? "text-xp" : "text-fog hover:text-bone"
                }`}
              >
                <sup className="mr-1 text-[9px] text-fog/60">0{i + 1}</sup>
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <span id="xp-level" className="font-pixel text-[8px] text-xp">
              LV.0
            </span>
            <div className="relative h-2.5 w-28 border border-line bg-panel">
              <div id="xp-fill" className="h-full bg-xp" style={{ width: "0%" }} />
              {/* xp bar notches */}
              <div className="pointer-events-none absolute inset-0 flex justify-between px-[12.5%]">
                {[0, 1].map((i) => (
                  <span key={i} className="h-full w-px bg-ink/60" />
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex size-9 items-center justify-center border border-line text-bone hover:border-xp hover:text-xp lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </nav>
      </header>

      {/* mobile menu */}
      <div
        className={`fixed inset-0 z-[80] flex flex-col bg-ink/97 px-8 pb-10 pt-6 backdrop-blur-lg transition-opacity duration-200 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-sm font-bold tracking-wider">
            AHQAF_ALI<span className="text-fog">.dev</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex size-9 items-center justify-center border border-line text-bone hover:border-xp hover:text-xp"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-16 flex flex-col gap-2">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className={`group flex items-baseline gap-4 border-b border-line py-4 font-mono text-2xl tracking-wider ${
                active === l.id ? "text-xp" : "text-bone"
              }`}
            >
              <span className="text-xs text-fog">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-4">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="font-mono text-[11px] tracking-widest text-fog hover:text-xp">
                {s.label} ↗
              </a>
            ))}
          </div>
          <p className="font-mono text-[10px] tracking-widest text-fog/50">© 2026 AHQAF ALI — BUILD. SHIP. REPEAT.</p>
        </div>
      </div>
    </>
  );
}
