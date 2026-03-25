import { experiences } from "../../data/experience";
import { skillGroups } from "../../data/skills";
import { ExperienceItem, SkillCard } from "../ui/SkillCard";
import Section from "../layout/Section";

export default function SkillsExperienceSection() {
  return (
    <Section id="skills" title="Skills & Experience">
      <div className="skills-experience-layout">
        <div className="skills-column">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <div key={index} className="skill-group-card">
                <div className="group-header">
                  {Icon && <Icon size={20} />}
                  <h3>{group.category}</h3>
                </div>
                <div className="skill-list">
                  {group.skills.map((s, i) => (
                    <SkillCard key={i} skill={s} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="experience-column">
          <div className="timeline-container">
            {experiences.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
