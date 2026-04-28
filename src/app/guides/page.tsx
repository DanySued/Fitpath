"use client";

import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";


const GUIDES = [
  {
    id: "strength-fundamentals",
    title: "Strength Training Fundamentals",
    category: "Strength",
    readTime: "6 min",
    excerpt: "Understand progressive overload, compound vs. isolation movements, and how to structure your first program from scratch.",
    color: "#aaa8ff",
  },
  {
    id: "macros-explained",
    title: "Understanding Macros for Your Goal",
    category: "Nutrition",
    readTime: "8 min",
    excerpt: "Break down protein, carbohydrates, and fats — and learn exactly how to calculate your macros for muscle building, fat loss, or performance.",
    color: "#7f9ef8",
  },
  {
    id: "progressive-overload",
    title: "Progressive Overload: The Only Rule That Matters",
    category: "Strength",
    readTime: "5 min",
    excerpt: "The single most important principle in training explained simply — and how to apply it to any program without burning out.",
    color: "#aaa8ff",
  },
  {
    id: "recovery-science",
    title: "The Science of Recovery",
    category: "Recovery",
    readTime: "7 min",
    excerpt: "Why rest days matter more than workout days, and how to structure active recovery, sleep, and nutrition to grow faster.",
    color: "#c1cff8",
  },
  {
    id: "running-form",
    title: "Running Form Fundamentals",
    category: "Running",
    readTime: "6 min",
    excerpt: "Fix your cadence, foot strike, and posture. These form cues will help you run faster, longer, and with far fewer injuries.",
    color: "#7f9ef8",
  },
  {
    id: "hiit-vs-steady",
    title: "HIIT vs. Steady-State Cardio",
    category: "Cardio",
    readTime: "7 min",
    excerpt: "The real answer on which burns more fat — and why the right choice depends entirely on your current fitness level and goal.",
    color: "#fad0f3",
  },
  {
    id: "sleep-and-muscle",
    title: "Sleep & Muscle Growth",
    category: "Recovery",
    readTime: "5 min",
    excerpt: "You build muscle during sleep, not in the gym. Here's exactly how to optimize sleep quality for maximum recovery and growth.",
    color: "#c1cff8",
  },
  {
    id: "meal-timing",
    title: "Meal Timing for Performance",
    category: "Nutrition",
    readTime: "6 min",
    excerpt: "Pre-workout nutrition, post-workout windows, and intermittent fasting — what the evidence actually says about when you eat.",
    color: "#7f9ef8",
  },
  {
    id: "yoga-for-athletes",
    title: "Yoga for Strength Athletes",
    category: "Flexibility",
    readTime: "5 min",
    excerpt: "The 10 yoga poses that make the biggest difference for lifters and runners — and a simple 15-minute mobility flow to do daily.",
    color: "#fffba5",
  },
  {
    id: "injury-prevention",
    title: "Avoiding the 5 Most Common Training Injuries",
    category: "Recovery",
    readTime: "8 min",
    excerpt: "Knee pain, shoulder impingement, lower back tightness — most training injuries are preventable. Here's how to train smart.",
    color: "#c1cff8",
  },
];

const CATEGORIES = ["All", "Strength", "Nutrition", "Recovery", "Running", "Cardio", "Flexibility"];

const CATEGORY_COLORS: Record<string, string> = {
  Strength: "#aaa8ff",
  Nutrition: "#7f9ef8",
  Recovery: "#c1cff8",
  Running: "#7f9ef8",
  Cardio: "#fad0f3",
  Flexibility: "#fffba5",
};

export default function GuidesPage() {
  return (
    <>
      <Nav />
      <main style={{ minHeight: "100vh", backgroundColor: "var(--fp-black)" }}>
        {/* Hero */}
        <section style={{ paddingTop: 96, paddingBottom: 56, borderBottom: "1px solid var(--fp-border)" }}>
          <div className="fp-container">
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
                <BookOpen size={20} color="var(--fp-accent)" />
              </div>
              <p className="fp-eyebrow" style={{ marginBottom: 0 }}>Fitness Guides</p>
            </div>
            <h1
              style={{
                fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                color: "var(--fp-white)",
                maxWidth: 640,
                marginBottom: 16,
              }}
            >
              Learn the science behind{" "}
              <span style={{ fontStyle: "italic" }}>better training.</span>
            </h1>
            <p style={{ fontSize: 16, color: "var(--fp-text-muted)", maxWidth: 520, lineHeight: 1.65 }}>
              Expert-written guides covering strength, nutrition, recovery, and everything
              in between. No fluff — just the principles that actually move the needle.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 32 }}>
              {CATEGORIES.map((cat) => (
                <span
                  key={cat}
                  style={{
                    padding: "6px 14px",
                    background: cat === "All" ? "var(--fp-accent)" : "var(--fp-surface)",
                    color: cat === "All" ? "var(--fp-black)" : "var(--fp-text-muted)",
                    border: "1px solid var(--fp-border)",
                    borderRadius: 20,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section style={{ paddingTop: 56, paddingBottom: 96 }}>
          <div className="fp-container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                gap: 20,
              }}
            >
              {GUIDES.map((guide) => (
                <article
                  key={guide.id}
                  style={{
                    padding: "28px",
                    background: "var(--fp-surface)",
                    border: "1px solid var(--fp-border)",
                    borderRadius: 16,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    cursor: "pointer",
                    transition: "border-color 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--fp-border-2)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--fp-border)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Category + read time */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span
                      style={{
                        padding: "4px 10px",
                        background: `${CATEGORY_COLORS[guide.category] ?? "#aaa8ff"}18`,
                        color: CATEGORY_COLORS[guide.category] ?? "#aaa8ff",
                        borderRadius: 20,
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {guide.category}
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                        fontSize: 12,
                        color: "var(--fp-text-muted)",
                      }}
                    >
                      <Clock size={12} />
                      {guide.readTime} read
                    </span>
                  </div>

                  {/* Title + excerpt */}
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontSize: 17,
                        fontWeight: 700,
                        color: "var(--fp-white)",
                        marginBottom: 10,
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        lineHeight: 1.3,
                        letterSpacing: "-0.2px",
                      }}
                    >
                      {guide.title}
                    </h3>
                    <p style={{ fontSize: 14, color: "var(--fp-text-muted)", lineHeight: 1.6 }}>
                      {guide.excerpt}
                    </p>
                  </div>

                  {/* Read link */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--fp-accent)",
                    }}
                  >
                    Read guide <ArrowRight size={14} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            paddingBlock: "5rem",
            borderTop: "1px solid var(--fp-border)",
            textAlign: "center",
          }}
        >
          <div className="fp-container">
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "var(--fp-white)",
                marginBottom: 12,
              }}
            >
              Ready to put it into practice?
            </h2>
            <p style={{ fontSize: 15, color: "var(--fp-text-muted)", marginBottom: 28 }}>
              Browse our structured training paths and track your progress stage by stage.
            </p>
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
