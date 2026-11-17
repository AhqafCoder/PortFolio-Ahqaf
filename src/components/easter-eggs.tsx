"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PixelIcon } from "@/components/pixel-icons";
import { toast } from "@/lib/bus";

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

/** short synthesized hiss + boom — WebAudio, no assets */
function playBoom() {
  try {
    const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const now = ctx.currentTime;

    // hiss: rising filtered noise
    const hissLen = 1.1;
    const hissBuf = ctx.createBuffer(1, ctx.sampleRate * hissLen, ctx.sampleRate);
    const hData = hissBuf.getChannelData(0);
    for (let i = 0; i < hData.length; i++) hData[i] = Math.random() * 2 - 1;
    const hiss = ctx.createBufferSource();
    hiss.buffer = hissBuf;
    const hFilter = ctx.createBiquadFilter();
    hFilter.type = "bandpass";
    hFilter.frequency.value = 3200;
    hFilter.Q.value = 0.8;
    const hGain = ctx.createGain();
    hGain.gain.setValueAtTime(0.0001, now);
    hGain.gain.exponentialRampToValueAtTime(0.16, now + hissLen);
    hiss.connect(hFilter).connect(hGain).connect(ctx.destination);
    hiss.start(now);
    hiss.stop(now + hissLen);

    // boom: low thump
    const boomLen = 0.6;
    const boomBuf = ctx.createBuffer(1, ctx.sampleRate * boomLen, ctx.sampleRate);
    const bData = boomBuf.getChannelData(0);
    for (let i = 0; i < bData.length; i++) bData[i] = (Math.random() * 2 - 1) * (1 - i / bData.length);
    const boom = ctx.createBufferSource();
    boom.buffer = boomBuf;
    const bFilter = ctx.createBiquadFilter();
    bFilter.type = "lowpass";
    bFilter.frequency.setValueAtTime(600, now + hissLen);
    bFilter.frequency.exponentialRampToValueAtTime(90, now + hissLen + boomLen);
    const bGain = ctx.createGain();
    bGain.gain.setValueAtTime(0.0001, now);
    bGain.gain.setValueAtTime(0.5, now + hissLen);
    bGain.gain.exponentialRampToValueAtTime(0.001, now + hissLen + boomLen);
    boom.connect(bFilter).connect(bGain).connect(ctx.destination);
    boom.start(now + hissLen);
    boom.stop(now + hissLen + boomLen);

    window.setTimeout(() => ctx.close().catch(() => {}), (hissLen + boomLen) * 1000 + 300);
  } catch {
    /* audio is a bonus, never a blocker */
  }
}

type Phase = "idle" | "walk" | "boom";

export default function EasterEggs() {
  const [phase, setPhase] = useState<Phase>("idle");
  const phaseRef = useRef<Phase>("idle");
  const spawnedRef = useRef(false);

  const explode = useCallback(() => {
    playBoom();
    setPhase("boom");
    document.body.classList.add("shaking");
    window.setTimeout(() => document.body.classList.remove("shaking"), 600);
    window.setTimeout(() => {
      phaseRef.current = "idle";
      setPhase("idle");
      toast("ADVANCEMENT MADE!", "Cheat code accepted. Ssssorry about the mess.", "creeper");
    }, 1100);
  }, []);

  const spawnCreeper = useCallback(() => {
    if (phaseRef.current !== "idle") return;
    phaseRef.current = "walk";
    setPhase("walk");
    window.setTimeout(() => {
      phaseRef.current = "boom";
      explode();
    }, 2400);
  }, [explode]);

  useEffect(() => {
    // konami code
    let konamiIdx = 0;
    // typed-word tracker
    let typed = "";

    const isTyping = (target: EventTarget | null) => {
      const el = target as HTMLElement | null;
      return !!el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
    };

    const onKey = (e: KeyboardEvent) => {
      // konami uses arrows, which never appear in words — check regardless of focus
      konamiIdx = e.key === KONAMI[konamiIdx] ? konamiIdx + 1 : e.key === KONAMI[0] ? 1 : 0;
      if (konamiIdx === KONAMI.length) {
        konamiIdx = 0;
        spawnCreeper();
        return;
      }

      if (isTyping(e.target)) return;
      if (e.key.length !== 1) return;
      typed = (typed + e.key.toLowerCase()).slice(-10);
      if (typed.endsWith("creeper")) {
        typed = "";
        toast("AW MAN", "That's the only correct response.", "creeper");
      } else if (typed.endsWith("ahqaf")) {
        typed = "";
        toast("HOW DID WE GET HERE?", "You spelled my name unprompted. Respect.", "diamond");
      }
    };
    window.addEventListener("keydown", onKey);

    // reached the bottom
    let reached = false;
    const onScroll = () => {
      if (reached) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max > 0.985) {
        reached = true;
        toast("THE END?", "You reached bedrock. There's more hidden down there…", "diamond");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // console note for the curious
    console.log(
      "%c AHQAF_ALI.DEV %c BUILD 2026.11 · REVAMP ",
      "background:#7ef03c;color:#0b0d10;font-weight:bold;padding:2px 4px;",
      "background:#171d25;color:#8a93a2;padding:2px 4px;"
    );
    console.log(
      "%c psst — the konami code works here. so does typing \"creeper\". the footer has a terminal. ",
      "color:#7ef03c;font-family:monospace;"
    );

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, [spawnCreeper]);

  // particles for the boom
  const particles = useRef(
    Array.from({ length: 28 }, (_, i) => ({
      dx: (Math.random() - 0.5) * 340,
      dy: -Math.random() * 260 - 40,
      size: 5 + Math.random() * 11,
      rot: Math.random() * 90 - 45,
      color: i % 3 === 0 ? "#8b8b8b" : i % 3 === 1 ? "#57a02b" : "#3e7a1c",
    }))
  );

  return (
    <AnimatePresence>
      {phase !== "idle" && (
        <div className="pointer-events-none fixed inset-0 z-[90]" aria-hidden="true">
          {phase === "walk" && (
            <motion.div
              className="absolute bottom-6 left-0"
              initial={{ x: "-8vw" }}
              animate={{ x: "64vw" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.4, ease: "linear" }}
            >
              <motion.span
                className="block"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.32, repeat: Infinity, ease: "linear" }}
              >
                <PixelIcon name="creeper" size={64} />
              </motion.span>
            </motion.div>
          )}
          {phase === "boom" && (
            <>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.85, 0] }}
                transition={{ duration: 0.4, times: [0, 0.25, 1] }}
              />
              <div className="absolute bottom-8" style={{ left: "64vw" }}>
                {particles.current.map((p, i) => (
                  <motion.span
                    key={i}
                    className="absolute block"
                    style={{ width: p.size, height: p.size, background: p.color }}
                    initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
                    animate={{ x: p.dx, y: p.dy, opacity: 0, rotate: p.rot, scale: 0.4 }}
                    transition={{ duration: 0.85, ease: "easeOut" }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
