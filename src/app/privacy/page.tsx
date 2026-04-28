import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Privacy Policy — FitPath",
};

export default function PrivacyPage() {
  const section = (title: string, content: string) => (
    <div style={{ marginBottom: 40 }}>
      <h2
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: "var(--fp-white)",
          marginBottom: 12,
          fontFamily: "var(--font-dm-sans), sans-serif",
        }}
      >
        {title}
      </h2>
      <p style={{ fontSize: 15, color: "var(--fp-text-muted)", lineHeight: 1.75 }}>{content}</p>
    </div>
  );

  return (
    <>
      <Nav />
      <main style={{ minHeight: "100vh", backgroundColor: "var(--fp-black)" }}>
        <section style={{ paddingTop: 96, paddingBottom: 96 }}>
          <div className="fp-container" style={{ maxWidth: 680 }}>
            <p className="fp-eyebrow">Legal</p>
            <h1
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--fp-white)",
                marginBottom: 12,
              }}
            >
              Privacy Policy
            </h1>
            <p style={{ fontSize: 14, color: "var(--fp-text-muted)", marginBottom: 56 }}>
              Last updated: April 28, 2026
            </p>

            <div
              style={{
                padding: "20px 24px",
                background: "rgba(170,168,255,0.06)",
                border: "1px solid rgba(170,168,255,0.15)",
                borderRadius: 12,
                marginBottom: 48,
                fontSize: 14,
                color: "var(--fp-text-muted)",
                lineHeight: 1.65,
              }}
            >
              <strong style={{ color: "var(--fp-accent)" }}>Demo application:</strong> FitPath is a portfolio
              project. All data (accounts, progress) is stored locally in your browser&apos;s localStorage.
              No data is transmitted to any server or third party.
            </div>

            {section(
              "1. Information We Collect",
              "FitPath stores your name, email address, and training progress exclusively in your browser's localStorage. This data never leaves your device and is not transmitted to any server, third party, or analytics service."
            )}
            {section(
              "2. How We Use Your Information",
              "Your information is used solely to provide a personalized experience within the app: displaying your name, saving your progress across training paths, and restoring your session on return visits."
            )}
            {section(
              "3. Data Storage",
              "All data is stored in your browser's localStorage under the keys 'fitpath_users', 'fitpath_session', and 'fitpath_progress_[path-id]'. You can clear this data at any time by clearing your browser's local storage or by using your browser's developer tools."
            )}
            {section(
              "4. Cookies",
              "FitPath does not use cookies. Session persistence is handled entirely through localStorage, which is not transmitted with HTTP requests."
            )}
            {section(
              "5. Third-Party Services",
              "FitPath does not integrate with any third-party analytics, advertising, or tracking services. No data is shared with or sold to third parties."
            )}
            {section(
              "6. Children's Privacy",
              "FitPath is not directed at children under 13. We do not knowingly collect information from children."
            )}
            {section(
              "7. Changes to This Policy",
              "We may update this Privacy Policy occasionally. Continued use of the service after changes constitutes acceptance of the updated policy."
            )}
            {section(
              "8. Contact",
              "Questions about this policy can be directed to the project repository on GitHub."
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
