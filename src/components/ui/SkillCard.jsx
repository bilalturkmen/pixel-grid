export const ExperienceItem = ({ exp }) => (
  <div className="experience-item">
    <div className="exp-dot"></div>
    <div className="exp-content">
      <span className="exp-period">{exp.period}</span>
      <h4>{exp.role}</h4>
      <h5>{exp.company}</h5>
      <p>{exp.description}</p>
    </div>
  </div>
);

export const SkillCard = ({ skill }) => (
  <div className="skill-item">
    <div className="skill-info">
      <span>{skill.name}</span>
      <span>{skill.level}%</span>
    </div>
    <div className="skill-bar-bg">
      <div
        className="skill-bar-fill"
        style={{ "--progress": `${skill.level}%` }}
      ></div>
    </div>
  </div>
);
