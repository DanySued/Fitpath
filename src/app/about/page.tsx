import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { ArrowRight, Dumbbell, BookOpen, CheckCircle, Users, TrendingUp, Star } from "lucide-react";

export const metadata = {
  title: "About — FitPath",
  description: "FitPath is a structured fitness platform that breaks every training goal into clear, progressive stages.",
};

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Choose your path",
    desc: "Browse 24+ curated training paths organized by sport, goal, or best practice. Pick the one that matches where you are right now.",
    color: "#aaa8ff",
  },
  {
    step: "02",
    title: "Follow the stages",
    desc: "Each path breaks your goal into progressive milestones — no guessing what to do next. Just check off each stage and move forward.",
    color: "#7f9ef8",
  },
  {
    step: "03",
    title: "Track your progress",
    desc: "Your progress is saved automatically. Come back any time, pick up where you left off, and see how far you've come.",
    color: "#c1cff8",
  },
];

const VALUES = [
  { icon: TrendingUp, title: "Progressive by design", desc: "Every path is structured to build on what came before — no random workouts, no confusion.", color: "#aaa8ff" },
  { icon: BookOpen, title: "Science-backed content", desc: "Our guides and path structures are grounded in exercise science and tested by real athletes.", color: "#7f9ef8" },
  { icon: CheckCircle, title: "Free, always", desc: "FitPath will never charge for the core experience. Structured training should be accessible to everyone.", color: "#c1cff8" },
  { icon: Users, title: "Built for consistency", desc: "The biggest predictor of results isn't intensity — it's showing up. FitPath is built to help you do exactly that.", color: "#fad0f3" },
];

