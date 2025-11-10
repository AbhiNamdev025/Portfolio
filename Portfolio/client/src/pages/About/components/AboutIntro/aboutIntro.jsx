import React from "react";
import styles from "./aboutIntro.module.css";
import { FaQuoteLeft } from "react-icons/fa";

const AboutIntro = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <h2>
            About <span className={styles.highlight}>Me</span>
          </h2>

          <div className={styles.quoteBox}>
            <FaQuoteLeft className={styles.quoteIcon} />
            <p className={styles.tagline}>
              “Code is how I express ideas, creativity, and problem-solving.”
            </p>
          </div>

          <p className={styles.description}>
            Hello! I’m <strong>Abhishek Namdev</strong> — a passionate{" "}
            <span className={styles.accentPurple}>MERN Stack Developer</span>{" "}
            from <strong>Naraingarh, Ambala</strong>.  
            I focus on building smooth, scalable, and visually engaging digital
            experiences with a blend of clean design and powerful backend logic.
          </p>

          <p className={styles.description}>
            I love exploring modern web tools, improving my skills every day,
            and turning ideas into real, impactful web applications.
          </p>

          <div className={styles.divider}></div>

          <p className={styles.motto}>
            <strong>“Create, Innovate, and Keep Learning.”</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
