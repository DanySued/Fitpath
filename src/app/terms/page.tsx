import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Terms of Service — FitPath",
};

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p style={{ fontSize: 14, color: "var(--fp-text-muted)", marginBottom: 56 }}>
              Last updated: April 28, 2026
            </p>

            {section(
              "1. Acceptance of Terms",
              "By accessing and using FitPath, you accept and agree to be bound by these Terms of Service. FitPath is a portfolio demonstration project, and these terms are provided for completeness."
            )}
            {section(
              "2. Use of the Service",
              "FitPath provides structured fitness training paths and progress tracking. You may use the service for personal, non-commercial purposes. You agree not to misuse the service or attempt to access it in unauthorized ways."
            )}
            {section(
              "3. User Accounts",
              "Accounts are stored locally in your browser. You are responsible for maintaining the confidentiality of your credentials. As a demo application, no account recovery mechanism is available — clearing your browser's localStorage will permanently delete your account."
            )}
            {section(
              "4. Health Disclaimer",
              "FitPath provides general fitness information for educational purposes only. Nothing on this platform constitutes medical advice. Always consult a qualified healthcare provider before beginning any new exercise program, particularly if you have a medical condition or injury."
            )}
            {section(
              "5. Intellectual Property",
              "All content, design, and code within FitPath is the property of Dany Sue. You may not reproduce or distribute any content without explicit written permission."
            )}
            {section(
              "6. Limitation of Liability",
              "FitPath is provided 'as is' without warranty of any kind. To the maximum extent permitted by law, Dany Sue shall not be liable for any indirect, incidental, or consequential damages arising from use of the service."
            )}
            {section(
              "7. Changes to Terms",
              "These terms may be updated at any time. Continued use of the service following any changes constitutes acceptance of the new terms."
            )}
            {section(
              "8. Governing Law",
              "These terms shall be governed by the laws of the applicable jurisdiction. Any disputes shall be resolved through good-faith negotiation."
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
