// Fayl: src/components/Hero/Hero.jsx

import React from "react";
// We will use the Link component to navigate to other pages.
// Boshqa sahifalarga o'tish uchun Link komponentidan foydalanamiz.
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.heroTitle}>Sindor Kholikberdiev</h1>
      <p className={styles.heroSubtitle}>
        Frontend Developer | Building User-Friendly Web Experiences
      </p>
      <p className={styles.heroDescription}>
        I turn complex problems into simple, beautiful, and intuitive designs.
        Welcome to my digital space.
      </p>
      <div className={styles.buttonGroup}>
        {/* This button links to the Projects page. */}
        {/* Bu tugma Projects sahifasiga yo'naltiradi. */}
        <Link to="/projects" className={styles.heroButton}>
          View My Work
        </Link>
        {/* This is a secondary button linking to the Contact page. */}
        {/* Bu Contact sahifasiga yo'naltiruvchi ikkinchi darajali tugma. */}
        <Link
          to="/contact"
          className={`${styles.heroButton} ${styles.secondaryButton}`}
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
};

export default Hero;
