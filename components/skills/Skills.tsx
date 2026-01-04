"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";
import { SectionBackground } from "@/components/shared/SectionBackground";
import { SkillsHeader } from "./SkillsHeader";
import { SkillCard } from "./SkillCard";
import { skills, categories } from "./skills-data";
import ScrollAnimation from "@/components/shared/ScrollAnimation";

export default function Skills() {
  const { mousePosition, ref } = useMousePosition();

  // Group skills by category
  const groupedSkills = categories.map((category) => ({
    category,
    skills: skills.filter((skill) => skill.category === category),
  }));

  return (
    <section
      ref={ref}
      id="skills"
      className="relative bg-gradient-to-br from-muted/40 via-background to-primary/5 px-4 py-20 sm:px-6 lg:px-8 overflow-hidden"
    >
      <SectionBackground mousePosition={mousePosition} opacity={0.2} />
      <div className="relative mx-auto max-w-6xl z-10">
        <SkillsHeader />
        
        <div className="space-y-12">
          {groupedSkills.map((group, groupIndex) => (
            <ScrollAnimation
              key={group.category}
              direction="up"
              delay={0.1 + groupIndex * 0.1}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground/90">
                  {group.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {group.skills.map((skill, skillIndex) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={groupIndex * 10 + skillIndex}
                    />
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

