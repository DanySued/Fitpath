export type Path = {
  id: string;
  title: string;
  icon: string;
  color: string;
  desc: string;
  popular?: boolean;
};

export type PathCategory = "role" | "skill" | "bestpractices";

export const PATHS: Record<PathCategory, Path[]> = {
  role: [
    { id: "strength-training", title: "Strength Training", icon: "💪", color: "#CF7B4B", desc: "Build muscle and progressive strength through resistance training", popular: true },
    { id: "running", title: "Running", icon: "🏃", color: "#9DC499", desc: "Training progression from beginner to marathon runner", popular: true },
    { id: "yoga", title: "Yoga", icon: "🧘", color: "#CF7B4B", desc: "Yoga journey from basics to advanced asanas and mindfulness", popular: true },
    { id: "cycling", title: "Cycling", icon: "🚴", color: "#D4CCC4", desc: "Path to becoming a strong, efficient cyclist" },
    { id: "nutrition", title: "Nutrition Coaching", icon: "🥗", color: "#9DC499", desc: "Master nutrition science and meal planning" },
    { id: "crossfit", title: "CrossFit", icon: "⛹️", color: "#8A7F76", desc: "Training foundation for functional fitness and competition" },
    { id: "pilates", title: "Pilates", icon: "🤸", color: "#CF7B4B", desc: "Core strength and body control through pilates" },
    { id: "swimming", title: "Swimming", icon: "🏊", color: "#8A5230", desc: "Learn proper technique and endurance for swimming" },
    { id: "boxing", title: "Boxing", icon: "🥊", color: "#9DC499", desc: "Master stance, technique, and boxing fundamentals" },
    { id: "martial-arts", title: "Martial Arts", icon: "🥋", color: "#D4CCC4", desc: "Progress through belts and master martial arts discipline" },
    { id: "pt-certification", title: "Personal Training Cert", icon: "📋", color: "#CF7B4B", desc: "Become a certified personal trainer and coach" },
    { id: "rehab-therapy", title: "Rehab & Recovery", icon: "⚕️", color: "#8A7F76", desc: "Learn injury recovery and rehabilitation techniques" },
  ],
  skill: [
    { id: "strength-building", title: "Strength Building", icon: "🦵", color: "#CF7B4B", desc: "Programs to build muscle and increase max strength", popular: true },
    { id: "cardio-endurance", title: "Cardio Endurance", icon: "❤️", color: "#9DC499", desc: "Build cardiovascular health and aerobic capacity" },
    { id: "flexibility", title: "Flexibility & Mobility", icon: "🤲", color: "#8A5230", desc: "Increase range of motion and prevent injuries" },
    { id: "weight-loss", title: "Weight Loss", icon: "⚖️", color: "#9DC499", desc: "Science-backed program for sustainable weight loss", popular: true },
    { id: "muscle-building", title: "Muscle Building", icon: "💪", color: "#CF7B4B", desc: "Hypertrophy training to maximize muscle growth" },
    { id: "nutrition-basics", title: "Nutrition Fundamentals", icon: "🥬", color: "#D4CCC4", desc: "Learn macros, calories, and nutrition science", popular: true },
    { id: "5k-training", title: "5K Training", icon: "🏅", color: "#CF7B4B", desc: "8-week program to run a strong 5K" },
    { id: "marathon-training", title: "Marathon Training", icon: "🏆", color: "#8A7F76", desc: "16-week program to complete your first marathon" },
    { id: "core-strength", title: "Core Strength", icon: "🎯", color: "#D4CCC4", desc: "Build a stronger, more stable core" },
    { id: "athletic-performance", title: "Athletic Performance", icon: "🚀", color: "#CF7B4B", desc: "Enhance speed, power, and athletic ability" },
    { id: "recovery-protocols", title: "Recovery Protocols", icon: "😴", color: "#8A5230", desc: "Optimize recovery with sleep, stretching, and nutrition" },
    { id: "injury-prevention", title: "Injury Prevention", icon: "🛡️", color: "#9DC499", desc: "Prevent common injuries through smart training" },
  ],
  bestpractices: [
    { id: "recovery-techniques", title: "Recovery Techniques", icon: "🧖", color: "#CF7B4B", desc: "Best practices for active and passive recovery" },
    { id: "nutrition-strategy", title: "Nutrition Strategy", icon: "🍎", color: "#9DC499", desc: "Best practices for sports nutrition and meal timing" },
    { id: "training-programming", title: "Training Programming", icon: "📅", color: "#D4CCC4", desc: "Best practices for periodization and program design" },
    { id: "sleep-wellness", title: "Sleep & Wellness", icon: "🌙", color: "#CF7B4B", desc: "Best practices for sleep quality and recovery" },
  ],
};

export const ALL_PATHS: Path[] = [
  ...PATHS.role,
  ...PATHS.skill,
  ...PATHS.bestpractices,
];

export const STATS = [
  { value: "24+", label: "Training Paths", color: "#CF7B4B" },
  { value: "500K+", label: "Active Users", color: "#9DC499" },
  { value: "2.5M+", label: "Workouts Logged", color: "#D4CCC4" },
  { value: "100%", label: "Free Forever", color: "#8A5230" },
];

export const CATEGORY_LABELS: Record<PathCategory, string> = {
  role: "By Sport",
  skill: "By Goal",
  bestpractices: "Best Practices",
};
