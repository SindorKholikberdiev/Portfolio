import React from "react";
import { skillsData } from "../../data/skillsData.js";
import styles from "./Skills.module.css";

const SkillsSection = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul className={styles.skillsList}>
        {skillsData.map((skill) => (
          <li key={skill.id}> {skill.name} </li>
        ))}
      </ul>
    </section>
  );
};
export default SkillsSection;
