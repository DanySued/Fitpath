"use client";

import { useState, useEffect, useCallback } from "react";
import { PATHS, ALL_PATHS, CATEGORY_LABELS, type PathCategory } from "@/lib/data/paths";
import PathCard from "./PathCard";

export default function PathGrid() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<PathCategory | "all">("all");
  const [searchRef, setSearchRef] = useState<HTMLInputElement | null>(null);

  // ⌘K / Ctrl+K to focus search
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchRef?.focus();
      }
    },
    [searchRef]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const q = query.toLowerCase();

  const filteredPaths =
    activeCategory === "all"
      ? ALL_PATHS.filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            p.desc.toLowerCase().includes(q)
        )
      : PATHS[activeCategory].filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            p.desc.toLowerCase().includes(q)
        );

  const categories: Array<{ key: PathCategory | "all"; label: string }> = [
    { key: "all", label: "All Paths" },
    { key: "role", label: CATEGORY_LABELS.role },
    { key: "skill", label: CATEGORY_LABELS.skill },
    { key: "bestpractices", label: CATEGORY_LABELS.bestpractices },
  ];

  return (
    <div>
      {/* Search */}
      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          alignItems: "center",
          marginBottom: 32,
        }}
      >
        <div style={{ position: "relative", flex: "1 1 260px", maxWidth: 440 }}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--fp-text-muted)",
            }}
          >
            <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            ref={(el) => setSearchRef(el)}
            type="text"
            placeholder="Search paths…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: "100%",
              background: "var(--fp-surface)",
              border: "1px solid var(--fp-border)",
              borderRadius: 10,
              padding: "10px 14px 10px 40px",
              fontSize: 14,
              color: "var(--fp-text)",
              outline: "none",
              transition: "border-color 0.15s",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--fp-accent)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "var(--fp-border)")}
          />
          <span
            style={{
              position: "absolute",
              right: 12,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: 11,
              color: "var(--fp-text-muted)",
              pointerEvents: "none",
              fontFamily: "var(--font-geist-mono), monospace",
            }}
          >
            ⌘K
          </span>
        </div>

        {/* Category tabs */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {categories.map(({ key, label }) => {
            const active = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                style={{
                  padding: "8px 14px",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 500,
                  border: active ? "1px solid var(--fp-accent)" : "1px solid var(--fp-border)",
                  background: active ? "rgba(207,123,75,0.12)" : "transparent",
                  color: active ? "var(--fp-accent)" : "var(--fp-text-muted)",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      {query && (
        <p style={{ fontSize: 13, color: "var(--fp-text-muted)", marginBottom: 20 }}>
          {filteredPaths.length} result{filteredPaths.length !== 1 ? "s" : ""} for &quot;{query}&quot;
        </p>
      )}

      {/* Grid */}
      {filteredPaths.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 16,
          }}
        >
          {filteredPaths.map((path) => (
            <PathCard key={path.id} path={path} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "60px 0", color: "var(--fp-text-muted)" }}>
          <p style={{ fontSize: 32, marginBottom: 12 }}>🔍</p>
          <p style={{ fontSize: 15, fontWeight: 500, color: "var(--fp-text)", marginBottom: 6 }}>
            No paths found
          </p>
          <p style={{ fontSize: 13 }}>Try a different search term or category</p>
        </div>
      )}
    </div>
  );
}
