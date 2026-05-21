"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";
import type { PathDetail, Task } from "@/lib/data/path-details";

const ENCOURAGEMENT = [
  "Great work! Keep it up!",
  "You're crushing it!",
  "Awesome progress!",
  "Fantastic effort!",
  "You got this!",
  "Incredible dedication!",
  "Champion mindset!",
  "Phenomenal work!",
];

function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function confettiBurst() {
  if (prefersReducedMotion() || typeof window === "undefined") return;
  const colors = ["#aaa8ff", "#7f9ef8", "#c1cff8", "#fad0f3"];
  const container = document.createElement("div");
  container.style.cssText =
    "position:fixed;inset:0;pointer-events:none;z-index:9999;overflow:hidden;";
  document.body.appendChild(container);

  for (let i = 0; i < 60; i++) {
    const dot = document.createElement("div");
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 8 + 4;
    const x = Math.random() * 100;
    const duration = Math.random() * 1000 + 800;
    dot.style.cssText = `
      position:absolute;top:-10px;left:${x}%;
      width:${size}px;height:${size}px;border-radius:50%;
      background:${color};opacity:0.9;
      animation:fp-fall ${duration}ms ease-in forwards;
      animation-delay:${Math.random() * 400}ms;
    `;
    container.appendChild(dot);
  }

  const style = document.createElement("style");
  style.textContent = `@keyframes fp-fall {
    0% { transform: translateY(0) rotate(0deg); opacity: 0.9; }
    100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
  }`;
  document.head.appendChild(style);
  setTimeout(() => { container.remove(); style.remove(); }, 2500);
}

export default function TaskList({ pathId, pathDetail }: { pathId: string; pathDetail: PathDetail }) {
  const [completed, setCompleted] = useState<number[]>([]);
  const [toast, setToast] = useState<string | null>(null);
  const [justCompleted, setJustCompleted] = useState<number | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(`fitpath_progress_${pathId}`);
    if (saved) setCompleted(JSON.parse(saved));
  }, [pathId]);

  useEffect(() => {
    localStorage.setItem(`fitpath_progress_${pathId}`, JSON.stringify(completed));
  }, [completed, pathId]);

  function toggle(task: Task) {
    const isCompleted = completed.includes(task.id);
    if (!isCompleted) {
      setJustCompleted(task.id);
      setTimeout(() => setJustCompleted(null), 600);
      confettiBurst();
      const msg = ENCOURAGEMENT[Math.floor(Math.random() * ENCOURAGEMENT.length)];
      setToast(msg);
      setTimeout(() => setToast(null), 3000);
    }
    setCompleted((prev) =>
      isCompleted ? prev.filter((id) => id !== task.id) : [...prev, task.id]
    );
  }

  const completionRate = Math.round((completed.length / pathDetail.tasks.length) * 100);
  const allDone = completed.length === pathDetail.tasks.length;

  return (
    <div style={{ position: "relative" }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span style={{ fontSize: 13, color: "var(--fp-text-muted)", fontWeight: 500 }}>
            Progress
          </span>
          <span style={{ fontSize: 13, color: "var(--fp-accent)", fontWeight: 700 }}>
            {completed.length} / {pathDetail.tasks.length} ({completionRate}%)
          </span>
        </div>
        <div style={{ height: 6, background: "var(--fp-surface-2)", borderRadius: 4, overflow: "hidden" }}>
          <motion.div
            style={{
              height: "100%",
              background: allDone ? "var(--fp-green)" : "var(--fp-accent)",
              borderRadius: 4,
            }}
            animate={{ width: `${completionRate}%` }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
          />
        </div>
        <AnimatePresence>
          {allDone && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
              style={{ marginTop: 10, fontSize: 14, color: "var(--fp-green)", fontWeight: 600 }}
            >
              Path complete! Outstanding work.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {pathDetail.tasks.map((task, i) => {
          const done = completed.includes(task.id);
          const justDone = justCompleted === task.id;
          return (
            <motion.button
              key={task.id}
              onClick={() => toggle(task)}
              initial={false}
              animate={{
                borderColor: done ? "rgba(127,158,248,0.3)" : "rgba(255,255,255,0.08)",
                backgroundColor: done ? "rgba(127,158,248,0.05)" : "var(--fp-surface)",
                scale: justDone ? [1, 1.02, 1] : 1,
              }}
              whileHover={{ y: -2, boxShadow: "0 6px 24px rgba(0,0,0,0.28)" }}
              whileTap={{ scale: 0.98 }}
              transition={{
                duration: 0.22,
                ease: EASE_OUT,
                scale: justDone ? { duration: 0.4, times: [0, 0.4, 1] } : { duration: 0.15 },
              }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
                padding: "20px 24px",
                border: "1px solid var(--fp-border)",
                borderRadius: 14,
                textAlign: "left",
                cursor: "pointer",
                width: "100%",
              }}
            >
              <motion.div
                animate={{
                  background: done ? "var(--fp-green)" : "var(--fp-surface-2)",
                  borderColor: done ? "var(--fp-green)" : "var(--fp-border-2)",
                  scale: justDone ? [1, 1.35, 1] : 1,
                }}
                transition={{
                  duration: 0.3,
                  scale: justDone
                    ? { type: "spring", stiffness: 500, damping: 18 }
                    : { duration: 0.2 },
                }}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid var(--fp-border-2)",
                  color: done ? "#1a1714" : "var(--fp-text-muted)",
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {done ? (
                    <motion.span
                      key="check"
                      initial={{ scale: 0, rotate: -90, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 20 }}
                      style={{ fontSize: 14, fontWeight: 700, lineHeight: 1 }}
                    >
                      ✓
                    </motion.span>
                  ) : (
                    <motion.span
                      key="num"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      style={{ fontSize: 13, fontWeight: 700, lineHeight: 1 }}
                    >
                      {i + 1}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>

              <div style={{ flex: 1 }}>
                <motion.h3
                  animate={{
                    color: done ? "var(--fp-text-muted)" : "var(--fp-white)",
                    textDecoration: done ? "line-through" : "none",
                  }}
                  transition={{ duration: 0.2 }}
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    marginBottom: 4,
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  {task.title}
                </motion.h3>
                <p style={{ fontSize: 13.5, color: "var(--fp-text-muted)", lineHeight: 1.55 }}>
                  {task.desc}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 24, scale: 0.95 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            style={{
              position: "fixed",
              top: 24,
              right: 24,
              background: "var(--fp-surface)",
              border: "1px solid var(--fp-border-2)",
              borderRadius: 14,
              padding: "14px 20px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              zIndex: 1000,
            }}
          >
            <p style={{ fontWeight: 700, fontSize: 14, color: "var(--fp-white)", marginBottom: 2 }}>
              Stage complete!
            </p>
            <p style={{ fontSize: 13, color: "var(--fp-text-muted)" }}>{toast}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
