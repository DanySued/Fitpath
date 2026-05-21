"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { EASE_OUT, fadeUp, fadeUpReduced, stagger } from "@/lib/motion";

const headlineBase: React.CSSProperties = {
  fontSize: "clamp(3rem, 5.6vw, 4rem)",
  color: "var(--fp-white)",
  fontFamily: "var(--font-instrument-serif), serif",
  fontWeight: 400,
  lineHeight: 1.05,
  letterSpacing: "-0.01em",
  display: "block",
};

const MotionLink = motion(Link);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const anim = prefersReduced ? fadeUpReduced : fadeUp;

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgYRaw      = useTransform(scrollYProgress, [0, 1],   [0, 90]);
  const contentYRaw = useTransform(scrollYProgress, [0, 1],   [0, 45]);
  const ctaYRaw     = useTransform(scrollYProgress, [0, 1],   [0, 20]);
  const opacityRaw  = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const bgY          = useTransform(bgYRaw,      v => prefersReduced ? 0 : v);
  const contentY     = useTransform(contentYRaw, v => prefersReduced ? 0 : v);
  const ctaY         = useTransform(ctaYRaw,     v => prefersReduced ? 0 : v);
  const contentOpacity = useTransform(opacityRaw, v => prefersReduced ? 1 : v);

  // Magnetic button
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 500, damping: 32 });
  const sy = useSpring(my, { stiffness: 500, damping: 32 });

  function onBtnMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left - r.width / 2) * 0.28);
    my.set((e.clientY - r.top - r.height / 2) * 0.28);
  }
  function onBtnMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center pb-12 sm:pb-20 overflow-hidden"
      style={{ backgroundColor: "var(--fp-black)", minHeight: "clamp(520px, calc(100vh - 64px), 900px)" }}
    >
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div
          className="hero-deco absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(170,168,255,0.07) 0%, rgba(3,2,3,0.95) 70%)" }}
        />
        <div
          className="hero-deco hero-drift-left absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, var(--fp-accent) 0%, transparent 70%)" }}
        />
        <div
          className="hero-deco hero-drift-right absolute bottom-0 -left-12 w-[400px] h-[400px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, var(--fp-green) 0%, transparent 70%)" }}
        />
      </motion.div>

      <motion.div
        className="fp-container relative z-10 flex flex-col items-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          variants={stagger(0.1, 0.1)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Eyebrow pill */}
          <motion.div variants={anim} className="mb-8">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium"
              style={{
                background: "rgba(170,168,255,0.08)",
                border: "1px solid rgba(170,168,255,0.2)",
                color: "var(--fp-accent)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--fp-accent)" }} />
              Your goal has a clear path forward
            </span>
          </motion.div>

          <motion.span className="block" style={headlineBase} variants={anim}>
            Train with purpose.
          </motion.span>
          <motion.span className="block mb-6" style={{ ...headlineBase, fontStyle: "italic" }} variants={anim}>
            Progress with clarity.
          </motion.span>

          <motion.p
            className="mb-10 max-w-sm leading-relaxed"
            style={{ fontSize: "0.9375rem", color: "var(--fp-text-muted)" }}
            variants={anim}
          >
            Pick a goal. Follow the stages. Skip the guesswork.
          </motion.p>

          <motion.div style={{ y: ctaY }} className="flex flex-col items-center w-full">
            <motion.div className="flex flex-col sm:flex-row items-center gap-4" variants={anim}>
              <MotionLink
                href="/paths"
                className="inline-flex items-center px-8 py-3.5 text-sm font-semibold rounded-xl"
                style={{
                  backgroundColor: "var(--fp-accent)",
                  color: "var(--fp-black)",
                  x: sx,
                  y: sy,
                }}
                onMouseMove={onBtnMouseMove}
                onMouseLeave={onBtnMouseLeave}
                whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(170,168,255,0.35)" }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.15, ease: EASE_OUT }}
              >
                Browse Paths
              </MotionLink>
              <Link
                href="#features"
                className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
                style={{ color: "var(--fp-text-muted)" }}
              >
                Learn more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>

            <motion.p
              className="mt-6 text-xs"
              style={{ color: "var(--fp-text-muted)" }}
              variants={anim}
            >
              Free · No account · Progress saved locally
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center items-center gap-6 mt-16 pt-8"
              style={{ borderTop: "1px solid var(--fp-border)" }}
              variants={anim}
            >
              {[
                { label: "Training paths", value: "24+" },
                { label: "Active users", value: "500K+" },
                { label: "Workouts logged", value: "2.5M+" },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <p className="font-semibold text-base" style={{ color: "var(--fp-white)" }}>{value}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--fp-text-muted)" }}>{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
