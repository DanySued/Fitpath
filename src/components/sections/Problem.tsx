"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { fadeUp, fadeUpReduced, stagger, EASE_OUT } from "@/lib/motion";

const bars = [
  { label: "Week 1–2: Foundations", pct: 100, color: "rgba(170,168,255,0.9)", done: true },
  { label: "Week 3–4: Volume", pct: 75, color: "rgba(170,168,255,0.65)", done: true },
  { label: "Week 5–6: Intensity", pct: 45, color: "rgba(170,168,255,0.4)", done: false },
  { label: "Week 7–8: Peak", pct: 15, color: "rgba(170,168,255,0.2)", done: false },
];

const stats = [
  { value: "73%", label: "abandon goals within 3 months" },
  { value: "9 in 10", label: "cite \"no clear next step\"" },
  { value: "3×", label: "better results with structured paths" },
];

export default function Problem() {
  const barsRef = useRef<HTMLDivElement>(null);
  const barsInView = useInView(barsRef, { once: true, margin: "-100px" });
  const prefersReduced = useReducedMotion();
  const anim = prefersReduced ? fadeUpReduced : fadeUp;

  return (
    <section className="fp-section" style={{ background: "linear-gradient(180deg, var(--fp-black) 0%, var(--fp-surface) 72px)" }} id="learn">
      <div className="fp-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p className="fp-eyebrow" variants={anim}>The problem</motion.p>
            <motion.h2 className="fp-h2" variants={anim}>
              Motivation isn&apos;t
              <br />
              <span style={{ fontStyle: "italic" }}>your problem.</span>
            </motion.h2>

            <motion.p
              className="mt-6 mb-10 leading-relaxed max-w-md"
              style={{ color: "var(--fp-text-muted)", fontSize: "0.9375rem" }}
              variants={anim}
            >
              Most people quit not because they&apos;re lazy — but because there&apos;s no clear path.
              Structure beats motivation, every time.
            </motion.p>

            <motion.div className="flex flex-col gap-5" variants={stagger(0.08, 0.1)}>
              {stats.map(({ value, label }) => (
                <motion.div key={label} className="flex items-center gap-4" variants={anim}>
                  <motion.span
                    className="text-2xl font-bold shrink-0"
                    style={{ color: "var(--fp-accent)", fontFamily: "var(--font-instrument-serif)" }}
                  >
                    {value}
                  </motion.span>
                  <span className="text-sm" style={{ color: "var(--fp-text-muted)" }}>
                    {label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: visual card */}
          <motion.div
            className="relative mt-4 lg:mt-0"
            initial={{ opacity: 0, ...(prefersReduced ? {} : { x: 24 }) }}
            whileInView={{ opacity: 1, ...(prefersReduced ? {} : { x: 0 }) }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            <div
              className="rounded-3xl overflow-hidden aspect-[4/3]"
              style={{ backgroundColor: "var(--fp-black)", border: "1px solid var(--fp-border)" }}
            >
              <div className="w-full h-full flex items-center justify-center p-6 sm:p-12">
                <div ref={barsRef} className="relative w-full max-w-xs">
                  {bars.map(({ label, pct, color, done }, i) => (
                    <div key={label} className="mb-3">
                      <div className="flex justify-between mb-1.5 items-center">
                        <span className="text-xs font-medium" style={{ color: done ? "var(--fp-text)" : "var(--fp-text-muted)" }}>
                          {label}
                        </span>
                        {done && (
                          <motion.span
                            style={{ color: "var(--fp-green)", fontSize: 11 }}
                            initial={{ opacity: 0, ...(prefersReduced ? {} : { scale: 0 }) }}
                            animate={barsInView || prefersReduced ? { opacity: 1, ...(prefersReduced ? {} : { scale: 1 }) } : {}}
                            transition={{ delay: i * 0.12 + 0.6, type: "spring", stiffness: 400, damping: 18 }}
                          >
                            ✓
                          </motion.span>
                        )}
                      </div>
                      <div className="h-6 rounded-full" style={{ background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: color, minWidth: "2.5rem" }}
                          initial={{ width: prefersReduced ? `${pct}%` : 0 }}
                          animate={barsInView || prefersReduced ? { width: `${pct}%` } : { width: 0 }}
                          transition={{ duration: 0.75, delay: i * 0.12 + 0.2, ease: EASE_OUT }}
                        />
                      </div>
                    </div>
                  ))}
                  <p
                    className="mt-8 text-xs font-semibold uppercase tracking-widest text-center"
                    style={{ color: "var(--fp-text-muted)" }}
                  >
                    Strength Training Path — Week 5
                  </p>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute bottom-3 left-3 sm:-bottom-6 sm:-left-6 rounded-2xl p-5 shadow-xl max-w-[200px]"
              style={{ backgroundColor: "var(--fp-surface)", border: "1px solid var(--fp-border-2)", color: "var(--fp-text)" }}
              initial={{ opacity: 0, ...(prefersReduced ? {} : { y: 16, scale: 0.9 }) }}
              whileInView={{ opacity: 1, ...(prefersReduced ? {} : { y: 0, scale: 1 }) }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5, ease: EASE_OUT }}
              whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(0,0,0,0.5)" }}
            >
              <p className="text-xs mb-1" style={{ color: "var(--fp-text-muted)" }}>Completion</p>
              <p className="text-4xl font-bold" style={{ fontFamily: "var(--font-instrument-serif)", color: "var(--fp-accent)" }}>
                63%
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--fp-text-muted)" }}>5 of 7 tasks done</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
