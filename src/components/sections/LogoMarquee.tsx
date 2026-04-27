const categories = [
  "💪 Strength Training",
  "🏃 Running",
  "🧘 Yoga",
  "🚴 Cycling",
  "🥗 Nutrition",
  "⛹️ CrossFit",
  "🤸 Pilates",
  "🏊 Swimming",
  "🥊 Boxing",
  "🥋 Martial Arts",
  "📋 PT Certification",
  "⚕️ Rehab & Recovery",
];

const marqueeItems = [...categories, ...categories];

export default function LogoMarquee() {
  return (
    <section
      className="py-16 overflow-hidden"
      style={{ backgroundColor: "var(--fp-black)", borderTop: "1px solid var(--fp-border)", borderBottom: "1px solid var(--fp-border)" }}
    >
      <p
        className="text-center text-xs font-semibold uppercase tracking-widest mb-10"
        style={{ color: "var(--fp-text-muted)" }}
      >
        24+ Training Paths Across Every Discipline
      </p>

      <div className="relative flex overflow-hidden">
        <div className="flex gap-10 animate-marquee whitespace-nowrap shrink-0">
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className="text-base font-medium px-4 py-2 rounded-full"
              style={{
                color: "var(--fp-text-muted)",
                border: "1px solid var(--fp-border)",
                background: "var(--fp-surface)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
