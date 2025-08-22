// Fayl: src/components/Skills/SkillsSection.jsx

import React from "react";
// We import the data from our new file.
// Ma'lumotlarni yangi faylimizdan import qilamiz.
import { skillsData } from "../../data/skillsData.jsx";
import styles from "./Skills.module.css";

const SkillsSection = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2>My Skills</h2>
      {/* The list now uses a new class for flexbox layout. */}
      {/* Ro'yxat endi flexbox joylashuvi uchun yangi klassdan foydalanadi. */}
      <ul className={styles.skillsGrid}>
        {skillsData.map((skill) => (
          // Each list item now contains an icon and the name.
          // Har bir ro'yxat elementi endi ikonka va nomni o'z ichiga oladi.
          <li key={skill.id} className={styles.skillItem}>
            <span className={styles.skillIcon}>{skill.icon}</span>
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;
