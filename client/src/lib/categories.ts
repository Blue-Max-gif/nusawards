import {
  Trophy, Star, Heart, Users, Building2, Dumbbell, PenLine,
  Accessibility, BookOpen, GraduationCap, Megaphone, FlaskConical,
} from "lucide-react";

export type CategoryConfig = {
  icon: typeof Trophy;
  color: string;
  glow: string;
};

export const CATEGORY_CONFIG: Record<string, CategoryConfig> = {
  "Most Impactful NUSA Patron": {
    icon: Trophy,
    color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    glow: "ring-amber-500/30",
  },
  "Exemplary Leadership Award": {
    icon: Star,
    color: "text-yellow-300 border-yellow-400/30 bg-yellow-500/10",
    glow: "ring-yellow-400/30",
  },
  "Mentorship Personality of the Year": {
    icon: Heart,
    color: "text-orange-400 border-orange-500/30 bg-orange-500/10",
    glow: "ring-orange-400/30",
  },
  "Chapter Rep of the Year": {
    icon: Users,
    color: "text-amber-300 border-amber-400/30 bg-amber-400/10",
    glow: "ring-amber-400/30",
  },
  "Chapter of the Year": {
    icon: Building2,
    color: "text-yellow-400 border-yellow-500/30 bg-yellow-500/10",
    glow: "ring-yellow-400/30",
  },
  "Sportsperson of the Year": {
    icon: Dumbbell,
    color: "text-orange-300 border-orange-400/30 bg-orange-400/10",
    glow: "ring-orange-300/30",
  },
  "Blogger/Writer of the Year": {
    icon: PenLine,
    color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    glow: "ring-amber-500/30",
  },
  "Outstanding Student with Disability": {
    icon: Accessibility,
    color: "text-yellow-300 border-yellow-400/30 bg-yellow-400/10",
    glow: "ring-yellow-300/30",
  },
  "Patrons Award for Academic Excellence": {
    icon: BookOpen,
    color: "text-amber-300 border-amber-400/30 bg-amber-400/10",
    glow: "ring-amber-400/30",
  },
  "NUSA Alumni of the Year": {
    icon: GraduationCap,
    color: "text-orange-400 border-orange-500/30 bg-orange-500/10",
    glow: "ring-orange-400/30",
  },
  "Activist of the Year": {
    icon: Megaphone,
    color: "text-yellow-400 border-yellow-500/30 bg-yellow-500/10",
    glow: "ring-yellow-400/30",
  },
  "Best Student-Led Research Project": {
    icon: FlaskConical,
    color: "text-amber-300 border-amber-400/30 bg-amber-400/10",
    glow: "ring-amber-300/30",
  },
};

export const DEFAULT_CATEGORY: CategoryConfig = {
  icon: Trophy,
  color: "text-primary border-primary/30 bg-primary/10",
  glow: "ring-primary/30",
};

export function getCategoryConfig(category: string): CategoryConfig {
  return CATEGORY_CONFIG[category] || DEFAULT_CATEGORY;
}
