import React from "react";
import styles from "./aboutIntro.module.css";
import Image from "../../../../../public/assets/profilepic.png";
const AboutIntro = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <h2>
              About <span className={styles.highlight}>Me</span>
            </h2>
            <p>
              Hello! I’m <strong>Abhishek Namdev</strong> — a passionate{" "}
              <span className={styles.accentPurple}>MERN Stack Developer</span>{" "}
              from <strong>Naraingarh, Ambala</strong>.
            </p>
            <p>
              I build responsive, scalable, and modern web applications using
              technologies like React, Node.js, Express, and MongoDB.
            </p>

            <div className={styles.objectiveBox}>
              <h4>🎯 Career Objective</h4>
              <p>
                To grow as a versatile full-stack developer, crafting meaningful
                and user-focused digital experiences that solve real-world
                problems.
              </p>
            </div>
          </div>

          <div className={styles.aboutImage}>
            <img src={Image} alt="Abhishek Namdev Developer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
