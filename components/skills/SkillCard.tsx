"use client";

import ScrollAnimation from "@/components/shared/ScrollAnimation";
import { SimpleIcon } from "@/components/shared/SimpleIcon";
import { Skill } from "./skills-data";
import * as SimpleIcons from "simple-icons";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  // Check if icon exists in simple-icons
  const iconKey = skill.icon as keyof typeof SimpleIcons;
  const iconExists = iconKey && SimpleIcons[iconKey];

  return (
    <ScrollAnimation direction="up" delay={0.05 + index * 0.05}>
      <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:scale-105 flex flex-col items-center justify-center min-h-[140px]">
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10 flex flex-col items-center gap-3">
          {iconExists ? (
            <SimpleIcon
              icon={iconKey}
              className="h-12 w-12 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary"
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
              {skill.name.charAt(0)}
            </div>
          )}
          <span className="text-sm font-medium text-center group-hover:text-primary transition-colors">
            {skill.name}
          </span>
        </div>
      </div>
    </ScrollAnimation>
  );
}

