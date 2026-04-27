import { Dumbbell, Activity, Leaf, Bike, Apple, Flame, Target, Waves, Shield, Award, ClipboardList, HeartPulse } from "lucide-react";

const categories = [
  { icon: Dumbbell, label: "Strength Training" },
  { icon: Activity, label: "Running" },
  { icon: Leaf, label: "Yoga" },
  { icon: Bike, label: "Cycling" },
  { icon: Apple, label: "Nutrition" },
  { icon: Flame, label: "CrossFit" },
  { icon: Target, label: "Pilates" },
  { icon: Waves, label: "Swimming" },
  { icon: Shield, label: "Boxing" },
  { icon: Award, label: "Martial Arts" },
  { icon: ClipboardList, label: "PT Certification" },
  { icon: HeartPulse, label: "Rehab & Recovery" },
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
          {marqueeItems.map(({ icon: Icon, label }, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-base font-medium px-4 py-2 rounded-full"
              style={{
                color: "var(--fp-text-muted)",
                border: "1px solid var(--fp-border)",
                background: "var(--fp-surface)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              <Icon size={14} strokeWidth={1.5} />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
