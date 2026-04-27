"use client";

import { useState, useEffect } from "react";
import type { PathDetail, Task } from "@/lib/data/path-details";

const ENCOURAGEMENT = [
  "🎉 Great work! Keep it up!",
  "💪 You're crushing it!",
  "🔥 Awesome progress!",
  "⭐ Fantastic effort!",
  "🚀 You got this!",
  "💥 Incredible dedication!",
  "🏆 Champion mindset!",
  "✨ Phenomenal work!",
];

function confettiBurst() {
  if (typeof window === "undefined") return;
  const colors = ["#CF7B4B", "#9DC499", "#ede8e2", "#8A5230"];
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
      {/* Progress bar */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span style={{ fontSize: 13, color: "var(--fp-text-muted)", fontWeight: 500 }}>
            Progress
          </span>
          <span style={{ fontSize: 13, color: "var(--fp-accent)", fontWeight: 700 }}>
            {completed.length} / {pathDetail.tasks.length} ({completionRate}%)
          </span>
        </div>
        <div
          style={{
            height: 6,
            background: "var(--fp-surface-2)",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${completionRate}%`,
              background: allDone ? "var(--fp-green)" : "var(--fp-accent)",
              borderRadius: 4,
              transition: "width 0.4s ease, background 0.3s",
            }}
          />
        </div>
        {allDone && (
          <p style={{ marginTop: 10, fontSize: 14, color: "var(--fp-green)", fontWeight: 600 }}>
            🎉 Path complete! Outstanding work.
          </p>
        )}
      </div>

      {/* Task list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {pathDetail.tasks.map((task, i) => {
          const done = completed.includes(task.id);
          return (
            <button
              key={task.id}
              onClick={() => toggle(task)}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
                padding: "20px 24px",
                background: done ? "rgba(157,196,153,0.06)" : "var(--fp-surface)",
                border: `1px solid ${done ? "rgba(157,196,153,0.3)" : "var(--fp-border)"}`,
                borderRadius: 14,
                textAlign: "left",
                cursor: "pointer",
                transition: "all 0.2s",
                width: "100%",
              }}
            >
              {/* Step number / check */}
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: done ? 16 : 13,
                  fontWeight: 700,
                  background: done ? "var(--fp-green)" : "var(--fp-surface-2)",
                  border: `2px solid ${done ? "var(--fp-green)" : "var(--fp-border-2)"}`,
                  color: done ? "#1a1714" : "var(--fp-text-muted)",
                  transition: "all 0.3s",
                }}
              >
                {done ? "✓" : i + 1}
              </div>

              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: done ? "var(--fp-text-muted)" : "var(--fp-white)",
                    marginBottom: 4,
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    textDecoration: done ? "line-through" : "none",
                    transition: "all 0.2s",
                  }}
                >
                  {task.title}
                </h3>
                <p style={{ fontSize: 13.5, color: "var(--fp-text-muted)", lineHeight: 1.55 }}>
                  {task.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Toast */}
      {toast && (
        <div
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
            animation: "fp-slide-in 0.3s ease",
          }}
        >
          <p style={{ fontWeight: 700, fontSize: 14, color: "var(--fp-white)", marginBottom: 2 }}>
            Task complete! 🎊
          </p>
          <p style={{ fontSize: 13, color: "var(--fp-text-muted)" }}>{toast}</p>
        </div>
      )}

      <style>{`
        @keyframes fp-slide-in {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
