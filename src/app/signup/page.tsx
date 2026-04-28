"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dumbbell } from "lucide-react";
import { useAuth } from "@/lib/auth-context";

export default function SignupPage() {
  const { signup } = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setLoading(true);
    const result = await signup(name, email, password);
    setLoading(false);
    if (result.success) {
      router.push("/dashboard");
    } else {
      setError(result.error ?? "Something went wrong.");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "13px 16px",
    background: "var(--fp-surface-2)",
    border: "1px solid var(--fp-border-2)",
    borderRadius: 12,
    color: "var(--fp-white)",
    fontSize: 15,
    outline: "none",
    fontFamily: "var(--font-dm-sans), sans-serif",
    transition: "border-color 0.2s",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--fp-black)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
      }}
    >
      <div
        style={{
          position: "fixed",
          bottom: "-20%",
          left: "-10%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(127,158,248,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 440,
          background: "var(--fp-surface)",
          border: "1px solid var(--fp-border)",
          borderRadius: 20,
          padding: "40px 40px 36px",
          position: "relative",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 32,
            textDecoration: "none",
            opacity: 0.9,
          }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              background: "var(--fp-accent)",
              borderRadius: 9,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--fp-black)",
            }}
          >
            <Dumbbell size={18} strokeWidth={2} />
          </div>
          <span
            style={{
              fontWeight: 700,
              fontSize: 17,
              color: "var(--fp-white)",
              fontFamily: "var(--font-dm-sans), sans-serif",
              letterSpacing: "-0.3px",
            }}
          >
            FitPath
          </span>
        </Link>

        <h1
          style={{
            fontSize: 26,
            fontWeight: 700,
            color: "var(--fp-white)",
            marginBottom: 6,
            fontFamily: "var(--font-dm-sans), sans-serif",
            letterSpacing: "-0.4px",
          }}
        >
          Create your account
        </h1>
        <p style={{ fontSize: 14, color: "var(--fp-text-muted)", marginBottom: 32 }}>
          Free forever. Start tracking your training progress today.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label
              style={{
                display: "block",
                fontSize: 13,
                fontWeight: 600,
                color: "var(--fp-text-muted)",
                marginBottom: 8,
                letterSpacing: "0.02em",
              }}
            >
              FULL NAME
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Alex Johnson"
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "var(--fp-accent)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--fp-border-2)")}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: 13,
                fontWeight: 600,
                color: "var(--fp-text-muted)",
                marginBottom: 8,
                letterSpacing: "0.02em",
              }}
            >
              EMAIL
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "var(--fp-accent)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--fp-border-2)")}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: 13,
                fontWeight: 600,
                color: "var(--fp-text-muted)",
                marginBottom: 8,
                letterSpacing: "0.02em",
              }}
            >
              PASSWORD
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min. 6 characters"
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "var(--fp-accent)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--fp-border-2)")}
            />
          </div>

          {error && (
            <div
              style={{
                padding: "12px 16px",
                background: "rgba(239,68,68,0.08)",
                border: "1px solid rgba(239,68,68,0.2)",
                borderRadius: 10,
                fontSize: 13,
                color: "#f87171",
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              background: "var(--fp-accent)",
              color: "var(--fp-black)",
              border: "none",
              borderRadius: 12,
              fontSize: 15,
              fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
              transition: "opacity 0.2s, transform 0.15s",
              fontFamily: "var(--font-dm-sans), sans-serif",
              marginTop: 4,
            }}
            onMouseDown={(e) => !loading && ((e.currentTarget.style.transform = "scale(0.98)"))}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p
          style={{
            marginTop: 24,
            fontSize: 14,
            color: "var(--fp-text-muted)",
            textAlign: "center",
          }}
        >
          Already have an account?{" "}
          <Link
            href="/login"
            style={{ color: "var(--fp-accent)", fontWeight: 600, textDecoration: "none" }}
          >
            Sign in
          </Link>
        </p>
      </div>

      <p style={{ marginTop: 24, fontSize: 13, color: "rgba(255,255,255,0.25)", textAlign: "center" }}>
        Demo app — no real data is stored or transmitted.
      </p>
    </div>
  );
}
