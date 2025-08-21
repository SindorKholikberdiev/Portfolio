// Import the React library.
import React from "react";

// Import the CSS module for this component.
import styles from "./ContactInfo.module.css";

// --- Import the paths to your SVG files ---
// Instead of importing them as components, we import them as simple strings (file paths).
// This method is universal and works with any build tool like Vite or Create React App.
import mailIconPath from "../../assets/svg/mail.svg";
import githubIconPath from "../../assets/svg/github.svg";
import phoneIconPath from "../../assets/svg/phone.svg";
import telegramIconPath from "../../assets/svg/send.svg";

// The main functional component for displaying contact information.
const ContactInfo = () => {
  return (
    // The main container div for the component.
    <div className={styles.contactInfoCard} id="contact-info">
      <h3>Contact Information</h3>
      <p>
        Feel free to reach out to me through any of the following channels. I'm
        always open to discussing new projects or creative ideas.
      </p>

      {/* An unordered list to hold the contact items. */}
      <ul className={styles.contactList}>
        {/* Each contact item is a list item. */}
        <li className={styles.contactItem}>
          {/* Use the standard <img> tag to display the SVG. */}
          {/* The 'src' attribute points to the imported file path. */}
          {/* The 'alt' attribute is important for accessibility. */}
          <img src={mailIconPath} alt="Email Icon" className={styles.icon} />
          <a href="mailto:sindorkholikberdiev@gmail.com">
            sindorkholikberdiev@gmail.com
          </a>
        </li>
        <li className={styles.contactItem}>
          <img src={githubIconPath} alt="Github Icon" className={styles.icon} />
          <a
            href="https://github.com/SindorKholikberdiev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li className={styles.contactItem}>
          <img src={phoneIconPath} alt="Phone Icon" className={styles.icon} />
          <a href="tel:+998909984090">+998 90 998 40 90</a>
        </li>
        <li className={styles.contactItem}>
          <img
            src={telegramIconPath}
            alt="Telegram Icon"
            className={styles.icon}
          />
          <a
            href="https://t.me/SindorKholikberdiev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </li>
      </ul>
    </div>
  );
};

// Export the component to be used in other files.
export default ContactInfo;
