"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative flex flex-col justify-end pb-20 overflow-hidden"
      style={{
        backgroundColor: "var(--fp-black)",
        // 44px banner + 64px nav = 108px of in-flow header above this section
        minHeight: "calc(100vh - 108px)",
      }}
    >
      {/* Background gradient — drifts down slowest (deepest layer) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(207,123,75,0.08) 0%, rgba(26,23,20,0.95) 70%)",
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
      {/* Orange glow top-right */}
      <div
        className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, var(--fp-accent) 0%, transparent 70%)",
          transform: `translateY(${scrollY * 0.22}px)`,
        }}
      />
      {/* Green glow bottom-left */}
      <div
        className="absolute bottom-0 -left-12 w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, var(--fp-green) 0%, transparent 70%)",
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      />

      {/* Decorative circle right */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-center opacity-20"
        style={{ transform: `translateY(${scrollY * 0.18}px)` }}
      >
        <div
          className="w-64 h-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, rgba(207,123,75,0.25) 0%, rgba(42,36,32,0.5) 60%, transparent 100%)",
            boxShadow: "0 0 120px 40px rgba(207,123,75,0.08)",
          }}
        />
      </div>

      {/* Text content — each block on a different layer */}
      <div className="fp-container relative z-10">

        {/* Eyebrow — fastest, fades first */}
        <p
          className="fp-eyebrow"
          style={{
            transform: `translateY(${scrollY * -0.18}px)`,
            opacity: Math.max(0, 1 - scrollY / 240),
            willChange: "transform, opacity",
          }}
        >
          Structured fitness for every goal
        </p>

        {/* H1 line 1 — slowest, gravity anchor */}
        <span
          className="block"
          style={{
            fontSize: "clamp(3rem, 5.6vw, 4rem)",
            color: "var(--fp-white)",
            fontFamily: "var(--font-instrument-serif), serif",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            transform: `translateY(${scrollY * 0.04}px)`,
            willChange: "transform",
            display: "block",
          }}
        >
          Train with purpose.
        </span>

        {/* H1 line 2 italic — medium speed, separates from line 1 */}
        <span
          className="block mb-6"
          style={{
            fontSize: "clamp(3rem, 5.6vw, 4rem)",
            color: "var(--fp-white)",
            fontStyle: "italic",
            fontFamily: "var(--font-instrument-serif), serif",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            transform: `translateY(${scrollY * -0.09}px)`,
            willChange: "transform",
            display: "block",
          }}
        >
          Progress with clarity.
        </span>

        {/* Subtitle */}
        <p
          className="mb-10 max-w-md leading-relaxed"
          style={{
            color: "rgba(212,204,196,0.75)",
            fontSize: "0.9375rem",
            transform: `translateY(${scrollY * -0.14}px)`,
            opacity: Math.max(0, 1 - scrollY / 320),
            willChange: "transform, opacity",
          }}
        >
          24+ curated training paths — from strength to marathon, yoga to CrossFit.
          Each path breaks your goal into progressive stages you can actually follow.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{
            transform: `translateY(${scrollY * -0.19}px)`,
            opacity: Math.max(0, 1 - scrollY / 270),
            willChange: "transform, opacity",
          }}
        >
          <Link
            href="/paths"
            className="inline-flex items-center px-8 py-3.5 text-sm font-semibold rounded-xl transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            style={{ backgroundColor: "var(--fp-accent)", color: "var(--fp-black)" }}
          >
            Browse Paths
          </Link>
          <Link
            href="#features"
            className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
            style={{ color: "var(--fp-text-muted)" }}
          >
            Learn more
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Trust bar — exits scene first */}
        <div
          className="flex flex-wrap items-center gap-6 mt-16 pt-8"
          style={{
            borderTop: "1px solid var(--fp-border)",
            transform: `translateY(${scrollY * -0.26}px)`,
            opacity: Math.max(0, 1 - scrollY / 210),
            willChange: "transform, opacity",
          }}
        >
          {[
            { label: "Training paths", value: "24+" },
            { label: "Active users", value: "500K+" },
            { label: "Workouts logged", value: "2.5M+" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="font-semibold text-base" style={{ color: "var(--fp-white)" }}>
                {value}
              </p>
              <p className="text-xs mt-0.5" style={{ color: "var(--fp-text-muted)" }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
