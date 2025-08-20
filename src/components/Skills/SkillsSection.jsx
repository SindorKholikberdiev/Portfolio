import { skillsData } from "../../data/skills.js";

const SkillsSection = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skillsData.map((skill) => (
          <li key={skill.id}> {skill.name} </li>
        ))}
      </ul>
    </section>
  );
};
export default SkillsSection;
