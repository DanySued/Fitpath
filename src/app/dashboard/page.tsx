"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dumbbell, BookOpen, Play, TrendingUp, CheckCircle, Star } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import { ALL_PATHS } from "@/lib/data/paths";

type PathProgress = { id: string; completed: number; total: number; title: string; color: string };

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function DashboardPage() {
  const { user, isLoading, logout } = useAuth();
  const router = useRouter();
  const [activePaths, setActivePaths] = useState<PathProgress[]>([]);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    if (!user) return;
    const progress: PathProgress[] = [];
    ALL_PATHS.forEach((path) => {
      try {
        const raw = localStorage.getItem(`fitpath_progress_${path.id}`);
        if (raw) {
          const completed: number[] = JSON.parse(raw);
          if (completed.length > 0) {
            progress.push({ id: path.id, completed: completed.length, total: 10, title: path.title, color: path.color });
          }
        }
      } catch { /* ignore */ }
    });
    setActivePaths(progress);
  }, [user]);

  if (isLoading || !user) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "var(--fp-black)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: 32, height: 32, borderRadius: "50%", border: "2px solid var(--fp-accent)", borderTopColor: "transparent", animation: "spin 0.8s linear infinite" }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  const totalCompleted = activePaths.reduce((acc, p) => acc + p.completed, 0);

  const stats = [
    { label: "Paths Started", value: activePaths.length || 0, icon: TrendingUp, color: "#aaa8ff" },
    { label: "Tasks Completed", value: totalCompleted, icon: CheckCircle, color: "#7f9ef8" },
    { label: "Paths Available", value: ALL_PATHS.length, icon: Star, color: "#c1cff8" },
  ];

  const quickActions = [
    { label: "Browse Paths", href: "/paths", icon: Dumbbell, desc: "Explore all 24+ training paths" },
    { label: "Read Guides", href: "/guides", icon: BookOpen, desc: "Fitness guides and best practices" },
    { label: "Watch Videos", href: "/videos", icon: Play, desc: "Video tutorials and workouts" },
  ];

  return (
    <>
      <Nav />
      <main style={{ minHeight: "100vh", backgroundColor: "var(--fp-black)" }}>
        {/* Header */}
        <section
          style={{
            paddingTop: 80,
            paddingBottom: 48,
            borderBottom: "1px solid var(--fp-border)",
            background: "linear-gradient(135deg, rgba(170,168,255,0.04) 0%, transparent 60%)",
          }}
        >
          <div className="fp-container">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                {/* Avatar */}
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "var(--fp-accent)",
                    color: "var(--fp-black)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    fontWeight: 800,
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    flexShrink: 0,
                  }}
                >
                  {getInitials(user.name)}
                </div>
                <div>
                  <p className="fp-eyebrow" style={{ marginBottom: 4 }}>Dashboard</p>
                  <h1
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      color: "var(--fp-white)",
                      fontFamily: "var(--font-instrument-serif), serif",
                      fontWeight: 400,
                      lineHeight: 1.1,
                    }}
                  >
                    Welcome back, {user.name.split(" ")[0]}.
                  </h1>
                  <p style={{ fontSize: 13, color: "var(--fp-text-muted)", marginTop: 4 }}>
                    Member since {formatDate(user.createdAt)}
                  </p>
                </div>
              </div>

              <button
                onClick={logout}
                style={{
                  padding: "10px 20px",
                  background: "transparent",
                  border: "1px solid var(--fp-border-2)",
                  borderRadius: 10,
                  color: "var(--fp-text-muted)",
                  fontSize: 14,
                  cursor: "pointer",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(239,68,68,0.4)";
                  e.currentTarget.style.color = "#f87171";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--fp-border-2)";
                  e.currentTarget.style.color = "var(--fp-text-muted)";
                }}
              >
                Sign out
              </button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ paddingTop: 48, paddingBottom: 0 }}>
          <div className="fp-container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 48 }}>
              {stats.map(({ label, value, icon: Icon, color }) => (
                <div
                  key={label}
                  style={{
                    padding: "24px",
                    background: "var(--fp-surface)",
                    border: "1px solid var(--fp-border)",
                    borderRadius: 16,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: `${color}18`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={18} color={color} />
                    </div>
                    <span style={{ fontSize: 13, color: "var(--fp-text-muted)", fontWeight: 500 }}>{label}</span>
                  </div>
                  <p style={{ fontSize: 32, fontWeight: 800, color: "var(--fp-white)", lineHeight: 1, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Active Paths */}
            <div style={{ marginBottom: 48 }}>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--fp-white)",
                  marginBottom: 20,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                Active Paths
              </h2>

              {activePaths.length === 0 ? (
                <div
                  style={{
                    padding: "48px 24px",
                    background: "var(--fp-surface)",
                    border: "1px solid var(--fp-border)",
                    borderRadius: 16,
                    textAlign: "center",
                  }}
                >
                  <p style={{ color: "var(--fp-text-muted)", marginBottom: 20, fontSize: 15 }}>
                    You haven&apos;t started any paths yet.
                  </p>
                  <Link
                    href="/paths"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "12px 24px",
                      background: "var(--fp-accent)",
                      color: "var(--fp-black)",
                      borderRadius: 12,
                      fontWeight: 700,
                      fontSize: 14,
                      textDecoration: "none",
                    }}
                  >
                    Browse Paths
                  </Link>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {activePaths.map((p) => {
                    const pct = Math.round((p.completed / p.total) * 100);
                    return (
                      <Link
                        key={p.id}
                        href={`/paths/${p.id}`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 16,
                          padding: "20px 24px",
                          background: "var(--fp-surface)",
                          border: "1px solid var(--fp-border)",
                          borderRadius: 14,
                          textDecoration: "none",
                          transition: "border-color 0.2s, transform 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "var(--fp-border-2)";
                          e.currentTarget.style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "var(--fp-border)";
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        <div
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 10,
                            background: `${p.color}20`,
                            border: `1px solid ${p.color}30`,
                            flexShrink: 0,
                          }}
                        />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{ fontSize: 15, fontWeight: 600, color: "var(--fp-white)", marginBottom: 8 }}>
                            {p.title}
                          </p>
                          <div style={{ height: 4, background: "var(--fp-surface-2)", borderRadius: 4, overflow: "hidden" }}>
                            <div
                              style={{
                                height: "100%",
                                width: `${pct}%`,
                                background: p.color,
                                borderRadius: 4,
                                transition: "width 0.4s ease",
                              }}
                            />
                          </div>
                        </div>
                        <span style={{ fontSize: 13, color: "var(--fp-text-muted)", fontWeight: 600, flexShrink: 0 }}>
                          {pct}%
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div style={{ marginBottom: 80 }}>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--fp-white)",
                  marginBottom: 20,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                Quick Actions
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
                {quickActions.map(({ label, href, icon: Icon, desc }) => (
                  <Link
                    key={label}
                    href={href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "20px 20px",
                      background: "var(--fp-surface)",
                      border: "1px solid var(--fp-border)",
                      borderRadius: 14,
                      textDecoration: "none",
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
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: "rgba(170,168,255,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={18} color="var(--fp-accent)" />
                    </div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 600, color: "var(--fp-white)", marginBottom: 2 }}>{label}</p>
                      <p style={{ fontSize: 12, color: "var(--fp-text-muted)" }}>{desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
