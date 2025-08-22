// Import React and the CSS module for the footer.
import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // The main footer element. We apply our main container style to it.
    <footer className={styles.footerContainer}>
      {/* Footer navigation for quick jumps to sections. */}
      <nav aria-label="Footer">
        {/* In JSX, 'class' must be changed to 'className'. */}
        <ul className={styles.footerLinks}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>

      {/* The address tag is semantically correct for contact information. */}
      <address className={styles.address}>
        <a href="mailto:sindorkholikberdiev@gmail.com">
          sindorkholikberdiev@gmail.com
        </a>
      </address>

      {/* Copyright information. */}
      <small className={styles.copyright}>
        © 2025 Sindor Kholikberdiev. All rights reserved.
      </small>

      {/* A link to scroll back to the top of the page. */}
      <div className={styles.backToTopWrapper}>
        <a className={styles.backToTop} href="#top">
          Back to top &uarr;
        </a>
      </div>
    </footer>
  );
};

export default Footer;
