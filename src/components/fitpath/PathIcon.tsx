import {
  Activity, Apple, Award, Bike, Calendar, ClipboardList,
  Dumbbell, Flame, Heart, HeartPulse, Leaf, Medal, Moon,
  Move, Scale, Shield, Sparkles, Target, Trophy, TrendingUp,
  Waves, Zap, Wrench, Search,
} from "lucide-react";
import type { LucideProps } from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  activity:       Activity,
  apple:          Apple,
  award:          Award,
  bike:           Bike,
  calendar:       Calendar,
  "clipboard-list": ClipboardList,
  dumbbell:       Dumbbell,
  flame:          Flame,
  heart:          Heart,
  "heart-pulse":  HeartPulse,
  leaf:           Leaf,
  medal:          Medal,
  moon:           Moon,
  move:           Move,
  scale:          Scale,
  shield:         Shield,
  sparkles:       Sparkles,
  target:         Target,
  trophy:         Trophy,
  "trending-up":  TrendingUp,
  waves:          Waves,
  zap:            Zap,
  wrench:         Wrench,
  search:         Search,
};

type Props = LucideProps & { name: string };

export default function PathIcon({ name, ...props }: Props) {
  const Icon = ICON_MAP[name] ?? Activity;
  return <Icon {...props} />;
}
