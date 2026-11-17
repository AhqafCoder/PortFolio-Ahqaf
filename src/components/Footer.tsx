"use client";

import { FormEvent, useRef, useState } from "react";
import { PixelIcon } from "@/components/pixel-icons";
import { toast } from "@/lib/bus";
import { SITE } from "@/lib/data";

const SECTIONS = ["about", "work", "log", "stack", "contact"];

function scrollToId(id: string) {
  const lenis = (window as unknown as { lenis?: { scrollTo: (t: string, o?: object) => void } }).lenis;
  if (lenis) lenis.scrollTo(`#${id}`, { offset: -80 });
  else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const inputRef = useRef<HTMLInputElement>(null);
  const blockClicks = useRef(0);
  const [history, setHistory] = useState<string[]>([]);

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    setHistory((h) => [...h.slice(-2), `> ${cmd}`]);

    if (cmd === "/help") {
      toast("COMMANDS", "/tp <section> · /gamemode · /creeper · /give · /sudo · /xyz", "book");
    } else if (cmd.startsWith("/tp")) {
      const target = cmd.split(/\s+/)[1];
      if (target && SECTIONS.includes(target)) {
        scrollToId(target);
        toast("TELEPORTED", `Whoosh → SEC.${target.toUpperCase()}`, "portal");
      } else {
        toast("TELEPORT FAILED", `Unknown destination. Try: /tp ${SECTIONS.join(" | ")}`, "portal");
      }
    } else if (cmd === "/gamemode creative") {
      toast("ALREADY CREATIVE", "I build in survival mode. More XP that way.", "diamond");
    } else if (cmd.startsWith("/gamemode")) {
      toast("ACCESS DENIED", "Only creative is allowed here.", "creeper");
    } else if (cmd === "/creeper" || cmd === "aw man" || cmd === "aww man") {
      toast("AW MAN", "So we back in the mine, got our pickaxe swinging…", "creeper");
    } else if (cmd.startsWith("/give")) {
      toast("GAVE 1 × DIAMOND", "+64 crafting ability. Spend it wisely.", "diamond");
    } else if (cmd === "/sudo") {
      toast("NICE TRY", "ahqaf is not in the sudoers file. This incident will be reported.", "creeper");
    } else if (cmd === "/xyz") {
      toast("COORDINATES", `${SITE.coords} — BAREILLY, IN · ALWAYS ONLINE`, "globe");
    } else {
      toast("UNKNOWN COMMAND", `"${cmd}" — try /help`, "book");
    }
    if (inputRef.current) inputRef.current.value = "";
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    runCommand(inputRef.current?.value ?? "");
  };

  const onBlockClick = () => {
    blockClicks.current += 1;
    const n = blockClicks.current;
    if (n === 3) toast("HMM?", "Keep clicking. Blocks in Minecraft also need ~10 hits.", "grass");
    if (n >= 10) {
      toast("YOU DUG TOO DEEP", "Bedrock reached. Nothing below this. Promise.", "diamond");
      blockClicks.current = 0;
      document.body.classList.add("shaking");
      window.setTimeout(() => document.body.classList.remove("shaking"), 600);
    }
  };

  return (
    <footer className="relative">
      <div className="border-t border-line bg-panel/40 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <button
              type="button"
              onClick={onBlockClick}
              aria-label="A suspicious block"
              className="block opacity-90 transition-transform hover:scale-110 active:scale-95"
            >
              <PixelIcon name="grass" size={26} />
            </button>
            <p className="font-mono text-[10px] tracking-[0.2em] text-fog">
              © 2026 {SITE.name.toUpperCase()} — BUILT WITH NEXT.JS · TAILWIND · LENIS · CAFFEINE
            </p>
            <p className="font-mono text-[10px] tracking-[0.2em] text-fog/50">
              NO MOBS WERE HARMED IN THE MAKING OF THIS SITE
            </p>
          </div>

          {/* command console */}
          <div className="w-full max-w-sm">
            <div className="notch border border-line bg-ink px-4 py-3">
              <form onSubmit={onSubmit} className="flex items-center gap-2.5">
                <span className="font-mono text-xs text-xp">&gt;_</span>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="/help"
                  spellCheck={false}
                  autoComplete="off"
                  aria-label="Command console"
                  className="w-full bg-transparent font-mono text-xs text-bone outline-none placeholder:text-fog/50"
                />
                <span className="blink inline-block h-3 w-1.5 bg-xp" />
              </form>
            </div>
            {history.length > 0 && (
              <div className="mt-2 space-y-0.5 font-mono text-[10px] text-fog/60">
                {history.map((h, i) => (
                  <p key={i}>{h}</p>
                ))}
              </div>
            )}
            <p className="mt-2 text-right font-mono text-[9px] tracking-widest text-fog/40">
              A TERMINAL, BECAUSE OBVIOUSLY
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
