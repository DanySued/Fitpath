"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, fadeUpReduced, stagger, EASE_OUT } from "@/lib/motion";
import { getIcon } from "@/components/fitpath/PathIcon";

const features = [
  {
    tag: "01",
    icon: "trending-up",
    title: "Progressive stages",
    desc: "Ordered from beginner to advanced. You always know what's next.",
    accent: "var(--fp-accent)",
    accentRaw: "#aaa8ff",
  },
  {
    tag: "02",
    icon: "check-circle",
    title: "Task tracking",
    desc: "Check off stages as you go. No account required.",
    accent: "var(--fp-green)",
    accentRaw: "#7f9ef8",
  },
  {
    tag: "03",
    icon: "search",
    title: "Real-time search",
    desc: "Filter 24+ paths by sport or goal. ⌘K from anywhere.",
    accent: "#bc8cff",
    accentRaw: "#bc8cff",
  },
  {
    tag: "04",
    icon: "pencil",
    title: "Custom builder",
    desc: "Build your own 4-step path and share it.",
    accent: "#d4ccc4",
    accentRaw: "#d4ccc4",
  },
];

export default function FeatureCarousel() {
  const prefersReduced = useReducedMotion();
  const anim = prefersReduced ? fadeUpReduced : fadeUp;

  return (
    <section
      className="fp-section"
      style={{ backgroundColor: "var(--fp-surface)" }}
      id="features"
    >
      <motion.div
        className="fp-container mb-12"
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.p className="fp-eyebrow" variants={anim}>How it works</motion.p>
        <motion.h2
          className="fp-h2"
          variants={anim}
        >
          Four tools.{" "}
          <span style={{ fontStyle: "italic", color: "var(--fp-accent)" }}>
            One direction.
          </span>
        </motion.h2>
      </motion.div>

      <motion.div
        className="fp-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        variants={stagger(0.08, 0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {features.map((f) => {
          const IconComp = getIcon(f.icon);
          return (
            <motion.div
              key={f.tag}
              className="group"
              variants={anim}
              style={{
                background: "var(--fp-black)",
                border: "1px solid var(--fp-border)",
                borderRadius: 16,
                padding: 28,
                display: "flex",
                flexDirection: "column",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              whileHover={{
                y: -6,
                borderColor: "var(--fp-border-2)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
              }}
              transition={{ duration: 0.22, ease: EASE_OUT }}
            >
              {/* Accent top line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center pointer-events-none"
                style={{ background: `linear-gradient(90deg, transparent, ${f.accentRaw}99, transparent)` }}
              />
              <motion.div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: `${f.accentRaw}14`,
                  border: `1px solid ${f.accentRaw}28`,
                  color: f.accent,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  flexShrink: 0,
                }}
                whileHover={{ scale: 1.1, rotate: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {IconComp && <IconComp size={20} strokeWidth={1.5} />}
              </motion.div>

              <span
                className="text-xs font-semibold uppercase tracking-widest mb-3 block"
                style={{ color: "var(--fp-text-muted)" }}
              >
                {f.tag}
              </span>
              <h3
                className="text-lg font-semibold mb-2 leading-snug"
                style={{ fontFamily: "var(--font-dm-sans)", color: "var(--fp-white)" }}
              >
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fp-text-muted)" }}>
                {f.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
