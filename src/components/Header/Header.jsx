import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

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

      <nav aria-label="Primary" className={styles.navWrapper}>
        <ul className={styles.navList}>
          <li>
            <Link to="/about">About</Link>
          </li>{" "}
          {/* O'ZGARDI */}
          <li>
            <Link to="/projects">Projects</Link>
          </li>{" "}
          {/* O'ZGARDI */}
          {/* Hozircha qolganlarini ham o'zgartirib qo'y */}
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
