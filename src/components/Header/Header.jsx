import React from "react";
import styles from "./Header.module.css";

const Header = ({ name }) => {
  return (
    <header className={styles.header}>
      {/* <!--  Skip link: Tab bosilganda ko'rinadi, #main ga olib boradi --> */}
      <a className={styles.skipLink} href="#main">
        Skip to main content
      </a>
      <h1>Sindor's Portfolio</h1>

      {/*  shartli render qilish: agar name da biror matn bo'lsa (bo'sh bo'lmasa), keyin <h2> ni chiqaradi */}

      {name && <h2> Welcome! {name}</h2>}

      <nav aria-label="Primary">
        <ul className={styles.navList}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact-form">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
