"use client";

import Link from "next/link";
import type { Path } from "@/lib/data/paths";

export default function PathCard({ path }: { path: Path }) {
  return (
    <Link
      href={`/paths/${path.id}`}
      className="group block"
      style={{
        background: "var(--fp-surface)",
        border: "1px solid var(--fp-border)",
        borderRadius: 16,
        padding: "24px",
        transition: "all 0.2s ease",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-3px)";
        el.style.borderColor = "var(--fp-border-2)";
        el.style.boxShadow = `0 8px 32px rgba(0,0,0,0.3)`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0)";
        el.style.borderColor = "var(--fp-border)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Subtle color glow in top-right */}
      <div
        style={{
          position: "absolute",
          top: -20,
          right: -20,
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${path.color}22 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
        <div
          style={{
            fontSize: 28,
            lineHeight: 1,
            width: 48,
            height: 48,
            borderRadius: 12,
            background: `${path.color}18`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            border: `1px solid ${path.color}30`,
          }}
        >
          {path.icon}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <h3
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: "var(--fp-white)",
                lineHeight: 1.3,
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              {path.title}
            </h3>
            {path.popular && (
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--fp-accent)",
                  background: "rgba(207,123,75,0.12)",
                  border: "1px solid rgba(207,123,75,0.25)",
                  borderRadius: 4,
                  padding: "1px 6px",
                  flexShrink: 0,
                }}
              >
                Popular
              </span>
            )}
          </div>
          <p
            style={{
              fontSize: 13,
              color: "var(--fp-text-muted)",
              lineHeight: 1.5,
            }}
          >
            {path.desc}
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: 16,
          display: "flex",
          alignItems: "center",
          gap: 6,
          color: "var(--fp-accent)",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.04em",
          opacity: 0,
          transition: "opacity 0.2s",
        }}
        className="group-hover:opacity-100"
      >
        Start path
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </Link>
  );
}
