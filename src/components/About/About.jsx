// Import React and the CSS module for this component.
import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css";

// Import your professional photo. Make sure the path is correct.
// O'zingizning professional rasmingizni import qiling. Yo'l to'g'ri ekanligiga ishonch hosil qiling.
import profileImage from "../../assets/img/img-profile-photo.avif"; // Example path

const About = () => {
  return (
    // The main section container. The 'id' is important for anchor links from the navigation.
    // Asosiy section konteyneri. 'id' navigatsiyadagi anchor havolalar uchun muhim.
    <section id="about" className={styles.aboutSection}>
      {/* A wrapper for the content to control max-width and centering. */}
      {/* Kontentni maksimal kenglik va markazlashtirishni nazorat qilish uchun o'rovchi. */}
      <div className={styles.aboutContainer}>
        {/* Column 1: Image */}
        {/* 1-ustun: Rasm */}
        <div className={styles.imageWrapper}>
          <img
            src={profileImage}
            alt="A professional portrait of Sindor Kholikberdiev"
            className={styles.profileImage}
          />
        </div>

        {/* Column 2: Text Content */}
        {/* 2-ustun: Matnli kontent */}
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.paragraph}>
            Hi, I'm Sindor Kholikberdiev, a passionate Frontend Developer based
            in Uzbekistan. I specialize in building clean, responsive, and
            user-friendly web applications using modern technologies like React.
          </p>
          <p className={styles.paragraph}>
            I love the process of turning ideas into reality through code. My
            goal is to not only write clean and efficient code but also to
            create digital experiences that are intuitive and enjoyable for
            everyone. I'm constantly learning and exploring new technologies to
            improve my skills.
          </p>

          {/* A clear call-to-action button that links to the contact section. */}
          {/* Kontakt bo'limiga yo'naltiruvchi aniq harakatga chaqiruv tugmasi. */}
          <Link to="/contact" className={styles.contactButton}>
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