const STATS = [
  { value: "24+", label: "Training paths" },
  { value: "500K+", label: "Active users" },
  { value: "2.5M+", label: "Workouts logged" },
  { value: "100%", label: "Free forever" },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main style={{ minHeight: "100vh", backgroundColor: "var(--fp-black)" }}>
        {/* Hero */}
        <section style={{ paddingTop: 96, paddingBottom: 80, borderBottom: "1px solid var(--fp-border)" }}>
          <div className="fp-container" style={{ maxWidth: 760 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "rgba(170,168,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Dumbbell size={20} color="var(--fp-accent)" />
              </div>
              <p className="fp-eyebrow" style={{ marginBottom: 0 }}>About FitPath</p>
            </div>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "var(--fp-white)",
                marginBottom: 20,
                lineHeight: 1.05,
              }}
            >
              Training without a map{" "}
              <span style={{ fontStyle: "italic", color: "var(--fp-accent)" }}>
                is just guessing.
              </span>
            </h1>
            <p style={{ fontSize: 17, color: "var(--fp-text-muted)", lineHeight: 1.7, maxWidth: 580 }}>
              Most people who start training don&apos;t fail because they&apos;re not dedicated enough.
              They fail because they don&apos;t know what to do next. FitPath exists to fix that —
              one structured, progressive path at a time.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section style={{ paddingBlock: "4rem", borderBottom: "1px solid var(--fp-border)" }}>
          <div className="fp-container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 0 }}>
              {STATS.map(({ value, label }, i) => (
                <div
                  key={label}
                  style={{
                    padding: "32px 24px",
                    borderRight: i < STATS.length - 1 ? "1px solid var(--fp-border)" : "none",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "clamp(2rem, 4vw, 2.75rem)",
                      fontWeight: 800,
                      color: "var(--fp-white)",
                      lineHeight: 1,
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      marginBottom: 8,
                    }}
                  >
                    {value}
                  </p>
                  <p style={{ fontSize: 13, color: "var(--fp-text-muted)", fontWeight: 500 }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section style={{ paddingBlock: "5rem", borderBottom: "1px solid var(--fp-border)" }}>
          <div className="fp-container">
            <p className="fp-eyebrow">How it works</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--fp-white)", maxWidth: 520, marginBottom: 56 }}>
              Simple by design.{" "}
              <span style={{ fontStyle: "italic" }}>Effective by nature.</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
              {HOW_IT_WORKS.map(({ step, title, desc, color }) => (
                <div
                  key={step}
                  style={{
                    padding: "32px",
                    background: "var(--fp-surface)",
                    border: "1px solid var(--fp-border)",
                    borderRadius: 18,
                  }}
                >
                  <p
                    style={{
                      fontSize: 48,
                      fontWeight: 800,
                      color: `${color}30`,
                      lineHeight: 1,
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      marginBottom: 20,
                    }}
                  >
                    {step}
                  </p>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "var(--fp-white)",
                      marginBottom: 10,
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    {title}
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--fp-text-muted)", lineHeight: 1.65 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ paddingBlock: "5rem", borderBottom: "1px solid var(--fp-border)" }}>
          <div className="fp-container">
            <p className="fp-eyebrow">Our values</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--fp-white)", maxWidth: 400, marginBottom: 48 }}>
              What we believe about training.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {VALUES.map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  style={{
                    padding: "28px",
                    background: "var(--fp-surface)",
                    border: "1px solid var(--fp-border)",
                    borderRadius: 16,
                    display: "flex",
                    gap: 18,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: `${color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <Icon size={18} color={color} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: "var(--fp-white)",
                        marginBottom: 6,
                        fontFamily: "var(--font-dm-sans), sans-serif",
                      }}
                    >
                      {title}
                    </h3>
                    <p style={{ fontSize: 13.5, color: "var(--fp-text-muted)", lineHeight: 1.6 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Creator */}
        <section style={{ paddingBlock: "5rem", borderBottom: "1px solid var(--fp-border)" }}>
          <div className="fp-container" style={{ maxWidth: 680 }}>
            <p className="fp-eyebrow">Built by</p>
            <div
              style={{
                padding: "40px",
                background: "var(--fp-surface)",
                border: "1px solid var(--fp-border)",
                borderRadius: 20,
                display: "flex",
                gap: 28,
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "var(--fp-accent)",
                  color: "var(--fp-black)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  fontWeight: 800,
                  flexShrink: 0,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                DS
              </div>
              <div>
                <p style={{ fontSize: 18, fontWeight: 700, color: "var(--fp-white)", marginBottom: 6, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Dany Sue
                </p>
                <p style={{ fontSize: 13, color: "var(--fp-accent)", fontWeight: 600, marginBottom: 14, letterSpacing: "0.04em" }}>
                  DEVELOPER & PRODUCT DESIGNER
                </p>
                <p style={{ fontSize: 14, color: "var(--fp-text-muted)", lineHeight: 1.7 }}>
                  FitPath is a portfolio project combining product design, front-end development, and
                  fitness knowledge. Built with Next.js, TypeScript, and Tailwind CSS — designed with
                  the belief that good UX can make disciplined behavior easier.
                </p>
                <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
                  <Link
                    href="https://github.com/DanySued/roadmap"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "8px 16px",
                      background: "var(--fp-surface-2)",
                      border: "1px solid var(--fp-border-2)",
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--fp-text-muted)",
                      textDecoration: "none",
                    }}
                  >
                    GitHub →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ paddingBlock: "5rem", textAlign: "center" }}>
          <div className="fp-container">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                background: "rgba(170,168,255,0.1)",
                border: "1px solid rgba(170,168,255,0.2)",
                borderRadius: 20,
                marginBottom: 24,
              }}
            >
              <Star size={14} color="var(--fp-accent)" />
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--fp-accent)" }}>Free forever</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--fp-white)", marginBottom: 12 }}>
              Start your path today.
            </h2>
            <p style={{ fontSize: 15, color: "var(--fp-text-muted)", marginBottom: 28 }}>
              No credit card. No account required. Just pick a path and go.
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <Link
                href="/paths"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  background: "var(--fp-accent)",
                  color: "var(--fp-black)",
                  borderRadius: 12,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                Browse Paths <ArrowRight size={16} />
              </Link>
              <Link
                href="/signup"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  background: "transparent",
                  border: "1px solid var(--fp-border-2)",
                  color: "var(--fp-text-muted)",
                  borderRadius: 12,
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                Create Account
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
