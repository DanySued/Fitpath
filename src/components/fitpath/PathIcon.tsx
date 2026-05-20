import {
  Activity, Apple, Award, Bike, Calendar, CalendarDays,
  CheckCircle, ClipboardList, Dumbbell, Flame, Heart, HeartPulse,
  Layers, Leaf, Medal, Moon, Move, Pencil, Route,
  Scale, Search, Shield, Sparkles, Target, Trophy,
  TrendingUp, Waves, Wrench, Zap,
} from "lucide-react";
import type { LucideIcon, LucideProps } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  activity:         Activity,
  apple:            Apple,
  award:            Award,
  bike:             Bike,
  calendar:         Calendar,
  "calendar-days":  CalendarDays,
  "check-circle":   CheckCircle,
  "clipboard-list": ClipboardList,
  dumbbell:         Dumbbell,
  flame:            Flame,
  heart:            Heart,
  "heart-pulse":    HeartPulse,
  layers:           Layers,
  leaf:             Leaf,
  medal:            Medal,
  moon:             Moon,
  move:             Move,
  pencil:           Pencil,
  route:            Route,
  scale:            Scale,
  search:           Search,
  shield:           Shield,
  sparkles:         Sparkles,
  target:           Target,
  trophy:           Trophy,
  "trending-up":    TrendingUp,
  waves:            Waves,
  wrench:           Wrench,
  zap:              Zap,
};

export function getIcon(name: string): LucideIcon | null {
  return ICON_MAP[name] ?? null;
}

type Props = LucideProps & { name: string };

export default function PathIcon({ name, ...props }: Props) {
  const Icon = ICON_MAP[name] ?? Activity;
  return <Icon {...props} />;
}
