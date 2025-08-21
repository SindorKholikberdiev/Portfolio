import styles from "./About.module.css";
const About = () => {
  return (
    //  About section: anchor id = "about"
    <section id="about">
      <h2>About me</h2>
      {/* flex container 2 ustun rasm + matn  */}
      <div className={styles.aboutWrap}>
        {/* <!-- rasm ustuni --> */}
        <img
          src="img/1.jpg"
          srcSet="img/1.jpg 1x, img/1.jpg 2x"
          width="280"
          height="280"
          alt="Sindor's portrait"
          className={styles.aboutPhoto}
        />

        {/* <!-- matn ustuni --> */}
        <div className={styles.aboutText}>
          <p>
            Hi, I'm Sindor Kholikberdiev, a web developer from Uzbekistan. I
            create clean, responsive websites and applications.
          </p>
          <p>
            I love coding, learning new technologies, and building projects that
            make a difference.
          </p>
          {/* <!-- CTA tugma: Contact bo'limiga olib boradi --> */}
          <a className="btn" href="#contact-info">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
